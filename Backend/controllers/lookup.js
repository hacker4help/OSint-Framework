const exec = require("await-exec")

const websiteLookup = async (req,res) => {
    res.render('website')
}

const phoneNoLookup = async (req, res) => {
    res.render('phone')
}

const usernameLookup = async (req, res) => {
    const target = req.query.target
    const result = {}
    if (target) {
        console.log(`Searching for ${target}`);
        await exec(`echo ${target}`, (err, output) => {
            if (err) {
                console.error(err)
                res.render('username', { result: err.stdout })
            }
            console.log(output)
            res.render('username', { output })
        })
    }
    res.render('username')
}

const ipLookup = async (req, res) => {
    res.render('ip')
}

const emailLookup = async (req, res) => {
    res.render('email')
}

module.exports = { websiteLookup, phoneNoLookup, usernameLookup, ipLookup, emailLookup }