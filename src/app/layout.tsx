
import Header from '@/components/Header';

import './globals.css'; // If you're using a global CSS file
import Footer from '@/components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="app-layout">
          <Header />
          <main className="app-main">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
