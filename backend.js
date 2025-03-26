function convertHexToRgbFloat() {
    const hexInput = document.getElementById('hexInput').value.trim();
    const resultDiv = document.getElementById('result');
    const copyButton = document.getElementById('copyButton');

    // Validate hex color input
    const hexRegex = /^#?([a-fA-F0-9]{6})$/;
    const match = hexInput.match(hexRegex);

    if (!match) {
        resultDiv.textContent = 'Invalid hex color. Please use a format like #ff5733.';
        copyButton.style.display = 'none'; // Hide the copy button on invalid input
        return;
    }

    const hex = match[1];

    // Convert hex to RGB float
    const r = parseInt(hex.substring(0, 2), 16) / 255;
    const g = parseInt(hex.substring(2, 4), 16) / 255;
    const b = parseInt(hex.substring(4, 6), 16) / 255;

    const rgbFloatString = `[${r.toFixed(3)}, ${g.toFixed(3)}, ${b.toFixed(3)}]`;
    resultDiv.textContent = `RGB Float: ${rgbFloatString}`;

    // Show the copy button
    copyButton.style.display = 'inline-block';
    copyButton.setAttribute('data-clipboard-text', rgbFloatString);
}

function copyToClipboard() {
    const copyButton = document.getElementById('copyButton');
    const textToCopy = copyButton.getAttribute('data-clipboard-text');

    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Copied to clipboard: ' + textToCopy);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}
