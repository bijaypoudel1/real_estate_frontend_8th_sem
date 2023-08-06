import React, { useState } from "react";

const RangeInput = () => {
  const [price, setPrice] = useState(50000);

  const handlePriceChange = (event: any) => {
    setPrice(event.target.value);
  };

  return (
    <div className=" items-center">
      <p className="block mb-2 font-medium text-gray-900 dark:text-white">
        Select Price
      </p>
      <input
        id="range"
        type="range"
        value={price}
        min={10000}
        max={100000}
        step={1000}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        onChange={handlePriceChange}
      />
      <span className="ml-2 text-gray-700">{price}</span>
    </div>
  );
};

export default RangeInput;
