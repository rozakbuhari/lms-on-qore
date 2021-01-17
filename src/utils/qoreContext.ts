import { QoreClient, ProjectSchema } from "@feedloop/qore-client";
import createQoreContext from "@feedloop/qore-react";
import config from "qore.config.json";
import schema from "qore.schema.json";
// import Cookie from "js-cookie";

export const client = new QoreClient<ProjectSchema>({
  ...config,
  // getToken: () => Cookie.get("token"),
  // onError: (error) => {
  //   switch (error.message) {
  //     case "Request failed with status code 401":
  //       if (
  //         window.location.pathname !== "/login" &&
  //         process.env.NODE_ENV === "production"
  //       ) {
  //         window.location.href = "/login";
  //       }
  //       break;

  //     default:
  //       break;
  //   }
  // },
});
client.init(schema as any);

const qoreContext = createQoreContext(client);
export default qoreContext;
