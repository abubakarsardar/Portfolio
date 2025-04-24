import { Cooperation } from "../UI/Cooperation/Cooperation";
import { HeroPage } from "../UI/HeroPage/HeroPage";
import { Status } from "../UI/Status/Status";
import { Experience } from "../UI/Experience/Experience";
import { MySkills } from "../UI/MySkills/MySkills";
import Services from "../UI/Services/Services";



export const Home =()=>{
    return (
        <>
        <HeroPage />
        <Status /> 
        <Services />
        <Cooperation />
        <Experience />
        <MySkills />
        </>
    )
}