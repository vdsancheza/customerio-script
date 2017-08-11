'use strict';


//Configuracion
var siteId = '';
var appKey = '';
var jsonName = '';




// Librerias
var CIO = require('customerio-node');
var data = require('./'+jsonName);



var cio = new CIO(siteId, appKey);
var i= 0, end = data.length ;


console.log('Exporting data .. '+ end + 'Customers!!');

setInterval(() => {
	if ( !(i < end) ) {
		console.log('All Data Exported!!');
		process.exit(1);
	}
	console.log('Init: ' + i + 'end: '+ end);
    let _id, _data;
    if (data[i].id === undefined){
      _id = 'ap-'+data[i].email;
    }else{
     _id = data[i].id;
     delete data[i].id;
    }
    _data = data[i];

    console.log('Exporting Data for ' + _id + ' with this Data: ' + JSON.stringify(_data));
    cio.identify(_id, _data);

    console.log(i);
    i++;
	}
,100);