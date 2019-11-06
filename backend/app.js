const express=require('epress');

const app=express();4
app.use((req,res,next=>{
Console.log('my first app');
next();
}));
app.use((req,res,next=>{
    res.send('hi amit how r u')
    }));
module.exports=app;