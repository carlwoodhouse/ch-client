const puppeteer = require('puppeteer');
const express = require('express');
const app = express();
var port = process.env.PORT || 8080;

app.get('/', function(req, res) {
    (async () => {
        console.log("starting ...");
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://cnhv.co/1f91s');
        await page.waitFor(60000);
        await browser.close();
        console.log("stopping ...")
      })();

    // ejs render automatically looks in the views folder
    res.send('Running ...s');
});


app.listen(port, function() {
    console.log('Our app is running on port: ' + port);
});