import { campers } from "./info_camper.js";
export function menuCoordinador() {
    const opcion = prompt(
      "Menú del Coordinador:\n" +
      "1. Agregar notas prueba de inscripción\n" +
      "2. Agregar trainers\n" +
      "3. Agregar módulos\n" +
      "4. Módulo matrículas\n" +
      "5. Módulo reportes\n" +
      "6. Eliminar trainers\n" +
      "7. Eliminar módulos\n" +
      "8. Volver al menú principal"
    );
  
    return parseInt(opcion); // Asegura que se convierta a número
  }
  