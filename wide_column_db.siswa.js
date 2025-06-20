use wide_column_db

db.siswa.insertMany([
  { id: 1, nama: "Aisyah", mapel1: "Matematika", mapel2: "IPA" },
  { id: 2, nama: "Budi", mapel1: "Fisika" },
  { id: 3, nama: "Citra", mapel1: "Biologi", mapel3: "Kimia" },
  { id: 4, nama: "Dedi", mapel2: "Bahasa", mapel3: "Sejarah" },
  { id: 5, nama: "Eka", mapel1: "IPS", mapel2: "PKN" }
])

{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6855305b25e7b839e6330519'),
    '1': ObjectId('6855305b25e7b839e633051a'),
    '2': ObjectId('6855305b25e7b839e633051b'),
    '3': ObjectId('6855305b25e7b839e633051c'),
    '4': ObjectId('6855305b25e7b839e633051d')
  }
}
db.siswa.find().pretty()
[{
  "_id": {
    "$oid": "6855305b25e7b839e6330519"
  },
  "id": 1,
  "nama": "Aisyah",
  "mapel1": "Matematika",
  "mapel2": "IPA"
},
{
  "_id": {
    "$oid": "6855305b25e7b839e633051a"
  },
  "id": 2,
  "nama": "Budi",
  "mapel1": "Fisika"
},
{
  "_id": {
    "$oid": "6855305b25e7b839e633051b"
  },
  "id": 3,
  "nama": "Citra",
  "mapel1": "Biologi",
  "mapel3": "Kimia"
},
{
  "_id": {
    "$oid": "6855305b25e7b839e633051c"
  },
  "id": 4,
  "nama": "Dedi",
  "mapel2": "Bahasa",
  "mapel3": "Sejarah"
},
{
  "_id": {
    "$oid": "6855305b25e7b839e633051d"
  },
  "id": 5,
  "nama": "Eka",
  "mapel1": "IPS",
  "mapel2": "PKN"
}]