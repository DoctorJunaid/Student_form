let count = 0;
let allUser = [];

const form = document.getElementById('registration-form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    let obj = {
        id: count,
        firstName: e.target['first-name'].value,
        lastName: e.target['last-name'].value,
        fatherName: e.target['father-name'].value,
        age: e.target.age.value,
        gender: e.target.gender.value,
        email: e.target.email.value,
        contact: '+92' + e.target.contact.value,
        city: e.target.city.value,
        address: e.target.address.value
    };
    allUser.push(obj);
    count++;
    updateTable();
    form.reset();
});




const tableBody = document.getElementById('user-table-body');

function updateTable() {
    tableBody.innerHTML = "";

    allUser.forEach(user => {
        const row = document.createElement('tr');
        row.className = "hover:bg-indigo-50 transition-colors";

        row.innerHTML = `
            <td class="px-4 py-3">${user.id}</td>
            <td class="px-4 py-3">${user.firstName}</td>
            <td class="px-4 py-3">${user.lastName}</td>
            <td class="px-4 py-3">${user.fatherName}</td>
            <td class="px-4 py-3">${user.age}</td>
            <td class="px-4 py-3">${user.gender}</td>
            <td class="px-4 py-3">${user.email}</td>
            <td class="px-4 py-3">${user.contact}</td>
            <td class="px-4 py-3">${user.city}</td>
            <td class="px-4 py-3">${user.address}</td>
        `;

        tableBody.appendChild(row);
    });

}




