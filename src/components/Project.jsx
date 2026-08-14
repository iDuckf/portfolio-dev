function Project({ project }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
            {project.map((p) => (
                <div className="border-3 border-[#1b1f24] bg-[#060D16] rounded-xl h-full flex flex-col">
                    <div>
                        <img
                            src={p.thumbnail}
                            className="w-full object-cover rounded-t-xl"
                        />
                    </div>

                    <div className="p-5 flex flex-col flex-1">
                        <h1 className="text-white pb-3 font-semibold text-lg">
                            {p.title}
                        </h1>

                        <p className="text-[#CCCCCC] text-justify flex-1">
                            {p.description}
                        </p>

                        <div className="flex flex-wrap gap-2 items-center pt-5">
                            {p.stacks.map((stack) => (
                                <div className="border-2 border-[#303235] rounded-md bg-[#192535] px-3 py-2">
                                    <p className="text-white">
                                        <i className={stack.icon}></i>
                                        {"\t" + stack.title}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="pt-10">
                            <a
                                href={p.link}
                                className="text-white bg-blue-500 px-7 py-3 rounded-lg hover:bg-blue-600"
                            >
                                <i className="fa fa-external-link"></i>
                                Visit Site
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Project;
