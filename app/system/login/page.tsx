"use client";

import {
  Avatar,
  Button,
  AbsoluteCenter,
  defineStyle,
  HStack,
  LinkBox,
  LinkOverlay,
  Stack,
} from "@chakra-ui/react";
import Link from "next/link";

const ringCss = defineStyle({
  outlineWidth: "2px",
  outlineColor: "colorPalette.500",
  outlineOffset: "2px",
  outlineStyle: "solid",
});

export default function Login() {
  return (
    <AbsoluteCenter>
      <HStack gap="6" p={4}>
        <Link href={"system/desktop"}>
          <Stack alignItems={"center"} justifyContent={"center"} w={24} h={24}>
            <Avatar.Root css={ringCss} colorPalette="pink">
              <Avatar.Fallback name="Guest" />
              <Avatar.Image src={`${null}`} />
            </Avatar.Root>
            Guest
          </Stack>
        </Link>
        <Link href={"/create/user"}>
          <Stack alignItems={"center"} justifyContent={"center"} w={24} h={24}>
            <Avatar.Root css={ringCss} colorPalette="green">
              <Avatar.Fallback name="+" />
              <Avatar.Image src={`${null}`} />
            </Avatar.Root>
            New User
          </Stack>
        </Link>
      </HStack>
    </AbsoluteCenter>
  );
}
