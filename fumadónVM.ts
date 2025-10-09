
  private personas: Persona[];
  private personaSeleccionada: Persona;

  constructor() {
    // Inicializa la lista de personas desde el modelo
    this.personas = getPersonas();
  }

  /**
   * Devuelve la lista completa de personas.
   * @returns Array de objetos Persona.
   */
  public get Personas: Persona[] {
    return this.personas;
  }

  public get PersonaSeleccionada(): Persona {
    return this.personaSeleccionada;
  }

  public set PersonaSeleccionada(persona: Persona) {
    this.personaSeleccionada = persona;
  }

  



