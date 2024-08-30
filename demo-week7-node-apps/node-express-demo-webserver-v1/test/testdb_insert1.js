//-- testdb_insert1-1.js --- 

//import sqlitedb
const sqlite3 = require("sqlite3").verbose();

function testdb_insert1(username, password)
{
    const _funnction_name = "testdb1";
    let _msg = "";
    let _return = false;

    try
    {
        _msg = `** ${_funnction_name}`;

        const db = new sqlite3.Database("data\\demofaqdb1.db",sqlite3.OPEN_READWRITE,(err)=>{
            if(err){
                _msg = "## error connecting to db";
                console.log(_msg);
                console.log(err);
            }
            else
            {
                _msg = "## Connected to db";
                console.log(_msg);
            }
        });

        const _uid = username;
        const _pwd = password;

        db.run(`INSERT INTO user(username,password) VALUES('${_uid}','${_pwd}')`,(err)=>{
            if(err){
                _msg = "## insert error";
                console.log(_msg);
                //console.log(err);

                _return = false;
            }
            else
            {
                _msg = `## new userid: ${this.id}`;
                //_msg = `## new userid: ${this.lastID}`;
                console.log(_msg);
                
                _return = true;
            }
        });

        db.close((err)=>{
            if(err)
            {
                console.log("** error closing db");
                console.log(err);
                _return = false;
            }
            else
            {
                console.log("** db closed ");
                _return = true;
            }
        });

    }
    catch(error)
    {
        console.log(`** ${_funnction_name}::error`);
        console.log(error);
        _return = false;
    }

    return _return;
}

const uid = "demouser5";
const pwd = "pwd5";

testdb_insert1(uid,pwd);