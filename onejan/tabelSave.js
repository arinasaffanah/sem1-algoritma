const dataNip = [];
const dataNama = [];
const dataStatus = [];
const dataJumlahAnak = [];
const dataGaji = [];


document.forms['biodata'].onsubmit = function (event){
    event.preventDefault();

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

    console.info(dataNip);
    console.info(dataNama);
    console.info(dataStatus);
    console.info(dataJumlahAnak);
    console.info(dataGaji);

}