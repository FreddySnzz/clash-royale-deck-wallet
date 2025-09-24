import { useEffect, useState } from "react";

export function useCards() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
  }, []);

  return { loading };
}
