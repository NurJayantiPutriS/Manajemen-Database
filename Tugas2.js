use book;

// 1. CREATE DOCUMENT (insertOne & insertMany)
db.createCollection("buku");

db.buku.insertOne({
  judul: "Dasar Pemrograman",
  penulis: "Ani",
  tahun: 2021,
  kategori: "Teknologi"
});

db.buku.insertMany([
  {
    judul: "Pemrograman Lanjutan",
    penulis: "Budi",
    tahun: 2022,
    kategori: "Teknologi"
  },
  {
    judul: "Matematika SMA",
    penulis: "Citra",
    tahun: 2020,
    kategori: "Pendidikan"
  }
]);

// 2. READ DOCUMENT (find)
db.buku.find(); // Semua data
db.buku.find({ penulis: "Ani" }); // Data dengan filter

// 3. UPDATE DOCUMENT (updateOne)
db.buku.updateOne(
  { judul: "Dasar Pemrograman" },
  { $set: { tahun: 2023 } }
);

// 4. DELETE DOCUMENT (deleteOne)
db.buku.deleteOne({ judul: "Matematika SMA" });

// 5. COMPARISON QUERY
db.buku.find({ tahun: { $gt: 2021 } }); // Tahun lebih dari 2021

// 6. LOGICAL QUERY
db.buku.find({
  $or: [
    { kategori: "Teknologi" },
    { penulis: "Citra" }
  ]
});

// 7. BULK WRITE
db.buku.bulkWrite([
  {
    insertOne: {
      document: {
        judul: "Bahasa Indonesia",
        penulis: "Dewi",
        tahun: 2021,
        kategori: "Bahasa"
      }
    }
  },
  {
    updateOne: {
      filter: { judul: "Pemrograman Lanjutan" },
      update: { $set: { tahun: 2024 } }
    }
  },
  {
    deleteOne: {
      filter: { judul: "Bahasa Indonesia" }
    }
  }
]);

// 8. AGGREGATION (count jumlah buku Teknologi)
db.buku.aggregate([
  { $match: { kategori: "Teknologi" } },
  { $count: "jumlah_buku_teknologi" }
]);

// 9. SCHEMA VALIDATION
db.createCollection("buku_validated", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["judul", "penulis", "tahun", "kategori"],
      properties: {
        judul: {
          bsonType: "string",
          description: "Judul harus berupa string dan wajib diisi"
        },
        penulis: {
          bsonType: "string",
          description: "Penulis harus berupa string dan wajib diisi"
        },
        tahun: {
          bsonType: "int",
          minimum: 2000,
          maximum: 2100,
          description: "Tahun harus berupa integer antara 2000 - 2100"
        },
        kategori: {
          bsonType: "string",
          description: "Kategori harus berupa string dan wajib diisi"
        }
      }
    }
  },
  validationLevel: "strict",
  validationAction: "error"
});

// Contoh insert yang gagal karena tahun bukan int
db.buku_validated.insertOne({
  judul: "Fisika Dasar",
  penulis: "Eko",
  tahun: "2023", // Ini salah karena string
  kategori: "Sains"
});

// Contoh insert yang valid
db.buku_validated.insertOne({
  judul: "Biologi Umum",
  penulis: "Fajar",
  tahun: 2022,
  kategori: "Sains"
});