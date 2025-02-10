import "./App.css";
import { LargeAuthorListItem } from "./components/authors/LargeListItems";
import { SmallAuthorListItems } from "./components/authors/SmallListItems";
import { LargeBookListItem } from "./components/books/LargeListItems";
import { SmallBookListItem } from "./components/books/SmallListItems";
import { RegularList } from "./components/lists/Regular";
import { SplitScreen } from "./components/splitScreen";
import { authors } from "./data/authors";
import { books } from "./data/books";

const LeftSideCom = ({ title }) => {
  return <h2 style={{ backgroundColor: "red" }}>{title}</h2>;
};

const RightSideCom = ({ title }) => {
  return <h2 style={{ backgroundColor: "blue" }}>{title}</h2>;
};
function App() {
  return (
    <>
      SPLIT SCREEN COMPONENT:
      <SplitScreen leftWidth={1} rightWidth={3}>
        <LeftSideCom title="I am left title" />
        <RightSideCom title="I am right title" />
      </SplitScreen>
      LIST COMPONENT:
      <RegularList
        items={authors}
        sourceName="author"
        ItemComponent={SmallAuthorListItems}
      />
      <RegularList
        items={authors}
        sourceName="author"
        ItemComponent={LargeAuthorListItem}
      />
      <RegularList
        items={books}
        sourceName="book"
        ItemComponent={SmallBookListItem}
      />
      <RegularList
        items={books}
        sourceName="book"
        ItemComponent={LargeBookListItem}
      />
    </>
  );
}

export default App;
