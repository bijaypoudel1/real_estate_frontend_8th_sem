import axiosClient from "@/lib/axiosInterceptor";

export const addProperty = async (payload: any) => {
  const res = await axiosClient.post("api/properties/", payload);
  return res;
};

export const getProperty = async () => {
  const res = await axiosClient.get("api/properties/");
  return res;
};

export const getCategory = async () => {
  const res = await axiosClient.get("api/categories/");
  return res;
};

export const getSubCategory = async () => {
  const res = await axiosClient.get("api/sub-categories/");
  return res;
};

export const getDistricts = async () => {
  const res = await axiosClient.get("api/property-location/");
  return res;
};

export const getStates = async () => {
  const res = await axiosClient.get("api/state/");
  return res;
};
