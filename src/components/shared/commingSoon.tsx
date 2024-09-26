import React from "react";
import { Button } from "../Profile";
import { Link } from "@tanstack/react-router";
const CommingSoon = () => {
  return (
    <div className="h-[80vh] w-full flex flex-col gap-4 items-center justify-center ">
      <h1 className="font-bold chillax-font  text-2xl text-white grade-text text-grad">
        Coming Soon
      </h1>

      <div>
        <Link to={"/"}>
          <Button>Go TO HOME</Button>
        </Link>
      </div>
    </div>
  );
};

export default CommingSoon;
