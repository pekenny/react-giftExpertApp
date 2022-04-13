export const getGif = async (category) => {

    const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=F30VuaeDTcyuT4Y26cDvUyLT0qXz0qlH`;

    const resp = await fetch(url);

    const { data } = await resp.json();

    const gifts = data.map(img => {
        return {

            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

   return gifts;
}

