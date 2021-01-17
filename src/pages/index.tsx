import DashboardLayout from "layouts/Dashboard";
import { withAuth } from "utils/withAuth";

function HomePage() {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
          <div className="ml-4 mt-2">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Job Postings
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit quam
              corrupti consectetur.
            </p>
          </div>
          <div className="ml-4 mt-2 flex-shrink-0">
            <button
              type="button"
              className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create new job
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-5 sm:p-6">
        <div className="bg-white shadow overflow-hidden sm:rounded-md"></div>
      </div>
    </div>
  );
}

HomePage.Layout = DashboardLayout;

export const getServerSideProps = withAuth(async () => {
  return {
    props: {},
  };
});

export default HomePage;
