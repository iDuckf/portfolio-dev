import { useState, useEffect } from "react";

const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experiences", label: "Experiences" },
    { id: "contact", label: "Contact" },
];

function Navbar() {
    const [activeId, setActiveId] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);

    // Pantau perubahan hash URL (misal: saat browser back/forward atau tombol diklik)
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace("#", "") || "home";
            setActiveId(hash);
        };

        handleHashChange();

        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    // Scroll spy: menu yang bergaris mengikuti section yang sedang terlihat saat scroll
    useEffect(() => {
        const handleScroll = () => {
            const offset = 120;
            const scrollPosition = window.scrollY + offset;
            const navOffset = document.querySelector("nav")?.offsetHeight || 0;

            let current = navItems[0].id;

            for (const item of navItems) {
                const section = document.getElementById(item.id);
                if (section) {
                    const { top } = section.getBoundingClientRect();
                    const sectionTop = top + window.scrollY - navOffset;

                    if (scrollPosition >= sectionTop) {
                        current = item.id;
                    }
                }
            }

            setActiveId(current);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="bg-[#00060F] fixed top-0 z-50 w-dvw h-20 flex justify-between items-center text-white font-semibold px-5 sm:px-8 md:px-16 border-b-2 border-[#272727]">
            <div className="inline-flex items-center gap-2">
                <img src="favicon.svg" className="w-8 md:w-10" />
                <h1 className="text-lg md:text-xl">Adrian Nova</h1>
            </div>

            <div className="hidden md:inline-flex items-center justify-center gap-4 lg:gap-5 text-base lg:text-lg">
                {navItems.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`px-2 py-1 transition-colors ${
                            activeId === item.id
                                ? "text-[#30D6D2] font-bold border-b-2 border-[#30D6D2]"
                                : "text-white hover:text-[#30D6D2] font-semibold"
                        }`}
                    >
                        {item.label}
                    </a>
                ))}
            </div>

            <div className="flex items-center gap-3">
                <a
                    href="documents/ADRIAN_NOVA.pdf"
                    download={"ADRIAN_NOVA.pdf"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-block border-3 border-[#06493A] text-[#30D6D2] py-2 md:py-3 px-5 md:px-7 rounded-lg text-sm md:text-base"
                >
                    Download CV
                </a>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-2xl p-2"
                    aria-label="Toggle menu"
                >
                    <i className={`fa ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-[#00060F] border-b-2 border-[#272727] px-5 py-4 flex flex-col gap-1">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={() => setMenuOpen(false)}
                            className={`px-2 py-2 transition-colors ${
                                activeId === item.id
                                    ? "text-[#30D6D2] font-bold border-l-4 border-[#30D6D2]"
                                    : "text-white hover:text-[#30D6D2] font-semibold"
                            }`}
                        >
                            {item.label}
                        </a>
                    ))}

                    <a
                        href="documents/ADRIAN_NOVA.pdf"
                        download={"ADRIAN_NOVA.pdf"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sm:hidden mt-3 border-3 border-[#06493A] text-[#30D6D2] py-2 px-5 rounded-lg text-center"
                    >
                        Download CV
                    </a>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
