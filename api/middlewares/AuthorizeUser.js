const jwt = require('jsonwebtoken');

const ACCESS_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_SECRET = process.env.REFRESH_TOKEN_SECRET;


function authorization(req, res, next){

  // const authHeader = req.headers.authorization;
    // const token = authHeader && authHeader.split(' ')[1];
    // console.log(authHeader)
  
    // if(authHeader == undefined) return res.sendStatus(401);
    // jwt.verify(authHeader, ACCESS_SECRET, (err, user)=>{
    //   if(err) return res.sendStatus(403);
    //   console.log(user);
    //   req.user = user;
    //   next();
    // })

    const authHeader = req.headers.authorization;
    const access_token = authHeader && authHeader.split(' ')[1];
    const refresh_token = req.cookies.refresh_token || '';

    if(authHeader == undefined) return res.sendStatus(401);
    if (!refresh_token && !access_token) res.send(`Please Sign in`);

      try {
        if (access_token) {
                if(jwt.verify(access_token, ACCESS_SECRET)) 
                next();  
        }
      } catch (err) {

        try {
            if(refresh_token){

                const decrypted_refresh_token = jwt.verify(refresh_token, REFRESH_SECRET);

                if(decrypted_refresh_token){

                const user = { user_id: decrypted_access_token.user_id, role_id: decrypted_access_token.role_id };

                access_token = jwt.sign(user, ACCESS_SECRET, { expiresIn: '900s' });
                res.json({access_token: access_token , message: "😊 👌" });
                next();
                }
            }
        } catch (err) {
            res.send(`the refresh token is expired you should login again`); 
        }
      }
  



  }


 module.exports = {

    authorization

 }