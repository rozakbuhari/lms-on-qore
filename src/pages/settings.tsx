import DashboardLayout from "layouts/Dashboard";
import _ from "lodash";
import useUser from "src/hooks/useUser";
import { withAuth } from "utils/withAuth";

function SettingsPage() {
  const user = useUser();

  return (
    <main className="flex-1 overflow-y-auto focus:outline-none" tabIndex={0}>
      <div className="relative max-w-4xl mx-auto md:px-8 xl:px-0">
        <div className="pt-10 pb-16">
          <div className="px-4 sm:px-6 md:px-0">
            <h1 className="text-3xl font-extrabold text-gray-900">Settings</h1>
          </div>
          <div className="px-4 sm:px-6 md:px-0">
            <div className="py-6">
              <div className="lg:hidden">
                <label htmlFor="selected-tab" className="sr-only">
                  Select a tab
                </label>
                <select
                  id="selected-tab"
                  name="selected-tab"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md"
                >
                  <option selected>General</option>

                  <option>Notifications</option>

                  <option>Plan</option>

                  <option>Billing</option>

                  <option>Team Members</option>
                </select>
              </div>
              <div className="hidden lg:block">
                <div className="border-b border-gray-200">
                  <nav className="-mb-px flex">
                    <a
                      href="#"
                      className="border-purple-500 text-purple-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                    >
                      General
                    </a>

                    <a
                      href="#"
                      className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap ml-8 py-4 px-1 border-b-2 font-medium text-sm"
                    >
                      Password
                    </a>

                    <a
                      href="#"
                      className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap ml-8 py-4 px-1 border-b-2 font-medium text-sm"
                    >
                      Notifications
                    </a>

                    <a
                      href="#"
                      className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap ml-8 py-4 px-1 border-b-2 font-medium text-sm"
                    >
                      Plan
                    </a>

                    <a
                      href="#"
                      className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap ml-8 py-4 px-1 border-b-2 font-medium text-sm"
                    >
                      Billing
                    </a>

                    <a
                      href="#"
                      className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap ml-8 py-4 px-1 border-b-2 font-medium text-sm"
                    >
                      Team Members
                    </a>
                  </nav>
                </div>
              </div>

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
                        <span className="flex-grow">
                          {user?.birthdate}
                        </span>
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
