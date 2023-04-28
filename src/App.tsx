import SearchBar from "./components/search/SearchBar";
import UserList from "./components/user/UserList";

export default function App() {
  return (
    <>
      <div className={"max-w-xl"}>
        <SearchBar />
      </div>
      <div className="pt-3 h-full overflow-scroll hide-scrollbar">
        <UserList />
      </div>
    </>
  );
}
