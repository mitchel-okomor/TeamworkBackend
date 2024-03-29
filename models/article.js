
const db = require('../services/database');

class Article{

constructor(empId, title, body, date, tag){

    this.empId = empId;
    this.title = title;
    this.body = body;
this.date = date;
this.tag = tag;
}

set article(val){
([this.empId, this.title, this.body, this.date, this.tag])
}

get article(){
    return([this.empId, this.title, this.body, this.date, this.tag]);
}

 async save(){
    try{
  let queryString = `INSERT INTO article(emp_Id, title, body, date_Created, tag) VALUES($1, $2, $3, $4, $5) returning *`;
 return   db.query(queryString, this.article);
 }
    catch(error){
        console.log(error);
    }
  
} 

async viewOne(artId){
    try{
  let queryString = `SELECT * FROM article WHERE id=${artId}`;
 return db.query(queryString);
    
    } catch(error){
        console.log(error);
    }
  
}

async viewAll(){
    try{
  let queryString = `SELECT * FROM article`;
 return db.query(queryString);
    
    } catch(error){
        console.log(error);
    }
  
}

async edit(artId, empId){
    try{
 let queryString = `UPDATE article SET title=$1, body=$2, date_updated=$3, tag=$4 WHERE id=${artId} AND emp_id=${empId} returning *`;
 console.log([this.title, this.body, this.date, this.tag]);   
 return db.query(queryString, [this.title, this.body, this.date, this.tag]);
    } catch(error){
       console.log(error); 
    }
   
}

async flag(){

}
async delete(artId, empId){
    try{
    let queryString = `DELETE FROM article WHERE id=${artId} AND emp_id=${empId}`
    return  db.query(queryString, this.employee);
    } catch(error){
       console.log(error); 
    }

}


}

module.exports = Article;

