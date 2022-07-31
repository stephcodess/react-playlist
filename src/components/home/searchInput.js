import { Box, Button, Input } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
/**
 * @function SearchInput
 * @description The input field for serch through all matches
 * @param SearchProps
 * @returns
 */
const SearchInput = ({ placeholder, onChange }) => {
  return (
    <Box
      px="1.5rem"
      backgroundColor={
        localStorage.getItem("mode") === "dark" ? "rgba(0,0,0,0.9)" : "#fff"
      }
      color={
        localStorage.getItem("mode") === "dark" ? "#fff" : "#000"
      }
    >
      <Box
        mt="2rem"
        width="60%"
        h="50px"
        py="auto"
        bgColor="#C4C4C44a"
        d="flex"
        alignItems="center"
        borderRadius="full"
      >
        <Button
          borderRadius="100px"
          size="sm"
          bgColor="transparent"
          _focus={{ outline: "none" }}
          _hover={{ bgColor: "none" }}
          _active={{ bgColor: "none" }}
        >
          <FiSearch color="#000000" />
        </Button>

        <Input
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          bgColor="transparent"
          fontSize="sm"
          color={localStorage.getItem('mode') === 'dark' ? '#fff': '#000'}
          d="flex"
          alignItems="center"
          data-testid="search-input"
          w="80%"
          type="text"
          height="100%"
          py="0px"
          border="none"
        />
      </Box>
    </Box>
  );
};

export default SearchInput;
