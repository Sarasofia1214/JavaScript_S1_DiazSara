// Inscribir al camper
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
      "Prueba téorica": 0,
      "Prueba Práctica": 0,
      Evaluaciones: 0, }};

  lista.push(nuevoCamper);
  alert("El camper ha sido inscrito");
}
// Mostrar perfil
export function mostrarPerfilCamper(lista) {
  const idBuscado = parseInt(prompt("Ingrese su número de documento:"));
  const camper = lista.find(camper => camper.ID == idBuscado);

  if (camper) {
     const estadoActual = Object.keys(camper.Estado)
    .filter(clave => camper.Estado[clave]);

    alert(
      `Perfil del Camper\n` +
      `Nombre: ${camper.Nombre} ${camper.Apellido}\n` +
      `Dirección: ${camper.Direccion}\n` +
      `Acudiente: ${camper.Acudiente}\n` +
      `Celular: ${camper["Numero de celular"]}\n` +
      `Teléfono Fijo: ${camper["Numero de telefono fijo"]}\n` +
      `Estado: ${estadoActual || "Indefinido"}\n` +
      `Riesgo: ${camper.Riesgo ? "Sí" : "No"}\n` +
      `Grupo: ${camper.grupo || "Sin grupo"}\n` +
      `Notas:\n` +
      `Prueba téorica: ${camper.notas["Prueba téorica"]}\n` +
      `Prueba Práctica: ${camper.notas["Prueba Práctica"]}\n` +
      `Evaluaciones: ${camper.notas.Evaluaciones}`
    );
  } else {
    alert("No se encontró ningún camper");
  }
}
// Retirarse de campus
export function salirCampus(lista) {
  const id = parseInt(prompt("Ingrese el número de documento del camper que desea sacar del campus:"));
  const camper = lista.find(camperd => camperd.ID == id);

  if (camper) {
    camper.Estado = {
      "En proceso": false,
      Inscrito: false,
      Aprobado: false,
      Cursando: false,
      Graduado: false,
      Expulsado: false,
      Retirado: true,
      Rechazado: false};
    alert(`El camper ${camper.Nombre} ${camper.Apellido} ha sido retirado.`);
  } else {
    alert("No hay registro del camper.");
  }
}