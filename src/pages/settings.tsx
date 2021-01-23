import DashboardLayout from "layouts/Dashboard";
import _ from "lodash";
import useUser from "src/hooks/useUser";
import { withAuth } from "utils/withAuth";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import useLogout from "src/hooks/useLogout";
import { useState } from "react";
import cx from "classnames";

function SettingsPage() {
  const user = useUser();
  const logout = useLogout();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main className="flex-1 overflow-y-auto focus:outline-none" tabIndex={0}>
      <div className="relative max-w-4xl mx-auto md:px-8 xl:px-0">
        <div className="pt-10 pb-16">
          <div className="px-4 sm:px-6 md:px-0">
            <h1 className="text-3xl font-extrabold text-gray-900">Settings</h1>
          </div>
          <div className="px-4 sm:px-6 md:px-0">
            <div className="py-6">
              <div className="hidden lg:block">
                <div className="border-b border-gray-200">
                  <nav className="-mb-px flex relative">
                    <a
                      onClick={() => setActiveTab(0)}
                      className={cx(
                        "whitespace-nowrap py-4 px-1 font-medium text-sm",
                        {
                          "border-purple-500 text-purple-600 border-b-2":
                            activeTab === 0,
                        }
                      )}
                    >
                      General
                    </a>

                    <a
                      onClick={() => setActiveTab(1)}
                      className={cx(
                        "whitespace-nowrap py-4 px-1 font-medium text-sm ml-8",
                        {
                          "border-purple-500 text-purple-600 border-b-2":
                            activeTab === 1,
                        }
                      )}
                    >
                      Account
                    </a>
                    <div className="absolute right-0 top-0 border-transparent text-gray-500 hover:text-gray-700 whitespace-nowrap py-2 px-1 font-medium text-sm">
                      <button
                        onClick={() => {
                          Modal.confirm({
                            title: "Are you sure want to Logout?",
                            content:
                              "You could login back to this account later.",
                            style: { top: "30vh" },
                            icon: <ExclamationCircleOutlined />,
                            okText: "Logout",
                            okButtonProps: { danger: true, type: "primary" },
                            onOk: () => logout(),
                          });
                        }}
                        className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-300"
                      >
                        Logout
                      </button>
                    </div>
                  </nav>
                </div>
              </div>
              {activeTab === 0 && (
                <div className="mt-10 divide-y divide-gray-200">
                  <div className="space-y-1">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Profile
                    </h3>
                    <p className="max-w-2xl text-sm text-gray-500">
                      This information will be displayed publicly so be careful
                      what you share.
                    </p>
                  </div>
                  <div className="mt-6">
                    <dl className="divide-y divide-gray-200">
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                        <dt className="text-sm font-medium text-gray-500">
                          Name
                        </dt>
                        <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          <span className="flex-grow">{user?.name}</span>
                          <span className="ml-4 flex-shrink-0">
                            <button
                              type="button"
                              className="rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                            >
                              Update
                            </button>
                          </span>
                        </dd>
                      </div>
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                        <dt className="text-sm font-medium text-gray-500">
                          Photo
                        </dt>
                        <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          <span className="flex-grow">
                            <img
                              className="h-8 w-8 rounded-full"
                              src={user?.picture}
                              alt={user?.name}
                            />
                          </span>
                          <span className="ml-4 flex-shrink-0 flex items-start space-x-4">
                            <button
                              type="button"
                              className="rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                            >
                              Update
                            </button>
                            <span className="text-gray-300" aria-hidden="true">
                              |
                            </span>
                            <button
                              type="button"
                              className="rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                            >
                              Remove
                            </button>
                          </span>
                        </dd>
                      </div>
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                        <dt className="text-sm font-medium text-gray-500">
                          Email
                        </dt>
                        <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          <span className="flex-grow">{user?.email}</span>
                          <span className="ml-4 flex-shrink-0">
                            <button
                              type="button"
                              className="rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                            >
                              Update
                            </button>
                          </span>
                        </dd>
                      </div>
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200">
                        <dt className="text-sm font-medium text-gray-500">
                          Job title
                        </dt>
                        <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          <span className="flex-grow">
                            {_.startCase(user?.role.displayField)}
                          </span>
                        </dd>
                      </div>
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200">
                        <dt className="text-sm font-medium text-gray-500">
                          Address
                        </dt>
                        <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          <span className="flex-grow">{user?.address}</span>
                        </dd>
                      </div>
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                        <dt className="text-sm font-medium text-gray-500">
                          Birthday
                        </dt>
                        <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          <span className="flex-grow">{user?.birthdate}</span>
                          <span className="ml-4 flex-shrink-0">
                            <button
                              type="button"
                              className="rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                            >
                              Update
                            </button>
                          </span>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              )}

              {activeTab === 1 && (
                <div className="mt-10 divide-y divide-gray-200">
                  <div className="space-y-1">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Account
                    </h3>
                    <p className="max-w-2xl text-sm text-gray-500">
                      Manage how information is displayed on your account.
                    </p>
                  </div>
                  <div className="mt-6">
                    <dl className="divide-y divide-gray-200">
                      <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                        <dt className="text-sm font-medium text-gray-500">
                          Password
                        </dt>
                        <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          <span className="flex-grow">********</span>
                          <span className="ml-4 flex-shrink-0">
                            <button
                              type="button"
                              className="rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                            >
                              Update
                            </button>
                          </span>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

SettingsPage.Layout = DashboardLayout;

export const getServerSideProps = withAuth(async () => {
  return {
    props: {},
  };
});

export default SettingsPage;
