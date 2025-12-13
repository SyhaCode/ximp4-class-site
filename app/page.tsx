"use client";

import React, { useEffect, useRef, useState } from "react";

// --- Small helpers ---
function useCountUp(target = 0, duration = 1200, startWhenVisible = true) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    function animate() {
      const start = performance.now();
      const from = 0;
      const to = Number(target) || 0;
      function frame(now: number) {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setValue(Math.round(from + (to - from) * eased));
        if (p < 1) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    }

    if (!startWhenVisible) {
      animate();
      return;
    }

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            animate();
          }
        });
      },
      { threshold: 0.4 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [target, duration, startWhenVisible]);

  return { ref, value };
}

// ---------- DATA STRUKTUR KELAS ----------
const roles = [
  { role: "Wali Kelas", name: "windra", img: "https://i.pravatar.cc/150?img=1" },
  { role: "Ketua Kelas", name: "ara", img: "https://i.pravatar.cc/150?img=2" },
  { role: "Wakil Ketua Kelas", name: "Arya", img: "https://i.pravatar.cc/150?img=3" },
  { role: "Sekretaris 1", name: "raisa", img: "https://i.pravatar.cc/150?img=4" },
  { role: "Sekretaris 2", name: "ica", img: "https://i.pravatar.cc/150?img=5" },
  { role: "Bendahara 1", name: "anita", img: "https://i.pravatar.cc/150?img=6" },
  { role: "Bendahara 2", name: "indria", img: "https://i.pravatar.cc/150?img=7" },
];

const waliKelas = roles.find((r) => r.role === "Wali Kelas");
const ketuaKelas = roles.find((r) => r.role === "Ketua Kelas");
const wakilKetuaKelas = roles.find((r) => r.role === "Wakil Ketua Kelas");
const sekretaris1 = roles.find((r) => r.role === "Sekretaris 1");
const sekretaris2 = roles.find((r) => r.role === "Sekretaris 2");
const bendahara1 = roles.find((r) => r.role === "Bendahara 1");
const bendahara2 = roles.find((r) => r.role === "Bendahara 2");

const links = {
  instagram: "https://instagram.com/",
  confess: "https://example.com/confess",
  tiktok: "https://tiktok.com/@",
  vidio: "https://example.com/playlist", // ganti ke link Google Drive/YouTube-mu
  instagramVann: "https://instagram.com/van_nnn",
};

// ---------- GALLERY DATA: 12 FOTO + LABEL ACARA ----------
type GalleryItem = {
  src: string;
  label: string;
};

const galleryItems: GalleryItem[] = [
  { src: "/gallery/kelas-1.jpg", label: "Foto Kelas – Hari Pertama" },
  { src: "/gallery/kelas-2.jpg", label: "Upacara Bendera" },
  { src: "/gallery/kelas-3.jpg", label: "MPLS / MOS" },
  { src: "/gallery/kelas-4.jpg", label: "Kegiatan Praktek" },
  { src: "/gallery/kelas-5.jpg", label: "Latihan Upacara" },
  { src: "/gallery/kelas-6.jpg", label: "Study Tour" },
  { src: "/gallery/kelas-7.jpg", label: "Class Meeting" },
  { src: "/gallery/kelas-8.jpg", label: "Lomba 17 Agustus" },
  { src: "/gallery/kelas-9.jpg", label: "Pentas Seni" },
  { src: "/gallery/kelas-10.jpg", label: "Foto Akhir Semester" },
  { src: "/gallery/kelas-11.jpg", label: "Dokumentasi Ekstrakurikuler" },
  { src: "/gallery/kelas-12.jpg", label: "Momen Random di Kelas" },
];

// fallback jika gambar belum ada di public/gallery
const galleryFallback =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop";

// ---------- DATA ANGGOTA KELAS (30 siswa, 10 halaman @3 siswa) ----------
type Member = {
  id: number;
  name: string;
  role: string;
  img: string;
  quote: string;
};

