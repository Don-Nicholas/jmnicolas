import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Navigation */}
      <nav className="grid grid-cols-2 md:grid-cols-3 m-10 max-w-4xl">
        <div className="">
          <h1 className="font-semibold text-3xl">JM Nicolas</h1>
          <h3 className="text-xl">Full-Stack Developer</h3>
        </div>
        <div className="ml-10">
          <img src="/icons/instagram.png" alt="" className="w-7 inline-block mx-1" />
          <img src="/icons/twitter.png" alt="" className="w-7 inline-block mx-1" />
          <img src="/icons/linkedin.png" alt="" className="w-7 inline-block mx-1" />
          <img src="/icons/github.png" alt="" className="w-7 inline-block mx-1" />
          <img src="/icons/crescent-moon.png" alt="" className="w-7 inline-block mx-1" />
        </div>
        <div className="my-5">
          <a href="/about" className="mr-7 font-semibold text-xl">About</a>
          <a href="/projects" className="mx-7 font-semibold text-xl">Projects</a>
          <a href="/experience" className="mx-7 font-semibold text-xl">Experience</a>
          <a href="/contact" className="mx-7 font-semibold text-xl">Contact</a>
        </div>
      </nav>
      {/* landing page */}
      <div className="max-w-4xl mx-auto ">
        <img src="/images/nicolas2.jpg" alt="" className="mx-auto w-80 block md:hidden" />

        <div className="grid grid-cols-1 md:grid-cols-2 m-10 max-w-4xl">
          <div className="my-5">
            <h1 className="font-bold text-2xl my-3"> Freelancer and Full Stack Developer</h1>
            <h3 className="text-xl">A 22 year old student seeking to enchance skills in software development in Norther Mindanao, Philippines.</h3>
          </div>
          <div>
            <img src="/images/jmnicolas.png" alt="" className="hidden md:block" />
          </div>
        </div>
      </div>

      {/* Recent Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 m-10 max-w-4xl my-10">
        <div className="my-5">
          <h1 className="text-5xl mb-5">Recent Projects</h1>
          <h3 className="text-xl ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, quam sed in exercitationem dolores inventore consectetur?</h3>
          <img src="/projects/project1.png" alt="" className="w-auto" />
        </div>
        <div className="my-5">
          <h1 className="text-5xl mb-5">Recent Projects</h1>
          <h3 className="text-xl ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, quam sed in exercitationem dolores inventore consectetur?</h3>
          <img src="/projects/project2.png" alt="" className="w-auto" />
        </div>
      </div>

      {/* Footer */}
      <footer className="mb-5 ml-5">
        <div className="my-3">
            <h1 className="font-semibold text-xl">JM Nicolas</h1>
          </div>
          <div className="">
            <img src="/icons/instagram.png" alt="" className="w-5 inline-block mr-1" />
            <img src="/icons/twitter.png" alt="" className="w-5 inline-block mx-1" />
            <img src="/icons/linkedin.png" alt="" className="w-5 inline-block mx-1" />
            <img src="/icons/github.png" alt="" className="w-5 inline-block mx-1" />
          </div>
      </footer>
    </div>
  )
}
