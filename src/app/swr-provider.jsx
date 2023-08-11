import SWRInit from "./swr-init";

const API_BASE_URL = process.env.API_BASE_URL;

async function getInitialData() {
  const response = await fetch(`${API_BASE_URL}/api/search?q=`);
  const json = await response.json();
  const totalPages = json.totalPages;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const data = {
    "/api/search?q=": json,
    "/api/search?q=&page=1": json,
  };

  for (let page of pages) {
    if (page === 1) continue;

    const response = await fetch(`${API_BASE_URL}/api/search?q=&page=${page}`);
    const json = await response.json();
    data[`/api/search?q=&page=${page}`] = json;
  }

  return data;
}

export default async function SWRProvider({ children }) {
  const initialData = await getInitialData();
  return <SWRInit initialData={initialData}>{children}</SWRInit>;
}
