import { RevealOnScroll } from "../revealOnScroll";


export const About = () => {

    const FrontendSkills = [
        "React",
        "tailwindCSS",
        "JavaScript",
        "GSAP",
        "vite" ];
    const BackendSkills = [
        "nodeJS",
        "Express",
        "python",
        "Django",
        "sevlets",]

    return(<>
        <section id="about" 
        className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 
                bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text text-transparent">
                    About Me
                </h2>
                <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        passionate about developing innovative
                         web applications that enhance user experiences.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {FrontendSkills.map((tech) => (
                                    <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                    hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,30,2246,.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {BackendSkills.map((tech) => (
                                    <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                    hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,30,2246,.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> 📕 Education </h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong>🎓B.Tech in Computer Science Engineering</strong>- KCC ITM Greater Noida (2022-2026)
                                </li>
                                <li>
                                    <strong> 🏫 Intermediate</strong>- Apeejay International School (2022)
                                </li>
                            </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> 💼 Work Expirience </h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong>Tainee</strong>- HCL Tech (nov 2024 - feb 2025)
                            <p>
                                Web development using java , JavaScript and AI
                            </p>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    </>)
}