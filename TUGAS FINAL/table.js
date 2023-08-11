function terimainput1(){
    var no = document.forms['biodata1']['nomor'].value;
    var nip = document.forms['biodata1']['nip'].value;
    var nama = document.forms['biodata1']['nama'].value;
    var status = document.forms['biodata1']['status'].value;
    var anak = document.forms['biodata1']['anak'].value;
    var gaji = document.forms['biodata1']['gaji'].value;
    var bonus = document.forms['biodata1']['bonus'].value;
    var budget =document.forms['biodata1']['budget'].value;
    var tunjanak = document.forms['biodata1']['tunjanak'].value;
    var tunjistri = document.forms['biodata1']['tunjistri'].value;
    var gajibersih = document.forms['biodata1']['gajibersih'].value;
    var tabel = document.getElementById("tabelinput1");

    var row = tabel.insertRow(1); //baris 1
    var cell1 = row.insertCell(0); //kolom no
    var cell2 = row.insertCell(1); //kolom nip
    var cell3 = row.insertCell(2); //kolom nama
    var cell4 = row.insertCell(3); //kolom status
    var cell5 = row.insertCell(4); //kolom anak
    var cell6 = row.insertCell(5); //kolom gaji
    var cell7 = row.insertCell(6); //kolom bonus
    var cell8 = row.insertCell(7); //kolom budget
    var cell9 = row.insertCell(8); //kolom tunjanak
    var cell10 = row.insertCell(9); //kolom tunjistri
    var cell11 = row.insertCell(10); //kolom gajibersih
    
   cell1.innerHTML = no; //mengisikan var X(no)ke cell(kolom1)
   cell2.innerHTML = nip; //mengisikan var y(nip)ke cell(kolom2)
   cell3.innerHTML = nama; //mengisikan var z(nama)ke cell(kolom3)
   cell4.innerHTML = status; //mengisikan var z(status)ke cell(kolom3)
   cell5.innerHTML = anak; //mengisikan var z(nama)ke cell(kolom3)
   cell6.innerHTML = gaji; //mengisikan var z(status)ke cell(kolom3)
   cell7.innerHTML = bonus; //mengisikan var y(nip)ke cell(kolom2)
   cell8.innerHTML = budget; //mengisikan var z(nama)ke cell(kolom3)
   cell9.innerHTML = tunjanak; //mengisikan var z(status)ke cell(kolom3)
   cell10.innerHTML = tunjistri; //mengisikan var z(nama)ke cell(kolom3)
   cell11.innerHTML = gajibersih; //mengisikan var z(status)ke cell(kolom3)



var table = document.getElementById("tabelinput1"), sumHsl = 0;
for(var t = 1; t < table.rows.length; t++){
    sumHsl = sumHsl + parseInt(table.rows[t].cells[5].innerHTML);
}
document.getElementById("hasil").innerHTML = "Total Gaji = "+ sumHsl;

}

/* function sum(){
    var table = document.getElementById("tabelinput"), sumHsl = 0;
        for(var t = 1; t < table.rows.length; t++)
    {
        sumHsl = sumHsl + parseInt(table.rows[t].cells[5].innerHTML);
    }
document.getElementById("hasil").innerHTML = "Sum Value = "+ sumHsl;
}*/

