import { RadioGroup } from "@headlessui/react";

const CustomRadio = ({ value, setValue, radioOptions }: any) => {
  return (
    <div>
      <RadioGroup
        value={value}
        className="flex flex-wrap uppercase text-sm"
        onChange={setValue}
      >
        {radioOptions?.map((item: any, i: number) => {
          return (
            <RadioGroup.Option key={i} value={item.value}>
              {({ checked }) => (
                <div
                  className={
                    checked
                      ? "my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-blue-400 text-white px-[12px] py-0"
                      : "my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-gray-200 px-[12px] py-0 "
                  }
                >
                  {item.label}
                </div>
              )}
            </RadioGroup.Option>
          );
        })}
      </RadioGroup>
    </div>
  );
};
export default CustomRadio;
