import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import { RecipeData } from "../../types";
 

const LowCalCard: React.FC<RecipeData> = ({
name,
caloriesPerServing,
image, 

}) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section component="a" href="/">
        <Image
          src={image}
          height={160}
          alt=""
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{name}</Text>
        <Badge color="pink">{caloriesPerServing}</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes
        with tours and activities on and around the fjords of Norway
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        View full recipe
      </Button>
    </Card>
  );
}

export default LowCalCard
