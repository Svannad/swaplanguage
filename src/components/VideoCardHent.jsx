import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";

export default function VideoCardHent() {
  // Her opretter jeg to tilstandsvariabler ved hjælp af "useState".
  //"videos" bruges til at lagre listen over videoer, og "isVideos" bruges til at kontrollere, om der er videoer at vise.
  const [videos, setVideos] = useState([]);
  const [isVideos, setIsVideos] = useState(true);

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

      //Hvis der ikke er nogen data tilgængelig, opdateres "isVideos" til "false" for at vise en meddelelse om, at der ikke er noget at vise.
      else {
        setIsVideos(false);
      }
    }
    getVideos();
  }, []);

  //Hvis "isVideos" er "true", vises en liste af videoer vha. "map" funktionen, ellers vises en besked om, at der ikke er noget at vise.
  return (
    <article>
      {isVideos ? (
        <div>
          {videos.map((video) => (
            <VideoCard key={video.id} book={video} />
          ))}
        </div>
      ) : (
        <p>Nothing to show</p>
      )}
    </article>
  );
}