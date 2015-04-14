var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":205,"id":560,"methods":[{"el":33,"sc":3,"sl":28},{"el":47,"sc":3,"sl":42},{"el":61,"sc":3,"sl":56},{"el":97,"sc":3,"sl":70},{"el":134,"sc":3,"sl":106},{"el":156,"sc":3,"sl":136},{"el":172,"sc":3,"sl":165},{"el":188,"sc":3,"sl":180},{"el":204,"sc":3,"sl":196}],"name":"GameConverter","sl":19}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_5":{"methods":[{"sl":70},{"sl":106},{"sl":165},{"sl":180},{"sl":196}],"name":"testCollectionSimple","pass":true,"statements":[{"sl":71},{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":82},{"sl":83},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":93},{"sl":94},{"sl":96},{"sl":107},{"sl":109},{"sl":111},{"sl":112},{"sl":113},{"sl":114},{"sl":115},{"sl":116},{"sl":117},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":122},{"sl":123},{"sl":124},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":130},{"sl":131},{"sl":133},{"sl":166},{"sl":168},{"sl":169},{"sl":170},{"sl":171},{"sl":181},{"sl":183},{"sl":184},{"sl":185},{"sl":187},{"sl":197},{"sl":199},{"sl":200},{"sl":201},{"sl":203}]},"test_6":{"methods":[{"sl":70},{"sl":106},{"sl":165},{"sl":180},{"sl":196}],"name":"testCollectionItems","pass":true,"statements":[{"sl":71},{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":82},{"sl":83},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":93},{"sl":94},{"sl":96},{"sl":107},{"sl":109},{"sl":111},{"sl":112},{"sl":113},{"sl":114},{"sl":115},{"sl":116},{"sl":117},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":122},{"sl":123},{"sl":124},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":130},{"sl":131},{"sl":133},{"sl":166},{"sl":168},{"sl":169},{"sl":170},{"sl":171},{"sl":181},{"sl":183},{"sl":184},{"sl":185},{"sl":187},{"sl":197},{"sl":199},{"sl":200},{"sl":201},{"sl":203}]},"test_7":{"methods":[{"sl":28},{"sl":42},{"sl":70},{"sl":106},{"sl":165},{"sl":180},{"sl":196}],"name":"testGameData","pass":true,"statements":[{"sl":29},{"sl":31},{"sl":32},{"sl":43},{"sl":45},{"sl":46},{"sl":71},{"sl":73},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":82},{"sl":83},{"sl":84},{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":93},{"sl":94},{"sl":96},{"sl":107},{"sl":109},{"sl":111},{"sl":112},{"sl":113},{"sl":114},{"sl":115},{"sl":116},{"sl":117},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":122},{"sl":123},{"sl":124},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":130},{"sl":131},{"sl":133},{"sl":166},{"sl":168},{"sl":169},{"sl":170},{"sl":171},{"sl":181},{"sl":183},{"sl":184},{"sl":185},{"sl":187},{"sl":197},{"sl":199},{"sl":200},{"sl":201},{"sl":203}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [7], [7], [], [7], [7], [], [], [], [], [], [], [], [], [], [7], [7], [], [7], [7], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [6, 7, 5], [6, 7, 5], [], [6, 7, 5], [], [6, 7, 5], [6, 7, 5], [6, 7, 5], [6, 7, 5], [6, 7, 5], [6, 7, 5], [6, 7, 5], [6, 7, 5], [6, 7, 5], [6, 7, 5], [6, 7, 5], [6, 7, 5], [6, 7, 5], [6, 7, 5], [6, 7, 5], [6, 7, 5], [6, 7, 5], [], [6, 7, 5], [6, 7, 5], [], [6, 7, 5], [], [], [], [], [], [], [], [], [], [6, 7, 5], [6, 7, 5], [], [6, 7, 5], [], [6, 7, 5], [6, 7, 5], [6, 7, 5], [6, 7, 5], [6, 7, 5], [6, 7, 5], [6, 7, 5], [6, 7, 5], [6, 7, 5], [6, 7, 5], [6, 7, 5], [6, 7, 5], [6, 7, 5], [6, 7, 5], [6, 7, 5], [6, 7, 5], [6, 7, 5], [6, 7, 5], [], [6, 7, 5], [6, 7, 5], [], [6, 7, 5], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [6, 7, 5], [6, 7, 5], [], [6, 7, 5], [6, 7, 5], [6, 7, 5], [6, 7, 5], [], [], [], [], [], [], [], [], [6, 7, 5], [6, 7, 5], [], [6, 7, 5], [6, 7, 5], [6, 7, 5], [], [6, 7, 5], [], [], [], [], [], [], [], [], [6, 7, 5], [6, 7, 5], [], [6, 7, 5], [6, 7, 5], [6, 7, 5], [], [6, 7, 5], [], []]