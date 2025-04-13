export default function Footer() {
  return (
    <footer className="bg-blue-900" style={{ padding: '1rem', marginTop: '2rem',color: '#ffff', textAlign: 'center' }}>
      <small>&copy; {new Date().getFullYear()} News Feed Daily. All rights reserved.</small>
    </footer>
  );
}
