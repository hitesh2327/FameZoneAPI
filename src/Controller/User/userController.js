const { getUser } = require("../../DB/getUser");

module.exports={
    getUserFunction:(req, res)=>{
        getUser(req, (context)=>{
            res.status(200).json(context)
        })
    }
}
