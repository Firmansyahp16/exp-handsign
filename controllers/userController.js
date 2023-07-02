const client = require("../config");

client.connect();

const getUsers = (req, res) => {
  client.query("select * from users", (request, result) => {
    if(!result) {
      throw new Error("Users not found");
    }
    res.send(result.rows);
  });
};

const getUser = (req,res) => {
  client.query(`select * from users WHERE id=${req.params.id}`, (request,result) => {
    if(!result) {
      throw new Error("User not found");
    }
    res.send(result.rows);
  })
}

const createUser = (req,res) => {
  client.query(`INSERT INTO users (username,password) VALUES('${req.body.username}','${req.body.password}')`, (request, result) => {
    if(!result) {
      throw new Error("Cannot create user");
    } else {
      res.send("User created");
    }
  });
}

const updateUser = (req, res) => {
  // client.connect();
  client.query(`UPDATE users SET username='${req.body.username}', password='${req.body.password}' WHERE id=${req.params.id}`, (request, result) => {
    if(!result) {
      res.send("Error");
    } else {
      res.send("User updated");
    }
  });
}

const deleteUser = (req, res) => {
  client.query(`DELETE FROM users WHERE id=${req.params.id}`, (request, result) => {
    if(!result) {
      throw new Error("Cannot delete user");
    } else {
      res.send("User deleted");
    }
  })
}

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };
