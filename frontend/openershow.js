const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')
const input = document.querySelector("#headliner-id")
input.value = id

// const lengthSelect = document.querySelector("select[name=length")
// const poliSelect = document.querySelector("select[name=political")
// const controSelect = document.querySelector("select[name=controversial")
// const dirtySelect = document.querySelector("select[name=dirty")
// const opinionSelect = document.querySelector("select[name=opinionated")
// const ratings = [1, 2, 3, 4, 5]

fetch(`http://localhost:3000/headliners/${id}`)
    .then(response => response.json())
    .then(headliner => displayHeader(headliner))

fetch("http://localhost:3000/openers")
    .then(response => response.json())
    .then(openers => getOpeners(openers))


function displayHeader(headliner) {
    const h2 = document.createElement('h2')
    h2.innerText = `If you like ${headliner.name}, you might also like ...`
    document.body.append(h2)
    return opener
}

function getOpeners(openers) {
    openers.forEach(opener => {
       if (opener.headliner_id == id)  { 
       const showOpener = document.createElement('h3')
       showOpener.innerHTML= `<a href="openerwork.html?id=${opener.id}">${opener.name}</a>`
       console.log(opener.id)
       document.body.append(showOpener)
       }
    })
}
       
    
    

    

    