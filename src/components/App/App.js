import { useEffect } from "react";
import Layout from "../Layout";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import "./App.scss";
import SearchWeather from "../SearchWeather";

const queryClient = new QueryClient({})

export default function App() {
  useEffect(() => {
    window.process = {
      ...window.process,
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <SearchWeather/>
      </Layout>
      {/* <ReactQueryDevtools initialIsOpen={false}/> */}
    </QueryClientProvider>
  )
}