const classMembers: Member[] = [
  {
    id: 1,
    name: "Ara",
    role: "KETUA KELAS",
    img: "https://i.pravatar.cc/150?img=11",
    quote:
      "Kalau kita kompak, tugas seberat apa pun bisa kerasa lebih ringan bareng-bareng.",
  },
  {
    id: 2,
    name: "Arya",
    role: "WAKIL KELAS",
    img: "https://i.pravatar.cc/150?img=12",
    quote:
      "Nggak apa-apa capek, yang penting kita tetap saling jaga dan saling dorong buat maju.",
  },
  {
    id: 3,
    name: "Raisa",
    role: "TIM DOKUMENTASI",
    img: "https://i.pravatar.cc/150?img=13",
    quote:
      "Setiap momen kecil di kelas layak jadi kenangan besar di masa depan.",
  },
  {
    id: 4,
    name: "Ica",
    role: "TIM KREATIF",
    img: "https://i.pravatar.cc/150?img=14",
    quote:
      "Belajar itu penting, tapi menikmati prosesnya bareng teman-teman jauh lebih berharga.",
  },
  {
    id: 5,
    name: "Anita",
    role: "BENDAHARA",
    img: "https://i.pravatar.cc/150?img=15",
    quote:
      "Transparan, amanah, dan tetap santai—itu kunci biar keuangan kelas nggak tegang.",
  },
  {
    id: 6,
    name: "Indria",
    role: "SUPPORT SYSTEM",
    img: "https://i.pravatar.cc/150?img=16",
    quote:
      "Kalau kamu capek, istirahat sebentar nggak apa-apa. Yang penting jangan berhenti bermimpi.",
  },
  {
    id: 7,
    name: "Evan",
    role: "WEB MASTER",
    img: "https://i.pravatar.cc/150?img=17",
    quote: "Selama ada Wi-Fi dan kopi, laporan dan project pasti kelar juga.",
  },
  {
    id: 8,
    name: "Siswa 8",
    role: "PEJUANG NILAI",
    img: "https://i.pravatar.cc/150?img=18",
    quote:
      "Nilai tinggi itu bonus, yang utama adalah kita ngerti dan bisa pakai ilmunya.",
  },
  {
    id: 9,
    name: "Siswa 9",
    role: "PENGHIBUR KELAS",
    img: "https://i.pravatar.cc/150?img=19",
    quote: "Tugas boleh numpuk, tapi tawa di kelas jangan pernah habis.",
  },
  {
    id: 10,
    name: "Siswa 10",
    role: "ANGGOTA KELAS",
    img: "https://i.pravatar.cc/150?img=20",
    quote: "Yang penting berani coba dulu, soal hasil belakangan.",
  },
  {
    id: 11,
    name: "Siswa 11",
    role: "ANGGOTA KELAS",
    img: "https://i.pravatar.cc/150?img=21",
    quote: "Setiap hari di kelas selalu ada cerita baru.",
  },
  {
    id: 12,
    name: "Siswa 12",
    role: "ANGGOTA KELAS",
    img: "https://i.pravatar.cc/150?img=22",
    quote: "Belajar bareng teman-teman bikin materi susah jadi lebih masuk.",
  },
  {
    id: 13,
    name: "Siswa 13",
    role: "ANGGOTA KELAS",
    img: "https://i.pravatar.cc/150?img=23",
    quote: "Kadang kita butuh gagal dulu biar bisa lebih kuat.",
  },
  {
    id: 14,
    name: "Siswa 14",
    role: "ANGGOTA KELAS",
    img: "https://i.pravatar.cc/150?img=24",
    quote: "Kerja kelompok + candaan receh = combo terbaik versi kami.",
  },
  {
    id: 15,
    name: "Siswa 15",
    role: "ANGGOTA KELAS",
    img: "https://i.pravatar.cc/150?img=25",
    quote: "Selama masih ada semangat, tugas apa pun bisa kita selesaikan.",
  },
  {
    id: 16,
    name: "Siswa 16",
    role: "ANGGOTA KELAS",
    img: "https://i.pravatar.cc/150?img=26",
    quote: "Kelas ini rumah kedua, bukan cuma tempat belajar.",
  },
  {
    id: 17,
    name: "Siswa 17",
    role: "ANGGOTA KELAS",
    img: "https://i.pravatar.cc/150?img=27",
    quote: "Kalau bareng XI-MP-4, capeknya terasa lebih seru.",
  },
  {
    id: 18,
    name: "Siswa 18",
    role: "ANGGOTA KELAS",
    img: "https://i.pravatar.cc/150?img=28",
    quote: "Jangan lupa istirahat di tengah sibuknya tugas sekolah.",
  },
  {
    id: 19,
    name: "Siswa 19",
    role: "ANGGOTA KELAS",
    img: "https://i.pravatar.cc/150?img=29",
    quote: "Nilai itu penting, tapi teman-teman jauh lebih berharga.",
  },
  {
    id: 20,
    name: "Siswa 20",
    role: "ANGGOTA KELAS",
    img: "https://i.pravatar.cc/150?img=30",
    quote: "Belajar bareng sambil bercanda, itulah gaya kami.",
  },
  {
    id: 21,
    name: "Siswa 21",
    role: "ANGGOTA KELAS",
    img: "https://i.pravatar.cc/150?img=31",
    quote: "Kadang yang kita butuh cuma satu kata: semangat!",
  },
  {
    id: 22,
    name: "Siswa 22",
    role: "ANGGOTA KELAS",
    img: "https://i.pravatar.cc/150?img=32",
    quote: "Ulangan boleh bikin panik, tapi kita hadapi bareng-bareng.",
  },
  {
    id: 23,
    name: "Siswa 23",
    role: "ANGGOTA KELAS",
    img: "https://i.pravatar.cc/150?img=33",
    quote: "Setiap jam istirahat adalah waktu reset otak.",
  },
  {
    id: 24,
    name: "Siswa 24",
    role: "ANGGOTA KELAS",
    img: "https://i.pravatar.cc/150?img=34",
    quote: "Belajar dari kesalahan itu juga bagian dari proses.",
  },
  {
    id: 25,
    name: "Siswa 25",
    role: "ANGGOTA KELAS",
    img: "https://i.pravatar.cc/150?img=35",
    quote: "Serius ketika perlu, kocak ketika boleh.",
  },
  {
    id: 26,
    name: "Siswa 26",
    role: "ANGGOTA KELAS",
    img: "https://i.pravatar.cc/150?img=36",
    quote: "Teman sekelas hari ini, keluarga besar di masa depan.",
  },
  {
    id: 27,
    name: "Siswa 27",
    role: "ANGGOTA KELAS",
    img: "https://i.pravatar.cc/150?img=37",
    quote: "XI-MP-4: kombinasi antara ambis dan santai.",
  },
  {
    id: 28,
    name: "Siswa 28",
    role: "ANGGOTA KELAS",
    img: "https://i.pravatar.cc/150?img=38",
    quote: "Kalau bareng, even hari Senin pun bisa terasa lebih baik.",
  },
  {
    id: 29,
    name: "Siswa 29",
    role: "ANGGOTA KELAS",
    img: "https://i.pravatar.cc/150?img=39",
    quote:
      "Tugas boleh banyak, tapi kita lebih banyak lagi cara buat tertawa.",
  },
  {
    id: 30,
    name: "Siswa 30",
    role: "ANGGOTA KELAS",
    img: "https://i.pravatar.cc/150?img=40",
    quote: "Suatu saat nanti, kita bakal kangen ributnya kelas ini.",
  },
];

