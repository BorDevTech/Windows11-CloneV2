"use client";

import { Box, GridItem, SimpleGrid } from "@chakra-ui/react";
import Navbar from "./(components)/Navbar/page";

export default function Desktop() {
  return (
    <SimpleGrid
      templateColumns={`repeat(20,1fr)`}
      templateRows={`repeat(20,1fr)`}
      border={"1px solid white"}
      h={"100vh"}
      borderRadius={"10px 10px 10px 10px"}
    >
      <GridItem rowStart={1} rowEnd={1} alignContent={"center"}>
        1
      </GridItem>
      <GridItem rowStart={2} rowEnd={2} alignContent={"center"}>
        2
      </GridItem>
      <GridItem rowStart={3} rowEnd={3} alignContent={"center"}>
        3
      </GridItem>
      <GridItem rowStart={4} rowEnd={4} alignContent={"center"}>
        4
      </GridItem>
      <GridItem rowStart={5} rowEnd={5} alignContent={"center"}>
        5
      </GridItem>
      <GridItem rowStart={6} rowEnd={6} alignContent={"center"}>
        6
      </GridItem>
      <GridItem rowStart={7} rowEnd={7} alignContent={"center"}>
        7
      </GridItem>
      <GridItem rowStart={8} rowEnd={8} alignContent={"center"}>
        8
      </GridItem>
      <GridItem rowStart={9} rowEnd={9} alignContent={"center"}>
        9
      </GridItem>
      <GridItem rowStart={10} rowEnd={10} alignContent={"center"}>
        10
      </GridItem>
      <GridItem rowStart={11} rowEnd={11} alignContent={"center"}>
        11
      </GridItem>
      <GridItem rowStart={12} rowEnd={12} alignContent={"center"}>
        12
      </GridItem>
      <GridItem rowStart={13} rowEnd={13} alignContent={"center"}>
        13
      </GridItem>
      <GridItem rowStart={14} rowEnd={14} alignContent={"center"}>
        14
      </GridItem>
      <GridItem rowStart={15} rowEnd={15} alignContent={"center"}>
        15
      </GridItem>
      <GridItem rowStart={16} rowEnd={16} alignContent={"center"}>
        16
      </GridItem>
      <GridItem rowStart={17} rowEnd={17} alignContent={"center"}>
        17
      </GridItem>
      <GridItem rowStart={18} rowEnd={18} alignContent={"center"}>
        18
      </GridItem>
      <GridItem rowStart={19} rowEnd={19} alignContent={"center"}>
        19
      </GridItem>
      <Navbar />
      hoe
    </SimpleGrid>
  );
}
