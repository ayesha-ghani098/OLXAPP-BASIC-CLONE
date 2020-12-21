import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Ads from "./Ads/Ads";
import Cardbox from "./Card/index";
import Footer from "./Footer/Footer";

// ----------Home Component---------//

function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Ads />
      <Cardbox />
      <Footer />
    </div>
  );
}

export default Home;
