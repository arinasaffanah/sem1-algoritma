function terimainput1(){
    let no = document.forms['biodata1']['nomor'].value;
    let nip = document.forms['biodata1']['nip'].value;
    let nama = document.forms['biodata1']['nama'].value;
    let status = document.forms['biodata1']['status'].value;
    let anak = document.forms['biodata1']['jumlahAnak'].value;
    let gaji = document.forms['biodata1']['masaKerja'].value;
    let bonus = document.forms['biodata1']['sanksi'].value;
    let budget =document.forms['biodata1']['budget'].value;
    // let tunjanak = document.forms['biodata1']['tunjanak'].value;
    // let tunjistri = document.forms['biodata1']['tunjistri'].value;
    // let gajibersih = document.forms['biodata1']['gajibersih'].value;
    let tabel = document.getElementById("tabelinput1");

    let row = tabel.insertRow(1); //baris 1
    let cell1 = row.insertCell(0); //kolom no
    let cell2 = row.insertCell(1); //kolom nip
    let cell3 = row.insertCell(2); //kolom nama
    let cell4 = row.insertCell(3); //kolom status
    let cell5 = row.insertCell(4); //kolom anak
    let cell6 = row.insertCell(5); //kolom gaji
    let cell7 = row.insertCell(6); //kolom bonus
    let cell8 = row.insertCell(7); //kolom budget
    let cell9 = row.insertCell(8); //kolom tunjanak
    let cell10 = row.insertCell(9); //kolom tunjistri
    let cell11 = row.insertCell(10); //kolom gajibersih
    
   cell1.innerHTML = no; //mengisikan let X(no)ke cell(kolom1)
   cell2.innerHTML = nip; //mengisikan let y(nip)ke cell(kolom2)
   cell3.innerHTML = nama; //mengisikan let z(nama)ke cell(kolom3)
   cell4.innerHTML = status; //mengisikan let z(status)ke cell(kolom3)
   cell5.innerHTML = anak; //mengisikan let z(nama)ke cell(kolom3)
   cell6.innerHTML = gaji; //mengisikan let z(status)ke cell(kolom3)
   cell7.innerHTML = bonus; //mengisikan let y(nip)ke cell(kolom2)
   cell8.innerHTML = budget; //mengisikan let z(nama)ke cell(kolom3)
   cell9.innerHTML = tunjanak; //mengisikan let z(status)ke cell(kolom3)
   cell10.innerHTML = tunjistri; //mengisikan let z(nama)ke cell(kolom3)
   cell11.innerHTML = gajibersih; //mengisikan let z(status)ke cell(kolom3)

let table = document.getElementById("tabelinput1");
let sumHsl = 0, sumBonus1 = 0, sumBudget1 = 0, sumTunjanak1 = 0, sumTunjistri1 = 0, sumGajibersih1 = 0;
    for(let t = 1; t < table.rows.length; t++){
    sumHsl = sumHsl + parseInt(table.rows[t].cells[5].innerHTML);
    sumBonus1 = sumBonus1 + parseInt(table.rows[t].cells[6].innerHTML);
    sumBudget1 = sumBudget1 + parseInt(table.rows[t].cells[7].innerHTML);
    sumTunjanak1 = sumTunjanak1 + parsAeInt(table.rows[t].cells[8].innerHTML);
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

/*let tableBonus = document.getElementById("tabelinput1"), sumHslbonus1 = 0;
    for(let u = 1; u < tableBonus.rows.length; u++){
    sumHslbonus1 = sumHslbonus1 + parseInt(tableBonus.rows[u].cells[6].innerHTML);
    }
    document.getElementById("hasil").innerHTML = "Total Bonus = "+ sumHslbonus1;
*/

}


function terimainput2(){
    let no2 = document.forms['biodata2']['nomor2'].value;
    let nip2 = document.forms['biodata2']['nip2'].value;
    let nama2 = document.forms['biodata2']['nama2'].value;
    let status2 = document.forms['biodata2']['status2'].value;
    let anak2 = document.forms['biodata2']['anak2'].value;
    let gaji2 = document.forms['biodata2']['gaji2'].value;
    let bonus2 = document.forms['biodata2']['bonus2'].value;
    let budget2 =document.forms['biodata2']['budget2'].value;
    let tunjanak2 = document.forms['biodata2']['tunjanak2'].value;
    let tunjistri2 = document.forms['biodata2']['tunjistri2'].value;
    let gajibersih2 = document.forms['biodata2']['gajibersih2'].value;
    let tabel2 = document.getElementById("tabelinput2");

    let row = tabel2.insertRow(1); //baris 1
    let cell1p2 = row.insertCell(0); //kolom no
    let cell2p2 = row.insertCell(1); //kolom nip
    let cell3p2 = row.insertCell(2); //kolom nama
    let cell4p2 = row.insertCell(3); //kolom status
    let cell5p2 = row.insertCell(4); //kolom anak
    let cell6p2 = row.insertCell(5); //kolom gaji
    let cell7p2 = row.insertCell(6); //kolom bonus
    let cell8p2 = row.insertCell(7); //kolom budget
    let cell9p2 = row.insertCell(8); //kolom tunjanak
    let cell10p2 = row.insertCell(9); //kolom tunjistri
    let cell11p2 = row.insertCell(10); //kolom gajibersih
    
   cell1p2.innerHTML = no2; //mengisikan let X(no)ke cell(kolom1)
   cell2p2.innerHTML = nip2; //mengisikan let y(nip)ke cell(kolom2)
   cell3p2.innerHTML = nama2; //mengisikan let z(nama)ke cell(kolom3)
   cell4p2.innerHTML = status2; //mengisikan let z(status)ke cell(kolom3)
   cell5p2.innerHTML = anak2; //mengisikan let z(nama)ke cell(kolom3)
   cell6p2.innerHTML = gaji2; //mengisikan let z(status)ke cell(kolom3)
   cell7p2.innerHTML = bonus2; //mengisikan let y(nip)ke cell(kolom2)
   cell8p2.innerHTML = budget2; //mengisikan let z(nama)ke cell(kolom3)
   cell9p2.innerHTML = tunjanak2; //mengisikan let z(status)ke cell(kolom3)
   cell10p2.innerHTML = tunjistri2; //mengisikan let z(nama)ke cell(kolom3)
   cell11p2.innerHTML = gajibersih2; //mengisikan let z(status)ke cell(kolom3)

let table2 = document.getElementById("tabelinput2");
let sumHsl = 0, sumBonus2 = 0, sumBudget2 = 0, sumTunjanak2 = 0, sumTunjistri2 = 0, sumGajibersih2 = 0;
    for(let t = 1; t < table2.rows.length; t++){
    sumHsl = sumHsl + parseInt(table2.rows[t].cells[5].innerHTML);
    sumBonus2 = sumBonus2 + parseInt(table2.rows[t].cells[6].innerHTML);
    sumBudget2 = sumBudget2 + parseInt(table2.rows[t].cells[7].innerHTML);
    sumTunjanak2 = sumTunjanak2 + parseInt(table2.rows[t].cells[8].innerHTML);
    sumTunjistri2 = sumTunjistri2 + parseInt(table2.rows[t].cells[9].innerHTML);
    sumGajibersih2 = sumGajibersih2 + parseInt(table2.rows[t].cells[10].innerHTML); 
    }
    document.getElementById("hasil2").innerHTML = "Total Gaji = "+ sumHsl;
    document.getElementById("hasilBonus2").innerHTML = "Total Bonus = "+ sumBonus2;
    document.getElementById("hasilBudget2").innerHTML = "Total Budget = "+ sumBudget2;
    document.getElementById("hasilTunjanak2").innerHTML = "Total Tunjangan Anak = "+ sumTunjanak2;
    document.getElementById("hasilTunjistri2").innerHTML = "Total Tunjangan istri = "+ sumTunjistri2;
    document.getElementById("hasilGajibersih2").innerHTML = "Total Gaji Bersih = "+ sumGajibersih2;    
}


function terimainput3(){
    let no3 = document.forms['biodata3']['nomor3'].value;
    let nip3 = document.forms['biodata3']['nip3'].value;
    let nama3 = document.forms['biodata3']['nama3'].value;
    let status3 = document.forms['biodata3']['status3'].value;
    let anak3 = document.forms['biodata3']['anak3'].value;
    let gaji3 = document.forms['biodata3']['gaji3'].value;
    let bonus3 = document.forms['biodata3']['bonus3'].value;
    let budget3 =document.forms['biodata3']['budget3'].value;
    let tunjanak3 = document.forms['biodata3']['tunjanak3'].value;
    let tunjistri3 = document.forms['biodata3']['tunjistri3'].value;
    let gajibersih3 = document.forms['biodata3']['gajibersih3'].value;
    let tabel3 = document.getElementById("tabelinput3");

    let row = tabel3.insertRow(1); //baris 1
    let cell1p3 = row.insertCell(0); //kolom no
    let cell2p3 = row.insertCell(1); //kolom nip
    let cell3p3 = row.insertCell(2); //kolom nama
    let cell4p3 = row.insertCell(3); //kolom status
    let cell5p3 = row.insertCell(4); //kolom anak
    let cell6p3 = row.insertCell(5); //kolom gaji
    let cell7p3 = row.insertCell(6); //kolom bonus
    let cell8p3 = row.insertCell(7); //kolom budget
    let cell9p3 = row.insertCell(8); //kolom tunjanak
    let cell10p3 = row.insertCell(9); //kolom tunjistri
    let cell11p3 = row.insertCell(10); //kolom gajibersih
    
   cell1p3.innerHTML = no3; //mengisikan let X(no)ke cell(kolom 1)
   cell2p3.innerHTML = nip3; //mengisikan let y(nip)ke cell(kolom 2)
   cell3p3.innerHTML = nama3; //mengisikan let z(nama)ke cell(kolom 3)
   cell4p3.innerHTML = status3; //mengisikan let z(status)ke cell(kolom 4)
   cell5p3.innerHTML = anak3; //mengisikan let z(anak)ke cell(kolom 5)
   cell6p3.innerHTML = gaji3; //mengisikan let z(gaji)ke cell(kolom 6)
   cell7p3.innerHTML = bonus3; //mengisikan let y(bonus)ke cell(kolom 7)
   cell8p3.innerHTML = budget3; //mengisikan let z(budget)ke cell(kolom 8)
   cell9p3.innerHTML = tunjanak3; //mengisikan let z(tunjanak)ke cell(kolom 9)
   cell10p3.innerHTML = tunjistri3; //mengisikan let z(tunjistri)ke cell(kolom 10)
   cell11p3.innerHTML = gajibersih3; //mengisikan let z(gajibersih)ke cell(kolom 11)



let table3 = document.getElementById("tabelinput3");
let sumHsl = 0, sumBonus3 = 0, sumBudget3 = 0, sumTunjanak3 = 0, sumTunjistri3 = 0, sumGajibersih3 = 0;
    for(let t = 1; t < table3.rows.length; t++){
    sumHsl = sumHsl + parseInt(table3.rows[t].cells[5].innerHTML);
    sumBonus3 = sumBonus3 + parseInt(table3.rows[t].cells[6].innerHTML);
    sumBudget3 = sumBudget3 + parseInt(table3.rows[t].cells[7].innerHTML);
    sumTunjanak3 = sumTunjanak3 + parseInt(table3.rows[t].cells[8].innerHTML);
    sumTunjistri3 = sumTunjistri3 + parseInt(table3.rows[t].cells[9].innerHTML);
    sumGajibersih3 = sumGajibersih3 + parseInt(table3.rows[t].cells[10].innerHTML); 
    }
    document.getElementById("hasil3").innerHTML = "Total Gaji = "+ sumHsl;
    document.getElementById("hasilBonus3").innerHTML = "Total Bonus = "+ sumBonus3;
    document.getElementById("hasilBudget3").innerHTML = "Total Budget = "+ sumBudget3;
    document.getElementById("hasilTunjanak3").innerHTML = "Total Tunjangan Anak = "+ sumTunjanak3;
    document.getElementById("hasilTunjistri3").innerHTML = "Total Tunjangan istri = "+ sumTunjistri3;
    document.getElementById("hasilGajibersih3").innerHTML = "Total Gaji Bersih = "+ sumGajibersih3;    
}