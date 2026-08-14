function Hero() {
    return (
        <div
            id="home"
            className="h-lvh bg-[url(https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_115139_0fc6bd3d-3631-4d26-ab9b-28293887dcc9.mp4)] flex justify-between items-center px-6 sm:px-10 md:px-16"
        >
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover -z-10"
            >
                <source
                    src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_171521_25968ba2-b594-4b32-aab7-f6b69398a6fa.mp4"
                    type="video/mp4"
                />
            </video>

            {/* Overlay Gelap (Opsional: Agar teks di atasnya lebih mudah dibaca) */}
            <div className="absolute inset-0 bg-black/50 -z-10"></div>

            <div>
                <div>
                    <p className="text-cyan-100 py-5">👋 Hi, I'm Adrian Nova</p>
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-semibold">
                        Fullstack
                    </h1>
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cyan-400 font-semibold">
                        Developer_
                    </h1>

                    <p className="text-[#CCCCCC] py-5">
                        I build modern, scalable web applications with clean
                        code and exceptional user experiences.
                    </p>

                    <div className="flex flex-wrap justify-start items-center gap-3 sm:gap-5">
                        <a
                            href=""
                            className="text-black px-5 sm:px-8 md:px-10 py-3 bg-linear-to-r from-cyan-300 to-cyan-400 rounded-lg font-semibold"
                        >
                            {"View My Work  "}
                            <i className="fa fa-arrow-right"></i>
                        </a>

                        <a
                            href="mailto:novaadrian2@gmail.com"
                            className="text-white border-2 border-[#CCCCCC] px-5 sm:px-8 md:px-10 py-3 rounded-lg"
                        >
                            {"Contact Me  "}
                            <i className="fa fa-envelope"></i>
                        </a>
                    </div>

                    <div className="text-white flex justify-start gap-3">
                        <a
                            href="https://github.com/iDuckf"
                            className="flex items-center justify-center leading-none"
                        >
                            <div className="flex items-center text-white py-5">
                                <div className="border-2 border-[#CCCCCC] rounded-lg p-3 flex items-center justify-center">
                                    <i className="devicon-github-original text-lg block"></i>
                                </div>
                            </div>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/adrian-nova-02251022b/"
                            className="flex items-center justify-center leading-none"
                        >
                            <div className="flex items-center text-white py-5">
                                <div className="border-2 border-[#CCCCCC] rounded-lg p-3 flex items-center justify-center">
                                    <i className="devicon-linkedin-plain text-lg block"></i>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="text-white"></div>
            </div>
        </div>
    );
}

export default Hero;
