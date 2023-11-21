import React from "react";
import Shadeselect from "./Shadeselect";
import Buttonactive from "./Buttonactive";
import Profile from "./Profile";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center bg-white h-[65px] p-3">
        <div className="flex items-center gap-5 ">
          <Shadeselect />
          <Separator orientation="vertical" className="h-[20px]" />

          <Buttonactive />
        </div>
        {/*  */}
        <div className="flex gap-4 items-center">
          <Button className="bg-[#F3F3F3] text-[#303030] text-xs h-[30px]">
            <svg
              id="setting-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="16.406"
              height="16.406"
              viewBox="0 0 16.406 16.406"
            >
              <path
                id="Path_23503"
                data-name="Path 23503"
                d="M13.564,1.963,14.741,3.14a.8.8,0,0,1,0,1.127l-.948.948a6.3,6.3,0,0,1,.588,1.569h1.228a.8.8,0,0,1,.8.8V9.246a.8.8,0,0,1-.8.8h-1.34a6.3,6.3,0,0,1-.695,1.524l.869.869a.8.8,0,0,1,0,1.127l-1.177,1.177a.8.8,0,0,1-1.127,0l-.948-.948a6.291,6.291,0,0,1-1.569.588v1.228a.8.8,0,0,1-.8.8H7.16a.8.8,0,0,1-.8-.8v-1.34a6.3,6.3,0,0,1-1.524-.695l-.869.869a.8.8,0,0,1-1.127,0L1.665,13.266a.8.8,0,0,1,0-1.127l.948-.948a6.286,6.286,0,0,1-.588-1.569H.8a.8.8,0,0,1-.8-.8V7.16a.8.8,0,0,1,.8-.8h1.34a6.311,6.311,0,0,1,.695-1.524L1.963,3.97a.8.8,0,0,1,0-1.127L3.14,1.665a.8.8,0,0,1,1.127,0l.948.948a6.293,6.293,0,0,1,1.569-.588V.8a.8.8,0,0,1,.8-.8H9.246a.8.8,0,0,1,.8.8v1.34a6.307,6.307,0,0,1,1.525.695l.869-.869a.8.8,0,0,1,1.127,0ZM8.2,4.929A3.274,3.274,0,1,1,4.93,8.2,3.274,3.274,0,0,1,8.2,4.929Z"
                fill="#303030"
                fill-rule="evenodd"
              />
            </svg>
          </Button>
          <Button className="bg-[#F3F3F3] text-[#303030] text-xs h-[30px] w-[65px]">
            Preiew
          </Button>
          <Button className="bg-[#342AEF] h-[30px] text-xs w-[65px] shadow-md ">
            Publish
          </Button>
          <Profile />
        </div>
      </div>
    </>
  );
};
export default Header;
