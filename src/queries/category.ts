import { getCategory, getLocation, getProperty } from "@/services/property";
import { useQuery } from "@tanstack/react-query";

export const useGetCategory = () => {
  return useQuery(["category"], () => getCategory(), {});
};

export const useGetLocation = () => {
  return useQuery(["location"], () => getLocation(), {});
};
