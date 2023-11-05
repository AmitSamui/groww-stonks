"use client"; // Error components must be Client Components

import Error from "@/Components/Error/Error";
import { useEffect } from "react";

export default function ErrorFallback({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return <Error errorText={"Something went wrong please try again"} />;
}
