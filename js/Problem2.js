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
 	for(var j=0;j<top.length;j++)
 	{
		  if((line[4]=="Total" && line[5]=="All ages") && (line[3]=="State - ARUNACHAL PRADESH" || line[3]=="State - TRIPURA" ||line[3]=="State - MEGHALAYA" ||line[3]=="State - ASSAM" ||line[3]=="State - MIZORAM" ||line[3]=="State - MANIPUR" ||line[3]=="State - NAGALAND"))
		  {
		  	obj[top[3]]=line[3];
		  	obj[top[10]]=line[10];
		  	obj[top[11]]=line[11];
		  	obj[top[13]]=line[13];
		  	obj[top[14]]=line[14];
		  	status=1;
		  }
	  }
	  if(status==1)
	  {
	  	result.push(obj);
	  	status=0;
	  }
 }
 fs.writeFileSync('../json/P2.JSON',JSON.stringify(result));