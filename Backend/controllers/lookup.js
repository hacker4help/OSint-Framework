const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec)

const websiteLookup = async (req,res) => {
    const { tool, target } = req.query
    const result = {}
    if (target){
        var command = ''
        switch (tool) {
            case 'whois':
                command = `whois ${target}`;
                break;
            case 'nslookup':
                command = `nslookup -type=any ${target}`
                break;
            case 'dig':
                command = `dig ${target}`
                break;
            case 'host':
                command = `host ${target}`
            break;
            default:
                break;
        }
        console.log(command);
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
    }
    res.render('website', { result })  
}

const phoneNoLookup = async (req, res) => {
    res.render('phone')
}

const usernameLookup = async (req, res) => {
    const target = req.query.target
    const result = {}
    if (target){
        const command = `python3 ~/Desktop/Tools/sherlock/sherlock/sherlock.py ${target} --timeout 2`;
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
    }
    res.render('username', { result })    
}

const ipLookup = async (req, res) => {
    const { tool, target } = req.query
    const result = {}
    if (target || tool){
        var command = ''
        switch (tool) {
            case 'nmap':
                command = `nmap ${target}`;
                break;
            case 'ping':
                command = `ping ${target} -c 10`
                break;
            case 'traceroute':
                command = `traceroute ${target}`
                break;
            default:
                break;
        }
        console.log(command);
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
    }
    res.render('ip', { result }) 
}

const emailLookup = async (req, res) => {
    const target = req.query.target
    const result = {}
    if (target){
        // exec('cd ../../../theHarvester')
        const command = `cd ../../theHarvester && python3 ./theHarvester.py -d ${target} -b all | grep ${target}`;
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
    }
    res.render('email', { result })   
}

const aboutUs = (req, res) => {
    res.render('about-us')
}
const info = (req, res) => {
    res.render('info')
}

module.exports = { websiteLookup, phoneNoLookup, usernameLookup, ipLookup, emailLookup, aboutUs, info }
