function secondLargest(arr) {

    var fLargeNum = 0;
    var sLargeNum = 0;

    for (var i = 0; i < arr.length; i++) {
        if (fLargeNum < arr[i]) {
            sLargeNum = fLargeNum;
            fLargeNum = arr[i];
        } else if (sLargeNum < arr[i]) {
            sLargeNum = arr[i];
        }
    }

    return sLargeNum;

}

module.exports = secondLargest