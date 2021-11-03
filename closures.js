/* 
Tahapan untuk ke closures :
a. Fase pada execution context -> 1.Creation
                                  2.Execution

*/

// 2.1 EXECUTION CONTEXT, HOISTING & SCOPE
/*
console.log(makan);
var makan = 'bandeng';*/
// terjadi qreation phase pada global context

/*
console.log(sayhello());

var nama = 'sandhika';
var umur = 33;


function sayhello() {
    console.log(`halo, nama saya ${nama}, saya ${umur} tahun`);
}
*/


/*
var nama = 'sandhika galih';
var username = '@sandhikagalih';

function cetakurl(username) {
    var instagramurl = 'http://instagram.com/';
    return instagramurl + username;
}
console.log(cetakurl(username));
*/


/*
function a() {
    console.log('ini a');

    function b() {
        console.log('ini b');

        function c() {
            console.log('ini c');
        }
        c();
    }
    b();
}
a();
*/


function satu() {
    var nama = 'sandhika';
    console.log(nama);
}


function dua() {
    console.log(nama);
}

console.log(nama);
var nama = 'erik';

satu();

dua('yanto');

console.log(nama);


/*
var s = "This., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation";
var punctuationless = s.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
var finalString = punctuationless.replace(/\s{2,}/g," ");
console.log(finalString);
*/
/*
let str = 'Belajar JS Bersama Codekey, JS';
let newStr = str.replace('JS','wkwkwk');

console.log(newStr);
*/