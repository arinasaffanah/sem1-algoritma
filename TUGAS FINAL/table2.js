function terimainput2(){
    var no2 = document.forms['biodata2']['nomor2'].value;
    var nip2 = document.forms['biodata2']['nip2'].value;
    var nama2 = document.forms['biodata2']['nama2'].value;
    var status2 = document.forms['biodata2']['status2'].value;
    var anak2 = document.forms['biodata2']['anak2'].value;
    var gaji2 = document.forms['biodata2']['gaji2'].value;
    var bonus2 = document.forms['biodata2']['bonus2'].value;
    var budget2 =document.forms['biodata2']['budget2'].value;
    var tunjanak2 = document.forms['biodata2']['tunjanak2'].value;
    var tunjistri2 = document.forms['biodata2']['tunjistri2'].value;
    var gajibersih2 = document.forms['biodata2']['gajibersih2'].value;
    var tabel2 = document.getElementById("tabelinput2");

    var row = tabel2.insertRow(1); //baris 1
    var cell1p2 = row.insertCell(0); //kolom no
    var cell2p2 = row.insertCell(1); //kolom nip
    var cell3p2 = row.insertCell(2); //kolom nama
    var cell4p2 = row.insertCell(3); //kolom status
    var cell5p2 = row.insertCell(4); //kolom anak
    var cell6p2 = row.insertCell(5); //kolom gaji
    var cell7p2 = row.insertCell(6); //kolom bonus
    var cell8p2 = row.insertCell(7); //kolom budget
    var cell9p2 = row.insertCell(8); //kolom tunjanak
    var cell10p2 = row.insertCell(9); //kolom tunjistri
    var cell11p2 = row.insertCell(10); //kolom gajibersih
    
   cell1p2.innerHTML = no2; //mengisikan var X(no)ke cell(kolom1)
   cell2p2.innerHTML = nip2; //mengisikan var y(nip)ke cell(kolom2)
   cell3p2.innerHTML = nama2; //mengisikan var z(nama)ke cell(kolom3)
   cell4p2.innerHTML = status2; //mengisikan var z(status)ke cell(kolom3)
   cell5p2.innerHTML = anak2; //mengisikan var z(nama)ke cell(kolom3)
   cell6p2.innerHTML = gaji2; //mengisikan var z(status)ke cell(kolom3)
   cell7p2.innerHTML = bonus2; //mengisikan var y(nip)ke cell(kolom2)
   cell8p2.innerHTML = budget2; //mengisikan var z(nama)ke cell(kolom3)
   cell9p2.innerHTML = tunjanak2; //mengisikan var z(status)ke cell(kolom3)
   cell10p2.innerHTML = tunjistri2; //mengisikan var z(nama)ke cell(kolom3)
   cell11p2.innerHTML = gajibersih2; //mengisikan var z(status)ke cell(kolom3)



var table2 = document.getElementById("tabelinput2"), sumHsl = 0;
for(var t = 1; t < table2.rows.length; t++){
    sumHsl = sumHsl + parseInt(table2.rows[t].cells[5].innerHTML);
}
document.getElementById("hasil2").innerHTML = "Total Gaji = "+ sumHsl;

}