// Tampilan hasil baru. Dimuat SETELAH script.js, jadi fungsi optimasiMenu di bawah
// menggantikan yang lama (logika knapsack-nya sama persis, hanya cara menampilkannya yang beda).
const rp = n => 'Rp ' + n.toLocaleString('id-ID');

function optimasiMenu() {
  const kecil = document.querySelector('input[name="kategori"]:checked').value === 'kecil';
  const cap = kecil ? 48000 : 60000;
  const n = menus.length;
  const harga = m => kecil ? m.hargaKecil : m.hargaBesar;
  const gizi = m => kecil ? m.giziKecil : m.giziBesar;

  const dp = Array.from({ length: n + 1 }, () => Array(cap + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    const w = harga(menus[i - 1]), p = gizi(menus[i - 1]);
    for (let c = 0; c <= cap; c++) {
      dp[i][c] = w <= c ? Math.max(dp[i - 1][c], dp[i - 1][c - w] + p) : dp[i - 1][c];
    }
  }

  const picked = [];
  let c = cap;
  for (let i = n; i > 0; i--) {
    if (dp[i][c] !== dp[i - 1][c]) { picked.push(menus[i - 1]); c -= harga(menus[i - 1]); }
  }
  picked.reverse();

  const totalHarga = picked.reduce((s, m) => s + harga(m), 0);
  const pct = Math.round(totalHarga / cap * 100);

  const cards = picked.map(m => {
    const [hari, tgl] = m.hariTanggal.split(', ');
    const [tanggal, bulan] = tgl.split(' ');
    const komponen = m.menu.split(' + ').map(x => `<span>${x}</span>`).join('');
    return `<li class="pick">
      <div class="date"><span>${hari}</span><b>${tanggal}</b><span>${bulan.slice(0, 3)}</span></div>
      <div><div class="chips"><i>${cariVariabel(m)}</i>${komponen}</div>
      <div class="meta"><span>${rp(harga(m))}</span><span>Gizi ${gizi(m)}</span></div></div>
    </li>`;
  }).join('');

  document.getElementById('hasil').innerHTML = `
    <div class="stats">
      <div><small>Nilai optimal (Z)</small><b>${dp[n][cap]}</b></div>
      <div><small>Total harga</small><b>${rp(totalHarga)}</b></div>
      <div><small>Menu terpilih</small><b>${picked.length} dari ${n}</b></div>
      <div><small>Sisa anggaran</small><b>${rp(cap - totalHarga)}</b></div>
    </div>
    <div class="bar"><i style="width:${pct}%"></i></div>
    <p class="note">Terpakai ${rp(totalHarga)} dari ${rp(cap)} (${pct}%)</p>
    <ol class="picks">${cards}</ol>`;

  const dipilih = new Set(picked.map(cariVariabel));
  document.querySelectorAll('#menuTable tr').forEach(r =>
    r.classList.toggle('picked', dipilih.has(r.cells[0].textContent)));

  document.getElementById('hasilPanel').scrollIntoView({ behavior: 'smooth', block: 'start' });
}
