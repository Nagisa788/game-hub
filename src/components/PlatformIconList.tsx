import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";

import {
  FaWindows,
  FaLinux,
  FaAndroid,
  FaXbox,
  FaPlaystation,
  FaApple,
} from "react-icons/fa"; //from font awesome
import { MdPhoneIphone } from "react-icons/md"; //from material design
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs"; //from bootstrap
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  // name: PlayStation
  // slug: playstation

  const iconMap: { [key: string]: IconType } = {
    android: FaAndroid,
    linux: FaLinux,
    windows: FaWindows,
    web: BsGlobe,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    xbox: FaXbox,
    mac: FaApple,
    playstation: FaPlaystation,
  };

  // marginY = {1} -> 1 x theme.space -> in chakra space = 4px so numeric value 1 means 4px
  // margin = {'10px'}

  return (
    <HStack marginY={1}>
      {platforms?.map((platform) => (
        <Icon as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
