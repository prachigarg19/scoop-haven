import { Flex, Stack } from "@chakra-ui/react";
import bgImageSection2 from "../resources/images/bgImageIce2.jpg";
import CardServices from "./ServiceCard";
import CakeIcon from "../resources/icons/CakeIcon";
import GloveIcon from "../resources/icons/GloveIcon";
import IceCreamIcon from "../resources/icons/IceCreamIcon";

const rigthCards = [
  {
    title: "Bite into Success",
    description: "Unleash the Power of Our Tantalizing Landing Page Cakes!",
    icon: <CakeIcon />,
  },
  {
    title: "dessert",
    description: "Feast Your Eyes on Our Scrumptious Ice Creams!",
    icon: <IceCreamIcon />,
  },
];

const leftCards = [
  {
    title: "cake design",
    description: "Crafted with Passion, Designed for Results",
    icon: <GloveIcon />,
  },
];

export default function Section2() {
  return (
    <Flex
      as="section"
      position="relative"
      backgroundImage={`url(${bgImageSection2})`}
      color="white"
      width="full"
      className="smt"
      paddingBlock="120px"
      paddingInline={["0", "0", "0", "116px", "116px"]}
      height={["auto", "auto", "auto", "740px", "740px"]}
      backgroundAttachment="fixed"
      backgroundPosition="top"
      backgroundSize={["auto", "auto", "auto", "cover", "cover"]}
      justifyContent={["center", "center", "center", "flex-end", "flex-end"]}
      id="about"
    >
      <Flex
        gridGap="10px"
        alignItems="center"
        flexWrap="wrap"
        justifyContent="center"
        alignContent="center"
      >
        {leftCards.map((card, key) => (
          <CardServices
            key={key}
            alignSelf="center"
            title={card.title}
            description={card.description}
            icon={card.icon}
          />
        ))}
        <Stack direction="column" gridGap="10px">
          {rigthCards.map((card, key) => (
            <CardServices
              key={key}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </Stack>
      </Flex>
    </Flex>
  );
}
