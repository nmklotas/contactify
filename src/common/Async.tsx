import { Loading } from "./Loading";
import { Error } from "./Error";

interface Props {
  loading: boolean;
  error?: unknown;
  children: JSX.Element;
}

export function Async({ loading, error, children }: Props) {
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return children;
}
