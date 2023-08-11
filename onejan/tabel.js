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
let table = document.getElementById("tabelBody");



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
    //display();

    function clearPreArray(){

    }


function hitungBonusDirektur (){

    for (let i = 0; i < dataNo.length; i++){
        // console.info(dataMasaKerja[i]);

        // const no1 = dataNo[i];
        // const nip1 = dataNip[i];
        // const nama1 = dataNama[i];
        // const status1 = dataStatus[i];
        // const jumlahAnak1 = dataJumlahAnak[i];
        // const gaji1 = dataGaji[i];
        // const bonus1 = dataBonus[i];
        // const tunjanganAnak1 = dataTunjanganAnak[i];
        // const tunjanganIstri1 = dataTunjanganIstri[i];
        // const gajiBersih1 = dataGajiBersih[i];
        // const masaKerja1 = dataMasaKerja[i];
        // const sanksi1 = dataSanksi[i];

        // //1 deklarasi & 2 create

        // const tr = document.createElement("tr");
        // const no2 = document.createElement("td");
        // no2.textContent = i++;
        // tr.appendChild(no1);

        // const nip2 = document.createElement("td");
        // nip2.textContent = nip1;
        // tr.appendChild(nip2);

        // const nama2 = document.createElement("td");
        // nama2.textContent = nama1;
        // tr.appendChild(nama2);

        // const status2 = document.createElement("td");
        // status2.textContent = status1;
        // tr.appendChild(status2);

        // const jumlahAnak2 = document.createElement("td");
        // jumlahAnak2.textContent = jumlahAnak1;
        // tr.appendChild(jumlahAnak2);

        // const gaji2 = document.createElement("td");
        // gaji2.textContent = gaji1;
        // tr.appendChild(gaji2);

        // const bonus2 = document.createElement("td");
        // bonus2.textContent = bonus1;
        // tr.appendChild(bonus2);

        // const tunjanganAnak2 = document.createElement("td");
        // tunjanganAnak2.textContent = tunjanganAnak1;
        // tr.appendChild(tunjanganAnak2);

        // const tunjanganIstri2 = document.createElement("td");
        // tunjanganIstri2.textContent = tunjanganIstri1;
        // tr.appendChild(tunjanganIstri2);

        // const gajiBersih2 = document.createElement("td");
        // gajiBersih2.textContent = gajiBersih1;
        // tr.appendChild(gajiBersih2);

        // const masaKerja2 = document.createElement("td");
        // masaKerja2.textContent = masaKerja1;
        // tr.appendChild(masaKerja2);

        // const sanksi2 = document.createElement("td");
        // sanksi2.textContent = sanksi1;
        // tr.appendChild(sanksi2);

        // const hasilInput = document.getElementById("hasilInput");
        // hasilInput.appendChild(tr);


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
function generateTable(table) {
    for (let i = 0; i < dataNo.length; i++) {
      let row = table.insertRow([i]);
    
        let cell = row.insertCell();

        let text1 = document.createTextNode(i+1);
        cell.appendChild(text1);

        let text2 = document.createTextNode(dataNip[i]);
        cell.appendChild(text2);

    }  
    
  }
    generateTable(table);
    hitungBonusDirektur();

    // function display(){

    //     for (let i = 0; i < dataNo.length; i++){

    //     const no1 = dataNo[i];
    //     const nip1 = dataNip[i];
    //     const nama1 = dataNama[i];
    //     const status1 = dataStatus[i];
    //     const jumlahAnak1 = dataJumlahAnak[i];
    //     const gaji1 = dataGaji[i];
    //     const bonus1 = dataBonus[i];
    //     const tunjanganAnak1 = dataTunjanganAnak[i];
    //     const tunjanganIstri1 = dataTunjanganIstri[i];
    //     const gajiBersih1 = dataGajiBersih[i];
    //     const masaKerja1 = dataMasaKerja[i];
    //     const sanksi1 = dataSanksi[i];

    //     //1 deklarasi & 2 create

    //     const tr = document.createElement("tr");
    //     const no2 = document.createElement("td");
    //     no2.textContent = i++;
    //     tr.body.appendChild(no2);

    //     const nip2 = document.createElement("td");
    //     nip2.textContent = nip1;
    //     tr.body.appendChild(nip2);

    //     const nama2 = document.createElement("td");
    //     nama2.textContent = nama1;
    //     tr.body.appendChild(nama2);

    //     const status2 = document.createElement("td");
    //     status2.textContent = status1;
    //     tr.body.appendChild(status2);

    //     const jumlahAnak2 = document.createElement("td");
    //     jumlahAnak2.textContent = jumlahAnak1;
    //     tr.body.appendChild(jumlahAnak2);

    //     const gaji2 = document.createElement("td");
    //     gaji2.textContent = gaji1;
    //     tr.body.appendChild(gaji2);

    //     const bonus2 = document.createElement("td");
    //     bonus2.textContent = bonus1;
    //     tr.body.appendChild(bonus2);

    //     const tunjanganAnak2 = document.createElement("td");
    //     tunjanganAnak2.textContent = tunjanganAnak1;
    //     tr.body.appendChild(tunjanganAnak2);

    //     const tunjanganIstri2 = document.createElement("td");
    //     tunjanganIstri2.textContent = tunjanganIstri1;
    //     tr.body.appendChild(tunjanganIstri2);

    //     const gajiBersih2 = document.createElement("td");
    //     gajiBersih2.textContent = gajiBersih1;
    //     tr.body.appendChild(gajiBersih2);

    //     const masaKerja2 = document.createElement("td");
    //     masaKerja2.textContent = masaKerja1;
    //     tr.body.appendChild(masaKerja2);

    //     const sanksi2 = document.createElement("td");
    //     sanksi2.textContent = sanksi1;
    //     tr.body.appendChild(sanksi2);

    //     const hasilInput = document.getElementById("hasilInput");
    //     hasilInput.body.appendChild(tr);
    //     }
    // }
    // display();
}