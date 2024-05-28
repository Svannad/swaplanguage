import { useLocation } from 'react-router-dom';
import Logo from '../illustrationer/swl-logo.png'

export default function Footer() {

    //Her bruger jeg useLocation for at hente nuværende URL placering på siden
    const location = useLocation();

    //Her definerer en liste over de stier, hvor jeg vil skjule footeren
    const hideOnPages = ['/languagehub', '/members'];

    //Her bliver det tjekket om den nuværende sti er i listen over stier, hvor footeren skal være skjult
    //Hvis stien er en hvor footer skal skjules så vil funktionen være true
    const isHidden = hideOnPages.includes(location.pathname);

    return (
      <>
      {/*Hvis isHidden funktionen er true så bliver footeren skjult
      Hvis den er false så bliver footeren vist*/}
      {!isHidden && (<footer>
        <div className='footer-info'>
        <figure className='logo'>
            <img src={Logo}/>
        </figure>
        <section className="footer-sec">
            <p className="txtsmallbold heading">Discover</p>
            <ul>
                <li className='txtexsmall'>Language exchange</li>
                <li className='txtexsmall'>About Us</li>
                <li className='txtexsmall'>Blog</li>
            </ul>
        </section>
        <section className="footer-sec">
            <p className="txtsmallbold heading">Learn</p>
            <ul>
                <li className='txtexsmall'>Language lessons</li>
            </ul>
        </section>
        <section className="footer-sec">
            <p className="txtsmallbold heading">Support</p>
            <ul>
                <li className='txtexsmall'>Safety and trust</li>
                <li className='txtexsmall'>Terms and Conditions</li>
                <li className='txtexsmall'>Privacy</li>
            </ul>
        </section>
        <section className="footer-sec">
            <p className="txtsmallbold heading">Contact</p>
            <ul>
                <li className='txtexsmall'>info@swaplanguage.com</li>
                <li className='txtexsmall'>support@swaplanguage.com</li>
            </ul>
        </section>
        <section className="footer-sec">
            <p className="txtsmallbold heading">Subscribe to our newsletter</p>
            <p className='txtexsmall subtxt'>Get latest news, articles and resources in your inbox weekly.</p>
            <form className='subscribe'>
                <input type="text" placeholder="Enter your email"/>
                <a className="btn-line">Subscribe</a>
            </form>
        </section>
        </div>
      </footer>)}
      </>
    )
  }