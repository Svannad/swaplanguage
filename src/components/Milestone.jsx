export default function Milestone(props) {

    return (
      <section className='milestone'>
          <img src={props.img}/>
          <p className='txtsmall'>{props.modul}</p>
      </section>
    )
  }