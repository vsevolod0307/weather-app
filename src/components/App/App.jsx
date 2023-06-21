import Layout from "../Layout";
import { QueryClientProvider, QueryClient } from "react-query";
// import { ReactQueryDevtools } from "react-query-devtools";
import "./App.scss";

const queryClient = new QueryClient({})

export default function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <span>Hello World!!!</span>
      </Layout>
      {/* // <ReactQueryDevtools initialIsOpen={true}/> */}
    </QueryClientProvider>
  )
}