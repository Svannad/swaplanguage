import { useEffect, useState } from "react";
import MemberProfile from "./MemberProfile";

export default function MemberProfileHent() {
  // Her opretter jeg to tilstandsvariabler ved hjælp af "useState".
  //"members" bruges til at lagre listen over medlemmer, og "isMembers" bruges til at kontrollere, om der er medlemmer at vise.
  const [members, setMembers] = useState([]);
  const [isMembers, setIsMembers] = useState(true);

  useEffect(() => {
    async function getMembers() {
      //Der defineres en URL til at hente medlemmernes data fra min Firebase-database.
      const url =
        "https://swap-language-2b74b-default-rtdb.europe-west1.firebasedatabase.app/members.json";

      //Her bruges "fetch" til hente medlemmernes data fra min Firebase-database og konverterer dem til JSON-format.
      const response = await fetch(url);
      const data = await response.json();

      //Hvis der er data tilgængelig, laves dataerne til et array og opdaterer "members" til at indeholde denne liste af medlemmer.
      if (data !== null) {
        const membersArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setMembers(membersArray);
      }

      //Hvis der ikke er nogen data tilgængelig, opdateres "isMembers" til "false" for at vise en meddelelse om, at der ikke er noget at vise.
      else {
        setIsMembers(false);
      }
    }
    getMembers();
  }, []);

  //Hvis "isMembers" er "true", vises en liste af medlemmer vha. "map" funktionen, ellers vises en besked om, at der ikke er noget at vise.
  return (
    <article>
      {isMembers ? (
        <div>
          {members.map((member) => (
            <MemberProfile key={member.id} member={member} />
          ))}
        </div>
      ) : (
        <p>Nothing to show</p>
      )}
    </article>
  );
}