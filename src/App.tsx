import { Card } from "./components/Card";
import { Layout } from "./components/Layout";

function App() {
  return (
    <Layout>
      <Card id={1} />
      <Card id={2} />
      <Card id={3} />
    </Layout>
  );
}

export default App;
