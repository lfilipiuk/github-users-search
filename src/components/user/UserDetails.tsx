import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import { UserDetailsItem } from "../../types/githubUserSearch";
import {
  ArrowUpRightIcon,
  BuildingOffice2Icon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EnvelopeIcon,
  GlobeEuropeAfricaIcon,
} from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";

const USER_DETAILS = gql`
  query UserDetails($login: String!) {
    user(login: $login) {
      avatarUrl
      name
      followers {
        totalCount
      }
      following {
        totalCount
      }
      company
      email
      websiteUrl
    }
  }
`;

type UserDetailsParams = {
  login: string;
};

const UserDetails: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useParams<UserDetailsParams>();
  const { data, loading, error } = useQuery<{ user: UserDetailsItem }>(
    USER_DETAILS,
    {
      variables: { login },
    }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { avatarUrl, name, followers, following, company, email, websiteUrl } =
    data!.user;
  const displayName = name || login;

  const handleBackButtonClick = () => {
    navigate("/");
  };

  return (
    <>
      <button
        className={"flex items-center gap-1 pb-10"}
        onClick={handleBackButtonClick}
      >
        {" "}
        <ChevronLeftIcon
          className="h-5 w-5 flex-none text-gray-400"
          aria-hidden="true"
        />
        <p>Back to Search</p>
      </button>

      <div
        key={login}
        className="flex flex-col items-center gap-2 mx-auto justify-center"
      >
            <img
              className="w-52 flex-none rounded-full object-cover"
              src={avatarUrl}
              alt=""
            />
            <div className="w-full mx-auto flex items-center flex-col">
              <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                {displayName}
              </h3>
              <div className={"flex gap-2 text-base  leading-7 text-gray-600"}>
                <p>{followers.totalCount} followers</p>
                <p>•</p>
                <p>{following.totalCount} following</p>
              </div>
              <hr className="h-px my-8 bg-gray-200 border-1 w-full" />

              <ul
                className={"w-full flex gap-2 flex-col leading-7 text-gray-600"}
              >
                <li className={"flex justify-between"}>
                  <div className={"flex gap-1"}>
                    <BuildingOffice2Icon
                      className="h-6 w-6 flex-none text-gray-600"
                      aria-hidden="true"
                    />
                    <p>Company</p>
                  </div>
                  <p>{company || "not available"}</p>
                </li>

                <li className={"flex justify-between"}>
                  <div className={"flex gap-1"}>
                    <EnvelopeIcon
                      className="h-6 w-6 flex-none text-gray-600"
                      aria-hidden="true"
                    />
                    <p>Email</p>
                  </div>

                  <div
                    className={
                      "flex gap-1 items-center justify-center group hover:cursor-pointer"
                    }
                  >
                    <a
                      href={`mailto:${email}`}
                      className={"group-hover:underline"}
                    >
                      {email || "not available"}
                    </a>
                    <ArrowUpRightIcon
                      className="h-5 w-5 flex-none text-gray-400 group-hover:text-gray-500 transition ease-in-out duration-200"
                      aria-hidden="true"
                    />
                  </div>
                </li>

                <li className={"flex justify-between"}>
                  <div className={"flex gap-1"}>
                    <GlobeEuropeAfricaIcon
                      className="h-6 w-6 flex-none text-gray-600"
                      aria-hidden="true"
                    />
                    <p>Website</p>
                  </div>
                  {websiteUrl ? (
                    <div
                      className={
                        "flex gap-1 items-center justify-center group hover:cursor-pointer"
                      }
                    >
                      <a
                        href={`https://${websiteUrl}`}
                        className={"group-hover:underline"}
                      >
                        {websiteUrl}
                      </a>
                      <ArrowUpRightIcon
                        className="h-5 w-5 flex-none text-gray-400 group-hover:text-gray-500 transition ease-in-out duration-200"
                        aria-hidden="true"
                      />
                    </div>
                  ) : (
                    <div className={"flex gap-1 items-center justify-center"}>
                      <span>not available</span>
                    </div>
                  )}
                </li>
              </ul>

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
    </>
  );
};

export default UserDetails;
