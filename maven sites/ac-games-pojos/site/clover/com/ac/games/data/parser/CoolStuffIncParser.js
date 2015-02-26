var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":136,"id":761,"methods":[{"el":135,"sc":3,"sl":57}],"name":"CoolStuffIncParser","sl":14}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_10":{"methods":[{"sl":57}],"name":"testCosmicEncounterParser","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":66},{"sl":68},{"sl":69},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":76},{"sl":79},{"sl":82},{"sl":83},{"sl":84},{"sl":86},{"sl":92},{"sl":93},{"sl":94},{"sl":96},{"sl":99},{"sl":100},{"sl":101},{"sl":102},{"sl":104},{"sl":105},{"sl":113},{"sl":114},{"sl":116},{"sl":121},{"sl":122},{"sl":123},{"sl":125},{"sl":127},{"sl":128},{"sl":129},{"sl":131},{"sl":134}]},"test_11":{"methods":[{"sl":57}],"name":"testCosmicIncursionParser","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":66},{"sl":68},{"sl":69},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":76},{"sl":79},{"sl":82},{"sl":83},{"sl":84},{"sl":86},{"sl":92},{"sl":93},{"sl":94},{"sl":96},{"sl":99},{"sl":100},{"sl":101},{"sl":102},{"sl":104},{"sl":105},{"sl":106},{"sl":107},{"sl":108},{"sl":113},{"sl":121},{"sl":122},{"sl":127},{"sl":128},{"sl":129},{"sl":131},{"sl":134}]},"test_12":{"methods":[{"sl":57}],"name":"testMTG75069Parser","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":66},{"sl":68},{"sl":69},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":76},{"sl":79},{"sl":82},{"sl":83},{"sl":88},{"sl":92},{"sl":93},{"sl":94},{"sl":96},{"sl":99},{"sl":100},{"sl":101},{"sl":102},{"sl":104},{"sl":113},{"sl":121},{"sl":122},{"sl":127},{"sl":128},{"sl":134}]},"test_18":{"methods":[{"sl":57}],"name":"testNotFoundParser","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":66},{"sl":68},{"sl":69},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":76},{"sl":79},{"sl":80}]},"test_19":{"methods":[{"sl":57}],"name":"testAbyssParser","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":66},{"sl":68},{"sl":69},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":76},{"sl":79},{"sl":82},{"sl":83},{"sl":84},{"sl":86},{"sl":92},{"sl":93},{"sl":94},{"sl":96},{"sl":99},{"sl":100},{"sl":101},{"sl":102},{"sl":104},{"sl":113},{"sl":121},{"sl":122},{"sl":123},{"sl":125},{"sl":127},{"sl":128},{"sl":129},{"sl":131},{"sl":134}]},"test_25":{"methods":[{"sl":57}],"name":"testMTG76097Parser","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":66},{"sl":68},{"sl":69},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":76},{"sl":79},{"sl":82},{"sl":83},{"sl":88},{"sl":92},{"sl":93},{"sl":94},{"sl":96},{"sl":99},{"sl":100},{"sl":101},{"sl":102},{"sl":104},{"sl":113},{"sl":121},{"sl":122},{"sl":127},{"sl":128},{"sl":134}]},"test_6":{"methods":[{"sl":57}],"name":"testDCDiceMastersParser","pass":true,"statements":[{"sl":58},{"sl":59},{"sl":66},{"sl":68},{"sl":69},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":76},{"sl":79},{"sl":82},{"sl":83},{"sl":84},{"sl":86},{"sl":92},{"sl":93},{"sl":94},{"sl":96},{"sl":99},{"sl":100},{"sl":101},{"sl":102},{"sl":104},{"sl":105},{"sl":106},{"sl":107},{"sl":113},{"sl":114},{"sl":116},{"sl":121},{"sl":122},{"sl":127},{"sl":128},{"sl":134}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [12, 25, 19, 10, 11, 6, 18], [12, 25, 19, 10, 11, 6, 18], [12, 25, 19, 10, 11, 6, 18], [], [], [], [], [], [], [12, 25, 19, 10, 11, 6, 18], [], [12, 25, 19, 10, 11, 6, 18], [12, 25, 19, 10, 11, 6, 18], [], [12, 25, 19, 10, 11, 6, 18], [12, 25, 19, 10, 11, 6, 18], [12, 25, 19, 10, 11, 6, 18], [12, 25, 19, 10, 11, 6, 18], [], [12, 25, 19, 10, 11, 6, 18], [], [], [12, 25, 19, 10, 11, 6, 18], [18], [], [12, 25, 19, 10, 11, 6], [12, 25, 19, 10, 11, 6], [19, 10, 11, 6], [], [19, 10, 11, 6], [], [12, 25], [], [], [], [12, 25, 19, 10, 11, 6], [12, 25, 19, 10, 11, 6], [12, 25, 19, 10, 11, 6], [], [12, 25, 19, 10, 11, 6], [], [], [12, 25, 19, 10, 11, 6], [12, 25, 19, 10, 11, 6], [12, 25, 19, 10, 11, 6], [12, 25, 19, 10, 11, 6], [], [12, 25, 19, 10, 11, 6], [10, 11, 6], [11, 6], [11, 6], [11], [], [], [], [], [12, 25, 19, 10, 11, 6], [10, 6], [], [10, 6], [], [], [], [], [12, 25, 19, 10, 11, 6], [12, 25, 19, 10, 11, 6], [19, 10], [], [19, 10], [], [12, 25, 19, 10, 11, 6], [12, 25, 19, 10, 11, 6], [19, 10, 11], [], [19, 10, 11], [], [], [12, 25, 19, 10, 11, 6], [], []]