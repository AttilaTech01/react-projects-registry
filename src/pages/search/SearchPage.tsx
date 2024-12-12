import { useLoaderData } from "react-router-dom";
import type { SearchLoaderResponse } from "./searchLoader";

export default function SearchPage() {
  const data = useLoaderData() as SearchLoaderResponse;
  console.log(data);

  return <div>Search Page</div>;
}
