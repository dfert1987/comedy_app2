const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')


fetch(`http://localhost:3000/openers/${id}`)
    .then(response => response.json())
    .then(opener => displayHeader(opener))
    .then(getOpenerApi)
    
  
    
    function getOpenerApi(opener) {
        console.log(opener)
        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=artist:"${opener.name}"`)
        .then(response => response.json())
        .then(artist => {
            console.log(artist)
            getOpenerPic(artist.data[0].picture_medium)
            getURL(artist.data[0].link)

        })
    }

    function getURL(opener) {
        const link = document.createElement('h2')
        link.innerText = "artist page"
        link.innerHTML = `<a href="${opener}">Check Out Comedian Page</a>`
        document.body.append(link)
    }


    function getOpenerPic(url) {
        const image = document.createElement('img')
        image.src = url
        document.body.append(image)

    }

    function displayHeader(opener) {
        const h2 = document.createElement('h2')
        h2.innerText = `Here's some stuff by ${opener.name}`
        document.body.append(h2)
        return opener
    }