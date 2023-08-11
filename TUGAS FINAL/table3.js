function terimainput3(){
    var no3 = document.forms['biodata3']['nomor3'].value;
    var nip3 = document.forms['biodata3']['nip3'].value;
    var nama3 = document.forms['biodata3']['nama3'].value;
    var status3 = document.forms['biodata3']['status3'].value;
    var anak3 = document.forms['biodata3']['anak3'].value;
    var gaji3 = document.forms['biodata3']['gaji3'].value;
    var bonus3 = document.forms['biodata3']['bonus3'].value;
    var budget3 =document.forms['biodata3']['budget3'].value;
    var tunjanak3 = document.forms['biodata3']['tunjanak3'].value;
    var tunjistri3 = document.forms['biodata3']['tunjistri3'].value;
    var gajibersih3 = document.forms['biodata3']['gajibersih3'].value;
    var tabel3 = document.getElementById("tabelinput3");

    var row = tabel3.insertRow(1); //baris 1
    var cell1p3 = row.insertCell(0); //kolom no
    var cell2p3 = row.insertCell(1); //kolom nip
    var cell3p3 = row.insertCell(2); //kolom nama
    var cell4p3 = row.insertCell(3); //kolom status
    var cell5p3 = row.insertCell(4); //kolom anak
    var cell6p3 = row.insertCell(5); //kolom gaji
    var cell7p3 = row.insertCell(6); //kolom bonus
    var cell8p3 = row.insertCell(7); //kolom budget
    var cell9p3 = row.insertCell(8); //kolom tunjanak
    var cell10p3 = row.insertCell(9); //kolom tunjistri
    var cell11p3 = row.insertCell(10); //kolom gajibersih
    
   cell1p3.innerHTML = no3; //mengisikan var X(no)ke cell(kolom1)
   cell2p3.innerHTML = nip3; //mengisikan var y(nip)ke cell(kolom2)
   cell3p3.innerHTML = nama3; //mengisikan var z(nama)ke cell(kolom3)
   cell4p3.innerHTML = status3; //mengisikan var z(status)ke cell(kolom3)
   cell5p3.innerHTML = anak3; //mengisikan var z(nama)ke cell(kolom3)
   cell6p3.innerHTML = gaji3; //mengisikan var z(status)ke cell(kolom3)
   cell7p3.innerHTML = bonus3; //mengisikan var y(nip)ke cell(kolom2)
   cell8p3.innerHTML = budget3; //mengisikan var z(nama)ke cell(kolom3)
   cell9p3.innerHTML = tunjanak3; //mengisikan var z(status)ke cell(kolom3)
   cell10p3.innerHTML = tunjistri3; //mengisikan var z(nama)ke cell(kolom3)
   cell11p3.innerHTML = gajibersih3; //mengisikan var z(status)ke cell(kolom3)



var table3 = document.getElementById("tabelinput3"), sumHsl = 0;
for(var t = 1; t < table3.rows.length; t++){
    sumHsl = sumHsl + parseInt(table3.rows[t].cells[5].innerHTML);
}
document.getElementById("hasil3").innerHTML = "Total Gaji = "+ sumHsl;

}