import { campers } from "./info_camper.js";
import { salones } from "./salones.js";

export function agregarNotasPruebaInscripcion() {
  const id = prompt("Ingrese el ID del camper para registrar la nota:");
  alert ("Buscando camper con ID:", id); 
  const camper = campers.find(c => c.ID == Number(id));

  if (camper) {
    alert ("Camper encontrado:", camper); 
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
      alert("Ingrese una nota");
    }
  } else {
    alert("No se encontró un camper con ese ID.");
  }
};

// Agregar un nuevo trainer
export function agregarTrainer() {
  const nomtn = prompt("Ingrese el nombre del nuevo trainer:");
  const salonn = prompt("Ingrese el salón del nuevo trainer:");
  const fechain = prompt("Digite la fecha de inicio:");
  const fechafn = prompt("Digite la fecha de finalización:");
  const horarion = prompt("Ingrese el horario:");
  const rutan = prompt("Ingrese la ruta a seguir:");
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
// Nuevo modulo
export function agregarModulo() {
  if (salones.length == 0) {
    alert("No hay salones registrados.");
    return;
  }
  let mensaje = "Salones disponibles:\n";
  salones.forEach((salon, i) => {
    mensaje += `${i + 1}. ${salon.Salon} - Grupo ${salon.grupo}\n`;
  });

  let opcion = prompt(`${mensaje}\nElige el número del salón:`);
  let indice = Number(opcion) - 1;

  if (salones[indice]) {
    let modulo = prompt("Escribe el nombre del nuevo módulo:");
    if (modulo) {
      salones[indice].Modulos.push(modulo.trim());
      alert(`Módulo "${modulo}" agregado al salón ${salones[indice].Salon}.`);
    } else {
      alert("Nombre de módulo inválido.");
    }
  } else {
    alert("Opción inválida.");
  }
}

export function moduloMatriculas() {
  const aprobados = campers.filter(c => c.Estado?.Aprobado);
  if (aprobados.length === 0) {
    alert("No hay campers aprobados.");
    return;
  }
  const camperSeleccion = prompt("Campers aprobados:\n" +
    aprobados.map((c, i) => `${i + 1}. ${c.Nombre} ${c.Apellido} (ID: ${c.ID})`).join("\n") +
    "\n\nIngrese el número del camper que desea asignar:");

  const camper = aprobados[Number(camperSeleccion) - 1];
  if (!camper) {
    alert("Número de camper no válido.");
    return;
  }
  const salonSeleccion = prompt("Salones disponibles:\n" +
    salones.map((s, i) => `${i + 1}. ${s.Salon} (Grupo ${s.grupo}) - ${s.Profesor}`).join("\n") +
    "\n\nIngrese el número del salón para asignar:");

  const salon = salones[Number(salonSeleccion) - 1];
  if (!salon) {
    alert("Número de salón no válido.");
    return;
  }
  camper.Grupo = salon.grupo;

  alert(`${camper.Nombre} fue asignado al grupo ${salon.grupo} con el profesor ${salon.Profesor}.`);
}

export function moduloReportes() {
  let opcion;
  do {
    opcion = prompt(
      "Módulo de Reportes\n" +
      "1. Campers inscritos\n" +
      "2. Campers aprobados\n" +
      "3. Lista de trainers\n" +
      "4. Campers con bajo rendimiento\n" +
      "5. Campers y trainers por ruta\n" +
      "6. Aprobados y perdidos por módulo\n" +
      "7. Volver"
    );

    switch (opcion) {
      case "1":
        alert("Campers inscritos:\n" +
          campers.filter(c => c.Estado?.["En proceso"])
            .map(c => `${c.Nombre} ${c.Apellido}`).join("\n") || "Ninguno");
        break;

      case "2":
        alert("Campers aprobados:\n" +
          campers.filter(c => c.Estado?.Aprobado)
            .map(c => `${c.Nombre} ${c.Apellido}`).join("\n") || "Ninguno");
        break;

      case "3":
        alert("Trainers:\n" +
          salones.map(s => s.Profesor).join("\n"));
        break;

      case "4":
        alert("Campers con bajo rendimiento:\n" +
          campers.filter(c => c.Notas && promedio(Object.values(c.Notas)) < 60)
            .map(c => `${c.Nombre} ${c.Apellido}`).join("\n") || "Ninguno");
        break;

        case "5":
          let mensajeRuta = "";
          salones.forEach(s => {
            const grupoCampers = campers.filter(c => c.Grupo === s.grupo);
            mensajeRuta += `\nRuta: ${s.Ruta}\nTrainer: ${s.Profesor}\nCampers:\n${grupoCampers.map(c => `- ${c.Nombre} ${c.Apellido}`).join("\n") || "Ninguno"}\n`;
          });
          alert(mensajeRuta);
          break;

      case "6":
        let resumen = "";
        salones.forEach(s => {
          s.Modulos.forEach(m => {
            let aprobados = 0;
            let perdidos = 0;
            campers.forEach(c => {
              if (c.Grupo === s.grupo && c.Notas && c.Notas[m] !== undefined) {
                if (c.Notas[m] >= 60) aprobados++;
                else perdidos++;
              }
            });
            resumen += `\nMódulo: ${m} (Trainer: ${s.Profesor})\nAprobados: ${aprobados}\nPerdidos: ${perdidos}\n`;
          });
        });
        alert(resumen);
        break;

      case "7":
        alert("Volviendo al menú...");
        break;

      default:
        alert("Opción inválida.");
    }

  } while (opcion !== "7");
}

function promedio(arr) {
  return Math.round(arr.reduce((a, b) => a + b, 0) / arr.length);
}

export function eliminarTrainer() {
  let lista = "Entrenadores:\n";
  salones.forEach((s, i) => {
    lista += `${i + 1}. ${s.Profesor}\n`;
  });

  const opcion = prompt(lista + "Escriba el número del entrenador que desea eliminar:");
  const index = Number(opcion) - 1;

  if (salones[index]) {
    salones[index].Profesor = "Sin asignar";
    alert("Trainer eliminado.");
  } else {
    alert("Opción inválida.");
  }
}

export function eliminarModulo() {
  let listaSalones = "Salones disponibles:\n";
  salones.forEach((s, i) => {
    listaSalones += `${i + 1}. ${s.Salon}\n`;
  });

  const salonIndex = Number(prompt(listaSalones + "Escriba el número del salón:")) - 1;

  if (salones[salonIndex]) {
    const modulos = salones[salonIndex].Modulos;
    if (modulos.length === 0) {
      alert("Este salón no tiene módulos.");
      return;
    }

    let listaModulos = `Módulos en ${salones[salonIndex].Salon}:\n`;
    modulos.forEach((m, i) => {
      listaModulos += `${i + 1}. ${m}\n`;
    });

    const moduloIndex = Number(prompt(listaModulos + "Ingrese el número del módulo que desea eliminar:")) - 1;

    if (modulos[moduloIndex]) {
      const eliminado = modulos.splice(moduloIndex, 1);
      alert(`Módulo "${eliminado}" eliminado con éxito.`);
    } else {
      alert("Opción de módulo inválida.");
    }
  } else {
    alert("Opción de salón inválida.");
  }
}

// Menú coordinador
export function menuCoordinador() {
  let opcion;
  do {
    opcion = prompt(
      "Menú Coordinador\n" +
      "1. Agregar notas prueba de inscripción\n" +
      "2. Agregar trainers\n" +
      "3. Agregar módulos\n" +
      "4. Módulo matrículas\n" +
      "5. Módulo reportes\n" +
      "6. Eliminar trainers\n" +
      "7. Eliminar módulos\n" +
      "8. Volver al menú principal"
    );
    switch (opcion) {
      case "1":
        agregarNotasPruebaInscripcion();  
        break;
      case "2":
        agregarTrainer();  
        break;
      case "3":
        agregarModulo();  
        break;
      case "4":
        moduloMatriculas();  
        break;
      case "5":
        moduloReportes(); 
        break;
      case "6":
        eliminarTrainer(); 
        break;
      case "7":
        eliminarModulo();  
        break;
      case "8":
        break;
      default:
        alert(" Opción incorrecta.");
    }
  } while (opcion !== "8"); 
}
