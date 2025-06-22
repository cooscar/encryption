



function decrypt() {

    const value = document.getElementById("inputText").value.toLowerCase();
    const output = document.getElementById("output");
    const key = parseInt(document.getElementById("key").value);


    let alph = "123456789abcdefghijklmnopqrstuvwxyz";
    const map = {};
    let result = "";

    for(let i=0; i<alph.length; i++) {
        map[alph[i]] = i - key;
        
        if (map[alph[i]] < 0){
            map[alph[i]] += 35;
        }
    }
    
    for(let i=0; i < value.length; i++) {
        let char = value[i];

        if (char !== " "){
            result += alph[map[value[i]]];
        } else {
            result += " ";
        }
    }
    
output.innerHTML = result;
}