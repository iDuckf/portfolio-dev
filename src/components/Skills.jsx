import skills from "../assets/json/skills.json";
import SkillList from "./SkillList";
import SkillLevel from "./SkillLevel";

function Skills() {
    const skillsJSON = skills;

    return (
        <div
            id="skills"
            className="bg-[#00060F] pt-24 px-8 md:px-16 font-inter"
        >
            <div className="relative inline-block">
                <h3 className="text-white font-semibold text-2xl">
                    <i className="fa fa-code text-[#2DD49E]"></i>
                    {"\t" + "Skills & Technologies"}
                </h3>
                <div className="mt-2 h-1 w-1/2 rounded-full bg-linear-to-r from-[#30D6D2] to-emerald-500 shadow-[0_0_12px_rgba(48,214,210,0.6)]"></div>
            </div>

            <p className="text-[#CCCCCC] mt-3">
                Technologies and tools I use to build amazing digital
                experiences.
            </p>

            <div>
                <SkillList skills={skillsJSON}></SkillList>
            </div>

            <div className="pt-10">
                <SkillLevel></SkillLevel>
            </div>
        </div>
    );
}

export default Skills;
