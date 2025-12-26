/**
 * WeCare Survey Data
 * Struktur data untuk pertanyaan survei yang diorganisir per section
 */

const surveyData = {
    title: "ADM Safety Culture Level Survey 2025 [Foreman - Supervisor]",
    period: "01/01/2025 - 31/01/2026",
    instructions: [
        "Kuesioner ini merupakan kuesioner untuk menilai Safety Culture Level di PT. Astra Daihatsu Motor (ADM).",
        "Kuesioner ini terdiri dari 10 pertanyaan (nomor 1 s/d 10) dan setiap pertanyaan memiliki 4 pilihan jawaban.",
        "Pastikan anda membaca semua pilihan jawaban yang tersedia.",
        "Anda diminta untuk memilih salah satu pilihan jawaban yang dianggap paling sesuai dengan kondisi di ADM saat ini."
    ],
    sections: [
        {
            id: "A",
            title: "Section A - Rencana Kerja",
            questions: [
                {
                    number: 1,
                    text: " Rencana Kerja, termasuk Permit To Work",
                    required: true,
                    options: [
                        {
                            value: "a",
                            text: "Kompetensi menjadi isu penting. Karyawan memahami manfaat pelatihan dan terbuka kesempatan untuk meningkatkan skill. Kebutuhan pelatihan diawali dengan identifikasi dari karyawan."
                        },
                        {
                            value: "b",
                            text: "Rencana kerja dibuat berdasarkan terjadinya kesalahan sebelumnya. Rencana kerja dianggap sebagai suatu proses informal saja dan lebih ditekankan pada waktu yang dibutuhkan untuk penyelesaian pekerjaan."
                        },
                        {
                            value: "c",
                            text: "Perencanaan merupakan aktivitas standar yang kemudian ditindaklanjuti dan dievaluasi keefektifannya. Namun demikian, implementasinya tidak selalu efektif."
                        },
                        {
                            value: "d",
                            text: "Banyak rencana kerja hanya memfokuskan pada masalah perijinan saja. Sistem dan prosedur yang ada telah dianggap bagus. Namun tidak selalu konsisten dan masih kurang dilakukan evaluasi pada perencanaan kualitas."
                        }
                    ]
                },
                {
                    number: 2,
                    text: " Bagaimana pelaksanaan rapat HSE?",
                    required: true,
                    options: [
                        {
                            value: "a",
                            text: "Rapat HSE dilaksanakan secara rutin dengan agenda yang jelas dan tindak lanjut yang terukur. Semua level manajemen berpartisipasi aktif."
                        },
                        {
                            value: "b",
                            text: "Rapat HSE dilaksanakan jika ada insiden atau permintaan dari manajemen. Tidak ada agenda tetap dan tindak lanjut sering terabaikan."
                        },
                        {
                            value: "c",
                            text: "Rapat HSE dilaksanakan secara berkala namun partisipasi terbatas. Agenda sudah ada tetapi implementasi tindak lanjut belum konsisten."
                        },
                        {
                            value: "d",
                            text: "Rapat HSE jarang dilaksanakan. Jika ada, hanya formalitas tanpa pembahasan substansial dan tanpa dokumentasi yang memadai."
                        }
                    ]
                }
            ]
        },
        {
            id: "B",
            title: "Section B - HSE Meeting & Komunikasi",
            questions: [
                {
                    number: 3,
                    text: " Bagaimana komunikasi terkait isu-isu keselamatan kerja?",
                    required: true,
                    options: [
                        {
                            value: "a",
                            text: "Komunikasi keselamatan berjalan dua arah secara efektif. Karyawan bebas menyampaikan concern dan mendapat respons yang memadai dari manajemen."
                        },
                        {
                            value: "b",
                            text: "Komunikasi keselamatan hanya satu arah dari manajemen ke karyawan. Feedback dari karyawan jarang ditindaklanjuti."
                        },
                        {
                            value: "c",
                            text: "Ada upaya komunikasi dua arah namun belum optimal. Beberapa feedback ditindaklanjuti tetapi tidak semua."
                        },
                        {
                            value: "d",
                            text: "Komunikasi keselamatan sangat terbatas. Informasi hanya disampaikan melalui poster atau pengumuman tanpa dialog."
                        }
                    ]
                },
                {
                    number: 4,
                    text: " Bagaimana keterlibatan karyawan dalam program HSE?",
                    required: true,
                    options: [
                        {
                            value: "a",
                            text: "Karyawan aktif terlibat dalam berbagai program HSE seperti safety patrol, hazard reporting, dan improvement suggestion. Ada reward system yang jelas."
                        },
                        {
                            value: "b",
                            text: "Keterlibatan karyawan minimal dan hanya jika diwajibkan. Tidak ada inisiatif dari karyawan untuk program HSE."
                        },
                        {
                            value: "c",
                            text: "Beberapa karyawan terlibat aktif namun mayoritas pasif. Program HSE masih didominasi oleh tim HSE saja."
                        },
                        {
                            value: "d",
                            text: "Karyawan tidak terlibat sama sekali dalam program HSE. Semua program dijalankan oleh tim HSE tanpa partisipasi karyawan."
                        }
                    ]
                }
            ]
        },
        {
            id: "C",
            title: "Section C - Prosedur Kerja",
            questions: [
                {
                    number: 5,
                    text: " Bagaimana kepatuhan terhadap prosedur kerja yang ada?",
                    required: true,
                    options: [
                        {
                            value: "a",
                            text: "Prosedur yang ada dikembangkan dan direview secara berkala oleh seluruh karyawan. Prosedur yang ada dikembangkan untuk menyesuaikan dengan tugas pekerjaan. Beberapa prosedur yang tidak lagi sesuai dan tidak dibutuhkan maka dihapuskan."
                        },
                        {
                            value: "b",
                            text: "Telah ada review dan pengembangan prosedur yang dilakukan untuk meyakinkan bahwa prosedur-prosedur yang ada telah sesuai dengan perkembangan pekerjaan. Jika karyawan merasa bahwa mereka harus bekerja diluar prosedur, maka prosedur tersebut direview kembali."
                        },
                        {
                            value: "c",
                            text: "Prosedur yang ada hanya direview setelah terjadi kecelakaan. Tim HSE yang melakukan review, dan pengembangan prosedur."
                        },
                        {
                            value: "d",
                            text: "Telah ada review dan pengembangan prosedur. Banyak waktu dan upaya yang diluangkan untuk mengembangkan dan mereview prosedur, namun kadang-kadang tidak sesuai dengan kebutuhan yang ada. Divisi HSE yang mengembangkan prosedur keselamatan dan memaksakan agar prosedur tersebut diikuti."
                        }
                    ]
                },
                {
                    number: 6,
                    text: " Bagaimana pengelolaan dokumen prosedur kerja?",
                    required: true,
                    options: [
                        {
                            value: "a",
                            text: "Dokumen prosedur terkelola dengan baik dalam sistem digital yang mudah diakses. Update dilakukan secara real-time dan ada notifikasi untuk perubahan."
                        },
                        {
                            value: "b",
                            text: "Dokumen prosedur ada tetapi tersebar di berbagai lokasi. Sulit menemukan versi terbaru dan sering terjadi penggunaan dokumen kadaluarsa."
                        },
                        {
                            value: "c",
                            text: "Ada sistem pengelolaan dokumen namun belum sepenuhnya digital. Proses update memakan waktu dan distribusi tidak merata."
                        },
                        {
                            value: "d",
                            text: "Tidak ada sistem pengelolaan dokumen yang jelas. Prosedur hanya dalam bentuk hardcopy yang tidak terkontrol."
                        }
                    ]
                }
            ]
        },
        {
            id: "D",
            title: "Section D - Incident Report & Investigation",
            questions: [
                {
                    number: 7,
                    text: "Bagaimana proses pelaporan insiden di tempat kerja?",
                    required: true,
                    options: [
                        {
                            value: "a",
                            text: "Semua insiden termasuk near miss dilaporkan tanpa takut akan konsekuensi negatif. Ada sistem pelaporan yang mudah dan cepat diakses."
                        },
                        {
                            value: "b",
                            text: "Hanya insiden besar yang dilaporkan. Karyawan enggan melaporkan near miss karena takut disalahkan atau ada konsekuensi negatif."
                        },
                        {
                            value: "c",
                            text: "Insiden dilaporkan tetapi tidak konsisten. Beberapa near miss dilaporkan namun banyak yang tidak tercatat."
                        },
                        {
                            value: "d",
                            text: "Pelaporan insiden sangat minim. Karyawan cenderung menyembunyikan insiden untuk menghindari masalah."
                        }
                    ]
                },
                {
                    number: 8,
                    text: " Bagaimana investigasi insiden dilakukan?",
                    required: true,
                    options: [
                        {
                            value: "a",
                            text: "Investigasi dilakukan secara menyeluruh untuk menemukan root cause. Fokus pada perbaikan sistem bukan mencari kesalahan individu. Hasil investigasi disebarluaskan sebagai pembelajaran."
                        },
                        {
                            value: "b",
                            text: "Investigasi dilakukan hanya untuk insiden besar dan fokus mencari siapa yang salah. Tindakan korektif terbatas pada individu yang terlibat."
                        },
                        {
                            value: "c",
                            text: "Investigasi dilakukan tetapi tidak selalu mendalam. Root cause kadang ditemukan tetapi tindak lanjut tidak konsisten."
                        },
                        {
                            value: "d",
                            text: "Investigasi jarang dilakukan atau hanya formalitas. Tidak ada pembelajaran yang diambil dari insiden yang terjadi."
                        }
                    ]
                }
            ]
        },
        {
            id: "E",
            title: "Section E - Safety Leadership",
            questions: [
                {
                    number: 9,
                    text: " Bagaimana komitmen manajemen terhadap keselamatan kerja?",
                    required: true,
                    options: [
                        {
                            value: "a",
                            text: "Manajemen menunjukkan komitmen nyata melalui tindakan, bukan hanya kata-kata. Safety menjadi prioritas utama dalam setiap keputusan bisnis."
                        },
                        {
                            value: "b",
                            text: "Manajemen menyatakan komitmen tetapi tindakan tidak konsisten. Production seringkali lebih diprioritaskan daripada safety."
                        },
                        {
                            value: "c",
                            text: "Ada komitmen dari sebagian manajemen tetapi belum merata. Beberapa manajer lebih memprioritaskan safety daripada yang lain."
                        },
                        {
                            value: "d",
                            text: "Komitmen manajemen terhadap safety sangat rendah. Safety dianggap sebagai cost center dan penghambat produktivitas."
                        }
                    ]
                },
                {
                    number: 10,
                    text: " Laporan Bahaya dan tindakan yang tidak aman",
                    required: true,
                    options: [
                        {
                            value: "a",
                            text: "Laporan keselamatan bersifat sederhana dan faktual. Selain itu isinya cenderung memfokuskan pada penentuan bagian mana yang menyebabkan timbulnya suatu insiden. Perusahaan tidak melakukan tindakan pelacakan setelah laporan dikumpulkan."
                        },
                        {
                            value: "b",
                            text: "Telah ada laporan keselamatan dalam format baku, yg dilengkapi dokumen penunjang. Seluruh bagian pada laporan harus dilengkapi."
                        },
                        {
                            value: "c",
                            text: "Laporan keselamatan lebih mencari faktor 'mengapa' dibandingkan faktor 'apa' dan 'kapan'. Mengutamakan pengumpulan laporan yang cepat, dan diperkenankan untuk mengosongkan beberapa bagian dalam formulir untuk diisi kemudian."
                        },
                        {
                            value: "d",
                            text: "Manajemen senior secara rutin terlibat dan menetapkan sasaran laporan. Laporan keselamatan mudah untuk disebarkan ke seluruh organisasi dengan menggunakan database yang dapat diakses secara luas."
                        }
                    ]
                }
            ]
        }
    ]
};
