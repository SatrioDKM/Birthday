document.addEventListener("DOMContentLoaded", () => {
  const promptContainer = document.getElementById("prompt-container");
  const mainContent = document.getElementById("main-content");
  const mulaiButton = document.getElementById("mulai-button");
  const namaInput = document.getElementById("nama-input");
  const namaPanggilanSpan = document.getElementById("nama-panggilan");
  const revealButtons = document.querySelectorAll(".tombol-reveal");

  // Fungsi saat tombol "Lanjutkan" diklik
  mulaiButton.addEventListener("click", () => {
    const nama = namaInput.value.trim();

    // Cek jika nama tidak kosong
    if (nama) {
      namaPanggilanSpan.textContent = nama; // Ganti nama di konten utama

      // Sembunyikan prompt dan tampilkan konten utama dengan animasi
      promptContainer.style.opacity = "0";
      setTimeout(() => {
        promptContainer.classList.add("hidden");
        mainContent.classList.remove("hidden");
        mainContent.style.opacity = "1";
      }, 500); // Waktu harus cocok dengan transisi di CSS
    } else {
      alert("Tolong isi nama panggilanmu yaa :)");
    }
  });

  // Fungsi untuk tombol-tombol reveal (surat, galeri, musik)
  revealButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      const targetContent = document.getElementById(targetId);

      // Toggle (muncul/sembunyikan) konten yang ditargetkan
      const isHidden = targetContent.classList.toggle("hidden");

      // Ganti teks tombol sesuai keadaan
      if (isHidden) {
        button.textContent = button.textContent
          .replace("Tutup", "Buka")
          .replace("Sembunyikan", "Lihat");
      } else {
        button.textContent = button.textContent
          .replace("Buka", "Tutup")
          .replace("Lihat", "Sembunyikan");
      }
    });
  });
});
