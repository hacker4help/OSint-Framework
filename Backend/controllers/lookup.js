const { exec } = require('child_process');

const websiteLookup = async (req,res) => {
    res.render('website')
}

const phoneNoLookup = async (req, res) => {
    res.render('phone')
}

const usernameLookup = async (req, res) => {
    res.render('username')
    const command = "sherlock -u om --timeout 10";
    exec(command , (error,stdout,stderr) => {
    if(error){
    console.log(`${error.message}`);
    return;
    }
    if(stderr)
    {
    console.log(`${stderr}`);
    return;
    }
    console.log(`${stdout}`);
   });
    
}

const ipLookup = async (req, res) => {
    res.render('ip')
}

const emailLookup = async (req, res) => {
    res.render('email')
}

module.exports = { websiteLookup, phoneNoLookup, usernameLookup, ipLookup, emailLookup }
