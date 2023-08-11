import { useRouter, useSearchParams } from "next/navigation";

export default function Pagination({ totalPages, page = 1 }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const router = useRouter();
  const params = useSearchParams();
  // @ts-ignore
  const urlSearchParams = new URLSearchParams(params);

  const goToPage = (page) => {
    urlSearchParams.set("page", page);
    router.push("/?" + urlSearchParams.toString());
  };

  return (
    <ul className="list-style-none flex items-center justify-center my-5">
      {pages.map((p) => (
        <li key={p}>
          <button
            className={"pagination-link" + (p === page ? " active" : "")}
            onClick={() => goToPage(p)}>
            {p}
          </button>
        </li>
      ))}
    </ul>
  );
}
