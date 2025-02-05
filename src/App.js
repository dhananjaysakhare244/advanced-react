import logo from "./logo.svg";
import "./App.css";
import { SplitScreen } from "./components/splitScreen";

const LeftSideCom = () => {
  return <h2 style={{ backgroundColor: "red" }}>I am left</h2>;
};

const RightSideCom = () => {
  return <h2 style={{ backgroundColor: "blue" }}>I am right</h2>;
};
function App() {
  return (
    <>
      <SplitScreen Left={LeftSideCom} Right={RightSideCom} />
    </>
  );
}

export default App;
