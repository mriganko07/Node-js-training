const fs = require('fs')
const nodemon = require('nodemon')

// fs.writeFileSync("./files/abc.txt", "Adhip loves Minakshi more than Toushik(khanirchele).."); // New FIle creation under a folder

// fs.unlinkSync("./files/abc.txt") // Delete a file form the dir

// const data = fs.readFileSync("chachi.txt", 'utf-8')

// fs.appendFileSync("chachi.txt", "\nKhakir chele toushik")

// console.log(data);


let operation = process.argv[2]

if (operation == "write"){
    let name = process.argv[3]
    let content = process.argv[4]
    let filename = "./files/"+name+".txt"
    // let content = process.argv[4]
    // console.log(operation, name , content);
    fs.writeFileSync(filename, content)
    
}

else if(operation == "read"){
    let name = process.argv[3]
    let content = process.argv[4]
    let filename = "./files/"+name+".txt"

    let data = fs.readFileSync(filename, 'utf-8')

    console.log(data);
    
}


else if (operation == "update"){
    let name = process.argv[3]
    let content = process.argv[4]
    let filename = "./files/"+name+".txt"
    // let content = process.argv[4]
    // console.log(operation, name , content);
    fs.appendFileSync(filename, content)
}

else if (operation == "delete"){
    let name = process.argv[3]
    // let content = process.argv[4]
    let filename = "./files/"+name+".txt"

    fs.unlinkSync(filename)
}

console.log(operation);


// For executing the programs

// WRITE --> nodemon fsCRUD.js write filename "content"
// READ --> nodemon fsCRUD.js read filename
// UPDATE --> nodemon fsCRUD update filename "content"
// DELETE --> nodemon fsCRUD.js delete filename
