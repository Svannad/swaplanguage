export default function AchieveProg(props) {

    return (
      <section className="achievecard" style={{width: props.width, marginBottom: props.marg}}>
        <img src={props.img}/>
        <div className="achieve-info">
            <p className="txtsmallbold">{props.title}</p>
            <p className='txtexsmall description'>{props.desc}</p>
            <section className='progress-line'>
                <span style={{width: props.prog}}></span>
                <p className='txtexsmall'>{props.prog}</p>
            </section>
        </div>
      </section>
    )
  }