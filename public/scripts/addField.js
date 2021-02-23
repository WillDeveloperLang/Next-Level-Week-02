// Search for the button / Procurar o botão 
document.querySelector("#add-time")
    .addEventListener("click", cloneField)
    // When you click the button/ Quando clicar no botão

// Perfom an action / Executar uma ação
function cloneField() {
    // Duplicate the fields. Which fields? / Duplicar os campos. Quais campos?
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

    // Take the fields. Which fields? / Pegar os campos. Quais campos?
    const fields = newFieldContainer.querySelectorAll("input")

    // For each field, to clean / Para cada campo, limpar.
    fields.forEach(function(field) {
        // Catch the field of the moment and clean him / Pegar o campo do momento e limpa ele.
        field.value = ""
    })

    // Place on the page. Where? / Colocar na página. Onde?
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}