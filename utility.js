var Utility = function() {
	var that = Object.create(Utility.prototype);
	// functionals from_to and times are taken from lecture notes from 6.170
	that.from_to = function (from, to, f) {
		if (from > to) return;
		f(from); utility.from_to(from+1, to, f);
	};

	that.times = function (i, f) {
	    if (i === 0) return;
	    f();
	    utility.times (i-1, f);
	}

	Object.freeze(that);
  	return that;
};
var utility = Utility();

