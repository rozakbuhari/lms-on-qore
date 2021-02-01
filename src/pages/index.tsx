import StudentDashboard from "components/StudentDashboard";
import TeacherDashboard from "components/TeacherDashboard";
import DashboardLayout from "layouts/Dashboard";
import useUser from "hooks/useUser";
import { withAuth } from "utils/withAuth";

function HomePage() {
  const { user } = useUser();

  return (
    <>{user?.role.displayField === "student" ? <StudentDashboard /> : <TeacherDashboard />}</>
  );
}

HomePage.Layout = DashboardLayout;

export const getServerSideProps = withAuth(async () => {
  return {
    props: {},
  };
});

export default HomePage;
