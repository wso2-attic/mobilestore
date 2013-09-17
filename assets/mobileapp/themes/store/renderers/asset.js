var render = function(theme, data, meta, require) {	
	
	var images = data.asset.attributes.images_screenshots.split(",");
	data.asset.attributes.images_screenshots = images;
	
	//print(caramel.build(data));
	theme('2-column-right', {
		title : data.title,
		navigation : [{
			partial : 'navigation',
			context : require('/helpers/navigation.js').currentPage(data.navigation, data.type)
		}, {
			partial : 'search',
            context: data.search
		}],
        body : [{
            partial : 'asset',
            context : require('/helpers/asset.js').format({
                user : data.user,
                sso : data.sso,
                asset : data.asset,
                type : data.type,
                devices: data.devices,
                inDashboard : data.inDashboard,
                embedURL : data.embedURL
            })
        }],
		right : [{
			partial : 'recent-assets',
			context : data.recentAssets
		}, {
			partial : 'tags',
			context : data.tags
		}]
	});
};
