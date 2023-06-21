const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec)

const websiteLookup = async (req,res) => {
    res.render('website')
}

const phoneNoLookup = async (req, res) => {
    res.render('phone')
}

const usernameLookup = async (req, res) => {
    const target = req.query.target
    const command = `python3 ../../sherlock/sherlock ${target} --timeout 2`;
    const result = {}
    const {error, stdout, stderr} = await exec(command)
    if(error){
        console.log(`${error.message}`);
        return;
    }
    if(stderr) {
        console.log(`${stderr}`);
        return;
    }
    console.log(`${stdout}`);
    result['output'] = stdout
    res.render('username', { result })
}

const ipLookup = async (req, res) => {
    res.render('ip')
}

const emailLookup = async (req, res) => {
    res.render('email')
}

module.exports = { websiteLookup, phoneNoLookup, usernameLookup, ipLookup, emailLookup }
