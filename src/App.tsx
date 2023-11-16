import "./App.css";
import { Layout } from "./components";
import { Main, About, Experience } from "./components";

function App() {
  return (
    <>
      <Layout>
        <Main />
        <About />
        <Experience />
      </Layout>
    </>
  );
}

export default App;
