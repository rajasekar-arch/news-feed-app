import Image from 'next/image'; 

export default function Header() {
  return (
    <header className="bg-blue-900" style={{ padding: '1rem',color: '#ffff',display:'inline-flex', marginBottom: '2rem' }}>
       <Image 
          src="/images/feed.jpg"
          alt="News Feed Daily Logo" 
          width={20}
          height={20}
          style={{borderRadius:'50%'}}
        />
      <h1 style={{paddingLeft:'10px'}}>News Feed Daily</h1>
    </header>
  );
}
