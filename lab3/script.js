const main = document.getElementById("main");

async function getRandomPerson() {
    try {
        const server = "https://randomuser.me/api";
        const response = await fetch(server, {
            method: "GET",
        });

        const responseResult = await response.json();
        return responseResult.results[0];
    } catch (error) {
        console.error("Error fetching random user:", error);
    }
}

async function add() {
    const person = await getRandomPerson();

    const temple = `
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${person.picture.medium}" alt="error">
        <div>
    <h5 class="card-title"><b>Name:</b><br>${person.name.title + " " + person.name.first + " " + person.name.last}</h5>
    <ul class="list-group list-group-flush">
        <li class="list-group-item"><b>City:</b><br>${person.location.city}</li>
        <li class="list-group-item"><b>Country:</b><br>${person.location.country}</li>
        <li class="list-group-item"><b>Postcode:</b><br>${person.location.postcode}</li>
    </ul>
        </div>
    </div>`;

    main.insertAdjacentHTML("afterbegin", temple);
}

function del() {
    main.innerHTML = "";
}

add();