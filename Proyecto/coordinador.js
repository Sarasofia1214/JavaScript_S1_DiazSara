import { campers } from "./info_camper.js";
import { salones } from "./salones.js";

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
        alert(`El camper ${camper.Nombre} fue aprobado en la prueba de inscripción.`);
      } else {
        alert(`El camper ${camper.Nombre} no aprobó la prueba de inscripción.`);
      }
    } else {
      alert("Ingrese una nota válida entre 0 y 100.");
    }
  } else {
    alert("No se encontró un camper con ese ID.");
  }
}

// Estructura en memoria para los trainers
let trainers = {
  "Trainers": {}
};

// Función para agregar un nuevo trainer
export function agregarTrainer() {
  const nomtn = prompt("Ingrese el nombre del nuevo trainer:");
  const salonn = prompt("Ingrese el salón del nuevo trainer:");
  const fechain = prompt("Digite la fecha de inicio:");
  const fechafn = prompt("Digite la fecha de finalización:");
  const horarion = prompt("Ingrese el horario:");
  const rutan = prompt("Ingrese la ruta a seguir (Java, NodeJS, .NET):");

  // Agregar el nuevo trainer a la estructura
  trainers["Trainers"][salonn] = {
    "Profesor": nomtn,
    "Salon": salonn,
    "Fecha de inicio": fechain,
    "Fecha de finalización": fechafn,
    "Horario": horarion,
    "Ruta": rutan
  };

  alert(`El trainer ${nomtn} ha sido agregado al salón ${salonn}.`);
}

export function agregarModulo() {
  if (salones.length === 0) {
    alert("No hay salones registrados.");
    return;
  }

  // Mostrar salones disponibles
  let listaSalones = salones.map((s, i) => `${i + 1}. ${s.Salon} - Grupo ${s.grupo}`).join("\n");
  let opcion = prompt(`Salones disponibles:\n${listaSalones}\n\nElige el número del salón:`);

  let indice = Number(opcion) - 1;

  if (!isNaN(indice) && salones[indice]) {
    let modulo = prompt("Escribe el nombre del nuevo módulo:");

    if (modulo && modulo.trim() !== "") {
      salones[indice].Modulos.push(modulo.trim());
      alert(`✅ Módulo "${modulo}" agregado al salón ${salones[indice].Salon}.`);
    } else {
      alert("⚠️ Módulo inválido.");
    }
  } else {
    alert("❌ Opción inválida.");
  }
}

export function moduloMatriculas() {
  // Filtrar campers aprobados
  const aprobados = campers.filter(c => c.Estado?.Aprobado);
  if (aprobados.length === 0) {
    alert("No hay campers aprobados.");
    return;
  }

  // Mostrar campers aprobados
  const camperSeleccion = prompt("Campers aprobados:\n" +
    aprobados.map((c, i) => `${i + 1}. ${c.Nombre} ${c.Apellido} (ID: ${c.ID})`).join("\n") +
    "\n\nIngrese el número del camper que desea asignar:");

  const camper = aprobados[Number(camperSeleccion) - 1];
  if (!camper) {
    alert("Número de camper no válido.");
    return;
  }

  // Mostrar salones disponibles con índice
  const salonSeleccion = prompt("Salones disponibles:\n" +
    salones.map((s, i) => `${i + 1}. ${s.Salon} (Grupo ${s.grupo}) - ${s.Profesor}`).join("\n") +
    "\n\nIngrese el número del salón para asignar:");

  const salon = salones[Number(salonSeleccion) - 1];
  if (!salon) {
    alert("Número de salón no válido.");
    return;
  }

  // Asignar grupo al camper
  camper.Grupo = salon.grupo;

  alert(`${camper.Nombre} fue asignado al grupo ${salon.grupo} con el profesor ${salon.Profesor}.`);
}

// Función para el módulo de reportes (sin implementar aún)
export function moduloReportes() {
  alert("Funcionalidad para el módulo de reportes aún no implementada.");
}

// Función para eliminar un trainer (sin implementar aún)
export function eliminarTrainer() {
  alert("Funcionalidad para eliminar trainer aún no implementada.");
}

// Función para eliminar módulos (sin implementar aún)
export function eliminarModulo() {
  alert("Funcionalidad para eliminar módulo aún no implementada.");
}

// Función del menú coordinador
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
