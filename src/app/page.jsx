"use client";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import Pagination from "@/components/Pagination";
import Search from "@/components/Search";
import useSWR from "swr";

async function searchAlbums(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

export default function Home({ searchParams }) {
  const params = new URLSearchParams(searchParams);
  const page = Number(params.get("page") || 1);
  const { data, error, isLoading } = useSWR(
    `/api/search?${params.toString()}`,
    searchAlbums
  );

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  const { results = [], totalPages, hasMore } = data;

  return (
    <main className="flex min-h-screen">
      <div className="w-full">
        <Search results={results} />
        <Pagination totalPages={totalPages} page={page} />
      </div>
    </main>
  );
}
