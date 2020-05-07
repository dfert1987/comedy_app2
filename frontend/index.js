let openersURL;

const queryParams = new URLSearchParams(window.location.search);
const search = queryParams.get("search");
if (search) {
    openersURL = `http://localhost:3000/openers?search=${search}`
} else {
    openersURL = "http://localhost:3000/openers"
}


fetch(openersURL)
.then(response => response.json())
.then(openers => showOpeners(openers));


function showOpeners(openers) {
    openers.forEach(opener => {
        const allOpenersName = document.createElement('h4');
        allOpeners = openers
        allOpenersName.innerHTML = `<a href="openerwork.html?id=${opener.id}">${opener.name}</a>`
        document.body.append(allOpenersName)
    })
}