import axiosClient from "@/lib/axiosInterceptor";

type loginType = {
  username: string;
  password: string;
};

export const userLogin = async (payload: loginType) => {
  const res = await axiosClient.post("api/login/", payload);
  return res;
};
