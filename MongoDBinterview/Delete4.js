// delete in all document 
db.inventory.deleteMany({})

// deleteMany  match the vallue "A" all delete
db.inventory.deleteMany({ status : "A" })