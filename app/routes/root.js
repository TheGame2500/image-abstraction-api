'use strict';
module.exports=function(app,urlParser){
    app.route('/').get(function(req,res){
        res.sendFile(process.cwd()+'/public/index.html');
    });
}