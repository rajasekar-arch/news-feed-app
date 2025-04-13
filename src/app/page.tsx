import CardItem from "@/components/CardItem/CardItem";
import styles from '@/components/CardItem/CardItem.module.scss'

import { cardItems } from "@/mock-data/card-item-data";

export default function Home() {
  return (
    <main>
      <div className={styles.cardContainer}>
      {cardItems.map((item) => (
        <CardItem key={item.id} {...item} />
      ))}
      </div>
   
    </main>
  );
}
