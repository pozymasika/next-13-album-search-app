const API_BASE_URL = process.env.API_BASE_URL;

async function getAlbumTracks(id) {
  const response = await fetch(`${API_BASE_URL}/api/album/${id}/tracks`);
  return response.json();
}

export default async function TracksPage({ params }) {
  const tracks = await getAlbumTracks(params.id);
  return (
    <div className="w-full flex flex-col">
      <table>
        <colgroup>
          <col style={{ width: "5%" }} />
          <col style={{ width: "95%" }} />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" className="px-6 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              Track Name
            </th>
          </tr>
        </thead>
        <tbody>
          {tracks.map((track, idx) => (
            <tr>
              <th scope="row">{idx + 1}</th>
              <td className="px-6 py-4">{track.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
