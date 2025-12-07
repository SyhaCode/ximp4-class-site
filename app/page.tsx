"use client";

import React, { useEffect, useState } from "react";

type Role = {
  role: string;
  name: string;
  img: string;
};

type Member = {
  id: number;
  name: string;
  role: string;
  img: string;
  quote: string;
};

type GalleryItem = {
  src: string;
  label: string;
};

const roles: Role[] = [
  { role: "Wali Kelas", name: "Windra", img: "https://i.pravatar.cc/150?img=1" },
  { role: "Ketua Kelas", name: "Ara", img: "https://i.pravatar.cc/150?img=2" },
  { role: "Wakil Ketua Kelas", name: "Arya", img: "https://i.pravatar.cc/150?img=3" },
  { role: "Sekretaris 1", name: "Raisa", img: "https://i.pravatar.cc/150?img=4" },
  { role: "Sekretaris 2", name: "Ica", img: "https://i.pravatar.cc/150?img=5" },
  { role: "Bendahara 1", name: "Anita", img: "https://i.pravatar.cc/150?img=6" },
  { role: "Bendahara 2", name: "Indria", img: "https://i.pravatar.cc/150?img=7" },
];

const links = {
  instagram: "https://instagram.com/",
  confess: "https://example.com/confess",
  tiktok: "https://tiktok.com/@",
  vidio: "https://example.com/playlist",
  instagramVann: "https://instagram.com/van_nnn",
};

