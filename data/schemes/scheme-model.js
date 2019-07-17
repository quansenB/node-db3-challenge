const db = require('../data/dbConfig.js');

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove,
}

function find(){
  return db("schemes");
}

function findById(id){
  return db("schemes").where({id}).first();
}

function findSteps(id){
    return db("steps").where({scheme_id: id});
}

function add(scheme_name){
    return db('schemes')
    .insert(scheme_name)
    .then(ids => {
      return getById(ids[0]);
    });
}

function update(scheme, id){
    return db("schemes").where({id}).update(scheme).then(result =>{
        if(result===1){
            return findById(id);
        } else{
            return null;
        }
    });
}
async function remove(id){
    const removedObj = findById(id);
    db("schemes").where({id}).del();
    return removedObj;
    
}
