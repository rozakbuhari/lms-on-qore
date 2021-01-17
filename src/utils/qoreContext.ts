import { QoreClient, ProjectSchema } from "@feedloop/qore-client";
import createQoreContext from "@feedloop/qore-react";
import config from "qore.config.json";
import schema from "qore.schema.json";
import Cookie from "js-cookie";

export const client = new QoreClient<ProjectSchema>({
  ...config,
  getToken: () => Cookie.get("token"),
});
client.init(schema as any);

const qoreContext = createQoreContext(client);
export default qoreContext;
