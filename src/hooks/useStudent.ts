import { ProjectSchema } from "@feedloop/qore-client";
import { useEffect, useState } from "react";
import qoreContext, { client } from "utils/qoreContext";
import useSWR from "swr";

type Student = {
  id: string;
  displayField: string;
};

type Teacher = {
  id: string;
  displayField: string;
};

export default function useStudent(id: string) {
  const { data: student, revalidate } = qoreContext.views.allStudents.useGetRow(id);

  return { student, revalidate };
}
