'use client';

import Link from 'next/link';
import styles from './CardItem.module.scss'


type CardProps = {
  id: string;
  title: string;
  description: string;
};

export default function CardItem({ id, title, description }: CardProps) {
  return (
    <div  className={styles.cardItem}>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link href={`/home/${id}`}>View Details</Link>
    </div>
  );
}
