// Menggunakan JavaScript

// let pelanggan = {
//     nama: "Dwi Star Muda",
//     email: "id.reversal@gmail.com",
//     whatsapp: "628126463110"
// }

// console.log(JSON.stringify(pelanggan));

// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
//     if(xhr.readyState == 4 && xhr.status == 200){
//         let pelanggan = JSON.parse(this.responseText);
//         console.log(pelanggan);
//     }
// }

// xhr.open('GET', 'coba.json', true);
// xhr.send();

$.getJSON('coba.json', function(pelanggan) {
    console.log(pelanggan);
});