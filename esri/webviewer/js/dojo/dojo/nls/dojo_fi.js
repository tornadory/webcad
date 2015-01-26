/*
	Copyright (c) 2004-2012, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/nls/dojo_fi",{"dijit/form/nls/validate":{"rangeMessage":"Tämä arvo on sallitun alueen ulkopuolella.","invalidMessage":"Annettu arvo ei kelpaa.","missingMessage":"Tämä arvo on pakollinen."},"esri/nls/jsapi":{"identity":{"noAuthService":"Unable to access the authentication service.","lblCancel":"Cancel","lblUser":"User Name:","title":"Sign in","forbidden":"The username and password are valid, but you don't have access to this resource.","errorMsg":"Invalid username/password. Please try again.","lblItem":"item","lblOk":"OK","info":"Please sign in to access the item on ${server} ${resource}","lblSigning":"Signing in...","invalidUser":"The username or password you entered is incorrect.","lblPwd":"Password:"},"map":{"deprecateShiftDblClickZoom":"Map.(enable/disable)ShiftDoubleClickZoom deprecated. Shift-Double-Click zoom behavior will not be supported.","deprecateReorderLayerString":"Map.reorderLayer(/*String*/ id, /*Number*/ index) deprecated. Use Map.reorderLayer(/*Layer*/ layer, /*Number*/ index)."},"virtualearth":{"vetiledlayer":{"bingMapsKeyNotSpecified":"BingMapsKey must be provided."},"vegeocode":{"bingMapsKeyNotSpecified":"BingMapsKey must be provided.","requestQueued":"Server token not retrieved. Queing request to be executed after server token retrieved."}},"bufferTool":{"sizeHelp":"To create multiple buffers, enter distances separated by spaces (2 3 5).","typeLabel":"Buffer type","disks":"Disks","round":"Round","right":"Right","distanceMsg":"Only numeric values are allowed","itemDescription":"Feature Service generated from running the Buffer Features solution. Input from ${layername} were buffered by ${distance_field} ${units}","resultLabel":"Result layer name","around":"Around","sideType":"Side type","flat":"Flat","multipleDistance":"Multiple distance buffers should be","outputLayerName":"Buffer of ${layername}","rings":"Rings","sizeLabel":"Enter buffer size","itemTags":"Analysis Result, Buffer, ${layername}","areaofInputPoly":"Area of input polygons in buffer polygons","left":"Left","bufferDefine":"Create buffers from <b>${layername}</b>","distance":"Distance","itemSnippet":"Analysis Feature Service generated from Buffer","endType":"End type","field":"Field","optionsLabel":"Options","include":"Include","exclude":"Exclude","dissolve":"Dissolve","overlap":"Overlap"},"widgets":{"attributeInspector":{"NLS_title":"Edit Attributes","NLS_validationFlt":"Value must be a float.","NLS_noFeaturesSelected":"No features selected","NLS_validationInt":"Value must be an integer.","NLS_next":"Next","NLS_errorInvalid":"Invalid","NLS_previous":"Previous","NLS_first":"First","NLS_deleteFeature":"Delete","NLS_of":"of","NLS_last":"Last"},"legend":{"NLS_polygons":"Polygons","NLS_lines":"Lines","NLS_noLegend":"No legend","NLS_points":"Points","NLS_creatingLegend":"Creating legend"},"directions":{"getDirections":"Get Directions","findOptimalOrder":"Optimize order","showOptions":"Show options","reverseDirections":"Reverse directions","addDestination":"Add destination","returnToStart":"Return to start","error":{"maximumStops":"The maximum number of stops has been reached","notEnoughStops":"Enter an origin and a destination.","invalidStopType":"Invalid stop type","locator":"Location could not be found.","noAddresses":"No addresses were returned.","unknownStop":"Location '<name>' could not be found.","noStops":"No stops were given to be added.","routeTask":"Unable to route to these addresses.","locatorUndefined":"Unable to reverse geocode. Locator URL is undefined."},"hideOptions":"Hide options","units":{"KILOMETERS":{"name":"kilometers","abbr":"km."},"MILES":{"name":"miles","abbr":"mi."},"METERS":{"name":"meters","abbr":"m."},"NAUTICAL_MILES":{"name":"nautical miles","abbr":"nm."}},"useTraffic":"Use traffic","time":{"minute":"minute","minutes":"minutes","hour":"hour","hours":"hours"},"printNotes":"Enter notes here","viewFullRoute":"Zoom to full route","printDisclaimer":"Directions are provided for planning purposes only and are subject to <a href='http://www.esri.com/legal/software-license' target='_blank'>Esri's terms of use</a>. Dynamic road conditions can exist that cause accuracy to differ from your directions and must be taken into account along with signs and legal restrictions. You assume all risk of use.","print":"Print"},"timeSlider":{"NLS_previous":"Previous","NLS_play":"Play/Pause","NLS_next":"Next","NLS_invalidTimeExtent":"TimeExtent not specified, or in incorrect format.","NLS_first":"First"},"templatePicker":{"loading":"Loading..","creationDisabled":"Feature creation is disabled for all layers."},"editor":{"tools":{"NLS_pointLbl":"Point","NLS_reshapeLbl":"Reshape","NLS_arrowLeftLbl":"Left Arrow","NLS_triangleLbl":"Triangle","NLS_autoCompleteLbl":"Auto Complete","NLS_arrowDownLbl":"Down Arrow","NLS_selectionRemoveLbl":"Subtract from selection","NLS_unionLbl":"Union","NLS_freehandPolylineLbl":"Freehand Polyline","NLS_rectangleLbl":"Rectangle","NLS_ellipseLbl":"Ellipse","NLS_attributesLbl":"Attributes","NLS_arrowUpLbl":"Up Arrow","NLS_arrowRightLbl":"Right Arrow","NLS_undoLbl":"Undo","NLS_arrowLbl":"Arrow","NLS_cutLbl":"Cut","NLS_polylineLbl":"Polyline","NLS_selectionClearLbl":"Clear selection","NLS_polygonLbl":"Polygon","NLS_selectionUnionLbl":"Union","NLS_freehandPolygonLbl":"Freehand Polygon","NLS_deleteLbl":"Delete","NLS_extentLbl":"Extent","NLS_selectionNewLbl":"New selection","NLS_circleLbl":"Circle","NLS_redoLbl":"Redo","NLS_selectionAddLbl":"Add to selection"}},"mosaicRule":{"queryOperatorLabel":"Operator:","refreshLockRasterIdsLabel":"Refresh","recognizedMosaicMethodsList":"None,ByAttribute,Center,Nadir,LockRaster,NorthWest,Seamline","selectAllLabel":"Select All","lockRasterRequestErrorMsg":"Error searching...","lockRasterRequestDoneMsg":"Done...","lockRasterRequestNoRasterMsg":"No rasters found...","mosaicOperatorLabel":"Mosaic Operator:","mosaicMethodLabel":"Mosaic Method:","lockRasterIdLabel":"Lock Raster Id:","orderValueLabel":"Order Value:","queryFieldLabel":"Field:","orderFieldNotFound":"Not Available","ascendingLabel":"Ascending:","lockRasterRequestMsg":"Searching...","queryLabel":"Query:","orderFieldLabel":"Order Field:","queryValueLabel":"Value:"},"attachmentEditor":{"NLS_error":"There was an error.","NLS_attachments":"Attachments:","NLS_none":"None","NLS_add":"Add","NLS_fileNotSupported":"This file type is not supported."},"overviewMap":{"NLS_invalidSR":"spatial reference of the given layer is not compatible with the main map","NLS_invalidType":"unsupported layer type. Valid types are 'TiledMapServiceLayer' and 'DynamicMapServiceLayer'","NLS_noMap":"'map' not found in input parameters","NLS_hide":"Hide Map Overview","NLS_drag":"Drag To Change The Map Extent","NLS_maximize":"Maximize","NLS_noLayer":"main map does not have a base layer","NLS_restore":"Restore","NLS_show":"Show Map Overview"},"measurement":{"NLS_length_kilometers":"Kilometers","NLS_area_sq_miles":"Sq Miles","NLS_length_yards":"Yards","NLS_distance":"Distance","NLS_area_acres":"Acres","NLS_resultLabel":"Measurement Result","NLS_length_miles":"Miles","NLS_area_hectares":"Hectares","NLS_deg_min_sec":"DMS","NLS_area":"Area","NLS_area_sq_meters":"Sq Meters","NLS_latitude":"Latitude","NLS_area_sq_kilometers":"Sq Kilometers","NLS_area_sq_feet":"Sq Feet","NLS_longitude":"Longitude","NLS_location":"Location","NLS_decimal_degrees":"Degrees","NLS_length_feet":"Feet","NLS_area_sq_yards":"Sq Yards","NLS_length_meters":"Meters","NLS_map_coordinate":"Map Coordinate"},"bookmarks":{"NLS_add_bookmark":"Add Bookmark","NLS_new_bookmark":"Untitled","NLS_bookmark_edit":"Edit","NLS_bookmark_remove":"Remove"},"renderingRule":{"rendererLabelTitle":"Renderer:","bandCombinationLabelTitle":"Band Combination:","bandNamesRequestMsg":"Requesting band information..."},"Geocoder":{"main":{"geocoderMenuButtonTitle":"Change Geocoder","untitledGeocoder":"Untitled geocoder","clearButtonTitle":"Clear Search","searchButtonTitle":"Search","geocoderMenuCloseTitle":"Close Menu","geocoderMenuHeader":"Select geocoder"},"esriGeocoderName":"Esri World Geocoder"},"popup":{"NLS_attach":"Attachments","NLS_nextFeature":"Next feature","NLS_moreInfo":"More info","NLS_searching":"Searching","NLS_maximize":"Maximize","NLS_noAttach":"No attachments found","NLS_noInfo":"No information available","NLS_pagingInfo":"(${index} of ${total})","NLS_restore":"Restore","NLS_prevFeature":"Previous feature","NLS_nextMedia":"Next media","NLS_close":"Close","NLS_zoomTo":"Zoom to","NLS_prevMedia":"Previous media"},"HistogramTimeSlider":{"NLS_play":"Play/Pause","NLS_fullRange":"full range","NLS_range":"Range","NLS_invalidTimeExtent":"TimeExtent not specified, or in incorrect format.","NLS_overview":"OVERVIEW","NLS_cumulative":"Cumulative"},"print":{"NLS_printing":"Printing","NLS_printout":"Printout","NLS_print":"Print"}},"toolbars":{"draw":{"addShape":"Click to add a shape, or press down to start and let go to finish","finish":"Double-click to finish","invalidType":"Unsupported geometry type","resume":"Click to continue drawing","addPoint":"Click to add a point","freehand":"Press down to start and let go to finish","complete":"Double-click to complete","start":"Click to start drawing","addMultipoint":"Click to start adding points","convertAntiClockwisePolygon":"Polygons drawn in anti-clockwise direction will be reversed to be clockwise."},"edit":{"invalidType":"Unable to activate the tool. Check if the tool is valid for the given geometry type.","deleteLabel":"Delete"}},"tasks":{"gp":{"gpDataTypeNotHandled":"GP Data type not handled."},"query":{"invalid":"Unable to perform query. Please check your parameters."},"na":{"route":{"routeNameNotSpecified":"'RouteName' not specified for at least 1 stop in stops FeatureSet."}}},"driveTimes":{"measureLabel":"Measure:","toolDefine":"Create areas around <b>${layername}</b>","itemTags":"Drive Times, ${layername}","itemSnippet":"Analysis Feature Service generated from Create Drive Times","measureHelp":"To output multiple areas for each point, type sizes separated by spaces (2 3.5 5)","itemDescription":"Feature Service generated from running the Create Drive Times solution.","areaLabel":"Areas from different points:","trafficLabel":"Use traffic conditions (optional)","resultLabel":"Result layer name","outputLayerName":"Drive from ${layername}: ---"},"analysisTools":{"aggregateTool":"Aggregate Points","createDensitySurface":"Create density surface","sumnearby":"Summarize Nearby","attributeCalculator":"Field Calculator","createBuffers":"Create Buffers","saveResultIn":"Save result in","extractData":"Extract Data","dataEnrichment":"Data Enrichment","dissolveBoundaries":"Dissolve Boundaries","analyzePatterns":"Analyze Patterns","findClosestFacility":"Find Nearest","mergeLayers":"Merge Layers","summarizeWithin":"Summarize Within","pubRoleMsg":"Your online account has not been assigned to the Publisher role.","findLocations":"Find Locations","findExistingLocations":"Find Existing Locations","bufferTool":"Buffer Data","emptyResultInfoMsg":"The result of your analysis did not return any features. No layer will be created.","invalidServiceName":"The result layer name contains one or more invalid characters (<, >, #, %, :, \", ?, &, +, /, or \\).","summarizeData":"Summarize Data","useMapExtent":"Use current map extent","generateFleetPlan":"Generate Fleet-routing plan","servNameExists":"You already have a result with this name. Please rename your result and resubmit your analysis.","findHotSpots":"Find Hot Spots","performAnalysis":"Perform Analysis","createInterpolatedSurface":"Create Surface","driveTimes":"Create Drive Time Areas","overlayLayers":"Overlay Layers","outputLayerLabel":"Result layer name","bufferToolName":"Create Buffers","correlationReporter":"Explore Correlations","geoenrichLayer":"Enrich Features","findRoute":"Find Route","findNewLocations":"Derive New Locations","useProximity":"Use Proximity","manageData":"Manage Data","orgUsrMsg":"You must be a member of an organization to run this service.","aggregateToolName":"Aggregate Points","outputFileName":"Output file name","invalidServiceNameLength":"The result layer name length should be less than 128 charcaters.","requiredValue":"This value is required."},"common":{"feet":"Feet","nautMiles":"Nautical Miles","apply":"Apply","errorTitle":"Error","statistic":"Statistic","titleLabel":"Title:","fourLabel":"4.","newLabel":"New","close":"Close","kilometers":"Kilometers","previous":"Previous","share":"Share","runAnalysis":"Run Analysis","yards":"Yards","yesLabel":"Yes","oneLabel":"1.","ok":"OK","maximum":"Maximum","miles":"Miles","attribute":"Attribute","help":"Help","comingSoonLabel":"Coming Soon!","deleteLabel":"Delete","outputnameMissingMsg":"Output name is required","minimum":"Minimum","remove":"Remove","inches":"Inch(es)","upload":"Upload","open":"Open","submit":"Submit","save":"Save","edit":"Edit","average":"Average","selectAttribute":"Select attribute","sum":"Sum","standardDev":"Std Deviation","threeLabel":"3.","done":"Done","twoLabel":"2.","create":"Create","warning":"Warning","cancel":"Cancel","noLabel":"No","meters":"Meters","arcgis":"ArcGIS","pointsUnit":"Point(s)","next":"Next","degree":"Decimal Degree(s)"},"extractDataTool":{"selectFtrs":"Select features","outputfileName":"OutputName.zip","itemTags":"Analysis, Extract Data","itemSnippet":"Analysis File item generated from Extract Data","clipFtrs":"Clip features","sameAsLayer":"Same as ${layername}","itemDescription":"File generated from running the Extract Data solution.","lyrpkg":"Layer package","outputDataFormat":"Output data format","sameAsDisplay":"Same as Display","layersToExtract":"Layers to extract","studyArea":"Study area","filegdb":"File geodatabase","shpFile":"Shape file"},"aggregatePointsTool":{"removeAttrStats":"Remove Attribute Statistics","itemTags":"Analysis Result, Aggregate Points, ${pointlayername}, ${polygonlayername}","groupByLabel":"Choose attribute to group by (optional)","itemSnippet":"Analysis Feature Service generated from Aggregate Points","chooseAreaLabel":"Choose area","aggregateDefine":"Count <b>${layername}</b> within","itemDescription":"Feature Service generated from running the Aggregate Points solutions. Points from ${pointlayername} were aggregated to ${polygonlayername}","keepPolygonLabel":"Keep polygons with no points","outputLayerName":"Aggregation of ${pointlayername} to ${polygonlayername}","addStatsLabel":"Add statistic (optional)"},"io":{"proxyNotSet":"esri.config.defaults.io.proxyUrl is not set."},"layers":{"FeatureLayer":{"createUserHours":"Created by ${userId} ${hours} hours ago","editUserMinutes":"Edited by ${userId} ${minutes} minutes ago","editHour":"Edited an hour ago","editMinute":"Edited a minute ago","editUserMinute":"Edited by ${userId} a minute ago","editSeconds":"Edited seconds ago","createUserFull":"Created by ${userId} on ${formattedDate} at ${formattedTime}","editWeekDay":"Edited on ${weekDay} at ${formattedTime}","createUserMinutes":"Created by ${userId} ${minutes} minutes ago","createUserHour":"Created by ${userId} an hour ago","editUserSeconds":"Edited by ${userId} seconds ago","editUserWeekDay":"Edited by ${userId} on ${weekDay} at ${formattedTime}","editUserFull":"Edited by ${userId} on ${formattedDate} at ${formattedTime}","createFull":"Created on ${formattedDate} at ${formattedTime}","editUser":"Edited by ${userId}","noOIDField":"objectIdField is not set [url: ${url}]","editUserHour":"Edited by ${userId} an hour ago","createHour":"Created an hour ago","updateError":"an error occurred while updating the layer","createUserWeekDay":"Created by ${userId} on ${weekDay} at ${formattedTime}","invalidParams":"query contains one or more unsupported parameters","editHours":"Edited ${hours} hours ago","noGeometryField":"unable to find a field of type 'esriFieldTypeGeometry' in the layer 'fields' information. If you are using a map service layer, features will not have geometry [url: ${url}]","createUserMinute":"Created by ${userId} a minute ago","createUser":"Created by ${userId}","createMinute":"Created a minute ago","createMinutes":"Created ${minutes} minutes ago","fieldNotFound":"unable to find '${field}' field in the layer 'fields' information [url: ${url}]","createHours":"Created ${hours} hours ago","editUserHours":"Edited by ${userId} ${hours} hours ago","editMinutes":"Edited ${minutes} minutes ago","createSeconds":"Created seconds ago","createUserSeconds":"Created by ${userId} seconds ago","createWeekDay":"Created on ${weekDay} at ${formattedTime}","editFull":"Edited on ${formattedDate} at ${formattedTime}"},"dynamic":{"imageError":"Unable to load image"},"tiled":{"tileError":"Unable to load tile"},"imageParameters":{"deprecateBBox":"Property 'bbox' deprecated. Use property 'extent'."},"agstiled":{"deprecateRoundrobin":"Constructor option 'roundrobin' deprecated. Use option 'tileServers'."},"graphics":{"drawingError":"Unable to draw graphic "}},"findHotSpotsTool":{"hotspotsPointDefine":"Analyze <b>${layername}</b>  to find statistically significant hot and cold spots ","itemTags":"Analysis Result, Hot Spots, ${layername}, ${fieldname}","itemSnippet":"Analysis Feature Service generated from Find Hot Spots","defineBoundingLabel":"Define where incidents are possible","blayerName":"Drawn Boundaries","Options":"Options","hotspots":"Hot Spots","defaultAggregationOption":"Select aggregation areas","itemDescription":"Feature Service generated from running the Find Hot Spots solution.","chooseAttributeLabel":"Choose an analysis field","provideAggLabel":"Provide aggregation areas for summing incidents","hotspotsPolyDefine":"Analyze <b>${layername}</b>  to find statistically significant hot and cold spots of ","defaultBoundingOption":"Select bounding areas","fieldLabel":"with or without an analysis field","noAnalysisField":"No Analysis Field","outputLayerName":"Hot Spots ${layername}"},"geometry":{"deprecateToMapPoint":"esri.geometry.toMapPoint deprecated. Use esri.geometry.toMapGeometry.","deprecateToScreenPoint":"esri.geometry.toScreenPoint deprecated. Use esri.geometry.toScreenGeometry."},"overlayLayersTool":{"itemTags":"Analysis Result, Overlay layers, ${layername}","unionOutputLyrName":"Union of ${layername} and ${overlayname}","itemSnippet":"Analysis Feature Service generated from Overlay layers","eraseOutputLyrName":"Erase ${layername} with ${overlayname}","chooseOverlayMethod":"Choose overlay method","itemDescription":"Feature Service generated from running the Overlay layers solution.","union":"Union","overlayDefine":"Overlay <b>${layername}</b> with","intersectOutputLyrName":"Intersect of ${layername} and ${overlayname}","overlayLayerPolyMsg":"The Overlay layer should be a Polygon Layer for Union overlay","notSupportedEraseOverlayMsg":"This Overlay layer is not supported for Erase overlay. Defaults to Intersect overlay.","intersect":"Intersect","erase":"Erase","chooseOverlayLayer":"Choose overlay layer"},"arcgis":{"utils":{"geometryServiceError":"Provide a geometry service to open Web Map.","baseLayerError":"Unable to load the base map layer"}}},"dojo/cldr/nls/gregorian":{"days-standAlone-short":["su","ma","ti","ke","to","pe","la"],"months-format-narrow":["T","H","M","H","T","K","H","E","S","L","M","J"],"quarters-standAlone-narrow":["1","2","3","4"],"field-weekday":"viikonpäivä","dateFormatItem-yQQQ":"QQQ y","dateFormatItem-yMEd":"E d.M.yyyy","dateFormatItem-MMMEd":"ccc d. MMM","eraNarrow":["eK","jK"],"days-format-short":["su","ma","ti","ke","to","pe","la"],"dateTimeFormats-appendItem-Day-Of-Week":"{0} {1}","dateFormat-long":"d. MMMM y","months-format-wide":["tammikuuta","helmikuuta","maaliskuuta","huhtikuuta","toukokuuta","kesäkuuta","heinäkuuta","elokuuta","syyskuuta","lokakuuta","marraskuuta","joulukuuta"],"dateTimeFormat-medium":"{1} {0}","dayPeriods-format-wide-pm":"ip.","dateFormat-full":"cccc d. MMMM y","dateFormatItem-yyyyMEd":"E d.M.yyyy","dateFormatItem-Md":"d.M.","dayPeriods-standAlone-wide-pm":"ip.","dayPeriods-format-abbr-am":"ap.","dateTimeFormats-appendItem-Second":"{0} ({2}: {1})","dateFormatItem-yMd":"d.M.yyyy","field-era":"aikakausi","dateFormatItem-yM":"L.yyyy","months-standAlone-wide":["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kesäkuu","heinäkuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu"],"timeFormat-short":"H.mm","quarters-format-wide":["1. neljännes","2. neljännes","3. neljännes","4. neljännes"],"timeFormat-long":"H.mm.ss z","field-year":"vuosi","dateFormatItem-yMMM":"LLL y","dateFormatItem-yQ":"Q/yyyy","dateTimeFormats-appendItem-Era":"{0} {1}","field-hour":"tunti","dateFormatItem-yyyyMMMM":"LLLL y","months-format-abbr":["tammikuuta","helmikuuta","maaliskuuta","huhtikuuta","toukokuuta","kesäkuuta","heinäkuuta","elokuuta","syyskuuta","lokakuuta","marraskuuta","joulukuuta"],"dateFormatItem-yyQ":"Q/yy","timeFormat-full":"H.mm.ss zzzz","dateTimeFormats-appendItem-Week":"{0} ({2}: {1})","field-day-relative+0":"tänään","field-day-relative+1":"huomenna","field-day-relative+2":"ylihuomenna","dateFormatItem-H":"H","months-standAlone-abbr":["tammi","helmi","maalis","huhti","touko","kesä","heinä","elo","syys","loka","marras","joulu"],"quarters-format-abbr":["1. nelj.","2. nelj.","3. nelj.","4. nelj."],"quarters-standAlone-wide":["1. neljännes","2. neljännes","3. neljännes","4. neljännes"],"dateFormatItem-M":"L","days-standAlone-wide":["sunnuntai","maanantai","tiistai","keskiviikko","torstai","perjantai","lauantai"],"dateFormatItem-yyMMM":"LLLL yy","timeFormat-medium":"H.mm.ss","dateFormatItem-Hm":"H.mm","quarters-standAlone-abbr":["1. nelj.","2. nelj.","3. nelj.","4. nelj."],"eraAbbr":["eKr.","jKr."],"field-minute":"minuutti","field-dayperiod":"vuorokaudenaika","days-standAlone-abbr":["su","ma","ti","ke","to","pe","la"],"dateFormatItem-d":"d","dateFormatItem-ms":"mm.ss","quarters-format-narrow":["1","2","3","4"],"field-day-relative+-1":"eilen","dateFormatItem-h":"h a","dateTimeFormat-long":"{1} {0}","dayPeriods-format-narrow-am":"ap.","field-day-relative+-2":"toissapäivänä","dateFormatItem-MMMd":"d. MMM","dateFormatItem-MEd":"E d.M.","dateTimeFormat-full":"{1} {0}","field-day":"päivä","dateFormatItem-yMMMMccccd":"cccc d. MMMM y","days-format-wide":["sunnuntaina","maanantaina","tiistaina","keskiviikkona","torstaina","perjantaina","lauantaina"],"field-zone":"aikavyöhyke","dateTimeFormats-appendItem-Day":"{0} ({2}: {1})","dateFormatItem-y":"y","months-standAlone-narrow":["T","H","M","H","T","K","H","E","S","L","M","J"],"field-year-relative+-1":"viime vuonna","field-month-relative+-1":"viime kuussa","dateFormatItem-yyMM":"M.yy","dateFormatItem-hm":"h.mm a","dateTimeFormats-appendItem-Year":"{0} {1}","dateTimeFormats-appendItem-Hour":"{0} ({2}: {1})","dayPeriods-format-abbr-pm":"ip.","days-format-abbr":["su","ma","ti","ke","to","pe","la"],"dateFormatItem-yMMMd":"d. MMM y","eraNames":["ennen Kristuksen syntymää","jälkeen Kristuksen syntymän"],"days-format-narrow":["S","M","T","K","T","P","L"],"days-standAlone-narrow":["S","M","T","K","T","P","L"],"dateFormatItem-MMM":"LLL","field-month":"kuukausi","dateTimeFormats-appendItem-Quarter":"{0} ({2}: {1})","dayPeriods-format-wide-am":"ap.","dateTimeFormats-appendItem-Month":"{0} ({2}: {1})","dayPeriods-standAlone-wide-am":"ap.","dateTimeFormats-appendItem-Minute":"{0} ({2}: {1})","dateFormat-short":"d.M.yyyy","field-second":"sekunti","dateFormatItem-yMMMEd":"E d. MMM y","field-month-relative+0":"tässä kuussa","field-month-relative+1":"ensi kuussa","dateFormatItem-Ed":"E d.","dateTimeFormats-appendItem-Timezone":"{0} {1}","field-week":"viikko","dateFormat-medium":"d.M.yyyy","field-year-relative+0":"tänä vuonna","field-week-relative+-1":"viime viikolla","dateFormatItem-yyyyM":"M.yyyy","field-year-relative+1":"ensi vuonna","dayPeriods-format-narrow-pm":"ip.","dateFormatItem-yyyyQQQQ":"QQQQ y","dateTimeFormat-short":"{1} {0}","dateFormatItem-Hms":"H.mm.ss","dateFormatItem-hms":"h.mm.ss a","field-week-relative+0":"tällä viikolla","field-week-relative+1":"ensi viikolla"},"dijit/nls/loading":{"loadingState":"Lataus on meneillään...","errorState":"On ilmennyt virhe."},"dojo/cldr/nls/number":{"scientificFormat":"#E0","currencySpacing-afterCurrency-currencyMatch":"[:letter:]","infinity":"∞","list":";","percentSign":"%","minusSign":"-","currencySpacing-beforeCurrency-surroundingMatch":"[:digit:]","decimalFormat-short":"000 bilj'.'","currencySpacing-afterCurrency-insertBetween":" ","nan":"epäluku","plusSign":"+","currencySpacing-afterCurrency-surroundingMatch":"[:digit:]","currencyFormat":"#,##0.00 ¤","currencySpacing-beforeCurrency-currencyMatch":"[:letter:]","perMille":"‰","group":" ","percentFormat":"#,##0 %","decimalFormat-long":"000 biljoonaa","decimalFormat":"#,##0.###","decimal":",","currencySpacing-beforeCurrency-insertBetween":" ","exponential":"E"},"ceviewer/nls/cewebviewer":{"viewerPage":{"sceneReadyTime":"Web Scene Ready (${seconds} seconds)","downloading":"Downloading","unableToLoadData":"Unable to load data","wsDataInvalid":"Invalid Web Scene (3ws) data","unpackingDone":"Unpacking done","nativeCantProcess":"Native parser can't process unzipped data with response type arrayBuffer ","reqUnzip":"Requested unzipped data, ","unableToLoadURL":"Unable to load URL","reading":"Reading","unpackerEmpty":"Unpacker returned empty data. Browser might have run out of memory.","loadingWsId":"Loading webscene id","contactUs":"Contact Us","safariMsg1":"For Safari on Mac OSX, WebGL needs to be enabled in the browser.","safariMsg2":"In File &rarr; Preferences &rarr; Advanced, check <em>Show Develop menu in menu bar</em>.","safariMsg3":"In the newly enabled Develop menu, enable WebGL.","title":"CityEngine Web Viewer","ceWebViewerHelp":"CityEngine Web Viewer Help","zipOnlyAB":"Zipped data only supported with responseType arraybuffer ","gotUnzip":"got unzipped data","customUnzipAndStream":"Using custom unzip and streamparser on arraybuffer","badBrowser":"Your browser does not seem to support WebGL.","gzipInvalid":"Invalid gzip file: ","webviewerVersion":"CE Web Viewer version","fallbackSizeMsg":"Gzipped size ${gzipSize} MB above critical ${criticalSize} MB","fallbackLoaderMsg":"Fallback to custom unzip on arraybuffer and custom streamParser","errorStatus":" Error status ${status} on ${url}","gotGzip":"got gzipped data","detected3wsVersion":"Web Scene version","streamParseOnUnzippedAB":"Using streamparser on unzipped arraybuffer","noWebSceneMsg":"No webscene specified.","troubleMsg1":"Find out more about your browsers WebGL compatibility and other compatible browsers at <a href=\"http://get.webgl.org\" target=\"_blank\">get.webgl.org</a><br>","useUrlParameter":" Use url parameter '3dWebScene' to specify ArcGIS online item id or local 3ws file","troubleMsg2":"Troubleshoot problems at <a href=\"http://get.webgl.org/troubleshooting\" target=\"_blank\">get.webgl.org/troubleshooting</a>","loadingSceneFile":"Loading scene file","badHardware":"Your hardware does not seem to support WebGL.","unsupported3wsVersion":"unsupported Web Scene (3ws) version","xhrEmpty":"Returned data is empty. Browser might have run out of memory.","initializing":"Initializing...","streamPOnlyOnAB":"StreamParser only supported on responseType arraybuffer ","ieMsg":"Internet Explorer does not have WebGL support at the moment. You might want to install <a href=\"http://www.google.com/chromeframe?quickenable=true\" target=\"_blank\">Install Google Chrome Frame <br>(Internet Explorer Plugin)</a> to enable WebGL in Internet Explorer.","dataLoadedTime":"Data loaded in ${seconds} seconds","reqGzip":"Requested gzipped data, ","bypassWebglCheck":"Bypassing WebGL detection check","noGzipEnc":"Server does not return gzip encoding header"},"ui":{"nameOfSelObject":"Name of selected object","statsField":"Field","sharePaneDisabledInfo":"It looks like WebScene is running in a <a href='http://en.wikipedia.org/wiki/Private_network' target='_blank'>private network</a> (private ip adress). People outside your network will most likely not be able to access this WebScene. Publish your WebScene app to a public server to share the link with others.","shareFacebookTxt1":"Explore ${sceneName} (CityEngine Web Scene)","shareFacebookTxt2":"Create and share your 3D Web Scenes with CityEngine. Visit esri.com/cityengine to download free 30-day trial.","sharePaneDisabledTitle":"Sharing deactivated","materialIs":"Material is ","sharePaneDisabledByOrg":"This Web Scene can not be shared because this feature has been disabled by your organization.","unnamedScene":"Unnamed Scene","embedMsg":"Embedded Web Viewer with ${reducedOrFull} UI","embedCustom":"Custom-size","embedSmall":"Small (reduced user interface)","resultInLayer":"in layer ","ratings":"ratings","statsKey":"Key","infoPaneTitle":"Information","resultIn":" in ","detailsMoreDetails":"More details...","width":"width","showLoadingDetails":"Show loading details","statsCount":"Count","enableAutoplay":"Enable autoplay","dateSummer":"Summer (June 21)","infoProperties":"Properties","lastModified":"Last modified","sceneTitle":"${sceneName}  (CityEngine Web Scene)","ratingThanks":"Thanks for rating this item!","geoComment":"GeoComment","embedFull":"full","about3d":"Details","selectObj3D":"Select object in 3D Scene to display information","sunLight":"Sunlight","this3dScene":"this 3D City Scene","shareFacebook":"Share on Facebook","shareTwitter":"Post on Twitter","shareEmailTxt1":"Have a look at this CityEngine Web Scene:","shareNotPublicWarn":"This Web Scene is not shared with the public.","shareEmailTxt2":"You can create and share your own 3D Web Scenes with Esri CityEngine. Visit http://www.esri.com/cityengine to download free, fully-functional 30-day trial.","dateSpring":"Spring (March 20)","directShadow":"Direct Shadow (cast by sunlight)","showLayer":"Show layer","dragSunSliderHint":"Drag Slider","shareNotPublicHint":"To enable share buttons, set share settings of Web Scene item to public and refresh.","statsAvg":"Average","showMore":"Show More","webSceneViewer":"3D Web Scene Viewer","dateWinter":"Winter (December 21)","detailsSize":"${filesize} MB","commentPublish":"Publish Comment","thumbnailUploadFail":"Could not save thumbnail","sunrise":"sunrise","help":"Help","addtnlHiddenLyrs":"Additional results in hidden layers:","searchPaneTitle":"Search","views":"views","statsPercentage":"Percentage","shareEmail":"Send E-Mail","size":"Size","detailsNoDesc":"No description","shareTwitterTxt":"Explore '${sceneName}'  in 3D with your browser:\n","exitComparisonMode":"Exit Comparison Mode","sharePaneTitle":"Share","detailsDesc":"Description","commentsTitle":"Comments","getUrl":"getting url...","embedReduced":"reduced","diffuseShadow":"Diffuse Shadows (ambient occlusion)","comment":"Comment","sharePaneDisabledAction":"I know what I'm doing. Activate Share Pane.","shortUrl":"Short URL","ratingOwnMsg":"You cannot rate your own items","commentFail":"Could not send comment","settingsPaneTitle":"Settings","keyValueIs":"${key} is ${value}","author":"Author","longUrl":"Long URL","embedLarge":"Large (full user interface)","height":"height","commentHint":"to leave a comment","shareEmailSubject":"${sceneName}  in 3D (CityEngine Web Scene)","shareNotPublicEditItem":"Edit Web Scene Item...","shadowing":"Shadowing","thumbnailUploadSuccess":"New thumbnail saved","layersPaneTitle":"Layers","infoReports":"Reports","sunset":"sunset","dateFall":"Fall (September 22)","ratingFail":"Could not update rating","reducedUIexploreFull":"Explore in full viewer","shareLink":"Share Link","nameIs":"name is ","statsStatistics":"Statistics","statsSum":"Sum","embedInWebsite":"Embed in Website","resultsFound":" results found","ratingHint":"to rate this item","searchHint":"Find objects, attributes and more...","statsValue":"Value","commentAdd":"Add comment...","shareNotPublicAnyway":"Share anyway","infoAttributes":"Attributes","detailsNoSummary":"No summary"},"signInOut":{"signOutDiffUser":"to load web scene as a different user","signOutNonPublicWarning":"You are viewing a non-public web scene. Signing out will leave this page.","signOut":"Sign Out","signIn":"Sign In"},"common":{"arcgisOnline":"ArcGIS Online","cancel":"Cancel","ok":"OK","details":"Details","more":"More"}},"dijit/nls/common":{"buttonOk":"OK","buttonCancel":"Peruuta","buttonSave":"Tallenna","itemClose":"Sulje"}});