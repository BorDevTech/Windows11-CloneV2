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
  Square,
  Text,
  HStack,
  Center,
} from "@chakra-ui/react";
import * as exports from "./(apps)/index";
import ContextMenu from "../ContextMenu/ContextMenu"; // Update the path to the correct location

// interface AppLauncherProps {
//   screenSize: { x: number; y: number }; // Screen size in grid units
//   iconSize: "lg-icons" | "md-icons" | "sm-icons"; // Icon size options
//   iconLayout: { x: 36 | 50; y: 24 | 40 | 48 }; // Grid layout for icons
//   sortType: "name" | "size" | "item-type" | "date-modified"; // Sorting options
//   setIconSize: (value: "lg-icons" | "md-icons" | "sm-icons") => void; // Function to update icon size
//   setSortType: (value: "name" | "size" | "item-type" | "date-modified") => void; // Function to update sort type
//   setIconLayout: (value: { x: 36 | 50; y: 24 | 40 | 48 }) => void; // Function to update icon layout
// }

interface AppLauncherProps {
  iconSize: "lg-icons" | "md-icons" | "sm-icons";
  sortType: "name" | "size" | "item-type" | "date-modified";
  iconLayout: { x: 18 | 25; y: 6 | 10 | 12 };
  screenSize: { x: number; y: number };

  setSortType: (value: `name` | `size` | `item-type` | `date-modified`) => void;

  setIconSize: (value: `lg-icons` | `md-icons` | `sm-icons`) => void;
  // setIconLayout:   x(long): 18 apps | 25 apps; y(tall): 6 apps | 10 apps | 12 }) => void;
  setIconLayout: (value: { x: 18 | 25; y: 6 | 10 | 12 }) => void;
}

export function AppLauncher({
  screenSize,
  iconSize,
  iconLayout,
  sortType,
  setIconSize,
  setSortType,
  setIconLayout,
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
    <GridItem
      rowStart={1}
      rowSpan={screenSize.y - 1}
      colSpan={screenSize.x}
      h="100%"
      w="100%"
      overflow={"hidden"}
    >
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
          overflow={"hidden"}
          justifyContent={"center"}
          alignItems={"center"}
          paddingLeft={2}
          paddingRight={2}
          gap={4}
        >
          {Object.entries(exports).map(([key, Component], index) => (
            <GridItem key={index}>
              <Center>
                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <Stack>
                      <AvatarGroup>
                        <Avatar.Root
                          variant={"solid"}
                          borderRadius={0}
                          size={"2xl"}
                        >
                          <Avatar.Fallback />
                          <Avatar.Image />
                        </Avatar.Root>
                      </AvatarGroup>
                      <Text justifyContent={'center'} alignItems={'center'}>test {index + 1}</Text>
                    </Stack>
                  </Dialog.Trigger>
                  <Portal>
                    <Dialog.Backdrop />
                    <Dialog.Positioner>
                      <Dialog.Content>
                        <Dialog.Body>
                          <HStack>
                            <Dialog.CloseTrigger asChild>
                              <CloseButton bg="red" />
                            </Dialog.CloseTrigger>
                            {index + 1} - {key}
                          </HStack>
                        </Dialog.Body>
                      </Dialog.Content>
                    </Dialog.Positioner>
                  </Portal>
                </Dialog.Root>
              </Center>
              {/* Item {index + 1} */}
            </GridItem>
          ))}
        </SimpleGrid>
      </ContextMenu>
    </GridItem>
  );
}
export default AppLauncher;
