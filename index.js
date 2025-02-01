//Kumpulan Kata
const words = ["abandoned","able","absolute","adorable","adventurous","academic","acceptable","acclaimed","accomplished",
		"accurate","aching","acidic","acrobatic","active","actual","adept","admirable","admired","adolescent",
		"adorable","adored","advanced","afraid","affectionate","aged","aggravating","aggressive","agile","agitated",
		"agonizing","agreeable","ajar","alarmed","alarming","alert","alienated","alive","all","altruistic","amazing",
		"ambitious","ample","amused","amusing","anchored","ancient","angelic","angry","anguished","animated","annual",
		"another","antique","anxious","any","apprehensive","appropriate","apt","arctic","arid","aromatic","artistic",
		"ashamed","assured","astonishing","athletic","attached","attentive","attractive","austere","authentic",
		"authorized","automatic","avaricious","average","aware","awesome","awful","awkward","babyish","bad","back",
		"baggy","bare","barren","basic","beautiful","belated","beloved","beneficial","better","best","bewitched","big",
		"bighearted","biodegradable","bitesized","bitter","black"];

//Fungsi Untuk Menggenerate Password
function getPassword(){
    const chars = '1234567890-=][;\/.,!@#$%^&*()_+{}|:<>?'; //kumpulan karakter
    const clength = chars.length; 
    let password = ''; //variabel kosong yang akan di sini kata karakter random

    while(password.length < 20){ //perulangan untuk membuat kata kata lebih dari 20 huruf
        password = password.concat(randomWord());
        password = password.concat(chars[randomNumber(clength)]);
    }

    password = password.substring(0, 16); // memotong menjadi 15 karakter
    document.getElementById('password').value = password; //dimasukan kedalam elemen html
}

function randomNumber(e){
    return Math.floor(Math.random()*e); //membuat angka acak
}

function randomWord(){
    const number = randomNumber(words.length); // memilih kata acak dari array menggunakan indeks acak
    return words[number];
}