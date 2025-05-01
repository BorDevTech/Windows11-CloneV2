"use client";

import { Menu, Portal } from "@chakra-ui/react";
import { LuChevronRight } from "react-icons/lu";

interface ContextMenuProps {
  iconSize: "lg-icons" | "md-icons" | "sm-icons";
  sortType: "name" | "size" | "item-type" | "date-modified";
  iconLayout: { x: 18 | 25; y: 6 | 10 | 12 };
  // setIconLayout:   x(long): 18 apps | 25 apps; y(tall): 6 apps | 10 apps | 12 }) => void;
  setIconLayout: (value: { x: 18 | 25; y: 6 | 10 | 12 }) => void;
  setIconSize: (value: "lg-icons" | "md-icons" | "sm-icons") => void;
  setSortType: (value: "name" | "size" | "item-type" | "date-modified") => void;
  children?: React.ReactNode;
}

export function ContextMenu({
  iconSize,
  sortType,
  setIconSize,
  setSortType,
  setIconLayout,
  children,
}: ContextMenuProps) {
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
    <Menu.Root>
      <Menu.ContextTrigger width="full" asChild>
        {children}
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
                      onValueChange={(e) => {
                        setIconSize(
                          e.value as "lg-icons" | "md-icons" | "sm-icons"
                        );
                        setIconLayout({
                          x:
                            e.value === "lg-icons"
                              ? 18
                              : e.value === "md-icons"
                              ? 25
                              : 25,
                          y:
                            e.value === "lg-icons"
                              ? 6
                              : e.value === "md-icons"
                              ? 10
                              : 12,
                        });
                      }}
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
                      onValueChange={(e) =>
                        setSortType(
                          e.value as
                            | "name"
                            | "size"
                            | "item-type"
                            | "date-modified"
                        )
                      }
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
  );
}

export default ContextMenu;
