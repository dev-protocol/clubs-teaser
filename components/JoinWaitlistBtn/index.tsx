import React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";

interface JoinWaitlistBtnProps {
  joinUri: string;
}

const JoinWaitlistBtn: React.FC<JoinWaitlistBtnProps> = ({ joinUri }) => {
  return (
    <a
      href={joinUri}
      target="_blank"
      rel="noreferrer"
      className="flex items-center"
    >
      <div className="bg-accent rounded-full p-5">
        <ArrowRightIcon className="text-white h-4 w-4" />
      </div>
      <span className="pl-4 font-medium">Join the waitlist</span>
    </a>
  );
};

export default JoinWaitlistBtn;
