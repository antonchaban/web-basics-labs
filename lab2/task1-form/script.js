document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let pibInput = document.getElementById("pib");
    let variantInput = document.getElementById("variant");
    let groupInput = document.getElementById("group");
    let phoneInput = document.getElementById("phone");
    let idCardInput = document.getElementById("idCard");
    let resultDiv = document.getElementById("result");



    let pibPattern = /^[А-ЯІЇЄҐA-Z][а-яіїєґ'A-Za-z]+ [А-ЯІЇЄҐA-Z]\.[А-ЯІЇЄҐA-Z]\.$/;
    let variantPattern = /^\d{1,2}$/;
    let groupPattern = /^[А-ЯІЇЄҐA-Z][А-ЯІЇЄҐA-Z]-\d{2}$/;
    let phonePattern = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
    let idCardPattern = /^[А-ЯІЇЄҐA-Z][А-ЯІЇЄҐA-Z] №\d{6}$/;

    let isValid = true;

    if (!pibPattern.test(pibInput.value)) {
        pibInput.classList.add("error");
        isValid = false;
    } else {
        pibInput.classList.remove("error");
    }

    if (!variantPattern.test(variantInput.value)) {
        variantInput.classList.add("error");
        isValid = false;
    } else {
        variantInput.classList.remove("error");
    }

    if (!groupPattern.test(groupInput.value)) {
        groupInput.classList.add("error");
        isValid = false;
    } else {
        groupInput.classList.remove("error");
    }

    if (!phonePattern.test(phoneInput.value)) {
        phoneInput.classList.add("error");
        isValid = false;
    } else {
        phoneInput.classList.remove("error");
    }

    if (!idCardPattern.test(idCardInput.value)) {
        idCardInput.classList.add("error");
        isValid = false;
    } else {
        idCardInput.classList.remove("error");
    }

    // Виведення результату
    if (isValid) {
        resultDiv.innerHTML = "Введена інформація валідна:<br>" +
            "ПІБ: " + pibInput.value + "<br>" +
            "Варіант: " + variantInput.value + "<br>" +
            "Група: " + groupInput.value + "<br>" +
            "Телефон: " + phoneInput.value + "<br>" +
            "ID-card: " + idCardInput.value;
    } else {
        resultDiv.innerHTML = "Форма містить помилки. Виправте виділені поля.";
    }
});
