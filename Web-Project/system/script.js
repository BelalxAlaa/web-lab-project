let ticketNameInput = document.getElementById("ticketName");
let ticketPriceInput = document.getElementById("ticketPrice");
let ticketDescInput = document.getElementById("ticketDesc");
let ticketCategoryInput = document.getElementById("ticketCategory");

let ticketsContainer = [];

function clearForm() {
    ticketNameInput.value = "";
    ticketPriceInput.value = "";
    ticketCategoryInput.value = "";
    ticketDescInput.value = "";
}
function displayTickets() {

    let temp = ``;
    for (let i = 0; i < ticketsContainer.length; i++) {
        temp += `<tr>
        <td>${i}</td>
        <td>${ticketsContainer[i].name}</td>
        <td>${ticketsContainer[i].price}</td>
        <td>${ticketsContainer[i].category}</td>
        <td>${ticketsContainer[i].desc}</td>
        <td> <button class="btn btn-outline-warning">update</button></td>
        <td> <button onclick="deleteTickets(${i})" class="btn btn-outline-danger">delete</button></td>
    </tr>`;
    }
    document.getElementById("tableBody").innerHTML = temp;
}
function addTicket() {
    let ticket = {
        name: ticketNameInput.value,
        price: ticketPriceInput.value,
        category: ticketCategoryInput.value,
        desc: ticketDescInput.value
    }
    ticketsContainer.push(ticket);
    localStorage.setItem("ticketsList", JSON.stringify(ticketsContainer));
    clearForm();
    displayTickets();
}
function searchTickets(term) {
    let temp = ``;
    for (let i = 0; i < ticketsContainer.length; i++) {

        if (ticketsContainer[i].name.toLowerCase().includes(term.toLowerCase())) {
            temp += `<tr>
            <td>${i}</td>
            <td>${ticketsContainer[i].name}</td>
            <td>${ticketsContainer[i].price}</td>
            <td>${ticketsContainer[i].category}</td>
            <td>${ticketsContainer[i].desc}</td>
            <td> <button class="btn btn-outline-warning">update</button></td>
            <td> <button  onclick="deleteTickets(${i})" class="btn btn-outline-danger">delete</button></td>
        </tr>`;
        }
    }
    document.getElementById("tableBody").innerHTML = temp;
}

function deleteTickets(index) {
    ticketsContainer.splice(index, 1);
    displayTickets();
    localStorage.setItem("ticketsList", JSON.stringify(ticketsContainer));
}

