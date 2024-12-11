export default function WorkPage() {
  return (
    <section className="space-y-10">
      <h1 className="text-3xl font-bold text-center text-indigo-400">
        My Work
      </h1>
      <p className="text-gray-400 mb-6 text-center max-w-md mx-auto">
        Below are a few projects that highlight my journey. More will be added
        as I grow my portfolio.
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="border border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow bg-gray-800 bg-opacity-60">
          <img
            src="/images/project1.png"
            alt="Project 1"
            className="w-full object-cover h-48"
          />
          <div className="p-4 space-y-2">
            <h3 className="font-semibold text-lg text-gray-200">
              Web Dev Coursework Project
            </h3>
            <p className="text-gray-300 text-sm">
              A responsive React-based website with a custom API backend.
              Demonstrated front-end design and RESTful integration.
            </p>
            <div className="flex space-x-4 pt-2 text-sm font-medium text-indigo-400">
              <a
                href="https://github.com/danielminjaekim/cprg306-assignments"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-300"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
