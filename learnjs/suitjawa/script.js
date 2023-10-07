// Tentang game
alert("Selamat datang di permainan suit Jawa.");
// Buat perulangan game
let perulangan = true
while (perulangan){
// Buat masukan user
let user = prompt("Hello, masukan pilihan antara ORANG, SEMUT, dan GAJAH.");
// Buat masukan computer
let comp = Math.random()
if (comp < 0.33){
    comp = "orang";
} else if (comp > 0.33 && comp < 0.66) {
    comp = "semut";
} else {
    comp = "gajah";
}
// rules
let hasil = "";
if (user === comp){
    hasil += "Seri";
} else if ( user === "gajah"){
    // if (comp === "orang"){
    //     hasil += "Menang";
    // } else {
    //     hasil += "Kalah";
    // };
    hasil += (comp === "orang") ? "Menang" : "Kalah";
}  else if ( user === "semut"){
    hasil += (comp === "gajah") ? "Menang" : "Kalah";
} else if (user === "orang"){
    hasil += (comp === "semut") ? "Menang" : "Kalah";
} else {
    hasil += "Ngaco";
};

alert("Jawaban kamu " + user + " dan jawaban computer " + comp + "." +"\nJadi kamu " + hasil + ".")

perulangan = confirm ("Mau bermain lagi?")
}
alert("Terimakasih.")
