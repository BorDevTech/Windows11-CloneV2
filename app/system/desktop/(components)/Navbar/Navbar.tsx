"use client";
import { Center, GridItem } from "@chakra-ui/react";
import React from "react";

// interface NavbarProps {
//   iconSize: "lg-icons" | "md-icons" | "sm-icons";
//   sortType: "name" | "size" | "item-type" | "date-modified";
//   iconLayout: { x: number; y: number };
//   setIconSize: (value: "lg-icons" | "md-icons" | "sm-icons") => void;
//   setSortType: (value: "name" | "size" | "item-type" | "date-modified") => void;
//   setIconLayout: (value: { x: number; y: number }) => void;
// }
interface NavbarMenu {
  screenSize: { x: number; y: number };
}
// interface NavbarContextMenu {}

export default function Navbar({
  screenSize,
}: // setIconLayout,
// sortType,
// setSortType,
NavbarMenu) {
  return (
    <GridItem
      rowStart={screenSize.y}
      rowSpan={1}
      colSpan={screenSize.x}
      alignContent={"center"}
      backgroundColor={"rgba(31, 202, 224, 0.8)"}
    >
      <Center>20test</Center>
    </GridItem>
  );
}
