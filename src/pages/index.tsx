import StudentDashboard from "components/StudentDashboard";
import DashboardLayout from "layouts/Dashboard";
import useUser from "src/hooks/useUser";
import { withAuth } from "utils/withAuth";

function HomePage() {
  const { user } = useUser();

  return (
    <>{user?.role.displayField === "student" ? <StudentDashboard /> : null}</>
  );
}

HomePage.Layout = DashboardLayout;

export const getServerSideProps = withAuth(async () => {
  return {
    props: {},
  };
});

export default HomePage;
