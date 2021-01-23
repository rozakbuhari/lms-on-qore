import { Empty } from "antd";
import Link from "next/link";
import React from "react";
import useStudent from "src/hooks/useStudent";
import useUser from "src/hooks/useUser";
import qoreContext from "utils/qoreContext";

function StudentDashboard() {
  const { user } = useUser();
  console.log(user.students.nodes[0].id);
  const { data: student } = qoreContext.views.allStudents.useGetRow(
    user?.students?.nodes[0]?.id
  );

  return (
    <>
      <div className="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Available Courses
        </h3>
        <div className="mt-3 sm:mt-0 sm:ml-4">
          <label htmlFor="search_course" className="sr-only">
            Search
          </label>
          <div className="flex rounded-md shadow-sm">
            <div className="relative flex-grow focus-within:z-10">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                name="search_course"
                id="search_course"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-10 sm:hidden border-gray-300"
                placeholder="Search"
              />
              <input
                type="text"
                name="search_course"
                id="search_course"
                className="hidden focus:ring-indigo-500 focus:border-indigo-500 w-full rounded-none rounded-l-md pl-10 sm:block sm:text-sm border-gray-300"
                placeholder="Search courses"
              />
            </div>
            <button
              type="button"
              className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z" />
              </svg>
              <span className="ml-2">Sort</span>
              <svg
                className="ml-2.5 -mr-1.5 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="px-4 pt-14 pb-40">
        <div className="overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {student?.courses.nodes.length < 0 ? (
              student?.courses.nodes.map((course: any, index) => (
                <li key={index}>
                  <Link href={`/courses/${course.id}`}>
                    <a className="block hover:bg-gray-50">
                      <div className="flex items-center px-4 py-4 sm:px-6">
                        <div className="min-w-0 flex-1 flex items-center">
                          <div className="flex-shrink-0">
                            <span className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-gray-500">
                              <span className="text-xl font-medium leading-none text-white">
                                {course.displayField.substr(0, 1)}
                              </span>
                            </span>
                          </div>
                          <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                            <div>
                              <p className="text-sm font-medium text-indigo-600 truncate">
                                {course.displayField}
                              </p>
                              <p className="mt-2 flex items-center text-sm text-gray-500">
                                <span className="truncate">
                                  {course.displayField}
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="mt-4 flex-shrink-0 sm:mt-0">
                            <div className="flex -space-x-2 overflow-hidden">
                              <img
                                className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                              />
                              <img
                                className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                              />
                              <img
                                className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                alt=""
                              />
                              <img
                                className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                              />
                              <span className="inline-flex items-center justify-center h-8 w-8 rounded-full ring-2 ring-white bg-gray-400">
                                <span className="text-sm font-medium leading-none text-white">
                                  2+
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="ml-5 flex-shrink-0">
                          <svg
                            className="h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </a>
                  </Link>
                </li>
              ))
            ) : (
              <Empty
                className="mt-48"
                imageStyle={{ height: "100%" }}
                description={
                  <p>
                    You have not enrolled in any class yet.
                    <br />
                    Please contact your{' '}
                    <strong>Teacher</strong> to invite you to their classes.
                  </p>
                }
              />
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default StudentDashboard;
