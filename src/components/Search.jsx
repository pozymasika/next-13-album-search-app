import Image from "next/image";
import Link from "next/link";

export default function Search({ results }) {
  return (
    <section>
      <div className="container flex flex-wrap mx-auto">
        {results.map((album) => (
          <div className="w-1/4 p-2" key={album.id}>
            <div className="rounded overflow-hidden shadow-lg">
              <div className="img-container aspect-square dark:bg-gray-700">
                <Image
                  width={363}
                  height={363}
                  src={album.image.url}
                  alt={album.name}
                />
              </div>
              <div className="px-6 py-4">
                <p className="font-bold text-xl mb-2 text-ellipsis overflow-hidden">
                  <Link href={"/album/" + album.id}>{album.name}</Link>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
