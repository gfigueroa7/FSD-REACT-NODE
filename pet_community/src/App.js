import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import BurgerMenu from './components/general/BurgerMenu';
import Home from './components/pages/Home';
import Veterinary from './components/pages/Veterinary';
import VeterinaryDetail from './components/pages/detail/VeterinaryDetail';
import Stores from './components/pages/Stores';
import StoresDetail from './components/pages/detail/StoresDetail';
import Trainers from './components/pages/Trainers';
import TrainersDetail from './components/pages/detail/TrainersDetail';
import Community from './components/pages/Community';
import Login from './components/pages/Login';
import Blog from './components/pages/Blog';
import Business from './components/pages/Business';
import Backend from './components/pages/Backend';
import Apply from './components/pages/Apply';
import Sponsor from './components/pages/Sponsor';
import Ranking from './components/pages/Ranking';
import Footer from './components/general/Footer';
import NotFound from './components/pages/NotFound';

const App = () => {
  const [isOpen, setOpen] = useState(false);
  const [upButton, setUpButton] = useState(false);
  const [locationClass, setLocationClass] = useState("");
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.pageYOffset > 700) {
        setUpButton(true);
        changeTheColorOFMenuBars("#333");
      } else {
        setUpButton(false);
        changeTheColorOFMenuBars("#FFF");
      }
    });
  }, []);

  const changeTheColorOFMenuBars = ($color) => {
    let bars = document.querySelectorAll(".bm-burger-bars");
    let index = 0, length = bars.length;
    for(index; index < length; index++) {
      bars[index].style.backgroundColor = $color;
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleIsOpen = () => {
    (!isOpen) ? changeMenuButtonDisplay("none") : changeMenuButtonDisplay("block");
    setOpen(!isOpen);
  }

  const location = useLocation();

  const myPages = [ '/', '/veterinarias', '/tiendas', '/entrenadores', '/comunidad', '/login', '/blog', '/business', '/backend', '/postularse', '/sponsor', '/ranking' ];
  
  useEffect(()=>{
    setOpen(false);
    changeMenuButtonDisplay("block");
    window.scrollTo(0, 0);
    addExtraClassToPage(location.pathname, location.state);
    changePageTitle(location.pathname, location.state);
  },[location.pathname]);

  const changeMenuButtonDisplay = (display) => document.querySelector(".bm-burger-button").style.display = display;

  const addExtraClassToPage = (pathname, state) => {
    if(!myPages.includes(pathname) && state === null) {
      setLocationClass(pathname.split("/")[1] + ' not_founded');
    } else if(pathname === '/veterinarias' || pathname === '/tiendas' || pathname === '/entrenadores') {
      setLocationClass(pathname.split("/")[1] + ' list');
    } else if(pathname === '/comunidad' || pathname === '/blog' || pathname === '/business' || pathname === '/backend') {
      setLocationClass(pathname.split("/")[1] + ' token');
    } else {
      let otherClass = '';
      if(state !== null) otherClass = 'detail';
      setLocationClass(pathname.split("/")[1] + ' ' + otherClass);
    }
  }

  const changePageTitle = (pathname, state) => {
    let title = pathname.split("/")[1].charAt(0).toUpperCase() + pathname.split("/")[1].slice(1);
    if(!myPages.includes(pathname) && state === null) {
      document.title = 'Pet Community - 404';
    } else if(pathname === '/'){
      document.title = 'Pet Community';
    } else {
      document.title = title + ' - Pet Community';
    }
  }

  return (
    <div id="outer-container" className={locationClass}>
      <BurgerMenu isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen} pageWrapId={"page-wrap"} outerContainerId={ "outer-container" } />
      <div className="container" id="page-wrap">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="veterinarias" element={<Veterinary />} />
          <Route path="veterinarias/:id" element={<VeterinaryDetail />} />
          <Route path="tiendas" element={<Stores />} />
          <Route path="tiendas/:id" element={<StoresDetail />} />
          <Route path="entrenadores" element={<Trainers />} />
          <Route path="entrenadores/:id" element={<TrainersDetail />} />
          <Route path="comunidad" element={<Community />} />
          <Route path="login" element={<Login />} />
          <Route path="blog" element={<Blog />} />
          <Route path="business" element={<Business />} />
          <Route path="backend" element={<Backend />} />
          <Route path="postularse" element={<Apply />} />
          <Route path="sponsor" element={<Sponsor />} />
          <Route path="ranking" element={<Ranking />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {
          upButton && (
          <div className="up" onClick={scrollToTop}>
            <button><i className="fas fa-angle-up"></i></button>
          </div> )
        }
        
        <Footer />

      </div>
    </div>
  );
}

export default App;
