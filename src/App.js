import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Privacy from './pages/Privacy';
import Services from './pages/Services';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navbar from './Component/header/Navbar';
import Footer from './Component/footer/Footer';
import DelloiteBuildingLondon from './pages/DelloiteBuildingLondon';

function App() {
  const Router= createBrowserRouter([
    {
      path: '/',
      element : <Home/>
    },
    {
      path: '/about',
      element : <About/>
    },
    {
      path: '/contact',
      element : <Contact/>
    },
    {
      path: '/portfolio',
      element : <Portfolio/>
    },
    {
      path: '/privacy',
      element : <Privacy/>
    },
    {
      path: '/services',
      element : <Services/>
    },
    {
      path: '/delloitebuildinglondon',
      element : <DelloiteBuildingLondon/>
    },
  ])
  return (
<>
    <RouterProvider router={Router}>

<Home />
    </RouterProvider>
</>
  );
}

export default App;
