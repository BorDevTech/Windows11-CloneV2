"use client";
import { Center, GridItem } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <GridItem
      rowStart={20}
      rowEnd={20}
      alignContent={"center"}
      colStart={1}
      colEnd={21}
      border={"1px solid white"}
    >
      <Center>20test</Center>
    </GridItem>
  );
};

export default Navbar;
