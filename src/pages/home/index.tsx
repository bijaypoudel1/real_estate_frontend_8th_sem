import ReactSimplyCarouselExample from "@/components/carousel";
import home from "../../assets/icons/house.png";
import land from "../../assets/icons/land.webp";
import flat from "../../assets/icons/flat.png";
import appartment from "../../assets/icons/apartment.png";
import shop from "../../assets/icons/shop.png";
import house from "../../assets/images/hosue.jpeg";
import royal from "../../assets/images/royal.webp";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useGetProperty } from "@/queries/property";
import { useGetCategory, useGetLocation } from "@/queries/category";

const Home = () => {
  const router = useRouter();

  const { data } = useGetProperty();
  const { data: categoryData } = useGetCategory();
  const { data: locationdata } = useGetLocation();

  console.log("cate", locationdata?.data);

  const propertyData = data?.data ?? [];

  // console.log(propertyData);

  return (
    <>
      <div className="">
        <ReactSimplyCarouselExample />
        {/* popular */}
        <div className="bg-[#EEF3F8] px-10 md:px-24 py-10 ">
          <div className="">
            <h1 className="text-2xl font-semibold">Popular Categories</h1>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-5 gap-10 mt-5 ">
            <div
              onClick={() => router.push("/filter")}
              className="bg-white cursor-pointer hover:bg-blue-100 transition-all ease-in-out duration-200 p-5 rounded-2xl"
            >
              <div className="flex flex-col justify-center items-center gap-1">
                <Image className="h-32 w-32" src={home} alt="home" />
                <p className="text-xl font-semibold">House</p>
                <p className="text-lg text-light">12</p>
              </div>
            </div>
            <div
              onClick={() => router.push("/filter")}
              className="bg-white cursor-pointer hover:bg-blue-100 transition-all ease-in-out duration-200 p-5 rounded-2xl"
            >
              <div className="flex flex-col justify-center items-center gap-1">
                <Image className="h-32 w-32" src={land} alt="home" />
                <p className="text-xl font-semibold">Land</p>
                <p className="text-lg text-light">12</p>
              </div>
            </div>{" "}
            <div
              onClick={() => router.push("/filter")}
              className="bg-white cursor-pointer hover:bg-blue-100 transition-all ease-in-out duration-200 p-5 rounded-2xl"
            >
              <div className="flex flex-col justify-center items-center gap-1">
                <Image className="h-32 w-32" src={flat} alt="home" />
                <p className="text-xl font-semibold">Flats</p>
                <p className="text-lg text-light">12</p>
              </div>
            </div>{" "}
            <div
              onClick={() => router.push("/filter")}
              className="bg-white cursor-pointer hover:bg-blue-100 transition-all ease-in-out duration-200 p-5 rounded-2xl"
            >
              <div className="flex flex-col justify-center items-center gap-1">
                <Image className="h-32 w-32" src={appartment} alt="home" />
                <p className="text-xl font-semibold">Appartments</p>
                <p className="text-lg text-light">12</p>
              </div>
            </div>
            <div
              onClick={() => router.push("/filter")}
              className="bg-white cursor-pointer hover:bg-blue-100 transition-all ease-in-out duration-200 p-5 rounded-2xl"
            >
              <div className="flex flex-col justify-center items-center gap-1">
                <Image className="h-32 w-32   " src={shop} alt="home" />
                <p className="text-xl font-semibold">Shop</p>
                <p className="text-lg text-light">12</p>
              </div>
            </div>
          </div>
        </div>
        {/* feature */}
        <div className="bg-[#EEF3F8] px-10 md:px-24 py-10 ">
          <h1 className="text-2xl font-semibold">Featured Projects</h1>
          <div className="mt-5 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-6">
            {/* item */}
            {propertyData?.slice(0, 4)?.map((item: any, index: any) => {
              return (
                <div
                  onClick={() => router.push("/property/details")}
                  className="max-w-sm cursor-pointer bg-white border border-gray-200 rounded-2xl overflow-hidden shadow  "
                >
                  <Image src={index % 2 === 0 ? house : royal} alt="home" />
                  <div className="p-5 flex flex-col gap-2">
                    <p className="text-blue-300">
                      {
                        categoryData?.data?.find(
                          (cat: any) => cat.id === item.category
                        )?.category
                      }
                    </p>
                    <h5 className=" text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.title}
                    </h5>
                    <div className="flex gap-0.5 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 32 32"
                      >
                        <path
                          fill="currentColor"
                          d="M16 18a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5Zm0-8a3 3 0 1 0 3 3a3.003 3.003 0 0 0-3-3Z"
                        />
                        <path
                          fill="currentColor"
                          d="m16 30l-8.436-9.949a35.076 35.076 0 0 1-.348-.451A10.889 10.889 0 0 1 5 13a11 11 0 0 1 22 0a10.884 10.884 0 0 1-2.215 6.597l-.001.003s-.3.394-.345.447ZM8.812 18.395c.002 0 .234.308.287.374L16 26.908l6.91-8.15c.044-.055.278-.365.279-.366A8.901 8.901 0 0 0 25 13a9 9 0 1 0-18 0a8.905 8.905 0 0 0 1.813 5.395Z"
                        />
                      </svg>
                      <p className=" font-normal text-gray-700 dark:text-gray-400">
                        {
                          locationdata?.data?.find(
                            (cat: any) => cat.id === item.property_location
                          )?.district
                        }
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-1 text-gray-500 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-width="1.5"
                            d="M21.984 10c-.037-1.311-.161-2.147-.581-2.86c-.598-1.015-1.674-1.58-3.825-2.708l-2-1.05C13.822 2.461 12.944 2 12 2s-1.822.46-3.578 1.382l-2 1.05C4.271 5.56 3.195 6.125 2.597 7.14C2 8.154 2 9.417 2 11.94v.117c0 2.525 0 3.788.597 4.802c.598 1.015 1.674 1.58 3.825 2.709l2 1.049C10.178 21.539 11.056 22 12 22s1.822-.46 3.578-1.382l2-1.05c2.151-1.129 3.227-1.693 3.825-2.708c.42-.713.544-1.549.581-2.86M21 7.5l-4 2M12 12L3 7.5m9 4.5v9.5m0-9.5l4.5-2.25l.5-.25m0 0V13m0-3.5l-9.5-5"
                          />
                        </svg>
                        <p>{item.bedrooms} anna</p>
                      </div>
                      <div className="flex gap-1 text-gray-500 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-width="1.5"
                            d="M21.984 10c-.037-1.311-.161-2.147-.581-2.86c-.598-1.015-1.674-1.58-3.825-2.708l-2-1.05C13.822 2.461 12.944 2 12 2s-1.822.46-3.578 1.382l-2 1.05C4.271 5.56 3.195 6.125 2.597 7.14C2 8.154 2 9.417 2 11.94v.117c0 2.525 0 3.788.597 4.802c.598 1.015 1.674 1.58 3.825 2.709l2 1.049C10.178 21.539 11.056 22 12 22s1.822-.46 3.578-1.382l2-1.05c2.151-1.129 3.227-1.693 3.825-2.708c.42-.713.544-1.549.581-2.86M21 7.5l-4 2M12 12L3 7.5m9 4.5v9.5m0-9.5l4.5-2.25l.5-.25m0 0V13m0-3.5l-9.5-5"
                          />
                        </svg>
                        <p>{item.area} feet</p>
                      </div>
                    </div>
                    <Link
                      href="/property/details"
                      className="inline-flex w-fit items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      View Details
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Premium Properties  */}

        <div className="bg-[#EEF3F8] px-10 md:px-24 py-10 ">
          <h1 className="text-2xl font-semibold">Premium Properties</h1>
          <div className="mt-5 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-6">
            {/* item */}
            {propertyData
              ?.filter((value: any) => value?.price > 1000)
              ?.map((item: any, i: number) => {
                return (
                  <div
                    onClick={() => router.push("/property/details")}
                    className="max-w-sm cursor-pointer bg-white border border-gray-200 rounded-2xl overflow-hidden shadow  "
                  >
                    <Image src={i % 2 === 0 ? house : royal} alt="home" />
                    <div className="p-5 flex flex-col gap-2">
                      <p className="text-blue-300">
                        {
                          categoryData?.data?.find(
                            (cat: any) => cat.id === item.category
                          )?.category
                        }
                      </p>
                      <h5 className=" text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {item.title}
                      </h5>
                      <div className="flex gap-0.5 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 32 32"
                        >
                          <path
                            fill="currentColor"
                            d="M16 18a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5Zm0-8a3 3 0 1 0 3 3a3.003 3.003 0 0 0-3-3Z"
                          />
                          <path
                            fill="currentColor"
                            d="m16 30l-8.436-9.949a35.076 35.076 0 0 1-.348-.451A10.889 10.889 0 0 1 5 13a11 11 0 0 1 22 0a10.884 10.884 0 0 1-2.215 6.597l-.001.003s-.3.394-.345.447ZM8.812 18.395c.002 0 .234.308.287.374L16 26.908l6.91-8.15c.044-.055.278-.365.279-.366A8.901 8.901 0 0 0 25 13a9 9 0 1 0-18 0a8.905 8.905 0 0 0 1.813 5.395Z"
                          />
                        </svg>
                        <p className=" font-normal text-gray-700 dark:text-gray-400">
                          {
                            locationdata?.data?.find(
                              (cat: any) => cat.id === item.property_location
                            )?.district
                          }
                        </p>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-1 text-gray-500 items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-width="1.5"
                              d="M21.984 10c-.037-1.311-.161-2.147-.581-2.86c-.598-1.015-1.674-1.58-3.825-2.708l-2-1.05C13.822 2.461 12.944 2 12 2s-1.822.46-3.578 1.382l-2 1.05C4.271 5.56 3.195 6.125 2.597 7.14C2 8.154 2 9.417 2 11.94v.117c0 2.525 0 3.788.597 4.802c.598 1.015 1.674 1.58 3.825 2.709l2 1.049C10.178 21.539 11.056 22 12 22s1.822-.46 3.578-1.382l2-1.05c2.151-1.129 3.227-1.693 3.825-2.708c.42-.713.544-1.549.581-2.86M21 7.5l-4 2M12 12L3 7.5m9 4.5v9.5m0-9.5l4.5-2.25l.5-.25m0 0V13m0-3.5l-9.5-5"
                            />
                          </svg>
                          <p>{item.bedrooms} anna</p>
                        </div>
                        <div className="flex gap-1 text-gray-500 items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-width="1.5"
                              d="M21.984 10c-.037-1.311-.161-2.147-.581-2.86c-.598-1.015-1.674-1.58-3.825-2.708l-2-1.05C13.822 2.461 12.944 2 12 2s-1.822.46-3.578 1.382l-2 1.05C4.271 5.56 3.195 6.125 2.597 7.14C2 8.154 2 9.417 2 11.94v.117c0 2.525 0 3.788.597 4.802c.598 1.015 1.674 1.58 3.825 2.709l2 1.049C10.178 21.539 11.056 22 12 22s1.822-.46 3.578-1.382l2-1.05c2.151-1.129 3.227-1.693 3.825-2.708c.42-.713.544-1.549.581-2.86M21 7.5l-4 2M12 12L3 7.5m9 4.5v9.5m0-9.5l4.5-2.25l.5-.25m0 0V13m0-3.5l-9.5-5"
                            />
                          </svg>
                          <p>{item.area} feet</p>
                        </div>
                      </div>
                      <Link
                        href="/property/details"
                        className="inline-flex w-fit items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        View Details
                        <svg
                          aria-hidden="true"
                          className="w-4 h-4 ml-2 -mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* recent properties */}
        <div className="bg-[#EEF3F8] px-10 md:px-24 py-10 ">
          <h1 className="text-2xl font-semibold">Recent Properties</h1>
          <div className="mt-5 grid md:grid-cols-1 grid-cols-1 lg:grid-cols-2 gap-6">
            {/* item */}
            {propertyData?.slice(0, 4)?.map((item: any, index: any) => {
              return (
                <div
                  onClick={() => router.push("/filter")}
                  className="max-w-sm cursor-pointer bg-white border border-gray-200 rounded-2xl overflow-hidden shadow  "
                >
                  <Image src={index % 2 === 0 ? house : royal} alt="home" />
                  <div className="p-5 flex flex-col gap-2">
                    <p className="text-blue-300">
                      {
                        categoryData?.data?.find(
                          (cat: any) => cat.id === item.category
                        )?.category
                      }
                    </p>
                    <h5 className=" text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.title}
                    </h5>
                    <div className="flex gap-0.5 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 32 32"
                      >
                        <path
                          fill="currentColor"
                          d="M16 18a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5Zm0-8a3 3 0 1 0 3 3a3.003 3.003 0 0 0-3-3Z"
                        />
                        <path
                          fill="currentColor"
                          d="m16 30l-8.436-9.949a35.076 35.076 0 0 1-.348-.451A10.889 10.889 0 0 1 5 13a11 11 0 0 1 22 0a10.884 10.884 0 0 1-2.215 6.597l-.001.003s-.3.394-.345.447ZM8.812 18.395c.002 0 .234.308.287.374L16 26.908l6.91-8.15c.044-.055.278-.365.279-.366A8.901 8.901 0 0 0 25 13a9 9 0 1 0-18 0a8.905 8.905 0 0 0 1.813 5.395Z"
                        />
                      </svg>
                      <p className=" font-normal text-gray-700 dark:text-gray-400">
                        {
                          locationdata?.data?.find(
                            (cat: any) => cat.id === item.property_location
                          )?.district
                        }
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-1 text-gray-500 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-width="1.5"
                            d="M21.984 10c-.037-1.311-.161-2.147-.581-2.86c-.598-1.015-1.674-1.58-3.825-2.708l-2-1.05C13.822 2.461 12.944 2 12 2s-1.822.46-3.578 1.382l-2 1.05C4.271 5.56 3.195 6.125 2.597 7.14C2 8.154 2 9.417 2 11.94v.117c0 2.525 0 3.788.597 4.802c.598 1.015 1.674 1.58 3.825 2.709l2 1.049C10.178 21.539 11.056 22 12 22s1.822-.46 3.578-1.382l2-1.05c2.151-1.129 3.227-1.693 3.825-2.708c.42-.713.544-1.549.581-2.86M21 7.5l-4 2M12 12L3 7.5m9 4.5v9.5m0-9.5l4.5-2.25l.5-.25m0 0V13m0-3.5l-9.5-5"
                          />
                        </svg>
                        <p>{item.bedrooms} anna</p>
                      </div>
                      <div className="flex gap-1 text-gray-500 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-width="1.5"
                            d="M21.984 10c-.037-1.311-.161-2.147-.581-2.86c-.598-1.015-1.674-1.58-3.825-2.708l-2-1.05C13.822 2.461 12.944 2 12 2s-1.822.46-3.578 1.382l-2 1.05C4.271 5.56 3.195 6.125 2.597 7.14C2 8.154 2 9.417 2 11.94v.117c0 2.525 0 3.788.597 4.802c.598 1.015 1.674 1.58 3.825 2.709l2 1.049C10.178 21.539 11.056 22 12 22s1.822-.46 3.578-1.382l2-1.05c2.151-1.129 3.227-1.693 3.825-2.708c.42-.713.544-1.549.581-2.86M21 7.5l-4 2M12 12L3 7.5m9 4.5v9.5m0-9.5l4.5-2.25l.5-.25m0 0V13m0-3.5l-9.5-5"
                          />
                        </svg>
                        <p>{item.area} feet</p>
                      </div>
                    </div>
                    <Link
                      href="/property/details"
                      className="inline-flex w-fit items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      View Details
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
