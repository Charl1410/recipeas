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
          <Image src={data.image} height={50} alt="recipe image" />
        </div>
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text c="white" fw={500}>{data.name}</Text>
        <Badge color="pink" c="white">{data.caloriesPerServing} Calories</Badge>
      </Group>

      <Button color="blue" fullWidth mt="md" radius="md">
        View full recipe
      </Button>
    </Card>
  );
}

export default LowCalCard
