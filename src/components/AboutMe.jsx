function AboutMe() {
    const stats = [
        { value: "4+", label: "Years Experience" },
        { value: "3", label: "Projects Completed" },
        { value: "100%", label: "Commitment" },
    ];

    return (
        <div id="about" className="bg-[#00060F] pt-24 px-8 md:px-16 font-inter">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ">
                {/* Profile Image */}
                <div className="order-2 lg:order-1 flex justify-center">
                    <fieldset className="text-white relative border border-[#30D6D2] rounded-xl p-4 text-center shadow-[0_0_40px_rgba(34,211,238,0.15)]">
                        <div className="flex justify-center items-center">
                            <img
                                src="/img/Profile 1.jpeg"
                                className="w-72 md:w-80 rounded-lg object-cover"
                                alt="Adrian Nova"
                            />
                        </div>
                        <legend className="absolute -bottom-3 left-1/2 px-3 -translate-x-1/2 text-[#CCCCCC] border border-[#30D6D2] rounded-lg bg-[#121212] text-sm whitespace-nowrap">
                            <i className="fa fa-map-marker"></i>
                            {"  Based in Depok, Indonesia"}
                        </legend>
                    </fieldset>
                </div>

                {/* Text Content */}
                <div className="order-1 lg:order-2">
                    <div className="relative inline-block">
                        <h3 className="text-white font-semibold text-2xl">
                            <i className="fa fa-user text-[#2DD49E]"></i>
                            {"  About Me"}
                        </h3>
                        <div className="mt-2 h-1 w-1/2 rounded-full bg-linear-to-r from-[#30D6D2] to-emerald-500 shadow-[0_0_12px_rgba(48,214,210,0.6)]"></div>
                    </div>

                    <p className="text-[#CCCCCC] leading-relaxed mb-4">
                        I am Adrian Nova, a Fullstack Developer and Tech
                        Educator based in Depok, Indonesia. Over the past four
                        years, I have built a strong foundation in academic
                        technology through my progression at Gunadarma
                        University Informatics Laboratory, advancing from
                        Laboratory Assistant to Instructor and Lead Instructor.
                        This journey has allowed me to blend fullstack software
                        development with effective technical instruction.
                    </p>

                    <p className="text-[#CCCCCC] leading-relaxed mb-4">
                        My experience centers on practical execution and
                        technical ownership. I developed and launched the
                        official Informatics Laboratory website
                        (iflab.gunadarma.ac.id), authored updated course
                        modules, managed lab operations, and ensured timely
                        academic reporting. From building clean user interfaces
                        to engineering scalable backend systems, I enjoy
                        managing products across their entire lifecycle with a
                        focus on quality and functionality.
                    </p>

                    <p className="text-[#CCCCCC] leading-relaxed mb-4">
                        In addition to software engineering, I am passionate
                        about teaching and guiding new developers. I regularly
                        assist students with complex technical challenges,
                        provide detailed project evaluations, and serve on
                        recruitment committees for incoming laboratory staff. I
                        constantly seek opportunities to master new
                        technologies, build meaningful tools, and collaborate on
                        challenging projects.
                    </p>

                    <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-5 sm:gap-10 mt-10">
                        {stats.map((stat) => (
                            <div className="text-center">
                                <h1 className="text-[#30D6D2] font-semibold text-3xl">
                                    {stat.value}
                                </h1>
                                <p className="text-[#CCCCCC]">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* <div className="mt-20 border-t-2 border-b-2 border-[#272727] pt-20">
                <div className="relative inline-block">
                    <h3 className="text-white font-semibold text-2xl">
                        <i className="fa fa-folder text-[#2DD49E]"></i>
                        {"  My Journey"}
                    </h3>
                    <div className="mt-2 h-1 w-1/2 rounded-full bg-linear-to-r from-[#30D6D2] to-emerald-500 shadow-[0_0_12px_rgba(48,214,210,0.6)]"></div>
                </div>

                <p className="mt-3 text-sm text-[#CCCCCC]">
                    My professional and academic milestones along the way.
                </p>

                <div className="py-10">
                    {experiences.map((experience, index) => (
                        <div
                            key={experience.id}
                            className="flex gap-4 sm:gap-6"
                        >
                            <div className="flex flex-col items-center">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-emerald-500 bg-black shadow-[0_0_15px_rgba(16,185,129,0.7)]">
                                    <i className="fa fa-graduation-cap text-emerald-400 text-sm"></i>
                                </div>

                                {index !== experiences.length - 1 && (
                                    <div className="w-px flex-1 bg-linear-to-b from-emerald-700 to-emerald-950"></div>
                                )}
                            </div>

                            <div className="flex-1 pb-10">
                                <div className="group relative rounded-xl border border-[#272727] bg-[#0B1220] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/60 hover:shadow-[0_10px_40px_rgba(16,185,129,0.2)]">
                                    <div className="mb-3 flex items-center justify-between">
                                        <span className="inline-flex items-center gap-2 rounded-full border border-teal-500/40 bg-teal-500/10 px-3 py-1 text-sm font-medium text-teal-300">
                                            <i className="fa fa-calendar-check-o"></i>
                                            {experience.startYear} -{" "}
                                            {experience.endYear}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-[#30D6D2]">
                                        {experience.title}
                                    </h3>

                                    <p className="mt-2 text-sm leading-relaxed text-gray-300">
                                        {experience.description}
                                    </p>

                                    {experience.achivements &&
                                        experience.achivements.length > 0 && (
                                            <ul className="mt-4 space-y-2 border-t border-[#272727] pt-4">
                                                {experience.achivements.map(
                                                    (achievement, i) => (
                                                        <li
                                                            key={i}
                                                            className="flex items-start gap-2 text-sm text-gray-400"
                                                        >
                                                            <i className="fa fa-check-circle text-[#2DD49E] mt-1"></i>
                                                            <span>
                                                                {achievement}
                                                            </span>
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}
        </div>
    );
}

export default AboutMe;
