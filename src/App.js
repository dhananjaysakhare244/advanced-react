import "./App.css";
import { SplitScreen } from "./components/splitScreen";

const LeftSideCom = ({ title }) => {
  return <h2 style={{ backgroundColor: "red" }}>{title}</h2>;
};

const RightSideCom = ({ title }) => {
  return <h2 style={{ backgroundColor: "blue" }}>{title}</h2>;
};
function App() {
  return (
    <>
      <SplitScreen leftWidth={1} rightWidth={3}>
        <LeftSideCom title="I am left title" />
        <RightSideCom title="I am right title" />
      </SplitScreen>
    </>
  );
}

export default App;
