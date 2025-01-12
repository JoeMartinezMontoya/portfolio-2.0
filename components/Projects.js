const Projects = () => (
    <section id="projects" className="h-screen p-10 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-3xl text-center mb-8 dark:text-white">Mes Projets</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white dark:bg-gray-700 rounded shadow">Projet 1</div>
        <div className="p-6 bg-white dark:bg-gray-700 rounded shadow">Projet 2</div>
        <div className="p-6 bg-white dark:bg-gray-700 rounded shadow">Projet 3</div>
      </div>
    </section>
  );
  
  export default Projects;