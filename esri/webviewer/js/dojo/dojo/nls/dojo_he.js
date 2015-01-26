/*
	Copyright (c) 2004-2012, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/nls/dojo_he",{"dijit/form/nls/validate":{"rangeMessage":"הערך מחוץ לטווח.","invalidMessage":"הערך שצוין אינו חוקי.","missingMessage":"זהו ערך דרוש."},"esri/nls/jsapi":{"identity":{"noAuthService":"לא ניתן לגשת לשירות האימות.","lblCancel":"ביטול","lblUser":"שם משתמש:","title":"הירשם","forbidden":"שם המשתמש והסיסמא תקינים, אך אין לך גישה למשאב זה.","errorMsg":"משתמש/סיסמא לא חוקיים. אנא נסה שנית.","lblItem":"פריט","lblOk":"אישור","info":"אנא הכנס לחשבונך כדי לגשת לפריט ב ${server} ${resource}","lblSigning":"הירשם...","invalidUser":"המשתמש או הסיסמא שהכנסת לא נכונים.","lblPwd":"סיסמה:"},"map":{"deprecateShiftDblClickZoom":"Map.(enable/disable)ShiftDoubleClickZoom מיושן. התנהגות ההתמקדות Shift-Double-Click לא תיתמך בעתיד.","deprecateReorderLayerString":"Map.reorderLayer(/*String*/ id, /*Number*/ index) deprecated. השתמש בMap.reorderLayer(/*Layer*/ layer, /*Number*/ index)."},"virtualearth":{"vetiledlayer":{"bingMapsKeyNotSpecified":"חייב להינתן BingMapsKey."},"vegeocode":{"bingMapsKeyNotSpecified":"חייב להינתן BingMapsKey.","requestQueued":"לא נמצא טוקן. הבקשה תמתין בתור לביצוע לאחר שטוקן השרת יאוחזר."}},"bufferTool":{"sizeHelp":"To create multiple buffers, enter distances separated by spaces (2 3 5).","typeLabel":"סוג חיץ","disks":"דיסקים","round":"עגול","right":"ימין","distanceMsg":"מותר להכניס רק ערכים נומריים","itemDescription":"שירות ישויות מאותחל מתוך תוצאות הרצת חיץ על ישויות. החיץ נוצר על קלט מתוך ${layername} הגדרות החיץ לפי ${distance_field} ${units}","resultLabel":"שם שכבת התוצאה","around":"מסביב","sideType":"סוג צד","flat":"שטוח","multipleDistance":"חייצי מרחק מסוג Multiple אמור להיות","outputLayerName":"חייצים של ${layername}","rings":"טבעות","sizeLabel":"הכנס גודל חיץ","itemTags":"Analysis Result, Buffer, ${layername}","areaofInputPoly":"שטח של פוליגוני קלט בפוליגוני חיץ","left":"שמאל","bufferDefine":"צור חייצים מתוך <b>${layername}</b>","distance":"מרחק","itemSnippet":"ניתוח שירות ישויות אותחל מתוך חיץ","endType":"סוג סוף","field":"שדה","optionsLabel":"אפשרויות","include":"כלול","exclude":"הרחקה","dissolve":"מיזוג","overlap":"חפיפה"},"widgets":{"attributeInspector":{"NLS_title":"עריכת מאפיינים","NLS_validationFlt":"הערך חייב להיות מספר צף.","NLS_noFeaturesSelected":"לא נבחרו ישויות","NLS_validationInt":"הערך חייב להיות מספר שלם.","NLS_next":"הבא","NLS_errorInvalid":"לא תקין","NLS_previous":"קודם","NLS_first":"ראשון","NLS_deleteFeature":"מחק","NLS_of":"מתוך","NLS_last":"אחרון"},"legend":{"NLS_polygons":"פוליגונים","NLS_lines":"קווים","NLS_noLegend":"אין מקרא","NLS_points":"נקודות","NLS_creatingLegend":"יצירת מקרא"},"directions":{"getDirections":"קבל הנחיות","findOptimalOrder":"סדר אופטימלי","showOptions":"הצג אפשרויות","reverseDirections":"הנחיות לכיוון ההפוך","addDestination":"הוסף יעד","returnToStart":"חזור להתחלה","error":{"maximumStops":"הגעה למספר המקסימלי של עצירות","notEnoughStops":"הכנס מוצא ויעד.","invalidStopType":"סוג עצירה לא חוקי","locator":"לא ניתן למצוא מיקום.","noAddresses":"לא הוחזרו כתובות.","unknownStop":"לא ניתן למצוא מיקום '<name>'.","noStops":"לא ניתנו עצירות בכדי להוסיף.","routeTask":"לא ניתן ליצור מסלול לכתובות אלה.","locatorUndefined":"לא ניתן למצוא כתובת לפי מיקום. URL של מגדיר עיגון כתובות לא מוגדר."},"hideOptions":"הסתר אפשרויות","units":{"KILOMETERS":{"name":"קילומטרים","abbr":"km."},"MILES":{"name":"מיילים","abbr":"mi."},"METERS":{"name":"מטרים","abbr":"m."},"NAUTICAL_MILES":{"name":"nautical miles","abbr":"nm."}},"useTraffic":"השתמש בתנועה","time":{"minute":"דקה","minutes":"דקות","hour":"שעה","hours":"שעות"},"printNotes":"הוסף הערות כאן","viewFullRoute":"התמקד בכל המסלול","printDisclaimer":"הוראות נסיעה נמסרות למטרות תכנון בלבד וכפופות ל <a href='http://www.esri.com/legal/software-license' target='_blank'>Esri's terms of use</a>. תנאי דרך משתנים תדיר ועשויים לגרום להבדלים בהוראות הנסיעה שלך וחייבים להילקח בחשבון יחד עם שילוט הדרך והגבלות הכתובות בחוק. האחריות לשימוש היא על המשתמש בלבד.","print":"הדפס"},"timeSlider":{"NLS_previous":"קודם","NLS_play":"נגן/הפסק","NLS_next":"הבא","NLS_invalidTimeExtent":"TimeExtent לא הוגדר, או בפורמט שגוי.","NLS_first":"ראשון"},"templatePicker":{"loading":"טוען...","creationDisabled":"יצירת ישויות הופסקה עבור כל השכבות"},"editor":{"tools":{"NLS_pointLbl":"נקודה","NLS_reshapeLbl":"עצב מחדש","NLS_arrowLeftLbl":"חץ שמאלה","NLS_triangleLbl":"משולש","NLS_autoCompleteLbl":"השלמה אוטומטית","NLS_arrowDownLbl":"חץ למטה","NLS_selectionRemoveLbl":"החסר מהנבחרים","NLS_unionLbl":"איחוד","NLS_freehandPolylineLbl":"קו בשרטוט חופשי","NLS_rectangleLbl":"מלבן","NLS_ellipseLbl":"אליפסה","NLS_attributesLbl":"מאפיינים","NLS_arrowUpLbl":"חץ למעלה","NLS_arrowRightLbl":"חץ ימינה","NLS_undoLbl":"בטל שינויים","NLS_arrowLbl":"חץ","NLS_cutLbl":"גזור","NLS_polylineLbl":"קו","NLS_selectionClearLbl":"נקה נבחרים","NLS_polygonLbl":"פוליגון","NLS_selectionUnionLbl":"איחוד","NLS_freehandPolygonLbl":"פוליגון בשרטוט חופשי","NLS_deleteLbl":"מחק","NLS_extentLbl":"תיחום","NLS_selectionNewLbl":"בחירה חדשה","NLS_circleLbl":"מעגל","NLS_redoLbl":"בצע מחדש","NLS_selectionAddLbl":"הוסף לנבחרים"}},"mosaicRule":{"queryOperatorLabel":"פעולה:","refreshLockRasterIdsLabel":"רענן","recognizedMosaicMethodsList":"None,ByAttribute,Center,Nadir,LockRaster,NorthWest,Seamline","selectAllLabel":"בחר הכל","lockRasterRequestErrorMsg":"חיפוש אחר שגיאה...","lockRasterRequestDoneMsg":"בוצע...","lockRasterRequestNoRasterMsg":"לא נמצאו רסטרים...","mosaicOperatorLabel":"פעולת מוזאיקה","mosaicMethodLabel":"שיטת מוזאיקה:","lockRasterIdLabel":"נעל Id של רסטר:","orderValueLabel":"סדר ערך:","queryFieldLabel":"שדה:","orderFieldNotFound":"לא זמין","ascendingLabel":"עולה:","lockRasterRequestMsg":"מחפש...","queryLabel":"שאילתא:","orderFieldLabel":"סדר שדה:","queryValueLabel":"ערך:"},"attachmentEditor":{"NLS_error":"קרתה שגיאה.","NLS_attachments":"קישורים:","NLS_none":"ללא","NLS_add":"הוסף","NLS_fileNotSupported":"סוג הקובץ לא נתמך."},"overviewMap":{"NLS_invalidSR":"היחוס המרחבי של המפה הנתונה לא תואם עם המפה הראשית","NLS_invalidType":"סוג שכבה לא נתמך. הסוגים הנתמכים הם  'TiledMapServiceLayer' ו- 'DynamicMapServiceLayer'","NLS_noMap":"'map' לא נמצא בפרמטרי הקלט","NLS_hide":"הסתר חלון סקירה כללית של המפה","NLS_drag":"גרור לשינוי תיחום המפה","NLS_maximize":"הגדל למקסימום","NLS_noLayer":"למפה העיקרית אין שכבת בסיס","NLS_restore":"שחזר","NLS_show":"הצג חלון סקירה כללית של המפה"},"measurement":{"NLS_length_kilometers":"קילומטרים","NLS_area_sq_miles":"מיילים מרובע","NLS_length_yards":"יארד","NLS_distance":"מרחק","NLS_area_acres":"אקרים","NLS_resultLabel":"תוצאות מדידה","NLS_length_miles":"מיילים","NLS_area_hectares":"הקטרים","NLS_deg_min_sec":"DMS","NLS_area":"שטח","NLS_area_sq_meters":"מטרים רבועים","NLS_latitude":"קו רוחב","NLS_area_sq_kilometers":"קילומטרים רבועים","NLS_area_sq_feet":"רגל רבועי","NLS_longitude":"קו אורך","NLS_location":"מיקום","NLS_decimal_degrees":"מעלות","NLS_length_feet":"רגל","NLS_area_sq_yards":"יארדים רבועים","NLS_length_meters":"מטרים","NLS_map_coordinate":"קואורדינטות מפה"},"bookmarks":{"NLS_add_bookmark":"הוסף סימניה","NLS_new_bookmark":"ללא כותרת","NLS_bookmark_edit":"עריכה","NLS_bookmark_remove":"הסר"},"renderingRule":{"rendererLabelTitle":"Renderers:","bandCombinationLabelTitle":"שילוב רצועות:","bandNamesRequestMsg":"בקשת מידע על רצועה"},"Geocoder":{"main":{"geocoderMenuButtonTitle":"שנה מעגן כתובות","untitledGeocoder":"מעגן כתובות ללא כותרת","clearButtonTitle":"נקה חיפוש","searchButtonTitle":"חיפוש","geocoderMenuCloseTitle":"סגור תפריט","geocoderMenuHeader":"בחר מעגן כתובות"},"esriGeocoderName":"מעגן כתובות עולמי של Esri"},"popup":{"NLS_attach":"קישורים","NLS_nextFeature":"הישות הבאה","NLS_moreInfo":"מידע נוסף","NLS_searching":"מחפש","NLS_maximize":"הגדל למקסימום","NLS_noAttach":"לא נמצאו קישורי קבצים","NLS_noInfo":"אין מידע זמין","NLS_pagingInfo":"(${index} מתוך ${total})","NLS_restore":"שחזר","NLS_prevFeature":"ישות קודמת","NLS_nextMedia":"המדיה הבאה","NLS_close":"סגור","NLS_zoomTo":"התמקד אל","NLS_prevMedia":"המדיה הקודמת"},"HistogramTimeSlider":{"NLS_play":"נגן/הפסק","NLS_fullRange":"טווח מלא","NLS_range":"טווח","NLS_invalidTimeExtent":"TimeExtent לא הוגדר, או בפורמט שגוי.","NLS_overview":"OVERVIEW","NLS_cumulative":"מצטבר"},"print":{"NLS_printing":"מדפיס","NLS_printout":"הדפסה","NLS_print":"הדפס"}},"toolbars":{"draw":{"addShape":"לחץ להוספת צורה, או לחץ למטה כדי להתחיל ושחרר בסיום","finish":"לחיצה כפולה לסיום","invalidType":"סוג גיאומטריה  לא נתמך","resume":"לחץ להמשך שרטוט","addPoint":"הקש להוספת נקודה","freehand":"לחץ כלפי מטה כדי להתחילושחרר כדי לסיים","complete":"לחיצה כפולה להשלמה","start":"לחץ כדי להתחיל בשרטוט","addMultipoint":"הקש כדי להתחיל בהוספת נקודות","convertAntiClockwisePolygon":"פוליגונים משורטטים נגד כיון השעון יתהפכו לכיוון השעון."},"edit":{"invalidType":"לא ניתן להפעיל את הכלי. בדוק אם הכלי תקף לסוג הגיאומטריה הנתונה.","deleteLabel":"מחק"}},"tasks":{"gp":{"gpDataTypeNotHandled":"סוג נתוני GP לא מטופל."},"query":{"invalid":"אין אפשרות לבצע את השאילתה. נא לבדוק את הנתונים."},"na":{"route":{"routeNameNotSpecified":"לא הוגדר 'RouteName' עבור לפחות עצירה אחת ב- stops FeatureSet."}}},"driveTimes":{"measureLabel":"מדידה:","toolDefine":"צור אזורים סביב <b>${layername}</b>","itemTags":"זמני נסיעה, ${layername}","itemSnippet":"ניתוח שירות ישויות מאותחל מתוך יצירת זמני נסיעה","measureHelp":"בכדי לקבל תוצאה של מספר שטחים סביב כל נקודה, הקלד גדלים המופרדים על ידי רווח (2 3.5 5)","itemDescription":"שירות ישויות מאותחל מתוך הרצת פתרון יצירת זמני נסיעה.","areaLabel":"שטחים מנקודות שונות:","trafficLabel":"השתמש בתנאי תנועה (אופציונלי)","resultLabel":"שם שכבת התוצאה","outputLayerName":"נסיעה מ- ${layername}: ---"},"analysisTools":{"aggregateTool":"קיבוץ נקודות","createDensitySurface":"יצירת משטח צפיפויות","sumnearby":"סיכום ליד","attributeCalculator":"Field Calculator","createBuffers":"יצירת חיץ","saveResultIn":"Save result in","extractData":"ייצוא נתונים","dataEnrichment":"העשרת מידע","dissolveBoundaries":"מיזוג גבולות","analyzePatterns":"ניתוח תבניות","findClosestFacility":"מציאת המיקום הקרוב ביותר","mergeLayers":"חיבור שכבות","summarizeWithin":"סיכום בתוך","pubRoleMsg":"לחשבון המקוון שלך אין הרשאה כמפרסם","findLocations":"מציאת מיקום","findExistingLocations":"מציאת מיקומים קיימים","bufferTool":"נתוני חיץ","emptyResultInfoMsg":"תוצאות הניתוח שלך לא החזירו ישויות. לא תיווצר שכבה.","invalidServiceName":"שם שכבת התוצאה מכיל תו אחד או יותר לא חוקיים (<, >, #, %, :, \", ?, &, +, /, or \\).","summarizeData":"סיכום נתונים","useMapExtent":"Use current map extent","generateFleetPlan":"ייצור תכנית מסלולים לצי רכב","servNameExists":"You already have a result with this name. Please rename your result and resubmit your analysis.","findHotSpots":"מציאת נקודות חמות","performAnalysis":"ביצוע ניתוח","createInterpolatedSurface":"יצירת משטח","driveTimes":"Create Drive Time Areas","overlayLayers":"כיסוי שכבות","outputLayerLabel":"שם שכבת התוצאה","bufferToolName":"יצירת חיץ","correlationReporter":"חקירת עוצמת קשרים","geoenrichLayer":"הוספה לישויות","findRoute":"מציאת מסלול","findNewLocations":"גזירת מיקומים חדשים","useProximity":"שימוש בסמיכות","manageData":"ניהול נתונים","orgUsrMsg":"בכדי להריץ שירות זה, חובה על המשתמש להיות חבר בארגון.","aggregateToolName":"קיבוץ נקודות","outputFileName":"שם קובץ תוצר","invalidServiceNameLength":"The result layer name length should be less than 128 charcaters.","requiredValue":"This value is required."},"common":{"feet":"רגל","nautMiles":"מיילים ימיים","apply":"יישם","errorTitle":"שגיאה","statistic":"סטטיסטיקה","titleLabel":"כותרת:","fourLabel":"4.","newLabel":"חדש","close":"סגור","kilometers":"קילומטרים","previous":"קודם","share":"שתף","runAnalysis":"הרצת ניתוח","yards":"יארד","yesLabel":"כן","oneLabel":"1.","ok":"אישור","maximum":"מקסימום","miles":"מיילים","attribute":"מאפיין","help":"עזרה","comingSoonLabel":"בקרוב!","deleteLabel":"מחק","outputnameMissingMsg":"יש להכניס שם תוצר","minimum":"מינימום","remove":"הסר","inches":"אינצ'(ים)","upload":"טען","open":"פתח","submit":"סיכום","save":"שמור","edit":"עריכה","average":"ממוצע","selectAttribute":"בחר מאפיין","sum":"סך","standardDev":"סטיית תקן","threeLabel":"3.","done":"בוצע","twoLabel":"2.","create":"צור","warning":"אזהרה","cancel":"ביטול","noLabel":"לא","meters":"מטרים","arcgis":"ArcGIS","pointsUnit":"נקודה(ות)","next":"הבא","degree":"מעלות דצימליות"},"extractDataTool":{"selectFtrs":"בחר ישויות","outputfileName":"OutputName.zip","itemTags":"ניתוח, ייצוא נתונים","itemSnippet":"פריט קובץ הניתוח נוצר צחצוא הנתונים","clipFtrs":"גזור ישויות","sameAsLayer":"בדומה ל- ${layername}","itemDescription":"קובץ מאותחל מתוך הרצת פתרון ייצוא נתונים.","lyrpkg":"חבילת שכבה","outputDataFormat":"פורמט נתוני פלט","sameAsDisplay":"בדומה לתצוגה","layersToExtract":"שכבות לייצוא","studyArea":"שטח לימוד","filegdb":"File geodatabase","shpFile":"Shape file"},"aggregatePointsTool":{"removeAttrStats":"הסרת סטטיסטיקה של מאפיינים","itemTags":"Analysis Result, Aggregate Points, ${pointlayername}, ${polygonlayername}","groupByLabel":"בחר מאפיין לקבץ על פיו (אפשרי)","itemSnippet":"ניתוח שירות ישויות אותחל מתוך קיבוץ נקודות","chooseAreaLabel":"בחר אזור","aggregateDefine":"ספירה בתוך <b>${layername}</b>","itemDescription":"Feature Service generated from running the Aggregate Points solutions. Points from ${pointlayername} were aggregated to ${polygonlayername}","keepPolygonLabel":"השאר פוליגונים ללא נקודות","outputLayerName":"קיבוץ של  ${pointlayername} ל- ${polygonlayername}","addStatsLabel":"Add statistic (optional)"},"io":{"proxyNotSet":"esri.config.defaults.io.proxyUrl לא מוגדר."},"layers":{"FeatureLayer":{"createUserHours":"נוצר על ידי  ${userId}  לפני ${hours} שעות","editUserMinutes":"נערך על ידי  ${userId} לפני ${minutes} דקות","editHour":"נערך לפני שעה","editMinute":"נערך לפני דקה","editUserMinute":"נערך על ידי  ${userId}  לפני  דקה","editSeconds":"נערך לפני שניות","createUserFull":"נוצר על ידי  ${userId} ב ${formattedDate} ב  ${formattedTime}","editWeekDay":"נערך ב ${weekDay} ב ${formattedTime}","createUserMinutes":"נוצר על ידי  ${userId}  לפני ${minutes} דקות","createUserHour":"נוצר על ידי  ${userId}  לפני  שעה","editUserSeconds":"נערך על ידי  ${userId}  לפני  שניה","editUserWeekDay":"נערך על ידי  ${userId} ב ${weekDay} ב  ${formattedTime}","editUserFull":"נערך על ידי  ${userId} ב ${formattedDate} ב  ${formattedTime}","createFull":"נוצר ב ${formattedTime} ${formattedDate}","editUser":"נערך על ידי ${userId}","noOIDField":"objectIdField לא הוגדר [url: ${url}]","editUserHour":"נערך על ידי  ${userId}  לפני  שעה","createHour":"נוצר לפני שעה","updateError":"אירעה שגיאה בזמן עדכון השכבה.","createUserWeekDay":"נוצר על ידי  ${userId} ב ${weekDay} ב  ${formattedTime}","invalidParams":"השאילתא מכילה פרמטר אחד או יותר שאינו נתמך","editHours":"נערך לפני ${hours} שעות","noGeometryField":"לא ניתן למצוא שדה מסוג 'esriFieldTypeGeometry' במידע השכבה 'fields'. אם הנך משתמש בשכבת שירות מפה לא תהיה לישויות גיאומטרה,  [url: ${url}]","createUserMinute":"נוצר על ידי  ${userId}  לפני  דקה","createUser":"נוצר על ידי ${userId}","createMinute":"נוצר לפני דקה","createMinutes":"נוצר  ${minutes} לפני דקה","fieldNotFound":"לא ניתן למצוא שדה '${field}' במידע השכבה 'fields' [url: ${url}]","createHours":"נוצר לפני ${hours} שעות","editUserHours":"נערך על ידי  ${userId} לפני ${hours} שעות","editMinutes":"נערך לפני  ${minutes} דקות","createSeconds":"נוצר לפני שניות","createUserSeconds":"נוצר על ידי  ${userId}  לפני  שניה","createWeekDay":"נוצר ב ${weekDay} ${formattedTime}","editFull":"נוצר ב ${formattedTime}ב ${formattedDate}"},"dynamic":{"imageError":"לא ניתן לטעון את התמונה"},"tiled":{"tileError":"לא ניתן לטעון את האריח"},"imageParameters":{"deprecateBBox":"מאפיין 'bbox' מיוש. השתמש במאפיין 'extent'."},"agstiled":{"deprecateRoundrobin":"אפשרות ה Constructor 'roundrobin' מיושנת. השתמש באופציה 'tileServers'."},"graphics":{"drawingError":"לא ניתן לצייר את הגרפיקה "}},"findHotSpotsTool":{"hotspotsPointDefine":"בצע ניתוח של <b>${layername}</b> בכדי למצוא נקודות חמות וקרות שיש להן משמעות סטטיסטית ","itemTags":"Analysis Result, Hot Spots, ${layername}, ${fieldname}","itemSnippet":"שירות ישויות מאותחל מתוך מציאת נקודות חמות","defineBoundingLabel":"הגדר היכן עשויים להתרחש אירועים","blayerName":"גבולות משורטטים","Options":"אפשרויות","hotspots":"נקודות חמות","defaultAggregationOption":"בדוק אזורים שעברו קיבוץ","itemDescription":"שירות ישות מאותחל מתוך הרצת פתרון מציאת נקודות חמות.","chooseAttributeLabel":"בחר את שדה הניתוח","provideAggLabel":"ספק אזורים לקיבוץ בכדי לסכם אירועים","hotspotsPolyDefine":"בצע ניתוח של <b>${layername}</b> בכדי למצוא נקודות חמות וקרות שיש להן משמעות סטטיסטית מתוך ","defaultBoundingOption":"בחר אזורים תוחמים","fieldLabel":"עם או ללא שדה ניתוח","noAnalysisField":"אין שדה ניתוח","outputLayerName":"נקודות חמות ${layername}"},"geometry":{"deprecateToMapPoint":"esri.geometry.toMapPoint מיושן. השתמש ב esri.geometry.toMapGeometry.","deprecateToScreenPoint":"esri.geometry.toScreenPoint מיושן. השתמש ב esri.geometry.toScreenGeometry."},"overlayLayersTool":{"itemTags":"Analysis Result, Overlay layers, ${layername}","unionOutputLyrName":"Union of ${layername} and ${overlayname}","itemSnippet":"ניתוח שירות ישויות מאותחל מתוך שכבות כיסוי","eraseOutputLyrName":"Erase ${layername} with ${overlayname}","chooseOverlayMethod":"בחר צורת כיסוי","itemDescription":"שירות ישויות מאותחל מתוך הרצת פתרון כיסוי שכבות.","union":"איחוד","overlayDefine":"כיסוי <b>${layername}</b> עם","intersectOutputLyrName":"Intersect of ${layername} and ${overlayname}","overlayLayerPolyMsg":"שכבת הכיסוי צריכה להיות פוליגונלית לביצוע איחוד כיסוי","notSupportedEraseOverlayMsg":"שכבת הכיסוי הזו לא נתמכת לפעולת מחיקת כיסוי. ברירות מחדל לחיתוך כיסוי.","intersect":"חיתוך","erase":"למחוק","chooseOverlayLayer":"בחר שכבת כיסוי"},"arcgis":{"utils":{"geometryServiceError":"ספק שירות גיאומוריה לפתיחת Web Map.","baseLayerError":"לא ניתן לטעון את שכבת מפת הבסיס"}}},"dojo/cldr/nls/gregorian":{"days-standAlone-short":["א'","ב'","ג'","ד'","ה'","ו'","ש'"],"months-format-narrow":["1","2","3","4","5","6","7","8","9","10","11","12"],"quarters-standAlone-narrow":["ר1","ר2","ר3","ר4"],"field-weekday":"יום בשבוע","dateFormatItem-yQQQ":"y QQQ","dateFormatItem-yMEd":"E, d/M/y","dateFormatItem-MMMEd":"E, d בMMM","eraNarrow":["לפנה״ס","לסה״נ"],"days-format-short":["א'","ב'","ג'","ד'","ה'","ו'","ש'"],"dateTimeFormats-appendItem-Day-Of-Week":"{0} {1}","dateFormat-long":"d בMMMM y","months-format-wide":["ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר"],"dateTimeFormat-medium":"{1}, {0}","dayPeriods-format-wide-pm":"אחה״צ","dateFormat-full":"EEEE, d בMMMM y","dateFormatItem-Md":"d/M","dayPeriods-format-abbr-am":"AM","dateTimeFormats-appendItem-Second":"{0} ({2}: {1})","dateFormatItem-yMd":"d.M.yyyy","field-era":"תקופה","dateFormatItem-yM":"M.yyyy","months-standAlone-wide":["ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר"],"timeFormat-short":"HH:mm","quarters-format-wide":["רבעון 1","רבעון 2","רבעון 3","רבעון 4"],"timeFormat-long":"HH:mm:ss z","field-year":"שנה","dateFormatItem-yMMM":"MMM y","dateFormatItem-yQ":"yyyy Q","dateTimeFormats-appendItem-Era":"{0} {1}","field-hour":"שעה","dateFormatItem-yyyyMMMM":"MMMM y","dateFormatItem-MMdd":"dd/MM","months-format-abbr":["ינו","פבר","מרץ","אפר","מאי","יונ","יול","אוג","ספט","אוק","נוב","דצמ"],"dateFormatItem-yyQ":"Q yy","timeFormat-full":"HH:mm:ss zzzz","dateTimeFormats-appendItem-Week":"{0} ({2}: {1})","field-day-relative+0":"היום","field-day-relative+1":"מחר","field-day-relative+2":"מחרתיים","dateFormatItem-H":"HH","months-standAlone-abbr":["ינו׳","פבר׳","מרץ","אפר׳","מאי","יונ׳","יול׳","אוג׳","ספט׳","אוק׳","נוב׳","דצמ׳"],"quarters-format-abbr":["רבעון 1","רבעון 2","רבעון 3","רבעון 4"],"quarters-standAlone-wide":["רבעון 1","רבעון 2","רבעון 3","רבעון 4"],"dateFormatItem-M":"L","days-standAlone-wide":["יום ראשון","יום שני","יום שלישי","יום רביעי","יום חמישי","יום שישי","יום שבת"],"dateFormatItem-MMMMd":"d בMMMM","dateFormatItem-yyMMM":"MMM yyyy","timeFormat-medium":"HH:mm:ss","dateFormatItem-Hm":"HH:mm","quarters-standAlone-abbr":["רבעון 1","רבעון 2","רבעון 3","רבעון 4"],"eraAbbr":["לפנה״ס","לסה״נ"],"field-minute":"דקה","field-dayperiod":"לפה״צ/אחה״צ","days-standAlone-abbr":["יום א׳","יום ב׳","יום ג׳","יום ד׳","יום ה׳","יום ו׳","שבת"],"dateFormatItem-d":"d","dateFormatItem-ms":"mm:ss","quarters-format-narrow":["1","2","3","4"],"field-day-relative+-1":"אתמול","dateFormatItem-h":"h a","dateTimeFormat-long":"{1} {0}","dayPeriods-format-narrow-am":"AM","field-day-relative+-2":"שלשום","dateFormatItem-MMMd":"d בMMM","dateFormatItem-MEd":"E, d/M","dateTimeFormat-full":"{1} {0}","dateFormatItem-yMMMM":"MMMM y","field-day":"יום","days-format-wide":["יום ראשון","יום שני","יום שלישי","יום רביעי","יום חמישי","יום שישי","יום שבת"],"field-zone":"אזור","dateFormatItem-yyyyMM":"MM/yyyy","dateTimeFormats-appendItem-Day":"{0} ({2}: {1})","dateFormatItem-y":"y","months-standAlone-narrow":["1","2","3","4","5","6","7","8","9","10","11","12"],"field-year-relative+-1":"שנה שעברה","field-month-relative+-1":"חודש שעבר","dateFormatItem-yyMM":"MM/yy","dateFormatItem-hm":"h:mm a","dateTimeFormats-appendItem-Year":"{0} {1}","dateTimeFormats-appendItem-Hour":"{0} ({2}: {1})","dayPeriods-format-abbr-pm":"PM","days-format-abbr":["יום א׳","יום ב׳","יום ג׳","יום ד׳","יום ה׳","יום ו׳","שבת"],"dateFormatItem-yMMMd":"d בMMM y","eraNames":["לפני הספירה","לספירה"],"days-format-narrow":["א'","ב'","ג'","ד'","ה'","ו׳","ש׳"],"days-standAlone-narrow":["א׳","ב׳","ג׳","ד׳","ה׳","ו","ש"],"dateFormatItem-MMM":"LLL","field-month":"חודש","dateTimeFormats-appendItem-Quarter":"{0} ({2}: {1})","dayPeriods-format-wide-am":"לפנה״צ","dateTimeFormats-appendItem-Month":"{0} ({2}: {1})","dateTimeFormats-appendItem-Minute":"{0} ({2}: {1})","dateFormatItem-MMMMEd":"E, d בMMMM","dateFormat-short":"dd/MM/yy","field-second":"שנייה","dateFormatItem-yMMMEd":"E, d בMMM y","field-month-relative+0":"החודש","field-month-relative+1":"חודש הבא","dateFormatItem-Ed":"E ה-d","dateTimeFormats-appendItem-Timezone":"{0} {1}","field-week":"שבוע","dateFormat-medium":"d בMMM yyyy","field-year-relative+0":"השנה","field-week-relative+-1":"שבוע שעבר","field-year-relative+1":"שנה הבאה","dayPeriods-format-narrow-pm":"PM","dateFormatItem-mmss":"mm:ss","dateTimeFormat-short":"{1}, {0}","dateFormatItem-Hms":"HH:mm:ss","dateFormatItem-hms":"h:mm:ss a","dateFormatItem-yyyy":"y","field-week-relative+0":"השבוע","field-week-relative+1":"שבוע הבא"},"dijit/nls/loading":{"loadingState":"טעינה...","errorState":"אירעה שגיאה"},"dojo/cldr/nls/number":{"scientificFormat":"#E0","currencySpacing-afterCurrency-currencyMatch":"[:letter:]","infinity":"∞","list":";","percentSign":"%","minusSign":"-","currencySpacing-beforeCurrency-surroundingMatch":"[:digit:]","decimalFormat-short":"000T","currencySpacing-afterCurrency-insertBetween":" ","nan":"NaN","plusSign":"+","currencySpacing-afterCurrency-surroundingMatch":"[:digit:]","currencyFormat":"#,##0.00 ¤","currencySpacing-beforeCurrency-currencyMatch":"[:letter:]","perMille":"‰","group":",","percentFormat":"#,##0%","decimalFormat-long":"000 טריליון","decimalFormat":"#,##0.###","decimal":".","currencySpacing-beforeCurrency-insertBetween":" ","exponential":"E"},"ceviewer/nls/cewebviewer":{"viewerPage":{"sceneReadyTime":"Web Scene מוכן (${seconds} שניות)","downloading":"מוריד","unableToLoadData":"לא ניתן לטעון נתונים","wsDataInvalid":"נתוני Web Scene (3ws)  לא תקינים","unpackingDone":"סיים לפתוח חבילה","nativeCantProcess":"המנתח המובנה לא יכול לעבד נתונים שנפתחו עם סוג תגובה arrayBuffer ","reqUnzip":"נתבקשו נתונים לא דחוסים, ","unableToLoadURL":"לא ניתן לטעון URL","reading":"קורא","unpackerEmpty":"פותח החבילה החזיר נתונים ריקים. יכול להיות שנגמר הזכרון בדפדפן.","loadingWsId":"טוען מספר זיהוי של webscene","contactUs":"צור קשר","safariMsg1":"עבור ספארי על Mac OSX, יש להדליק בדפדפן אפשרות שימוש ב- WebGL.","safariMsg2":"בקובץ &rarr; עדיפות ל- &rarr; מתקדם, בדוק <em>הצג תפריט פיתוח בסרגל תפריטים</em>.","safariMsg3":"בתפריט פיתוח שנדלק עכשיו, אפשר WebGL.","title":"צפיין CityEngine Web","ceWebViewerHelp":"עזרה של צפיין CityEngine Web","zipOnlyAB":"Zipped data only supported with responseType arraybuffer ","gotUnzip":"התקבלו נתונים דחוסים","customUnzipAndStream":"משתמש בפתיחה מותאמת ו- streamParser ב- arraybuffer","badBrowser":"ככל הנראה, הדפדפן שלך לא תומך ב- WebGL.","gzipInvalid":"קובץ gzip לא תקין: ","webviewerVersion":"גרסת צפיין CE Web","fallbackSizeMsg":"גודל Gzipped ${gzipSize} MB גבוה מ- ${criticalSize} MB קריטי","fallbackLoaderMsg":"חוזר לפתיחה מותאמת ב- arraybuffer ו- streamParser מותאם","errorStatus":" שגיאת סטטוס ${status} ב${url}","gotGzip":"התקבלו נתונים דחוסים","detected3wsVersion":"גרסת Web Scene","streamParseOnUnzippedAB":"משתמש ב- streamparser על arraybuffer פתוח","noWebSceneMsg":"לא הוגדר webscene","troubleMsg1":"למד עוד על יכולות ה- WebGL בדפדפן שלך ועל עוד דפדפנים תומכים ב- <a href=\"http://get.webgl.org\" target=\"_blank\">get.webgl.org</a><br>","useUrlParameter":" השתמש בפרמטר url '3dWebScene' כדי להגדיר מספר זיהוי של פריט ArcGIS online או קובץ 3ws מקומי","troubleMsg2":"פתרון בעיות ב- <a href=\"http://get.webgl.org/troubleshooting\" target=\"_blank\">get.webgl.org/troubleshooting</a>","loadingSceneFile":"טוען קובץ scene","badHardware":"ככל הנראה, החומרה שלך לא תומכת ב- WebGL.","unsupported3wsVersion":"גרסה זו של Web Scene (3ws) לא נתמכת","xhrEmpty":"הנתונים שהוחזרו ריקים.  יכול להיות שנגמר הזכרון בדפדפן.","initializing":"מאתחל...","streamPOnlyOnAB":"StreamParser נתמך רק בתגובה לסוג arraybuffer ","ieMsg":"לאינטרנט אקספלורר אין תמיכת WebGL כרגע. אולי תרצה להתקין <a href=\"http://www.google.com/chromeframe?quickenable=true\" target=\"_blank\">Install Google Chrome Frame <br>(Internet Explorer Plugin)</a> כדי לאפשר WebGL באינטרנט אקספלורר.","dataLoadedTime":"נתונים הועלו ב${seconds} שניות","reqGzip":"נתבקשו נתונים דחוסים ","bypassWebglCheck":"עוקף בדיקת זיהוי WebGL","noGzipEnc":"שרת לא מחזיר פתיח מקודד של gzip"},"ui":{"nameOfSelObject":"שם של אובייקט נבחר","statsField":"שדה","sharePaneDisabledInfo":"נראה שה- WebScene רץ ב- <a href='http://en.wikipedia.org/wiki/Private_network' target='_blank'>רשת פרטית</a> (כתובת ip פרטית). אנשים מחוץ לרשת שלך ככל הנראה לא יוכלו לגשת ל- WebScene זה. פרסם את ה- WebScene app  בשרת ציבורי בכדי לשתף את הקישור עם אחרים.","shareFacebookTxt1":"חקור ${sceneName} (CityEngine Web Scene)","shareFacebookTxt2":"צור ושתף את ה- 3D Web Scenes שלך עם CityEngine. בקר ב-  esri.com/cityengine כדי להוריד גרסת ניסיון ל- 30 יום.","sharePaneDisabledTitle":"השיתוף מנוטרל","materialIs":"חומר הוא ","sharePaneDisabledByOrg":"ה Web Scene לא ניתן לשיתוף בגלל שהארגון שלך מנע יכולת זו.","unnamedScene":"סצנה ללא שם","embedMsg":"צפיין Web מוטמע עם ${reducedOrFull} UI","embedCustom":"גודל מותאם","embedSmall":"קטן (ממשק משתמש מוקטן)","resultInLayer":"בשכבה ","ratings":"דירוגים","statsKey":"מפתח","infoPaneTitle":"מידע","resultIn":" ב ","detailsMoreDetails":"עוד פרטים...","width":"רוחב","showLoadingDetails":"הצג פרטי טעינה","statsCount":"ספירה","enableAutoplay":"אפשר הפעלה אוטומטית","dateSummer":"קיץ (21 ביוני)","infoProperties":"מאפיינים","lastModified":"שונה לאחרונה","sceneTitle":"${sceneName}  (CityEngine Web Scene)","ratingThanks":"תודה על דירוג פריט זה!","geoComment":"GeoComment","embedFull":"מלא","about3d":"פרטים","selectObj3D":"בחר אובייקט ב- 3D Scene כדי להציג מידע","sunLight":"אור שמש","this3dScene":"3D City Scene זה","shareFacebook":"שתף בפייסבוק","shareTwitter":"פרסם בטוויטר","shareEmailTxt1":"תן מבט ב- CityEngine Web Scene זה:","shareNotPublicWarn":"Web Scene זה אינו נמצא במצב שיתוף עם הציבור.","shareEmailTxt2":"באפשרותך ליצור ולשתף את 3D Web Scenes באמצעות CityEngine. בקר ב- http://www.esri.com/cityengine כדי להוריד גרסה חינמית מלאה לתקופת ניסיון של 30 יום.","dateSpring":"אביב (20 למרץ)","directShadow":"צל ישיר (נוצר על ידי אור השמש)","showLayer":"הצג שכבה","dragSunSliderHint":"גרור מחוון","shareNotPublicHint":"בכדי להפעיל את כפתור השיתוף, קבע הגדרות שיתוך של פריט Web Scene לציבורי ובצע ריענון.","statsAvg":"ממוצע","showMore":"הצג עוד","webSceneViewer":"צפיין 3D Web Scene","dateWinter":"חורף (21 לדצמבר)","detailsSize":"${filesize} MB","commentPublish":"פרסם הערה","thumbnailUploadFail":"לא יכול לשמור תמונה ממוזערת","sunrise":"זריחה","help":"עזרה","addtnlHiddenLyrs":"תוצאות נוספות בשכבות נסתרות:","searchPaneTitle":"חפש","views":"תצוגות","statsPercentage":"אחוזים","shareEmail":"שלח דוא\"ל","size":"גודל","detailsNoDesc":"אין תיאור","shareTwitterTxt":"חקור '${sceneName}' ב- 3D בדפדפן שלך:\n","exitComparisonMode":"צא ממצב השוואה","sharePaneTitle":"שיתוף","detailsDesc":"תיאור","commentsTitle":"הערות","getUrl":"משיג url...","embedReduced":"מוקטן","diffuseShadow":"פיזור צללים (סיבוב אטום)","comment":"הערה","sharePaneDisabledAction":"אני יודע מה אני עושה, הפעל  Share Pane.","shortUrl":"URL קצר","ratingOwnMsg":"אתה לא יכול לדרג את הפריטים שלך","commentFail":"לא ניתן לשלוח הודעה","settingsPaneTitle":"הגדרות","keyValueIs":"${key} הוא ${value}","author":"מחבר","longUrl":"URL ארוך","embedLarge":"גדול (ממשק משתמש מלא)","height":"גובה","commentHint":"להשאיר הודעה","shareEmailSubject":"${sceneName}  ב 3D (CityEngine Web Scene)","shareNotPublicEditItem":"עריכת פריט Web Scene...","shadowing":"הצללה","thumbnailUploadSuccess":"תמונה ממוזערת חדשה נשמרה","layersPaneTitle":"שכבות","infoReports":"דו\"חות","sunset":"שקיעה","dateFall":"סתיו (22 בספטמבר)","ratingFail":"לא יכול לטעון דירוג","reducedUIexploreFull":"למד בצפיין מלא","shareLink":"שתף קישור","nameIs":"שם הוא ","statsStatistics":"סטטיסטיקות","statsSum":"סכום","embedInWebsite":"הטמע באתר האינטרנט","resultsFound":" נמצאו תוצאות","ratingHint":"כדי לדרג את הפריט הזה","searchHint":"מצא אובייקטים, מאפיינים ועוד...","statsValue":"ערך","commentAdd":"הוספת הודעה...","shareNotPublicAnyway":"שתף בכל מקרה","infoAttributes":"מאפיינים","detailsNoSummary":"אין תקציר"},"signInOut":{"signOutDiffUser":"בכדי לטעון web scene כמשתמש שונה","signOutNonPublicWarning":"הינך צופה ב web scene לא ציבורי. התנתקות מהאתר תגרום ליציאה מהעמוד.","signOut":"התנתק","signIn":"התחבר"},"common":{"arcgisOnline":"ArcGIS Online","cancel":"ביטול","ok":"אישור","details":"פרטים","more":"עוד"}},"dijit/nls/common":{"buttonOk":"אישור","buttonCancel":"ביטול","buttonSave":"שמירה","itemClose":"סגירה"}});