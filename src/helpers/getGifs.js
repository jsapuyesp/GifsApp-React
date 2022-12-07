const apiKey = "Yz9XwOzhLKjJGpB7rcpaGLI07Z4Td4Tw";
const urlSite = "https://api.giphy.com/v1/gifs";
export const getGifs = async (category) => {
  const url = `${urlSite}/search?api_key=${apiKey}&q=${category}&limit=10`;
  const resp = await fetch(url);

  const { data } = await resp.json();

  const result = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return result;
};