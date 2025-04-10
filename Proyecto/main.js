import { campers } from "./info_camper.js";
import { inscribirCamper, mostrarPerfilCamper, salirCampus } from "./camper.js";

function menuPrincipal() {
  const opcion = prompt("Bienvenido al programa de Campuslands\n1. Camper\n2. Trainer\n3. Coordinador");

  switch (opcion) {
    case "1":
      menuCamper();
      break;
    case "2":
      alert("⚠️ Función de Trainer en desarrollo.");
      break;
    case "3":
      alert("⚠️ Función de Coordinador en desarrollo.");
      break;
    default:
      alert("Opción inválida.");
  }
}

function menuCamper() {
  let opcion;
  do {
    opcion = prompt(
      "Ingrese el número de la opción :\n" +
      "1. Ingresar al perfil\n" +
      "2. Inscribirse\n" +
      "3. Salir del campus\n" +
      "4. Salir"
    );

    switch (opcion) {
      case "1":
        mostrarPerfilCamper(campers);
        break;
      case "2":
        inscribirCamper(campers);
        break;
      case "3":
        salirCampus(campers);
        break;
      case "4":
        alert("Ha cerrado sesión");
        break;
      default:
        alert("Opción inválida.");
    }
  } while (opcion !== "4");
}

menuPrincipal();
