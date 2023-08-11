const nama = ["Arina Saffanah Zakiyyah", "Deby Stevani Liu", "Febriyanti Juhaini", "Shiska Riani", "Glenn David", "Helmeira Putri", "Muhammad Noval Rais", "Muflih Hilmi Abiyyu", "Kevin Nabil Mahardhika", "Kevin Januari", "Alfan Duta Pamungkas", "Reza Prakosta", " Yoga Dwi Sutarto", "Andita Nurrizki Rahmani", "Simon Sinek"];
//const gol = [2,3,1,2,3,1,1,2,3,1,2,3,2,3,1];
const gol = [2,2,1,1,3,1,3,2,2,3,1,1,3,2,3];

let index = 0;

let output = `<div class='header'><span></span><span>DAFTAR BONUS AKHIR TAHUN</span><span>Hal: 4</span></div><table border="1">
<thead>
    <tr>
        <th>Hal</th>
        <th>Total Gaji Pokok</th>
        <th>Total Tunjangan</th>
        <th>Total Bonus</th>
        </tr>
</thead><tbody>`;

let totalGajiPokok = 0,
    totalTunjangan = 0,
    totalBonus = 0,
    totalGajiPokokAkhir = 0,
    totalTunjanganAkhir = 0,
    totalBonusAkhir = 0;


function cetakJudul(halaman) {
    index = 1;
    document.writeln(`<div class='header'><span>Golongan ${halaman}</span><span>DAFTAR BONUS AKHIR TAHUN</span><span>Hal: ${halaman}</span></div>`);
    document.writeln(`<table border="1">
    <thead>
    <tr>
        <th>No</th>
        <th>Nama</th>
        <th>GOL</th>
        <th>Jabatan</th>
        <th>Gaji Pokok</th>
        <th>Tunjangan</th>
        <th>Bonus</th>
        <th>Gaji Bersih</th>
    </tr>
    </thead><tbody>`)
}

cetakJudul(1);
for (let i = 0; i < nama.length; i++) {
    if (gol[i] === 1) {
        document.writeln(`<tr>
        <td>${index++}</td>
        <td>${nama[i]}</td>
        <td>${gol[i]}</td>
        <td>Karyawan</td>
        <td>10000000</td>
        <td>${0.1 * 10000000}</td>
        <td>Bali</td>
        <td>10000000 + Bali</td>
        </tr>`);
        totalGajiPokok += 10000000;
        totalTunjangan += 0.1 * 10000000;
        totalBonus++;
    }
}

document.writeln(`</tbody></table>
Total Gaji Pokok = ${totalGajiPokok}<br>
Total Tunjangan = ${totalTunjangan}<br>
Total Bonus = ${totalBonus} Tiket Bali`);
output += `<tr><td>1</td><td>${totalGajiPokok}</td><td>${totalTunjangan}</td><td>${totalBonus} Tiket Bali</td></tr>`;
totalGajiPokokAkhir += totalGajiPokok;
totalTunjanganAkhir += totalTunjangan;
totalBonusAkhir += totalBonus;
totalGajiPokok = totalTunjangan = totalBonus = 0;

cetakJudul(2);
for (let i = 0; i < nama.length; i++) {
    if (gol[i] === 2) {
        document.writeln(`<tr>
        <td>${index++}</td>
        <td>${nama[i]}</td>
        <td>${gol[i]}</td>
        <td>Wakil Direktur</td>
        <td>15000000</td>
        <td>${0.15 * 15000000}</td>
        <td>Singapore</td>
        <td>15000000 + Singapore</td>
        </tr>`);
        totalGajiPokok += 15000000;
        totalTunjangan += 0.15 * 15000000;
        totalBonus++;
    }
}

document.writeln(`</tbody></table>
Total Gaji Pokok = ${totalGajiPokok}<br>
Total Tunjangan = ${totalTunjangan}<br>
Total Bonus = ${totalBonus} Tiket Singapore`);
output += `<tr><td>2</td><td>${totalGajiPokok}</td><td>${totalTunjangan}</td><td>${totalBonus} Tiket Singapore</td></tr>`;
totalGajiPokokAkhir += totalGajiPokok;
totalTunjanganAkhir += totalTunjangan;
totalBonusAkhir += totalBonus;
totalGajiPokok = totalTunjangan = totalBonus = 0;

cetakJudul(3);
for (let i = 0; i < nama.length; i++) {
    if (gol[i] === 3) {
        document.writeln(`<tr>
        <td>${index++}</td>
        <td>${nama[i]}</td>
        <td>${gol[i]}</td>
        <td>Direktur</td>
        <td>20000000</td>
        <td>${0.2 * 20000000}</td>
        <td>Paris</td>
        <td>20000000 + Paris</td>
        </tr>`);
        totalGajiPokok += 20000000;
        totalTunjangan += 0.2 * 20000000;
        totalBonus++;
    }
}

document.writeln(`</tbody></table>
Total Gaji Pokok = ${totalGajiPokok}<br>
Total Tunjangan = ${totalTunjangan}<br>
Total Bonus = ${totalBonus} Tiket Paris`);
output += `<tr><td>3</td><td>${totalGajiPokok}</td><td>${totalTunjangan}</td><td>${totalBonus} Tiket Paris</td></tr>`;
totalGajiPokokAkhir += totalGajiPokok;
totalTunjanganAkhir += totalTunjangan;
totalBonusAkhir += totalBonus;
totalGajiPokok = totalTunjangan = totalBonus = 0;

output += `<tr class='total top'><td colspan="2">Total Gaji Pokok Akhir</td><td colspan="2">${totalGajiPokokAkhir}</td></tr>
<tr class='total'><td colspan="2">Total Tunjangan Akhir</td><td colspan="2">${totalTunjanganAkhir}</td></tr>
<tr class='total'><td colspan="2">Total Bonus Akhir</td><td colspan="2">${totalBonusAkhir} Tiket</td></tr>`;

document.writeln(output);