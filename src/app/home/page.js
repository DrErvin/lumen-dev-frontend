import React, { Suspense } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import HomeClient from "./HomeClient";

export default function HomePage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <HomeClient />
    </Suspense>
  );
}
