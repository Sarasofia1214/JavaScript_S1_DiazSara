import { campers } from "./info_camper.js";
import { inscribirCamper, mostrarPerfilCamper, salirCampus } from "./camper.js";
import { subMenuTrainer } from "./trainer.js"; 
import { menuCoordinador } from "./coordinador.js";  
// CRUD principal 
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
      menuCoordinador();  
      break;
    default:
      alert("Opción incorrecta");
  }
}
// CRUD camper 
function menuCamper() {
  let opcion2;
// ciclo do-while (correr el código hasta que se cumpla la condición)
  do {
    opcion2 = prompt(
      "Ingrese el número de la opción:\n 1. Ingresar al perfil\n 2. Inscribirse\n3. Salir del campus\n 4. Salir"
    );

    switch (opcion2) {
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
        alert("Se ha cerrado sesión");
        break;
      default:
        alert("Opción icorrecta");
    }
  } while (opcion2 !=="4");// la condición es que el usuario cierre sesión
}
// CRUD trainer
function menuTrainer() {
  let opcion;
  do {
    opcion = prompt(
      "Bienvenido Trainer\n1. Pedro Gomez\n2. Miguel Rodriguez\n3. Juan Nariño\n4. Santiago Melo\n5. Carlos Rueda\n6. Antonio Vega\n7. Volver al menú principal" );

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
        break;
      default:
        alert("Opción inválida.");
    }
  } while (opcion !== "7");
}

menuPrincipal();
