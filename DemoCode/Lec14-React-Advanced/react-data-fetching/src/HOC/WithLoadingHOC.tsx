import useFetcher from "../hooks/useFetcher";
import { Todo } from "../types/Todo";

type ComponentProps = {
  data: Todo[];
};

type HOCProps = {
  url: string;
};

// HOC's let you reuse component logic, keeping your code DRY.
// You can fetch data, call hooks, pass in props, add new UI, etc with HOC's.
const WithLoadingHOC = (MyComponent: React.ComponentType<ComponentProps>) => {
  // Return a new function with added functionalities!
  return function WithLoadingHOCComponent({ url }: HOCProps) {
    const [data, loading, error] = useFetcher(url);

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>{error}</h1>;

    return <MyComponent data={data} />; // Return MyComponent
  };
};

export default WithLoadingHOC;
