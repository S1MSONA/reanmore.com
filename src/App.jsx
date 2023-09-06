import { Profiler } from "react";
import GroupPoster from "./components/Props/Poster/GroupPoster";
import Users from "./components/ListComponent/Users";
import Products from "./components/Props/Product/Products";
import Event from "./components/Events/Event";
import Counter from "./components/UseState/Counter/Counter";
import ObjectState from "./components/UseState/StateWithObject/ObjectState";
import GettingFromInput from "./components/UseState/GettingValues/GettingFromInput";
import Updater from "./components/UseState/UpdaterFunction/Updater";
import UserList from "./components/UseState/RemoveUser/UserList";

const App = () => {
  return (
    <>
      {/* <Profiler /> */}
      {/* <GroupPoster /> */}
      {/* <Users /> */}
      {/* <Products /> */}
      {/* <Counter /> */}
      {/* <ObjectState /> */}
      {/* <GettingFromInput /> */}
      {/* <Updater /> */}
      <UserList />
    </>
  );
};

export default App;
