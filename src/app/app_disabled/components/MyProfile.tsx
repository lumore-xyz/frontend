"use client";

import Icon from "@/components/icon";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { deletePost, startHaloKycVerification } from "@/lib/apis";
import { getUser } from "@/service/storage";
import {
  calculateAge,
  convertHeight,
  distanceDisplay,
  languageDisplay,
} from "@/utils/helpers";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { extractFullAddressParts } from "../context/LocationProvider";
import { calculateProfileAndPreferenceCompletion } from "./profile/view/completion";
import InfoItem from "./profile/view/InfoItem";
import PostCard from "./profile/view/PostCard";
import ThisOrThatAnswersCarousel from "./profile/view/ThisOrThatAnswersCarousel";
import SecondaryActionsSheet from "./SecondaryActionsSheet";

const MyProfile = ({
  user,
  posts,
  preferences,
}: {
  user: any;
  posts: any;
  preferences?: any;
}) => {
  const queryClient = useQueryClient();
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [startingVerification, setStartingVerification] = useState(false);
  const [dismissOptionalSetup, setDismissOptionalSetup] = useState(false);
  const searchParams = useSearchParams();
  const userId = getUser()._id || "";

  const traits = [
    user?.dob && { icon: "HiOutlineCake", value: calculateAge(user.dob) },
    user?.gender && { icon: "HiOutlineUser", value: user.gender },
    user?.orientation && { icon: "IoMagnet", value: user.orientation },
    user?.height && { icon: "FaRuler", value: convertHeight(user.height) },
    user?.location?.formattedAddress && {
      icon: "MdOutlineLocationOn",
      value: extractFullAddressParts(user.location.formattedAddress, [
        "district",
      ]).district,
    },
    user?.diet && { icon: "MdOutlineFastfood", value: user.diet },
    user?.zodiacSign && { icon: "TbZodiacVirgo", value: user.zodiacSign },
    user?.lifestyle?.drinking && {
      icon: "FaGlassMartiniAlt",
      value: user.lifestyle.drinking,
    },
    user?.lifestyle?.smoking && {
      icon: "FaSmoking",
      value: user.lifestyle.smoking,
    },
    user?.lifestyle?.pets && { icon: "FaPaw", value: user.lifestyle.pets },
    user?.bloodGroup && { icon: "MdOutlineBloodtype", value: user.bloodGroup },
  ].filter(Boolean) as { icon: string; value: string | number }[];

  const isOwner = userId === user?._id;
  const showOptionalSetup =
    searchParams.get("showOptionalSetup") === "1" && !dismissOptionalSetup;

  const handleDeletePost = async (post: any) => {
    if (!post?._id) return;
    const confirmDelete = window.confirm(
      "Delete this post? This cannot be undone.",
    );
    if (!confirmDelete) return;

    try {
      setDeletingId(post._id);
      await deletePost(post._id);
      await queryClient.invalidateQueries({
        queryKey: ["user posts", user?._id],
      });
    } catch (error) {
      console.error(error);
    } finally {
      setDeletingId(null);
    }
  };

  const handleStartVerification = async () => {
    try {
      setStartingVerification(true);
      const response = await startHaloKycVerification();

      if (response?.verificationUrl) {
        window.location.assign(response.verificationUrl);
        return;
      }

      console.error("Verification link was not returned. Please try again.");
    } catch (error: any) {
      console.error(error);
      const message =
        error?.response?.data?.error ||
        error?.response?.data?.message ||
        "Unable to start verification right now.";
      console.error(message);
    } finally {
      setStartingVerification(false);
    }
  };

  const { profileCompletion, preferenceCompletion } = useMemo(
    () => calculateProfileAndPreferenceCompletion(user, preferences),
    [user, preferences],
  );

  return (
    <div className="bg-ui-background/10 p-4 h-full overflow-y-auto">
      <div className="w-full max-w-3xl mx-auto">
        <div className="my-3">
          <div className="flex items-center justify-start gap-4">
            {user?.profilePicture ? (
              <div className="relative h-20 w-20 aspect-square rounded-full overflow-hidden border border-ui-shade/10">
                <picture>
                  <img
                    src={user.profilePicture}
                    alt="Profile picture"
                    className={`${user?.isViewerUnlockedByUser ? "" : "blur-xs"} object-cover w-full h-full`}
                  />
                </picture>
              </div>
            ) : (
              <div className="h-20 w-20 bg-ui-background border border-ui-shade/10 aspect-square rounded-full" />
            )}
            <div className="space-y-1">
              <h3 className="text-xl font-medium flex items-center justify-start gap-1">
                {user?.isViewerUnlockedByUser &&
                user?.realName &&
                user.nickname ? (
                  <>
                    <span>{user.realName}</span>
                    <span className="text-ui-shade/60"> ({user.nickname})</span>
                  </>
                ) : (
                  <span>{user.nickname ? user.nickname : user?.username}</span>
                )}{" "}
                {user?.isVerified ? (
                  <Icon name="MdVerified" className="text-ui-highlight" />
                ) : (
                  <Icon name="MdOutlineVerified" className="text-ui-shade/10" />
                )}
              </h3>
              <div className="flex items-center justify-start gap-2">
                {user?.dob ? (
                  <div className="flex items-center justify-center gap-1 flex-shrink-0">
                    <Icon
                      name="HiOutlineCake"
                      className="text-xl flex-shrink-0"
                    />
                    <p>{calculateAge(user?.dob)}</p>
                  </div>
                ) : null}
                {user?.gender ? (
                  <div className="flex items-center justify-center gap-1 flex-shrink-0">
                    <Icon
                      name="HiOutlineUser"
                      className="text-xl flex-shrink-0"
                    />
                    <p>{user?.gender}</p>
                  </div>
                ) : null}
                <div className="flex items-center justify-center gap-1 flex-shrink-0">
                  <Icon
                    name="RiPinDistanceLine"
                    className="text-xl flex-shrink-0"
                  />
                  <p>{distanceDisplay(user?.distance || 0)}</p>
                </div>
              </div>
            </div>
          </div>
          {user?.bio ? <p className="text-lg my-2">{user?.bio}</p> : null}
          <div className="my-3">
            {isOwner ? (
              <div className="border border-ui-shade/10 bg-ui-light rounded-xl p-1 flex items-center justify-start w-full flex-wrap">
                <Link className="flex-1" href="/app/profile/edit">
                  <Button variant="default" className="w-full items-center">
                    Edit Profile <Icon name="FaUserPen" />
                  </Button>
                </Link>
                <div className="">
                  <SecondaryActionsSheet
                    title="Profile Actions"
                    actions={[
                      {
                        label: "Edit preferences",
                        href: "/app/edit-preferences",
                        icon: "RiSettings3Line",
                      },
                      {
                        label: `Credits: ${user?.credits ?? 0}`,
                        href: "/app/credits",
                        icon: "FaCoins",
                      },
                      {
                        label: "Referral",
                        href: "/app/referral",
                        icon: "HiOutlineSparkles",
                      },
                      {
                        label: "Play games",
                        href: "/app/games",
                        icon: "IoGameControllerOutline",
                      },
                      ...(user?.isVerified
                        ? []
                        : [
                            {
                              label:
                                user?.verificationStatus === "pending"
                                  ? "Verification pending"
                                  : startingVerification
                                    ? "Redirecting to verification..."
                                    : "Verify myself",
                              icon: "MdOutlineVerified",
                              onClick: () => {
                                if (
                                  !startingVerification &&
                                  user?.verificationStatus !== "pending"
                                ) {
                                  void handleStartVerification();
                                }
                              },
                            },
                          ]),
                    ]}
                  />
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {isOwner && showOptionalSetup ? (
          <div className="border border-ui-shade/10 rounded-xl p-4 bg-ui-light shadow-sm mb-3">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm text-ui-shade/70">Optional setup</p>
                <p className="text-xs text-ui-shade/60 mt-1">
                  You are ready to use the app. Add these details anytime for
                  better results.
                </p>
              </div>
              <Button
                variant="ghost"
                className="text-xs px-2 py-1 h-auto"
                onClick={() => setDismissOptionalSetup(true)}
              >
                Skip for now
              </Button>
            </div>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              <Link href="/app/user-settings">
                <Button variant="outline" className="w-full justify-between">
                  Add email/phone <Icon name="IoSettingsOutline" />
                </Button>
              </Link>
              <Link href="/app/edit-preferences">
                <Button variant="outline" className="w-full justify-between">
                  Add lifestyle preferences <Icon name="RiSettings3Line" />
                </Button>
              </Link>
              <Link href="/app/profile/edit">
                <Button variant="outline" className="w-full justify-between">
                  Add profile details <Icon name="FaUserPen" />
                </Button>
              </Link>
              <Link href="/app/referral">
                <Button variant="outline" className="w-full justify-between">
                  Apply referral code <Icon name="HiOutlineSparkles" />
                </Button>
              </Link>
            </div>
          </div>
        ) : null}

        {isOwner ? (
          <div className="border border-ui-shade/10 rounded-xl p-4 bg-ui-light shadow-sm mb-3">
            <p className="text-sm text-ui-shade/70">Profile health</p>
            <p className="text-xs text-ui-shade/60 mt-1">
              Stronger profiles get more matches.
            </p>
            <div className="mt-4">
              <div className="flex items-center justify-between text-sm text-ui-shade">
                <span>Profile completion</span>
                <span>{profileCompletion}%</span>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-ui-shade/10">
                <div
                  className="h-2 rounded-full bg-ui-highlight"
                  style={{ width: `${profileCompletion}%` }}
                />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between text-sm text-ui-shade">
                <span>Preference completion</span>
                <span>{preferenceCompletion}%</span>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-ui-shade/10">
                <div
                  className="h-2 rounded-full bg-ui-shade"
                  style={{ width: `${preferenceCompletion}%` }}
                />
              </div>
            </div>
          </div>
        ) : null}

        <div className="bg-ui-background/10 border border-ui-shade/10 rounded-xl px-4 pb-0 shadow-sm">
          <div className="w-full py-2 border-b border-ui-shade/10">
            <div className="flex items-center justify-start gap-2 w-full flex-wrap">
              {traits.map((trait, index) => (
                <InfoItem key={index} icon={trait.icon} value={trait.value} />
              ))}
            </div>
          </div>
          {user?.work ? (
            <>
              <div className="flex items-center justify-start gap-2 py-2">
                <div className="h-6 w-6 flex items-center justify-center flex-shrink-0 aspect-square">
                  <Icon
                    name="MdOutlineWorkOutline"
                    className="text-xl flex-shrink-0"
                  />
                </div>
                {user?.work}
              </div>
              <Separator />
            </>
          ) : null}
          {user?.institution ? (
            <>
              <div className="flex items-center justify-start gap-2 py-2">
                <div className="h-6 w-6 flex items-center justify-center flex-shrink-0 aspect-square">
                  <Icon
                    name="LuGraduationCap"
                    className="text-xl flex-shrink-0"
                  />
                </div>
                {user?.institution}
              </div>
              <Separator />
            </>
          ) : null}
          {user?.religion ? (
            <>
              <div className="flex items-center justify-start gap-2 py-2">
                <div className="h-6 w-6 flex items-center justify-center flex-shrink-0 aspect-square">
                  <Icon
                    name="HiOutlineBookOpen"
                    className="text-xl flex-shrink-0"
                  />
                </div>
                {user?.religion}
              </div>
              <Separator />
            </>
          ) : null}
          {user?.homeTown ? (
            <>
              <div className="flex items-center justify-start gap-2 py-2">
                <div className="h-6 w-6 flex items-center justify-center flex-shrink-0 aspect-square">
                  <Icon
                    name="HiOutlineHome"
                    className="text-xl flex-shrink-0"
                  />
                </div>
                {user?.homeTown}
              </div>
              <Separator />
            </>
          ) : null}
          {user?.maritalStatus ? (
            <>
              <div className="flex items-center justify-start gap-2 py-2">
                <div className="h-6 w-6 flex items-center justify-center flex-shrink-0 aspect-square">
                  <Icon name="GiRingBox" className="text-xl flex-shrink-0" />
                </div>
                {user?.maritalStatus}
              </div>
              <Separator />
            </>
          ) : null}
          {user?.languages?.length > 0 ? (
            <>
              <div className="flex items-center justify-start gap-2 py-2">
                <div className="h-6 w-6 flex items-center justify-center flex-shrink-0 aspect-square">
                  <Icon
                    name="HiOutlineLanguage"
                    className="text-xl flex-shrink-0"
                  />
                </div>
                {languageDisplay(user.languages)?.join(", ")}
              </div>
              <Separator />
            </>
          ) : null}
          {user?.personalityType ? (
            <div className="flex items-center justify-start gap-2 py-2">
              <div className="h-6 w-6 flex items-center justify-center flex-shrink-0 aspect-square">
                <Icon name="LuVenetianMask" className="text-xl flex-shrink-0" />
              </div>
              {user?.personalityType}
            </div>
          ) : null}
        </div>

        <div className="flex flex-col gap-2 mt-3">
          <ThisOrThatAnswersCarousel
            profileUserId={user?._id}
            isOwner={isOwner}
          />
          {posts?.length
            ? posts?.map((post: any) => (
                <PostCard
                  key={post._id}
                  post={post}
                  isOwner={isOwner}
                  isDeleting={deletingId === post._id}
                  onDelete={handleDeletePost}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;

