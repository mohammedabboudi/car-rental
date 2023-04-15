const db = require('../models');


function login(req, res, next){

    const { email, password } = req.body;

    db.User.findOne({ where: { email: email, password: password } }).then(user =>{

        if (user != null) {
            const user_id = user.user_id;
            const role_id = user.role_id;
            const userCredentials = { user_id, role_id };

            req.user = userCredentials;
            next();

        } else {
           res.status(404).json({ message: 'there is no user with this credencials. try again or register' });
        }
       

    }).catch(err =>{

        res.status(500).json({ massage: 'Server Error.' });

    })

}



async function signup(req, res){

    const { first_name, last_name, email, password } = req.body;

    try {
        const user = await db.User.findOne({ where: { email: email } });

        if (user == null) {

            console.log(first_name);
            console.log(last_name);
            console.log(email);
            console.log(password);
            const response = db.User.create({ first_name, last_name, email, password });
            console.log(response);

            if (response) {
                res.status(200).json({ message: 'You created your account successfully' });
            }
           
        } else {
            res.status(400).json({ message: 'User already exists try another email.' });
        }

    } catch (error) {
        res.status(500).json({ massage: error });
    }


}



function logout (req, res, next){

    res.cookie("refreshToken", '', {
        secure: false,
        httpOnly: true,
    })

    next();
    
}


module.exports = {

    login,
    signup,
    logout
}