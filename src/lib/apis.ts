import axios from "axios";
import Cookies from "js-cookie";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const signupUser = async (data: {
  username: string;
  password: string;
}) => {
  const response = await axios.post(`${API_URL}/auth/signup`, data);
  return response.data; // Returns { _id, username, email, token }
};

export const loginUser = async (data: {
  identifier: string;
  password: string;
}) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, data);
    return response.data; // Returns { _id, username, email, token }
  } catch (error: any) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      throw new Error(error.response.data.message || "Login failed");
    } else if (error.request) {
      // The request was made but no response was received
      throw new Error("No response from server. Please check your connection.");
    } else {
      // Something happened in setting up the request that triggered an Error
      throw new Error("Error setting up the request");
    }
  }
};

export const setNewPassword = async (data: { newPassword: string }) => {
  const token = Cookies.get("token");
  const response = await axios.post(`${API_URL}/auth/set-password`, data, {
    headers: {
      Authorization: `Bearer ${token}`, // Pass token in Authorization header
    },
  });
  return response.data; // Returns { _id, username, email, token }
};

export const checkUsernameAvailability = async (username: string) => {
  const response = await axios.get(
    `${API_URL}/auth/check-username/${username}`
  );
  return response.data.isUnique; // Returns true or false
};

export const updateUserData = async (data: any) => {
  const token = Cookies.get("token");
  const { _id: userId } = JSON.parse(Cookies.get("user") || "");

  const response = await axios.patch(`${API_URL}/profile/${userId}`, data, {
    headers: {
      Authorization: `Bearer ${token}`, // Pass token in Authorization header
    },
  });
  return response.data;
};

export const updateFieldVisibility = async (
  userId: string,
  field: string,
  visibility: string
) => {
  const token = Cookies.get("token");
  const response = await axios.patch(
    `${API_URL}/profile/${userId}/visibility`,
    { fields: { [field]: visibility } },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const updateUserPreferences = async (data: any) => {
  const token = Cookies.get("token");
  const { _id: userId } = JSON.parse(Cookies.get("user") || "");

  const response = await axios.patch(
    `${API_URL}/profile/${userId}/preferences`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const deleteAccount = async () => {
  const token = Cookies.get("token");
  const { _id: userId } = JSON.parse(Cookies.get("user") || "");

  const response = await axios.delete(`${API_URL}/profile/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const handleLogout = async (callback: () => void) => {
  try {
    Cookies.remove("user");
    Cookies.remove("token");
    callback();
  } catch (error) {
    console.error("Error logging out:", error);
  }
};
