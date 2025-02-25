import { useLoaderData } from "react-router-dom";
import type { HomeLoaderResponse } from "./homeLoader";

export default function HomePage() {
  const { featuredPackages } = useLoaderData() as HomeLoaderResponse;

  console.log(featuredPackages);

  return <div>Home Page</div>;
}
