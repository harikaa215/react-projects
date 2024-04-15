import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData(url);
  }, []);

  const fetchData = async (url) => {
    try {
      const resp = await fetch(url);
      const respJSON = await resp.json();
      setData(respJSON.data);
      setIsLoading(false)
    } catch (err) {
      setIsLoading(false);
      setError(error);
    }
  };

  return { data, isLoading, error };
};

export default useFetch;
