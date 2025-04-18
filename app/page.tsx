"use client";
import { GridItem, SimpleGrid } from "@chakra-ui/react";
import Login from "./system/login/page";
import { useState } from "react";

// interface ContextMenu {
//   Iconmode: {
//     size: `lg-icons` | `md-icons` | `sm-icons`;
//     layout: { x: 36 | 50; y: 18 | 22 | 26 };
//   };
//   Sortmode: `name` | `size` | `item-type` | `date-modified`;
//   AdditionMode: {
//     filetype:
//       | "folder"
//       | "shortcut"
//       | "bitmap-image"
//       | "text-document"
//       | "compressed-folder";
//   };
// }
export default function StartUp() {
  //@ts-ignore
  const [iconSize, setIconSize] = useState<
    "lg-icons" | "md-icons" | "sm-icons"
  >("lg-icons");
  // LG icons shows 6 items per column 18 items per row (x:36, y:18)
  // MD icons shows 10 items per column 25 items per row (x:50, y:22)
  // SM icons shows 12 items per column 25 items per row (x:50, y:26)

  // const iconSizes = [
  //   { label: "LG icons", value: "lg-icons" },
  //   { label: "MD icons", value: "md-icons" },
  //   { label: "SM icons", value: "sm-icons" },
  // ];
  //@ts-ignore
  const [iconLayout, setIconLayout] = useState({
    yMax: iconSize === "lg-icons" ? 18 : iconSize === "md-icons" ? 22 : 26,
    xMax: iconSize === "lg-icons" ? 36 : iconSize === "md-icons" ? 50 : 50,
  });
  // Name shows items listed in ABC order
  // Size shows items listed in title.length order
  // Item type shows items listed by "system" or custom* order
  // Date modified shows items listed by date modified order

  // *custom order is projects created and advertised by subscription
  // const sortTypes = [
  //   { label: "Name", value: "name" },
  //   { label: "Size", value: "size" },
  //   { label: "Item type", value: "item-type" },
  //   { label: "Date modified", value: "date-modified" },
  // ];

  return (
    <SimpleGrid
      templateColumns={`repeat(${iconLayout.xMax},1fr)`}
      templateRows={`repeat(${iconLayout.yMax},1fr)`}
      userSelect="none"
      bgImage={`url("/images/image2.jpg")`}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      h={"100vh"}
      w={"100vw"}
      position={"absolute"}
    >
      <GridItem
        alignItems={"center"}
        colStart={iconLayout.xMax * (1 / 3) + 1}
        colEnd={iconLayout.xMax * (2 / 3) + 1}
        rowStart={iconLayout.yMax * (1 / 3) + 1}
        rowEnd={iconLayout.yMax * (2 / 3) + 1}
      >
        <Login />
      </GridItem>
    </SimpleGrid>
  );
}
