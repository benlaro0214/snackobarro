// Import MySQL connection.
const connection = require("../config/connection.js");
const tableName = "burgers";


// Burger time engine - Select-add-update

const orm = {
  selectAll : (tableName,callback) => {
    let queryStatement = `SELECT * FROM ${tableName};`;
    connection.query(queryStatement, (err, result)=>{
      if (err) throw err;
      callback(result);
    });

  },

  //This will add a burger
  insertOne: (tableName, cols, vals, callback) => {
    let queryStatement = `INSERT INTO  ${tableName} (${cols.toString()}) VALUES (${BurgerMarks(vals.length)});`;
    connection.query(queryStatement, vals, (err, result) => {
      if (err) throw err;
      console.log("Sucesfully Added");
      callback(result);
    });

  },

 //This will update the name of the burger

  updateOne : (tableName, cols, vals, condition, callback) =>{
    let queryStatement = `UPDATE ${tableName} SET ${cols.toString()} = ? WHERE ${condition}`;
    connection.query(queryStatement, vals, (err, result) => {
      if (err) throw err;
      console.log("Sucesfully Updated");
      callback(result);
    });

  }

}


function BurgerMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}



module.exports = orm;

