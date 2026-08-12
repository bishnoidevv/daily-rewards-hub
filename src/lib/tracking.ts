import { useEffect, useState } from "react";

/** Base affiliate link — campaign name is appended as sub1. */
export const BASE_URL = "https://www.stw4c9hx.com/D6ZJJ4/K9TM4Q/?source_id=zoro";

/**
 * Reads the campaign name from the incoming URL (?source=... from TikTok)
 * and returns the affiliate link with it passed through as sub1.
 */
export function useTrackedUrl() {
  const [masterUrl, setMasterUrl] = useState(BASE_URL + "&sub1=1");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const campaignName = params.get("source");

    if (campaignName) {
      setMasterUrl(BASE_URL + "&sub1=" + encodeURIComponent(campaignName));
    }
  }, []);

  return masterUrl;
}
