const http = require("http")
const age = 22

function name() {
    return "mriganka is the father of toushik";
    
}

http.createServer((req , res) => {
    res.setHeader('Content-Type', 'Text/html')
    // res.write("<h1> Adhip Santirpola </h1> \n");
    res.write(`<div>
        <h2> Adhip Santirpola his ages is `+age+`</h2> 
        <h2> Today's date is `+new Date+`</h2> 
        <h2> `+name()+`</h2> 
        <p> Pigs are highly intelligent, social mammals known for their remarkable adaptability and complex behaviors, belonging to the same family as wild boars. Despite being commonly misunderstood, pigs are surprisingly clean animals that avoid soiling their sleeping and eating areas; they roll in mud not because they are dirty, but because they lack effective sweat glands and need to cool down and protect their skin from the sun. As omnivores, they have a keen sense of smell—up to 2,000 times more sensitive than humans—which they use for foraging and rooting in the soil with their sensitive snouts. They are exceptionally social, communicating through a diverse range of over 20 vocalizations, and they often form tight bonds, even sleeping nose-to-nose. Beyond their role as a major food source, these animals possess a high level of intelligence, comparable to that of a human toddler, and have been shown to use tools, recognize their names, and even play video games in controlled studies. </p>
        </div>\n`);
    // res.write("<h2>Adhip Santirpola <br> </h2>\n");
    res.end('')
    process.exit()

}).listen('4001')