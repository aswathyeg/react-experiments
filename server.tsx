
const express=require('express');
const cors=require('cors');//express and cors are used for creating fake server

const app = express();

app.use(cors());
app.use('../login',(req,res)=>{
res.send({
    token:'test123'
})
});
app.listen(8080,()=>console.log('API is running on http://localhost:8080/login'));