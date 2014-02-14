/* Return the first partner from the configuration file */
exports.getFirstEleFromObj = function (Obj){
    var first = null;
    for (first in Obj) break;

    return first;
};

exports.getLastEleFromObj = function (Obj) {
	var last = null;
	for (last in Obj){
		//Do something if needed
	}
	return last;
}