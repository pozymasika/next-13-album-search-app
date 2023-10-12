"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Genres = () => {
  const params = useSearchParams();
  const genres = ["Pop", "Hip Hop", "Alternative"];
  const artists = [
    {
      name: "Taylor Swift",
      id: "06HL4z0CvFAxyc27GXpf02",
    },
    {
      name: "Drake",
      id: "3TVXtAsR1Inumwj472S9r4",
    },
    {
      name: "J. Cole",
      id: "6l3HvQ5sa6mXTsMTB19rO5",
    },
  ];
  const active = params.get("genre") || "";

  const toggleQuery = (key, value) => {
    const query = Object.fromEntries(params);
    if (query[key] === value) {
      delete query[key];
    } else {
      query[key] = value;
    }

    console.log(query);

    return query;
  };

  const toggleMultipleQuery = (key, value) => {
    const query = Object.fromEntries(params);
    let values = query[key] ? query[key].split(",") : [];
    // if the key is in the query, check if the value is in the array
    // if the value is in the array, remove it
    if (values.includes(value)) {
      values = values.filter((v) => v !== value);
    } else {
      // if the value is not in the array, add it
      values.push(value);
    }
    // if the array is empty after removing the value, remove the key
    if (values.length === 0) {
      delete query[key];
    } else {
      // otherwise, add the key with the new values
      query[key] = values.join(",");
    }

    console.log(query);
    return query;
  };

  const activeArtists = params.get("artists") || "";

  return (
    <section>
      <div className="flex items-center justify-center m-4">
        {genres.map((genre, index) => (
          <Link
            key={genre}
            className={"badge " + (genre === active ? "active" : "")}
            href={{
              pathname: "/",
              query: toggleQuery("genre", genre),
            }}
          >
            {genre}
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center m-4">
        {artists.map((artist, index) => (
          <Link
            key={artist.id}
            className={
              "badge " + (activeArtists.includes(artist.id) ? "active" : "")
            }
            href={{
              pathname: "/",
              query: toggleMultipleQuery("artists", artist.id),
            }}
          >
            {artist.name}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Genres;
