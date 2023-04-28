import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { UserProfile } from "@/types/githubUserSearch";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";
import { SEARCH_USER_DETAILS } from "@/api/queries";
import UserDetailsContent from "@/components/user/UserDetails/UserDetailsContent";
import LoadingState from "@/components/user/UserListStates/LoadingState";
import ErrorState from "@/components/user/UserListStates/ErrorState";
import NoResultsState from "@/components/user/UserListStates/NoResultsState";

type UserDetailsParams = {
  login: string;
};

const UserDetails = () => {
  const navigate = useNavigate();
  const { login } = useParams<UserDetailsParams>();
  const { data, loading, error } = useQuery<{ user: UserProfile }>(
    SEARCH_USER_DETAILS,
    {
      variables: { login },
    }
  );

  if (loading) return <LoadingState />;

  if (error) return <ErrorState />;

  if (!data) return <NoResultsState />;

  const { avatarUrl, name, followers, following, company, email, websiteUrl } =
    data!.user;
  const displayName = name || login;

  const handleBackButtonClick = () => {
    navigate("/");
  };

  if(!login) return <NoResultsState />;
  if(!displayName) return <NoResultsState />;

  return (
    <>
      <button
        className={"flex items-center gap-1 pb-10"}
        onClick={handleBackButtonClick}
      >
        <ChevronLeftIcon
          className="h-5 w-5 flex-none text-gray-400"
          aria-hidden="true"
        />
        <p>Back to Search</p>
      </button>

      <UserDetailsContent
        login={login}
        avatarUrl={avatarUrl}
        displayName={displayName}
        followers={followers.totalCount}
        following={following.totalCount}
        company={company}
        email={email}
        websiteUrl={websiteUrl}
      />
    </>
  );
};

export default UserDetails;
