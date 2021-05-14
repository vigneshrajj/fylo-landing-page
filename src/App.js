import "./styles.scss";
import Header from "./components/header";
import GetStarted from "./components/getstarted";
import Features from "./components/features";
import Testimonial from "./components/testimonial";
import EarlyAccess from "./components/earlyaccess";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="App">
      {/* Optimized for mobile(375px) and PC(1440px) */}
      <Header />
      <GetStarted />
      <Features />
      <Testimonial />
      <EarlyAccess />
      <Footer />
    </div>
  );
}
