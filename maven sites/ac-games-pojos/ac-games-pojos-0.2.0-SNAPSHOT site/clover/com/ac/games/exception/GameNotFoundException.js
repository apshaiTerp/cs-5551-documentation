var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":18,"id":1893,"methods":[{"el":16,"sc":3,"sl":14}],"name":"GameNotFoundException","sl":7}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_20":{"methods":[{"sl":14}],"name":"testNotFoundParser","pass":true,"statements":[{"sl":15}]},"test_23":{"methods":[{"sl":14}],"name":"testNotFoundParser","pass":true,"statements":[{"sl":15}]},"test_25":{"methods":[{"sl":14}],"name":"testGiftCertificateParser","pass":true,"statements":[{"sl":15}]},"test_38":{"methods":[{"sl":14}],"name":"testNotFoundParser","pass":true,"statements":[{"sl":15}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [38, 25, 23, 20], [38, 25, 23, 20], [], [], []]
