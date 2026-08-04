import { apiClient } from "@/service/api-client";
import { getUser } from "@/service/storage";
import axios from "axios";
import Cookies from "js-cookie";
import { assertImageIsSafe } from "./nsfw.client";

/* -------------------------------------------------------------------------- */
/*                              External API Call                             */
/* -------------------------------------------------------------------------- */
export const getFormattedAddress = async (lat: number, lng: number) => {
  const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`;
  const response = await axios.get(url, {
    headers: { "User-Agent": "Lumore/1.0" }, // Required by OSM
  });
  return response.data.display_name || null;
};

export interface LocationWritePayload {
  latitude: number;
  longitude: number;
  formattedAddress?: string | null;
}

/* -------------------------------------------------------------------------- */
/*                               Auth & Profile                               */
/* -------------------------------------------------------------------------- */
// export const signupUser = async (data: {
//   username: string;
//   email: string;
//   password: string;
//   location: {
//     type: string;
//     coordinates: number[];
//     formattedAddress: string;
//   };
// }) => {
//   const response = await apiClient.post("/auth/signup", data);
//   return response.data;
// };

export const setNewPassword = async (data: { newPassword: string }) => {
  const response = await apiClient.post("/auth/set-password", data);
  return response.data;
};

export const checkUsernameAvailability = async (username: string) => {
  const response = await apiClient.get(`/auth/check-username/${username}`);
  return response.data.isUnique;
};

export const updateUserData = async (data: any) => {
  const { _id: userId } = getUser();
  const response = await apiClient.patch(`/profile/${userId}`, data);
  return response.data;
};
export const updateUserLocation = async (data: LocationWritePayload) => {
  const { _id: userId } = getUser();
  const response = await apiClient.post(
    `/profile/${userId}/update-location`,
    {
      latitude: data.latitude,
      longitude: data.longitude,
      formattedAddress: data.formattedAddress || undefined,
    },
  );
  return response.data;
};
export const findNearbyUsers = async () => {
  const { _id: userId } = getUser();
  const response = await apiClient.get(`/profile/${userId}/nearby`);
  return response.data;
};

export const updateFieldVisibility = async (
  userId: string,
  field: string,
  visibility: string,
) => {
  const response = await apiClient.patch(`/profile/${userId}/visibility`, {
    fields: { [field]: visibility },
  });
  return response.data;
};

export const updateUserPreferences = async (data: any) => {
  const { _id: userId } = getUser();
  const response = await apiClient.patch(
    `/profile/${userId}/preferences`,
    data,
  );
  return response.data;
};

export const startHaloKycVerification = async () => {
  const response = await apiClient.post("/halokyc/create-verification", {});
  return response.data;
};

/* -------------------------------------------------------------------------- */
/*                                   Slots                                    */
/* -------------------------------------------------------------------------- */
export const fetchUserSlots = async () => {
  const response = await apiClient.get("/slots");
  return response.data.data.slots;
};

export const createSlot = async () => {
  const response = await apiClient.post("/slots", {});
  return response.data.data.slot;
};

export const updateSlot = async (
  slotId: string,
  data: { profile?: string; roomId?: string },
) => {
  const response = await apiClient.patch(`/slots/${slotId}`, data);
  return response.data.data.slot;
};
/* -------------------------------------------------------------------------- */
/*                                   Inbox                                    */
/* -------------------------------------------------------------------------- */
export const fetchIbox = async (status = "active") => {
  const response = await apiClient.get(`/inbox?status=${status}`);
  return response.data;
};
export const fetchRoomData = async (roomId: string) => {
  const response = await apiClient.get(`/inbox/${roomId}`);
  return response.data;
};

/* -------------------------------------------------------------------------- */
/*                               Account Actions                              */
/* -------------------------------------------------------------------------- */
export const deleteAccount = async () => {
  const { _id: userId } = getUser();
  const response = await apiClient.delete(`/profile/${userId}`);
  return response.data;
};

/* -------------------------------------------------------------------------- */
/*                               File Upload                                  */
/* -------------------------------------------------------------------------- */
export interface UploadResponse {
  message: string;
  profilePicture: string;
}

export const uploadProfilePicture = async (
  file: File,
): Promise<UploadResponse> => {
  await assertImageIsSafe(file);

  const formData = new FormData();
  formData.append("profilePic", file);

  const { _id: userId } = getUser();

  const res = await apiClient.patch<UploadResponse>(
    `/profile/${userId}/update-profile-picture`,
    formData,
    { headers: { "Content-Type": "multipart/form-data" } },
  );

  return res.data;
};

/* -------------------------------------------------------------------------- */
/*                                  Messages                                  */
/* -------------------------------------------------------------------------- */
export const fetchRoomChat = async (roomId: string) => {
  const response = await apiClient.get(`/messages/${roomId}`);
  return response.data;
};

export const uploadChatImage = async (roomId: string, file: File) => {
  await assertImageIsSafe(file);

  const formData = new FormData();
  formData.append("image", file);

  const response = await apiClient.post(`/messages/${roomId}/image`, formData);

  return response.data as {
    message: string;
    imageUrl: string;
    imagePublicId: string;
  };
};

export const deleteTempChatImage = async (publicId: string) => {
  const response = await apiClient.delete(`/messages/image-temp`, {
    data: { publicId },
  });
  return response.data as { message: string };
};

/* -------------------------------------------------------------------------- */
/*                                  App Status                                */
/* -------------------------------------------------------------------------- */
export const fetchAppStatus = async () => {
  const response = await apiClient.get(`/status/app-status`);
  return response.data;
};

export const fetchPreferenceMatchCount = async () => {
  const response = await apiClient.get(`/status/match-available-count`);
  return response.data;
};

/* -------------------------------------------------------------------------- */
/*                                  Credits                                   */
/* -------------------------------------------------------------------------- */
export const fetchCreditsBalance = async () => {
  const response = await apiClient.get(`/credits/balance`);
  return response.data;
};

export const fetchCreditsHistory = async (params?: { page?: number; limit?: number }) => {
  const page = params?.page || 1;
  const limit = params?.limit || 20;
  const response = await apiClient.get(`/credits/history?page=${page}&limit=${limit}`);
  return response.data;
};

export const claimDailyCredits = async () => {
  const response = await apiClient.post(`/credits/daily-claim`);
  return response.data;
};

/* -------------------------------------------------------------------------- */
/*                                 Referral                                   */
/* -------------------------------------------------------------------------- */
export const fetchReferralSummary = async () => {
  const response = await apiClient.get(`/referral/summary`);
  return response.data;
};

export const applyReferralCode = async (code: string) => {
  const response = await apiClient.post(`/referral/apply`, { code });
  return response.data;
};

/* -------------------------------------------------------------------------- */
/*                           Push Notification                                */
/* -------------------------------------------------------------------------- */
export const subscribePushService = async (subscription: PushSubscription) => {
  console.log("subscribePushService", subscription);
  const response = await apiClient.post(`/push/subscribe`, {
    subscription: JSON.parse(JSON.stringify(subscription)),
  });
  return response.data;
};
export const unsubscribePushService = async (endpoint: string) => {
  const response = await apiClient.post(`/push/unsubscribe`, {
    endpoint,
  });
  return response.data;
};

/* -------------------------------------------------------------------------- */
/*                                Prompt                                      */
/* -------------------------------------------------------------------------- */
export const fetchPromptCategories = async () => {
  const response = await apiClient.get(`/prompt/categories`);
  return response.data;
};
export const fetchPromptsByCategories = async (category: string[]) => {
  const response = await apiClient.get(
    `/prompt/?category=${category.join(",")}`,
  );
  return response.data;
};
/* -------------------------------------------------------------------------- */
/*                                Posts                                       */
/* -------------------------------------------------------------------------- */
export const createPromptPost = async (post: any) => {
  const response = await apiClient.post(`/post`, post);
  return response.data;
};

export const createImagePost = async (params: {
  file: File;
  caption?: string;
  visibility?: string;
}) => {
  const { file, caption = "", visibility = "public" } = params;
  await assertImageIsSafe(file);

  const formData = new FormData();
  formData.append("type", "IMAGE");
  formData.append("visibility", visibility);
  formData.append("image", file);
  formData.append("content", JSON.stringify({ caption }));

  const response = await apiClient.post(`/post`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

export const createTextPost = async (post: {
  text: string;
  visibility?: string;
}) => {
  const payload = {
    type: "TEXT",
    visibility: post.visibility || "public",
    content: { text: post.text },
  };
  const response = await apiClient.post(`/post`, payload);
  return response.data;
};

export const getPostById = async (postId: string) => {
  const response = await apiClient.get(`/post/${postId}`);
  return response.data;
};

export const updatePost = async (
  postId: string,
  payload: { content?: any; visibility?: string },
) => {
  const response = await apiClient.put(`/post/${postId}`, payload);
  return response.data;
};

export const deletePost = async (postId: string) => {
  const response = await apiClient.delete(`/post/${postId}`);
  return response.data;
};

/* -------------------------------------------------------------------------- */
/*                               This Or That                                 */
/* -------------------------------------------------------------------------- */
export const fetchThisOrThatQuestions = async (limit = 20) => {
  const response = await apiClient.get(
    `/games/this-or-that/questions?limit=${limit}`,
  );
  return response.data;
};

export const fetchUserThisOrThatAnswers = async (params: {
  userId: string;
  page?: number;
  limit?: number;
}) => {
  const { userId, page = 1, limit = 10 } = params;
  const response = await apiClient.get(
    `/games/this-or-that/answers/${userId}?page=${page}&limit=${limit}`,
  );
  return response.data;
};

export const submitThisOrThatAnswer = async (params: {
  questionId: string;
  selection: "left" | "right";
}) => {
  const response = await apiClient.post(`/games/this-or-that/answers`, params);
  return response.data;
};

export const submitThisOrThatQuestion = async (payload: {
  leftOption: string;
  leftImage: File;
  rightOption: string;
  rightImage: File;
  category?: string;
}) => {
  await Promise.all([
    assertImageIsSafe(payload.leftImage),
    assertImageIsSafe(payload.rightImage),
  ]);

  const formData = new FormData();
  formData.append("leftOption", payload.leftOption);
  formData.append("rightOption", payload.rightOption);
  formData.append("leftImage", payload.leftImage);
  formData.append("rightImage", payload.rightImage);
  if (payload.category) {
    formData.append("category", payload.category);
  }

  const response = await apiClient.post(`/games/this-or-that/questions`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

/* -------------------------------------------------------------------------- */
/*                                 Moderation                                 */
/* -------------------------------------------------------------------------- */
export const submitChatFeedback = async (
  roomId: string,
  feedback: string,
  rating?: number
) => {
  const response = await apiClient.post(`/inbox/${roomId}/feedback`, {
    feedback,
    rating,
  });
  return response.data;
};

export const fetchReceivedFeedbacks = async () => {
  const response = await apiClient.get(`/inbox/feedback/received`);
  return response.data as Array<{
    _id: string;
    user: {
      _id: string;
      username?: string;
      nickname?: string;
      profilePicture?: string;
    };
    roomId?: {
      _id: string;
      createdAt?: string;
    };
    feedback?: string;
    reason?: string;
    rating?: number;
    createdAt: string;
  }>;
};

export const reportChatUser = async (
  roomId: string,
  category: string,
  reason: string,
  details?: string
) => {
  const response = await apiClient.post(`/inbox/${roomId}/report`, {
    category,
    reason,
    details,
  });
  return response.data;
};



