import SearchBar from "./components/search/SearchBar";
import { useState } from "react";
import UserList from "./components/user/UserList";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <div className={"max-w-xl"}>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      <div className="pt-3 h-full overflow-scroll hide-scrollbar">
        <UserList searchQuery={searchQuery} />
      </div>
    </>
  );
}
