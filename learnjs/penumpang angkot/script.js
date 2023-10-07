let penumpang = ["abi",undefined,"misa","arif",undefined,"habi"]


let tambahPenumpang = function(namaPenumpang, penumpang){
    if (penumpang.length == 0){
        penumpang.push(namaPenumpang);
        return penumpang;
    } else { 
        for (let i = 0 ; i < penumpang.length ; i++) {
            if (penumpang[i] == undefined){
                if(penumpang.includes(namaPenumpang)){
                    console.log ( namaPenumpang + ',' + ' nama penumpang tersebut sudah ada.');
                return penumpang;
                }else {
                penumpang[i] = namaPenumpang;
                return penumpang;
                }
            } else if (penumpang[i] == namaPenumpang ){
                console.log ( namaPenumpang + ',' + ' nama penumpang tersebut sudah ada.');
                return penumpang;
            } else if (i == penumpang.length - 1) {
                penumpang.push(namaPenumpang);
                return penumpang;
            } 
        } 
    } 
}

let hapusPenumpang = function (namaPenumpang, penumpang) {
        if (penumpang.length == 0){
            console.log(namaPenumpang + ",nama penumpang tersebut tidak ada, karena saat ini angkot sedang kosong.");
            return penumpang;
        } else {
            for (let i = 0; i < penumpang.length; i++){
                if (penumpang[i] == namaPenumpang){
                    penumpang[i] = undefined
                    return penumpang;
                } else if ( i == penumpang.length - 1 ){
                    console.log("nama tersebut tidak ada.");
                    return penumpang;
                }
            }
        }
    }
