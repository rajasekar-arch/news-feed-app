// components/Footer.js


const Footer = () => {
    return (
      <footer className="px-8 py-8 flex justify-between bg-blue-900 text-violet-50" style={styles.footer}>
        <div style={styles.container}>
          <p>&copy; {new Date().getFullYear()} News Feed. All rights reserved.</p>
          <div>
            <a href="/privacy-policy" style={styles.footerLink}>Privacy Policy</a> | 
            <a href="/terms-of-service" style={styles.footerLink}>Terms of Service</a>
          </div>
        </div>
      </footer>
    );
  };
  
  const styles = {
    footer: {
      color: 'white',
      padding: '20px 0',
      marginTop: '40px', /* Added margin-top to space out from content */
    },
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
    },
    footerLink: {
      color: '#f4f4f4',
      margin: '0 10px',
      textDecoration: 'none',
    },
  };
  
  export default Footer;
  