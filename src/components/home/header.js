
import SearchInput from "./searchInput";

const HomeHeader = ({ onChange, placeholder }) => {
    
  return (
    <SearchInput
      placeholder={placeholder}
      onChange={(text) => onChange(text)}
    />
  );
};

export default HomeHeader;
