const express = require('express')
const app = express()
const{ PrismaClient}= require ("@prisma/client");
const prisma = new PrismaClient();
const port = 3000
app.get('/',(req,res) =>{
    res.send(return_All());
})
app.post('/add',async (title, body, res) => {
  new_Note(title,body);
  const note = await prisma.note.findFirst();
  res.send(note)
})


async function new_Note(title, body,){
    const newNote = await prisma.note.create({
        data: {
            title: title,
            body: body
        }
    });
console.log(newNote);
}
async function return_All(){
    const allNotes = await prisma.note.findMany();
    return_All.send(allNotes);
    console.log(allNotes);
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})