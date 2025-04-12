"use client";

import { SimpleGrid } from "@chakra-ui/react";
import Navbar from "./(components)/Navbar/page";
import { useState } from "react";
// import BackgroundSwitcher from "./(components)/Navbar/BackgroundSwitcher";
import AppLauncher from "./(apps)/page";

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

  const [iconLayout, setIconLayout] = useState({
    yMax: iconSize === "lg-icons" ? 18 : iconSize === "md-icons" ? 22 : 26,
    xMax: iconSize === "lg-icons" ? 36 : iconSize === "md-icons" ? 50 : 50,
  });

  const [sortType, setSortType] = useState<
    "name" | "size" | "item-type" | "date-modified"
  >("name");

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
    <>
      {/* <BackgroundSwitcher /> */}

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
        <AppLauncher
          // contextMenu prop removed or replace with an appropriate value if needed
          iconSize={iconSize} // Pass setIconSize
          sortType={sortType} // Pass setIconSize
          iconLayout={{ x: iconLayout.xMax, y: iconLayout.yMax }} // Pass setIconLayout
          setIconSize={setIconSize} // Pass setIconSize
          setSortType={setSortType} // Pass setIconSize
          setIconLayout={({ x, y }) => setIconLayout({ xMax: x, yMax: y })} // Map input to expected structure
        />
        <Navbar
          iconSize={iconSize} // Pass iconSize state
          sortType={sortType} // Pass sortType state
          iconLayout={{ x: iconLayout.xMax, y: iconLayout.yMax }} // Pass iconLayout state
          setIconSize={setIconSize} // Pass setIconSize function
          setSortType={setSortType} // Pass setSortType function
          setIconLayout={({ x, y }) => setIconLayout({ xMax: x, yMax: y })} // Pass setIconLayout function
        />
      </SimpleGrid>
    </>
  );
}
