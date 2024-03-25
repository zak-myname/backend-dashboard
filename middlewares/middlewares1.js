const AdminCtrl = require("../controllers/teamsWS")
const middlewares = {}

middlewares.isAutorized = (req, res, next) => {
    AdminCtrl.isAutorizedAdmin(req.headers['autorization'])
        .then(
            (authed) => {
                if (authed) {
                    next()
                }
                else {
                    res.json({
                        response: false,
                        data: "Unthorized"
                    })
                }
            }
        ).catch(
            (err) => {
                res.json({
                    response: false,
                    data: "Unthorized",
                    error : err
                })
            }
        )
}

middlewares.isValidToken = (req, res) => {
    AdminCtrl.verifytoken(req.body.headers.autorization)
        .then((valid) => {
            if (valid) {
                res.json({
                    response: true,
                    data: "valid token"
                })
            }
            else {
                res.json({
                    response: false,
                    data: "Invalid token"
                })
            }
        }
        ).catch(
            (err) => {
                res.json({
                    response: false,
                    data: "Invalid token",
                    error: err
                })
            }
        )
}
module.exports = middlewares