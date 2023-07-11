import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header title="React Application" />
      <Content/>
      <Footer quotes='"The purpose of our lives is to be happy." — Dalai Lama'/>
    </div>
  );
};

export default App;
