import SkillElement from "./SkillElement";

function SkillList({ skills }) {
    return (
        <div>
            {skills.map((skill) => (
                <div className="pt-10">
                    <h3 className="text-white text-lg pb-3">
                        <i className={`${skill.icon} text-[#2DD49E]`}></i>
                        {"\t" + skill.title}
                    </h3>
                    <SkillElement skill={skill}></SkillElement>
                </div>
            ))}
        </div>
    );
}

export default SkillList;
