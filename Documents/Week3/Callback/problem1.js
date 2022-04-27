function jajanBoba(uang,callback){
 console.log('kamu jajan boba dengan harga Rp5000');
        callback ();
    }
 

function jajanSeblak(uang) {
    let result = uang - 5000;
    setTimeout(() => {
        callback('sisa uang kamu Rp' + result);
 }, 5000);  
    console.log('kamu jajan Seblak dengan harga Rp8000');
}

jajanBoba(20000,jajanSeblak);
//jajanSeblak(10000, jajanSeblak);