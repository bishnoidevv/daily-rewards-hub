import { useEffect, useState } from "react";

/** Base affiliate link — incoming sub1 is forwarded when present. */
export const BASE_URL = "https://www.stw4c9hx.com/D6ZJJ4/3TJ7N7/?source_id=dezo";

/**
 * Reads sub1 from the incoming page URL and forwards its value to the
 * affiliate offer while preserving every existing offer parameter.
 */
export function useTrackedUrl() {
  const [masterUrl, setMasterUrl] = useState(BASE_URL);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sub1 = params.get("sub1");

    if (sub1 !== null) {
      const affiliateUrl = new URL(BASE_URL);
      affiliateUrl.searchParams.set("sub1", sub1);
      setMasterUrl(affiliateUrl.toString());
    }
  }, []);

  return masterUrl;
}
