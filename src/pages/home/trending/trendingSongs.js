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
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import HomeHeader from "../../../components/home/header";
import useFetchTrendingSongs from "../../../utils/customHooks";
const TrendingSongs = () => {
  const [topSongs] = useFetchTrendingSongs({ type: "topsongs", limit: 100 });
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
      <TableContainer backgroundColor={localStorage.getItem('mode') === 'dark' ? 'rgba(0,0,0,0.9)': '#fff'}>
        <Table variant={localStorage.getItem('mode') === 'dark' ? '': 'striped'}>
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>title</Th>
              <Th>Artist</Th>
              <Th isNumeric> Price</Th>
            </Tr>
          </Thead>
          <Tbody>
            {(searchTerm !== "" ? searchResponse : topSongs.feed.entry).map((song, index) => (
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
                    href={song.link[0].attributes.href}
                    rel={song.link[0].attributes.rel}
                  >
                    {song.title.label}
                  </a>
                </Td>
                <Td>
                  <a href={song["im:artist"].attributes.href}>
                    {song["im:artist"].label}
                  </a>
                </Td>
                <Td isNumeric>{song["im:price"].label}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TrendingSongs;
