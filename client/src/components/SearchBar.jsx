import { useDispatch } from "react-redux";
import { setSearchQuery } from "../store/Data/fetchPurchaseOrdersSlice";

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value || "")); // Ensure it's a string
  };

  return (
    <input
      className="w-96 rounded-lg border px-4 py-2 outline-none focus:border-primary"
      type="text"
      placeholder="Search Purchase Orders..."
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
