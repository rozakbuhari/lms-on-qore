import { ProjectSchema } from "@feedloop/qore-client";
import { useEffect, useState } from "react";
import { client } from "utils/qoreContext";

export default function useUser() {
  const [user, setUser] = useState<
    ProjectSchema["allMember"]["read"] | undefined
  >();

  useEffect(() => {
    const { endpoint, organizationId, projectId } = client.project.config;
    client.project.axios
      .request<{ data: ProjectSchema["allMember"]["read"] }>({
        baseURL: endpoint,
        url: `/orgs/${organizationId}/projects/${projectId}/me`,
        method: "GET",
      })
      .then((resp) => {
        setUser(resp.data.data);
      });
  }, []);

  return user;
}
