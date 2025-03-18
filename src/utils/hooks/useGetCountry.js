"use client";
import { useParams } from "next/navigation";

export function useGetCountry() {
  const params = useParams();
  return params?.country;
}
