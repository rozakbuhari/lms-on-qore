import { ProjectSchema } from "@feedloop/qore-client";
import { useEffect, useState } from "react";
import { client } from "utils/qoreContext";
import useSWR from "swr";

export default function useUploadURL() {
  const { endpoint, organizationId, projectId } = client.project.config;

  return async function getURL(url = "foo.png") {
    const response = await client.project.axios.request<{ url: string }>({
      baseURL: endpoint,
      url: `/orgs/${organizationId}/projects/${projectId}/tables/files/upload-url?fileName=${url}`,
      method: "GET",
    });

    return response.data.url;
  };
}
