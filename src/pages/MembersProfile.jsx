import { useEffect, useState } from "react";
import SideNav from "../components/SideNav";
import MemberProfile from "../components/MemberProfile";
import AchieveComplete from "../components/AchieveComplete";
import Milestone from "../components/Milestone";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Time from '../illustrationer/timebadge.png'
import Vocab from '../illustrationer/vocabbadge.png'
import Band from '../illustrationer/band.png'
import BandDeac from '../illustrationer/band-de.png'
import Trophy from '../illustrationer/trophy-de.png'


export default function MembersProfile({ member }) {

  // Her opretter jeg to tilstandsvariabler ved hjælp af "useState".
  //"members" bruges til at lagre listen over medlemmer
  const [members, setMembers] = useState([]);

  //"selectedMembers" bruges til at lagre listen over valgte medlem
  const [selectedMember, setSelectedMember] = useState(null);

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
    }
    getMembers();
  }, []);


  //Funktionen der håndterer klik på et medlem
  //Funktionen opdaterer "selectMember" med det valgte medlem
  const handleMemberClick = (selectedMember) => {
    setSelectedMember(selectedMember);
  };

  //Funktionen der lukker detaljevisningen af valgte medlem
  //Funktionen nulstiller også "selectMember" 
  const handleCloseDetail = () => {
    setSelectedMember(null);
  };

  return (
    <section className="memb-profile">
      <div className="side-wrap">
        <SideNav />
      </div>
      <section className="members-wrap">
        <p className="subtitle">Members profiles</p>
        <div className="tab">
          <p className="txtsmall">My profile</p>
          <p className="txtsmallbold chosen">All members</p>
        </div>
        <div>
          <section className="member-row">
            <p className="txtsmallbold user">Name</p>
            <p className="txtsmallbold memb-prog">Progress</p>
            <p className="txtsmallbold learning">Learning</p>
            <p className="txtsmallbold memb-active">Activity</p>
          </section>
          {/* Mapper gennem 'members' og render 'MemberProfile' for hvert medlem */}
          {members.map((member) => (
            <MemberProfile
              key={member.id}
              member={member}
              onClick={() => handleMemberClick(member)}
            />
          ))}
        </div>
      </section>
      <>
        {/* Detaljevisning af det valgte medlem 
        Jeg har også sat props på hver detaljerne af det valgte medlem skal være vist*/}
        {selectedMember && (
          <section className="details">
            <section className="det-memb">
            <div className="det-name">
            <img src={selectedMember.avatar} />
            <p className="pbold">{selectedMember.name}</p>
            </div>
            <CloseRoundedIcon onClick={handleCloseDetail} />
            </section>
            <section className="det-learn">
            <p className="subtitle">Learning</p>
            <img src={selectedMember.learning} />
            </section>
            <section className="det-achieve">
              <p className="subtitle">Achievements</p>
              <div className="achievements det-achwrap">
                <AchieveComplete img={Time} title="Time Marathoner" width="49%" />
                <AchieveComplete img={Vocab} title="Word Wizard" width="49%" />
              </div>
            </section>
            <section className="det-mile">
              <p className="subtitle">Milestones</p>
              <div className="mile-wrap det-miwrap">
                <Milestone img={Band} modul="Modul 1" />
                <Milestone img={Band} modul="Modul 2" />
                <Milestone img={BandDeac} modul="Modul 3" />
                <Milestone img={BandDeac} modul="Modul 4" />
                <Milestone img={Trophy} modul="Modul 5" />
              </div>
            </section>
          </section>
        )}
      </>
    </section>
  );
}
