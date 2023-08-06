import { NextPage } from "next";
import Image from "next/image";
import logo from "../../assets/images/logo.png";
import eyeOpenIcon from "../../assets/icons/eye-open.svg";
import eyeCloseIcon from "../../assets/icons/eye-close.svg";
import { useState } from "react";
import { useLoginQuery } from "@/queries/authQuery";
import CircularLoading from "@/components/circularLoding";

type PageWithLayout = NextPage & {
  getLayout?: (page: JSX.Element) => JSX.Element;
};

const Login: PageWithLayout = () => {
  const inputFields = {
    username: "",
    password: "",
  };

  const [inputValue, setInputValue] = useState(inputFields);
  const [showPassword, setShowPassword] = useState(false);
  const { mutate, isLoading } = useLoginQuery();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    mutate(inputValue);
  };

  return (
    <div>
      <section className="bg-[#F3F4F5]">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Image
            height={100}
            width={100}
            // className="rounded-full"
            src={logo}
            alt="logo"
          />
          <div className="w-full mt-10 bg-white rounded-lg shadow  md:mt-10 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl ">
                Sign in to your account
              </h1>
              <form
                onSubmit={handleSubmit}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium"
                  >
                    Your email
                  </label>
                  <input
                    onChange={handleChange}
                    value={inputValue.username}
                    type="email"
                    name="username"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="name@company.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      onChange={handleChange}
                      value={inputValue.password}
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    />
                    <div className="absolute right-5 top-[25%]">
                      {!showPassword ? (
                        <Image
                          className="cursor-pointer"
                          onClick={() => setShowPassword((prev) => !prev)}
                          src={eyeOpenIcon}
                          height={25}
                          width={25}
                          alt=""
                        />
                      ) : (
                        <Image
                          height={25}
                          width={25}
                          className="cursor-pointer"
                          onClick={() => setShowPassword((prev) => !prev)}
                          src={eyeCloseIcon}
                          alt=""
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center  h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 cursor-pointer h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                      />
                    </div>
                    <div className="ml-3 select-none  text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 cursor-pointer"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline "
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className=" bg-gradient-to-tl py-5 from-[#45BBFF] to-primary shadow-soft-2xl mr-2 flex h-8  items-center w-full  justify-center bg-center stroke-0 text-center xl:py-5 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 "
                >
                  {isLoading ? <CircularLoading /> : "Sign in"}
                </button>
                <p className="text-sm font-light text-gray-500 ">
                  Don’t have an account yet?{" "}
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Login.getLayout = (page) => <>{page}</>;

export default Login;
