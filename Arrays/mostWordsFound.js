// problem 2114 - most words found

var mostWordsFound = function (sentences) {

    let maxNoOfWords = 0;

    for (let i = 0; i < sentences.length; i++) {

        maxNoOfWords = sentences[i].split(" ").length > maxNoOfWords ? sentences[i].split(" ").length : maxNoOfWords;

    }

    return maxNoOfWords;
};