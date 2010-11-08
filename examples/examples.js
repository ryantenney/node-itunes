var iTunes = require("../lib/iTunes");

iTunes.track.title(function (ret, err) {
	console.log("Track name: " + ret);
});

iTunes.volume(function (ret, err) {
	console.log("Volume: " + ret);

	console.log("Decrease volume -10...");
	iTunes.volume(ret - 10, function (ret) {
		console.log("Done.");
		iTunes.volume(function (ret, err) {
			console.log("Volume: " + ret);
		});
	});
});
