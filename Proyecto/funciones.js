// funciones.js

// Menú principal de ingreso
export function menuPrincipal() {
    return prompt(
        "Bienvenido al programa de Campuslands\n" +
        "¿Cómo desea ingresar?\n" +
        "1. Camper\n" +
        "2. Trainer\n" +
        "3. Coordinador"
    );
}

// Menú de opciones solo para camper
export function mostrarMenuCamper() {
    return prompt(
        "¿Qué desea hacer?\n" +
        "1. Inscribirse\n" +
        "2. Salir"
    );
}

export function inscribirCamper() {
    const id = prompt("Ingrese su número de identificación:");
    const nombre = prompt("Ingrese su nombre:");
    const apellido = prompt("Ingrese su apellido:");
    const direccion = prompt("Ingrese su dirección:");
    const acudiente = prompt("Ingrese el nombre de su acudiente:");
    const celular = prompt("Ingrese su número de celular:");
    const fijo = prompt("Ingrese su número de teléfono fijo:");

    alert();
}
