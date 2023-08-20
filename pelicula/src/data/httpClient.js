const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "d09c3d3affec3a957d27b31b783e9cd9"; // Reemplaza con tu clave de API válida

export async function get(path) {
  try {
    console.log("URL completa:", `${API_BASE_URL}${path}?api_key=${API_KEY}`);
    const response = await fetch(`${API_BASE_URL}${path}?api_key=${API_KEY}`, {
      headers: {
        "Content-type": "application/json;charset=utf-8",
      },
    });

    if (!response.ok) {
      throw new Error("Error en la solicitud. Código de estado: " + response.status);
    }

    return response.json();
  } catch (error) {
    console.error("Error en la solicitud:", error);
    throw error;
  }
}


