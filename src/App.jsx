import Banner from "./component/Banner";
import Feature from "./component/Feature";
import Footer from "./component/Footer";
import Header from "./component/Header";
import MemuClub from "./component/MemuClub";
import MemuWorks from "./component/MemuWorks";


function App() {
  return (
    <>
      <Header />
      <Banner />
      <MemuClub/>
      <MemuWorks/>
      <Feature/>
      <Footer />
    </>
  );
}

export default App;
