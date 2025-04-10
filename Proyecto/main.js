import { campers } from "./info_camper.js";
import { inscribirCamper, mostrarPerfilCamper, salirCampus } from "./camper.js";
import { subMenuTrainer } from "./trainer.js"; // ✅ Importación corregida

function menuPrincipal() {
  const opcion = prompt("Bienvenido al programa de Campuslands\n1. Camper\n2. Trainer\n3. Coordinador");

  switch (opcion) {
    case "1":
      menuCamper();
      break;
    case "2":
      menuTrainer();
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

export function menuTrainer() {
  let opcion;
  do {
    opcion = prompt(
      "Bienvenido Trainer\n" +
      "1. Pedro Gomez\n" +
      "2. Miguel Rodriguez\n" +
      "3. Juan Nariño\n" +
      "4. Santiago Melo\n" +
      "5. Carlos Rueda\n" +
      "6. Antonio Vega\n" +
      "7. Volver al menú principal"
    );

    switch (opcion) {
      case "1":
        subMenuTrainer("Pedro Gomez");
        break;
      case "2":
        subMenuTrainer("Miguel Rodriguez");
        break;
      case "3":
        subMenuTrainer("Juan Nariño");
        break;
      case "4":
        subMenuTrainer("Santiago Melo");
        break;
      case "5":
        subMenuTrainer("Carlos Rueda");
        break;
      case "6":
        subMenuTrainer("Antonio Vega");
        break;
      case "7":
        alert("↩️ Volviendo al menú principal...");
        break;
      default:
        alert("❌ Opción inválida.");
    }
  } while (opcion !== "7");
}

menuPrincipal();
