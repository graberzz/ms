const express = require("express");
const app = express();

const port = 8081;
app.get("/order-list", (req,res)=>{
    let response = {
        data: {
            item: [
                {
                    id: 1,
                    name: 'order-1'
                },
                {
                    id: 2,
                    name: 'order-2'
                }
            ]
        }
    };
    res.status(200).json(response);
});
let i = 0;
app.get("/process_order", (req, res)=>{
    console.log('processing order', i++)
    // some heavy computation
    const a = []
    for(let i=0; i<99999999;i++) {
        a.push(Math.random());
    }

    for(let i=0; i<99999999;i++) {
        a[i] = a[i] * a[i] + 1
    }

    res.status(200).json({data: {}})
})

app.get("/", (req,res)=>{
    res.send("Order called");
});

app.listen(port, ()=>{
    console.log("Listening at localhost "+ port);    
})