import tracks from "@/data/tracks.json";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const albumTracks = tracks.filter((track) => track.album_id === params.id);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return NextResponse.json(albumTracks);
}
