import SideNav from "../components/SideNav";
import Post from "../components/Post";
import Milestone from "../components/Milestone";
import AchieveProg from "../components/AchieveProg";
import Playlist from "../components/Playlist";
import AchieveView from "../components/AchieveView";
import Avatar1 from "../illustrationer/avatar1.png"
import Avatar3 from "../illustrationer/avatar3.png"
import Avatar8 from "../illustrationer/avatar8.png"
import ProfilePic from "../illustrationer/avatar9.png"
import Band from "../illustrationer/band.png"
import BandDeac from "../illustrationer/band-de.png"
import Trophy from "../illustrationer/trophy-de.png"
import Progress from "../illustrationer/progress.png"
import Time from "../illustrationer/timebadge-de.png"
import Social from "../illustrationer/likebadge-de.png"
import Minutes from "../illustrationer/minutes.png"
import DkFlag from "../illustrationer/dk-flag.png"
import Lesson from "../illustrationer/lesson4.jpg"
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function LanguageHub() {
    
    // Her opretter jeg to tilstandsvariabler ved hjælp af "useState".
    //"videos" bruges til at lagre listen over videoerne
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function getVideos() {
      //Der defineres en URL til at hente videoernes data fra min Firebase-database.
      const url =
        "https://swap-language-2b74b-default-rtdb.europe-west1.firebasedatabase.app/videos.json";

      //Her bruges "fetch" til hente videoernes data fra min Firebase-database og konverterer dem til JSON-format.
      const response = await fetch(url);
      const data = await response.json();

      //Hvis der er data tilgængelig, laves dataerne til et array og opdaterer "videos" til at indeholde denne liste af videoer.
      if (data !== null) {
        const videosArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setVideos(videosArray);
      }
    }
    getVideos();
  }, []);

  //Her bruger jeg useState til funktionen for visning af Upcoming
  const [isUpcomingVisible, setUpcomingVisible] = useState(false);

  //Her er funktionen til at slå visningen af Upcoming til eller fra
  const toggleUpcomingVisibility = () => {
    setUpcomingVisible(!isUpcomingVisible);
  };
    
    return (
        <>
        {/*Her kalder jeg på funktionen der slår visningen af Upcoming til og fra
        Jeg kalder den som en onClick, det vil sige at når du klikker på denne div så kalder du på funktionen
        Hvis funktionen er false så bliver den true ved at klikke på den
        Hvis den er true bliver den false ved at klikke på den*/}
        <div className={`upcoming backdrop ${isUpcomingVisible ? 'flex' : 'none'}`}
        onClick={toggleUpcomingVisibility}>
            <AchieveView />
        </div>
        <div className="side-wrap">
            <SideNav />
        </div>
        <section className="dashboard">
            <section className="postboard">
                <div className="write-post">
                    <img src={ProfilePic}/>
                    <input type="text" placeholder="What's new, Julia?" />
                </div>
                <div className="post-wrap">
                    <Post img={Avatar8} navn="Epona Charpentier" min="5 minutes ago" 
                    post="Hey team! Just finished a Danish lesson video. I learned some useful phrases for daily chat. Thanks to our great teachers! Who's up for a Danish coffee break?" 
                    comment="5 comments" />
                    <Post img={Avatar3} navn="Kerim Klimek" min="47 minutes ago" 
                    post="Hello Danish learners! I have now learned everything from traditions to hygge. Feeling more connected already!" 
                    comment="2 comments" />
                    <Post img={Avatar1} navn="Napoleon Moulin" min="2 hours ago" 
                    post="Big thanks to our teachers and Swap Language for making it possible for me to learn danish. Ready to use these skills at the workplace!" 
                    comment="1 comment" />
                </div>
            </section>
            <div className="data-wrap">
                <section className="continue">
                    <div className="learn-title">
                        <p className="subtitle">Continue learing</p>
                        <form className='prog-picker'>
                            <p className='txtsmall'>Learning</p>
                            <img src={DkFlag}/>
                        </form>
                    </div>
                    <section className="learn-wrap">
                        <div className="learn-vid">
                            <div className="learn-icon">
                                <PlayArrowRoundedIcon />
                            </div>
                            <img src={Lesson}/>
                            <p className="txtsmallbold">Your Previous Jobs</p>
                            <p className="txtexsmall">Module 2: Work in DK and abroad</p>
                        </div>
                        <div className="list-wrap">
                        {/*Her kalder jeg videos array, men laver en ny array
                        hvor kun videoerne med id 0 til 2 bliver vist*/}
                        {videos.slice(0, 3).map((video, index) => (
                            <Playlist key={video.id} video={video} />
                        ))}
                        <Link to="/lessons" className="learn-link">
                            <p className="txtsmall">Explore more lessons</p>
                            <ArrowOutwardOutlinedIcon />
                        </Link>
                        </div>
                    </section>
                </section>
                <section className="milestones">
                    <p className="subtitle">Milestones</p>
                    <div className="mile-wrap">
                        <Milestone img={Band} modul="Modul 1" />
                        <Milestone img={BandDeac} modul="Modul 2" />
                        <Milestone img={BandDeac} modul="Modul 3" />
                        <Milestone img={BandDeac} modul="Modul 4" />
                        <Milestone img={Trophy} modul="Modul 5" />
                    </div>
                </section>
                <section className="progress">
                    <div className="prog-title">
                        <div className="prog-txt">
                            <p className="subtitle">Your Progress</p>
                            <p className="txtsmall">By Module</p>
                        </div>
                        <div className="prog-info">
                        <form className='prog-picker'>
                            <p className='txtsmall'>Module 1</p>
                        </form>
                        <form className='prog-picker'>
                            <p className='txtsmall'>Learning</p>
                            <img src={DkFlag}/>
                        </form>
                        </div>
                    </div>
                    <img src={Progress} />
                </section>
                <section className="achieve">
                    <div className="view-more">
                        <p className="subtitle">Achievements</p>
                        {/*Her kalder jeg på funktionen der slår visningen af GoalView til og fra
                        Jeg kalder den som en onClick, det vil sige at når du klikker på denne div så kalder du på funktionen
                        Hvis funktionen er false så bliver den true ved at klikke på den
                        Hvis den er true bliver den false ved at klikke på den*/}
                        <p className="txtsmall underline" onClick={toggleUpcomingVisibility}>View more</p>
                    </div>
                    <div className="achievements">
                        <AchieveProg img={Time} title="Time Marathoner" prog="72%" width="49%" />
                        <AchieveProg img={Social} title="Social Butterfly" prog="37%" width="49%" />
                    </div>
                </section>
                <section className="minutes">
                    <p className="subtitle">Minutes spent learning</p>
                    <img src={Minutes} />
                </section>
            </div>
        </section>
        </>
    )
}