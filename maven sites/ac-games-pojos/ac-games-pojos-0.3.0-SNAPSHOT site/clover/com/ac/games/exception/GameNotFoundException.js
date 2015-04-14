var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":18,"id":2373,"methods":[{"el":16,"sc":3,"sl":14}],"name":"GameNotFoundException","sl":7}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_0":{"methods":[{"sl":14}],"name":"testNotFoundParser","pass":true,"statements":[{"sl":15}]},"test_1":{"methods":[{"sl":14}],"name":"testNotFoundParser","pass":true,"statements":[{"sl":15}]},"test_17":{"methods":[{"sl":14}],"name":"testNotFoundParser","pass":true,"statements":[{"sl":15}]},"test_9":{"methods":[{"sl":14}],"name":"testGiftCertificateParser","pass":true,"statements":[{"sl":15}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [17, 0, 1, 9], [17, 0, 1, 9], [], [], []]
