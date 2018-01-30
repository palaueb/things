//Execute this script from your desired week course to open a window for the first pdf of each video.
//this works at 2018/01/30


function dl(ur, fn) {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", ur, true);
	xhr.onload = function(e) {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				fn(xhr.responseText);
			}
		}
	};
	xhr.send(null);
}

function pdfLink(rt) {
	window.open(JSON.parse(rt).elements[0].url.url);
}

function assetID(rt) {
	var o = JSON.parse(rt);
	var as = o.linked["openCourseAssets.v1"];
	if (as.length > 0) {
		var assID = as[0].definition.assetId;
		var pdf = "https://www.coursera.org/api/assets.v1/" + assID + "?fields=fileExtension";
		dl(pdf, pdfLink);
	}
}

function p(liii) {
	let js0n = "https://www.coursera.org/api/onDemandLectureAssets.v1/" + window.App.context.dispatcher.stores.CourseStore.courseId + "~" + liii.split("/")[6] + "/?includes=openCourseAssets";
	dl(js0n, assetID);
}
var l = document.getElementsByClassName('rc-ItemLink');
var t = l.length;
for (var i = 0; i < t; i++) {
	var ara = l[i];
	p(ara.href);
}
