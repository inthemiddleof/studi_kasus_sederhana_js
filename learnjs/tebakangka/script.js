// tentang program
alert("Selamat datang di permainan tebak angka.");
// buat perulangan program
let again = true;
while (again){
// buat angka random 1-10 untuk computer
let comp = Math.floor(Math.random() * 10 + 1);
// meletakan variable chance di luar perulangan for agar dapat dipanggil diluar perulangan for
let chance = 3
// buat perulangan kondisi
for (chance; chance > 0 ; chance--){
    let hasil = "";
    let user = parseInt(prompt("Masukan angka 1-10!" + "\nKamu memiliki " + chance + " kesempatan."));
    if (user > 10){
        alert("Anda memasukan angka yang salah atau melibihi ketentuan.");
        break;
    } else if( user === comp){
        hasil +=  "Benar";
        alert ("Selamat, jawaban kamu " + hasil + ".");
        break;
    } else if (user > comp){
        hasil +=  "Terlalu Tinggi";
        alert ("jawaban kamu " + hasil + ".");
    } else if ( user < comp){
        hasil +=  "Terlalu Rendah";
        alert ("jawaban kamu " + hasil + ".");
    } else {
        hasil += "Bukan angka"
        alert ("jawaban kamu " + hasil + ".");
    }
}

if (chance === 0){alert("Kesempatan anda habis." + "\nJawabannya adalah " + comp)}

again = confirm("Mau bermain lagi?")
}
alert("Terimakasih.");

