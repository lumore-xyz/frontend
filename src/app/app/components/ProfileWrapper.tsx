"use client";
import React from "react";
import { useUser } from "../hooks/useUser";
import MyProfile from "./MyProfile";

interface ProfileWrapperProps {
  userId: string;
}

const ProfileWrapper = ({ userId }: ProfileWrapperProps) => {
  const { user, isLoading } = useUser(userId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Error loading user data</div>;
  }

  return <MyProfile user={user} />;
};

export default ProfileWrapper;
