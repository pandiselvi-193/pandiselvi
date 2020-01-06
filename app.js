const express = require('express');

const app = express()

app.listen(9004 , (req,res) =>{

    function getsum(x,y,z,...s){
        console.log(x+y+z);
        }
        let sumarray= [10,20,30]
        getsum(...sumarray);
    
    console.log(getsum());
})

app.get("/" , (req,res) => {
    
    res.send({msg : "success"})    

})