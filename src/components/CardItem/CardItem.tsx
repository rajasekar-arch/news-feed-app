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
    <div className={styles.cardItem}>
    <h3 className={styles.cardItemTitle}>{title}</h3> {/* Apply local class here */}
    <p className={styles.cardItemDescription}>{description}</p> {/* Apply local class here */}
    <Link href={`/home/${id}`}>View Details</Link>
  </div>
  );
}
