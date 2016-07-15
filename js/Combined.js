var fs=require('fs');
var data=fs.readFileSync('../csv/India2011.csv',{encoding:'utf8'}).toString();
var data1=fs.readFileSync('../csv/IndiaSC2011.csv',{encoding:'utf8'}).toString();
var data2=fs.readFileSync('../csv/IndiaST2011.csv',{encoding:'utf8'}).toString();

var s=data.split("\r\n");
var s1=data1.split("\r\n");
var s2=data2.split("\r\n");

var result = [];
var top=s[0].split(",");

for(var i=1;i<s.length;i++){

	  var obj = {};
	  var line=s[i].split(",");

	  for(var j=0;j<top.length;j++){
		  obj[top[j]] = line[j];
	  }

	  result.push(obj);
  }
  for(var i=1;i<s1.length;i++){
  	var obj = {};
	  var line=s1[i].split(",");

	  for(var j=0;j<top.length;j++){
		  obj[top[j]] = line[j];
	  }

	  result.push(obj);
  }
  for(var i=1;i<s2.length;i++){

	  var obj = {};
	  var line=s2[i].split(",");

	  for(var j=0;j<top.length;j++){
		  obj[top[j]] = line[j];
	  }

	  result.push(obj);
  }

  fs.writeFileSync('../json/combined.JSON',JSON.stringify(result));