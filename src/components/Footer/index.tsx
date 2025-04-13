export default function Footer() {
  return (
    <footer style={{ padding: '1rem', background: '#eee', marginTop: '2rem', textAlign: 'center' }}>
      <small>&copy; {new Date().getFullYear()} My Cool App. All rights reserved.</small>
    </footer>
  );
}
