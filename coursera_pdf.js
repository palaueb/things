//Execute this script from your desired week course to open a window for the first pdf of each video.
//this works at 2018/01/30
//take care to delete the end of the console.log output (debugger eval code:9:2)
//once executed, just aria2c -i a_file_with_this_content.txt

function dl(ur,fn,ordre){
var xhr = new XMLHttpRequest();xhr.open("GET", ur, true);
xhr.onload=function(e){if(xhr.readyState === 4){if(xhr.status === 200){fn(xhr.responseText,ordre);}}};
xhr.send(null);
}
function pdfLink(rt,ordre){
	var o =JSON.parse(rt).elements[0];
	//var a = document.createElement("a");
	console.log(o.url.url,"\n\tout="+ordre+"_"+o.name);
	//a.setAttribute("download",ordre+"_"+o.name);
	//a.setAttribute("href",o.url.url);
	//a.setAttribute("target","_blank");
	//document.body.appendChild(a);
	//a.click();
}
function assetID(rt,ordre){
var o =JSON.parse(rt);
var as =o.linked["openCourseAssets.v1"];
if(as.length>0){
var assID = as[0].definition.assetId;
var pdf = "https://www.coursera.org/api/assets.v1/"+assID+"?fields=fileExtension";
dl(pdf,pdfLink,ordre);
}
}
function p(liii,ordre){
let js0n="https://www.coursera.org/api/onDemandLectureAssets.v1/" + window.App.context.dispatcher.stores.CourseStore.courseId +"~"+ liii.split("/")[6] +"/?includes=openCourseAssets";
dl(js0n,assetID,ordre);
}
var l=document.getElementsByClassName('rc-ItemLink');var t=l.length;for(var i=0;i<t;i++){var ara=l[i];p(ara.href,i);}
