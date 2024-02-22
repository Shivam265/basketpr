// fetch all documents
db.inventory.find({qty:"90"});

db.inventory.find({ status: { $in: [ "A", "D" ] } } )

//AND 
db.inventory.find({ status: "A", qty: { $lt: 30 } })

// OR all document

db.inventory.find({ $or: [ { status: "A" }, { qty: { $lt: 30 } } ] })

// findone first single document find 

db.inventory.findOne({status:{ $in: ["A",'D']}} );