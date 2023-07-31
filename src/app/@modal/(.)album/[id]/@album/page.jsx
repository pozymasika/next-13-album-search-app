import Image from "next/image";

const API_BASE_URL = process.env.API_BASE_URL;

async function getAlbum(id) {
  const response = await fetch(`${API_BASE_URL}/api/album/${id}`);
  return response.json();
}

export default async function AlbumPage({ params }) {
  const album = await getAlbum(params.id);
  return (
    <div className="w-1/4 p-2" key={album.id}>
      <div className="rounded overflow-hidden shadow-lg">
        <Image
          width={304}
          height={304}
          src={album.image.url}
          alt={album.name}
        />
        <div className="px-6 py-4">
          <p className="font-bold text-xl mb-2 text-ellipsis overflow-hidden">
            {album.name}
          </p>
        </div>
      </div>
    </div>
  );
}
