// main.js
import { campers } from './info_camper.js';

function menuPrincipal() {
  const opcion = prompt(`Bienvenido al programa de Campuslands\n¿Cómo desea ingresar?\n1. Camper\n2. Trainer\n3. Coordinador`);

  switch (opcion) {
    case "1":
      menuCamper();
      break;
    case "2":
      alert("Función de Trainer en desarrollo.");
      break;
    case "3":
      alert("Función de Coordinador en desarrollo.");
      break;
    default:
      alert("Opción inválida.");
  }
}

// Menú de Camper
function menuCamper() {
  const opcion = prompt(`Ingresa el numero de la opcion a escoger\n1. Inscripción\n2. Ingresar al perfil\n3. Salir del campus\n4. Salir del programa`);

  switch (opcion) {
    case "1":
      alert("Función de inscripción aún no disponible.");
      break;
    case "2":
      ingresarPerfil();
      break;
    case "3":
      salirCampus();
      break;
    case "4":
      alert("¡Hasta pronto!");
      break;
    default:
      alert("Opción inválida.");
  }
}

// Buscar e ingresar al perfil del camper
function ingresarPerfil() {
  const documento = prompt("Ingrese su número de documento:");
  const camper = campers.find(c => c.ID == documento || c.cedula == documento);

  if (camper) {
    let info = `
📋 Información del Camper:
- Nombre: ${camper.nombre || camper.Nombre}
- Apellido: ${camper.apellido || camper.Apellido}
- Dirección: ${camper.direccion || camper.Direccion}
- Acudiente: ${camper.acudiente || camper.Acudiente}
- Celular: ${camper.telefono || camper["Numero de celular"]}
- Teléfono fijo: ${camper.telefonoFijo || camper["Numero de telefono fijo"]}
- Grupo: ${camper.grupo || ""}
- Riesgo: ${camper.riesgo ? "Sí" : "No"}

🧾 Estado:
${Object.entries(camper.estado || camper.Estado).map(([clave, valor]) => `  - ${clave}: ${valor ? "✅" : "❌"}`).join("\n")}

📚 Notas:
${Object.entries(camper.notas).map(([modulo, nota]) => `  - ${modulo}: ${nota}`).join("\n")}
`;
    alert(info);
  } else {
    alert("❌ Documento no encontrado.");
  }
}

// Eliminar temporalmente al camper de la lista
function salirCampus() {
  const documento = prompt("Ingrese su número de documento:");
  const index = campers.findIndex(c => c.ID == documento || c.cedula == documento);

  if (index !== -1) {
    campers.splice(index, 1); // Elimina 1 elemento desde esa posición
    alert("👋 Has salido del campus. Tu perfil ha sido eliminado temporalmente.");
  } else {
    alert("❌ Documento no encontrado.");
  }
}

// Ejecutar programa
menuPrincipal();