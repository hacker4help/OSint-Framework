const { exec } = require("child_process")
export async function searchSherlock(){
    var target = document.getElementById('target').value;
    var result = document.getElementById('output');
    console.log(target);
    exec('cd sherlock');
    await exec(`python3 sherlock ${target}`, (err, output) => {
        if (err) {
            console.error(err);
            result.textContent = "Enter a valid username"
        }
        console.log(output);
        result.textContent = "Results for " + target + output
    })
}