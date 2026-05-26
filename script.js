const menus = [
  {
    minggu: 1,
    hariTanggal: "Rabu, 1 April 2026",
    menu: "Nasi Daun Jeruk + Ayam Woku + Tahu Goreng + Tumis Wortel Sawi Putih + Buah Jeruk Medan",
    hargaKecil: 8000,
    hargaBesar: 10000,
    giziKecil: 535,
    giziBesar: 680
  },

  {
    minggu: 1,
    hariTanggal: "Kamis, 02 April 2026",
    menu: "Nasi Putih + Telur Ceplok Balado + Ayam Suwir + Tahu Goreng + Tumis Buncis + Buah Kelengkeng",
    hargaKecil: 8000,
    hargaBesar: 10000,
    giziKecil: 540,
    giziBesar: 720
  },

  {
    minggu: 1,
    hariTanggal: "Jumat, 03 April 2026",
    menu: "Nasi Putih + Ayam Teriyaki + Orek Tempe + Pakcoy Siram + Buah Pisang",
    hargaKecil: 8000,
    hargaBesar: 10000,
    giziKecil: 545,
    giziBesar: 690
  },

  {
    minggu: 1,
    hariTanggal: "Sabtu, 04 April 2026",
    menu: "Nasi Putih + Telur Ceplok Asam Manis + Stik Tempe + Mix Vege + Buah Pisang",
    hargaKecil: 8000,
    hargaBesar: 10000,
    giziKecil: 87,
    giziBesar: 93
  },

  {
    minggu: 2,
    hariTanggal: "Senin, 06 April 2026",
    menu: "Nasi Putih + Ayam Crispy Saos Mentai + Tahu Asam Manis + Capcay + Pisang",
    hargaKecil: 8000,
    hargaBesar: 10000,
    giziKecil: 88,
    giziBesar: 95
  },

  {
    minggu: 2,
    hariTanggal: "Selasa, 07 April 2026",
    menu: "Nasi Putih + Ayam Kecap + Telur Scramble + Tempe Goreng + Sayur Sop + Kelengkeng",
    hargaKecil: 8000,
    hargaBesar: 10000,
    giziKecil: 90,
    giziBesar: 96
  },

  {
    minggu: 2,
    hariTanggal: "Rabu, 08 April 2026",
    menu: "Nasi Daun Pandan + Telur Ceplok + Tahu Crispy + Tumis Wortel + Apel Fuji",
    hargaKecil: 8000,
    hargaBesar: 10000,
    giziKecil: 85,
    giziBesar: 92
  },

  {
    minggu: 2,
    hariTanggal: "Kamis, 09 April 2026",
    menu: "Nasi Putih + Ayam Goreng + Orek Tempe + Tumis Labusiam + Pisang",
    hargaKecil: 8000,
    hargaBesar: 10000,
    giziKecil: 87,
    giziBesar: 94
  },

  {
    minggu: 2,
    hariTanggal: "Jumat, 10 April 2026",
    menu: "Nasi Putih + Telur Ceplok + Tempe Mendoan + Buncis + Jeruk Kino",
    hargaKecil: 8000,
    hargaBesar: 10000,
    giziKecil: 84,
    giziBesar: 91
  },


];

const menuTable = document.getElementById("menuTable");
const variabelTable = document.getElementById("variabelTable");

const mappingVariabel = {
  "01 April 2026": "X9",
  "02 April 2026": "X13",
  "03 April 2026": "X18",
  "04 April 2026": "X22",

  "06 April 2026": "X1",
  "07 April 2026": "X5",
  "08 April 2026": "X10",
  "09 April 2026": "X14",
  "10 April 2026": "X19",
  "11 April 2026": "X23",

  "13 April 2026": "X2",
  "14 April 2026": "X6",
  "15 April 2026": "X11",
  "16 April 2026": "X15",
  "17 April 2026": "X20",

  "20 April 2026": "X3",
  "21 April 2026": "X7",
  "22 April 2026": "X12",
  "23 April 2026": "X16",
  "24 April 2026": "X21",

  "27 April 2026": "X4",
  "28 April 2026": "X8",
  "30 April 2026": "X17"
};

function cariVariabel(item){
  let tanggal =
    item.hariTanggal.split(", ")[1];

  return mappingVariabel[tanggal] || "-";
}


function ambilHari(namaHari){
  if(namaHari.includes("Senin")) return "Senin";
  if(namaHari.includes("Selasa")) return "Selasa";
  if(namaHari.includes("Rabu")) return "Rabu";
  if(namaHari.includes("Kamis")) return "Kamis";
  if(namaHari.includes("Jumat")) return "Jumat";
  if(namaHari.includes("Sabtu")) return "Sabtu";
}


function cariVariabel(item){
  let hari = ambilHari(item.hariTanggal);
  return mappingVariabel[`${hari}-${item.minggu}`] || "-";
}


function tampilkanTabel(){
  menuTable.innerHTML = "";

  menus.forEach(item=>{
    menuTable.innerHTML += `
      <tr>
        <td>${cariVariabel(item)}</td>
        <td>${item.minggu}</td>
        <td>${item.hariTanggal}</td>
        <td>${item.menu}</td>
        <td>Rp ${item.hargaKecil.toLocaleString()}</td>
        <td>Rp ${item.hargaBesar.toLocaleString()}</td>
        <td>${item.giziKecil}</td>
        <td>${item.giziBesar}</td>
      </tr>
    `;
  });
}


function tampilkanVariabel(){
  variabelTable.innerHTML = "";

  menus.filter(item => cariVariabel(item) !== "-")
     .forEach(item=>{
    variabelTable.innerHTML += `
      <tr>
        <td>${cariVariabel(item)}</td>
        <td>${item.hariTanggal}</td>
        <td>${item.menu}</td>
      </tr>
    `;
  });
}


function optimasiMenu(){

  let kategori =
  document.getElementById("kategori").value;

  let sortedMenus = [...menus];

  if(kategori==="kecil"){
    sortedMenus.forEach(item=>{
      item.rasio = item.giziKecil/item.hargaKecil;
    });
  } else {
    sortedMenus
    .filter(item => cariVariabel(item) !== "-")
    .forEach(item=>{
      item.rasio = item.giziBesar/item.hargaBesar;
    });
  }

  sortedMenus.sort((a,b)=>b.rasio-a.rasio);

  let hasil = "<h3>Daftar Menu Optimal</h3><ul>";

  sortedMenus.forEach(item=>{

    let variabel = cariVariabel(item);

    hasil += `
      <li>
      <b>${variabel}</b><br>
      ${item.hariTanggal}<br>
      🍽️ ${item.menu}<br>
      📈 Rasio: ${item.rasio.toFixed(4)}
      <hr>
      </li>
    `;
  });

  hasil += "</ul>";

  document.getElementById("hasil").innerHTML = hasil;
}

tampilkanTabel();
tampilkanVariabel();