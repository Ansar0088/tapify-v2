"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Buttonactive = () => {
  const [isActiveIOS, setIsActiveIOS] = useState(false);
  const [isActiveAndroid, setIsActiveAndroid] = useState(false);

  const handleClickIOS = () => {
    setIsActiveIOS(!isActiveIOS);
    setIsActiveAndroid(false);
  };

  const handleClickAndroid = () => {
    setIsActiveAndroid(!isActiveAndroid);
    setIsActiveIOS(false);
  };

  const buttonClassesIOS = `text-gray-500 bg-transparent text-xs  h-[30px] w-[60px]  ${
    isActiveIOS ? "text-blue-500 bg-[#EFEEFE]" : "hover:bg-transparent"
  }`;

  const buttonClassesAndroid = `text-gray-500 text-xs bg-transparent h-[30px] w-[60px] ${
    isActiveAndroid ? "text-blue-500 bg-[#EFEEFE]" : "hover:bg-transparent"
  }`;
  return (
    <>
      <div className="flex gap-3">
        <Button className={buttonClassesIOS} onClick={handleClickIOS}>
          IOS
        </Button>
        <Button className={buttonClassesAndroid} onClick={handleClickAndroid}>
          Android
        </Button>
      </div>
    </>
  );
};

export default Buttonactive;
