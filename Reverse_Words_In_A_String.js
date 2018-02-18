// https://leetcode.com/problems/reverse-words-in-a-string/description/
// Given an input string, reverse the string word by word.
// For example,
// Given s = "the sky is blue",
// return "blue is sky the".

var reverseWords = function(str) {
    var words = str.split(' ');
    var result = [];
    for(var i = words.length-1; i > -1; i--){
        result.push(words[i]);
    }
    return result;
};
