var fs=require('fs');
var data=fs.readFileSync('India2011.csv',{encoding:'utf8'}).toString();
var data1=fs.readFileSync('IndiaSC2011.csv',{encoding:'utf8'}).toString();
var data2=fs.readFileSync('IndiaST2011.csv',{encoding:'utf8'}).toString();

var s=data.split("\r\n");
var s1=data1.split("\r\n");
var s2=data2.split("\r\n");

  var result1 = [];
  var top1=s[0].split(",");
  var status=0;

 for(var i=1;i<s.length;i++)
 {
 	var obj={};
 	var line=s[i].split(",");
 	for(var j=0;j<top1.length;j++){
		  if(line[4]=="Total" && line[5]=="All ages")
		  {
		  	obj[top1[3]]=line[3];
		  	obj[top1[10]]=line[10];
		  	obj[top1[11]]=line[11];
		  	obj[top1[13]]=line[13];
		  	obj[top1[14]]=line[13];
		  	status=1;
		  }
	  }
	  if(status==1){
	  	result1.push(obj);
	  	status=0;
	  }
 }
 var result2 = [];
  var top2=s[0].split(",");
for(var i=1;i<s.length;i++)
 {
 	var obj={};
 	var line=s[i].split(",");
 	for(var j=0;j<top2.length;j++)
 	{
		  if(line[4]=="Total" && line[5]=="All ages")
		  {
		  	obj[top2[3]]=line[3];
		  	obj[top2[9]]=line[9];
		  	obj[top2[12]]=line[12];
		  	status=1;
		  }
	  }
	  if(status==1)
	  {
	  	result2.push(obj);
	  	status=0;
	  }
 }

 var result3 = [];
  var top3=s[0].split(",");
  for(var i=1;i<s.length;i++)
 {
 	var obj={};
 	var line=s[i].split(",");
 	for(var j=0;j<top3.length;j++)
 	{
		  if((line[4]=="Total" && line[5]=="All ages") && (line[3]=="State - ARUNACHAL PRADESH" || line[3]=="State - TRIPURA" ||line[3]=="State - MEGHALAYA" ||line[3]=="State - ASSAM" ||line[3]=="State - MIZORAM" ||line[3]=="State - MANIPUR" ||line[3]=="State - NAGALAND"))
		  {
		  	obj[top3[3]]=line[3];
		  	obj[top3[10]]=line[10];
		  	obj[top3[11]]=line[11];
		  	obj[top3[13]]=line[13];
		  	obj[top3[14]]=line[13];
		  	status=1;
		  }
	  }
	  if(status==1)
	  {
	  	result3.push(obj);
	  	status=0;
	  }
 }
 fs.writeFileSync('P1.JSON',JSON.stringify(result1));
 fs.writeFileSync('P2.JSON',JSON.stringify(result2));
 fs.writeFileSync('P3.JSON',JSON.stringify(result3));





