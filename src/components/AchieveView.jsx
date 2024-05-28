import Social from '../illustrationer/likebadge-de.png'
import Time from '../illustrationer/timebadge-de.png'
import Vocab from '../illustrationer/vocabbadge.png'
import Streak from '../illustrationer/streakbadge.png'
import AchieveProg from './AchieveProg'
import AchieveComplete from './AchieveComplete'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'


export default function AchieveView() {

    return (
      <section className='view-wrap'>
        <div className='view-title'>
            <p className='subtitle'>Achievements</p>
            <CloseRoundedIcon />
        </div>
        <div className='view-achieve'>
        <AchieveProg img={Social} title="Social butterfly" width="100%" marg="20px" 
        desc="React and comment on others posts to get this badge" prog="37%" />
        <AchieveProg img={Time} title="Time Marathoner" width="100%" marg="20px"
        desc="Spend time learning to win this badge" prog="72%" />
        <AchieveComplete img={Vocab} title="Word Wizard" width="100%" marg="20px" />
        <AchieveComplete img={Streak} title="Streak Master" width="100%" />
        </div>
      </section>
    )
  }