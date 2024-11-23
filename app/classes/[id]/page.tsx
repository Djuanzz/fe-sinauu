import React from "react";
import Classes from "@/components/Classes";

interface PageProps {
  params: { classId: string };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function page({ params }: PageProps) {
  return <Classes />;
}
