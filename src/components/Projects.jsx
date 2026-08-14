import Project from "./Project";
import projects from "../assets/json/projects.json";

function Projects() {
    const projectsJSON = projects;

    return (
        <div
            id="projects"
            className="bg-[#00060F] pt-24 px-8 md:px-16 font-inter"
        >
            <div className="relative inline-block">
                <h3 className="text-white font-semibold text-2xl">
                    <i className="fa fa-folder text-[#2DD49E]"></i>
                    {"\t" + "Projects"}
                </h3>
                <div className="mt-2 h-1 w-1/2 rounded-full bg-linear-to-r from-[#30D6D2] to-emerald-500 shadow-[0_0_12px_rgba(48,214,210,0.6)]"></div>
            </div>

            <p className="text-[#CCCCCC] pt-5 pb-10">
                Here are some of my featured projects. Each one solves real
                problems with clean code and great design.
            </p>

            <Project project={projectsJSON}></Project>
        </div>
    );
}

export default Projects;
