// building the database 
db.inventory.insertMany([
    { item: "journal", qty: 25, tags: ["blank", "red"], size: { h: 14, w: 21, uom: "cm" } },
    { item: "mat", qty: 85, tags: ["gray"], size: { h: 27.9, w: 35.5, uom: "cm" } },
    { item: "mousepad", qty: 25, tags: ["gel", "blue"], size: { h: 19, w: 22.85, uom: "cm" } }
 ])
// find in all select document in  value 
db.inventory.find()
// find in only one document value 
db.inventory.find(1)

// descending order

db.inventory.find().sort({qty:-1})

// Acending order

db.inventory.find().sort({qty:+1})

// skip one 1  document
db.inventory.find().skip(1)
// limit the number of document in output 
db.inventory.find().limit(2)


// using pagination using mongodb find and limit
/*1 to 10
n = 8
db.blogs.find().skip((page-No-1)*no).limit(no)
pageno = 1 db.blogs.find().skip(0).limit(8)
pageno = 2 db.blogs.find().skip(8).limit(8)*/