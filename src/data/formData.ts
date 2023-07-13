export  interface formValues {
    id:number,
    name?:string,
    role?:string,
    skills:string[],
    startDate?:string,
    preference?:string
}

export const formData : formValues[] = [
    {id:0,name:"Ochonogor Eze",
    role:"Boss",
    skills:["React","Java","Node"],
    startDate:"2023-09-09",
    preference:"Remote work"
},
    {id:1,name:"Ochonogor Nne",
    role:"QA Lord",
    skills:["Selenium","Cypress","SQL"],
    startDate:"2023-10-09",
    preference:"Remote work"
},
    {id:2,name:"Ochonogor Ashim",
    role:"Developer",
    skills:["React","NestJS","Node"],
    startDate:"2023-09-09",
    preference:"Remote work"
},
]

export const roles = [
    {level:"intermediate", name:"Backend Developer"},
    {level:"Senior", name:"Frontend Developer"},
    {level:"Junior", name:"Fullstack Developer"},
    {level:"Midlevel", name:"Cloud Developer"},
    {level:"novice", name:"Devops Engineer"}
]

export const skills = [
    "Javascript","Nodejs","Java","C#","Dotnet","Terraform","Docker","Kubernetes","Azure"
]

