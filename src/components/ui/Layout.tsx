import React from "react";
import githubLogo from "../../assets/github-logo.svg";
import {Link} from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="min-h-full">
        <div className="bg-gray-800 pt-16 pb-32 flex items-center justify-center flex-col">
          <Link to="/">
            <img
                className="h-16 w-16 opacity-70"
                src={githubLogo}
                alt="GitHub logo"
            />
          </Link>
          <header className="py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-5xl text-white font-hubot-sans-narrow">
                GITHUB USER SEARCH
              </h1>
            </div>
          </header>
        </div>

        <main className="-mt-32 mx-2 md:mx-0">
          <div className="mx-auto max-w-md h-[38rem] p-5 pb-12 bg-white rounded-2xl border border-gray-300 shadow-xl">
            {children}
          </div>
        </main>
      </div>
    </>
  );
};

export default Layout;
