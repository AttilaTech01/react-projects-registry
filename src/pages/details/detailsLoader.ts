import type { Params } from "react-router-dom";
import { getPackage } from "../../api/queries/getPackage";
import { PackageDetails } from "../../api/types/packageDetails";

interface LoaderArgs {
  params: Params;
}

export interface DetailsLoaderResponse {
  details: PackageDetails;
}

export async function detailsLoader({ params }: LoaderArgs): Promise<DetailsLoaderResponse> {
  const { name } = params;

  if (!name) {
    throw new Error("Name must be provided");
  }

  const details = await getPackage(name);

  return { details };
}
