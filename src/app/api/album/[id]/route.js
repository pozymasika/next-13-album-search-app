import albums from "@/data/albums.json";
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
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return NextResponse.json(album);
}
