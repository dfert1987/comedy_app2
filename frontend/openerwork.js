const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')


fetch(`http://localhost:3000/openers/${id}`)
    .then(response => response.json())
    .then(opener => displayHeader(opener))
    .then(getOpenerApi)
    
  
    
    function getOpenerApi(opener) {
        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=artist:"${opener.name}"`)
        .then(response => response.json())
        .then(artist => {
            console.log(artist)
            getOpenerPic(artist.data[0].picture_medium)
            getURL(artist.data[0].link)
                    displayOpenerStats(opener)

        })
    }

    function getURL(opener) {
        const link = document.createElement('h2')
        link.innerText = "artist page"
        link.innerHTML = `<a href="${opener}">Check out Page</a>`
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

    function displayOpenerStats(opener) {
        const header = document.createElement('h3')
        const subHeader = document.createElement('p')
        const stats = document.createElement('h4')
        header.innerText = "Comedy Stats"
        subHeader.innerText = "On a scale of 1-5"
        stats.innerText = `Length: ${opener.length}, Political leaning (lower is more liberal): ${opener.political}, Controversial: ${opener.controversial}, Dirty: ${opener.dirty}, Opinionated: ${opener.opinionated}`
        document.body.append(header, subHeader, stats)
        

        
    }
    