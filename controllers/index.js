const { render } = require('ejs')
const User = require('../models/user')

exports.showIndex = (req, res, next) => {
    res.render('index')
}

exports.showPageSignUp = (req, res, next) => {
    res.render('signUp')
}

exports.showMembersPage = (req, res) => {
    res.render('members')
}

exports.get404Page = (req, res, next) => {
    res.status(404).render('404')
}

exports.signup = (req, res, next) => {
    const {username, email, password} = req.body
    const user = new User(username, email, password)
    try {
        user.save()
        res.redirect('/')
    } catch (err) {
        console.log(err);
        res.redirect('signup')
    }
}

exports.login = async(req, res, next) => {
    const {email, password} = req.body
    const user = await User.findOne(email, password)
    try {
        if (user) {
            res.redirect('/members')
        } else {
            res.render('index')
        }
    } catch (err) {
        console.log(err)
        res.render('index')
    }
}