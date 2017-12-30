const fs = require('fs');
const regValue=/[#\$]\{.*?\}/g;

function templates(url,data) {
	return fs.readFileSync(url, {
		encoding: 'utf-8'
	}).toString().replace(regValue,function(value,index,string){
		var key= value.substring(2,value.length-1).trim()
		return [data[key]].join("")
	})
}

templates.buffer=function(){
	return new Buffer(templates.apply(null,arguments))
}

module.exports = templates