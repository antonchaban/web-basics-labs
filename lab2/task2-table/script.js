document.addEventListener("DOMContentLoaded", function () {
    const table = document.getElementById("colorTable");
    const colorPicker = document.getElementById("colorPicker");

    for (let i = 1; i <= 6; i++) {
        const row = document.createElement("tr");
        for (let j = 1; j <= 6; j++) {
            const cell = document.createElement("td");
            cell.textContent = (i - 1) * 6 + j;
            cell.className = "cell";

            cell.addEventListener("mouseover", function () {
                cell.style.backgroundColor = getRandomColor();
            });

            cell.addEventListener("mouseout", function () {
                cell.style.backgroundColor = "white"; // Змінюємо колір на білий при відведенні миші
            });

            cell.addEventListener("click", function () {
                const selectedColor = colorPicker.value;
                cell.style.backgroundColor = selectedColor;
            });

            cell.addEventListener("dblclick", function () {
                const cells = table.getElementsByClassName("cell");
                const startIndex = Array.from(cells).indexOf(cell);
                const selectedColor = colorPicker.value;

                for (let k = startIndex; k < cells.length; k++) {
                    if (k % 6 === startIndex % 6) {
                        cells[k].style.backgroundColor = selectedColor;
                    }
                }
            });

            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
