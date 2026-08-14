function SkillElement({ skill }) {
    return (
        <div className="flex flex-wrap items-center gap-3 sm:gap-5">
            {skill.stacks.map((stack) => (
                <div className="bg-[#060D16] border-2 border-[#1b1f24] rounded-md px-4 py-2">
                    <h1 className="text-[#CCCCCC]">
                        <i className={`${stack.icon}`}></i>
                        {"\t" + stack.title}
                    </h1>
                </div>
            ))}
        </div>
    );
}

export default SkillElement;
