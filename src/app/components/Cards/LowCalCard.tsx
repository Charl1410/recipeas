import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

function LowCalCard() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section component="a" href="/">
        <Image
          src="/images/pizza.jpeg"
          height={160}
          alt=""
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Italian Margharita Pizza</Text>
        <Badge color="pink">300 Cals</Badge>
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
