import { useEffect } from 'react'
import AnimScroll from "./animScroll"
import Link from 'next/link';

function Banner() {

    useEffect(() => {
        AnimScroll(".anim-1", 150,".anim-1")
        AnimScroll(".anim-2", 200,".anim-1")
        AnimScroll(".anim-3", 250,".anim-1")
    }, [])

    return (
        <div className="w-full xl:w-container px-8 lg:px-20 xl:px-0 mx-auto text-white text-center mt-16 xl:mt-28">
            <div className="w-full lg:w-4/6 mx-auto">
                <h1 className="anim-1 text-4xl md:text-5xl font-bold leading-tight md:leading-tight">
                    Help to simplify product design by using AI
                </h1>
                <p className="anim-2 mt-5 text-base md:text-lg leading-normal md:leading-relaxed">
                    By using our software, you can create cool renderings and 3D models from hand-drawn sketches
                </p>
                <div className="anim-2 mt-7">
                  <Link href="/image-generation">
                    <button className="bg-btnDark text-white w-44 mx-3 h-16 font-medium rounded-lg hover:shadow-xl transition-all">Get started</button>
                  </Link>  
                  <button className="bg-btnLight text-blue w-44 mx-3 h-16 font-medium rounded-lg hover:shadow-xl transition-all">Watch a video</button>
                </div>
            </div>
            <img className="anim-3 mt-10 absolute left-0 right-0 md:relative md:mt-20 shadow-2xl" src="/dashboard2.PNG" alt="software dashboard" />
        </div>
    )
}

export default Banner
