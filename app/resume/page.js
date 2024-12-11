export default function ResumePage() {
  return (
    <section className="space-y-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4 text-indigo-400">Resume</h1>
        <p className="text-gray-400 text-sm">
          A detailed look at my academic achievements, professional experience,
          and technical skills.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-8">
        {/* Profile */}
        <div className="bg-gray-800 bg-opacity-60 rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-2 text-indigo-400">
            Profile
          </h2>
          <p className="text-sm text-gray-200">
            I’m a Software Development student at SAIT and passionate about
            database design, programming, and building engaging user
            experiences. Eager to contribute as a Software Development Intern or
            IT Intern.
          </p>
        </div>

        {/* Education */}
        <div className="bg-gray-800 bg-opacity-60 rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-2 text-indigo-400">
            Education
          </h2>
          <p className="text-sm text-gray-200 font-semibold">
            Southern Alberta Institute of Technology (SAIT), Calgary, AB
          </p>
          <p className="text-sm text-gray-300">
            Diploma in Software Development – Expected Apr. 2025 | GPA: 3.94/4.0
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Relevant Coursework: OOP, Database Design & Programming, Web
            Development, Analysis & Design, UX & Design, Software Security,
            Operating Systems, Network Systems
          </p>
        </div>

        {/* Experience */}
        <div className="bg-gray-800 bg-opacity-60 rounded-lg p-6 shadow-sm space-y-4">
          <h2 className="text-2xl font-semibold mb-2 text-indigo-400">
            Experience
          </h2>
          <div className="text-sm text-gray-200">
            <p className="font-semibold text-gray-200">
              Retail Sales Associate | Winners, TJX Companies Inc.
            </p>
            <p className="text-gray-400">Airdrie, AB | Sep. 2023 – Present</p>
            <ul className="list-disc ml-5 mt-1 space-y-1 text-gray-300">
              <li>
                Handled transactions accurately and resolved customer issues.
              </li>
              <li>
                Enhanced customer satisfaction and sales through product
                knowledge.
              </li>
              <li>
                Maintained organized inventory and appealing store layouts.
              </li>
            </ul>
          </div>
          <div className="text-sm text-gray-200">
            <p className="font-semibold text-gray-200">
              Sales Merchandiser | PepsiCo Inc.
            </p>
            <p className="text-gray-400">Calgary, AB | Sep. 2022 – Aug. 2023</p>
            <ul className="list-disc ml-5 mt-1 space-y-1 text-gray-300">
              <li>Optimized store layouts for improved aesthetics and flow.</li>
              <li>
                Collaborated with vendors and managers for smooth operations.
              </li>
              <li>
                Managed inventory to ensure product availability and freshness.
              </li>
            </ul>
          </div>
        </div>

        {/* Leadership & Involvement */}
        <div className="bg-gray-800 bg-opacity-60 rounded-lg p-6 shadow-sm space-y-4">
          <h2 className="text-2xl font-semibold mb-2 text-indigo-400">
            Leadership & Involvement
          </h2>
          <div className="text-sm text-gray-200">
            <p className="font-semibold text-gray-200">
              Member | MEGABYTE - Advanced Digital Technology Club
            </p>
            <p className="text-gray-400">SAIT | Jan. 2023 – Present</p>
            <ul className="list-disc ml-5 mt-1 space-y-1 text-gray-300">
              <li>
                Enhanced tech skills through coding sessions and workshops.
              </li>
              <li>Networked with peers and industry professionals.</li>
            </ul>
          </div>
          <div className="text-sm text-gray-200">
            <p className="font-semibold text-gray-200">
              Martial Arts Instructor | Master Rim’s Taekwondo
            </p>
            <p className="text-gray-400">Airdrie, AB | Sep. 2018 – Feb. 2020</p>
            <ul className="list-disc ml-5 mt-1 space-y-1 text-gray-300">
              <li>
                Mentored 100+ students in discipline, focus, and perseverance.
              </li>
              <li>Utilized feedback to enhance learning experiences.</li>
            </ul>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="bg-gray-800 bg-opacity-60 rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-2 text-indigo-400">
            Technical Skills
          </h2>
          <p className="text-sm text-gray-300">
            <span className="font-semibold text-gray-200">Languages:</span>{" "}
            Python, C#, Java, JavaScript, HTML/CSS, SQL, PL/SQL
            <br />
            <span className="font-semibold text-gray-200">
              Frameworks:
            </span>{" "}
            React.js, Next.js, Node.js, React Native
            <br />
            <span className="font-semibold text-gray-200">Tools:</span> VS Code,
            Visual Studio, Git, GitHub, VMWare, MS Office Suite
          </p>
        </div>

        <div>
          <a
            href="/files/Resume.pdf"
            download
            className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500 transition-transform transform hover:-translate-y-1 shadow-md"
          >
            Download PDF
          </a>
        </div>
      </div>
    </section>
  );
}
