import { Profiler } from "react";
import GroupPoster from "./components/Props/Poster/GroupPoster";
import Users from "./components/ListComponent/Users";
import Products from "./components/Props/Product/Products";
import Event from "./components/Events/Event";
import Counter from "./components/UseState/Counter/Counter";
import ObjectState from "./components/UseState/StateWithObject/ObjectState";
import GettingFromInput from "./components/UseState/GettingValues/GettingFromInput";

const App = () => {
  return (
    <>
      {/* <Profiler /> */}
      {/* <GroupPoster /> */}
      {/* <Users /> */}
      {/* <Products /> */}
      {/* <Counter /> */}
      {/* <ObjectState /> */}
      <GettingFromInput />
    </>
  );
};

export default App;
