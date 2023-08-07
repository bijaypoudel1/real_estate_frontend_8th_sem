import {
  getCategory,
  getDistricts,
  getStates,
  getSubCategory,
} from "@/services/property";
import { useQuery } from "@tanstack/react-query";

export const useGetCategory = () => {
  return useQuery(["category"], () => getCategory(), {});
};

export const useGetSubCategory = () => {
  return useQuery(["subCategory"], () => getSubCategory());
};

export const useGetDistrict = () => {
  return useQuery(["district"], () => getDistricts(), {});
};

export const useGetState = () => {
  return useQuery(["state"], () => getStates());
};
