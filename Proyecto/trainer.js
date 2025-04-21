import { salones } from "./salones.js";
import { campers } from "./info_camper.js";

export function mostrarEstudiantesPorProfesor(nombreProfesor) {
  const grupos = salones
    .filter(salon => salon.Profesor === nombreProfesor)
    .map(salon => salon.grupo);

  const estudiantes = campers.filter(camper => grupos.includes(camper.grupo));

  if (estudiantes.length > 0) {
    let mensaje = `Estudiantes del profesor ${nombreProfesor}:\n\n`;
    estudiantes.forEach(c => {
      mensaje += ` ${c.Nombre} ${c.Apellido} - Grupo: ${c.grupo}\n`;
    });
    alert(mensaje);
  } else {
    alert(" No se encontraron estudiantes asignados al profesor ${nombreProfesor}");
  }
}

export function trainerAgregarNotasp(nombreProfesor)  {
  const idCamper = Number(prompt("Ingrese el ID del camper a calificar:"));
  const camper = campers.find(c => c.ID === idCamper);

  if (!camper) {
    alert("Camper no encontrado.");
    return;
  }

  const teoria = Number(prompt("Ingrese la nota de la prueba teórica (30%):"));
  const practica = Number(prompt("Ingrese la nota de la prueba práctica (60%):"));
  const evaluacion = Number(prompt("Ingrese la nota de la evaluación (10%):"));

  const promedio = (teoria * 0.3) + (practica * 0.6) + (evaluacion * 0.1);

  alert(`Promedio final: ${promedio.toFixed(2)}\n${promedio >= 60 ? "Aprobado" : "Reprobado"}`);

  // Por ahora se guarda en módulo1 como ejemplo
  camper.notas.modulo1 = promedio;
}

export function trainerVerHorarioP(nombreProfesor) {
  const salonesDelProfesor = salones.filter(salon => salon.Profesor === nombreProfesor);

  if (salonesDelProfesor.length > 0) {
    let mensaje = ` Horario de ${nombreProfesor}:\n\n`;
    salonesDelProfesor.forEach(salon => {
      mensaje += `Grupo ${salon.grupo} - Horario: ${salon.Horario.join(" / ")}\n`;
    });
    alert(mensaje);
  } else {
    alert(` No se encontró horario para ${nombreProfesor}`);
  }
}

export function subMenuTrainer(nombre) {
  let opcion;
  do {
    opcion = prompt(
      "Bienvenido trainer ${nombre}\n 1. Agregar notas a clase\n2. Ver su horario\n3. Ver estudiantes\n 4. Salir"
    );

    switch (opcion) {
      case "1":
        trainerAgregarNotasp(nombre);
        break;
      case "2":
        trainerVerHorarioP(nombre);
        break;
      case "3":
        mostrarEstudiantesPorProfesor(nombre);
        break;
      case "4":
        break;
      default:
        alert("Opción inválida.");
    }
  } while (opcion !== "4");
}
