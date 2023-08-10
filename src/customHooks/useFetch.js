import { useState, useEffect } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer " + API_KEY,
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setError("");
        setData(data);
        return data;
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        console.error("error:" + err);
      });
  }, [url]);
  return [data, loading, error];
};

export default useFetch;
