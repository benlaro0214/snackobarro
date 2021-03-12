const orm = require("../config/orm.js");
const burger = { selectAll : (callback) => {orm.selectAll("burgers", (results)=>{ callback(results); 
});
  },
 // The variables cols and vals are arrays.
insertOne : (cols, vals, callback) => { 
  orm.insertOne("burgers", cols, vals, (result)=>{
      callback(result);
    });
    
  },
  updateOne : (cols, vals, condition, callback) =>{
  orm.updateOne("burgers", cols, vals, condition, (result)=>{
      callback(result);
    });
  }
}; // End of Burger Object

module.exports = burger;
