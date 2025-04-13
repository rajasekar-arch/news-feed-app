import CardItem from "@/components/CardItem/CardItem";

import { cardItems } from "@/mock-data/card-item-data";

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      {cardItems.map((item) => (
        <CardItem key={item.id} {...item} />
      ))}
    </main>
  );
}
