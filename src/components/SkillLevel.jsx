import Level from "./Level";

function SkillLevel() {
    return (
        <div className="bg-[#060D16] border-2 border-[#1b1f24] rounded-2xl p-5 sm:p-7">
            <h3 className="text-white text-lg">
                <i className="fa fa-file-code-o text-[#2DD49E]"></i>
                {"\t" + "Skills Level"}
            </h3>

            <div className="pt-5">
                <Level></Level>
            </div>
        </div>
    );
}

export default SkillLevel;
