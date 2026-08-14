import Certificate from "./Certificate";

function Experiences({ experiences }) {
    return (
        <div
            id="experiences"
            className="bg-[#00060F] pt-24 px-8 md:px-16 font-inter"
        >
            <div className="relative inline-block">
                <h3 className="text-white font-semibold text-2xl">
                    <i className="fa fa-folder text-[#2DD49E]"></i>
                    {"\t" + "Experiences"}
                </h3>
                <div className="mt-2 h-1 w-1/2 rounded-full bg-linear-to-r from-[#30D6D2] to-emerald-500 shadow-[0_0_12px_rgba(48,214,210,0.6)]"></div>
            </div>

            <p className="text-[#CCCCCC] py-5">
                My professional journey and work experience.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
                <div className="lg:col-span-2">
                    <div>
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
                                        <div className="group relative rounded-xl border border-[#272727] bg-[#060D16] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/60 hover:shadow-[0_10px_40px_rgba(16,185,129,0.2)]">
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
                                                experience.achivements.length >
                                                    0 && (
                                                    <ul className="mt-4 space-y-2 border-t border-[#272727] pt-4">
                                                        {experience.achivements.map(
                                                            (
                                                                achievement,
                                                                i,
                                                            ) => (
                                                                <li
                                                                    key={i}
                                                                    className="flex items-start gap-2 text-sm text-gray-400"
                                                                >
                                                                    <i className="fa fa-check-circle text-[#2DD49E] mt-1"></i>
                                                                    <span>
                                                                        {
                                                                            achievement
                                                                        }
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
                    </div>
                </div>

                <div>
                    <div className="pt-10">
                        <div className="rounded-xl border-2 border-[#06493A] bg-[#060D16] p-6">
                            <div className="relative inline-block">
                                <h3 className="text-white font-semibold text-xl">
                                    <i className="fa fa-graduation-cap text-[#2DD49E]"></i>
                                    {"\t" + "Education"}
                                </h3>
                                <div className="mt-2 h-1 w-1/2 rounded-full bg-linear-to-r from-[#30D6D2] to-emerald-500 shadow-[0_0_12px_rgba(48,214,210,0.6)]"></div>
                            </div>

                            <p className="text-[#CCCCCC] pt-5">
                                Bachelor of Informatics Engineering
                            </p>

                            <p className="text-[#30D6D2] pt-2">
                                Gunadarma University
                            </p>

                            <p className="text-[#969696] pt-5">2021 - 2025</p>

                            <p className="text-[#CCCCCC] pt-2">
                                GPA : 3.67 / 4.00
                            </p>
                        </div>
                    </div>

                    <div className="pt-10">
                        <div className="rounded-xl border-2 border-[#06493A] bg-[#060D16] p-6">
                            <div className="relative inline-block pb-3">
                                <h3 className="text-white font-semibold text-xl">
                                    <i className="fa fa-certificate text-[#2DD49E]"></i>
                                    {"\t" + "Certifications"}
                                </h3>
                                <div className="mt-2 h-1 w-1/2 rounded-full bg-linear-to-r from-[#30D6D2] to-emerald-500 shadow-[0_0_12px_rgba(48,214,210,0.6)]"></div>
                            </div>

                            <Certificate></Certificate>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experiences;
