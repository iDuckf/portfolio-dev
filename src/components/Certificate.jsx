import certificates from "../assets/json/certificates.json";

function Certificate() {
    const certificatesJSON = certificates;

    return (
        <div>
            {certificatesJSON.map((certificate) => (
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 py-3 items-start sm:items-center">
                    <div>
                        <img
                            src={certificate.icon}
                            className="w-15 rounded-2xl"
                        />
                    </div>

                    <div className="flex items-center w-full justify-between">
                        <div>
                            <p className="text-white pb-1 font-semibold">
                                {certificate.title}
                            </p>
                            <p className="text-[#CCCCCC] pt-1">
                                {certificate.issuer}
                            </p>
                        </div>

                        <div className="">
                            <a href={certificate.link} className="text-white">
                                {"View" + "\t"}
                                <i className="fa fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Certificate;
