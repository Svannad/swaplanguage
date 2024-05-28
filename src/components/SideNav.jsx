import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Logo from '../illustrationer/swl-logo.png'
import { NavLink } from 'react-router-dom';

export default function SideNav() {

    return (
        <aside className='side-nav'>
          <figure className='logo side-logo'>
            <img src={Logo}/>
          </figure>
          <nav>
            <ul className='side-menu'>
                <li>
                    <NavLink to="/members">
                        <figure className='work-icon'>W</figure>
                        <div className='workplace'>
                            <p className='txtsmallbold'>Workplace</p>
                            <p className='txtexsmall'>11 members</p>
                        </div>
                    </NavLink>
                    <ArrowForwardIosOutlinedIcon />  
                </li>
                <li>
                    <NavLink to="/languagehub">
                        <HomeOutlinedIcon />
                        <p className='txtsmall'>Dashboard</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        <OndemandVideoOutlinedIcon />
                        <p className='txtsmall'>Language lessons</p>
                    </NavLink>
                    <ArrowOutwardOutlinedIcon />
                </li>
            </ul>
          </nav>
        </aside>
    )
  }