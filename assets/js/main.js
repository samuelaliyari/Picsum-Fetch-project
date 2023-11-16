fetch('https://picsum.photos/v2/list')
    .then(response => {
        console.log(response)
        console.log(response.status)
            if (!response.ok) {
            throw new Error(`Something went wrong! Error-Code: ${response.status}`);
            }
        return response.json();
    })
    .then(data => {
        console.log(data);
        const gallery = document.createElement('section');
        const headline = document.createElement('h1');
        headline.textContent = "Picsum Fetch";
        document.body.prepend( headline, gallery)
        data.forEach(figure => {
            const box = document.createElement('figure');
            const image = document.createElement('img');
            const caption = document.createElement('figcaption');
            const moreBtn = document.createElement('button')
            gallery.append(box);
            image.setAttribute('src', `${figure.download_url}?grayscale`);
            caption.textContent = figure.author;
            moreBtn.textContent = "See more"
            moreBtn.addEventListener("click", () => window.open(figure.url))
            box.append(image, caption, moreBtn)

        });
    })
    .catch(error => console.log(error))



