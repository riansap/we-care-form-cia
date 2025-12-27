/**
 * WeCare Survey Data — Revised 2025
 * Survei internal ADM: Beban Kerja, Tenaga Kerja, Forecasting APD, WeCare, Optimalisasi Stok
 */

const surveyData = {
    title: "Survei Internal ADM: Beban Kerja, Ketersediaan APD & Layanan WeCare",
    period: "01/01/2025 - 31/12/2025",
    instructions: [
        "Survei ini bertujuan untuk memahami kondisi aktual terkait beban kerja, ketersediaan tenaga kerja, sistem pengadaan dan pengelolaan APD, serta efektivitas layanan WeCare di PT. Astra Daihatsu Motor.",
        "Survei terdiri dari 5 bagian dengan total 27 pertanyaan. Setiap pertanyaan memiliki 4 pilihan jawaban.",
        "Harap pilih satu jawaban yang paling mencerminkan pengalaman atau persepsi Anda saat ini.",
        "Jawaban Anda bersifat anonim dan hanya digunakan untuk perbaikan sistem kerja internal."
    ],
    sections: [
        {
            id: "beban-kerja",
            title: "Beban Kerja",
            questions: [
                {
                    number: 1,
                    text: "Volume pekerjaan yang saya terima sesuai dengan tanggung jawab jabatan saya.",
                    required: true,
                    options: [
                        { value: "a", text: "Sangat setuju — beban kerja sangat proporsional" },
                        { value: "b", text: "Setuju — umumnya sesuai, meski kadang ada fluktuasi" },
                        { value: "c", text: "Kurang setuju — sering melebihi kapasitas ideal" },
                        { value: "d", text: "Tidak setuju — beban kerja jauh melebihi tanggung jawab jabatan" }
                    ]
                },
                {
                    number: 2,
                    text: "Target penyelesaian pekerjaan di unit saya realistis dan dapat dicapai.",
                    required: true,
                    options: [
                        { value: "a", text: "Sangat realistis — target selalu dapat dicapai tanpa tekanan berlebihan" },
                        { value: "b", text: "Cukup realistis — sebagian besar target tercapai dengan usaha wajar" },
                        { value: "c", text: "Kurang realistis — sering memerlukan lembur atau tekanan tinggi" },
                        { value: "d", text: "Tidak realistis — target sulit atau hampir tidak mungkin dicapai" }
                    ]
                },
                {
                    number: 3,
                    text: "Beban kerja kadang mengharuskan saya bekerja dengan tempo yang cepat.",
                    required: true,
                    options: [
                        { value: "a", text: "Jarang — tempo kerja umumnya stabil dan terkontrol" },
                        { value: "b", text: "Kadang-kadang — terjadi hanya saat peak season atau insiden" },
                        { value: "c", text: "Sering — hampir setiap minggu harus bekerja dalam tekanan waktu" },
                        { value: "d", text: "Hampir selalu — ritme kerja sangat cepat dan melelahkan" }
                    ]
                },
                {
                    number: 4,
                    text: "Saya sering merasa kelelahan karena intensitas pekerjaan yang tinggi.",
                    required: true,
                    options: [
                        { value: "a", text: "Tidak pernah — saya mampu mengelola energi dengan baik" },
                        { value: "b", text: "Jarang — hanya saat beban kerja sangat tinggi sementara" },
                        { value: "c", text: "Cukup sering — terjadi beberapa kali dalam sebulan" },
                        { value: "d", text: "Sering — hampir setiap minggu saya merasa kelelahan fisik/mental" }
                    ]
                },
                {
                    number: 5,
                    text: "Fasilitas dan alat kerja membantu mempercepat penyelesaian tugas.",
                    required: true,
                    options: [
                        { value: "a", text: "Sangat membantu — alat modern dan kondisi prima" },
                        { value: "b", text: "Cukup membantu — alat berfungsi baik namun ada ruang peningkatan" },
                        { value: "c", text: "Kurang membantu — alat sering bermasalah atau tidak memadai" },
                        { value: "d", text: "Tidak membantu — fasilitas/alat menghambat produktivitas" }
                    ]
                },
                {
                    number: 6,
                    text: "Beban kerja akan lebih ringan apabila jumlah tenaga kerja ditambah.",
                    required: true,
                    options: [
                        { value: "a", text: "Sangat setuju — penambahan SDM sangat diperlukan" },
                        { value: "b", text: "Setuju — akan membantu, meski optimasi proses juga penting" },
                        { value: "c", text: "Netral — beban kerja bisa diatasi dengan redistribusi tugas" },
                        { value: "d", text: "Tidak setuju — masalah bukan pada jumlah, tapi pada efisiensi sistem" }
                    ]
                }
            ]
        },
        {
            id: "jumlah-tenaga-kerja",
            title: "Jumlah Tenaga Kerja",
            questions: [
                {
                    number: 1,
                    text: "Jumlah tenaga kerja saat ini memadai untuk kebutuhan operasional.",
                    required: true,
                    options: [
                        { value: "a", text: "Sangat memadai — kapasitas SDM melebihi kebutuhan" },
                        { value: "b", text: "Cukup memadai — mampu menangani beban normal" },
                        { value: "c", text: "Kurang memadai — sering kewalahan saat beban meningkat" },
                        { value: "d", text: "Tidak memadai — selalu kekurangan tenaga di berbagai shift/unit" }
                    ]
                },
                {
                    number: 2,
                    text: "Pembagian tugas antar karyawan dalam divisi sudah merata.",
                    required: true,
                    options: [
                        { value: "a", text: "Sangat merata — tidak ada beban berlebih pada individu tertentu" },
                        { value: "b", text: "Cukup merata — mayoritas tugas terdistribusi baik" },
                        { value: "c", text: "Kurang merata — beberapa rekan sering menanggung lebih banyak" },
                        { value: "d", text: "Tidak merata — beban sangat timpang, tergantung senioritas/relasi" }
                    ]
                },
                {
                    number: 3,
                    text: "Peningkatan volume produksi berdampak pada peningkatan beban kerja.",
                    required: true,
                    options: [
                        { value: "a", text: "Tidak berdampak — sistem penyesuaian otomatis (SDM/shift) responsif" },
                        { value: "b", text: "Ber dampak ringan — terkelola dengan baik melalui redistribusi" },
                        { value: "c", text: "Ber dampak cukup besar — memerlukan lembur rutin" },
                        { value: "d", text: "Ber dampak signifikan — mengganggu kesehatan & keselamatan kerja" }
                    ]
                },
                {
                    number: 4,
                    text: "Perusahaan menambah tenaga kerja ketika terdapat lonjakan pekerjaan.",
                    required: true,
                    options: [
                        { value: "a", text: "Selalu — respons cepat dan tepat sebelum beban kritis" },
                        { value: "b", text: "Biasanya — meski kadang terlambat beberapa hari" },
                        { value: "c", text: "Jarang — penambahan terjadi setelah keluhan banyak muncul" },
                        { value: "d", text: "Hampir tidak pernah — lonjakan ditanggung oleh SDM eksisting" }
                    ]
                },
                {
                    number: 5,
                    text: "Ketersediaan tenaga kerja yang ideal dapat mempercepat proses pekerjaan.",
                    required: true,
                    options: [
                        { value: "a", text: "Sangat setuju — SDM adalah faktor kunci efisiensi" },
                        { value: "b", text: "Setuju — dengan jumlah ideal, proses lebih lancar dan aman" },
                        { value: "c", text: "Ragu-ragu — efisiensi lebih bergantung pada sistem dibanding jumlah" },
                        { value: "d", text: "Tidak setuju — penambahan SDM tanpa perbaikan sistem justru boros" }
                    ]
                }
            ]
        },
        {
            id: "forecasting-apd",
            title: "Forecasting Pengadaan APD",
            questions: [
                {
                    number: 1,
                    text: "Data historis penukaran APD akurat dan dapat dipercaya.",
                    required: true,
                    options: [
                        { value: "a", text: "Sangat akurat — semua transaksi terekam lengkap & valid" },
                        { value: "b", text: "Cukup akurat — mayoritas data valid meski ada minor error" },
                        { value: "c", text: "Kurang akurat — sering ada duplikasi atau data tidak tercatat" },
                        { value: "d", text: "Tidak akurat — banyak transaksi tidak terdokumentasi" }
                    ]
                },
                {
                    number: 2,
                    text: "Data historis APD mudah diakses ketika diperlukan.",
                    required: true,
                    options: [
                        { value: "a", text: "Sangat mudah — tersedia real-time di dashboard digital" },
                        { value: "b", text: "Cukup mudah — bisa diakses dalam 1–2 hari kerja" },
                        { value: "c", text: "Kurang mudah — perlu proses permohonan dan tunggu lama" },
                        { value: "d", text: "Sulit diakses — tidak ada sistem terpusat, data tersebar manual" }
                    ]
                },
                {
                    number: 3,
                    text: "Analisis data diperlukan sebelum melakukan forecasting pengadaan APD.",
                    required: true,
                    options: [
                        { value: "a", text: "Selalu dilakukan — analisis jadi dasar utama keputusan" },
                        { value: "b", text: "Biasanya dilakukan — kecuali situasi darurat" },
                        { value: "c", text: "Jarang dilakukan — sering berdasarkan perkiraan kasar" },
                        { value: "d", text: "Tidak pernah — pengadaan berdasarkan stok habis atau permintaan ad-hoc" }
                    ]
                },
                {
                    number: 4,
                    text: "Tren penggunaan APD dapat diamati dari data historis.",
                    required: true,
                    options: [
                        { value: "a", text: "Sangat jelas — pola musiman/shift/unit terlihat dari visualisasi" },
                        { value: "b", text: "Cukup jelas — tren bisa diidentifikasi dengan olah data sederhana" },
                        { value: "c", text: "Kurang jelas — data mentah, perlu effort besar untuk analisis" },
                        { value: "d", text: "Tidak terlihat — tidak ada pola atau data tidak konsisten" }
                    ]
                },
                {
                    number: 5,
                    text: "Analisa data membantu memperkirakan kebutuhan APD dengan lebih tepat.",
                    required: true,
                    options: [
                        { value: "a", text: "Sangat membantu — forecasting akurat >90%" },
                        { value: "b", text: "Cukup membantu — akurasi sekitar 70–80%" },
                        { value: "c", text: "Sedikit membantu — masih sering kelebihan/kekurangan stok" },
                        { value: "d", text: "Tidak membantu — forecasting sering meleset signifikan" }
                    ]
                },
                {
                    number: 6,
                    text: "Hasil forecasting pengadaan APD sesuai dengan kebutuhan penggunaan di lapangan.",
                    required: true,
                    options: [
                        { value: "a", text: "Sangat sesuai — stok selalu adekuat tanpa kelebihan signifikan" },
                        { value: "b", text: "Cukup sesuai — minor adjustment masih diperlukan" },
                        { value: "c", text: "Kurang sesuai — sering terjadi kekurangan/kelebihan stok" },
                        { value: "d", text: "Tidak sesuai — forecasting tidak mencerminkan kebutuhan aktual" }
                    ]
                }
            ]
        },
        {
            id: "wecare",
            title: "One System Layanan WeCare",
            questions: [
                {
                    number: 1,
                    text: "WeCare mudah diakses untuk kebutuhan permintaan APD.",
                    required: true,
                    options: [
                        { value: "a", text: "Sangat mudah — akses via web/mobile, antarmuka intuitif" },
                        { value: "b", text: "Cukup mudah — ada sedikit kurva belajar awal" },
                        { value: "c", text: "Kurang mudah — sering error atau lambat saat submit" },
                        { value: "d", text: "Sulit diakses — proses bertele-tele atau sering down" }
                    ]
                },
                {
                    number: 2,
                    text: "WeCare memberikan respon cepat terhadap permintaan penukaran APD.",
                    required: true,
                    options: [
                        { value: "a", text: "Sangat cepat — permintaan diproses dalam hitungan jam" },
                        { value: "b", text: "Cepat — diproses dalam 1 hari kerja" },
                        { value: "c", text: "Lambat — butuh 2–3 hari kerja untuk respon awal" },
                        { value: "d", text: "Sangat lambat — lebih dari 3 hari atau sering tertunda" }
                    ]
                },
                {
                    number: 3,
                    text: "Proses administrasi melalui WeCare lebih praktis dibanding cara manual.",
                    required: true,
                    options: [
                        { value: "a", text: "Jauh lebih praktis — menghemat waktu dan mengurangi kesalahan" },
                        { value: "b", text: "Lebih praktis — meski kadang perlu input tambahan" },
                        { value: "c", text: "Hampir sama — tidak ada peningkatan signifikan" },
                        { value: "d", text: "Lebih merepotkan — proses digital justru memperpanjang alur" }
                    ]
                },
                {
                    number: 4,
                    text: "Informasi stok dan riwayat penukaran APD tercatat dengan jelas dalam sistem.",
                    required: true,
                    options: [
                        { value: "a", text: "Sangat jelas — riwayat lengkap, real-time, dan bisa dilacak per individu" },
                        { value: "b", text: "Cukup jelas — data tersedia tapi tampilan bisa lebih baik" },
                        { value: "c", text: "Kurang jelas — info stok sering tidak update atau ambigu" },
                        { value: "d", text: "Tidak jelas — sulit mencari riwayat penukaran atau cek stok" }
                    ]
                },
                {
                    number: 5,
                    text: "Data yang tersimpan pada WeCare berguna dalam proses pengambilan keputusan.",
                    required: true,
                    options: [
                        { value: "a", text: "Sangat berguna — menjadi dasar utama perencanaan & evaluasi" },
                        { value: "b", text: "Berguna — digunakan secara berkala untuk pelaporan" },
                        { value: "c", text: "Sedikit berguna — data belum terolah optimal" },
                        { value: "d", text: "Tidak berguna — data tidak diintegrasikan ke sistem pengambilan keputusan" }
                    ]
                }
            ]
        },
        {
            id: "optimalisasi-stok",
            title: "Optimalisasi Stok",
            questions: [
                {
                    number: 1,
                    text: "Stok APD selalu tersedia saat dibutuhkan.",
                    required: true,
                    options: [
                        { value: "a", text: "Sangat tersedia — tidak pernah kehabisan di semua lokasi" },
                        { value: "b", text: "Umumnya tersedia — kehabisan hanya pada item spesifik/rare" },
                        { value: "c", text: "Kadang tidak tersedia — kehabisan terjadi beberapa kali/bulan" },
                        { value: "d", text: "Sering tidak tersedia — permintaan sering ditolak karena stok kosong" }
                    ]
                },
                {
                    number: 2,
                    text: "Penggantian APD dapat diproses dalam waktu yang cepat.",
                    required: true,
                    options: [
                        { value: "a", text: "Sangat cepat — ≤1 jam dari permintaan disetujui" },
                        { value: "b", text: "Cepat — dalam 1 hari kerja" },
                        { value: "c", text: "Lambat — butuh 2–3 hari" },
                        { value: "d", text: "Sangat lambat — >3 hari atau sering tertunda" }
                    ]
                },
                {
                    number: 3,
                    text: "Sistem pengelolaan stok mencegah terjadinya kekurangan APD.",
                    required: true,
                    options: [
                        { value: "a", text: "Sangat efektif — kekurangan hampir tidak pernah terjadi" },
                        { value: "b", text: "Cukup efektif — kekurangan jarang dan cepat diatasi" },
                        { value: "c", text: "Kurang efektif — kekurangan masih sering terjadi" },
                        { value: "d", text: "Tidak efektif — sistem gagal mencegah kekurangan berulang" }
                    ]
                },
                {
                    number: 4,
                    text: "Sistem pengelolaan stok mencegah penumpukan APD berlebih.",
                    required: true,
                    options: [
                        { value: "a", text: "Sangat efektif — stok optimal, minim expired/obsolete" },
                        { value: "b", text: "Cukup efektif — ada sedikit kelebihan, tapi terkelola" },
                        { value: "c", text: "Kurang efektif — sering ada stok mengendap di gudang" },
                        { value: "d", text: "Tidak efektif — banyak APD kadaluarsa atau rusak karena menumpuk" }
                    ]
                },
                {
                    number: 5,
                    text: "APD yang diberikan memiliki kualitas baik dan konsisten.",
                    required: true,
                    options: [
                        { value: "a", text: "Sangat baik & konsisten — memenuhi standar tertinggi" },
                        { value: "b", text: "Baik — jarang ada keluhan kualitas" },
                        { value: "c", text: "Cukup — beberapa item mutu tidak stabil (misal ukuran, bahan)" },
                        { value: "d", text: "Buruk — sering tidak nyaman, rusak cepat, atau tidak sesuai fungsi" }
                    ]
                },
                {
                    number: 6,
                    text: "Forecasting pengadaan APD membantu menjaga ketersediaan stok.",
                    required: true,
                    options: [
                        { value: "a", text: "Sangat membantu — stok stabil sepanjang tahun" },
                        { value: "b", text: "Membantu — meski kadang perlu penyesuaian darurat" },
                        { value: "c", text: "Sedikit membantu — stok masih fluktuatif" },
                        { value: "d", text: "Tidak membantu — stok sering kosong atau menumpuk tanpa pola" }
                    ]
                }
            ]
        }
    ]
};