import { BASE_URL } from "@/utils/helper";

export const userRoutes = {
  register: {
    url: `${BASE_URL}/user/register`,
    method: "POST",
  },
  login: {
    url: `${BASE_URL}/user/login`,
    method: "POST",
  },
  forgetPassword: {
    url: `${BASE_URL}/user/forget-password`,
    method: "POST",
  },
  updatePassword: {
    url: `${BASE_URL}/user/update-password`,
    method: "PATCH",
  },
  updateUser: {
    url: `${BASE_URL}/user`,
    method: "PATCH",
  },
  getMe: {
    url: `${BASE_URL}/user/me`,
    method: "GET",
  },
};

export const mediaRoutes = {
  addMedia: {
    url: `${BASE_URL}/media/:country`,
    method: "POST",
  },
  deleteMedia: {
    url: `${BASE_URL}/media/:country/:id`,
    method: "DELETE",
  },
  getMediaByCategory: {
    url: `${BASE_URL}/media/:country/category/:categoryId`,
    method: "GET",
  },
  getAllCategoryMedia: {
    url: `${BASE_URL}/media/:country/media-all-category`,
    method: "GET",
  },
  getLandingPageMedia: {
    url: `${BASE_URL}/media/:country/landing-page`,
    method: "GET",
  },
};

export const categoryRoutes = {
  getAllCategory: {
    url: `${BASE_URL}/category`,
    method: "GET",
  },
  addCategory: {
    url: `${BASE_URL}/category`,
    method: "POST",
  },
  deleteCategory: {
    url: `${BASE_URL}/category/:id`,
    method: "DELETE",
  },
  updateCategory: {
    url: `${BASE_URL}/category/:id`,
    method: "PATCH",
  },
};

export const contactRoutes = {
  contact: {
    url: `${BASE_URL}/contact`,
    method: "POST",
  },
};
