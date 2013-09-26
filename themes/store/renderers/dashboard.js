/*
var render = function (theme, data, meta, require) {
    //print(caramel.build(data));
   
    theme('1-column', {
        title: data.title,
        navigation: [
            {
                partial: 'navigation',
                context: data.navigation
            }
        ],
        body: [
            {
                partial: 'userAssets',
                context: data.userAssets
            }
        ]
    });
};

*/

<<<<<<< HEAD

var render = function (theme, data, meta, require) {
=======
var render = function (theme, data, meta, require) {	
	
	
		
	for(var i = 0; i < data.userAssets.mobileapp.length; i++){
		var subscribedDevices = data.userAssets.mobileapp[i].subscribed_devices;
		var subscribeDevicesWithDetails = new Array();
		if(subscribedDevices != null){
			for(var j = 0; j < subscribedDevices.length; j++){
				for(var k = 0; k < data.devices.length; k++){					
					if(subscribedDevices[j] == String(data.devices[k].id)){						
						subscribeDevicesWithDetails.push({id :subscribedDevices[j], name: data.devices[k].name, model: data.devices[k].model });
					}
				}
				
			}			
		}
		data.userAssets.mobileapp[i].subscribed_devices = subscribeDevicesWithDetails;		
	}
			
				
>>>>>>> 4178e2d933086848e87dbfdc64794af691f3023c
    theme('2-column-right', {
        title: data.title,
        navigation: [
            {
                partial: 'navigation',
                context: data.navigation
            },
            {
                partial: 'search',
                context: data.search
            }
        ],
       
        body: [
            {
                partial: 'userAssets',
                context: {
        		'userAssets': data.userAssets,
        		'URL': data.URL
		}
            }
        ],
        right: [
        
            {
                partial: 'recent-assets',
                context: data.recentAssets
            },
            {
                partial: 'tags',
                context: data.tags
            }
        ]
    });
};

