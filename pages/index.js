import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto p-5">
      {/* Navigation */}
      <nav className="grid grid-cols-2 md:grid-cols-3 md:m-10">
        <div className="">
          <h1 className="font-semibold text-xl md:text-3xl">JM Nicolas</h1>
          <h3 className="md:text-xl text-sm">Full-Stack Developer</h3>
        </div>
        <div className="">
          <img src="/icons/instagram.png" alt="" className="md:w-7 w-4 inline-block mx-2" />
          <img src="/icons/twitter.png" alt="" className="md:w-7 w-4 inline-block mx-2" />
          <img src="/icons/linkedin.png" alt="" className="md:w-7 w-4 inline-block mx-2" />
          <img src="/icons/github.png" alt="" className="md:w-7 w-4 inline-block mx-2" />
          <img src="/icons/crescent-moon.png" alt="" className="md:w-7 w-4 inline-block mx-2" />
        </div>
        <div className="my-5">
          <a href="/about" className="mr-4 font-semibold md:text-xl">About</a>
          <a href="/projects" className="mx-4 font-semibold md:text-xl">Projects</a>
          <a href="/experience" className="mx-5 font-semibold md:text-xl">Experience</a>
          <a href="/contact" className="mx-5 font-semibold md:text-xl">Contact</a>
        </div>
      </nav>
      {/* landing page */}
      <div className="max-w-4xl ">
        <img src="/images/jaynicolas.jpg" alt="" className="mx-auto md:w-80 w-60 rounded-md block md:hidden" />

        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl md:flex md:items-stretch">
          <div className="mb-5 self-center">
            <h1 className="font-bold md:text-6xl text-xl my-3"> Freelancer and Full Stack Developer</h1>
            <h3 className="text-md md:text-2xl">A 22 year old student seeking to enchance skills in software development in Norther Mindanao, Philippines.</h3>
          </div>
          <div>
            <img src="/images/jaynicolas.jpg" alt="" className="hidden rounded-md md:block md:ml-60 md:w-96 w-60" />
          </div>
        </div>
      </div>

      {/* Recent Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl my-5 md:my-10">
        <div className="md:my-5 my-3">
          <h1 className="md:text-5xl md:mb-5 mb-3 text-3xl font-bold">Recent Projects</h1>
          <h3 className="text-xl ">React.js Calculator</h3>
          <a href="https://react-app-calculator-don.netlify.app/"><img src="/projects/project3.png" alt="" className="w-auto" /></a>
        </div>
        <div className="my-5">
          <h3 className="text-xl ">Freshness and Spoilage Detection of Musa Acuminata using React.js App</h3>
          <a href="https://sample-react-appx.herokuapp.com"><img src="/projects/project2.png" alt="" className="w-auto" /></a>
        </div>
      </div>

      {/* Footer */}
      <footer className="mb-5 ml-5">
        <div>
            <h1 className="font-semibold text-md md:text-xl">JM Nicolas</h1>
          </div>
          <div className="">
            <img src="/icons/instagram.png" alt="" className="md:w-5 w-3 inline-block mr-1" />
            <img src="/icons/twitter.png" alt="" className="md:w-5 w-3 inline-block mx-1" />
            <img src="/icons/linkedin.png" alt="" className="md:w-5 w-3 inline-block mx-1" />
            <img src="/icons/github.png" alt="" className="md:w-5 w-3 inline-block mx-1" />
          </div>
      </footer>
    </div>
  )
}
