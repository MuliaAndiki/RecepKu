🍳 Recepku — Platform Berbagi Resep Masakan
Recepku adalah aplikasi berbagi resep yang memungkinkan pengguna untuk membuat, melihat, menghapus resep, dan mengedit profil mereka. Dibangun oleh tim yang bersemangat dalam dunia kuliner dan teknologi:

👥 Tim Pengembang

Mulia Andiki (Frontend)

Akrima Usri (UI/UX)

Cut Renata (UI/UX)

Muhammad Faruqi (BackEnd)

Yafi Hidayatullah 2308107010059 (UI/UX)

✨ Fitur Utama (CRUD)
Create (C): Pengguna dapat menambahkan resep baru lengkap dengan nama masakan, bahan-bahan, langkah memasak, dan foto.

Read (R): Pengguna dapat melihat daftar resep yang telah dibagikan oleh pengguna lain.

Update (U): Pengguna dapat mengubah data profil mereka seperti nama, email, dan foto profil.

Delete (D): Pengguna dapat menghapus resep yang telah mereka buat.

⚙️ Teknologi yang Digunakan
💻 Frontend
Next.js (React Framework)

TypeScript

Figma (UI/UX Design)

🔧 Backend
Express.js

MongoDB

📂 Struktur Proyek
bash
Copy
Edit
recepku/
├── UIUX /# Figma https://www.figma.com/design/W7rgZKJmDUxmQhD5ZGRiOL/PBW-gacor?node-id=9-3&t=l6vl4KDhks87a4UY-1
├── frontend/ # Next.js + TypeScript
└── backend/ # Express.js + MongoDB https://github.com/mfaruqi35/recepku-backend.git
📦 Cara Menjalankan Aplikasi

1. Clone Repository
   bash
   Copy
   Edit
   git clone https://github.com/username/recepku.git
   cd recepku
2. Jalankan Frontend
   bash
   Copy
   Edit
   cd frontend
   npm install
   npm run dev
3. Jalankan Backend
   bash
   Copy
   Edit
   cd backend
   npm install
   npm run dev
4. Setup .env
   Pastikan environment variable sudah dikonfigurasi dengan benar untuk koneksi MongoDB dan pengaturan server.

📝 Catatan
Backend akan menyediakan endpoint untuk membuat dan menghapus resep, serta memperbarui data profil.

Pastikan MongoDB berjalan lokal atau menggunakan MongoDB Atlas.

❤️ Penutup
Recepku hadir sebagai ruang berbagi bagi pecinta kuliner. Temukan resep menarik, unggah kreasi masakanmu, dan tunjukkan siapa kamu lewat profilmu!

Link Desain Figma: https://www.figma.com/design/W7rgZKJmDUxmQhD5ZGRiOL/PBW-gacor?node-id=0-1&t=wiYZ4aW2xRM52Zne-1

Link Repository Backend: https://github.com/mfaruqi35/recepku-backend.git
