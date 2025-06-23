function decrypt() {
    const value = document.getElementById("inputText").value.toLowerCase();
    const output = document.getElementById("output");
    const key = parseInt(document.getElementById("key").value);

    const alph = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;':,.<>?/~`";
    let result = "";

    for (let i = 0; i < value.length; i++) {
        const char = value[i];

        if (char === " ") {
            result += " ";
            continue;
        }

        const index = alph.indexOf(char);

        if (index === -1) {
            result += "?"; 
            continue;
        }

        // Fix: Add alph.length multiple times to ensure positive result
        const newIndex = ((index - key) % alph.length + alph.length) % alph.length;
        result += alph[newIndex];
    }

    output.innerHTML = result;
}