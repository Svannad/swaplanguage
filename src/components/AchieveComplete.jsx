export default function AchieveComplete(props) {

    return (
      <section className="achievecard" style={{width: props.width, marginBottom: props.marg}}>
        <img src={props.img}/>
        <div className="achieve-info">
            <p className="txtsmallbold">{props.title}</p>
            <p className="label">Complete</p>
        </div>
      </section>
    )
  }