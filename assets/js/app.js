const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;

// Seleccionar elementos HTML correctamente por su ID
const nameElement = document.querySelector('#name');
const blogElement = document.querySelector('#blog');
const locationElement = document.querySelector('#location'); 

async function displayUser(username) {

    try {
        const response = await fetch(`${usersEndpoint}/${username}`);
        if (!response.ok) { // Verifica si la respuesta HTTP fue exitosa
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json(); // Parseamos la respuesta a JSON

        console.log(data); // Ahora 'data' contiene los datos del usuario

        // Actualizamos el contenido de los elementos HTML con los datos obtenidos
        if (nameElement) {
            nameElement.textContent = data.login || 'No disponible'; //para probarlo utilice mi usuario 
        }
        if (blogElement) {
            blogElement.textContent = data.url || 'No disponible'; //muestra el url del repositorio
        }
        if (locationElement) {
            locationElement.textContent = data.avatar_url || 'No disponible'; //muestra el url de la imagen
        }
    } catch (error) {
        // Si hay un error en el fetch o en el parseo, lo capturamos aquí
        handleError(error);
    }
}

// Llamamos a la función para mostrar los datos del usuario
displayUser('GREGORIO971117'); //aqui mande a traer mi usuario de github