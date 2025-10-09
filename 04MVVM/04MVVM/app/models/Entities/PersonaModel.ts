/**
 * Clase que representa una persona.
 */
export class Persona {
    private readonly id: string;
    private nombre: string;
    private apellido: string;

    /**
     * Constructor de la clase Persona.
     * @param id Identificador único de la persona.
     * @param nombre Nombre de la persona.
     * @param apellido Apellido de la persona.
     */
    constructor(id: string, nombre: string, apellido: string) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
    }

    /**
     * Getter para el id.
     * @returns El id de la persona.
     */
    public getId(): string {
        return this.id;
    }

    /**
     * Getter para el nombre.
     * @returns El nombre de la persona.
     */
    public getNombre(): string {
        return this.nombre;
    }

    /**
     * Setter para el nombre.
     * @param nombre - El nuevo nombre para la persona.
     */
    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    /**
     * Getter para el apellido.
     * @returns El apellido de la persona.
     */
    public getApellido(): string {
        return this.apellido;
    }

    /**
     * Setter para el apellido.
     * @param apellido - El nuevo apellido para la persona.
     */
    public setApellido(apellido: string): void {
        this.apellido = apellido;
    }
}

export default Persona;