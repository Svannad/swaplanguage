import ModuleCard from "../components/ModuleCard";
import Band from "../illustrationer/band.png"
import Medal from "../illustrationer/medal.png"
import Lock from "../illustrationer/lock.png"


export default function ModulSide() {
    return (
        <section className="modul-side">
            <h3>Learn Danish with Swap Language</h3>
            <p>
                Step into a Danish lesson and learn Danish in a new way! The teachers <br></br> 
                are motivated and energetic and they are here to help you succeed.
            </p>
            <section className="modul-wrap">
                <ModuleCard title="Modul 1" desc="Introduction to basic Danish language elements. Module progress to vocabulary expansion and daily routines" 
                className="btn-prime" btn="Review" img={Band} />
                <ModuleCard title="Modul 2" desc="Expanding vocabulary, describing self, family, interests, and asking/responding to basic questions." 
                className="btn-prime" btn="Continue" img={Medal} link="/lessons"/>
                <ModuleCard title="Modul 3" desc="Describing routines, making plans, learning cultural norms, and practicing conversational Danish." 
                className="btn-sec" btn="Jump to here" img={Lock} />
                <ModuleCard title="Modul 4" desc="Advancing language with complex structures, expressing opinions, and applying grammar rules." 
                className="btn-sec" btn="Jump to here" img={Lock} />
                <ModuleCard title="Modul 5" desc="Refining language skills, engaging in debates and improving written and spoken communication." 
                className="btn-sec" btn="Jump to here" img={Lock} />
            </section>
        </section>
    )
}