var fs = require('fs');
var data = fs.readFileSync('../csv/India2011.csv', { encoding: 'utf8' }).toString();
var s = data.split("\r\n");
var literateMale = 0,
	literateFemale = 0,
	illiterateMale = 0,
	illiterateFemale = 0;
for (var i = 1; i < s.length; i++) {
    var line = s[i].split(",");
    for (var j = 0; j < 1; j++) {
        if (line[4] == "Total" && line[5] == "All ages") {
            literateMale = literateMale + parseInt(line[13]);
            literateFemale=literateFemale+parseInt(line[14]);
            illiterateMale = illiterateMale + parseInt(line[10]);
            illiterateFemale=illiterateFemale+parseInt(line[11]);
        }
    }
}
var result='[{"Total Literate Males":"'+
			literateMale+
			'","Total Literate Females":"'
			+literateMale+
			'","Total Illiterate Males":"'
			+illiterateMale+
			'","Total Illiterate Females":"'+
			illiterateFemale+
			'"}]'
fs.writeFileSync('../json/Part1.JSON',result);
