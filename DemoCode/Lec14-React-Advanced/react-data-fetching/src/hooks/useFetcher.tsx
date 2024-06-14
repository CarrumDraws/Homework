import { useState, useEffect } from 'react';
import { Todo } from '../types/Todo';
import axios from '../interceptors/auth.interceptor';

const useFetcher = (url: string): [Todo[], boolean, string] => {
  const [data, setData] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    setLoading(true);

    const controller = new AbortController();
    const signal = controller.signal;

    axios
      .get(url, { signal })
      .then((response) => setData(response.data.slice(0, 5)))
      .catch((error: Error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [url]);

  return [data, loading, error];
};

export default useFetcher;
