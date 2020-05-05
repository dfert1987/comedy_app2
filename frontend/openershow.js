const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')

fetch(`http://localhost:3000/headliners/${id}`)
    .then(response => response.json())
    .then(headliner => displayHeader(headliner))

function displayHeader(headliner) {
    const h2 = doucment.createElement('h2')
    h2.innerText = headliner.name
}
