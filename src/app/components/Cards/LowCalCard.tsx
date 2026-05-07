import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import { RecipeData } from "../../types";
 

interface LowCalCardProps {
  data: RecipeData;
}

const LowCalCard: React.FC<LowCalCardProps> = ({data}) => {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
    >
      <Card.Section component="a" href="/">
        <div className="imageContainer h-40 w-full">
          <Image src={data.image} alt="recipe image" height={50} fit="cover" />
        </div>
        <div className="bg-black/50 absolute top-0 left-0 w-full h-full"></div>
      </Card.Section>

      <Group className="z-10" justify="space-between" mt="md" mb="xs">
        <Text c="white" fw={500}>{data.name}</Text>
        <Badge color="pink" c="white">{data.caloriesPerServing} Calories</Badge>
      </Group>

      {/* <Button className="m-2 w-24 h-10 text-xs text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2" fullWidth mt="md" radius="md">
        View full recipe
      </Button> */}
    </Card>
  );
}

export default LowCalCard
