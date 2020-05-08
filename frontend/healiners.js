const params = new URLSearchParams(window.location.search)
// const table = document.getElementsByClassName('table')[0];
// console.log(table)

fetch("http://localhost:3000/headliners/")
.then(response => response.json())
.then(headliners => showHeadliners(headliners));

function showHeadliners(headliners) {
    console.log(headliners)
    headliners.forEach(headliner => {
       
        const card = document.createElement('div');
        card.className = "card";
        const allHeadlinersImage = document.createElement('div')
        const allHeadlinersName = document.createElement('h2');
        const allHeadlinerRating = document.createElement('p');
        allHeadlinersImage.innerHTML = `<img src="${headliner.image}">`
        allHeadlinersName.innerHTML = `<a href="openershow.html?id=${headliner.id}">${headliner.name}</a>`
        allHeadlinerRating.innerText = `Length ${headliner.length}, Political ${headliner.political}, Controversial ${headliner.controversial}, Dirty ${headliner.dirty}, Opinionated ${headliner.opinionated}`
        card.append(allHeadlinersImage, allHeadlinersName, allHeadlinerRating)
        document.body.append( card)
        allHeadlinersImage.setAttribute('class', 'pics');
    })
}