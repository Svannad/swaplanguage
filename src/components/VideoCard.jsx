import DkFlag from '../illustrationer/dk-flag.png'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

export default function VideoCard({video}) {

    return (
      <section className="videocard">
            <div className='icon'>
                <CheckRoundedIcon />
            </div>
            <p className='lesson'>{video.lesson}</p>
            <div className='img-wrap'>
                <img src={video.thumbnail}/>
            </div>
            <div className='video-title'>
                <p className="subtitle">{video.title}</p>
                <img src={DkFlag}/>
            </div>
            <p className='txtsmall vid-info'>{video.duration}</p>
            <p className='txtsmall vid-info'>{video.level}</p>
      </section>
    )
  }