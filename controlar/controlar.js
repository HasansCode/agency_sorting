
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const jsonDataFile = require('../data/data.json');
let student = { 
    name: 'Mike',
    age: 23, 
    gender: 'Male',
    department: 'English',
    car: 'Honda' 
};
exports.home=(req,res)=>{
    res.render('index')
}
exports.getData=(req,res)=>{
    //console.log();
     let firstData = req.body.user_data;
     console.log(firstData);
     axios
     .post('https://hooks.zapier.com/hooks/catch/12190615/bzc1tcn/', {
       data: {
           user_input: firstData,
       }
     })
     .then(resp => {
        console.log(resp.data)
        //res.send(resp.data);
        res.status(200).json("JSON file has been saved.")
     })
     .catch(error => {
       console.error(error)
     })
    // fs.writeFileSync(path.resolve(__dirname, '../data/data.json'),  JSON.stringify(req.body));
    
    // console.log(firstData.Población);
    
    
}
exports.showDataOnWeb=(req,res)=>{
    let rawdata = fs.readFileSync(path.resolve(__dirname, '../data/data.json'));
    let student = JSON.parse(rawdata);
    console.log("data get");
    res.send(student)
}


 


