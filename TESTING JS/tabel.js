function terimainput(){
    var x=document.forms['biodata']['nim'].value;
    var y=document.forms['biodata']['nama'].value;
    var z=document.forms['biodata']['agama'].value;
    var tabel = document.getElementById("tabelinput");
    var row = tabel.insertRow(1); //baris 1
    var cell1 = row.insertCell(0); //kolom nim
    var cell2 = row.insertCell(1); //kolom nama
    var cell3 = row.insertCell(2); //kolom agama
    
   cell1.innerHTML = x; //mengisikan var X(nim)ke cell(kolom1)
   cell2.innerHTML = y; //mengisikan var y(nama)ke cell(kolom2)
   cell3.innerHTML = z; //mengisikan var z(agama)ke cell(kolom3)
}