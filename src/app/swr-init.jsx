"use client";
import { SWRConfig } from "swr";

export default function SWRInit({ children, initialData }) {
  return (
    <SWRConfig
      value={{
        fallback: initialData,
        revalidateOnMount: false,
        revalidateIfStale: false,
      }}>
      {children}
    </SWRConfig>
  );
}
