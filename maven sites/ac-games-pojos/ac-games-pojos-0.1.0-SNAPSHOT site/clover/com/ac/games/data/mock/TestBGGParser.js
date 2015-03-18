var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":368,"id":1074,"methods":[{"el":47,"sc":3,"sl":26},{"el":70,"sc":3,"sl":49},{"el":93,"sc":3,"sl":72},{"el":116,"sc":3,"sl":95},{"el":139,"sc":3,"sl":118},{"el":163,"sc":3,"sl":141},{"el":186,"sc":3,"sl":165},{"el":209,"sc":3,"sl":188},{"el":232,"sc":3,"sl":211},{"el":260,"sc":3,"sl":234},{"el":288,"sc":3,"sl":262},{"el":316,"sc":3,"sl":290},{"el":344,"sc":3,"sl":318},{"el":367,"sc":3,"sl":346}],"name":"TestBGGParser","sl":17}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_0":{"methods":[{"sl":26}],"name":"testAbyssParser","pass":true,"statements":[{"sl":28},{"sl":30},{"sl":32},{"sl":34},{"sl":35},{"sl":37},{"sl":38},{"sl":39},{"sl":40},{"sl":46}]},"test_13":{"methods":[{"sl":95}],"name":"testMagicTheGatheringParser","pass":true,"statements":[{"sl":97},{"sl":99},{"sl":101},{"sl":103},{"sl":104},{"sl":106},{"sl":107},{"sl":108},{"sl":109},{"sl":115}]},"test_14":{"methods":[{"sl":234}],"name":"testBGGMultiFullParser","pass":true,"statements":[{"sl":236},{"sl":238},{"sl":240},{"sl":242},{"sl":243},{"sl":245},{"sl":246},{"sl":247},{"sl":248},{"sl":249},{"sl":250},{"sl":253},{"sl":259}]},"test_16":{"methods":[{"sl":118}],"name":"testDCDiceMastersParser","pass":true,"statements":[{"sl":120},{"sl":122},{"sl":124},{"sl":126},{"sl":127},{"sl":129},{"sl":130},{"sl":131},{"sl":132},{"sl":138}]},"test_2":{"methods":[{"sl":141}],"name":"testNotFoundParser","pass":true,"statements":[{"sl":143},{"sl":145},{"sl":147},{"sl":149},{"sl":150},{"sl":152},{"sl":153},{"sl":156},{"sl":162}]},"test_21":{"methods":[{"sl":165}],"name":"testBGG53Parser","pass":true,"statements":[{"sl":167},{"sl":169},{"sl":171},{"sl":173},{"sl":174},{"sl":176},{"sl":177},{"sl":178},{"sl":179},{"sl":185}]},"test_23":{"methods":[{"sl":72}],"name":"testCosmicIncursionParser","pass":true,"statements":[{"sl":74},{"sl":76},{"sl":78},{"sl":80},{"sl":81},{"sl":83},{"sl":84},{"sl":85},{"sl":86},{"sl":92}]},"test_26":{"methods":[{"sl":49}],"name":"testCosmicEncounterParser","pass":true,"statements":[{"sl":51},{"sl":53},{"sl":55},{"sl":57},{"sl":58},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":69}]},"test_3":{"methods":[{"sl":318}],"name":"testBGGMultiNest29663Parser","pass":true,"statements":[{"sl":320},{"sl":322},{"sl":324},{"sl":326},{"sl":327},{"sl":329},{"sl":330},{"sl":331},{"sl":332},{"sl":333},{"sl":334},{"sl":337},{"sl":343}]},"test_4":{"methods":[{"sl":290}],"name":"testBGGNested18460Parser","pass":true,"statements":[{"sl":292},{"sl":294},{"sl":296},{"sl":298},{"sl":299},{"sl":301},{"sl":302},{"sl":303},{"sl":304},{"sl":305},{"sl":306},{"sl":309},{"sl":315}]},"test_5":{"methods":[{"sl":188}],"name":"testBGG1369Parser","pass":true,"statements":[{"sl":190},{"sl":192},{"sl":194},{"sl":196},{"sl":197},{"sl":199},{"sl":200},{"sl":201},{"sl":202},{"sl":208}]},"test_7":{"methods":[{"sl":346}],"name":"testBGG50968Parser","pass":true,"statements":[{"sl":348},{"sl":350},{"sl":352},{"sl":354},{"sl":355},{"sl":357},{"sl":358},{"sl":359},{"sl":360},{"sl":366}]},"test_8":{"methods":[{"sl":262}],"name":"testBGGMultiPartiallParser","pass":true,"statements":[{"sl":264},{"sl":266},{"sl":268},{"sl":270},{"sl":271},{"sl":273},{"sl":274},{"sl":275},{"sl":276},{"sl":277},{"sl":278},{"sl":281},{"sl":287}]},"test_9":{"methods":[{"sl":211}],"name":"testBGG1818Parser","pass":true,"statements":[{"sl":213},{"sl":215},{"sl":217},{"sl":219},{"sl":220},{"sl":222},{"sl":223},{"sl":224},{"sl":225},{"sl":231}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [0], [], [0], [], [0], [], [0], [], [0], [0], [], [0], [0], [0], [0], [], [], [], [], [], [0], [], [], [26], [], [26], [], [26], [], [26], [], [26], [26], [], [26], [26], [26], [26], [], [], [], [], [], [26], [], [], [23], [], [23], [], [23], [], [23], [], [23], [23], [], [23], [23], [23], [23], [], [], [], [], [], [23], [], [], [13], [], [13], [], [13], [], [13], [], [13], [13], [], [13], [13], [13], [13], [], [], [], [], [], [13], [], [], [16], [], [16], [], [16], [], [16], [], [16], [16], [], [16], [16], [16], [16], [], [], [], [], [], [16], [], [], [2], [], [2], [], [2], [], [2], [], [2], [2], [], [2], [2], [], [], [2], [], [], [], [], [], [2], [], [], [21], [], [21], [], [21], [], [21], [], [21], [21], [], [21], [21], [21], [21], [], [], [], [], [], [21], [], [], [5], [], [5], [], [5], [], [5], [], [5], [5], [], [5], [5], [5], [5], [], [], [], [], [], [5], [], [], [9], [], [9], [], [9], [], [9], [], [9], [9], [], [9], [9], [9], [9], [], [], [], [], [], [9], [], [], [14], [], [14], [], [14], [], [14], [], [14], [14], [], [14], [14], [14], [14], [14], [14], [], [], [14], [], [], [], [], [], [14], [], [], [8], [], [8], [], [8], [], [8], [], [8], [8], [], [8], [8], [8], [8], [8], [8], [], [], [8], [], [], [], [], [], [8], [], [], [4], [], [4], [], [4], [], [4], [], [4], [4], [], [4], [4], [4], [4], [4], [4], [], [], [4], [], [], [], [], [], [4], [], [], [3], [], [3], [], [3], [], [3], [], [3], [3], [], [3], [3], [3], [3], [3], [3], [], [], [3], [], [], [], [], [], [3], [], [], [7], [], [7], [], [7], [], [7], [], [7], [7], [], [7], [7], [7], [7], [], [], [], [], [], [7], [], []]