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
interface ContextMenu {
  Iconmode: {
    size: `lg-icons` | `md-icons` | `sm-icons`;
    layout: { x: 36 | 50; y: 18 | 22 | 26 };
  };
  Sortmode: `name` | `size` | `item-type` | `date-modified`;
  sortType: `name` | `size` | `item-type` | `date-modified`;
  setSortType: (value: `name` | `size` | `item-type` | `date-modified`) => void;
  iconLayout: { x: number; y: number };
  setIconLayout: (value: { x: number; y: number }) => void;
  AdditionMode: {
    filetype:
      | "folder"
      | "shortcut"
      | "bitmap-image"
      | "text-document"
      | "compressed-folder";
  };
  iconSize: "lg-icons" | "md-icons" | "sm-icons";
  setIconSize: (value: `lg-icons` | `md-icons` | `sm-icons`) => void;
}

export default function Navbar({
  // iconSize,
  // setIconSize,
  iconLayout,
}: // setIconLayout,
// sortType,
// setSortType,
ContextMenu) {
  return (
    <GridItem
      rowStart={iconLayout.y}
      rowEnd={iconLayout.y + 1}
      colSpan={iconLayout.x}
      alignContent={"center"}
      border={"1px solid white"}
    >
      <Center>20test</Center>
    </GridItem>
  );
}
