import { GetServerSideProps, GetServerSidePropsContext } from "next";

export const withAuth = (
  getServerSidePropsFn: GetServerSideProps<{ token?: string }>
) => (context: GetServerSidePropsContext & { token?: string }) => {
  const token = context.req.cookies?.token;

  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }

  return getServerSidePropsFn(context);
};
