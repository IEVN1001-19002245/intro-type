const alumno={

}

interface Alumno{
    nombre: string;
}

let mascotas:string[]=["Perro","Gato,","Hamster"];
mascotas[1]="Pajaro";
mascotas.push("Tortuga");
console.log(mascotas);


let notas:(number|string)[]=[7,8,9,"Aprobado"];
notas.push(10);
notas.push("Aprobado");
console.log(notas);