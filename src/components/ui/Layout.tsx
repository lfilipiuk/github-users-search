import React from "react";
import { Disclosure } from "@headlessui/react";
import githubLogo from "../../assets/github-logo.svg";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="min-h-full">
        <div className="bg-gray-800 pb-32">
          <Disclosure as="nav" className="bg-gray-800">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="border-b border-gray-700">
                <div className="flex h-16 items-center justify-between px-4 sm:px-0">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8"
                        src={githubLogo}
                        alt="GitHub logo"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Disclosure>
          <header className="py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-white">
                GitHub User Search
              </h1>
            </div>
          </header>
        </div>

        <main className="-mt-32">
          <div className="mx-auto max-w-7xl p-4 pb-12 sm:p-6 lg:p-8 bg-white rounded-lg">
            {children}
          </div>
        </main>
      </div>
    </>
  );
};

export default Layout;
