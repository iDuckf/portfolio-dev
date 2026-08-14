import ContactInfo from "./ContactInfo";

function Contact() {
    return (
        <div
            id="contact"
            className="bg-[#00060F] pt-24 py-10 px-8 md:px-16 font-inter"
        >
            <div className="border-2 border-[#272727] bg-[#060D16] rounded-xl p-5 sm:p-8">
                <div className="flex justify-center">
                    <div>
                        <h3 className="text-white font-semibold text-2xl">
                            <i className="fa fa-envelope text-[#2DD49E]"></i>
                            {"\t" + "Contact Me"}
                        </h3>
                        <div className="mt-2 h-1 rounded-full bg-linear-to-r from-[#30D6D2] to-emerald-500 shadow-[0_0_12px_rgba(48,214,210,0.6)]"></div>
                    </div>
                </div>

                <p className="text-[#CCCCCC] pt-5 pb-8 text-center">
                    Let's work together on your next project. I'm always open to
                    discussing new opportunities.
                </p>

                <ContactInfo></ContactInfo>

                <div className="flex justify-center items-center gap-5 py-2">
                    <a
                        href="https://github.com/iDuckf"
                        className="flex items-center justify-center leading-none"
                    >
                        <div className="flex items-center text-white py-5">
                            <div className="border-2 border-[#CCCCCC] rounded-lg p-3 flex items-center justify-center text-lg">
                                <i className="devicon-github-original text-lg block"></i>
                            </div>
                        </div>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/adrian-nova-02251022b/"
                        className="flex items-center justify-center leading-none"
                    >
                        <div className="flex items-center text-white py-5">
                            <div className="border-2 border-[#CCCCCC] rounded-lg p-3 flex items-center justify-center text-lg">
                                <i className="devicon-linkedin-plain text-lg block"></i>
                            </div>
                        </div>
                    </a>

                    <a
                        href="mailto:novaadrian2@gmail.com"
                        className="flex items-center justify-center leading-none"
                    >
                        <div className="flex items-center text-white py-5">
                            <div className="border-2 border-[#CCCCCC] rounded-lg p-3 flex items-center justify-center text-lg">
                                <i className="fa fa-envelope text-lg block"></i>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
