var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":750,"id":459,"methods":[{"el":59,"sc":3,"sl":52},{"el":66,"sc":3,"sl":64},{"el":73,"sc":3,"sl":71},{"el":80,"sc":3,"sl":78},{"el":87,"sc":3,"sl":85},{"el":94,"sc":3,"sl":92},{"el":101,"sc":3,"sl":99},{"el":108,"sc":3,"sl":106},{"el":138,"sc":3,"sl":114},{"el":153,"sc":3,"sl":144},{"el":193,"sc":3,"sl":159},{"el":236,"sc":3,"sl":199},{"el":268,"sc":3,"sl":242},{"el":297,"sc":3,"sl":274},{"el":319,"sc":3,"sl":308},{"el":359,"sc":3,"sl":325},{"el":402,"sc":3,"sl":365},{"el":434,"sc":3,"sl":408},{"el":463,"sc":3,"sl":440},{"el":485,"sc":3,"sl":474},{"el":525,"sc":3,"sl":491},{"el":568,"sc":3,"sl":531},{"el":600,"sc":3,"sl":574},{"el":629,"sc":3,"sl":606},{"el":651,"sc":3,"sl":640},{"el":683,"sc":3,"sl":657},{"el":715,"sc":3,"sl":689},{"el":749,"sc":3,"sl":721}],"name":"MongoGamesDatabase","sl":29}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_0":{"methods":[{"sl":325},{"sl":365},{"sl":408},{"sl":440},{"sl":474},{"sl":689}],"name":"testCSIData","pass":true,"statements":[{"sl":327},{"sl":330},{"sl":334},{"sl":336},{"sl":337},{"sl":339},{"sl":341},{"sl":344},{"sl":345},{"sl":346},{"sl":347},{"sl":350},{"sl":352},{"sl":367},{"sl":370},{"sl":374},{"sl":377},{"sl":378},{"sl":379},{"sl":381},{"sl":382},{"sl":386},{"sl":388},{"sl":389},{"sl":391},{"sl":410},{"sl":413},{"sl":417},{"sl":419},{"sl":420},{"sl":421},{"sl":422},{"sl":424},{"sl":442},{"sl":445},{"sl":449},{"sl":451},{"sl":452},{"sl":453},{"sl":455},{"sl":476},{"sl":477},{"sl":479},{"sl":480},{"sl":481},{"sl":482},{"sl":484},{"sl":690},{"sl":693},{"sl":694},{"sl":695},{"sl":697},{"sl":698},{"sl":699},{"sl":701},{"sl":702},{"sl":703},{"sl":704},{"sl":705},{"sl":706},{"sl":714}]},"test_1":{"methods":[{"sl":159},{"sl":199},{"sl":242},{"sl":274},{"sl":308},{"sl":657}],"name":"testBGGData","pass":true,"statements":[{"sl":161},{"sl":164},{"sl":168},{"sl":170},{"sl":171},{"sl":173},{"sl":175},{"sl":178},{"sl":179},{"sl":180},{"sl":181},{"sl":184},{"sl":186},{"sl":201},{"sl":204},{"sl":208},{"sl":211},{"sl":212},{"sl":213},{"sl":215},{"sl":216},{"sl":220},{"sl":222},{"sl":223},{"sl":225},{"sl":244},{"sl":247},{"sl":251},{"sl":253},{"sl":254},{"sl":255},{"sl":256},{"sl":258},{"sl":276},{"sl":279},{"sl":283},{"sl":285},{"sl":286},{"sl":287},{"sl":289},{"sl":310},{"sl":311},{"sl":313},{"sl":314},{"sl":315},{"sl":316},{"sl":318},{"sl":658},{"sl":661},{"sl":662},{"sl":663},{"sl":665},{"sl":666},{"sl":667},{"sl":669},{"sl":670},{"sl":671},{"sl":672},{"sl":673},{"sl":674},{"sl":682}]},"test_2":{"methods":[{"sl":491},{"sl":531},{"sl":574},{"sl":606},{"sl":640},{"sl":721}],"name":"testMMData","pass":true,"statements":[{"sl":493},{"sl":496},{"sl":500},{"sl":502},{"sl":503},{"sl":505},{"sl":507},{"sl":510},{"sl":511},{"sl":512},{"sl":513},{"sl":516},{"sl":518},{"sl":533},{"sl":536},{"sl":540},{"sl":543},{"sl":544},{"sl":545},{"sl":547},{"sl":548},{"sl":552},{"sl":554},{"sl":555},{"sl":557},{"sl":576},{"sl":579},{"sl":583},{"sl":585},{"sl":586},{"sl":587},{"sl":588},{"sl":590},{"sl":608},{"sl":611},{"sl":615},{"sl":617},{"sl":618},{"sl":619},{"sl":621},{"sl":642},{"sl":643},{"sl":645},{"sl":646},{"sl":647},{"sl":648},{"sl":650},{"sl":722},{"sl":725},{"sl":726},{"sl":727},{"sl":729},{"sl":730},{"sl":731},{"sl":733},{"sl":734},{"sl":735},{"sl":736},{"sl":737},{"sl":738},{"sl":748}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1], [], [1], [], [], [1], [], [], [], [1], [], [1], [1], [], [1], [], [1], [], [], [1], [1], [1], [1], [], [], [1], [], [1], [], [], [], [], [], [], [], [], [], [], [], [], [1], [], [1], [], [], [1], [], [], [], [1], [], [], [1], [1], [1], [], [1], [1], [], [], [], [1], [], [1], [1], [], [1], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1], [], [1], [], [], [1], [], [], [], [1], [], [1], [1], [1], [1], [], [1], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1], [], [1], [], [], [1], [], [], [], [1], [], [1], [1], [1], [], [1], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [1], [], [1], [1], [], [1], [1], [1], [1], [], [1], [], [], [], [], [], [], [0], [], [0], [], [], [0], [], [], [], [0], [], [0], [0], [], [0], [], [0], [], [], [0], [0], [0], [0], [], [], [0], [], [0], [], [], [], [], [], [], [], [], [], [], [], [], [0], [], [0], [], [], [0], [], [], [], [0], [], [], [0], [0], [0], [], [0], [0], [], [], [], [0], [], [0], [0], [], [0], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [0], [], [0], [], [], [0], [], [], [], [0], [], [0], [0], [0], [0], [], [0], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [0], [], [0], [], [], [0], [], [], [], [0], [], [0], [0], [0], [], [0], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [0], [], [0], [0], [], [0], [0], [0], [0], [], [0], [], [], [], [], [], [], [2], [], [2], [], [], [2], [], [], [], [2], [], [2], [2], [], [2], [], [2], [], [], [2], [2], [2], [2], [], [], [2], [], [2], [], [], [], [], [], [], [], [], [], [], [], [], [2], [], [2], [], [], [2], [], [], [], [2], [], [], [2], [2], [2], [], [2], [2], [], [], [], [2], [], [2], [2], [], [2], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [2], [], [2], [], [], [2], [], [], [], [2], [], [2], [2], [2], [2], [], [2], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [2], [], [2], [], [], [2], [], [], [], [2], [], [2], [2], [2], [], [2], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [2], [], [2], [2], [], [2], [2], [2], [2], [], [2], [], [], [], [], [], [], [1], [1], [], [], [1], [1], [1], [], [1], [1], [1], [], [1], [1], [1], [1], [1], [1], [], [], [], [], [], [], [], [1], [], [], [], [], [], [], [0], [0], [], [], [0], [0], [0], [], [0], [0], [0], [], [0], [0], [0], [0], [0], [0], [], [], [], [], [], [], [], [0], [], [], [], [], [], [], [2], [2], [], [], [2], [2], [2], [], [2], [2], [2], [], [2], [2], [2], [2], [2], [2], [], [], [], [], [], [], [], [], [], [2], [], []]
