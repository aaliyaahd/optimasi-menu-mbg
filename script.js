const menus = [
  {
    minggu: 1,
    hariTanggal: "Selasa, 31 Maret 2026",
    menu: "Nasi Putih + Ayam Katsu + Telur Scramble + Tahu Bali + Tumis Kubis + Pisang",
    hargaKecil: 8000,
    hargaBesar: 10000,
    giziKecil: 89,
    giziBesar: 95
  },

  {
    minggu: 1,
    hariTanggal: "Rabu, 01 April 2026",
    menu: "Nasi Daun Jeruk + Ayam Woku + Tahu Goreng + Tumis Wortel + Jeruk Medan",
    hargaKecil: 8000,
    hargaBesar: 10000,
    giziKecil: 88,
    giziBesar: 94
  },

  {
    minggu: 1,
    hariTanggal: "Kamis, 02 April 2026",
    menu: "Nasi Putih + Telur Ceplok Balado + Ayam Suwir + Tahu Goreng + Tumis Buncis + Kelengkeng",
    hargaKecil: 8000,
    hargaBesar: 10000,
    giziKecil: 90,
    giziBesar: 96
  },

  {
    minggu: 1,
    hariTanggal: "Jumat, 03 April 2026",
    menu: "Nasi Putih + Ayam Teriyaki + Orek Tempe + Pakcoy Siram + Pisang",
    hargaKecil: 8000,
    hargaBesar: 10000,
    giziKecil: 87,
    giziBesar: 93
  },

  {
    minggu: 1,
    hariTanggal: "Sabtu, 04 April 2026",
    menu: "Nasi Putih + Telur Ceplok Asam Manis + Stik Tempe + Mix Vege + Pisang",
    hargaKecil: 8000,
    hargaBesar: 10000,
    giziKecil: 86,
    giziBesar: 92
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
  }
];

const menuTable = document.getElementById("menuTable");
const variabelTable = document.getElementById("variabelTable");

function tampilkanTabel() {
  menuTable.innerHTML = "";

  menus.forEach(item => {
    menuTable.innerHTML += `
      <tr>
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

function tampilkanVariabel() {
  variabelTable.innerHTML = "";

  menus.forEach((item, index) => {
    variabelTable.innerHTML += `
      <tr>
        <td>X${index + 1}</td>
        <td>Menu Minggu ke-${item.minggu}</td>
        <td>${item.menu}</td>
      </tr>
    `;
  });
}

function optimasiMenu() {
  let kategori = document.getElementById("kategori").value;
  let sortedMenus = [...menus];

  if (kategori === "kecil") {
    sortedMenus.forEach(item => {
      item.rasio = item.giziKecil / item.hargaKecil;
    });
  } else {
    sortedMenus.forEach(item => {
      item.rasio = item.giziBesar / item.hargaBesar;
    });
  }

  // descending
  sortedMenus.sort((a, b) => b.rasio - a.rasio);

  let hasil = "<h3>Daftar Menu Optimal</h3><ul>";

  sortedMenus.forEach(item => {
    if (kategori === "kecil") {
      hasil += `
        <li>
          <b>${item.hariTanggal}</b><br>
          Variabel: X${menus.indexOf(item) + 1}<br>
          🍽️ ${item.menu}<br>
          👶 Balita / TK / SD 1-3<br>
          📦 Porsi Kecil<br>
          💰 Rp ${item.hargaKecil.toLocaleString()}<br>
          🥗 ${item.giziKecil}<br>
          📈 ${item.rasio.toFixed(4)}
          <hr>
        </li>
      `;
    } else {
      hasil += `
        <li>
          <b>${item.hariTanggal}</b><br>
          Variabel: X${menus.indexOf(item) + 1}<br>
          🍽️ ${item.menu}<br>
          👨‍👩‍👧 SD 4-6 / SMP / SMA / Busui / Ibu Hamil / Lansia<br>
          📦 Porsi Besar<br>
          💰 Rp ${item.hargaBesar.toLocaleString()}<br>
          🥗 ${item.giziBesar}<br>
          📈 ${item.rasio.toFixed(4)}
          <hr>
        </li>
      `;
    }
  });

  hasil += "</ul>";
  document.getElementById("hasil").innerHTML = hasil;
}

tampilkanTabel();
tampilkanVariabel();