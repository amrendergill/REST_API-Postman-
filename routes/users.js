import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

let user = [

];

router.get('/', (req,res)=>{
   
    res.send(user);
});

router.post('/', (req,res)=>{
   
    const tuser = (req.body);
  
    const userWithId = { ...tuser, id: uuidv4() };

    user.push(userWithId);


    res.send(`User with the name ${tuser.firstName} added to the database`);
})

router.get('/:id', (req,res)=>{
  const {id} = req.params;
  const foundUser = user.find((user) => user.id === id );
  res.send(foundUser);
})
router.delete('/:id',(req,res)=>{
  const {id} = req.params;
  user = user.filter((user) => user.id !== id);
  res.send(`User with the ${id} deleted`)
})
router.patch('/:id',(req,res)=>{
  const {id} = req.params;
  const {firstName , lastName , age} = req.body;
  const users = user.find((users)=> users.id === id);
  if(firstName){
    users.firstName = firstName;
  }
   if (lastName) {
     users.lastName = lastName;
   }
    if (age) {
      users.age = age;
    }
     res.send(`User with the id ${id} has been updated`);

})

export default router