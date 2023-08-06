import { ErrorToast, SucessToast } from "@/components/common/toast";
import { userLogin } from "@/services/auth";
import { useMutation, useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

type loginType = {
  username: string;
  password: string;
};

export const useLoginQuery = () => {
  const router = useRouter();
  const onSuccess = (data: any) => {
    const { access, refresh } = data.data;
    Cookies.set("access_token", access);
    Cookies.set("refresh_token", refresh);
    router.push("/");
    SucessToast("Login Sucessfully");
  };

  const onError = (err: any) => {
    ErrorToast(err.response.data.message);
  };

  const { isLoading, mutate } = useMutation({
    mutationFn: (payload: loginType) => userLogin(payload),
    onSuccess: (data) => onSuccess(data),
    onError: (err) => onError(err),
  });

  return { isLoading, mutate };
};
