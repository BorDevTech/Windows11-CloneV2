"use client";

import { Center, GridItem, Menu, Portal, SimpleGrid } from "@chakra-ui/react";
import Navbar from "./(components)/Navbar/page";
import { LuChevronRight } from "react-icons/lu";
import { useState } from "react";
import BackgroundSwitcher from "./(components)/Navbar/BackgroundSwitcher";


 

export default function Desktop() {
  const [iconSize, setIconSize] = useState("lg-icons");
  // LG icons shows 6 items per column 18 items per row
  // MD icons shows 10 items per column 25 items per row
  // SM icons shows 12 items per column 25 items per row

  const iconSizes = [
    { label: "LG icons", value: "lg-icons" },
    { label: "MD icons", value: "md-icons" },
    { label: "SM icons", value: "sm-icons" },
  ];

  const [iconLayout, setIconLayout] = useState({
    xMax: iconSize === "lg-icons" ? 6 : iconSize === "md-icons" ? 10 : 12,
    yMax: iconSize === "lg-icons" ? 18 : iconSize === "md-icons" ? 25 : 25,
  });

  const [sortType, setSortType] = useState("name");

  // Name shows items listed in ABC order
  // Size shows items listed in title.length order
  // Item type shows items listed by "system" or custom* order
  // Date modified shows items listed by date modified order

  // *custom order is projects created and advertised by subscription
  const sortTypes = [
    { label: "Name", value: "name" },
    { label: "Size", value: "size" },
    { label: "Item type", value: "item-type" },
    { label: "Date modified", value: "date-modified" },
  ];

  return (
    <>
    <BackgroundSwitcher />
      <Menu.Root>
        <Menu.ContextTrigger width="full">
          <SimpleGrid
            templateColumns={`repeat(${iconLayout.yMax},1fr)`}
            templateRows={`repeat(${iconLayout.xMax},1fr)`}
            border={"1px solid white"}
            h={"100vh"}
            borderRadius={"10px 10px 10px 10px"}
            userSelect="none"
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
        </Menu.ContextTrigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {/* icons size items group */}
              <Menu.Root positioning={{ placement: "right-start", gutter: 2 }}>
                <Menu.TriggerItem>
                  View <LuChevronRight />
                </Menu.TriggerItem>
                <Portal>
                  <Menu.Positioner>
                    <Menu.Content>
                      <Menu.RadioItemGroup
                        value={iconSize}
                        onValueChange={(e) => setIconSize(e.value)}
                      >
                        {iconSizes.map((item) => (
                          <Menu.RadioItem
                            key={item.value}
                            value={item.value}
                            closeOnSelect={false}
                          >
                            {item.label}
                            <Menu.ItemIndicator />
                          </Menu.RadioItem>
                        ))}
                      </Menu.RadioItemGroup>
                    </Menu.Content>
                  </Menu.Positioner>
                </Portal>
              </Menu.Root>
              <Menu.Root positioning={{ placement: "right-start", gutter: 2 }}>
                <Menu.TriggerItem>
                  Sort by
                  <LuChevronRight />
                </Menu.TriggerItem>
                <Portal>
                  <Menu.Positioner>
                    <Menu.Content>
                      <Menu.RadioItemGroup
                        value={sortType}
                        onValueChange={(e) => setSortType(e.value)}
                      >
                        {sortTypes.map((item) => (
                          <Menu.RadioItem
                            key={item.value}
                            value={item.value}
                            closeOnSelect={false}
                          >
                            {item.label}
                            <Menu.ItemIndicator />
                          </Menu.RadioItem>
                        ))}
                      </Menu.RadioItemGroup>
                    </Menu.Content>
                  </Menu.Positioner>
                </Portal>
              </Menu.Root>
              <Menu.Item value="refresh">Refresh</Menu.Item>
              <Menu.Root positioning={{ placement: "right-start", gutter: 2 }}>
                <Menu.TriggerItem>
                  New <LuChevronRight />
                </Menu.TriggerItem>
                <Portal>
                  <Menu.Positioner>
                    <Menu.Content>
                      <Menu.Item value="folder">Folder</Menu.Item>
                      <Menu.Item value="shortcut">Shortcut</Menu.Item>
                      <Menu.Item value="bitmap-image">Bitmap Image</Menu.Item>
                      <Menu.Item value="text-document">Text Document</Menu.Item>
                      <Menu.Item value="compressed-folder">
                        Compressed (zipped) Folder
                      </Menu.Item>
                    </Menu.Content>
                  </Menu.Positioner>
                </Portal>
              </Menu.Root>
              <Menu.Item value="display-settings">Display Settings</Menu.Item>
              <Menu.Item value="personalize">Personalize</Menu.Item>
              <Menu.Item value="open-in-terminal">Open in Terminal</Menu.Item>
              <Menu.Item value="show-more-options">Show more options</Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </>
  );
}
