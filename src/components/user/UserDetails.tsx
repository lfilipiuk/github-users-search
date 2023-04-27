import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import { UserDetailsItem } from '../../types/githubUserSearch';

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
    const { login } = useParams<UserDetailsParams>();
    const { data, loading, error } = useQuery<{ user: UserDetailsItem }>(USER_DETAILS, {
        variables: { login },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const { avatarUrl, name, followers, following, company, email, websiteUrl } = data!.user;
    const displayName = name || login;

    return (
        <div key={login} className="flex flex-col gap-10 sm:flex-row">
            <img className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src={avatarUrl} alt="" />
            <div className="max-w-xl flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{displayName}</h3>
                <p className="text-base leading-7 text-gray-600">Followers: {followers.totalCount}</p>
                <p className="text-base leading-7 text-gray-600">Following: {following.totalCount}</p>
                <p className="mt-6 text-base leading-7 text-gray-600">Company: {company || 'N/A'}</p>
                <p className="mt-6 text-base leading-7 text-gray-600">Email: {email || 'N/A'}</p>
                <p className="mt-6 text-base leading-7 text-gray-600">Website: {websiteUrl || 'N/A'}</p>
            </div>
        </div>
    );
};

export default UserDetails;