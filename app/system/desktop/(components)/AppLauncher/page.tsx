"use client";
import {
  AbsoluteCenter,
  Avatar,
  AvatarGroup,
  Button,
  GridItem,
  Dialog,
  Portal,
  Stack,
  CloseButton,
  SimpleGrid,
} from "@chakra-ui/react";
import * as exports from "./(apps)/index";
import ContextMenu from "../ContextMenu/page";

interface AppLauncherProps {
  iconSize: "lg-icons" | "md-icons" | "sm-icons";
  sortType: "name" | "size" | "item-type" | "date-modified";
  iconLayout: { x: 36 | 50; y: 24 | 40 | 48 };
  screenSize: { x: number; y: number };

  setSortType: (value: `name` | `size` | `item-type` | `date-modified`) => void;
  // AdditionMode: {
  //   filetype:
  //     | "folder"
  //     | "shortcut"
  //     | "bitmap-image"
  //     | "text-document"
  //     | "compressed-folder";
  // };
  setIconSize: (value: `lg-icons` | `md-icons` | `sm-icons`) => void;
  // setIconLayout:   x(long): 18 apps | 25 apps; y(tall): 9 apps | 10 apps | 12 }) => void;
  setIconLayout: (value: { x: 36 | 50; y: 24 | 40 | 48 }) => void;
}

export default function AppLauncher({
  iconSize,
  iconLayout,
  sortType,
  setIconSize,
  setSortType,
  setIconLayout,
  screenSize,
}: AppLauncherProps) {
  // LG icons shows 6 items per column 18 items per row
  // MD icons shows 10 items per column 25 items per row
  // SM icons shows 12 items per column 25 items per row

  //   const exportKeys = Object.values(exports).map((key) => ({
  //     key: key.toString(),
  //     element: <Button key={key.toString()}>{key.toString()}</Button>,
  //   }));

  //   <GridItem rowSpan={17} colSpan={20} alignContent={"center"}>
  //     {exportKeys.map((key) => (
  //       <Button key={key}>{key}</Button>
  //     ))}
  //   </GridItem>;

  return (
    <GridItem rowStart={1} rowSpan={screenSize.y - 1} colSpan={screenSize.x}>
      <ContextMenu
        iconSize={iconSize}
        iconLayout={iconLayout}
        sortType={sortType}
        setIconSize={setIconSize}
        setSortType={setSortType}
        setIconLayout={setIconLayout}
      >
        <SimpleGrid
          templateColumns={`repeat(${iconLayout.x}, 1fr)`}
          templateRows={`repeat(${iconLayout.y}, 1fr)`}
          h={"100%"}
          w={"100%"}
          gap={1}
        >
          {Object.entries(exports).map(([key]) => (
            <GridItem
              rowSpan={2}
              colSpan={2}
              key={key}
              border={"1px solid white"}
            >
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <Button alignItems={"center"} justifyContent={"center"}>
                    <Stack>
                      <AvatarGroup>
                        <Avatar.Root>
                          <Avatar.Fallback />
                          <Avatar.Image />
                        </Avatar.Root>
                      </AvatarGroup>
                      test
                    </Stack>
                  </Button>
                </Dialog.Trigger>
                <Portal>
                  <Dialog.Backdrop />
                  <Dialog.Positioner>
                    <Dialog.Content
                      w={"50vw"}
                      h={"100vh"}
                      p={0}
                      position={"fixed"}
                      top={0}
                      left={0}
                      m={0}
                    >
                      <Dialog.Body asChild p={0}>
                        <SimpleGrid
                          templateColumns={"repeat(20, 1fr)"} // 4 columns
                          templateRows={"repeat(20, 1fr)"} // 4 rows
                        >
                          <GridItem colSpan={20} rowSpan={1} asChild>
                            <Stack
                              direction={"row"}
                              justifyContent={"space-between"}
                            >
                              Naruto Form
                              <AbsoluteCenter position={"relative"}>
                                <Dialog.CloseTrigger
                                  asChild
                                  alignItems={"center"}
                                  justifyContent={"center"}
                                >
                                  <CloseButton bg="red" />
                                </Dialog.CloseTrigger>
                              </AbsoluteCenter>
                            </Stack>
                          </GridItem>
                        </SimpleGrid>
                      </Dialog.Body>
                    </Dialog.Content>
                  </Dialog.Positioner>
                </Portal>
              </Dialog.Root>
              {/* <AbsoluteCenter
                position={"relative"}
                asChild
                alignItems={"center"}
                justifyContent={"center"}
                top={"50%"}
                left={"50%"}
              ></AbsoluteCenter> */}

              {/* <Button alignContent={"center"}>{key}</Button> */}
            </GridItem>
          ))}
        </SimpleGrid>
      </ContextMenu>
    </GridItem>
  );
}
