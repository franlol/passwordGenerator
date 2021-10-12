import Content from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import './home.styles.scss';

export default function Home() {
  return (
    <div className='container'>
      <span className='test-1'>________</span>
      <span className='test-2'>________</span>
      <span className='test-3'>________</span>
      <span className='test-4'>________</span>

      <Header />
      <Content />
      <Footer />
    </div>
  )
}
