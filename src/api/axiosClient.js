  const authEndpoint = "https://accounts.spotify.com/authorize?";
  const clientId = "a4fee2070be142cea7b771c86e30c034";
  const redirectUri = "http://localhost:3000";
  const scopes = ["user-library-read", "playlist-read-private"];

  export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;