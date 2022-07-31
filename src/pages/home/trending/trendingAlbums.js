import { Box, Image } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { useState } from "react";
import HomeHeader from "../../../components/home/header";
import useFetchTrendingSongs from "../../../utils/customHooks";
const TrendingAlbums = () => {
  const [topSongs] = useFetchTrendingSongs({ type: "topalbums", limit: 100 });
  const [searchTerm, setSearchTerm] = useState("");

  const searchResponse = topSongs.feed.entry.filter(
    (song) =>
      song.title.label.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
  );

  return (
    <>
      <HomeHeader
        placeholder="Enter Title"
        onChange={(text) => setSearchTerm(text)}
      />
      <TableContainer
        color={localStorage.getItem("mode") === "dark" ? "#fff" : "#000"}
        backgroundColor={
          localStorage.getItem("mode") === "dark" ? "rgba(0,0,0,0.9)" : "#fff"
        }
      >
        <Table
          variant={localStorage.getItem("mode") === "dark" ? "" : "striped"}
        >
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>Title</Th>
              <Th>Author</Th>
              <Th>Category</Th>
              <Th isNumeric>Price</Th>
            </Tr>
          </Thead>
          <Tbody>
            {(searchTerm !== "" ? searchResponse : topSongs.feed.entry).map(
              (song, index) => (
                <Tr>
                  <Td>{index + 1}</Td>
                  <Td
                    display="flex"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <Image
                      src={song["im:image"][0].label}
                      alt={song.title.label}
                      mr="10px"
                    />
                    <a
                      href={song.link.attributes.href}
                      rel={song.link.attributes.rel}
                    >
                      {song.title.label.substr(0, 40)}
                    </a>
                  </Td>
                  <Td>{song.category.attributes.label.substr(0, 40)}</Td>
                  <Td>{song["im:artist"].label}</Td>
                  <Td isNumeric>{song["im:price"].label}</Td>
                </Tr>
              )
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TrendingAlbums;
