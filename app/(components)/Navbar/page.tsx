"use client";
import { Center, GridItem } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <GridItem
      rowStart={20}
      rowEnd={21}
      colSpan={19}
      alignContent={"center"}
      border={"1px solid white"}
    >
      <Center>20test</Center>
    </GridItem>
  );
};

export default Navbar;
