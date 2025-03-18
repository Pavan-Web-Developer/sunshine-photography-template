"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import toast from "react-hot-toast";

const handleApiError = (error, router) => {
  if (!error.response) {
    // Network or server error
    if (error?.code === "ERR_NETWORK") {
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
      router.replace("/");
      toast.error(
        "Unable to connect to server. Please check your internet connection."
      );
      return;
    }
  }

  switch (error.response?.status) {
    case 401:
      localStorage.removeItem("user");
      localStorage.removeItem("authToken");
      router.replace("/");
      toast.error(error.response?.data?.message || "Authentication failed");
      break;
    case 403:
      toast.error("You do not have permission to perform this action");
      break;
    case 404:
      toast.error("Requested resource not found");
      break;
    case 503:
      router.replace("/404");
      toast.error("Service temporarily unavailable");
      break;
    default:
      toast.error(error.response?.data?.message || "Something went wrong");
  }
  throw error;
};

const useAxios = () => {
  const router = useRouter();

  const callApi = useCallback(
    async ({ headers, ...rest }) => {
      try {
        const authToken = localStorage.getItem("authToken");
        const instance = axios.create({
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${authToken}`,
            ...headers,
          },
          validateStatus: (status) => status >= 200 && status <= 299,
        });

        // Add response interceptor
        instance.interceptors.response.use(
          (response) => response,
          (error) => handleApiError(error, router)
        );

        const { data } = await instance(rest);
        return data;
      } catch (error) {
        handleApiError(error, router);
      }
    },
    [router]
  );

  return callApi;
};

export default useAxios;
