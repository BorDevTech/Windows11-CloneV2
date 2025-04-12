import { Button, GridItem, Menu, Portal, SimpleGrid } from "@chakra-ui/react";
import * as exports from "./index";
import { LuChevronRight } from "react-icons/lu";
import { useState } from "react";

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

export default function AppLauncher({
  iconSize,
  setIconSize,
  iconLayout,
  setIconLayout,
  sortType,
  setSortType,
}: ContextMenu) {
  // LG icons shows 6 items per column 18 items per row
  // MD icons shows 10 items per column 25 items per row
  // SM icons shows 12 items per column 25 items per row

  const exportKeys = Object.values(exports).map((key) => ({
    key: key.toString(),
    element: <Button key={key.toString()}>{key.toString()}</Button>,
  }));

  //   <GridItem rowSpan={17} colSpan={20} alignContent={"center"}>
  //     {exportKeys.map((key) => (
  //       <Button key={key}>{key}</Button>
  //     ))}
  //   </GridItem>;

  const iconSizes = [
    { label: "LG icons", value: "lg-icons" },
    { label: "MD icons", value: "md-icons" },
    { label: "SM icons", value: "sm-icons" },
  ];
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
    <GridItem rowSpan={26} colSpan={50}>
      <Menu.Root>
        <Menu.ContextTrigger width="full">
          hi
          <SimpleGrid
            templateColumns={`repeat(50,1fr)`}
            templateRows={`repeat(26,1fr)`}
          >
            {Object.entries(exports).map(([key, value]) => (
              <GridItem
                rowSpan={2}
                colSpan={2}
                alignContent={"center"}
                key={key}
              >
                <Button>{key}</Button>
              </GridItem>
            ))}
          </SimpleGrid>
        </Menu.ContextTrigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.Root positioning={{ placement: "right-start", gutter: 2 }}>
                <Menu.TriggerItem>
                  View <LuChevronRight />
                </Menu.TriggerItem>
                <Portal>
                  <Menu.Positioner>
                    <Menu.Content>
                      <Menu.RadioItemGroup
                        value={iconSize}
                        onValueChange={(e) =>
                          setIconSize(
                            e.value as "lg-icons" | "md-icons" | "sm-icons"
                          )
                        }
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
    </GridItem>
  );
}
