document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('input-text');
    const outputText = document.getElementById('output-text');
    const encryptBtn = document.getElementById('encrypt-btn');
    const decryptBtn = document.getElementById('decrypt-btn');
    const copyBtn = document.getElementById('copy-btn');
    const placeholder = document.getElementById('placeholder');

    function encrypt(message) {
        return message.replace(/a|e|i|o|u/g, (match) => {
            switch (match) {
                case 'e': return 'enter';
                case 'i': return 'imes';
                case 'a': return 'ai';
                case 'o': return 'ober';
                case 'u': return 'ufat';
                default: return match;
            }
        });
    }

    function decrypt(message) {
        return message.replace(/enter|imes|ai|ober|ufat/g, (match) => {
            switch (match) {
                case 'enter': return 'e';
                case 'imes': return 'i';
                case 'ai': return 'a';
                case 'ober': return 'o';
                case 'ufat': return 'u';
                default: return match;
            }
        });
    }

    encryptBtn.addEventListener('click', () => {
        const text = inputText.value.trim();
        if (text) {
            outputText.value = encrypt(text);
            placeholder.style.display = 'none';
            outputText.style.display = 'block';
            copyBtn.style.display = 'block';
        } else {
            placeholder.style.display = 'flex';
            outputText.style.display = 'none';
            copyBtn.style.display = 'none';
        }
    });

    decryptBtn.addEventListener('click', () => {
        const text = inputText.value.trim();
        if (text) {
            outputText.value = decrypt(text);
            placeholder.style.display = 'none';
            outputText.style.display = 'block';
            copyBtn.style.display = 'block';
        } else {
            placeholder.style.display = 'flex';
            outputText.style.display = 'none';
            copyBtn.style.display = 'none';
        }
    });

    document.getElementById('copy-btn').addEventListener('click', function() {
        const outputText = document.getElementById('output-text');
        outputText.select();
        document.execCommand('copy');
    });    

    // Reset view on page load
    inputText.value = '';
    outputText.value = '';
    placeholder.style.display = 'flex';
    outputText.style.display = 'none';
    copyBtn.style.display = 'none';
});
