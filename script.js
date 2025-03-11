// Copyright (c) 2025 Paulina Zabielska
// All rights reserved. This code cannot be used, copied, modified, or distributed for commercial purposes without the author's permission.
function countWords() {
    var text = document.getElementById("inputText").value

    var words = text.trim().split(/\s+/).filter(word => word.match(/[a-zA-Z0-9]/));
    var wordCount = words.length;

    var numberCount = (text.match(/\d+([.,]\d+)?/g) || []).length;

    var charCount = text.length;

    var sentenceCount = (text.match(/[A-Z][^.!?]*[.!?]/g) || []).filter(sentence => sentence.split(/\s+/).length > 1).length;
    var lineCount = (text.split(/\n+/).filter(Boolean)).length;

    document.getElementById("wordCount").innerText = wordCount;
    document.getElementById("charCount").innerText = charCount;
    document.getElementById("numberCount").innerText = numberCount;
    document.getElementById("sentenceCount").innerText = sentenceCount;
    document.getElementById("lineCount").innerText = lineCount;
}

document.getElementById("inputText").addEventListener("input", countWords);

document.getElementById("inputText").addEventListener("keydown", function(event) {
    if (event.key === "Tab") {
        event.preventDefault();

        var textarea = event.target;
        var cursorPosition = textarea.selectionStart;

        var textBefore = textarea.value.substring(0, cursorPosition);
        var textAfter = textarea.value.substring(cursorPosition);
        textarea.value = textBefore + "\t" + textAfter;

        textarea.selectionStart = textarea.selectionEnd = cursorPosition + 1;
        countWords();
    }
});