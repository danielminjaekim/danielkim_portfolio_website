export default function HomePage() {
  return (
    <section className="space-y-12">
      {/* Hero Section */}
      <div className="relative w-full h-auto flex flex-col items-center text-center pt-10 pb-16 space-y-4">
        <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-indigo-500 shadow-lg">
          <img
            src="/images/portrait.jpg"
            alt="Daniel Kim Portrait"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold text-indigo-400 animate-[fadeIn_1.5s_ease-in-out]">
          Daniel Kim (He/Him)
        </h1>
        <p className="text-gray-300 max-w-md text-sm">
          Software Development Student @ SAIT (Calgary, AB) Turning complex
          problems into elegant solutions.
        </p>
        <p className="text-gray-400 text-sm max-w-md">
          Passionate about crafting engaging user experiences and reliable
          back-end systems. Open to Software Development and IT Intern roles,
          ready to contribute to meaningful projects.
        </p>
        <div className="flex space-x-4 mt-6">
          <a
            href="/resume"
            className="inline-block bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-500 transition-transform transform hover:-translate-y-1 shadow-md"
          >
            View Resume
          </a>
          <a
            href="/work"
            className="inline-block border border-indigo-600 text-indigo-400 px-5 py-2 rounded hover:bg-indigo-600 hover:text-white transition-transform transform hover:-translate-y-1 shadow-md"
          >
            See My Work
          </a>
          <a
            href="/contact"
            className="inline-block bg-pink-500 text-white px-5 py-2 rounded hover:bg-pink-400 transition-transform transform hover:-translate-y-1 shadow-md"
          >
            Hire Me
          </a>
        </div>
      </div>

      {/* Skills Highlight */}
      <div className="max-w-4xl mx-auto bg-gray-800 bg-opacity-60 rounded-lg p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-center mb-6 text-indigo-400">
          Core Skills & Technologies
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-sm text-gray-300">
          <div className="flex flex-col items-center">
            <span className="font-medium text-indigo-300">JavaScript</span>
            <p className="text-xs text-gray-400">Frontend/Backend</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-medium text-indigo-300">React & Next.js</span>
            <p className="text-xs text-gray-400">UI / SSR</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-medium text-indigo-300">SQL & Databases</span>
            <p className="text-xs text-gray-400">Data Modeling</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-medium text-indigo-300">Git & GitHub</span>
            <p className="text-xs text-gray-400">Version Control</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-medium text-indigo-300">HTML & CSS</span>
            <p className="text-xs text-gray-400">Web Fundamentals</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-medium text-indigo-300">C# & Java</span>
            <p className="text-xs text-gray-400">OOP Languages</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-medium text-indigo-300">Node.js</span>
            <p className="text-xs text-gray-400">Backend Services</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-medium text-indigo-300">UX & Design</span>
            <p className="text-xs text-gray-400">User-Focused</p>
          </div>
        </div>
      </div>
    </section>
  );
}
