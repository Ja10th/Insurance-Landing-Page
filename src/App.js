import Article from "./components/article/article";
import Company from "./components/company/company";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Health from "./components/health/health";
import Hero from "./components/hero/hero";
import Need from "./components/need/need";
import Plans from "./components/plans/plans";
import Prices from "./components/prices/prices";
import Savings from "./components/savings/savings";
import Testimony from "./components/testimony/testimony";
import Ways from "./components/ways/ways";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Company />
      <Health />
      <Need />
      <Savings />
      <Plans />
      <Prices />
      <Article />
      <Testimony />
      <Ways />
      <Footer />
    </>
  );
}

export default App;
