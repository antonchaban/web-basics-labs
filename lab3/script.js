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
    <div class="card">
        <img src="${person.picture.medium}" alt="error">
        <div>
            <p><b>Name:</b><br>${person.name.title + " " + person.name.first + " " + person.name.last}</p>
            <p><b>City:</b><br>${person.location.city}</p>
            <p><b>Country:</b><br>${person.location.country}</p>
            <p><b>Postcode:</b><br>${person.location.postcode}</p>
            <hr>
        </div>
    </div>`;

    main.insertAdjacentHTML("afterbegin", temple);
}

function del() {
    main.innerHTML = "";
}

add();