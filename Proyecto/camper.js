export function inscribirCamper(lista) {
  const nuevoCamper = {
    ID: parseInt(prompt("Ingrese su número de identificación:")),
    Nombre: prompt("Ingrese su(s) nombre(s):"),
    Apellido: prompt("Digite sus apellidos:"),
    Direccion: prompt("Ingrese su dirección:"),
    Acudiente: prompt("Ingrese el nombre de su acudiente:"),
    "Numero de celular": parseInt(prompt("Ingrese su número de celular:")),
    "Numero de telefono fijo": parseInt(prompt("Ingrese su número de teléfono fijo:")),
    Estado: {
      "En proceso": false,
      Inscrito: true,
      Aprobado: false,
      Rechazado: false,
      Cursando: false,
      Graduado: false,
      Expulsado: false,
      Retirado: false,
    },
    Riesgo: false,
    grupo: "",
    notas: {
      Pruebatéorica: 0,
      PruebaPráctica: 0,
      Evaluaciones: 0, 
    }
  };

  lista.push(nuevoCamper);
  alert("El camper ha sido inscrito correctamente.");
}

export function mostrarPerfilCamper(lista) {
  const idBuscado = parseInt(prompt("Ingrese su número de documento:"));
  const camper = lista.find(c => c.ID == idBuscado);

  if (camper) {
    const estadoActual = Object.entries(camper.Estado)
      .filter(([_, activo]) => activo)
      .map(([estado]) => estado)
      .join(", ");

    alert(
      ` Perfil del Camper\n\n` +
      `Nombre: ${camper.Nombre} ${camper.Apellido}\n` +
      `Dirección: ${camper.Direccion}\n` +
      `Acudiente: ${camper.Acudiente}\n` +
      `Celular: ${camper["Numero de celular"]}\n` +
      `Teléfono Fijo: ${camper["Numero de telefono fijo"]}\n` +
      `Estado: ${estadoActual || "Sin estado definido"}\n` +
      `Riesgo: ${camper.Riesgo ? "Sí" : "No"}\n` +
      `Grupo: ${camper.grupo || "Sin grupo"}\n\n` +
      `Notas:\n` +
      `Prueba téorica: ${camper.notas.Pruebatéorica}\n` +
      `Prueba Práctica: ${camper.notas.PruebaPráctica}\n` +
      `Evaluaciones: ${camper.notas.Evaluaciones}` 

    );
  } else {
    alert("No se encontró ningún camper con ese número de documento.");
  }
}

export function salirCampus(lista) {
  const id = parseInt(prompt("Ingrese el número de documento del camper que desea sacar del campus:"));
  const index = lista.findIndex(camper => camper.ID == id);

  if (index !== -1) {
    const nombre = lista[index].Nombre;
    lista.splice(index, 1);
    alert(` El camper ${nombre} ha salido del campus.`);
  } else {
    alert("No hay registro con ese numero de documento.");
  }
}
