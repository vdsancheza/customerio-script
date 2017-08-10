'use strict';


// Configuracion 
var siteId = 'yourSITEID';
var appKey = 'yourappKey';
var jsonName = 'ap.json';




// Librerias
var CIO = require('customerio-node');
var data = require('./'+jsonName);



var cio = new CIO(siteId, appKey);


console.log('Exporting data .. '+ data.length + 'Customers!!');
for (var i = 0; i < data.length; i++) {
	let _id, _data;
	if (data[i].id === undefined){
		_id = data[i].email;
	}else{
		_id = data[i].id;
		delete data[i].id;
	}
	_data = data[i];

	console.log('Exporting Data for ' + _id + ' with this Data: ' + JSON.stringify(_data));
	cio.identify(_id, _data);
}
console.log('All Data Exported');