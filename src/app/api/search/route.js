import albums from "@/data/albums.json";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q") || "";
  const genre = searchParams.get("genre") || "";
  const artists = searchParams.get("artists")?.split(",") || [];

  const results = albums.filter((album) => {
    const matchesQuery = album.name.toLowerCase().includes(query.toLowerCase());
    const matchesGenre = album.genre ? album.genre.includes(genre) : true;
    const matchesArtists =
      artists.length > 0
        ? album.artists.some((artist) => artists.includes(artist))
        : true;

    return matchesQuery && matchesGenre && matchesArtists;
  });

  // pagination
  const perPage = 12;
  const page = Number(searchParams.get("page")) || 1;
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const paginatedResults = results.slice(start, end);

  const totalPages = Math.ceil(results.length / perPage);
  const hasMore = page < totalPages;

  // Simulate a slow response
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return NextResponse.json({
    results: paginatedResults,
    hasMore,
    totalPages,
  });
}
