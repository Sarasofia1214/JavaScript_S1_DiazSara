import { salones } from "./salones.js";
import { campers } from "./info_camper.js";
// Mostrar camper
export function mostrarCampers(nombreTrainer) {
  const grupos = [];
  for (const salon of salones) {
    if (salon.Profesor == nombreTrainer) {
      grupos.push(salon.grupo);
 } }

  const estudiantes = campers.filter(camper => grupos.includes(camper.grupo));

  if (estudiantes.length > 0) {
    let mensaje = `Estudiantes del trainer ${nombreTrainer}:\n`;
    estudiantes.forEach(camper => {
      mensaje += ` ${camper.Nombre} ${camper.Apellido} - Grupo: ${camper.grupo}\n` });
    alert(mensaje);
  } else {
    alert(" No se encontraron estudiantes asignados al trainer" + nombreTrainer);
  }
}
// Asignar notas
export function trainerAgregarNotasp(nombreTrainer)  {
  const idCamper = Number(prompt("Ingrese el ID del camper a calificar:"));
  const camper = campers.find(campert => campert.ID === idCamper);

  if (!camper) {
    alert("Camper no encontrado.");
    return;
  }

  const teoria = Number(prompt("Ingrese la nota de la prueba teórica (30%):"));
  const practica = Number(prompt("Ingrese la nota de la prueba práctica (60%):"));
  const evaluacion = Number(prompt("Ingrese la nota de la evaluación (10%):"));

  const promedio = (teoria * 0.3) + (practica * 0.6) + (evaluacion * 0.1);

  alert(`Promedio final: ${promedio >= 60 ? "Aprobado" : "Reprobado"}`);
}

export function trainerVerHorarioP(nombreTrainer) {
  const salonesDelProfesor = salones.filter(salon => salon.Profesor == nombreTrainer);

  if (salonesDelProfesor.length > 0) {
    let mensaje = ` Horario de ${nombreTrainer}:\n`;
    salonesDelProfesor.forEach(salon => {
      mensaje += `Grupo ${salon.grupo} - Horario: ${salon.Horario}\n`});
    alert(mensaje);
  } else {
    alert(` No hay horario para ${nombreTrainer}`);
  }
}

export function subMenuTrainer(nombre) {
  let opcion;
  do {
    opcion = prompt(
      `Bienvenido trainer ${nombre}\n 1. Agregar notas a clase\n2. Ver su horario\n3. Ver estudiantes\n 4. Salir`);

    switch (opcion) {
      case "1":
        trainerAgregarNotasp(nombre);
        break;
      case "2":
        trainerVerHorarioP(nombre);
        break;
      case "3":
        mostrarCampers(nombre);
        break;
      case "4":
        break;
      default:
        alert("Opción inválida.");
    }
  } while (opcion !== "4");
}
