import qoreContext from "utils/qoreContext";
import DashboardLayout from "layouts/Dashboard";
import Link from "next/link";

function CoursesPage() {
  const { data: courses } = qoreContext.views.allCourses.useListRow({
    offset: 0,
    limit: 10,
    order: "asc",
  });

  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
          <div className="ml-4 mt-2">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Courses
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit quam
              corrupti consectetur.
            </p>
          </div>
          <div className="ml-4 mt-2 flex-shrink-0">
            <button
              disabled
              type="button"
              className="disabled:opacity-50 relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Create course
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-8 pt-14 pb-40">
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {courses.map((course, index) => (
              <li key={index}>
                <Link href={`/courses/${course.id}`}>
                  <a className="block hover:bg-gray-50">
                    <div className="flex items-center px-4 py-4 sm:px-6">
                      <div className="min-w-0 flex-1 flex items-center">
                        <div className="flex-shrink-0">
                          <span className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-gray-500">
                            <span className="text-xl font-medium leading-none text-white">
                              {course.name.substr(0, 1)}
                            </span>
                          </span>
                        </div>
                        <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                          <div>
                            <p className="text-sm font-medium text-indigo-600 truncate">
                              {course.name}
                            </p>
                            <p className="mt-2 flex items-center text-sm text-gray-500">
                              <span className="truncate">
                                {course.description}
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
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

CoursesPage.Layout = DashboardLayout;

export default CoursesPage;
