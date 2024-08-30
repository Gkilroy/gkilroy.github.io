//-- testdb_select1-1.js --- 

//import sqlitedb
const sqlite3 = require("sqlite3").verbose();

function testdb_select1(username, password)
{
    const _funnction_name = "testdb_select";
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

        db.get(`SELECT id,username FROM user where username=? and password = ? `,[_uid, _pwd],(err, row)=>{
            if(err){
                _msg = "## select user error";
                console.log(_msg);
                //console.log(err);
                _return = false;
            }
            else
            {
                if(row)
                {
                    _msg = `##  user: ${row.id} - ${row.username}`;
                    console.log(_msg);
                    _return = true;
                }
                else
                {
                    _msg = `** user not found `;
                    console.log(_msg);
                    _return = false;
                }
                
                
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

const uid = "demouser1";
const pwd = "pwd1";

testdb_select1(uid,pwd);