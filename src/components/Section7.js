import { Flex } from "@chakra-ui/react";
import bgImageSection7 from "../resources/images/bgImageIce7.jpg";
import RatingCard from "./RatingCard";

const ratingCard = [
  {
    description:
      "Step into a creamy paradise where flavors dance on your tongue. Scoop Haven is a dream come true for ice cream lovers!",
    created_at: "14-October-2021",
  },
];

export default function Section7() {
  return (
    <Flex
      position="relative"
      backgroundImage={`url(${bgImageSection7})`}
      color="white"
      width="full"
      height="740px"
      as="section"
      backgroundAttachment="fixed"
      backgroundPosition={["top", "top", "top", "center", "center"]}
      backgroundSize="cover"
      id="reviews"
      alignItems="center"
      paddingBlock="120px"
      paddingInline={["0", "0", "0", "116px", "116px"]}
      justifyContent={[
        "center",
        "center",
        "center",
        "flex-start",
        "flex-start",
      ]}
      className="smt"
    >
      {ratingCard.map((card, key) => (
        <RatingCard key={key} data={card} />
      ))}
    </Flex>
  );
}
