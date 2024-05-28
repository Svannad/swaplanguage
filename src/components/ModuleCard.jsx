import { Link } from "react-router-dom";

export default function ModuleCard(props) {

  return (
    <section className='modulcard'>
        <div className='modul-txt'>
          <h3>{props.title}</h3>
          <p>{props.desc}</p>
          <Link to={props.link} className={props.className}>{props.btn}</Link>
        </div>
        <div className='modul-icon'>
          <img src={props.img}/>
        </div>
    </section>
  )
}