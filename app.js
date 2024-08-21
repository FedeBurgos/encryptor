// Función para encriptar el texto
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

// Función para desencriptar el texto
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

// Limpiar el contenido al cargar la página o actualizarla
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').value = '';
});

// Evento para manejar el clic en el botón de encriptar
document.getElementById('encryptButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const encryptedMessage = encrypt(inputText);
    document.getElementById('outputText').value = encryptedMessage;
});

// Evento para manejar el clic en el botón de desencriptar
document.getElementById('decryptButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const decryptedMessage = decrypt(inputText);
    document.getElementById('outputText').value = decryptedMessage;
});

// Evento para manejar el clic en el botón de copiar
document.getElementById('copyButton').addEventListener('click', function() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
});
