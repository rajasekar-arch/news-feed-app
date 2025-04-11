import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header id={1} />
      <div style={styles.mainpage}>
        mainpage
      </div>
      <Footer />
    </>
  );
}

const styles = {
  mainpage: {
    display:'flex',
    minHeight:'80vh',
  },
}