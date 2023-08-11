const dataNo = [];

const dataNip = [];
const dataNama = [];
const dataStatus = [];
const dataJumlahAnak = [];
const dataGaji = [];

const dataBonus = [];
const dataTunjanganAnak = [];
const dataTunjanganIstri = [];
const dataGajiBersih = [];

const dataMasaKerja = [];
const dataSanksi = [];

let poin = [];
let poinSanksi = [];
let bonus = [];
let dataBonusH = [];


document.forms['biodata'].onsubmit = function (event){
    event.preventDefault();

    // const no = document.forms['biodata']['nip'].value;
    // dataNip.push(nip);

    const nip = document.forms['biodata']['nip'].value;
    dataNip.push(nip);

    const nama = document.forms['biodata']['nama'].value;
    dataNama.push(nama);

    const status = document.forms['biodata']['status'].value;
    dataStatus.push(status);

    const anak = document.forms['biodata']['jumlahAnak'].value;
    dataJumlahAnak.push(anak);

    const gaji = document.forms['biodata']['gaji'].value;
    dataGaji.push(gaji);

    // ini tabel kedua
    const masaKerja = document.forms['biodata']['masaKerja'].value;
    dataMasaKerja.push(masaKerja);

    const sanksi = document.forms['biodata']['sanksi'].value;
    dataSanksi.push(sanksi);

    console.info(dataNip);
    console.info(dataNama);
    console.info(dataStatus);
    console.info(dataJumlahAnak);
    console.info(dataGaji);
    console.info(dataMasaKerja);
    console.info(dataSanksi);

    dataNo.push(dataNip);


function hitungBonusDirektur (){

    for (let i = 0; i < dataNo.length; i++){
        // console.info(dataMasaKerja[i]);

        const tr = document.createElement("tr");
        const no = document.createElement("td");
        no.textContent = i++;
        tr.appendChild(no);


        if (dataMasaKerja[i] === "kurang1tahun"){
            poin[i] = 0.8;
        } else if (dataMasaKerja[i] === "satuEmpatTahun"){
            poin[i] = 1;
        } else if (dataMasaKerja[i] === "limaSembilanTahun"){
            poin[i] = 1.2;
        } else if (dataMasaKerja[i] === "10Tahun"){
            poin[i] = 1.4;
        } else {}
    
        if (dataSanksi[i] === "kosong"){
            poinSanksi[i] = 1;
        } else if (dataSanksi[i] === "spSatu"){
            poinSanksi[i] = 0.9;
        } else if (dataSanksi[i] === "spDua"){
            poinSanksi[i] = 0.8;
        } else if (dataSanksi[i] === "spTiga"){
            poinSanksi[i] = 0.7;
        } else if (dataSanksi[i] === "skorsing"){
            poinSanksi[i] = 0.6;
        } else {}

    // console.info(poin[i]);
    // console.info(poinSanksi[i]);
    // console.info(dataGaji[i]);

    bonus[i] = (poin[i]*1.2*1*dataGaji[i]) * poinSanksi[i];
    dataBonusH.push(bonus[i]);

    console.info(dataBonusH);
    

    }
}

    hitungBonusDirektur();

}