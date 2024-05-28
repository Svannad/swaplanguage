import React, { useEffect, useState } from "react";
import VideoCard from "../components/VideoCard";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import Check from '../illustrationer/checkpoint.png'
import Lock from '../illustrationer/lock.png'
import { Link } from "react-router-dom";

export default function LessonsPage({video}) {
    
// Her opretter jeg to tilstandsvariabler ved hjælp af "useState".
//"videos" bruges til at lagre listen over videoerne
  const [videos, setVideos] = useState([]);

  //Denne variabel holder styr på videoerne for Chapter 1
  const [videosChapterOne, setVideosChapterOne] = useState([]);

  //Denne variabel holder styr på videoerne for Chapter 2
  const [videosChapterTwo, setVideosChapterTwo] = useState([]);

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

        // Her filtrerer jeg videos for chapter one
        //Jeg filtrerer videoerne ved at tjekke hver video der har egenskaben "chapter: one" på array listen        
        const chapterOneVideos = videosArray.filter(video => video.chapter.includes("one"));
        setVideosChapterOne(chapterOneVideos);

        // Her filtrerer jeg videos for chapter two
        //Jeg filtrerer videoerne ved at tjekke hver video der har egenskaben "chapter: two" på array listen 
        const chapterTwoVideos = videosArray.filter(video => video.chapter.includes("two"));
        setVideosChapterTwo(chapterTwoVideos);
      }
    }
    getVideos();
  }, []);
    
    return (
        
        <section className="lesson-page">
            <section className="lesson-title">
                <div className="breadcrumb">
                    <Link to="/" className="txtexsmall link">Language learning</Link>
                    <ArrowForwardIosRoundedIcon />
                    <p className="txtexsmall">Danish modul 2</p>
                </div>
                <h3>Chapter 1: Work in DK and abroad</h3>
            </section>
            <div className="video-wrap">
            {/*Her vælger jeg kun at vise chapter one delen af listen*/}
                {videosChapterOne.map((video) => (
                    <VideoCard key={video.id} video={video} />
                ))}
            </div>
            <section className="checkpoint">
                <div className="flag-wrap">
                    <img src={Check}/>
                </div>
                <div className="check-info">
                    <p className="pbold">Videos Watched</p>
                    <section className='progress-line'>
                        <span style={{width: "30%"}}></span>
                        <p className='txtexsmall'>3/10</p>
                    </section>
                    <a className="btn-deac">Take quiz</a>
                </div>
            </section>
            <section className="locked">
                <img src={Lock}/>
                <p>Pass the quiz to unlock the next chapter</p>
                <a className="btn-sec">Jump to here</a>
            </section>
            <section className="closed">
                <h3 className="lesson-title">Chapter 2: Education in DK and abroad</h3>
                <div className="video-wrap">
                {/*Her vælger jeg kun at vise chapter two delen af listen*/}
                    {videosChapterTwo.map((video) => (
                        <VideoCard key={video.id} video={video} />
                    ))}
                </div>
            </section>
        </section>
    )
}