import { RevealOnScroll } from "../revealOnScroll"

export const Home = () => {


    return(<>
        <section id="home" className="min-h-screen flex items-center justify-center relative ">
            <RevealOnScroll>
            <div className="text-center z-10 m- px-4 bg-gray/50 rounded-xl">
                <h1 className="pb-1 text-5xl md:text-7xl font-bold mb-6 
                bg-white bg-clip-text text-transparent leading-right ">
                    Hey I'm Vasistha Yadav –
                </h1>

                <h3 className="pb-1 text-xl md:text-xl font-bold mb-6 
                bg-gradient-to-r from-blue-500 to-purple-700 bg-clip-text text-transparent leading-right ">
                building websites smoother than a butterfly's wings.
                </h3>

                <p className="text-white text-lg mb-8 max-w-lg mx-auto">
                I'm a passionate web developer based in Noida, India,
                 specializing in crafting responsive, 
                 user-friendly websites and applications.
                 I focus on delivering clean, scalable code that provides seamless user experiences. 
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="#projects" className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-lg
                     hover:bg-blue-600 transition duration-300 overflow-hidden transform hover:scale-110">
                        View Projects
                    </a>
                    <a href="#contact" className=" text-white px-6 py-3 rounded-md shadow-lg border-2
                     hover:bg-blue-600 transition duration-300 overflow-hidden transform hover:scale-110 hover:border-blue-600 border-blue-500">
                        Contact Me
                    </a>

                </div>
            </div>
            </RevealOnScroll>
        </section>
        </>)

}