"use client";

import { SimpleGrid } from "@chakra-ui/react";
import Navbar from "./(components)/Navbar/Navbar";

import { useState } from "react";
// import BackgroundSwitcher from "./(components)/Navbar/BackgroundSwitcher";
import AppLauncher from "./(components)/AppLauncher/AppLauncher";

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

export default function Desktop() {
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
  const [iconLayout, setIconLayout] = useState<{
    x: 18 | 25;
    y: 6 | 10 | 12;
  }>({
    y: iconSize === "lg-icons" ? 6 : iconSize === "md-icons" ? 10 : 12,
    x: iconSize === "lg-icons" ? 18 : iconSize === "md-icons" ? 25 : 25,
  });

  const [sortType, setSortType] = useState<
    "name" | "size" | "item-type" | "date-modified"
  >("name");
  const [screenSize] = useState({ x: 20, y: 20 });

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
      templateColumns={`repeat(${screenSize.x},1fr)`}
      templateRows={`repeat(${screenSize.y},1fr)`}
      userSelect="none"
      bgImage={`url("/images/image2.jpg")`}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      h={"100vh"}
      w={"100vw"}
      position={"absolute"}
    >
      <AppLauncher
        screenSize={screenSize}
        // contextMenu prop removed or replace with an appropriate value if needed
        iconSize={iconSize}
        sortType={sortType}
        iconLayout={iconLayout}
        setIconSize={setIconSize} // Pass setIconSize
        setSortType={setSortType} // Pass setIconSize
        setIconLayout={({ x, y }) => setIconLayout({ x, y })} // Map input to expected structure
      />
      <Navbar screenSize={screenSize} />
    </SimpleGrid>
  );
}
