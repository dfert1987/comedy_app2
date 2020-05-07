const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')
const input = document.querySelector("#headliner-id")
input.value = id



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
       
    
    

    

    // openers.forEach(opener => {
    //     if openersHeadliner.id == id
    //     const openerName = document.createElement('li')
    //     openerName.innerText = opener.name
    //     document.ul.append(li)
