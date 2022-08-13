import { useState } from "react";

import Loading from "../components/Loading/index.jsx";

export default function useLoading() {
  const [loading, setLoading] = useState(false);
  const loadingComponent = <Loading isLoading={loading} />;

  return [loading, () => loadingComponent, setLoading];
}
