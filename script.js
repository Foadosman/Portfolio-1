const projects = [
    {
        title: "rainydays",
        description: "Online store for rain jackets. Built with HTML and CSS",
        image: "images/RainyDays_Logo.png",
        alt: "rainydays Project",
        repo: "https://github.com/NoroffFEU/html-css-course-assignment-Foadosman",
        live: "https://norofffeu.github.io/html-css-course-assignment-Foadosman/"
    },
    {
        title: "Semester Project",
        description: "Community Science Museum. Built with HTML and CSS",
        image: "images/celso-405219-1.png",
        alt: "Semester project",
        repo: "https://github.com/Foadosman/Semester-Project-1",
        live: "https://foadosman.github.io/Semester-Project-1/"
    },
    {
        title: "Project Exam",
        description: "Blog for gamers. Built with HTML, CSS and Javascript",
        image: "images/Logo-ggblog.png",
        alt: "Project exam",
        repo: "https://github.com/NoroffFEU/FED1-PE1-Foadosman",
        live: "https://ggblog-project.netlify.app/"
    }
];

const container = document.getElementById("projectContainer");

projects.forEach((project) => {
    container.insertAdjacentHTML("beforeend", `
    <section class="project-card">
    <img src="${project.image}" alt="${project.alt}">
    <h2>${project.title}</h2>
    <p>${project.description}</p>
    <a href="${project.repo}" target="_blank">View Github repo</a>
    <a href="${project.live}" target="_blank">View live site</a>
    </section>
    `);
});