const galleryItems: GalleryItem[] = [
  { src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop", label: "Foto Kelas – Hari Pertama" },
  { src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1600&auto=format&fit=crop", label: "Upacara Bendera" },
  { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop", label: "MPLS / MOS" },
  { src: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1600&auto=format&fit=crop", label: "Kegiatan Praktek" },
  { src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1600&auto=format&fit=crop", label: "Latihan Upacara" },
  { src: "https://images.unsplash.com/photo-1503676382389-4809596d5290?q=80&w=1600&auto=format&fit=crop", label: "Study Tour" },
  { src: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop", label: "Class Meeting" },
  { src: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=1600&auto=format&fit=crop", label: "Lomba 17 Agustus" },
  { src: "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?q=80&w=1600&auto=format&fit=crop", label: "Pentas Seni" },
  { src: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop", label: "Foto Akhir Semester" },
];

const classMembers: Member[] = [
  {
    id: 1,
    name: "Ara",
    role: "KETUA KELAS",
    img: "https://i.pravatar.cc/150?img=11",
    quote: "Kalau kita kompak, tugas seberat apa pun bisa kerasa lebih ringan bareng-bareng.",
  },
  {
    id: 2,
    name: "Arya",
    role: "WAKIL KELAS",
    img: "https://i.pravatar.cc/150?img=12",
    quote: "Nggak apa-apa capek, yang penting kita tetap saling jaga dan saling dorong buat maju.",
  },
  {
    id: 3,
    name: "Raisa",
    role: "TIM DOKUMENTASI",
    img: "https://i.pravatar.cc/150?img=13",
    quote: "Setiap momen kecil di kelas layak jadi kenangan besar di masa depan.",
  },
  {
    id: 4,
    name: "Ica",
    role: "TIM KREATIF",
    img: "https://i.pravatar.cc/150?img=14",
    quote: "Belajar itu penting, tapi menikmati prosesnya bareng teman-teman jauh lebih berharga.",
  },
  {
    id: 5,
    name: "Anita",
    role: "BENDAHARA",
    img: "https://i.pravatar.cc/150?img=15",
    quote: "Transparan, amanah, dan tetap santai—itu kunci biar keuangan kelas nggak tegang.",
  },
  {
    id: 6,
    name: "Indria",
    role: "SUPPORT SYSTEM",
    img: "https://i.pravatar.cc/150?img=16",
    quote: "Kalau kamu capek, istirahat sebentar nggak apa-apa. Yang penting jangan berhenti bermimpi.",
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
    quote: "Nilai tinggi itu bonus, yang utama adalah kita ngerti dan bisa pakai ilmunya.",
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
    quote: "Tugas boleh banyak, tapi kita lebih banyak lagi cara buat tertawa.",
  },
  {
    id: 30,
    name: "Siswa 30",
    role: "ANGGOTA KELAS",
    img: "https://i.pravatar.cc/150?img=40",
    quote: "Suatu saat nanti, kita bakal kangen ributnya kelas ini.",
  },
];

function useCountUp(target = 0, duration = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frameId: number;
    const start = performance.now();
    const from = 0;
    const to = Number(target) || 0;

    const frame = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(from + (to - from) * eased));
      if (progress < 1) {
        frameId = requestAnimationFrame(frame);
      }
    };

    frameId = requestAnimationFrame(frame);

    return () => cancelAnimationFrame(frameId);
  }, [target, duration]);

  return value;
}

function SectionTitle(props: { kicker?: string; title: string; subtitle?: string }) {
  const { kicker, title, subtitle } = props;
  return (
    <div className="text-center mb-8">
      {kicker && (
        <p className="text-xs uppercase tracking-[0.2em] text-primary mb-2">
          {kicker}
        </p>
      )}
      <h2 className="text-2xl md:text-3xl font-extrabold mb-2">{title}</h2>
      {subtitle && <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}

export default function XIMP4Site() {
  const total = useCountUp(30);
  const boys = useCountUp(15);
  const girls = useCountUp(15);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <header className="sticky top-0 z-20 border-b bg-background/80 backdrop-blur">
        <div className="container px-4 h-14 flex items-center justify-between">
          <a href="#home" className="font-extrabold tracking-tight text-lg">
            XI-MP-4
          </a>
          <nav className="hidden md:flex gap-4 text-sm">
            <a href="#tentang" className="hover:text-primary">Tentang</a>
            <a href="#struktur" className="hover:text-primary">Struktur</a>
            <a href="#anggota" className="hover:text-primary">Anggota</a>
            <a href="#gallery" className="hover:text-primary">Gallery</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="pt-20 pb-16">
        <div className="container px-4 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3">
              XI-MP-4 SMAGA
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Satu Kelas, Banyak Cerita.
            </h1>
            <p className="mt-4 text-sm md:text-base text-muted-foreground">
              Ruang belajar, bercanda, berjuang, dan tumbuh bareng. Inilah rumah kedua
              untuk 30 siswa yang penuh mimpi dan ambisi.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#tentang"
                className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90"
              >
                Mulai Jelajah
              </a>
              <a
                href={links.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold border hover:bg-muted"
              >
                Lihat Instagram Kelas
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden border shadow-lg aspect-[4/3] bg-muted">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop"
                alt="Suasana belajar kelas"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tentang + Stats */}
      <section id="tentang" className="py-16 border-t">
        <div className="container px-4">
          <SectionTitle
            kicker="Tentang Kami"
            title="Tentang XI-MP-4"
            subtitle="Suasana belajar yang saling mendukung, penuh rasa ingin tahu, dan berani mencoba hal baru. Di sini, setiap hari adalah kesempatan untuk bertumbuh, berkarya, dan jadi versi terbaik diri sendiri."
          />

          <div className="grid gap-4 max-w-2xl mx-auto text-center md:grid-cols-3">
            <div className="rounded-2xl border p-4">
              <div className="text-3xl md:text-4xl font-extrabold">{total}</div>
              <div className="text-xs text-muted-foreground mt-1">Students</div>
            </div>
            <div className="rounded-2xl border p-4">
              <div className="text-3xl md:text-4xl font-extrabold">{boys}</div>
              <div className="text-xs text-muted-foreground mt-1">Boys</div>
            </div>
            <div className="rounded-2xl border p-4">
              <div className="text-3xl md:text-4xl font-extrabold">{girls}</div>
              <div className="text-xs text-muted-foreground mt-1">Girls</div>
            </div>
          </div>
        </div>
      </section>

      {/* Struktur Kelas */}
      <section id="struktur" className="py-16 border-t">
        <div className="container px-4">
          <SectionTitle
            kicker="Kepengurusan"
            title="Struktur Kelas XI-MP-4"
            subtitle="Kolaborasi peran yang rapi agar kelas berjalan hangat, kompak, dan produktif."
          />

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 max-w-4xl mx-auto">
            {roles.map((item) => (
              <div
                key={item.role}
                className="rounded-2xl border p-4 flex flex-col items-center text-center bg-card"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden border mb-3">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold">
                  {item.role}
                </div>
                <div className="mt-1 font-semibold capitalize">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Anggota Kelas */}
      <section id="anggota" className="py-16 border-t">
        <div className="container px-4">
          <SectionTitle
            kicker="Kebersamaan"
            title="Anggota Kelas XI-MP-4"
            subtitle="Setiap orang punya warna dan cerita sendiri, disatukan dalam satu kelas yang dinamis dan bersemangat."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {classMembers.map((member) => (
              <article key={member.id} className="rounded-2xl border p-4 flex flex-col h-full bg-card">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{member.name}</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-primary font-semibold">
                      {member.role}
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                  “{member.quote}”
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16 border-t">
        <div className="container px-4">
          <SectionTitle
            kicker="Kenangan"
            title="Gallery XI-MP-4"
            subtitle="Beberapa momen spesial yang sempat diabadikan bersama."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <div key={item.src} className="relative rounded-2xl overflow-hidden border bg-muted aspect-[4/3]">
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover"
                />
                <div className="absolute left-2 bottom-2 rounded-full bg-black/60 px-2 py-1">
                  <span className="text-[10px] leading-none text-white">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <a
              href={links.vidio}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border text-sm font-semibold hover:bg-muted"
            >
              Lihat Halaman Video / Playlist
            </a>
          </div>
        </div>
      </section>

      {/* Media Sosial */}
      <section id="media" className="py-16 border-t">
        <div className="container px-4">
          <SectionTitle
            kicker="Ikuti Kami"
            title="Media Sosial XI-MP-4"
            subtitle="Tetap terhubung dengan cerita harian, pengumuman, dan keseruan kelas."
          />

          <div className="grid gap-4 sm:grid-cols-3">
            <a
              href={links.instagram}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border p-5 hover:bg-muted transition"
            >
              <div className="text-sm font-semibold mb-1">Class Instagram</div>
              <p className="text-xs text-muted-foreground">
                Lihat momen terbaru &amp; feed estetik kelas XI-MP-4.
              </p>
            </a>
            <a
              href={links.confess}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border p-5 hover:bg-muted transition"
            >
              <div className="text-sm font-semibold mb-1">Confess Box</div>
              <p className="text-xs text-muted-foreground">
                Kirim pesan anonim yang positif untuk teman sekelas.
              </p>
            </a>
            <a
              href={links.tiktok}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border p-5 hover:bg-muted transition"
            >
              <div className="text-sm font-semibold mb-1">TikTok Kelas</div>
              <p className="text-xs text-muted-foreground">
                Kompilasi video pendek, bloopers, dan momen lucu lainnya.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container px-4 py-10 grid gap-8 md:grid-cols-4 text-sm">
          <div>
            <div className="text-2xl font-extrabold">XI-MP-4</div>
            <p className="mt-2 text-muted-foreground">
              Website kelas sederhana dengan rasa kebersamaan yang hangat.
            </p>
          </div>
          <div>
            <div className="font-semibold mb-2">Quick Links</div>
            <ul className="space-y-1 text-muted-foreground">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#struktur" className="hover:underline">Class Structure</a></li>
              <li><a href="#anggota" className="hover:underline">Class Member</a></li>
              <li><a href="#gallery" className="hover:underline">Gallery</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Contact</div>
            <ul className="space-y-1 text-muted-foreground">
              <li>Babakan Madang, Kab. Bogor</li>
              <li>Jl. Citaringgul</li>
              <li>
                <a href="mailto:tnnt15822@gmail.com" className="underline">
                  tnnt15822@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Credits</div>
            <p className="text-muted-foreground">
              Website by{" "}
              <a
                href={links.instagramVann}
                target="_blank"
                rel="noreferrer"
                className="underline font-semibold"
              >
                VannSyha
              </a>
              .
            </p>
          </div>
        </div>
        <div className="border-t py-4 text-center text-[11px] text-muted-foreground">
          © {new Date().getFullYear()} XI-MP-4. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
