use kv_store

db.data_kv.insertMany([
  { nama: "Aisyah" },
  { usia: 20 },
  { kota: "Majene" },
  { status: "Aktif" },
  { nilai: 85 }
])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('68552fc76e359c8747d700b3'),
    '1': ObjectId('68552fc76e359c8747d700b4'),
    '2': ObjectId('68552fc76e359c8747d700b5'),
    '3': ObjectId('68552fc76e359c8747d700b6'),
    '4': ObjectId('68552fc76e359c8747d700b7')
  }
}
db.data_kv.find().pretty()

[{
  "_id": {
    "$oid": "68552fc76e359c8747d700b3"
  },
  "nama": "Aisyah"
},
{
  "_id": {
    "$oid": "68552fc76e359c8747d700b4"
  },
  "usia": 20
},
{
  "_id": {
    "$oid": "68552fc76e359c8747d700b5"
  },
  "kota": "Majene"
},
{
  "_id": {
    "$oid": "68552fc76e359c8747d700b6"
  },
  "status": "Aktif"
},
{
  "_id": {
    "$oid": "68552fc76e359c8747d700b7"
  },
  "nilai": 85
}]