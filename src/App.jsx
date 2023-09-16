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
import ToggleWithState from "./components/UseState/ToggleWithState/ToggleWithState";
import ChangeTitle from "./components/UseEffect/ChangeTitle/ChangeTitle";
import FetchingData from "./components/UseEffect/FetchAPI/fetchingData";
import StateWithForm from "./components/UseState/FormInput/StateWithForm";
import RefCounter from "./components/useRef/RehWithCount/RefCounter";
import Toggle from "./components/CustomHook/useToggle/Toggle";
import UseFetchData from "./components/CustomHook/useFetchData/UseFetchData";
import Navbar from "./components/useContext/Navigation/Navbar";
import CustomNavbar from "./components/CustomHook/useNavBarContext/CustomNavBar";
import RemoveUser from "./components/useReducer/RemoveUser/RemoveUser";
import FetchData from "./components/useReducer/FectchData/FetchData";

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
      {/* <UserList /> */}
      {/* <ToggleWithState /> */}
      {/* <ChangeTitle /> */}
      {/* <FetchingData /> */}
      {/* <StateWithForm /> */}
      {/* <RefCounter /> */}
      {/* <Toggle /> */}
      {/* <UseFetchData /> */}
      {/* <Navbar /> */}
      {/* <CustomNavbar /> */}
      {/* <RemoveUser /> */}
      <FetchData />
    </>
  );
};

export default App;
