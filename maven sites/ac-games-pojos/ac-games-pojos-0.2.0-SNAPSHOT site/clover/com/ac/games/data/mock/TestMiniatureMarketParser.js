var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":339,"id":2475,"methods":[{"el":38,"sc":3,"sl":17},{"el":61,"sc":3,"sl":40},{"el":84,"sc":3,"sl":63},{"el":107,"sc":3,"sl":86},{"el":130,"sc":3,"sl":109},{"el":154,"sc":3,"sl":132},{"el":177,"sc":3,"sl":156},{"el":200,"sc":3,"sl":179},{"el":223,"sc":3,"sl":202},{"el":246,"sc":3,"sl":225},{"el":269,"sc":3,"sl":248},{"el":292,"sc":3,"sl":271},{"el":315,"sc":3,"sl":294},{"el":338,"sc":3,"sl":317}],"name":"TestMiniatureMarketParser","sl":15}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1":{"methods":[{"sl":294}],"name":"testMMTableTopMinisParser","pass":true,"statements":[{"sl":296},{"sl":298},{"sl":300},{"sl":302},{"sl":303},{"sl":305},{"sl":306},{"sl":307},{"sl":308},{"sl":314}]},"test_11":{"methods":[{"sl":179}],"name":"testMMAccessoriesParser","pass":true,"statements":[{"sl":181},{"sl":183},{"sl":185},{"sl":187},{"sl":188},{"sl":190},{"sl":191},{"sl":192},{"sl":193},{"sl":199}]},"test_12":{"methods":[{"sl":317}],"name":"testMMUnknownParser","pass":true,"statements":[{"sl":319},{"sl":321},{"sl":323},{"sl":325},{"sl":326},{"sl":328},{"sl":329},{"sl":330},{"sl":331},{"sl":337}]},"test_13":{"methods":[{"sl":40}],"name":"testCosmicEncounterParser","pass":true,"statements":[{"sl":42},{"sl":44},{"sl":46},{"sl":48},{"sl":49},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":60}]},"test_2":{"methods":[{"sl":109}],"name":"testXWingIG2000Parser","pass":true,"statements":[{"sl":111},{"sl":113},{"sl":115},{"sl":117},{"sl":118},{"sl":120},{"sl":121},{"sl":122},{"sl":123},{"sl":129}]},"test_24":{"methods":[{"sl":63}],"name":"testCosmicIncursionParser","pass":true,"statements":[{"sl":65},{"sl":67},{"sl":69},{"sl":71},{"sl":72},{"sl":74},{"sl":75},{"sl":76},{"sl":77},{"sl":83}]},"test_30":{"methods":[{"sl":225}],"name":"testMMCCGsParser","pass":true,"statements":[{"sl":227},{"sl":229},{"sl":231},{"sl":233},{"sl":234},{"sl":236},{"sl":237},{"sl":238},{"sl":239},{"sl":245}]},"test_32":{"methods":[{"sl":86}],"name":"testDCDiceMastersParser","pass":true,"statements":[{"sl":88},{"sl":90},{"sl":92},{"sl":94},{"sl":95},{"sl":97},{"sl":98},{"sl":99},{"sl":100},{"sl":106}]},"test_35":{"methods":[{"sl":156}],"name":"testMM5137Parser","pass":true,"statements":[{"sl":158},{"sl":160},{"sl":162},{"sl":164},{"sl":165},{"sl":167},{"sl":168},{"sl":169},{"sl":170},{"sl":176}]},"test_38":{"methods":[{"sl":132}],"name":"testNotFoundParser","pass":true,"statements":[{"sl":134},{"sl":136},{"sl":138},{"sl":140},{"sl":141},{"sl":143},{"sl":144},{"sl":147},{"sl":153}]},"test_39":{"methods":[{"sl":17}],"name":"testAbyssParser","pass":true,"statements":[{"sl":19},{"sl":21},{"sl":23},{"sl":25},{"sl":26},{"sl":28},{"sl":29},{"sl":30},{"sl":31},{"sl":37}]},"test_41":{"methods":[{"sl":271}],"name":"testMMRPGsParser","pass":true,"statements":[{"sl":273},{"sl":275},{"sl":277},{"sl":279},{"sl":280},{"sl":282},{"sl":283},{"sl":284},{"sl":285},{"sl":291}]},"test_8":{"methods":[{"sl":202}],"name":"testMMBoardGamesParser","pass":true,"statements":[{"sl":204},{"sl":206},{"sl":208},{"sl":210},{"sl":211},{"sl":213},{"sl":214},{"sl":215},{"sl":216},{"sl":222}]},"test_9":{"methods":[{"sl":248}],"name":"testMMCollectibleMinisParser","pass":true,"statements":[{"sl":250},{"sl":252},{"sl":254},{"sl":256},{"sl":257},{"sl":259},{"sl":260},{"sl":261},{"sl":262},{"sl":268}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [39], [], [39], [], [39], [], [39], [], [39], [39], [], [39], [39], [39], [39], [], [], [], [], [], [39], [], [], [13], [], [13], [], [13], [], [13], [], [13], [13], [], [13], [13], [13], [13], [], [], [], [], [], [13], [], [], [24], [], [24], [], [24], [], [24], [], [24], [24], [], [24], [24], [24], [24], [], [], [], [], [], [24], [], [], [32], [], [32], [], [32], [], [32], [], [32], [32], [], [32], [32], [32], [32], [], [], [], [], [], [32], [], [], [2], [], [2], [], [2], [], [2], [], [2], [2], [], [2], [2], [2], [2], [], [], [], [], [], [2], [], [], [38], [], [38], [], [38], [], [38], [], [38], [38], [], [38], [38], [], [], [38], [], [], [], [], [], [38], [], [], [35], [], [35], [], [35], [], [35], [], [35], [35], [], [35], [35], [35], [35], [], [], [], [], [], [35], [], [], [11], [], [11], [], [11], [], [11], [], [11], [11], [], [11], [11], [11], [11], [], [], [], [], [], [11], [], [], [8], [], [8], [], [8], [], [8], [], [8], [8], [], [8], [8], [8], [8], [], [], [], [], [], [8], [], [], [30], [], [30], [], [30], [], [30], [], [30], [30], [], [30], [30], [30], [30], [], [], [], [], [], [30], [], [], [9], [], [9], [], [9], [], [9], [], [9], [9], [], [9], [9], [9], [9], [], [], [], [], [], [9], [], [], [41], [], [41], [], [41], [], [41], [], [41], [41], [], [41], [41], [41], [41], [], [], [], [], [], [41], [], [], [1], [], [1], [], [1], [], [1], [], [1], [1], [], [1], [1], [1], [1], [], [], [], [], [], [1], [], [], [12], [], [12], [], [12], [], [12], [], [12], [12], [], [12], [12], [12], [12], [], [], [], [], [], [12], [], []]