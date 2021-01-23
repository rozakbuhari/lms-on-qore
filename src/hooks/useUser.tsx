import { ProjectSchema } from "@feedloop/qore-client";
import { useEffect, useState } from "react";
import { client } from "utils/qoreContext";
import useSWR from "swr";

export default function useUser() {
  const { data: user, mutate } = useSWR("/user/me", () => {
    const { endpoint, organizationId, projectId } = client.project.config;

    return client.project.axios
      .request<{ data: ProjectSchema["allMember"]["read"] }>({
        baseURL: endpoint,
        url: `/orgs/${organizationId}/projects/${projectId}/me`,
        method: "GET",
      })
      .then((resp) => {
        return resp.data.data;
      });
  });

  return { user, mutate };
}
