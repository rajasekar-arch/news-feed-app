
import { cardItems } from '@/mock-data/card-item-data';
import Link from 'next/link';

interface Props {
  params: {
    id: string;
  };
};

export default function ItemDetailPage({ params }: Props) {
  const item = cardItems.find((i) => i.id === params.id);

  if (!item) return <p>Item not found</p>;

  return (
    <div>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <Link href="/">← Back</Link>
    </div>
  );
}
