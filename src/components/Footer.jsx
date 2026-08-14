function Footer() {
    return (
        <div className="bg-[#00060F] border-t-3 border-[#272727] flex flex-col md:flex-row justify-between items-center gap-4 px-6 sm:px-10 md:px-16 py-7 text-center">
            <div className="inline-flex items-center gap-2">
                <img src="favicon.svg" className="w-8 sm:w-10" />
                <h1 className="text-lg sm:text-xl text-white font-semibold">
                    Adrian Nova
                </h1>
            </div>

            <div>
                <p className="text-[#CCCCCC] text-xs sm:text-base">
                    <i className="fa fa-copyright"></i>
                    {"\t2026 Adrian Nova. All rights reserved"}
                </p>
            </div>

            <div>
                <a
                    href="#home"
                    className="text-[#CCCCCC] font-semibold text-xs sm:text-base"
                >
                    {"Back to Top" + "\t"}
                    <i className="fa fa-arrow-up"></i>
                </a>
            </div>
        </div>
    );
}

export default Footer;
