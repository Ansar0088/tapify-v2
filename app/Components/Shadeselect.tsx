import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Shadeselect = () => {
  return (
    <>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="relative h-[30px] w-[55px] rounded-md outline-none hover:bg-white shadow-menu"
            >
              <Avatar className="flex  items-center justify-center outline-none  ">
                <div className="flex items-center gap-2">
                  <svg
                    id="Group_21845"
                    data-name="Group 21845"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16.864"
                    height="16.809"
                    viewBox="0 0 16.864 16.809"
                  >
                    <path
                      id="Path_41798"
                      data-name="Path 41798"
                      d="M86.02,2.458c0,.576,0,1.152,0,1.728,0,.28-.064.374-.4.345a12.4,12.4,0,0,0-1.921,0c-.286.02-.408-.043-.409-.309,0-.393.028-.786.025-1.179,0-.772-.035-1.545-.029-2.317,0-.54.183-.7.716-.711.451-.007.9-.01,1.353,0,.475.01.637.156.653.635.019.6,0,1.208,0,1.812h0Z"
                      transform="translate(-76.222 -0.004)"
                      fill="#303030"
                    />
                    <path
                      id="Path_41799"
                      data-name="Path 41799"
                      d="M120.68,23.091c.626-.593,1.281-1.21,1.931-1.832.3-.283.582-.574.871-.863a.5.5,0,0,1,.78-.014c.395.382.787.767,1.17,1.161a.433.433,0,0,1,.04.646c-.94.951-1.9,1.889-2.847,2.831-.016.016-.053.011,0,0l-1.943-1.93Z"
                      transform="translate(-110.437 -18.485)"
                      fill="#303030"
                    />
                    <path
                      id="Path_41800"
                      data-name="Path 41800"
                      d="M146.2,82.876h1.112c.876,0,1.752-.005,2.628,0,.553,0,.707.158.713.705.005.479,0,.958,0,1.437,0,.33-.154.548-.5.55-1.271.006-2.543,0-3.814,0a.389.389,0,0,1-.129-.037Z"
                      transform="translate(-133.791 -75.84)"
                      fill="#303030"
                    />
                    <path
                      id="Path_41801"
                      data-name="Path 41801"
                      d="M25.243,23.039l-1.9,1.939c-.272-.263-.6-.568-.911-.881q-.884-.878-1.76-1.765c-.361-.364-.366-.569-.014-.929s.719-.715,1.082-1.068a.446.446,0,0,1,.677-.048c.962.925,1.912,1.861,2.823,2.75Z"
                      transform="translate(-18.668 -18.443)"
                      fill="#303030"
                    />
                    <path
                      id="Path_41802"
                      data-name="Path 41802"
                      d="M121.91,123.086l1.868-1.826c.4.389.853.836,1.309,1.286s.92.911,1.378,1.369c.332.333.345.52.023.861-.358.379-.733.74-1.106,1.1-.185.181-.415.309-.633.092-.963-.963-1.911-1.941-2.838-2.887Z"
                      transform="translate(-111.563 -110.968)"
                      fill="#303030"
                    />
                    <path
                      id="Path_41803"
                      data-name="Path 41803"
                      d="M85.941,147.4c0,.591,0,1.181,0,1.771a.551.551,0,0,1-.632.616c-.493,0-.987-.007-1.48-.005a.534.534,0,0,1-.6-.561c-.017-.815-.033-1.632.021-2.444.016-.239.273-.461.412-.7.481-.809,1.343-.625,2.073-.77.048-.009.205.232.21.36.024.576.01,1.153.01,1.729h-.011Z"
                      transform="translate(-76.147 -132.983)"
                      fill="#303030"
                    />
                    <path
                      id="Path_41804"
                      data-name="Path 41804"
                      d="M62.649,64.124c.514-.5,1.041-.982,1.541-1.494a2.67,2.67,0,0,0-3.7-3.854c-.437.4-.842.833-1.265,1.247-.106.1-.222.2-.357.315-.169-1.281,1.356-3.067,3.275-3.151a3.651,3.651,0,0,1,3.684,3.379,3.374,3.374,0,0,1-3.181,3.557Z"
                      transform="translate(-53.864 -52.331)"
                      fill="#303030"
                    />
                    <path
                      id="Path_41805"
                      data-name="Path 41805"
                      d="M2.424,82.888c.55,0,1.1,0,1.649,0,.5,0,.521.031.4.5a.951.951,0,0,0-.078.368c.149.813-.439,1.219-.924,1.674a.675.675,0,0,1-.418.152c-.817.014-1.636,0-2.453.009a.515.515,0,0,1-.587-.564C0,84.5,0,83.984.014,83.464a.532.532,0,0,1,.592-.571c.606,0,1.213,0,1.819,0v-.005Z"
                      transform="translate(-0.005 -75.852)"
                      fill="#303030"
                    />
                  </svg>
                  <svg
                    id="arrow-down-bold"
                    xmlns="http://www.w3.org/2000/svg"
                    width="9.765"
                    height="5.616"
                    viewBox="0 0 9.765 5.616"
                  >
                    <path
                      id="Path_41788"
                      data-name="Path 41788"
                      d="M4.245,15.217a.733.733,0,0,1,1.037,0l3.631,3.631,3.631-3.631a.733.733,0,1,1,1.037,1.037L9.431,20.4a.733.733,0,0,1-1.037,0L4.245,16.254A.733.733,0,0,1,4.245,15.217Z"
                      transform="translate(-4.03 -15.002)"
                      fill="#303030"
                    />
                  </svg>
                </div>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="start">
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">Tapday</p>
                <p className="text-xs leading-none text-muted-foreground">
                  fillnix@gmail.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>Account settings</DropdownMenuItem>
              <DropdownMenuItem>Contact sport</DropdownMenuItem>
              <DropdownMenuItem>Products</DropdownMenuItem>

            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default Shadeselect;
