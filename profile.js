function ubahWarna(warna) {
  const card = document.getElementById('profileCard');
  card.classList.remove('bg-primary', 'bg-success', 'bg-danger', 'bg-info');
  if (warna !== 'info') {
    card.classList.add('bg-' + warna);
  } else {
    card.classList.add('bg-info');
  }
}
function ubahNama() {
  const nama = document.getElementById('namaProfile');
  if (nama.innerText === "Mahuru") {
    nama.innerText = "Mahuru Uwu";
  } else {
    nama.innerText = "Mahuru";
  }
}
