
export class Usuario {
    constructor(
        public nombre: string,
        public apellidos: string,
        public email: string,
        public password: string,
        public img?: string,
        public correo?: string,
        public role?: string,
        public google?: string,
        public _id?: string,
    ) {
    }
}
