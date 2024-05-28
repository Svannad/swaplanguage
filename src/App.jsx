import './App.css';
import MainNav from './components/MainNav';
import Footer from './components/Footer';
import Copyright from './components/Copyright';
import { Route, Routes } from 'react-router-dom';
import ModulSide from './pages/ModulSide';
import LanguageHub from './pages/LanguageHub';
import LessonsPage from './pages/LessonsPage';
import MembersProfile from './pages/MembersProfile';

function App() {

    return (
      <>
        <MainNav />
  
        <Routes>
          <Route path="/" element={<ModulSide/>}/>
          <Route path="/languagehub" element={<LanguageHub/>}/>
          <Route path="/lessons" element={<LessonsPage/>}/>
          <Route path="/members" element={<MembersProfile/>}/>
        </Routes>
  
        <Footer />
        <Copyright />
      </>
    )
  }

export default App;
