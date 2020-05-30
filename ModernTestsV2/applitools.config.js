module.exports = {
    concurrency: 10,
    apiKey: 'vYjrRn2EG7aXgJwgbWPKOrAVivZliLwCFBKO04G5yOQ110',
    //
    browser: [
        //laptop
        { width: 1200, height: 700, name: "chrome" },
        { width: 1200, height: 700, name: "firefox" },
        { width: 1200, height: 700, name: "edgechromium" },
        //tablet
        { width: 768, height: 700, name: "chrome" },
        { width: 768, height: 700, name: "firefox" },
        { width: 768, height: 700, name: "edgechromium" },
        //mobile
        {
            deviceName: "iPhone X",
            screenOrientation: "portrait",
        }
    ],
    batchName: 'UFG Hackathon'
};