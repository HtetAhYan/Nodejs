import express from 'express'


const router = express.Router()
const users = [
  { first_name: "john", last_name: "Doe", age: 15 }
]

router.get('/', async(req, res) => {


  const data = await prisma.user.findMany();
  res.send(data);
})

router.post('/', async (req, res) => {
    const user = await prisma.user.create({
      data:req.body,
    })
    users.push(user)

  })
  

  

export default router
