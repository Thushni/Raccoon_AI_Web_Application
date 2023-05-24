
import TopBar from './components/TopBar';
import Footer from './footer';
import Nav from '../components/Nav';

function MyApp({ Component, pageProps }) {
  return <div>
    <Nav/>
   
  <Component {...pageProps} />
   {/* <Footer></Footer>   */}
  </div>

}

export default MyApp
