const n = 8
window.onload = () => {
    console.log("hello world");
    document.getElementById("table").innerHTML = (`<table>${
        Array.from({length: n}, (_, i) => `
            <tr>${Array.from({length: n}, (_, j) => `
                <td>${i} - ${j}</td>
            `).join("")}</tr>
        `).join("")
    }</table>`)
}

f = () => {
    alert("Hello World!");
}