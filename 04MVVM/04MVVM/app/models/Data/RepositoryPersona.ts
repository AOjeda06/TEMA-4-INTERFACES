import { Persona } from "../Entities/PersonaModel";

/**
 * Lista estática de personas.
 */
const personas: Persona[] = [
    new Persona('1', 'Andrés', 'Ojeda'),
    new Persona('2', 'Juan', 'Pérez'),
    new Persona('3', 'Pedro', 'Gómez'),
    new Persona('4', 'María', 'López'),
    new Persona('5', 'Luisa', 'Martínez'),
    new Persona('6', 'Ana', 'García'),
    new Persona('7', 'José', 'Rodríguez'),
    new Persona('8', 'Luis', 'Hernández'),
    new Persona('9', 'Carmen', 'Sánchez'),
    new Persona('10', 'Marta', 'Díaz'),
    new Persona('11', 'Carlos', 'Ruiz'),
    new Persona('12', 'Sofía', 'Alonso'),
    new Persona('13', 'Javier', 'Moreno'),
    new Persona('14', 'Elena', 'Jiménez'),
    new Persona('15', 'Miguel', 'Muñoz'),
    new Persona('16', 'Isabel', 'Romero'),
    new Persona('17', 'David', 'Navarro'),
    new Persona('18', 'Laura', 'Torres'),
    new Persona('19', 'Francisco', 'Domínguez'),
    new Persona('20', 'Patricia', 'Vázquez'),
];

/**
 *  Función para obtener la lista de personas.
 * @returns Lista de personas.
 */
export function getPersonas(): Persona[] {
    return personas;
}
