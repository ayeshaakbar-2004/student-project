// Sample database data (jo database se nikal kar aaya ho)
const databaseData = [
    { id: 1, name: "Ali", role: "Student" },
    { id: 2, name: "Ayesha", role: "Developer" },
    { id: 3, name: "Ahmed", role: "Admin" }
];

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("clickBtn");
    const message = document.getElementById("message");

    button.addEventListener("click", () => {
        // Database data ko browser par reflect karna
        let output = "Database Records Found:<br>";
        databaseData.forEach(user => {
            output += `- Name: ${user.name} (${user.role})<br>`;
        });
        
        message.innerHTML = output;
    });
});
