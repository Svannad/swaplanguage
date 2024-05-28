import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

export default function Playlist({video}) {

  return (
    <section className='play-card'>
        <img src={video.thumbnail}/>
        <div className='play-title'>
            <p className='play-bold'>{video.title}</p>
            <p className='play-txt'>Module 2: Work in DK and abroad</p>
        </div>
        <ArrowForwardIosOutlinedIcon />
    </section>
  )
}