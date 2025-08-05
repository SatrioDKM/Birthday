document.addEventListener("DOMContentLoaded", () => {
  const landingContainer = document.getElementById("landing-container");
  const mainContent = document.getElementById("main-content");
  const mulaiButton = document.getElementById("mulai-button");
  const namaInput = document.getElementById("nama-input");
  const namaPanggilanSpan = document.getElementById("nama-panggilan");

  // Fungsi untuk memulai kejutan
  mulaiButton.addEventListener("click", () => {
    const nama = namaInput.value.trim();

    if (nama) {
      namaPanggilanSpan.textContent = nama;

      // Sembunyikan landing page dan tampilkan konten utama
      landingContainer.style.transition = "opacity 1s ease-out";
      landingContainer.style.opacity = "0";

      setTimeout(() => {
        landingContainer.style.display = "none";
        mainContent.classList.remove("hidden");
        mainContent.style.opacity = "0";
        mainContent.style.transition = "opacity 1s ease-in";
        setTimeout(() => {
          mainContent.style.opacity = "1";
        }, 10); // small delay to trigger transition
      }, 1000);
    } else {
      alert("Tolong isi nama panggilanmu yaa :)");
    }
  });

  // --- LOGIKA BARU UNTUK ANIMASI SAAT SCROLL ---
  const animatedElements = document.querySelectorAll(".anim-on-scroll");

  // Buat Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Jika elemen masuk ke dalam layar
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          // Optional: hentikan observasi setelah animasi berjalan sekali
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null, // default viewport
      threshold: 0.1, // elemen dianggap terlihat jika 10% areanya masuk layar
    }
  );

  // Amati setiap elemen yang perlu dianimasikan
  animatedElements.forEach((el) => {
    observer.observe(el);
  });
});
