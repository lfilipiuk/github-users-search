import React from "react";
import { UserListItem } from "../../types/githubUserSearch";
import { Link } from "react-router-dom";

type UserCardProps = {
  user: UserListItem;
};

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const displayName = user.name || user.login;

  return (
    <Link to={`/user/${user.login}`} className="group">
      <li key={user.id} className="flex gap-x-4 py-5">
        <div className="flex gap-x-4">
          <img
            className="h-12 w-12 flex-none rounded-full bg-gray-50"
            src={user.avatarUrl}
            alt={displayName}
          />
          <div className="min-w-0">
            <p className="text-sm font-semibold leading-6 text-gray-900 group-hover:underline">
              {displayName}
            </p>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default UserCard;
