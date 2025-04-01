/**
 * @param { { errorMessage: string } } res
 */
export function falloEnLaConexionMqtt(res) {
    const mensaje = "Fallo en conexión:" + res.errorMessage
    console.error(mensaje)
    alert(mensaje)
}