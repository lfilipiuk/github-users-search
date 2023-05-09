import { ChevronRightIcon } from "@heroicons/react/20/solid";
import UserContactInfo from "@/components/user/UserDetails/UserContactInfo";
import React from "react";

type UserDetailsContentProps = {
  login: string;
  avatarUrl: string;
  displayName: string;
  followers: number;
  following: number;
  company: string | null;
  email: string | null;
  websiteUrl: string | null;
};

const UserDetailsContent = React.memo(
  ({
    login,
    avatarUrl,
    displayName,
    followers,
    following,
    company,
    email,
    websiteUrl,
  }: UserDetailsContentProps) => (
    <div
      className="flex flex-col items-center gap-2 mx-auto justify-center"
    >
      <img
        className="w-52 flex-none rounded-full object-cover"
        src={avatarUrl}
        alt="Github user avatar"
      />
      <div className="w-full mx-auto flex items-center flex-col">
        <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
          {displayName}
        </h3>
        <div className={"flex gap-2 text-base  leading-7 text-gray-600"}>
          <p>{followers} followers</p>
          <p>•</p>
          <p>{following} following</p>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-1 w-full" />

        <UserContactInfo
          company={company}
          email={email}
          websiteUrl={websiteUrl}
        />

        <a
          type="button"
          href={`https://www.github.com/${login}`}
          className="flex items-center justify-center flex-row w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 translate-y-4"
        >
          <p>Visit GitHub</p>
          <ChevronRightIcon
            className="h-5 w-5 flex-none text-white"
            aria-hidden="true"
          />
        </a>
      </div>
    </div>
  )
);

UserDetailsContent.displayName = "UserDetailsContent";

export default UserDetailsContent;
