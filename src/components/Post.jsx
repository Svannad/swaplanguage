import ProfilePic from '../illustrationer/avatar9.png'
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';

export default function Post(props) {

    return (
      <article className='post-card'>
        <section className="post-info">
            <div className="poster">
                <img src={props.img}/>
                <p className="txtsmallbold">{props.navn}</p>
            </div>
            <p className='txtexsmall'>{props.min}</p>
        </section>
        <p className='txtsmall'>{props.post}</p>
        <section className='reaction'>
            <p className='txtexsmall'>{props.comment}</p>
            <div className='emoji'>
                <AddReactionOutlinedIcon />
            </div>
        </section>
        <form className='comment'>
            <img src={ProfilePic}/>
            <input type='text' placeholder='Leave a comment'/>
        </form>
      </article>
    )
  }