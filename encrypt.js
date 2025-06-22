
function change() {


    const value = document.getElementById("inputText").value.toLowerCase();
    const output = document.getElementById("output");
    const key = parseInt(document.getElementById("key").value);




    const alph = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;':,.<>?/~`";
    const map = {};
    let result = "";

    for (let i = 0; i < alph.length; i++) {
        map[alph[i]] = (i + key) % alph.length;
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



