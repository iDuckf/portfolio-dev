import contactInfo from "../assets/json/contactInfo.json";

function ContactInfo() {
    const contactInfoJSON = contactInfo;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 justify-items-center">
            {contactInfoJSON.map((info) => (
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-5 py-3">
                    <div className="flex items-center justify-center text-xl">
                        <i className={`${info.icon}`}></i>
                    </div>

                    <div className="text-center sm:text-left">
                        <h1 className="text-white font-semibold">
                            {info.title}
                        </h1>
                        <p className="text-[#CCCCCC]">{info.value}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ContactInfo;
