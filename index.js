const chalk = require('colors');
const _ = require('lodash');

const mem = [];

const colorMap = [
	'bgGreen.green', 
	'bgBlue.blue', 
	'bgYellow.yellow',
	'bgRed.red', 
	'bgMagenta.magenta',
	'bgCyan.cyan'
]

function draw(cells){
	var i = 0;
	return function(){
		var str = [];
		var num = cells;
		i = i >= cells ? 0 : i;
		while( num-- ){
			if(num === i){
				str.unshift( chalk.bgWhite.white('__') );
				i++;
				continue;
			}
			var color = _.sample( colorMap );
			var fn = _.get( chalk, color ).bind( chalk );
			str.unshift( fn('__') );
		}
		str.unshift('\r');
		return str.join('');
	}
}

const drawer = draw(40);

setInterval(function(){
	process.stdout.write( drawer() );
}, 100)



