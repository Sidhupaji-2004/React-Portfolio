/* The code snippet you provided is a JavaScript array of objects named `skills`. Each object in the
array represents a category of skills, such as Frontend, Languages, Backend, and Tools. */
const skills = [
    {
        icon: "text-blue-accent-700 text-4xl fa-brands fa-react",
        title: "Frontend Development", 
        skills: [
            "HTML", 
            "CSS", 
            "Javascript",
            "React JS", 
            "React Native",
            "Tailwind CSS", 
            "FontAwesome", 
            "OAuth",
        ], 
        percentages:[
            80, 
            70,
            90,
            75,
            55,
            70,
            70,
            60,
        ]
    }, 
    {
        icon: "text-blue-accent-700 text-4xl fa-solid fa-code",
        title: "Programming Languages", 
        skills: [
            "Java", 
            "C", 
            "C++", 
            "Javascript",
            "Python", 
            "Typescript"
        ], 
        percentages:[
            80, 
            70,
            90,
            75,
            55,
            70,
            70,
            60,
        ]
    }, 
    {
        icon: "text-blue-accent-700 text-4xl fa-brands fa-node-js", 
        title: "Backend Development", 
        skills: [
            "Express JS", 
            "Node JS", 
            "APIs", 
            "Java",
            "MySQL",
        ],
        percentages:[
            80, 
            70,
            55,
            95,
            55,
        ]
    }, 
    {
        icon: "text-blue-accent-700 text-4xl fa-solid fa-screwdriver-wrench", 
        title: "Tools", 
        skills: [
            "VS Code", 
            "Git", 
            "GitHub",
            "Vite", 
            "RapidAPI Client"
        ], 
        percentages:[
            80, 
            70,
            90,
            75,
        ]
    }
]; 

export default skills;