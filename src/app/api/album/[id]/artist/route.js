import albums from "@/data/albums.json";
import artists from "@/data/artists.json";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const album = albums.find((album) => album.id === params.id);

  if (!album) {
    return new Response(null, {
      status: 404,
      statusText: "Album not found",
    });
  }

  // delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const artist = artists.find((artist) => album.artists.includes(artist.id));

  return NextResponse.json(artist);
}
