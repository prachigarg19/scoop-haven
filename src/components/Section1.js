import { Flex, Stack, Text, Heading } from "@chakra-ui/react";
import bgImageSection1 from "../resources/images/bgImageIce.jpg";
import Button from "./ButtonBlob";

export default function Section1() {
  return (
    <Flex
      as="section"
      position="relative"
      backgroundImage={`url(${bgImageSection1})`}
      color="white"
      width="full"
      className="smt"
      paddingBlock="120px"
      paddingInline={["16px", "16px", "16px", "116px", "116px"]}
      height="740px"
      backgroundAttachment="fixed"
      backgroundPosition={["top", "top", "top", "center", "center"]}
      backgroundSize={["auto", "auto", "auto", "cover", "cover"]}
      id="home"
    >
      <Stack
        justifyContent="center"
        marginInline="auto"
        alignItems={["center", "center", "center", "flex-start", "flex-start"]}
        textAlign={["center", "center", "center", "left", "left"]}
        width={["300px", "300px", "400px", "full", "full"]}
        marginBlockStart={["0", "0", "0", "-100px", "-100px"]}
      >
        <Heading
          as="h2"
          fontSize={["3rem", "3rem", "4rem", "5rem", "5rem"]}
          lineHeight="1.2em"
          zIndex="2"
        >
          Ice Cream <br />
        </Heading>
        <Text
          fontSize="16px"
          lineHeight="30px"
          letterSpacing="0.2px"
          marginBlockEnd="36px !important"
        >
          Indulge in Sweet Delights: Discover Our Delectable Landing Page Cakes!
        </Text>
        <Button>Learn More</Button>
      </Stack>
    </Flex>
  );
}
