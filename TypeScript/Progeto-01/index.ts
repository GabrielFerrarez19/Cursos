// type Adrress = {
//     num: number
//     street: string 
// }

// type User = {
//     name?: string
//     age: number
//     address: Adrress
// }

// type UserProperty = keyof User

// function PickProperty(user: User, property: UserProperty){
//     return (user[property])
// }

// const  usuario: User = {
//     name:"gabriel",
//     age:12,
//     address:{
//         street:"Rua tal",
//         num: 72
//     }
// }

// const video = {
//     title: 'usando tyescript',
//     duration:180
// }

// type Video = keyof typeof video

// console.log(PickProperty(usuario, 'age'))

// type PickPropertyReturnType = ReturnType<typeof PickProperty>

// type UserWithoutAddress = Omit<User, "name" | "address">

// type UserNameAndAge = Pick<User , 'name' | 'age'>
 
// type UserPartia = Partial<User>



type Video ={
    title: string
    duration: number
}



function PickProperty<ObjType extends Record<string, unknown>>(Obj: ObjType, property: keyof ObjType){
    return (Obj[property])
}


const video: Video = {
    title: "TypeScript",
    duration: 1500,
}

PickProperty(video, 'duration')