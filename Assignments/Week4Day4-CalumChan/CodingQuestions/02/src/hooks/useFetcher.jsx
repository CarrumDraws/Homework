import { useState, useEffect } from "react";

import axios from "axios";

const useFetcher = () => {
  const [data, setData] = useState([]);

  const SEARCH_ENDPOINT = "https://api.github.com/search/repositories?q=react";

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    axios
      .get(SEARCH_ENDPOINT, { signal })
      .then((result) => {
        return result.data.items;
      })
      .then((repos) => {
        setData(
          repos.map(({ forks, name, stargazers_count, html_url }) => ({
            forks,
            name,
            stars: stargazers_count,
            url: html_url,
          }))
        );
      })
      .catch((error) => console.log(error.message));
  }, []);

  return [data];
};

export default useFetcher;
