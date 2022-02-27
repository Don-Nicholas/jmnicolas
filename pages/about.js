import React from 'react'

function about() {
  return (
    <div>
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

export default about