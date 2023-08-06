import { ErrorToast, SucessToast } from "@/components/common/toast";
import { addProperty, getProperty } from "@/services/property";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

export const useAddProperty = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (payload: any) => {
      return addProperty(payload);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(["property"]);
      SucessToast("Property Added Successfully");
      router.push("/");
    },
    onError: (err: { message: string }) => {
      ErrorToast(err.message);
    },
  });

  return mutation;
};

export const useGetProperty = () => {
  return useQuery(["property"], () => getProperty(), {});
};
