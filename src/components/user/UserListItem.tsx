import React from "react";
import { UserSummary } from "@/types/githubUserSearch";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

type UserListItemProps = {
  user: UserSummary;
};

const UserListItem= ({ user } : UserListItemProps) => {
  const displayName = user.name || user.login;

  return (
    <Link to={`/user/${user.login}`} className="group">
      <li
        className="flex items-center justify-between gap-x-4 py-5"
      >
        <div className="flex items-center gap-x-4">
          <img
            className="h-12 w-12 flex-none rounded-full bg-gray-50"
            src={user.avatarUrl}
            alt={displayName}
            title={displayName}
          />
          <div className="min-w-0">
            <p className="leading-6 text-gray-900 transition duration-300 ease-in-out group-hover:underline">
              {displayName}
            </p>
          </div>
        </div>
        <ChevronRightIcon
          className="h-5 w-5 flex-none text-gray-400"
          aria-hidden="true"
        />
      </li>
    </Link>
  );
};

export default UserListItem;
