const websiteLookup = async (req,res) => {
    res.render('website')
}

const phoneNoLookup = async (req, res) => {
    res.render('phone')
}

const usernameLookup = async (req, res) => {
    res.render('username')
}

const ipLookup = async (req, res) => {
    res.render('ip')
}

const emailLookup = async (req, res) => {
    res.render('email')
}

module.exports = { websiteLookup, phoneNoLookup, usernameLookup, ipLookup, emailLookup }