import { campers } from "./info_camper.js";  // Importamos la lista de campers

// Función que agrega la nota de inscripción y cambia el estado del camper si aprueba
export function agregarNotasPruebaInscripcion() {
  const id = prompt("Ingrese el ID del camper para registrar la nota:");
  console.log("Buscando camper con ID:", id); // Para verificar el ID ingresado
  const camper = campers.find(c => c.ID === Number(id));

  if (camper) {
    console.log("Camper encontrado:", camper); // Verifica si se encuentra el camper
    const nota = Number(prompt(`Ingrese la nota de inscripción para ${camper.Nombre} ${camper.Apellido}:`));

    if (!isNaN(nota) && nota >= 0 && nota <= 100) {
      if (nota >= 60) {
        camper.Estado.Aprobado = true;
        camper.Estado["En proceso"] = false;
        alert(`✅ El camper ${camper.Nombre} fue aprobado en la prueba de inscripción.`);
      } else {
        alert(`❌ El camper ${camper.Nombre} no aprobó la prueba de inscripción.`);
      }
    } else {
      alert("⚠️ Ingrese una nota válida entre 0 y 100.");
    }
  } else {
    alert("🚫 No se encontró un camper con ese ID.");
  }
}

// Función para agregar trainers
export function agregarTrainer() {
  alert("Funcionalidad para agregar trainer aún no implementada.");
}

// Función para agregar módulos
export function agregarModulo() {
  alert("Funcionalidad para agregar módulo aún no implementada.");
}

// Función para el módulo de matrículas
export function moduloMatriculas() {
  alert("Funcionalidad para el módulo de matrículas aún no implementada.");
}

// Función para el módulo de reportes
export function moduloReportes() {
  alert("Funcionalidad para el módulo de reportes aún no implementada.");
}

// Función para eliminar trainers
export function eliminarTrainer() {
  alert("Funcionalidad para eliminar trainer aún no implementada.");
}

// Función para eliminar módulos
export function eliminarModulo() {
  alert("Funcionalidad para eliminar módulo aún no implementada.");
}

// Menú principal del coordinador
export function menuCoordinador() {
  let opcion;
  do {
    opcion = prompt(
      "📋 Menú Coordinador\n" +
      "1. Agregar notas prueba de inscripción\n" +
      "2. Agregar trainers\n" +
      "3. Agregar módulos\n" +
      "4. Módulo matrículas\n" +
      "5. Módulo reportes\n" +
      "6. Eliminar trainers\n" +
      "7. Eliminar módulos\n" +
      "8. Volver al menú principal"
    );

    // Realizar la acción correspondiente con un switch
    switch (opcion) {
      case "1":
        agregarNotasPruebaInscripcion();  // Llama la función para agregar notas
        break;
      case "2":
        agregarTrainer();  // Llama la función para agregar trainers
        break;
      case "3":
        agregarModulo();  // Llama la función para agregar módulos
        break;
      case "4":
        moduloMatriculas();  // Llama la función para módulo matrículas
        break;
      case "5":
        moduloReportes();  // Llama la función para módulo reportes
        break;
      case "6":
        eliminarTrainer();  // Llama la función para eliminar trainers
        break;
      case "7":
        eliminarModulo();  // Llama la función para eliminar módulos
        break;
      case "8":
        alert("Volviendo al menú principal...");  // Mensaje para volver al menú principal
        break;
      default:
        alert("❌ Opción inválida. Por favor, elija una opción válida.");
    }
  } while (opcion !== "8");  // El ciclo sigue hasta que se elige la opción 8
}
