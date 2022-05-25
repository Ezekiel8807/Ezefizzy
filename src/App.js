import Home from './views/home/Home'
import About  from "./views/about/About"
import Header from './comps/header/Header'
import Explore from './views/explore/Explore'
import Contact from './views/contact/Contact'
import {BrowserRouter, Routes, Route} from  'react-router-dom'




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={ <Home />}/>
          <Route exact path="/explore" element={ <Explore />}/>
          <Route exact path="/about" element={ <About />}/>
          <Route exact path="/contact" element={ <Contact />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
