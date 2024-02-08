const pool = require('../../db');
const queries = require('./queries');

const getUsers = (req,res)=>{
    pool.query(queries.getAllUserQuery,(error,results)=>{
        if(error)throw error;
        res.status(200).json(results.rows);
        console.log("GET REQUEST : getUsers : STATUS 200")
    });
}


const getUserByID = (req,res)=>{
    const id = parseInt(req.params.id);
    pool.query(queries.getUserByIDQuery,[id],(error,results)=>{
        if(error)throw error;
        res.status(200).json(results.rows);
        console.log("GET REQUEST : getUserByID : STATUS 200")

    });
}
 
const addUsers = (req,res)=>{
    const { name, email} = req.body;
    
    pool.query(queries.checkEmailExists, [email], (error, results)=>{
        if(results.rows.length) {
            res.send("Email already exists");
        } else {pool.query(queries.addUsersQuery,[name,email],(error,results)=>{
            if(error){
                throw error;
            } 
            else {
                res.status(201).send("Succes created");
                console.log("POST REQUEST : addUsers : STATUS 201")

            }
        }
    );
}

        
    });

};

module.exports = {
    getUsers,
    getUserByID,
    addUsers
}
