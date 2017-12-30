const fs = require('fs');
const regValue = /[#\$!]\{.*?\}/g;

function template(path, data) {
	return template.format(fs.readFileSync(path, {
		encoding: 'utf-8'
	}).toString(), data)
}

template.buffer = function() {
	return new Buffer(template.apply(null, arguments))
}

template.format = function(string, data) {
	return string.replace(regValue, function(value) {
		var key = value.substring(2, value.length - 1).trim()
		return [data[key]].join("")
	})
}

module.exports = template