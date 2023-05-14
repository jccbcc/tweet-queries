const express = require('express')
const app = express()
const bodyParser = require('body-parser');

// parse JSON requests
app.use(bodyParser.json());

//
// root route
//
app.get('/', (req, res) => {
    console.log("Hello Route Route")
    res.send('Hello Root Route!')

})

//
// run first python script route
//
app.get('/script1', callScript);

function callScript(req, res) {

    console.log("callScript1")

    // spawn a Python process
    var process = require("child_process").spawn('python3',["./script.py"]);
    console.log("called process")

    process.stdout.on('data', (data) => {
        console.log(`***** stdout: ${data}`);

        // the Python script's output is received as a buffer, so convert it to a string
        const output = data.toString().trim();
        res.send(output);
    });

    process.stderr.on('data', (data) => {
        console.error(`#### stderr: ${data}`);
    });

    process.on('close', (code) => {
        console.log(`$$$$ child process exited with code ${code} from script one call`);
    });

}


//
// run second python script route
//
app.get('/script2', callScript2);

function callScript2(req, res) {

    console.log("callScript2")

    // spawn a Python process
    var process = require("child_process").spawn('python3',["./script2.py"]);

    process.stdout.on('data', (data) => {
        console.log(`***** stdout: ${data}`);

        // the Python script's output is received as a buffer, so convert it to a string
        const output = data.toString().trim();
        res.send(output);
    });

    process.stderr.on('data', (data) => {
        console.error(`#### stderr: ${data}`);
    });

    process.on('close', (code) => {
        console.log(`$$$$ child process exited with code ${code} from script two call`);
    });

}




app.listen(3000, () => {
    console.log('Server listening on port 3000')
})