function terimainput1(){
    var no = document.forms['biodata1']['nomor'].value;
    var nip = document.forms['biodata1']['nip'].value;
    var nama = document.forms['biodata1']['nama'].value;
    var status = document.forms['biodata1']['status'].value;
    var anak = document.forms['biodata1']['anak'].value;
    //var gaji = document.forms['biodata1']['gaji'].value;
    //var bonus = document.forms['biodata1']['bonus'].value;
    //var budget = document.forms['biodata1']['budget'].value;
    //var tunjanak = document.forms['biodata1']['tunjanak'].value;
    //var tunjistri = document.forms['biodata1']['tunjistri'].value;
    //var gajibersih = document.forms['biodata1']['gajibersih'].value;
    var tabel = document.getElementById("tabelinput1");

    var gaji = 23000000;
    var bonus = 30000000;
    var tunjanak = anak * (gaji * 0.02);
    var tunjistri = (gaji * 0.1);
    var totalTunjangan = tunjanak + tunjistri;

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

var table = document.getElementById("tabelinput1");
var sumHsl = 0, sumBonus1 = 0, sumBudget1 = 0, sumTunjanak1 = 0, sumTunjistri1 = 0, sumGajibersih1 = 0;
    for(var t = 1; t < table.rows.length; t++){
    sumHsl = sumHsl + parseInt(table.rows[t].cells[5].innerHTML);
    sumBonus1 = sumBonus1 + parseInt(table.rows[t].cells[6].innerHTML);
    sumBudget1 = sumBudget1 + parseInt(table.rows[t].cells[7].innerHTML);
    sumTunjanak1 = sumTunjanak1 + parseInt(table.rows[t].cells[8].innerHTML);
    sumTunjistri1 = sumTunjistri1 + parseInt(table.rows[t].cells[9].innerHTML);
    sumGajibersih1 = sumGajibersih1 + parseInt(table.rows[t].cells[10].innerHTML);
    }
    document.getElementById("hasil").innerHTML = "Total Gaji = "+ sumHsl;
    document.getElementById("hasilBonus1").innerHTML = "<p>\nTotal Bonus = "+ sumBonus1;
    document.getElementById("hasilBudget1").innerHTML = "<p>\nTotal Budget = "+ sumBudget1;
    document.getElementById("hasilTunjanak1").innerHTML = "<p>\nTotal Tunjangan Anak = "+ sumTunjanak1;
    document.getElementById("hasilTunjistri1").innerHTML = "<p>\nTotal Tunjangan istri = "+ sumTunjistri1;
    document.getElementById("hasilGajibersih1").innerHTML = "<p>\nTotal Gaji Bersih = "+ sumGajibersih1;
    sumHsl = sumGaji1;

/*var tableBonus = document.getElementById("tabelinput1"), sumHslbonus1 = 0;
    for(var u = 1; u < tableBonus.rows.length; u++){
    sumHslbonus1 = sumHslbonus1 + parseInt(tableBonus.rows[u].cells[6].innerHTML);
    }
    document.getElementById("hasil").innerHTML = "Total Bonus = "+ sumHslbonus1;
*/

}