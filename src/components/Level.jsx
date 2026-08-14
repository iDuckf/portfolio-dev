import skillLevel from "../assets/json/skillLevel.json";

function Level() {
    const skillLevelJSON = skillLevel;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {skillLevelJSON.map((level) => (
                <div className="p-3">
                    <div className="flex justify-between text-[#CCCCCC]">
                        <h1>{level.title}</h1>
                        <p>{level.value + "%"}</p>
                    </div>

                    <div className="h-3 bg-[#141A25] rounded-full w-full">
                        <div
                            className="h-3 bg-[#3EEA9F] rounded-full transition-all duration-300"
                            style={{
                                width: `${Math.min(Math.max(level.value, 0), 100)}%`,
                            }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Level;
