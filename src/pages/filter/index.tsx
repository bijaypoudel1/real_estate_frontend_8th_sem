import CustomRadio from "@/components/forms/radio";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import royal from "../../assets/images/royal.webp";
import home from "../../assets/images/home.webp";
import PriceRangeInput from "@/components/priceRange";
import { useGetProperty } from "@/queries/property";
import { useGetCategory, useGetLocation } from "@/queries/category";

const Filter = () => {
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [keyword, setKeyword] = useState("");

  const [filterList, setFilterList] = useState([]);

  const categoryOptions = [
    { value: "house", label: "House" },
    { value: "land", label: "Land" },
    { value: "flats", label: "Flats" },
    { value: "appartment", label: "appartment" },
  ];
  const [propertylocation, setLocation] = useState("");
  const locationOptions = [
    { value: "koshi", label: "Koshi" },
    { value: "madesh", label: "Madhesh" },
    { value: "Bagmati", label: "Bagmati" },
    { value: "Gandaki", label: "Gandaki" },
    { value: "Lumbini", label: "Lumbini" },
    { value: "Sudurpaschim", label: "Sudurpaschim" },
    { value: "Karnali", label: "Karnali" },
  ];

  const { data } = useGetProperty();
  const propertyData = data?.data ?? [];

  useMemo(() => {
    const newData = propertyData?.map((item: any) => {
      return {
        ...item,
      };
    });
    // setTableRow(newData);
    setFilterList(newData);
  }, [JSON.stringify(propertyData)]);

  const handleKeyword = (e: React.SyntheticEvent) => {
    const inputElement = e.target as HTMLInputElement;
    setKeyword(inputElement.value);
    const updatedList = propertyData.filter((item: { title: string }) => {
      return item.title
        .toLowerCase()
        .includes(inputElement.value.toLowerCase());
    });
    setFilterList(updatedList);
  };

  console.log("filter", propertyData);

  const { data: categoryData } = useGetCategory();
  const { data: locationdata } = useGetLocation();

  return (
    <div>
      <div className="flex px-20 py-10">
        <div className="w-[350px] sticky top-0 bg-gray-100 h-screen p-6">
          <h1 className="tex-2xl font-bold mt-4">Filter your search</h1>
          <div className="flex flex-col gap-5">
            <div className="flex gap-2 mt-4 items-center">
              <input
                value={keyword}
                onChange={(e) => handleKeyword(e)}
                placeholder="location , area, city.."
                type="text"
                className="border-b w-48 mt-1 border-b-gray-900 outline-none"
              />
            </div>
            <div className="cursor-pointer mt-3 w-fit">
              <CustomRadio
                value={type}
                setValue={setType}
                radioOptions={[
                  { value: "rent", label: "rent" },
                  { value: "sell", label: "Sell" },
                ]}
              />
            </div>
            <div className="cursor-pointer mt-3 w-fit">
              <p className="mb-3">Category</p>
              <CustomRadio
                value={category}
                setValue={setCategory}
                radioOptions={categoryOptions}
              />
            </div>
            <div className="mt-3">
              <p className="project_label__DEjnY">Land Type</p>
              <select className="">
                <option selected disabled value="">
                  Select a Land Type
                </option>
                <option value="Agricultural">Agricultural</option>
                <option value="Commercial">Commercial</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="mt-3">
              <p className="text-sm text-gray-900">PROPERTY LOCATION</p>
              <div className="cursor-pointer mt-3 w-fit">
                <CustomRadio
                  value={propertylocation}
                  setValue={setLocation}
                  radioOptions={locationOptions}
                />
              </div>
            </div>
            <PriceRangeInput />
          </div>
        </div>
        <div className="flex-grow p-6">
          <div className="flex flex-col gap-10">
            {filterList?.map((item: any, id: number) => {
              return (
                <div className=" cursor-pointer flex bg-white border border-gray-200 rounded-2xl overflow-hidden shadow  ">
                  <Image
                    height={150}
                    width={150}
                    className="w-1/2 h-[300px]"
                    src={id % 2 === 0 ? home : royal}
                    alt="home"
                  />
                  <div className="p-5 flex justify-center flex-col gap-4">
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
    </div>
  );
};
export default Filter;
