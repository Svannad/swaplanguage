import Logo from '../illustrationer/swl-logo.png'
import Streak from '../illustrationer/streak.png'
import DkFlag from '../illustrationer/dk-flag.png'
import MyUser from '../illustrationer/avatar9.png'
import { NavLink, useLocation } from 'react-router-dom'
import StreakGoal from "../components/StreakGoal";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import StreakView from "../components/StreakView";
import React, { useState } from 'react';


export default function MainNav() {

    //Her bruger jeg useLocation for at hente nuværende URL placering på siden
    const location = useLocation();

    

    //Her definerer en liste over de stier, hvor jeg vil skjule bestemte elementer på navigationen
    const hideOnPages = ['/languagehub', '/members'];

    //Her bliver det tjekket om den nuværende sti er i listen over stier, hvor elementerne skal skjulest
    //Hvis stien er en hvor de skal skjulest så vil funktionen være true
    const isHidden = hideOnPages.includes(location.pathname);

    //Her definerer jeg hvilke stier navigationen skal være højrejusteret
    const isRightJustified = location.pathname === '/languagehub' || location.pathname === '/members'; 
    
    //Her definerer jeg hvor et bestemt element skal være vist
    const isDisplayBlock = location.pathname === '/languagehub' || location.pathname === '/members'; 

    //Her bruger jeg useState til funktionen  fo visning af StreakDrop og GoaView
    const [isStreakDropVisible, setStreakDropVisible] = useState(false);
    const [isGoalViewVisible, setGoalViewVisible] = useState(false);

    //Her er funktionen til at slå visningen af StreakDrop til eller fra
    const toggleStreakDropVisibility = () => {
        setStreakDropVisible(!isStreakDropVisible);
        if (isGoalViewVisible) {
          setGoalViewVisible(false);
        }
      };
    
    //Her er funktionen til at slå visningen af GoalView til eller fra   
    const toggleGoalViewVisibility = () => {
        setGoalViewVisible(!isGoalViewVisible);
        if (isStreakDropVisible) {
          setStreakDropVisible(false);
        }
      };

    return (
      //Her kalder jeg på funktionen hvor navigationen skal være højrejusteret på visse stier
      //Jeg siger hvis funktionen er true bliver navigationen højrejusteret
      //ellers skal den stå som det siger i CSS'en
      <header className={`main-nav ${isRightJustified ? 'right-justified' : ''}`}>
        {/*Her kalder jeg på funktionen der slår visningen af GoalView til og fra
        Jeg kalder den som en onClick, det vil sige at når du klikker på denne div så kalder du på funktionen
        Hvis funktionen er false så bliver den true ved at klikke på den
        Hvis den er true bliver den false ved at klikke på den*/}
          <div className="goal-view backdrop" style={{ display: isGoalViewVisible ? 'flex' : 'none' }} onClick={toggleGoalViewVisibility}>
                <div className="close">
                    <CloseRoundedIcon />
                </div>
                <StreakGoal />
            </div>
            <div className="streak-drop backdrop" style={{ display: isStreakDropVisible ? 'flex' : 'none' }} onClick={toggleGoalViewVisibility}>
                <StreakView />
            </div>
        {/*Hvis isHidden funktionen er true så bliver footeren skjult
         Hvis den er false så bliver footeren vist*/}
          {!isHidden && (<figure className='logo'>
            <NavLink to="/">
                <img src={Logo}/>
            </NavLink>
          </figure>)}
          <nav className='navigation'>
        {/*Hvis isHidden funktionen er true så bliver footeren skjult
          Hvis den er false så bliver footeren vist*/}
            {!isHidden && (
            <ul className='menu'>
                <li>
                    <a className='txtsmall'>For Businesses</a>
                </li>
                <li>
                    <a className='txtsmall'>Plans</a>
                </li>
                <li>
                    <NavLink to="/" className='txtsmall'>Language Lessons</NavLink>
                </li>
                <li>
                    <NavLink to="/languagehub" className='txtsmall'>Language Hub</NavLink>
                </li>
            </ul>
            )}
          {/*Her kalder jeg på funktionen der slår visningen af StreakDrop til og fra
            Jeg kalder den som en onClick, det vil sige at når du klikker på denne div så kalder du på funktionen
            Hvis funktionen er false så bliver den true ved at klikke på den
            Hvis den er true bliver den false ved at klikke på den*/}
            <div className='streak' onClick={toggleStreakDropVisibility}>
                <img src={Streak}/>
                <p className='txtsmall'>3</p>
            </div>
            <form className='picker'>
                <p className='txtsmall'>Learning</p>
                <img src={DkFlag}/>
            </form>
            <div className='myuser'>
                <img src={MyUser} />
                <p className={`username ${isDisplayBlock ? 'display-block' : ''}`}>Julia Schmidt</p>
            </div>
          </nav>
      </header>
    )
  }