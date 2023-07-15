export  interface formValues {
    id:number,
    name:string,
    role:{level:string, name:string},
    skills:string[],
    startDate:string,
    preference:string
}

export const formData : formValues[] = [
    {id:0,name:"Ochonogor Eze",
    role:{name:"Frontend Developer",level:"Intermediate"},
    skills:["React","Java","Node"],
    startDate:"09/09/2023",
    preference:"Remote work"
},
    {id:1,name:"Ochonogor Nne",
    role:{name:"Frontend Developer",level:"Intermediate"},
    skills:["Selenium","Cypress","SQL"],
    startDate:"10/09/2023",
    preference:"Remote work"
},
    {id:2,name:"Ochonogor Ashim",
    role:{name:"Frontend Developer",level:"Intermediate"},
    skills:["React","NestJS","Node"],
    startDate:"09/14/2023",
    preference:"Remote work"
},
]

export const roles = [
    {level:"Intermediate", name:"Backend Developer"},
    {level:"Senior", name:"Frontend Developer"},
    {level:"Junior", name:"Fullstack Developer"},
    {level:"Midlevel", name:"Cloud Developer"},
    {level:"novice", name:"Devops Engineer"}
]

export const skills = [
    "Javascript","Nodejs","Java","C#","Dotnet","Terraform","Docker","Kubernetes","Azure"
]

