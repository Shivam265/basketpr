// find in  all  document
db.inventory.find({item:"paper"})

// update one docoument
db.inventory.updateOne(
    { item: "paper" },
    {
      $set: { "size.uom": "cm", status: "P" },
      $currentDate: { lastModified: true }
    }
 )

 // fineOne single document in qty $lt:50 
 db.inventory.findOne({"qty": {$lt:50 }} )

 // updtaeMany in all "p" document status update
 db.inventory.updateMany(
    { "qty": { $lt: 50 } },
    {
      $set: { "size.uom": "in", status: "P" },
      $currentDate: { lastModified: true }
    }
 )