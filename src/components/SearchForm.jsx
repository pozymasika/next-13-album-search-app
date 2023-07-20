"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function SearchForm({ searchText = "" }) {
  const router = useRouter();

  function handleSubmit(evt) {
    evt.preventDefault();
    const form = evt.target;
    router.push(`/?q=${form.q.value}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="search-form">
        <input
          type="text"
          name="q"
          placeholder="Search"
          defaultValue={searchText}
        />
        <button className="btn" type="submit">
          Search
        </button>
      </div>
    </form>
  );
}
