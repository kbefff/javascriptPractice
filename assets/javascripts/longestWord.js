function longestWord(str) {
    var strSplit = str.split(' ');
    var longest = 0;
    for (var i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > longest)
            longest = strSplit[i].length;
    }
    return longest
}
module.exports = longestWord