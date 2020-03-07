export class Curso{

    constructor(
        public nombre:string,
        public tecnologias:string[],
        public precio:number,
        public autor:string,
        public alumnos:number
    ){ }
}