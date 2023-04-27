import {
  ArrowUpRightIcon,
  BuildingOffice2Icon,
  EnvelopeIcon,
  GlobeEuropeAfricaIcon,
} from "@heroicons/react/20/solid";
import React from "react";
import {parseWebsiteUrl} from "@/utils/validation";

type UserDetailsListProps = {
  company: string | null;
  email: string | null;
  websiteUrl: string | null;
};

const UserContactInfo = React.memo(
  ({ company, email, websiteUrl }: UserDetailsListProps) => {
      const websiteUrlParsed = parseWebsiteUrl(websiteUrl);

      return (
          <ul className={"w-full flex gap-2 flex-col leading-7 text-gray-600"}>
              <li className={"flex justify-between"}>
                  <div className={"flex gap-1 opacity-60"}>
                      <BuildingOffice2Icon
                          className="h-6 w-6 flex-none text-gray-600"
                          aria-hidden="true"
                      />
                      <p>Company</p>
                  </div>
                  <p>{company || "not available"}</p>
              </li>
              <li className={"flex justify-between"}>
                  <div className={"flex gap-1 opacity-60"}>
                      <EnvelopeIcon
                          className="h-6 w-6 flex-none text-gray-600"
                          aria-hidden="true"
                      />
                      <p>Email</p>
                  </div>
                  {email ? (
                      <div
                          className={
                              "flex gap-1 items-center justify-center group hover:cursor-pointer"
                          }
                      >
                          <a href={`mailto:${email}`} className={"group-hover:underline"}>
                              {email}
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

              <li className={"flex justify-between"}>
                  <div className={"flex gap-1 opacity-60"}>
                      <GlobeEuropeAfricaIcon
                          className="h-6 w-6 flex-none text-gray-600"
                          aria-hidden="true"
                      />
                      <p>Website</p>
                  </div>
                  {websiteUrlParsed ? (
                      <div
                          className={
                              "flex gap-1 items-center justify-center group hover:cursor-pointer"
                          }
                      >
                          <a href={websiteUrlParsed} className={"group-hover:underline"}>
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
      )
  }
);

export default UserContactInfo;
