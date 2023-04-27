import React from "react";
import { UserListItem } from "../../types/githubUserSearch";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

type UserCardProps = {
  user: UserListItem;
};

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const displayName = user.name || user.login;

  return (
    <Link to={`/user/${user.login}`} className="group">
      <li
        key={user.id}
        className="flex items-center justify-between gap-x-4 py-5"
      >
        <div className="flex items-center gap-x-4">
          <img
            className="h-12 w-12 flex-none rounded-full bg-gray-50"
            src={user.avatarUrl}
            alt={displayName}
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

export default UserCard;
