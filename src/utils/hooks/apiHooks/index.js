"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useGetCountry } from "../useGetCountry";
import {
  categoryRoutes,
  contactRoutes,
  mediaRoutes,
  userRoutes,
} from "./route";
import useAxios from "./useAxios";

// Utility for handling API responses
const handleSuccess = (response) => {
  if (response?.message) {
    toast.success(response.message);
  }
  return response?.data;
};

// Utility for error handling
const handleError = (error) => {
  toast.error(error?.response?.data?.message || "Something went wrong");
};

// User Routes
export const useRegister = () => {
  const callApi = useAxios();
  return useMutation({
    mutationFn: (data) =>
      callApi({
        method: userRoutes.register.method,
        url: userRoutes.register.url,
        data,
      }),
    onError: handleError,
    onSuccess: handleSuccess,
  });
};

export const useLogin = () => {
  const callApi = useAxios();
  return useMutation({
    mutationFn: (data) =>
      callApi({
        method: userRoutes.login.method,
        url: userRoutes.login.url,
        data,
      }),
    onError: handleError,
    onSuccess: handleSuccess,
  });
};

export const useForgetPassword = () => {
  const callApi = useAxios();
  return useMutation({
    mutationFn: (data) =>
      callApi({
        method: userRoutes.forgetPassword.method,
        url: userRoutes.forgetPassword.url,
        data,
      }),
    onError: handleError,
    onSuccess: handleSuccess,
  });
};

export const useUpdatePassword = () => {
  const callApi = useAxios();
  return useMutation({
    mutationFn: (data) =>
      callApi({
        method: userRoutes.updatePassword.method,
        url: userRoutes.updatePassword.url,
        data,
      }),
    onError: handleError,
    onSuccess: handleSuccess,
  });
};

export const useGetMe = () => {
  const callApi = useAxios();
  return useQuery({
    queryKey: ["user", "me"],
    queryFn: () =>
      callApi({
        method: userRoutes.getMe.method,
        url: userRoutes.getMe.url,
      }),
  });
};

// Media Routes
export const useAddMedia = () => {
  const country = useGetCountry();
  const queryClient = useQueryClient();
  const callApi = useAxios();
  return useMutation({
    mutationFn: (data) => {
      const formData = new FormData();
      if (data.files) {
        data.files.forEach((file) => formData.append("files", file));
      }
      if (data.categoryId) {
        formData.append("categoryId", data.categoryId);
      }

      return callApi({
        method: mediaRoutes.addMedia.method,
        url: mediaRoutes.addMedia.url.replace(":country", country),
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
    onError: handleError,
    onSuccess: (response) => {
      handleSuccess(response);
      queryClient.invalidateQueries(["media", country]);
    },
  });
};

export const useDeleteMedia = () => {
  const country = useGetCountry();
  const queryClient = useQueryClient();
  const callApi = useAxios();
  return useMutation({
    mutationFn: (id) =>
      callApi({
        method: mediaRoutes.deleteMedia.method,
        url: mediaRoutes.deleteMedia.url
          .replace(":country", country)
          .replace(":id", id),
      }),
    onError: handleError,
    onSuccess: (response) => {
      handleSuccess(response);
      queryClient.invalidateQueries(["media", country]);
    },
  });
};

export const useGetMediaById = (id) => {
  const callApi = useAxios();
  return useQuery({
    queryKey: ["media", id],
    queryFn: () =>
      callApi({
        method: mediaRoutes.getMediaById.method,
        url: `${mediaRoutes.getMediaById.url}${id}`,
      }),
    enabled: !!id,
  });
};

export const useGetMediaByCategory = (categoryId, type = "all") => {
  const country = useGetCountry();
  const callApi = useAxios();
  return useQuery({
    queryKey: ["media", country, categoryId, type],
    queryFn: () =>
      callApi({
        method: mediaRoutes.getMediaByCategory.method,
        url: `${mediaRoutes.getMediaByCategory.url
          .replace(":country", country)
          .replace(":categoryId", categoryId)}`,
        params: { type },
      }),
  });
};

export const useGetAllCategoryMedia = (type = "all") => {
  const country = useGetCountry();
  const callApi = useAxios();
  return useQuery({
    queryKey: ["media", country, "all", type],
    queryFn: () =>
      callApi({
        method: mediaRoutes.getAllCategoryMedia.method,
        url: mediaRoutes.getAllCategoryMedia.url.replace(":country", country),
        params: { type },
      }),
  });
};

export const useGetLandingPageMedia = (type = "all") => {
  const country = useGetCountry();
  const callApi = useAxios();
  return useQuery({
    queryKey: ["media", country, "landing", type],
    queryFn: () =>
      callApi({
        method: mediaRoutes.getLandingPageMedia.method,
        url: mediaRoutes.getLandingPageMedia.url.replace(":country", country),
        params: { type },
      }).then((data) => {
        return data?.data;
      }),
  });
};

export const useAddCategory = () => {
  const queryClient = useQueryClient();
  const callApi = useAxios();
  return useMutation({
    mutationFn: (data) =>
      callApi({
        method: categoryRoutes.addCategory.method,
        url: categoryRoutes.addCategory.url,
        data,
      }),
    onError: handleError,
    onSuccess: (response) => {
      handleSuccess(response);
      queryClient.invalidateQueries(["categories"]);
    },
  });
};

export const useUpdateCategory = () => {
  const queryClient = useQueryClient();
  const callApi = useAxios();
  return useMutation({
    mutationFn: ({ id, data }) =>
      callApi({
        method: categoryRoutes.updateCategory.method,
        url: categoryRoutes.updateCategory.url.replace(":id", id),
        data,
      }),
    onError: handleError,
    onSuccess: (response) => {
      handleSuccess(response);
      queryClient.invalidateQueries(["categories"]);
    },
  });
};

export const useDeleteCategoryById = () => {
  const queryClient = useQueryClient();
  const callApi = useAxios();
  return useMutation({
    mutationFn: (id) =>
      callApi({
        method: categoryRoutes.deleteCategory.method,
        url: categoryRoutes.deleteCategory.url + id,
      }),
    onError: handleError,
    onSuccess: (response) => {
      handleSuccess(response);
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
};

// Contact Routes
export const useContact = () => {
  const callApi = useAxios();
  return useMutation({
    mutationFn: (data) =>
      callApi({
        method: contactRoutes.contact.method,
        url: contactRoutes.contact.url,
        data,
      }),
    onError: handleError,
    onSuccess: handleSuccess,
  });
};
