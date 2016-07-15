var fs=require('fs');
var data=fs.readFileSync('../csv/India2011.csv',{encoding:'utf8'}).toString();
var s=data.split("\r\n");
var result = [];
var top=s[0].split(",");
var status=0;

for(var i=1;i<s.length;i++)
 {
 	var obj={};
 	var line=s[i].split(",");
 	for(var j=0;j<top.length;j++){
		  if(line[4]=="Total" && line[5]=="All ages")
		  {
		  	obj[top[3]]=line[3];
		  	obj[top[9]]=line[9];
		  	obj[top[12]]=line[12];
		  	status=1;
		  }
	  }
	  if(status==1){
	  	result.push(obj);
	  	status=0;
	  }
 }

 fs.writeFileSync('../json/P3.JSON',JSON.stringify(result));