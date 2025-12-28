/**
 * WeCare Survey Data — Final 2025 (5-point Likert Scale)
 * Skala: 1 = Sangat Tidak Setuju, 2 = Tidak Setuju, 3 = Netral, 4 = Setuju, 5 = Sangat Setuju
 * Semua `value` berupa angka (1–5) untuk analisis langsung.
 */

const surveyData = {
  title: "Survei Internal ADM: Beban Kerja, Ketersediaan APD & Layanan WeCare",
  period: "01/01/2025 - 31/12/2025",
  instructions: [
    "Survei ini bertujuan untuk memahami kondisi aktual terkait beban kerja, ketersediaan tenaga kerja, sistem pengadaan dan pengelolaan APD, serta efektivitas layanan WeCare di PT. Astra Daihatsu Motor.",
    "Survei terdiri dari 5 bagian dengan total 27 pertanyaan. Setiap pertanyaan menggunakan skala 5 poin: 1 = Sangat Tidak Setuju, 2 = Tidak Setuju, 3 = Netral, 4 = Setuju, dan 5 = Sangat Setuju.",
    "Harap pilih satu jawaban yang paling mencerminkan pengalaman atau persepsi Anda saat ini.",
    "Jawaban Anda bersifat anonim dan hanya digunakan untuk perbaikan sistem kerja internal.",
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
            { value: 1, text: "1. Sangat Tidak Setuju" },
            { value: 2, text: "2. Tidak Setuju" },
            { value: 3, text: "3. Netral" },
            { value: 4, text: "4. Setuju" },
            { value: 5, text: "5. Sangat Setuju" },
          ],
        },
        {
          number: 2,
          text: "Target penyelesaian pekerjaan di unit saya realistis dan dapat dicapai.",
          required: true,
          options: [
            { value: 1, text: "1. Sangat Tidak Setuju" },
            { value: 2, text: "2. Tidak Setuju" },
            { value: 3, text: "3. Netral" },
            { value: 4, text: "4. Setuju" },
            { value: 5, text: "5. Sangat Setuju" },
          ],
        },
        {
          number: 3,
          text: "Beban kerja kadang mengharuskan saya bekerja dengan tempo yang cepat.",
          required: true,
          options: [
            { value: 1, text: "1. Sangat Tidak Setuju" },
            { value: 2, text: "2. Tidak Setuju" },
            { value: 3, text: "3. Netral" },
            { value: 4, text: "4. Setuju" },
            { value: 5, text: "5. Sangat Setuju" },
          ],
        },
        {
          number: 4,
          text: "Saya sering merasa kelelahan karena intensitas pekerjaan yang tinggi.",
          required: true,
          options: [
            { value: 1, text: "1. Sangat Tidak Setuju" },
            { value: 2, text: "2. Tidak Setuju" },
            { value: 3, text: "3. Netral" },
            { value: 4, text: "4. Setuju" },
            { value: 5, text: "5. Sangat Setuju" },
          ],
        },
        {
          number: 5,
          text: "Fasilitas dan alat kerja membantu mempercepat penyelesaian tugas.",
          required: true,
          options: [
            { value: 1, text: "1. Sangat Tidak Setuju" },
            { value: 2, text: "2. Tidak Setuju" },
            { value: 3, text: "3. Netral" },
            { value: 4, text: "4. Setuju" },
            { value: 5, text: "5. Sangat Setuju" },
          ],
        },
        {
          number: 6,
          text: "Beban kerja akan lebih ringan apabila jumlah tenaga kerja ditambah.",
          required: true,
          options: [
            { value: 1, text: "1. Sangat Tidak Setuju" },
            { value: 2, text: "2. Tidak Setuju" },
            { value: 3, text: "3. Netral" },
            { value: 4, text: "4. Setuju" },
            { value: 5, text: "5. Sangat Setuju" },
          ],
        },
      ],
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
            { value: 1, text: "1. Sangat Tidak Setuju" },
            { value: 2, text: "2. Tidak Setuju" },
            { value: 3, text: "3. Netral" },
            { value: 4, text: "4. Setuju" },
            { value: 5, text: "5. Sangat Setuju" },
          ],
        },
        {
          number: 2,
          text: "Pembagian tugas antar karyawan dalam divisi sudah merata.",
          required: true,
          options: [
            { value: 1, text: "1. Sangat Tidak Setuju" },
            { value: 2, text: "2. Tidak Setuju" },
            { value: 3, text: "3. Netral" },
            { value: 4, text: "4. Setuju" },
            { value: 5, text: "5. Sangat Setuju" },
          ],
        },
        {
          number: 3,
          text: "Peningkatan volume produksi berdampak pada peningkatan beban kerja.",
          required: true,
          options: [
            { value: 1, text: "1. Sangat Tidak Setuju" },
            { value: 2, text: "2. Tidak Setuju" },
            { value: 3, text: "3. Netral" },
            { value: 4, text: "4. Setuju" },
            { value: 5, text: "5. Sangat Setuju" },
          ],
        },
        {
          number: 4,
          text: "Perusahaan menambah tenaga kerja ketika terdapat lonjakan pekerjaan.",
          required: true,
          options: [
            { value: 1, text: "1. Sangat Tidak Setuju" },
            { value: 2, text: "2. Tidak Setuju" },
            { value: 3, text: "3. Netral" },
            { value: 4, text: "4. Setuju" },
            { value: 5, text: "5. Sangat Setuju" },
          ],
        },
        {
          number: 5,
          text: "Ketersediaan tenaga kerja yang ideal dapat mempercepat proses pekerjaan.",
          required: true,
          options: [
            { value: 1, text: "1. Sangat Tidak Setuju" },
            { value: 2, text: "2. Tidak Setuju" },
            { value: 3, text: "3. Netral" },
            { value: 4, text: "4. Setuju" },
            { value: 5, text: "5. Sangat Setuju" },
          ],
        },
      ],
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
            { value: 1, text: "1. Sangat Tidak Setuju" },
            { value: 2, text: "2. Tidak Setuju" },
            { value: 3, text: "3. Netral" },
            { value: 4, text: "4. Setuju" },
            { value: 5, text: "5. Sangat Setuju" },
          ],
        },
        {
          number: 2,
          text: "Data historis APD mudah diakses ketika diperlukan.",
          required: true,
          options: [
            { value: 1, text: "1. Sangat Tidak Setuju" },
            { value: 2, text: "2. Tidak Setuju" },
            { value: 3, text: "3. Netral" },
            { value: 4, text: "4. Setuju" },
            { value: 5, text: "5. Sangat Setuju" },
          ],
        },
        {
          number: 3,
          text: "Analisis data diperlukan sebelum melakukan forecasting pengadaan APD.",
          required: true,
          options: [
            { value: 1, text: "1. Sangat Tidak Setuju" },
            { value: 2, text: "2. Tidak Setuju" },
            { value: 3, text: "3. Netral" },
            { value: 4, text: "4. Setuju" },
            { value: 5, text: "5. Sangat Setuju" },
          ],
        },
        {
          number: 4,
          text: "Tren penggunaan APD dapat diamati dari data historis.",
          required: true,
          options: [
            { value: 1, text: "1. Sangat Tidak Setuju" },
            { value: 2, text: "2. Tidak Setuju" },
            { value: 3, text: "3. Netral" },
            { value: 4, text: "4. Setuju" },
            { value: 5, text: "5. Sangat Setuju" },
          ],
        },
        {
          number: 5,
          text: "Analisa data membantu memperkirakan kebutuhan APD dengan lebih tepat.",
          required: true,
          options: [
            { value: 1, text: "1. Sangat Tidak Setuju" },
            { value: 2, text: "2. Tidak Setuju" },
            { value: 3, text: "3. Netral" },
            { value: 4, text: "4. Setuju" },
            { value: 5, text: "5. Sangat Setuju" },
          ],
        },
        {
          number: 6,
          text: "Hasil forecasting pengadaan APD sesuai dengan kebutuhan penggunaan di lapangan.",
          required: true,
          options: [
            { value: 1, text: "1. Sangat Tidak Setuju" },
            { value: 2, text: "2. Tidak Setuju" },
            { value: 3, text: "3. Netral" },
            { value: 4, text: "4. Setuju" },
            { value: 5, text: "5. Sangat Setuju" },
          ],
        },
      ],
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
            { value: 1, text: "1. Sangat Tidak Setuju" },
            { value: 2, text: "2. Tidak Setuju" },
            { value: 3, text: "3. Netral" },
            { value: 4, text: "4. Setuju" },
            { value: 5, text: "5. Sangat Setuju" },
          ],
        },
        {
          number: 2,
          text: "WeCare memberikan respon cepat terhadap permintaan penukaran APD.",
          required: true,
          options: [
            { value: 1, text: "1. Sangat Tidak Setuju" },
            { value: 2, text: "2. Tidak Setuju" },
            { value: 3, text: "3. Netral" },
            { value: 4, text: "4. Setuju" },
            { value: 5, text: "5. Sangat Setuju" },
          ],
        },
        {
          number: 3,
          text: "Proses administrasi melalui WeCare lebih praktis dibanding cara manual.",
          required: true,
          options: [
            { value: 1, text: "1. Sangat Tidak Setuju" },
            { value: 2, text: "2. Tidak Setuju" },
            { value: 3, text: "3. Netral" },
            { value: 4, text: "4. Setuju" },
            { value: 5, text: "5. Sangat Setuju" },
          ],
        },
        {
          number: 4,
          text: "Informasi stok dan riwayat penukaran APD tercatat dengan jelas dalam sistem.",
          required: true,
          options: [
            { value: 1, text: "1. Sangat Tidak Setuju" },
            { value: 2, text: "2. Tidak Setuju" },
            { value: 3, text: "3. Netral" },
            { value: 4, text: "4. Setuju" },
            { value: 5, text: "5. Sangat Setuju" },
          ],
        },
        {
          number: 5,
          text: "Data yang tersimpan pada WeCare berguna dalam proses pengambilan keputusan.",
          required: true,
          options: [
            { value: 1, text: "1. Sangat Tidak Setuju" },
            { value: 2, text: "2. Tidak Setuju" },
            { value: 3, text: "3. Netral" },
            { value: 4, text: "4. Setuju" },
            { value: 5, text: "5. Sangat Setuju" },
          ],
        },
      ],
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
            { value: 1, text: "1. Sangat Tidak Setuju" },
            { value: 2, text: "2. Tidak Setuju" },
            { value: 3, text: "3. Netral" },
            { value: 4, text: "4. Setuju" },
            { value: 5, text: "5. Sangat Setuju" },
          ],
        },
        {
          number: 2,
          text: "Penggantian APD dapat diproses dalam waktu yang cepat.",
          required: true,
          options: [
            { value: 1, text: "1. Sangat Tidak Setuju" },
            { value: 2, text: "2. Tidak Setuju" },
            { value: 3, text: "3. Netral" },
            { value: 4, text: "4. Setuju" },
            { value: 5, text: "5. Sangat Setuju" },
          ],
        },
        {
          number: 3,
          text: "Sistem pengelolaan stok mencegah terjadinya kekurangan APD.",
          required: true,
          options: [
            { value: 1, text: "1. Sangat Tidak Setuju" },
            { value: 2, text: "2. Tidak Setuju" },
            { value: 3, text: "3. Netral" },
            { value: 4, text: "4. Setuju" },
            { value: 5, text: "5. Sangat Setuju" },
          ],
        },
        {
          number: 4,
          text: "Sistem pengelolaan stok mencegah penumpukan APD berlebih.",
          required: true,
          options: [
            { value: 1, text: "1. Sangat Tidak Setuju" },
            { value: 2, text: "2. Tidak Setuju" },
            { value: 3, text: "3. Netral" },
            { value: 4, text: "4. Setuju" },
            { value: 5, text: "5. Sangat Setuju" },
          ],
        },
        {
          number: 5,
          text: "APD yang diberikan memiliki kualitas baik dan konsisten.",
          required: true,
          options: [
            { value: 1, text: "1. Sangat Tidak Setuju" },
            { value: 2, text: "2. Tidak Setuju" },
            { value: 3, text: "3. Netral" },
            { value: 4, text: "4. Setuju" },
            { value: 5, text: "5. Sangat Setuju" },
          ],
        },
        {
          number: 6,
          text: "Forecasting pengadaan APD membantu menjaga ketersediaan stok.",
          required: true,
          options: [
            { value: 1, text: "1. Sangat Tidak Setuju" },
            { value: 2, text: "2. Tidak Setuju" },
            { value: 3, text: "3. Netral" },
            { value: 4, text: "4. Setuju" },
            { value: 5, text: "5. Sangat Setuju" },
          ],
        },
      ],
    },
  ],
};
