"use client";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import Search from "@/components/Search";
import React from "react";
import useSWR from "swr";

async function searchAlbums(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

export default function Home({ searchParams }) {
  const searchText = searchParams.q || "";
  const {
    data: results = [],
    error,
    isLoading,
  } = useSWR(`/api/search?q=${searchText}`, searchAlbums);

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <main className="flex min-h-screen">
      <div className="w-full">
        <Search results={results} />
      </div>
    </main>
  );
}