// ---------- KOMPONEN KECIL ----------
function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="px-3 py-2 text-sm font-medium hover:text-primary transition-colors"
    >
      {children}
    </a>
  );
}

function SectionTitle({
  kicker,
  title,
  subtitle,
  center = true,
}: {
  kicker?: string;
  title: string;
  subtitle?: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center" : "text-left"}>
      {kicker && (
        <p className="text-xs uppercase tracking-[0.2em] text-primary/80 mb-2">
          {kicker}
        </p>
      )}
      <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}

function SocialBlock() {
  return (
    <section id="media-sosial" className="py-14">
      <div className="container mx-auto px-4">
        <SectionTitle
          kicker="Ikuti Kami"
          title="Media Sosial XI-MP-4"
          subtitle="Tetap terhubung dengan cerita harian, pengumuman, dan keseruan kelas!"
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <a
            href={links.instagram}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border p-6 hover:shadow-md transition"
          >
            <div className="text-lg font-semibold">Class Instagram</div>
            <p className="text-sm text-muted-foreground">
              Lihat momen terbaru &amp; feed estetik
            </p>
          </a>
          <a
            href={links.confess}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border p-6 hover:shadow-md transition"
          >
            <div className="text-lg font-semibold">Confess</div>
            <p className="text-sm text-muted-foreground">
              Sampaikan pesan anonim yang positif
            </p>
          </a>
          <a
            href={links.tiktok}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border p-6 hover:shadow-md transition"
          >
            <div className="text-lg font-semibold">TikTok</div>
            <p className="text-sm text-muted-foreground">
              Video singkat penuh tawa &amp; karya
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}

// ---------- PAGE UTAMA ----------
export default function XIMP4Site() {
  const { ref: totalRef, value: total } = useCountUp(30);
  const { ref: boysRef, value: boys } = useCountUp(15);
  const { ref: girlsRef, value: girls } = useCountUp(15);

  // pagination anggota kelas
  const [currentMemberPage, setCurrentMemberPage] = useState(1);
  const membersPerPage = 3; // 3 siswa per halaman -> 30 siswa = 10 halaman
  const totalMemberPages = Math.ceil(classMembers.length / membersPerPage);
  const currentMembers = classMembers.slice(
    (currentMemberPage - 1) * membersPerPage,
    currentMemberPage * membersPerPage
  );

  // pagination gallery: 6 foto per halaman -> 12 foto = 2 halaman
  const [galleryPage, setGalleryPage] = useState(1);
  const imagesPerPage = 6;
  const totalGalleryPages = Math.ceil(galleryItems.length / imagesPerPage);
  const currentGalleryItems = galleryItems.slice(
    (galleryPage - 1) * imagesPerPage,
    galleryPage * imagesPerPage
  );

  // Smooth anchor scrolling (untuk link #home, #tentang, dll.)
  useEffect(() => {
    const click = (e: MouseEvent) => {
      const targetEl = e.target as HTMLElement | null;
      const a = targetEl?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id) return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        (target as HTMLElement).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };
    document.addEventListener("click", click);
    return () => document.removeEventListener("click", click);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <a href="#home" className="font-extrabold tracking-tight">
            XI-MP-4
          </a>
          <nav className="hidden md:flex items-center">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#tentang">Tentang XI-MP-4</NavLink>
            <NavLink href="#struktur">Struktur Kelas</NavLink>
            <NavLink href="#anggota">Anggota Kelas</NavLink>
            <NavLink href="#gallery">Gallery</NavLink>
            <NavLink href="#prestasi">Prestasi</NavLink>
          </nav>
        </div>
      </header>

      {/* Hero (tanpa tombol Mulai Jelajah) */}
      <section id="home" className="relative overflow-hidden">
        {/* background accents */}
        <div
          aria-hidden
          className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block"
        >
          <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
        <div className="container mx-auto px-4 pt-24 md:pt-36">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="mt-8 text-balance text-4xl md:text-6xl lg:mt-12 font-extrabold">
              Welcome to XI-MP-4
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground">
              Penuh petualangan dan prestasi! Saksikan impian menjadi kenyataan
              di sini.
            </p>
          </div>

          {/* preview card */}
          <div className="relative mt-12 md:mt-16">
            <div
              aria-hidden
              className="bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
            />
            <div className="inset-shadow-2xs ring-background bg-background relative mx-auto max-w-4xl overflow-hidden rounded-2xl border p-3 shadow-lg shadow-zinc-950/15 ring-1">
              {/* Dark */}
              <img
                className="bg-background aspect-[16/9] relative hidden rounded-2xl dark:block"
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop"
                alt="kelas preview"
                width={1600}
                height={900}
              />
              {/* Light */}
              <img
                className="z-2 border-border/25 aspect-[16/9] relative rounded-2xl border dark:hidden"
                src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop"
                alt="kelas preview"
                width={1600}
                height={900}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tentang */}
      <section id="tentang" className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            kicker="Tentang Kami"
            title="Tentang XI-MP-4"
            subtitle={
              <>
                Suasana belajar yang saling mendukung, penuh rasa ingin tahu,
                dan berani mencoba hal baru. Di sini, setiap hari adalah
                kesempatan untuk bertumbuh, berkarya, dan jadi versi terbaik
                diri sendiri ✨
              </>
            }
          />

          {/* Statistik */}
          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-4 mx-auto text-center">
            <div ref={totalRef} className="rounded-2xl border p-4">
              <div className="text-3xl md:text-4xl font-extrabold">{total}</div>
              <div className="text-xs text-muted-foreground">Students</div>
            </div>
            <div ref={boysRef} className="rounded-2xl border p-4">
              <div className="text-3xl md:text-4xl font-extrabold">{boys}</div>
              <div className="text-xs text-muted-foreground">Boys</div>
            </div>
            <div ref={girlsRef} className="rounded-2xl border p-4">
              <div className="text-3xl md:text-4xl font-extrabold">
                {girls}
              </div>
              <div className="text-xs text-muted-foreground">Girls</div>
            </div>
          </div>
        </div>
      </section>

      {/* Struktur Kelas */}
      <section id="struktur" className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            kicker="Kepengurusan"
            title="Struktur Kelas XI-MP-4"
            subtitle="Kolaborasi peran yang rapi agar kelas berjalan hangat, kompak, dan produktif."
          />

          <div className="mt-10 space-y-6">
            {/* Wali kelas */}
            {waliKelas && (
              <div className="max-w-sm mx-auto rounded-2xl border overflow-hidden shadow-sm bg-muted/40">
                <div className="bg-muted flex justify-center py-4">
                  <div className="w-24 h-24">
                    <img
                      src={waliKelas.img}
                      alt={`${waliKelas.role} - ${waliKelas.name}`}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>
                <div className="p-3 text-center">
                  <div className="text-[10px] font-semibold tracking-[0.2em] text-primary/80 uppercase mb-1">
                    {waliKelas.role}
                  </div>
                  <div className="text-base font-semibold capitalize">
                    {waliKelas.name}
                  </div>
                </div>
              </div>
            )}

            {/* Ketua & Wakil */}
            <div className="grid max-w-md mx-auto gap-3 grid-cols-2">
              {ketuaKelas && (
                <div className="rounded-2xl border overflow-hidden hover:shadow-md transition group bg-background">
                  <div className="bg-muted flex justify-center py-3">
                    <div className="w-20 h-20">
                      <img
                        src={ketuaKelas.img}
                        alt={`${ketuaKelas.role} - ${ketuaKelas.name}`}
                        className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="p-2 text-center">
                    <div className="text-[10px] font-semibold tracking-[0.18em] text-primary/80 uppercase mb-1">
                      {ketuaKelas.role}
                    </div>
                    <div className="text-sm font-semibold capitalize">
                      {ketuaKelas.name}
                    </div>
                  </div>
                </div>
              )}

              {wakilKetuaKelas && (
                <div className="rounded-2xl border overflow-hidden hover:shadow-md transition group bg-background">
                  <div className="bg-muted flex justify-center py-3">
                    <div className="w-20 h-20">
                      <img
                        src={wakilKetuaKelas.img}
                        alt={`${wakilKetuaKelas.role} - ${wakilKetuaKelas.name}`}
                        className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="p-2 text-center">
                    <div className="text-[10px] font-semibold tracking-[0.18em] text-primary/80 uppercase mb-1">
                      {wakilKetuaKelas.role}
                    </div>
                    <div className="text-sm font-semibold capitalize">
                      {wakilKetuaKelas.name}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sekretaris */}
            <div className="grid max-w-md mx-auto gap-3 grid-cols-2">
              {sekretaris1 && (
                <div className="rounded-2xl border overflow-hidden hover:shadow-md transition group bg-background">
                  <div className="bg-muted flex justify-center py-3">
                    <div className="w-20 h-20">
                      <img
                        src={sekretaris1.img}
                        alt={`${sekretaris1.role} - ${sekretaris1.name}`}
                        className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="p-2 text-center">
                    <div className="text-[10px] font-semibold tracking-[0.18em] text-primary/80 uppercase mb-1">
                      {sekretaris1.role}
                    </div>
                    <div className="text-sm font-semibold capitalize">
                      {sekretaris1.name}
                    </div>
                  </div>
                </div>
              )}

              {sekretaris2 && (
                <div className="rounded-2xl border overflow-hidden hover:shadow-md transition group bg-background">
                  <div className="bg-muted flex justify-center py-3">
                    <div className="w-20 h-20">
                      <img
                        src={sekretaris2.img}
                        alt={`${sekretaris2.role} - ${sekretaris2.name}`}
                        className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="p-2 text-center">
                    <div className="text-[10px] font-semibold tracking-[0.18em] text-primary/80 uppercase mb-1">
                      {sekretaris2.role}
                    </div>
                    <div className="text-sm font-semibold capitalize">
                      {sekretaris2.name}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bendahara */}
            <div className="grid max-w-md mx-auto gap-3 grid-cols-2">
              {bendahara1 && (
                <div className="rounded-2xl border overflow-hidden hover:shadow-md transition group bg-background">
                  <div className="bg-muted flex justify-center py-3">
                    <div className="w-20 h-20">
                      <img
                        src={bendahara1.img}
                        alt={`${bendahara1.role} - ${bendahara1.name}`}
                        className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="p-2 text-center">
                    <div className="text-[10px] font-semibold tracking-[0.18em] text-primary/80 uppercase mb-1">
                      {bendahara1.role}
                    </div>
                    <div className="text-sm font-semibold capitalize">
                      {bendahara1.name}
                    </div>
                  </div>
                </div>
              )}

              {bendahara2 && (
                <div className="rounded-2xl border overflow-hidden hover:shadow-md transition group bg-background">
                  <div className="bg-muted flex justify-center py-3">
                    <div className="w-20 h-20">
                      <img
                        src={bendahara2.img}
                        alt={`${bendahara2.role} - ${bendahara2.name}`}
                        className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="p-2 text-center">
                    <div className="text-[10px] font-semibold tracking-[0.18em] text-primary/80 uppercase mb-1">
                      {bendahara2.role}
                    </div>
                    <div className="text-sm font-semibold capitalize">
                      {bendahara2.name}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Anggota Kelas */}
      <section id="anggota" className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            kicker="Kebersamaan"
            title="Anggota Kelas XI-MP-4"
            subtitle="Setiap orang punya warna dan cerita sendiri, disatukan dalam satu kelas yang dinamis dan bersemangat."
          />

          {/* List anggota: tiap orang hanya quote */}
          <div className="mt-10 space-y-12">
            {currentMembers.map((member) => (
              <article key={member.id} className="relative">
                {/* bubble quote */}
                <div className="relative rounded-3xl bg-card shadow-[0_24px_60px_rgba(15,23,42,0.12)] p-6 md:p-8">
                  <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                    “{member.quote}”
                  </p>
                  <div className="absolute -bottom-4 left-10 w-7 h-7 bg-card rotate-45 shadow-[0_24px_60px_rgba(15,23,42,0.12)]" />
                </div>

                {/* avatar + nama + role */}
                <div className="flex items-center gap-3 mt-8 pl-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-background shadow-md">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-sm md:text-base">
                      {member.name}
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-primary font-semibold mt-1">
                      {member.role}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination Anggota */}
          <div className="mt-10 flex justify-center gap-2 flex-wrap">
            <button
              type="button"
              onClick={() =>
                setCurrentMemberPage((p) => Math.max(1, p - 1))
              }
              disabled={currentMemberPage === 1}
              className="px-3 py-1.5 text-xs md:text-sm border rounded-lg disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Previous
            </button>

            {Array.from({ length: totalMemberPages }).map((_, index) => {
              const page = index + 1;
              const isActive = page === currentMemberPage;
              return (
                <button
                  key={page}
                  type="button"
                  onClick={() => setCurrentMemberPage(page)}
                  className={
                    "min-w-8 px-3 py-1.5 text-xs md:text-sm rounded-lg border " +
                    (isActive
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-foreground/70 hover:bg-muted")
                  }
                >
                  {page}
                </button>
              );
            })}

            <button
              type="button"
              onClick={() =>
                setCurrentMemberPage((p) =>
                  Math.min(totalMemberPages, p + 1)
                )
              }
              disabled={currentMemberPage === totalMemberPages}
              className="px-3 py-1.5 text-xs md:text-sm border rounded-lg disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            kicker="Kenangan"
            title="Gallery"
            subtitle="Lihat momen spesial yang kami abadikan bersama."
          />

          {/* grid foto (6 per halaman) */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {currentGalleryItems.map((item, idx) => (
              <div
                key={item.src}
                className="relative rounded-2xl overflow-hidden border aspect-[4/3] bg-muted"
              >
                <img
                  src={item.src}
                  alt={`Foto kelas XI-MP-4 ${idx + 1} - ${item.label}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    if (img.src !== galleryFallback) {
                      img.src = galleryFallback;
                    }
                  }}
                />
                {/* label kecil pojok kiri bawah */}
                <div className="absolute left-2 bottom-2 rounded-full bg-black/60 px-2 py-1">
                  <span className="text-[10px] leading-none text-white">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Gallery */}
          <div className="mt-6 flex justify-center gap-2 flex-wrap">
            <button
              type="button"
              onClick={() => setGalleryPage((p) => Math.max(1, p - 1))}
              disabled={galleryPage === 1}
              className="px-3 py-1.5 text-xs md:text-sm border rounded-lg disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Previous
            </button>

            {Array.from({ length: totalGalleryPages }).map((_, index) => {
              const page = index + 1;
              const isActive = page === galleryPage;
              return (
                <button
                  key={page}
                  type="button"
                  onClick={() => setGalleryPage(page)}
                  className={
                    "min-w-8 px-3 py-1.5 text-xs md:text-sm rounded-lg border " +
                    (isActive
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-foreground/70 hover:bg-muted")
                  }
                >
                  {page}
                </button>
              );
            })}

            <button
              type="button"
              onClick={() =>
                setGalleryPage((p) =>
                  Math.min(totalGalleryPages, p + 1)
                )
              }
              disabled={galleryPage === totalGalleryPages}
              className="px-3 py-1.5 text-xs md:text-sm border rounded-lg disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>

          {/* Tombol ke vidio */}
          <div className="mt-6 text-center">
            <a
              href={links.vidio}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90"
            >
              Lihat Halaman Video/Playlist ("vidio")
            </a>
          </div>
        </div>
      </section>

      {/* Prestasi */}
      <section id="prestasi" className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            kicker="Bangga"
            title="Prestasi Member XI-MP-4"
            subtitle={
              <>Dua blok cerita tentang semangat berkompetisi dan karya yang membanggakan.</>
            }
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border p-6">
              <h3 className="text-lg font-bold mb-2">Juara &amp; Apresiasi</h3>
              <p className="text-sm text-muted-foreground">
                Rangkaian prestasi akademik maupun non-akademik—dari sains,
                olahraga, seni, hingga kepemimpinan—menjadi bukti konsistensi
                kerja keras, kolaborasi, dan mental juara.
              </p>
            </div>
            <div className="rounded-2xl border p-6">
              <h3 className="text-lg font-bold mb-2">Dampak &amp; Inspirasi</h3>
              <p className="text-sm text-muted-foreground">
                Prestasi bukan hanya piala, melainkan jejak inspirasi untuk adik
                kelas, sahabat, dan komunitas. Kita bertumbuh sambil menularkan
                semangat positif.
              </p>
            </div>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            *Juga disebut: Prestasi Member XII-MP-4 (inkonsistensi sengaja
            meniru referensi).
          </p>
        </div>
      </section>

      {/* Quote / Penutup */}
      <section id="quote" className="py-16">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl border p-8 md:p-10 text-center bg-muted/40">
            <p className="text-lg md:text-xl font-semibold">
              "Masa SMA adalah petualangan yang menjahit tawa, tangis, dan mimpi
              menjadi satu kain kenangan."
            </p>
            <p className="mt-2 text-primary font-bold">
              #PetualanganKelasXI-MP-4
            </p>
          </div>
        </div>
      </section>

      {/* Media Sosial (bawah saja) */}
      <SocialBlock />

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto px-4 py-12 grid gap-8 md:grid-cols-4">
          <div>
            <div className="text-2xl font-extrabold">XI-MP-4</div>
            <p className="text-sm text-muted-foreground mt-2">
              Website kelas sederhana dengan rasa kebersamaan yang hangat.
            </p>
          </div>
          <div>
            <div className="text-sm font-bold mb-3">Quick Links</div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#struktur" className="hover:underline">
                  Class Structure
                </a>
              </li>
              <li>
                <a href="#anggota" className="hover:underline">
                  Class Member
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:underline">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#prestasi" className="hover:underline">
                  Achievement
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-bold mb-3">CONTACT</div>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>kab.bogor, babakan madang</li>
              <li>Jl. Citaringgul</li>
              <li>
                <a className="underline" href="mailto:tnnt15822@gmail.com">
                  tnnt15822@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-3 text-2xl" />
            <p className="text-sm mt-4">
              Website By{" "}
              <a
                href={links.instagramVann}
                target="_blank"
                rel="noreferrer"
                className="underline font-semibold"
              >
                VannSyha
              </a>
            </p>
          </div>
        </div>
        <div className="py-4 text-center text-xs text-muted-foreground border-t">
          © {new Date().getFullYear()} XI-MP-4. All rights reserved.
        </div>
      </footer>
    </div>
  );
   }
