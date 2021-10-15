import Content from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import './home.styles.scss';

export default function Home() {
  return (
    <div className="wrapper">
      <Header />
      <Content />
      <Footer />
    </div>
  )
}
