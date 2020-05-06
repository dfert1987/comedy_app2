const params = new URLSearchParams(window.location.search)



fetch("http://localhost:3000/headliners/")
.then(response => response.json())
.then(headliners => showHeadliners(headliners));

function showHeadliners(headliners) {
    console.log(headliners)
    headliners.forEach(headliner => {
        const allHeadlinersName = document.createElement('h2');
        const allHeadlinersImage = document.createElement('div');
        const allHeadlinerRating = document.createElement('p');
        allHeadlinerRating.innerText = `Length ${headliner.length}, Political ${headliner.political}, Controverisal ${headliner.controverisal}, Dirty ${headliner.dirty}, Opinionated ${headliner.opinionated}`
        allHeadlinersImage.innerHTML = `<img src="${headliner.image}">`
        allHeadlinersName.innerHTML = `<a href="openershow.html?id=${headliner.id}">${headliner.name}</a>`
        document.body.append(allHeadlinerRating, allHeadlinersImage, allHeadlinersName)
    })
}