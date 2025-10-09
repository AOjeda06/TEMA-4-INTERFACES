import { Persona } from "../models/Entities/PersonaModel";
import { getPersonas } from "../models/Data/RepositoryPersona";

export class IndexVM {
  /**
   * Devuelve la lista completa de personas en formato plano.
   * @returns Array de objetos con id y nombre completo.
   */
  public obtenerPersonas(): { id: string; nombreCompleto: string }[] {
    return getPersonas().map(persona => ({
      id: persona.getId(),
      nombreCompleto: `${persona.getNombre()} ${persona.getApellido()}`
    }));
  }

  /**
   * Devuelve los datos completos de una persona por su ID.
   * @param id - El identificador de la persona.
   * @returns Objeto con id, nombre y apellido o null si no existe.
   */
  public obtenerDatosPersona(id: string): { id: string; nombre: string; apellido: string } | null {
    const persona = getPersonas().find(p => p.getId() === id);
    if (!persona) return null;
    return {
      id: persona.getId(),
      nombre: persona.getNombre(),
      apellido: persona.getApellido()
    };
  }
}
