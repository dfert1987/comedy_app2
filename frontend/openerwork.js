const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')


fetch(`http://localhost:3000/openers/${id}`)
    .then(response => response.json())
    .then(opener => displayHeader(opener))

    // fetch(`http://localhost:3000/openers/${id}`)
    // .then(response => response.json())
    // .then(open => getOpenApi(open))
  
    

    function displayHeader(opener) {
        const h2 = document.createElement('h2')
        h2.innerText = `Here's some stuff by ${opener.name}`
        document.body.append(h2)

    }