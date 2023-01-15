const express = require('express');

const app = express();


    app.use(express.json());
    app.use(express.urlencoded({extended: false}));

    // TODO: Incoming messages route
    const port = process.env.PORT || 3000;
    // app.post('/message', (req, res) => {
    //     const data = req.body;
    //     console.log(`Received message: \n ${data}`);
    //     res.sendStatus(200);

    // })


    // TODO: Delivery reports route
    // app.post('delivery', (req, res) => {
    //     const data = req.body;
    //     console.log(`Received report: \n ${data}`);
    //     res.sendStatus(200);

    // })
    

  

    app.listen(port, () => {
        console.log(`App running on port: ${port}`);
        

        // TODO: call sendSMS to send message after server starts

    });






