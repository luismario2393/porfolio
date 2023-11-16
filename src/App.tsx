import "./App.css";
import { Layout } from "./components";
import { Main } from "./components";
import { About } from "./components/about";

function App() {
  return (
    <>
      <Layout>
        <Main />
        <About />
      </Layout>
    </>
  );
}

export default App;
