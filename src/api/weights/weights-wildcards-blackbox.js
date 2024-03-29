export let weight_wildcard_blackbox = {
    "ENG": {
        "wildcardArchive": {
            "forwardIndex": [
                {
                    "rawPattern": "* take * water * treat * diarrhea *",
                    "pattern": "^(.*)\\btake\\b(.*)\\bwater\\b(.*)\\btreat\\b(.*)\\bdiarrhea\\b(.*)$",
                    "index": 6
                },
                {
                    "rawPattern": "* not * take * peel * eat *",
                    "pattern": "^(.*)\\bnot\\b(.*)\\btake\\b(.*)\\bpeel\\b(.*)\\beat\\b(.*)$",
                    "index": 12
                },
                {
                    "rawPattern": "* not * eat* raw * meat * ",
                    "pattern": "^(.*)\\bnot\\b(.*)\\beat\\b(.*)\\braw\\b(.*)\\bmeat\\b(.*)$",
                    "index": 13
                },
                {
                    "rawPattern": "* not * take * raw * meat *",
                    "pattern": "^(.*)\\bnot\\b(.*)\\btake\\b(.*)\\braw\\b(.*)\\bmeat\\b(.*)$",
                    "index": 13
                },
                {
                    "rawPattern": "* raw * (not * (take|buy)|avoid) * meat *",
                    "pattern": "^(.*)\\braw\\b(.*)(\\bnot\\b(.*)(\\btake\\b|\\bbuy\\b)|\\bavoid\\b)(.*)\\bmeat\\b(.*)$",
                    "index": 13
                },
                {
                    "rawPattern": "* drink * water * treat * influenza *",
                    "pattern": "^(.*)\\bdrink\\b(.*)\\bwater\\b(.*)\\btreat\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 43
                },
                {
                    "rawPattern": "* where * go * have * influenza *",
                    "pattern": "^(.*)\\bwhere\\b(.*)\\bgo\\b(.*)\\bhave\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 106
                },
                {
                    "rawPattern": "* where * treat * have * influenza *",
                    "pattern": "^(.*)\\bwhere\\b(.*)\\btreat\\b(.*)\\bhave\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 106
                },
                {
                    "rawPattern": "* get * diarrhea * where *",
                    "pattern": "^(.*)\\bget\\b(.*)\\bdiarrhea\\b(.*)\\bwhere\\b(.*)$",
                    "index": 5
                },
                {
                    "rawPattern": "* hydrate * treat * diarrhea *",
                    "pattern": "^(.*)\\bhydrate\\b(.*)\\btreat\\b(.*)\\bdiarrhea\\b(.*)$",
                    "index": 6
                },
                {
                    "rawPattern": "* zinc * treat * diarrhea *",
                    "pattern": "^(.*)\\bzinc\\b(.*)\\btreat\\b(.*)\\bdiarrhea\\b(.*)$",
                    "index": 7
                },
                {
                    "rawPattern": "* where * treat * diarrhea *",
                    "pattern": "^(.*)\\bwhere\\b(.*)\\btreat\\b(.*)\\bdiarrhea\\b(.*)$",
                    "index": 8
                },
                {
                    "rawPattern": "* treat * diarrhea * where *",
                    "pattern": "^(.*)\\btreat\\b(.*)\\bdiarrhea\\b(.*)\\bwhere\\b(.*)$",
                    "index": 8
                },
                {
                    "rawPattern": "* avoid * peel * eat *",
                    "pattern": "^(.*)\\bavoid\\b(.*)\\bpeel\\b(.*)\\beat\\b(.*)$",
                    "index": 12
                },
                {
                    "rawPattern": "* avoid * raw * meat *",
                    "pattern": "^(.*)\\bavoid\\b(.*)\\braw\\b(.*)\\bmeat\\b(.*)$",
                    "index": 13
                },
                {
                    "rawPattern": "* bad * hydrate * diarrhea *",
                    "pattern": "^(.*)\\bbad\\b(.*)\\bhydrate\\b(.*)\\bdiarrhea\\b(.*)$",
                    "index": 16
                },
                {
                    "rawPattern": "* food * avoid * diarrhea * ",
                    "pattern": "^(.*)\\bfood\\b(.*)\\bavoid\\b(.*)\\bdiarrhea\\b(.*)$",
                    "index": 20
                },
                {
                    "rawPattern": "* food * not * (eat|take) * ",
                    "pattern": "^(.*)\\bfood\\b(.*)\\bnot\\b(.*)(\\beat\\b|\\btake\\b)(.*)$",
                    "index": 20
                },
                {
                    "rawPattern": "*  not * eat * food *",
                    "pattern": "^(.*)\\bnot\\b(.*)\\beat\\b(.*)\\bfood\\b(.*)$",
                    "index": 20
                },
                {
                    "rawPattern": "*  food * not * eat *",
                    "pattern": "^(.*)\\bfood\\b(.*)\\bnot\\b(.*)\\beat\\b(.*)$",
                    "index": 20
                },
                {
                    "rawPattern": "* eat  * avoid * diarrhea * ",
                    "pattern": "^(.*)\\beat\\b(.*)\\bavoid\\b(.*)\\bdiarrhea\\b(.*)$",
                    "index": 20
                },
                {
                    "rawPattern": "* (what|how) * (take|guide|dose) * antimotility *",
                    "pattern": "^(.*)(\\bwhat\\b|\\bhow\\b)(.*)(\\btake\\b|\\bguide\\b|\\bdose\\b)(.*)\\bantimotility\\b(.*)$",
                    "index": 22
                },
                {
                    "rawPattern": "* how * antimotility * take *",
                    "pattern": "^(.*)\\bhow\\b(.*)\\bantimotility\\b(.*)\\btake\\b(.*)$",
                    "index": 22
                },
                {
                    "rawPattern": "* what * use * antimotility *",
                    "pattern": "^(.*)\\bwhat\\b(.*)\\buse\\b(.*)\\bantimotility\\b(.*)$",
                    "index": 24
                },
                {
                    "rawPattern": "* how * antimotility * work *",
                    "pattern": "^(.*)\\bhow\\b(.*)\\bantimotility\\b(.*)\\bwork\\b(.*)$",
                    "index": 25
                },
                {
                    "rawPattern": "* antimotility * (avoid|not * (take|use)) *",
                    "pattern": "^(.*)\\bantimotility\\b(.*)(\\bavoid\\b|\\bnot\\b(.*)(\\btake\\b|\\buse\\b))(.*)$",
                    "index": 26
                },
                {
                    "rawPattern": "* (how|what) * (guide|dose|take|eat) * bismuth*",
                    "pattern": "^(.*)(\\bhow\\b|\\bwhat\\b)(.*)(\\bguide\\b|\\bdose\\b|\\btake\\b|\\beat\\b)(.*)\\bbismuth\\b(.*)$",
                    "index": 30
                },
                {
                    "rawPattern": "* ( not * (take|use) | avoid )  * bismuth *",
                    "pattern": "^(.*)(\\bnot\\b(.*)(\\btake\\b|\\buse\\b)|\\bavoid\\b)(.*)\\bbismuth\\b(.*)$",
                    "index": 34
                },
                {
                    "rawPattern": "* where * go * have * diarrhea",
                    "pattern": "^(.*)\\bwhere\\b(.*)\\bgo\\b(.*)\\bhave\\b(.*)\\bdiarrhea\\b$",
                    "index": 38
                },
                {
                    "rawPattern": "* where * treat * have * diarrhea",
                    "pattern": "^(.*)\\bwhere\\b(.*)\\btreat\\b(.*)\\bhave\\b(.*)\\bdiarrhea\\b$",
                    "index": 38
                },
                {
                    "rawPattern": "* how * tell * have * diarrhea",
                    "pattern": "^(.*)\\bhow\\b(.*)\\btell\\b(.*)\\bhave\\b(.*)\\bdiarrhea\\b$",
                    "index": 39
                },
                {
                    "rawPattern": "* rest * treat * influenza *",
                    "pattern": "^(.*)\\brest\\b(.*)\\btreat\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 42
                },
                {
                    "rawPattern": "* take * water * influenza * ",
                    "pattern": "^(.*)\\btake\\b(.*)\\bwater\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 43
                },
                {
                    "rawPattern": "* treat * influenza * where *",
                    "pattern": "^(.*)\\btreat\\b(.*)\\binfluenza\\b(.*)\\bwhere\\b(.*)$",
                    "index": 45
                },
                {
                    "rawPattern": "* where * treat * influenza *",
                    "pattern": "^(.*)\\bwhere\\b(.*)\\btreat\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 45
                },
                {
                    "rawPattern": "* get * influenza * vaccine * ",
                    "pattern": "^(.*)\\bget\\b(.*)\\binfluenza\\b(.*)\\bvaccine\\b(.*)$",
                    "index": 47
                },
                {
                    "rawPattern": "* (avoid|not) * touch * influenza *",
                    "pattern": "^(.*)(\\bavoid\\b|\\bnot\\b)(.*)\\btouch\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 48
                },
                {
                    "rawPattern": "* eat * food * influenza *",
                    "pattern": "^(.*)\\beat\\b(.*)\\bfood\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 53
                },
                {
                    "rawPattern": "* food * influenza * eat *",
                    "pattern": "^(.*)\\bfood\\b(.*)\\binfluenza\\b(.*)\\beat\\b(.*)$",
                    "index": 53
                },
                {
                    "rawPattern": "* food * eat * influenza *",
                    "pattern": "^(.*)\\bfood\\b(.*)\\beat\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 53
                },
                {
                    "rawPattern": "* (not eat|avoid) * food * influenza *",
                    "pattern": "^(.*)(\\bnoteat\\b|\\bavoid\\b)(.*)\\bfood\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 56
                },
                {
                    "rawPattern": "* food * (not (take|drink|buy|eat)|avoid) * influenza *",
                    "pattern": "^(.*)\\bfood\\b(.*)(\\bnot\\b(\\btake\\b|\\bdrink\\b|\\bbuy\\b|\\beat\\b)|\\bavoid\\b)(.*)\\binfluenza\\b(.*)$",
                    "index": 56
                },
                {
                    "rawPattern": "* influenza * (not eat|avoid) * food *",
                    "pattern": "^(.*)\\binfluenza\\b(.*)(\\bnoteat\\b|\\bavoid\\b)(.*)\\bfood\\b(.*)$",
                    "index": 56
                },
                {
                    "rawPattern": "* influenza * food * (not eat|avoid) *",
                    "pattern": "^(.*)\\binfluenza\\b(.*)\\bfood\\b(.*)(\\bnoteat\\b|\\bavoid\\b)(.*)$",
                    "index": 56
                },
                {
                    "rawPattern": "* (what|how) * (dose|take|guide) * antihistamine *",
                    "pattern": "^(.*)(\\bwhat\\b|\\bhow\\b)(.*)(\\bdose\\b|\\btake\\b|\\bguide\\b)(.*)\\bantihistamine\\b(.*)$",
                    "index": 58
                },
                {
                    "rawPattern": "* not * (take|use) *  antihistamine *",
                    "pattern": "^(.*)\\bnot\\b(.*)(\\btake\\b|\\buse\\b)(.*)\\bantihistamine\\b(.*)$",
                    "index": 62
                },
                {
                    "rawPattern": "* (what|how) * (guide|dose|take) * analgesic *",
                    "pattern": "^(.*)(\\bwhat\\b|\\bhow\\b)(.*)(\\bguide\\b|\\bdose\\b|\\btake\\b)(.*)\\banalgesic\\b(.*)$",
                    "index": 66
                },
                {
                    "rawPattern": "* what *effect *analgesic  *",
                    "pattern": "^(.*)\\bwhat\\b(.*)\\beffect\\b(.*)\\banalgesic\\b(.*)$",
                    "index": 71
                },
                {
                    "rawPattern": "* what * tip * analgesic *",
                    "pattern": "^(.*)\\bwhat\\b(.*)\\btip\\b(.*)\\banalgesic\\b(.*)$",
                    "index": 72
                },
                {
                    "rawPattern": "* (what|how) * (take|guide|dose) * decongestant *",
                    "pattern": "^(.*)(\\bwhat\\b|\\bhow\\b)(.*)(\\btake\\b|\\bguide\\b|\\bdose\\b)(.*)\\bdecongestant\\b(.*)$",
                    "index": 74
                },
                {
                    "rawPattern": "* not * (take|use) * decongestant*",
                    "pattern": "^(.*)\\bnot\\b(.*)(\\btake\\b|\\buse\\b)(.*)\\bdecongestant\\b(.*)$",
                    "index": 78
                },
                {
                    "rawPattern": "* (how|what) * (guide|take|dose) * expectorant *",
                    "pattern": "^(.*)(\\bhow\\b|\\bwhat\\b)(.*)(\\bguide\\b|\\btake\\b|\\bdose\\b)(.*)\\bexpectorant\\b(.*)$",
                    "index": 82
                },
                {
                    "rawPattern": "* not * (take|use) * expectorant*",
                    "pattern": "^(.*)\\bnot\\b(.*)(\\btake\\b|\\buse\\b)(.*)\\bexpectorant\\b(.*)$",
                    "index": 86
                },
                {
                    "rawPattern": "* (how|what) * (take|guide|dose) * antitussive *",
                    "pattern": "^(.*)(\\bhow\\b|\\bwhat\\b)(.*)(\\btake\\b|\\bguide\\b|\\bdose\\b)(.*)\\bantitussive\\b(.*)$",
                    "index": 90
                },
                {
                    "rawPattern": "* not * (take|use) * antitussive *",
                    "pattern": "^(.*)\\bnot\\b(.*)(\\btake\\b|\\buse\\b)(.*)\\bantitussive\\b(.*)$",
                    "index": 94
                },
                {
                    "rawPattern": "* (what|how) * (guide|take|dose) * lozenge *",
                    "pattern": "^(.*)(\\bwhat\\b|\\bhow\\b)(.*)(\\bguide\\b|\\btake\\b|\\bdose\\b)(.*)\\blozenge\\b(.*)$",
                    "index": 98
                },
                {
                    "rawPattern": "* what * lozenge * use *",
                    "pattern": "^(.*)\\bwhat\\b(.*)\\blozenge\\b(.*)\\buse\\b(.*)$",
                    "index": 100
                },
                {
                    "rawPattern": "* not * (take|use) * lozenge *",
                    "pattern": "^(.*)\\bnot\\b(.*)(\\btake\\b|\\buse\\b)(.*)\\blozenge\\b(.*)$",
                    "index": 102
                },
                {
                    "rawPattern": "* what * tip * lozenge *",
                    "pattern": "^(.*)\\bwhat\\b(.*)\\btip\\b(.*)\\blozenge\\b(.*)$",
                    "index": 104
                },
                {
                    "rawPattern": "* tell * (symptom|symptom) * influenza *",
                    "pattern": "^(.*)\\btell\\b(.*)(\\bsymptom\\b|\\bsymptom\\b)(.*)\\binfluenza\\b(.*)$",
                    "index": 107
                },
                {
                    "rawPattern": "* (treat|remove|treat) * clog * nose *",
                    "pattern": "^(.*)(\\btreat\\b|\\bremove\\b|\\btreat\\b)(.*)\\bclog\\b(.*)\\bnose\\b(.*)$",
                    "index": 113
                },
                {
                    "rawPattern": "* sweet * diarrhea *",
                    "pattern": "^(.*)\\bsweet\\b(.*)\\bdiarrhea\\b(.*)$",
                    "index": 0
                },
                {
                    "rawPattern": "* allergy * diarrhea *",
                    "pattern": "^(.*)\\ballergy\\b(.*)\\bdiarrhea\\b(.*)$",
                    "index": 1
                },
                {
                    "rawPattern": "* parasite * diarrhea *",
                    "pattern": "^(.*)\\bparasite\\b(.*)\\bdiarrhea\\b(.*)$",
                    "index": 2
                },
                {
                    "rawPattern": "* bacteria * diarrhea * ",
                    "pattern": "^(.*)\\bbacteria\\b(.*)\\bdiarrhea\\b(.*)$",
                    "index": 3
                },
                {
                    "rawPattern": "* virus * diarrhea * ",
                    "pattern": "^(.*)\\bvirus\\b(.*)\\bdiarrhea\\b(.*)$",
                    "index": 4
                },
                {
                    "rawPattern": "* blood * (stool|diarrhea) *",
                    "pattern": "^(.*)\\bblood\\b(.*)(\\bstool\\b|\\bdiarrhea\\b)(.*)$",
                    "index": 9
                },
                {
                    "rawPattern": "* diarrhea * fever *",
                    "pattern": "^(.*)\\bdiarrhea\\b(.*)\\bfever\\b(.*)$",
                    "index": 10
                },
                {
                    "rawPattern": "* fever * diarrhea *",
                    "pattern": "^(.*)\\bfever\\b(.*)\\bdiarrhea\\b(.*)$",
                    "index": 10
                },
                {
                    "rawPattern": "* treat * diarrhea *",
                    "pattern": "^(.*)\\btreat\\b(.*)\\bdiarrhea\\b(.*)$",
                    "index": 11
                },
                {
                    "rawPattern": "* peel * eat *",
                    "pattern": "^(.*)\\bpeel\\b(.*)\\beat\\b(.*)$",
                    "index": 12
                },
                {
                    "rawPattern": "* cook * meat *",
                    "pattern": "^(.*)\\bcook\\b(.*)\\bmeat\\b(.*)$",
                    "index": 13
                },
                {
                    "rawPattern": "*avoid * diarrhea *",
                    "pattern": "^(.*)\\bavoid\\b(.*)\\bdiarrhea\\b(.*)$",
                    "index": 14
                },
                {
                    "rawPattern": "* food * (take|good) * ",
                    "pattern": "^(.*)\\bfood\\b(.*)(\\btake\\b|\\bgood\\b)(.*)$",
                    "index": 15
                },
                {
                    "rawPattern": "* diarrhea_foods_not_allowed_bad_hydration * diarrhea *",
                    "pattern": "^(.*)\\bdiarrhea_foods_not_allowed_bad_hydration\\b(.*)\\bdiarrhea\\b(.*)$",
                    "index": 16
                },
                {
                    "rawPattern": "* avoid * food * ",
                    "pattern": "^(.*)\\bavoid\\b(.*)\\bfood\\b(.*)$",
                    "index": 20
                },
                {
                    "rawPattern": "* who * problem * ",
                    "pattern": "^(.*)\\bwho\\b(.*)\\bproblem\\b(.*)$",
                    "index": 21
                },
                {
                    "rawPattern": "*  who * problem *",
                    "pattern": "^(.*)\\bwho\\b(.*)\\bproblem\\b(.*)$",
                    "index": 21
                },
                {
                    "rawPattern": "*  problem *who *",
                    "pattern": "^(.*)\\bproblem\\b(.*)\\bwho\\b(.*)$",
                    "index": 21
                },
                {
                    "rawPattern": "* (avoid|not (take|use)) * antimotility *",
                    "pattern": "^(.*)(\\bavoid\\b|\\bnot\\b(\\btake\\b|\\buse\\b))(.*)\\bantimotility\\b(.*)$",
                    "index": 26
                },
                {
                    "rawPattern": "* effect * antimotility *",
                    "pattern": "^(.*)\\beffect\\b(.*)\\bantimotility\\b(.*)$",
                    "index": 27
                },
                {
                    "rawPattern": "* tip * antimotility *",
                    "pattern": "^(.*)\\btip\\b(.*)\\bantimotility\\b(.*)$",
                    "index": 28
                },
                {
                    "rawPattern": "* alternative * antimotility *",
                    "pattern": "^(.*)\\balternative\\b(.*)\\bantimotility\\b(.*)$",
                    "index": 29
                },
                {
                    "rawPattern": "* (guide|dose|take|eat) * bismuth subsalicylate *",
                    "pattern": "^(.*)(\\bguide\\b|\\bdose\\b|\\btake\\b|\\beat\\b)(.*)\\bbismuthsubsalicylate\\b(.*)$",
                    "index": 30
                },
                {
                    "rawPattern": "* use * bismuth *",
                    "pattern": "^(.*)\\buse\\b(.*)\\bbismuth\\b(.*)$",
                    "index": 32
                },
                {
                    "rawPattern": "* bismuth * work *",
                    "pattern": "^(.*)\\bbismuth\\b(.*)\\bwork\\b(.*)$",
                    "index": 33
                },
                {
                    "rawPattern": "* effect * bismuth *",
                    "pattern": "^(.*)\\beffect\\b(.*)\\bbismuth\\b(.*)$",
                    "index": 35
                },
                {
                    "rawPattern": "* tip * bismuth *",
                    "pattern": "^(.*)\\btip\\b(.*)\\bbismuth\\b(.*)$",
                    "index": 36
                },
                {
                    "rawPattern": "* alternative * bismuth *",
                    "pattern": "^(.*)\\balternative\\b(.*)\\bbismuth\\b(.*)$",
                    "index": 37
                },
                {
                    "rawPattern": "* virus * influenza *",
                    "pattern": "^(.*)\\bvirus\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 40
                },
                {
                    "rawPattern": "* get * influenza *",
                    "pattern": "^(.*)\\bget\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 41
                },
                {
                    "rawPattern": "* (drug|treat) * influenza *",
                    "pattern": "^(.*)(\\bdrug\\b|\\btreat\\b)(.*)\\binfluenza\\b(.*)$",
                    "index": 46
                },
                {
                    "rawPattern": "* influenza * (drug|treat)*",
                    "pattern": "^(.*)\\binfluenza\\b(.*)(\\bdrug\\b|\\btreat\\b)(.*)$",
                    "index": 46
                },
                {
                    "rawPattern": "* distance *  influenza * ",
                    "pattern": "^(.*)\\bdistance\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 48
                },
                {
                    "rawPattern": "* wear * (influenza|cough|sneeze) *",
                    "pattern": "^(.*)\\bwear\\b(.*)(\\binfluenza\\b|\\bcough\\b|\\bsneeze\\b)(.*)$",
                    "index": 49
                },
                {
                    "rawPattern": "* avoid * touch * ",
                    "pattern": "^(.*)\\bavoid\\b(.*)\\btouch\\b(.*)$",
                    "index": 50
                },
                {
                    "rawPattern": "* (wear|use) * mask * ",
                    "pattern": "^(.*)(\\bwear\\b|\\buse\\b)(.*)\\bmask\\b(.*)$",
                    "index": 51
                },
                {
                    "rawPattern": "* avoid * influenza *",
                    "pattern": "^(.*)\\bavoid\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 52
                },
                {
                    "rawPattern": "* influenza_foods_not_allowed_greasy_foods * influenza * ",
                    "pattern": "^(.*)\\binfluenza_foods_not_allowed_greasy_foods\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 54
                },
                {
                    "rawPattern": "* influenza_foods_not_allowed_sugary_foods * influenza *",
                    "pattern": "^(.*)\\binfluenza_foods_not_allowed_sugary_foods\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 55
                },
                {
                    "rawPattern": "* influenza * problem *",
                    "pattern": "^(.*)\\binfluenza\\b(.*)\\bproblem\\b(.*)$",
                    "index": 57
                },
                {
                    "rawPattern": "* problem * influenza *",
                    "pattern": "^(.*)\\bproblem\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 57
                },
                {
                    "rawPattern": "* (guide|dose|take) * antihistamine *",
                    "pattern": "^(.*)(\\bguide\\b|\\bdose\\b|\\btake\\b)(.*)\\bantihistamine\\b(.*)$",
                    "index": 58
                },
                {
                    "rawPattern": "* antihistamine * guide *",
                    "pattern": "^(.*)\\bantihistamine\\b(.*)\\bguide\\b(.*)$",
                    "index": 58
                },
                {
                    "rawPattern": "* use * antihistamine *",
                    "pattern": "^(.*)\\buse\\b(.*)\\bantihistamine\\b(.*)$",
                    "index": 60
                },
                {
                    "rawPattern": "* work * treat *",
                    "pattern": "^(.*)\\bwork\\b(.*)\\btreat\\b(.*)$",
                    "index": 61
                },
                {
                    "rawPattern": "* antihistamine * work *",
                    "pattern": "^(.*)\\bantihistamine\\b(.*)\\bwork\\b(.*)$",
                    "index": 61
                },
                {
                    "rawPattern": "* avoid * antihistamine *",
                    "pattern": "^(.*)\\bavoid\\b(.*)\\bantihistamine\\b(.*)$",
                    "index": 62
                },
                {
                    "rawPattern": "*effect * antihistamine *",
                    "pattern": "^(.*)\\beffect\\b(.*)\\bantihistamine\\b(.*)$",
                    "index": 63
                },
                {
                    "rawPattern": "* tip *  antihistamine *",
                    "pattern": "^(.*)\\btip\\b(.*)\\bantihistamine\\b(.*)$",
                    "index": 64
                },
                {
                    "rawPattern": "* alternative * antihistamine * ",
                    "pattern": "^(.*)\\balternative\\b(.*)\\bantihistamine\\b(.*)$",
                    "index": 65
                },
                {
                    "rawPattern": "* (guide|dose|take) * analgesic *",
                    "pattern": "^(.*)(\\bguide\\b|\\bdose\\b|\\btake\\b)(.*)\\banalgesic\\b(.*)$",
                    "index": 66
                },
                {
                    "rawPattern": "* analgesic * use  *",
                    "pattern": "^(.*)\\banalgesic\\b(.*)\\buse\\b(.*)$",
                    "index": 68
                },
                {
                    "rawPattern": "* analgesic * (treat|work) *",
                    "pattern": "^(.*)\\banalgesic\\b(.*)(\\btreat\\b|\\bwork\\b)(.*)$",
                    "index": 69
                },
                {
                    "rawPattern": "* avoid * analgesic *",
                    "pattern": "^(.*)\\bavoid\\b(.*)\\banalgesic\\b(.*)$",
                    "index": 70
                },
                {
                    "rawPattern": "* not (take|use) * analgesic *",
                    "pattern": "^(.*)\\bnot\\b(\\btake\\b|\\buse\\b)(.*)\\banalgesic\\b(.*)$",
                    "index": 70
                },
                {
                    "rawPattern": "* alternative * analgesic* ",
                    "pattern": "^(.*)\\balternative\\b(.*)\\banalgesic\\b(.*)$",
                    "index": 73
                },
                {
                    "rawPattern": "* decongestant * (treat|use) *",
                    "pattern": "^(.*)\\bdecongestant\\b(.*)(\\btreat\\b|\\buse\\b)(.*)$",
                    "index": 76
                },
                {
                    "rawPattern": "* decongestant * work *",
                    "pattern": "^(.*)\\bdecongestant\\b(.*)\\bwork\\b(.*)$",
                    "index": 77
                },
                {
                    "rawPattern": "* avoid * decongestant*",
                    "pattern": "^(.*)\\bavoid\\b(.*)\\bdecongestant\\b(.*)$",
                    "index": 78
                },
                {
                    "rawPattern": "*effect *decongestant*",
                    "pattern": "^(.*)\\beffect\\b(.*)\\bdecongestant\\b(.*)$",
                    "index": 79
                },
                {
                    "rawPattern": "* tip * decongestant*",
                    "pattern": "^(.*)\\btip\\b(.*)\\bdecongestant\\b(.*)$",
                    "index": 80
                },
                {
                    "rawPattern": "* alternative * decongestant* ",
                    "pattern": "^(.*)\\balternative\\b(.*)\\bdecongestant\\b(.*)$",
                    "index": 81
                },
                {
                    "rawPattern": "* expectorant* use *",
                    "pattern": "^(.*)\\bexpectorant\\b(.*)\\buse\\b(.*)$",
                    "index": 84
                },
                {
                    "rawPattern": "* expectorant * (treat|work) *",
                    "pattern": "^(.*)\\bexpectorant\\b(.*)(\\btreat\\b|\\bwork\\b)(.*)$",
                    "index": 85
                },
                {
                    "rawPattern": "* avoid * expectorant*",
                    "pattern": "^(.*)\\bavoid\\b(.*)\\bexpectorant\\b(.*)$",
                    "index": 86
                },
                {
                    "rawPattern": "*effect *expectorant*",
                    "pattern": "^(.*)\\beffect\\b(.*)\\bexpectorant\\b(.*)$",
                    "index": 87
                },
                {
                    "rawPattern": "* tip * expectorant*",
                    "pattern": "^(.*)\\btip\\b(.*)\\bexpectorant\\b(.*)$",
                    "index": 88
                },
                {
                    "rawPattern": "* alternative * expectorant*",
                    "pattern": "^(.*)\\balternative\\b(.*)\\bexpectorant\\b(.*)$",
                    "index": 89
                },
                {
                    "rawPattern": "* antitussive * use *",
                    "pattern": "^(.*)\\bantitussive\\b(.*)\\buse\\b(.*)$",
                    "index": 92
                },
                {
                    "rawPattern": "* antitussive * (treat|work) *",
                    "pattern": "^(.*)\\bantitussive\\b(.*)(\\btreat\\b|\\bwork\\b)(.*)$",
                    "index": 93
                },
                {
                    "rawPattern": "* avoid * antitussive *",
                    "pattern": "^(.*)\\bavoid\\b(.*)\\bantitussive\\b(.*)$",
                    "index": 94
                },
                {
                    "rawPattern": "*effect *antitussive *",
                    "pattern": "^(.*)\\beffect\\b(.*)\\bantitussive\\b(.*)$",
                    "index": 95
                },
                {
                    "rawPattern": "* tip * antitussive *",
                    "pattern": "^(.*)\\btip\\b(.*)\\bantitussive\\b(.*)$",
                    "index": 96
                },
                {
                    "rawPattern": "* alternative * antitussive *",
                    "pattern": "^(.*)\\balternative\\b(.*)\\bantitussive\\b(.*)$",
                    "index": 97
                },
                {
                    "rawPattern": "* guide * lozenge *",
                    "pattern": "^(.*)\\bguide\\b(.*)\\blozenge\\b(.*)$",
                    "index": 98
                },
                {
                    "rawPattern": "* dose * lozenge *",
                    "pattern": "^(.*)\\bdose\\b(.*)\\blozenge\\b(.*)$",
                    "index": 98
                },
                {
                    "rawPattern": "* lozenge * (treat|work) *",
                    "pattern": "^(.*)\\blozenge\\b(.*)(\\btreat\\b|\\bwork\\b)(.*)$",
                    "index": 101
                },
                {
                    "rawPattern": "* avoid * lozenge *",
                    "pattern": "^(.*)\\bavoid\\b(.*)\\blozenge\\b(.*)$",
                    "index": 102
                },
                {
                    "rawPattern": "*effect *lozenge *",
                    "pattern": "^(.*)\\beffect\\b(.*)\\blozenge\\b(.*)$",
                    "index": 103
                },
                {
                    "rawPattern": "* alternative * lozenge * ",
                    "pattern": "^(.*)\\balternative\\b(.*)\\blozenge\\b(.*)$",
                    "index": 105
                },
                {
                    "rawPattern": "* (sign|symptom) * influenza *",
                    "pattern": "^(.*)(\\bsign\\b|\\bsymptom\\b)(.*)\\binfluenza\\b(.*)$",
                    "index": 107
                },
                {
                    "rawPattern": "* (treat|remove|treat|TAKE) * vomit *",
                    "pattern": "^(.*)(\\btreat\\b|\\bremove\\b|\\btreat\\b|\\bTAKE\\b)(.*)\\bvomit\\b(.*)$",
                    "index": 108
                },
                {
                    "rawPattern": "* (treat|remove|treat|TAKE) * nausea *",
                    "pattern": "^(.*)(\\btreat\\b|\\bremove\\b|\\btreat\\b|\\bTAKE\\b)(.*)\\bnausea\\b(.*)$",
                    "index": 109
                },
                {
                    "rawPattern": "* boil * water *",
                    "pattern": "^(.*)\\bboil\\b(.*)\\bwater\\b(.*)$",
                    "index": 110
                },
                {
                    "rawPattern": "* clean * water *",
                    "pattern": "^(.*)\\bclean\\b(.*)\\bwater\\b(.*)$",
                    "index": 111
                },
                {
                    "rawPattern": "* (treat|remove|treat) * fever *",
                    "pattern": "^(.*)(\\btreat\\b|\\bremove\\b|\\btreat\\b)(.*)\\bfever\\b(.*)$",
                    "index": 112
                },
                {
                    "rawPattern": "* (treat|treat|treat) * (head|headache) *",
                    "pattern": "^(.*)(\\btreat\\b|\\btreat\\b|\\btreat\\b)(.*)(\\bhead\\b|\\bheadache\\b)(.*)$",
                    "index": 114
                },
                {
                    "rawPattern": "* (treat|treat|treat)  * stomach *",
                    "pattern": "^(.*)(\\btreat\\b|\\btreat\\b|\\btreat\\b)(.*)\\bstomach\\b(.*)$",
                    "index": 115
                },
                {
                    "rawPattern": "* (treat|remove|treat) * sore throat *",
                    "pattern": "^(.*)(\\btreat\\b|\\bremove\\b|\\btreat\\b)(.*)\\bsorethroat\\b(.*)$",
                    "index": 116
                },
                {
                    "rawPattern": "* wear * sneeze *",
                    "pattern": "^(.*)\\bwear\\b(.*)\\bsneeze\\b(.*)$",
                    "index": 117
                },
                {
                    "rawPattern": "* clean * hand *",
                    "pattern": "^(.*)\\bclean\\b(.*)\\bhand\\b(.*)$",
                    "index": 118
                },
                {
                    "rawPattern": "* stomach *cramp*",
                    "pattern": "^(.*)\\bstomach\\b(.*)\\bcramp\\b(.*)$",
                    "index": 135
                },
                {
                    "rawPattern": "* cramp * stomach*",
                    "pattern": "^(.*)\\bcramp\\b(.*)\\bstomach\\b(.*)$",
                    "index": 135
                },
                {
                    "rawPattern": "* lactose *",
                    "pattern": "^(.*)\\blactose\\b(.*)$",
                    "index": 17
                },
                {
                    "rawPattern": "* lactose * ",
                    "pattern": "^(.*)\\blactose\\b(.*)$",
                    "index": 17
                },
                {
                    "rawPattern": "* diarrhea_foods_not_allowed_contains_lactose * ",
                    "pattern": "^(.*)\\bdiarrhea_foods_not_allowed_contains_lactose\\b(.*)$",
                    "index": 17
                },
                {
                    "rawPattern": "* diarrhea_foods_not_allowed_contains_lactose *",
                    "pattern": "^(.*)\\bdiarrhea_foods_not_allowed_contains_lactose\\b(.*)$",
                    "index": 17
                },
                {
                    "rawPattern": "* diarrhea_foods_not_allowed_irritate_stomach * ",
                    "pattern": "^(.*)\\bdiarrhea_foods_not_allowed_irritate_stomach\\b(.*)$",
                    "index": 18
                },
                {
                    "rawPattern": "* diarrhea_foods_not_allowed_irritate_stomach *",
                    "pattern": "^(.*)\\bdiarrhea_foods_not_allowed_irritate_stomach\\b(.*)$",
                    "index": 18
                },
                {
                    "rawPattern": "* diarrhea_foods_not_allowed_oily * ",
                    "pattern": "^(.*)\\bdiarrhea_foods_not_allowed_oily\\b(.*)$",
                    "index": 19
                },
                {
                    "rawPattern": "* diarrhea_foods_not_allowed_oily *",
                    "pattern": "^(.*)\\bdiarrhea_foods_not_allowed_oily\\b(.*)$",
                    "index": 19
                },
                {
                    "rawPattern": "* antimotility *",
                    "pattern": "^(.*)\\bantimotility\\b(.*)$",
                    "index": 23
                },
                {
                    "rawPattern": "* bismuth *",
                    "pattern": "^(.*)\\bbismuth\\b(.*)$",
                    "index": 31
                },
                {
                    "rawPattern": "* symptom * diarrhea",
                    "pattern": "^(.*)\\bsymptom\\b(.*)\\bdiarrhea\\b$",
                    "index": 39
                },
                {
                    "rawPattern": "* influenza_foods_not_allowed_greasy_foods * ",
                    "pattern": "^(.*)\\binfluenza_foods_not_allowed_greasy_foods\\b(.*)$",
                    "index": 54
                },
                {
                    "rawPattern": "* influenza_foods_not_allowed_sugary_foods * ",
                    "pattern": "^(.*)\\binfluenza_foods_not_allowed_sugary_foods\\b(.*)$",
                    "index": 55
                },
                {
                    "rawPattern": "* antihistamine *",
                    "pattern": "^(.*)\\bantihistamine\\b(.*)$",
                    "index": 59
                },
                {
                    "rawPattern": "* antihistamine *",
                    "pattern": "^(.*)\\bantihistamine\\b(.*)$",
                    "index": 60
                },
                {
                    "rawPattern": "* analgesic *",
                    "pattern": "^(.*)\\banalgesic\\b(.*)$",
                    "index": 67
                },
                {
                    "rawPattern": "* decongestant*",
                    "pattern": "^(.*)\\bdecongestant\\b(.*)$",
                    "index": 75
                },
                {
                    "rawPattern": "* expectorant*",
                    "pattern": "^(.*)\\bexpectorant\\b(.*)$",
                    "index": 83
                },
                {
                    "rawPattern": "* antitussive *",
                    "pattern": "^(.*)\\bantitussive\\b(.*)$",
                    "index": 91
                },
                {
                    "rawPattern": "* lozenge *",
                    "pattern": "^(.*)\\blozenge\\b(.*)$",
                    "index": 99
                },
                {
                    "rawPattern": "* symptom *",
                    "pattern": "^(.*)\\bsymptom\\b(.*)$",
                    "index": 119
                },
                {
                    "rawPattern": "* symptom *",
                    "pattern": "^(.*)\\bsymptom\\b(.*)$",
                    "index": 119
                },
                {
                    "rawPattern": "* (hi|hello) *",
                    "pattern": "^(.*)(\\bhi\\b|\\bhello\\b)(.*)$",
                    "index": 120
                },
                {
                    "rawPattern": "* good (evening|afternoon|morning) *",
                    "pattern": "^(.*)\\bgood\\b(\\bevening\\b|\\bafternoon\\b|\\bmorning\\b)(.*)$",
                    "index": 120
                },
                {
                    "rawPattern": "* antimotility *",
                    "pattern": "^(.*)\\bantimotility\\b(.*)$",
                    "index": 121
                },
                {
                    "rawPattern": "* bismuth *",
                    "pattern": "^(.*)\\bbismuth\\b(.*)$",
                    "index": 122
                },
                {
                    "rawPattern": "* antihistamine *",
                    "pattern": "^(.*)\\bantihistamine\\b(.*)$",
                    "index": 123
                },
                {
                    "rawPattern": "* analgesic *",
                    "pattern": "^(.*)\\banalgesic\\b(.*)$",
                    "index": 124
                },
                {
                    "rawPattern": "* nsaid *",
                    "pattern": "^(.*)\\bnsaid\\b(.*)$",
                    "index": 125
                },
                {
                    "rawPattern": "* decongestant *",
                    "pattern": "^(.*)\\bdecongestant\\b(.*)$",
                    "index": 126
                },
                {
                    "rawPattern": "* expectorant *",
                    "pattern": "^(.*)\\bexpectorant\\b(.*)$",
                    "index": 127
                },
                {
                    "rawPattern": "* antitussive *",
                    "pattern": "^(.*)\\bantitussive\\b(.*)$",
                    "index": 128
                },
                {
                    "rawPattern": "* lozenge *",
                    "pattern": "^(.*)\\blozenge\\b(.*)$",
                    "index": 129
                },
                {
                    "rawPattern": "* (treat|do) *",
                    "pattern": "^(.*)(\\btreat\\b|\\bdo\\b)(.*)$",
                    "index": 130
                },
                {
                    "rawPattern": "*diarrhea*",
                    "pattern": "^(.*)\\bdiarrhea\\b(.*)$",
                    "index": 131
                },
                {
                    "rawPattern": "* influenza *",
                    "pattern": "^(.*)\\binfluenza\\b(.*)$",
                    "index": 132
                },
                {
                    "rawPattern": "*vomit*",
                    "pattern": "^(.*)\\bvomit\\b(.*)$",
                    "index": 133
                },
                {
                    "rawPattern": "*headache*",
                    "pattern": "^(.*)\\bheadache\\b(.*)$",
                    "index": 134
                },
                {
                    "rawPattern": "* stomach * ",
                    "pattern": "^(.*)\\bstomach\\b(.*)$",
                    "index": 135
                },
                {
                    "rawPattern": "*stiffness*",
                    "pattern": "^(.*)\\bstiffness\\b(.*)$",
                    "index": 136
                },
                {
                    "rawPattern": "*clog*",
                    "pattern": "^(.*)\\bclog\\b(.*)$",
                    "index": 137
                },
                {
                    "rawPattern": "*nausea*",
                    "pattern": "^(.*)\\bnausea\\b(.*)$",
                    "index": 138
                },
                {
                    "rawPattern": "*",
                    "pattern": "^(.*)$",
                    "index": 139
                }
            ],
            "memory": [
                {
                    "rawPattern": [
                        "* sweet * diarrhea *"
                    ],
                    "patterns": [
                        "* sweet * diarrhea *"
                    ],
                    "response": [
                        "\n        Sweets could trigger diarrhea due to their ability to create an osmotic effect in the intestines, drawing water from the body into the digestive tract, and also due to their ability to stimulate the production of digestive enzymes and increase gut motility, leading to incomplete absorption of nutrients and water. Also , sometimes sweets are not well absorbed by the body and can ferment in the gut, causing gas, bloating and diarrhea in susceptible individuals. For example, lactose-intolerant people lack the enzyme lactase, which is necessary to break down the lactose in milk and dairy products. If lactose is not broken down properly, it can cause diarrhea.\n        "
                    ],
                    "index": 0
                },
                {
                    "rawPattern": [
                        "* allergy * diarrhea *"
                    ],
                    "patterns": [
                        "* allergy * diarrhea *"
                    ],
                    "response": [
                        "Allergies can trigger diarrhea as a result of the body's immune response to an allergen. When an allergen is detected, the immune system releases histamine and other chemicals that can cause inflammation and irritation in the gut. This inflammation can lead to increased gut motility, reduced water absorption, and the secretion of excess fluid into the intestines, resulting in diarrhea."
                    ],
                    "index": 1
                },
                {
                    "rawPattern": [
                        "* parasite * diarrhea *"
                    ],
                    "patterns": [
                        "* parasite * diarrhea *"
                    ],
                    "response": [
                        "Parasites can attach themselves to the intestinal walls, causing damage and releasing toxins that can trigger an immune response and inflammation. This inflammation can lead to increased gut motility, reduced water absorption, and the secretion of excess fluid into the intestines, resulting in diarrhea. Additionally, some parasites can produce enzymes that interfere with the digestion and absorption of nutrients, leading to malabsorption and diarrhea.\n        "
                    ],
                    "index": 2
                },
                {
                    "rawPattern": [
                        "* bacteria * diarrhea * "
                    ],
                    "patterns": [
                        "* bacteria * diarrhea * "
                    ],
                    "response": [
                        "Bacterial infections are able to cause diarrhoea because of the production of toxins which damage the intestine, causing inflammation and irritation. Also, it triggers the release of fluid from the gastrointestinal tract. By secreting enzymes which break down food in the gut and lead to malabsorption and diarrhea, bacteria can interrupt absorption of nutrients and water."
                    ],
                    "index": 3
                },
                {
                    "rawPattern": [
                        "* virus * diarrhea * "
                    ],
                    "patterns": [
                        "* virus * diarrhea * "
                    ],
                    "response": [
                        "Infections caused by viruses may lead to damage to the lining of the intestinal tract, which can decrease your body's ability to absorb water and nutrients. The viruses could be stimulating the body's release of chemicals that are increasing gut motility, which would lead to diarrhea. There are a variety of viruses that can cause diarrhoea, including noroviruses, rotavirus and adenoviruses which may spread easily through contaminated food or water; close contact with an infected person."
                    ],
                    "index": 4
                },
                {
                    "rawPattern": [
                        "* get * diarrhea * where *"
                    ],
                    "patterns": [
                        "* get * diarrhea * where *"
                    ],
                    "response": [
                        "Contamination of food and water, e.g. foodstuffs that were not properly prepared or handled, can cause diarrhoea. Taking some medicines such as antibiotics can also cause diarrhea by altering the balance of bacteria in your digestive tract and lead to gastrointestinal disorders. Stress, dietary adjustments and health conditions may also contribute to the development of diarrhoea. Some foods containing lactose and fructose can also cause diarrhea for some people who are unable to digest them. The risk of developing diarrhoea may be reduced. This can be done by ensuring good hygiene such as frequent hand washing, safe handling of food, and avoiding certain foods containing lactose and fructose which are present in dairy products and sweets.\n        "
                    ],
                    "index": 5
                },
                {
                    "rawPattern": [
                        "* hydrate * treat * diarrhea *",
                        "* take * water * treat * diarrhea *"
                    ],
                    "patterns": [
                        "* hydrate * treat * diarrhea *",
                        "* take * water * treat * diarrhea *"
                    ],
                    "response": [
                        "\n        Staying hydrated is important because diarrhea can lead to significant fluid loss. Diarrhea causes the body to lose water and electrolytes, such as sodium and potassium, which are essential for normal bodily functions.\n        \n        Drinking fluids, such as  water, buko juice, am, arrozcaldo, soups, sports drinks, broths, and oral rehydration solutions, can replace lost fluids and electrolytes and prevent dehydration. It is also recommended to avoid beverages that can further irritate the stomach, such as alcohol, caffeine, and sugary drinks. \n       \n        Proper hydration during diarrhea can help relieve symptoms and prevent complications  that can arise from dehydration.\n        "
                    ],
                    "index": 6
                },
                {
                    "rawPattern": [
                        "* zinc * treat * diarrhea *"
                    ],
                    "patterns": [
                        "* zinc * treat * diarrhea *"
                    ],
                    "response": [
                        "\n        Zinc supplementation has been found to reduce the duration and severity of diarrhoeal episodes and likelihood of subsequent infection. It may also help to maintain the balance of fluids and electrolytes, which can be disturbed when diarrhoea occurs. Moreover, to prevent the risk of further infections, zinc supplements can also help restore healthy intestinal flora. However, because excessive zinc intake can be detrimental, it is advisable that all supplements should be discussed with a healthcare professional prior to use.\n        "
                    ],
                    "index": 7
                },
                {
                    "rawPattern": [
                        "* where * treat * diarrhea *",
                        "* treat * diarrhea * where *"
                    ],
                    "patterns": [
                        "* where * treat * diarrhea *",
                        "* treat * diarrhea * where *"
                    ],
                    "response": [
                        "\n        Depending on the severity of symptoms, treatment with diarrhea can be taken at home or in a healthcare facility. Rest, hydration and dietary modification are usually the most effective ways to treat mild cases of diarrhoea. Symptoms may also be relieved by the use of over the counter medicinal products such as loperamide and bismuth subsalicylate. But urgent treatment should be initiated if diarrhea is severe or accompanied by any other symptoms, including fever, dehydration and blood in the stool.Also if diarrhea persist more than 48 hours, bring the patient to a healthcare facility immediately. Go to nearest baranggay health center\n        "
                    ],
                    "index": 8
                },
                {
                    "rawPattern": [
                        "* blood * (stool|diarrhea) *"
                    ],
                    "patterns": [
                        "* blood * (stool|diarrhea) *"
                    ],
                    "response": [
                        "\n        It is essential to seek professional advice immediately if you notice blood in your diarrhea. It could be a sign of severe illness, for example Inflammatory bowel disease, infection or other digestive disorders.  Don’t take on the counter medicines such as antimotility agents like antimotilities and bismuth subsalicylate. Keep hydrating yourself. In order to treat the underlying cause of the bloody diarrhoea, your doctor may recommend testing and prescribing medicinal products.\n        "
                    ],
                    "index": 9
                },
                {
                    "rawPattern": [
                        "* diarrhea * fever *",
                        "* fever * diarrhea *"
                    ],
                    "patterns": [
                        "* diarrhea * fever *",
                        "* fever * diarrhea *"
                    ],
                    "response": [
                        "\n        When you have a fever, apply damp, luke warm cloths to the forehead. Wear comfortable cloths. If you have chills, it is best to wear layers and keep warm. Then rest. You need plenty of rest to recover.\n       \n        If you have diarrhea, drink plenty of fluids like broths, soups, sports drinks, coconut water, water, oral rehydration solutions and avoiding drinks which can aggravate a stomach , like alchohol.\n\n        Furthermore, you can take over the counter remedies such as antimotility or bismuth subsalicylate. However, don’t take on the antimotility agents like loperamide and imodium when you are having fever when having diarrhea. \n        \n        If symptoms persist, it is important to consult your doctor for a proper diagnosis and treatment."
                    ],
                    "index": 10
                },
                {
                    "rawPattern": [
                        "* treat * diarrhea *"
                    ],
                    "patterns": [
                        "* treat * diarrhea *"
                    ],
                    "response": [
                        "The treatment of diarrhea depends on the underlying cause. For minor cases, over the counter remedies such as antimotility or bismuth subsicylate can help. However, drinking plenty of fluids like broths, soups, sports drinks, coconut water, water, oral rehydration solutions and avoiding drinks which can aggravate a stomach , like alchohol , should be taken into account. You need to stay hydrated. If symptoms persist, it is important to consult your doctor for a proper diagnosis and treatment."
                    ],
                    "index": 11
                },
                {
                    "rawPattern": [
                        "* peel * eat *",
                        "* not * take * peel * eat *",
                        "* avoid * peel * eat *"
                    ],
                    "patterns": [
                        "* peel * eat *",
                        "* not * take * peel * eat *",
                        "* avoid * peel * eat *"
                    ],
                    "response": [
                        "To avoid diarrhoea, it is recommended that fruits are peeled before eating as their skins may harbour harmful bacteria, parasites and viruses which can cause infections. The chances of exposure to these pathogens will decrease considerably with the peeling of fruits. In addition, the risk of contamination can be further reduced by rinsing fruits carefully with clear water before they are peeled."
                    ],
                    "index": 12
                },
                {
                    "rawPattern": [
                        "* not * eat* raw * meat * ",
                        "* avoid * raw * meat *",
                        "* cook * meat *",
                        "* not * take * raw * meat *",
                        "* raw * (not * (take|buy)|avoid) * meat *"
                    ],
                    "patterns": [
                        "* not * eat* raw * meat * ",
                        "* avoid * raw * meat *",
                        "* cook * meat *",
                        "* not * take * raw * meat *",
                        "* raw * (not * (take|buy)|avoid) * meat *"
                    ],
                    "response": [
                        "Cooking food properly is important because it kills harmful bacteria, viruses, and parasites that can cause gastrointestinal infections. Consuming undercooked or raw foods, especially meats, poultry, eggs, and seafood, can increase the risk of foodborne illnesses. Proper cooking techniques, such as cooking food to appropriate temperatures and avoiding cross-contamination between raw and cooked foods, can help prevent the spread of harmful bacteria and reduce the risk of developing diarrhea."
                    ],
                    "index": 13
                },
                {
                    "rawPattern": [
                        "*avoid * diarrhea *"
                    ],
                    "patterns": [
                        "*avoid * diarrhea *"
                    ],
                    "response": [
                        "Good hygiene, such as handwashing with soap or water before you eat and after going to the bathroom, is essential in order not to get diarrhoea. Ensuring clean and safe sources of food and water as well as the thorough cooking of foods in order to eliminate any harmful bacteria or parasites is also important. Diarrhoea prevention can also be ensured by avoiding raw or undercooked foods, dairy products that are unpasteurized and unclean water sources. Additionally, staying hydrated and maintaining a healthy diet can help strengthen the immune system and prevent infections that can lead to diarrhea."
                    ],
                    "index": 14
                },
                {
                    "rawPattern": [
                        "* food * (take|good) * "
                    ],
                    "patterns": [
                        "* food * (take|good) * "
                    ],
                    "response": [
                        "You can eat arrozcaldo, bananas, broth, chicken, chicken soup, congee, electrolyte drinks, oatmeal, peanut butter ,potatoes, rice, soup, sports drinks, toasts, water, yogurt, rice soup (am) , and buko juice. These are only some of the foods you may taken when having diarrhea."
                    ],
                    "index": 15
                },
                {
                    "rawPattern": [
                        "* bad * hydrate * diarrhea *",
                        "* diarrhea_foods_not_allowed_bad_hydration * diarrhea *"
                    ],
                    "patterns": [
                        "* bad * hydrate * diarrhea *",
                        "* diarrhea_foods_not_allowed_bad_hydration * diarrhea *"
                    ],
                    "response": [
                        "It is important to avoid foods that are bad for hydration such as what you mentioned when experiencing diarrhea because these foods can further dehydrate the body.Instead, it is recommended to consume foods that are easy to digest and high in water content, such as broths, soups, boiled vegetables, and fruits with high water content, to help replace lost fluids , electrolytes and prevent dehydration."
                    ],
                    "index": 16
                },
                {
                    "rawPattern": [
                        "* lactose *",
                        "* lactose * ",
                        "* diarrhea_foods_not_allowed_contains_lactose * ",
                        "* diarrhea_foods_not_allowed_contains_lactose *"
                    ],
                    "patterns": [
                        "* lactose *",
                        "* lactose * ",
                        "* diarrhea_foods_not_allowed_contains_lactose * ",
                        "* diarrhea_foods_not_allowed_contains_lactose *"
                    ],
                    "response": [
                        " If you have diarrhea, avoid foods containing lactose because it may destroy the lining of your small intestine and reduce its ability to produce lactase, an enzyme which helps break down lactose. It may get stuck in the larger intestine, giving rise to gas, bloat or all sorts of indigestion if lactose is not properly absorbed. As a result, it can help to reduce diarrhoea symptoms and prevent future problems if you do not eat lactose-containing foods such as milk, cheese or ice cream."
                    ],
                    "index": 17
                },
                {
                    "rawPattern": [
                        "* diarrhea_foods_not_allowed_irritate_stomach * ",
                        "* diarrhea_foods_not_allowed_irritate_stomach *"
                    ],
                    "patterns": [
                        "* diarrhea_foods_not_allowed_irritate_stomach * ",
                        "* diarrhea_foods_not_allowed_irritate_stomach *"
                    ],
                    "response": [
                        "Spicy foods can irritate stomach, causing increased bowel movements which may lead to worsening of diarrhea symptoms. Furthermore, spicy foods may contain ingredients that are difficult to digest, causing further gastrointestinal distress. As a result, when diarrhoea occurs, it is advised to avoid the use of spice foods."
                    ],
                    "index": 18
                },
                {
                    "rawPattern": [
                        "* diarrhea_foods_not_allowed_oily * ",
                        "* diarrhea_foods_not_allowed_oily *"
                    ],
                    "patterns": [
                        "* diarrhea_foods_not_allowed_oily * ",
                        "* diarrhea_foods_not_allowed_oily *"
                    ],
                    "response": [
                        "Greasy foods contain high amounts of fat, they slow stomach emptying. It is difficult to digest oil and greasy food, which may stimulate the gastrointestinal tract causing diarrhoea. This may also cause stomach acid production to increase, which can irritate the bowels and lead to worsening of symptoms. If you have a diarrhoea, it may help to reduce symptoms and speed up recovery by avoiding oily foods."
                    ],
                    "index": 19
                },
                {
                    "rawPattern": [
                        "* food * avoid * diarrhea * ",
                        "* food * not * (eat|take) * ",
                        "* avoid * food * ",
                        "*  not * eat * food *",
                        "*  food * not * eat *",
                        "* eat  * avoid * diarrhea * "
                    ],
                    "patterns": [
                        "* food * avoid * diarrhea * ",
                        "* food * not * (eat|take) * ",
                        "* avoid * food * ",
                        "*  not * eat * food *",
                        "*  food * not * eat *",
                        "* eat  * avoid * diarrhea * "
                    ],
                    "response": [
                        "\n        Avoiding certain foods when having diarrhea is important because some foods can irritate the digestive system and worsen symptoms. Spicy, greasy, or fatty foods can be difficult for the body to digest, while foods containing lactose or fructose can exacerbate diarrhea in people with lactose or fructose intolerance. Furthermore, certain types of fiber, such as those found in beans, cruciferous vegetables, and whole grains, can  be difficult to digest and may cause gas or bloating. \n        \n        Some of the foods you should avoid includes avoid Alchohol, beans, berries, brocoli, cabbage, cauliflower, cheese, chickpeas, coffee, corn,  dates, fruit jucies, grapes, green leafy  vegetables, gum, honey ice cream, milk,  nuts, oily foods, spicy foods, peppers,  raw meat , salads, shellfish, soft drinks,  and tea.\n\n        So, it is best to stick with easily digestible, bland foods and avoid foods that may worsen diarrhea symptoms.\n        "
                    ],
                    "index": 20
                },
                {
                    "rawPattern": [
                        "* who * problem * ",
                        "*  who * problem *",
                        "*  problem *who *"
                    ],
                    "patterns": [
                        "* who * problem * ",
                        "*  who * problem *",
                        "*  problem *who *"
                    ],
                    "response": [
                        "The people who should be cautious are children under 3 years, older patients, people with weak immune system, malnourished children, patients have diarrhea for more than 24 hours, patients having 39 degree celcius, patients havin bloody stools and pus, patients having high blood pressure medications, and travelers having pre-existing health conditions should take extra care when having diarrhea as they have higher risk of developing complications"
                    ],
                    "index": 21
                },
                {
                    "rawPattern": [
                        "* (what|how) * (take|guide|dose) * antimotility *",
                        "* how * antimotility * take *"
                    ],
                    "patterns": [
                        "* (what|how) * (take|guide|dose) * antimotility *",
                        "* how * antimotility * take *"
                    ],
                    "response": [
                        "Drink plenty of clear liquids while you're treating your diarrhea with antimotilities. Having diarrhea can make you dehydrated.  Here are the different dosing you can follow.  For adults and children of age 12 and older, the recommended dose is 2 tablets by mouth after the first loose stool. Then, take 1 tablet after each loose stool. Don't take more than 4 tablets in 24 hours. For children age 9 to 11 years or children who weigh 60 lbs to 95 lbs, the recommended dose is 1 tablet by mouth after the first loose stool.  Then, take one-half of a tablet after each loose stool. Don't take more than 3 whole tablets in 24 hours. For children age 6 to 8 years or children who weigh 48 lbs to 59 lbs, the recommended dose is 1 tablet by mouth after the first loose stool. Then, take one-half of a tablet after each loose stool. Don't take more than 2 whole tablets in 24 hours. For children 5 years and younger: Ask your child's doctor to see what other options are available to treat your child's diarrhea."
                    ],
                    "index": 22
                },
                {
                    "rawPattern": [
                        "* antimotility *"
                    ],
                    "patterns": [
                        "* antimotility *"
                    ],
                    "response": [
                        "Antimotility drugs such as loperamide and immodium are used to slow down or stop the movement of the gastrointestinal tract. It works by binding to the opioid receptors in the intestinal muscles, which reduces their contractions and helps to slow down the passage of stool through the gut. These medicines are available in various forms such as tablets, capsules, liquids and suspensions."
                    ],
                    "index": 23
                },
                {
                    "rawPattern": [
                        "* what * use * antimotility *"
                    ],
                    "patterns": [
                        "* what * use * antimotility *"
                    ],
                    "response": [
                        "Antimotility agents  such as loperamide and immodium  mainly focus on treating symptoms of diarrhea by reducing or preventing intestinal contractions that restrict the movements of food and liquids through the GI tract. It also provides the body with more time to absorb water and nutrients from remaining intestinal contents, which may lead to a decrease in bowel movement frequency and intensity. These medicines are available in various forms such as tablets, capsules, liquids and suspensions. "
                    ],
                    "index": 24
                },
                {
                    "rawPattern": [
                        "* how * antimotility * work *"
                    ],
                    "patterns": [
                        "* how * antimotility * work *"
                    ],
                    "response": [
                        "Antimotility medicines,such as Loperamide and Imodium, prevents the intestines from moving and may be used to treat diarrhea. These works by making the absorption of water and electrolytes more rapid in your stool. Thus, it gives you a better or lesser frequency of bowel movements. The medicine normally takes about an hour to help with your diarrhea symptoms, but it can vary from  person to person. However, it bear in mind that they may not be appropriate for every patient and can have a potential side effect."
                    ],
                    "index": 25
                },
                {
                    "rawPattern": [
                        "* (avoid|not (take|use)) * antimotility *",
                        "* antimotility * (avoid|not * (take|use)) *"
                    ],
                    "patterns": [
                        "* (avoid|not (take|use)) * antimotility *",
                        "* antimotility * (avoid|not * (take|use)) *"
                    ],
                    "response": [
                        "Antimotility agents should be avoided if there are signs of severe dehydration, high fever, or bloody stools, as these may indicate a more serious underlying condition that requires medical attention"
                    ],
                    "index": 26
                },
                {
                    "rawPattern": [
                        "* effect * antimotility *"
                    ],
                    "patterns": [
                        "* effect * antimotility *"
                    ],
                    "response": [
                        "Antimotilities can cause dizziness, drowsiness, or tiredness.  Don't drive or do anything that requires you to focus until you know how the medication affects you. If you happen to experience stomach swelling, contact a doctor immediately"
                    ],
                    "index": 27
                },
                {
                    "rawPattern": [
                        "* tip * antimotility *"
                    ],
                    "patterns": [
                        "* tip * antimotility *"
                    ],
                    "response": [
                        "Antimotility medications, such as Loperamide, can have side effects. The common ones  include having constipation, abdominal pain, nausea, vomiting, and dry mouth. Some people may also experience dizziness, drowsiness, and difficulty urinating. \n\n        It is important to follow the instructions of your healthcare provider or the medication label carefully."
                    ],
                    "index": 28
                },
                {
                    "rawPattern": [
                        "* alternative * antimotility *"
                    ],
                    "patterns": [
                        "* alternative * antimotility *"
                    ],
                    "response": [
                        "There are several natural or herbal alternatives to antimotility medications.\n        For example, boiling and drinking the leaves can help fight bacteria and viruses as it have antimicrobial properties. Similarly, ginger has anti-inflammatory properties that can help soothe the digestive system and reduce diarrhea. You can also take bananas. These contain high levels of potassium, which can help regulate bowel movements and replace lost electrolytes. They also contain pectin, which can help thicken stool and reduce diarrhea.\n        "
                    ],
                    "index": 29
                },
                {
                    "rawPattern": [
                        "* (how|what) * (guide|dose|take|eat) * bismuth*",
                        "* (guide|dose|take|eat) * bismuth subsalicylate *"
                    ],
                    "patterns": [
                        "* (how|what) * (guide|dose|take|eat) * bismuth*",
                        "* (guide|dose|take|eat) * bismuth subsalicylate *"
                    ],
                    "response": [
                        "The proper way of taking of Bismuth Subsalicylate usually depends. There are difference between the tablets and the liquid forms.\n         \n        Those aged 12 and older can take 2 tablets up to 524mg every 30 to 60minutes up to 2 days. It is not recommended to take more than 16 tablets a day. \n        \n        The typical dose for liquid bismuth subsalicylate for those aged 12 is around 30ml  every 30 minutes up to 2 days. Throughout the day it is not recommended to take 240ml of it.\n        \n        The information I represented is an example of how you take it. Proper dosage must be observed. If you have further questions, please refer to your healthcare provider.\n        "
                    ],
                    "index": 30
                },
                {
                    "rawPattern": [
                        "* bismuth *"
                    ],
                    "patterns": [
                        "* bismuth *"
                    ],
                    "response": [
                        "Bismuth subsalicylate (such as Pepto-Bismol and Bismatrol) is an over-the-counter medication used to treat upset stomach and diarrhea. It works well to stop diarrhea, but you might need to take it multiple times a day. This medicine is generally well-tolerated, but it can cause harmless darkening of your tongue or stools. It also comes in several forms, including tablets, capsules, liquid suspension, and chewable tablets, depending on the manufacturer and the specific condition being treated\n        "
                    ],
                    "index": 31
                },
                {
                    "rawPattern": [
                        "* use * bismuth *"
                    ],
                    "patterns": [
                        "* use * bismuth *"
                    ],
                    "response": [
                        "Bismuth subsalicylate (such as Pepto-Bismol and Bismatrol) is an over-the-counter medication used for treatment of diarrhea, gas, upset stomach, indigestion, heartburn,nausea and as a prophylaxis for traveler's diarrhea. It also comes in several forms, including tablets, capsules, liquid suspension, and chewable tablets, depending on the manufacturer and the specific condition being treated."
                    ],
                    "index": 32
                },
                {
                    "rawPattern": [
                        "* bismuth * work *"
                    ],
                    "patterns": [
                        "* bismuth * work *"
                    ],
                    "response": [
                        "\n        Bismuth subsalicylate  (such as Pepto-Bismol and Bismatrol)is an oral antidiarrheal medicine which decreases inflammation and fluid in the gastrointestinal tract. It's also antibacterial, which can assist in fighting off the pathogens that cause diarrhea. Bismuth subsalicylate may help to treat symptoms such as abdominal cramping, diarrhoeal stools or nausea due to the reduction of inflammation and loss of fluids. However, it is important to note that bismuth subsalicylate should not be used by individuals with aspirin allergies, bleeding disorders, or renal impairment, and it should be used with caution in children and pregnant women.You shouldn’t use bismuth subsalicylate (Pepto-Bismol) for more than 2 days. \n        "
                    ],
                    "index": 33
                },
                {
                    "rawPattern": [
                        "* ( not * (take|use) | avoid )  * bismuth *"
                    ],
                    "patterns": [
                        "* ( not * (take|use) | avoid )  * bismuth *"
                    ],
                    "response": [
                        "You should not give it if you have bleeding problems, a stomach ulcer, blood in your stools, or if you are allergic to aspirin or other salicylates. Do not give this medicine to a child or teenager with a fever, flu symptoms, or chickenpox."
                    ],
                    "index": 34
                },
                {
                    "rawPattern": [
                        "* effect * bismuth *"
                    ],
                    "patterns": [
                        "* effect * bismuth *"
                    ],
                    "response": [
                        "You may experience temporary darkening of the stool or tongue. If experience severe allergic reaction such as difficulty breathing, skin rash, and swelling, and Rye's syndrome which exhibits  diarrhea, vomiting, unusually low energy, loss of consciousness, seizure, changes in behavior, confusion, muscle weakness, changes in vision or hearing, contact your doctor immediately\n        "
                    ],
                    "index": 35
                },
                {
                    "rawPattern": [
                        "* tip * bismuth *"
                    ],
                    "patterns": [
                        "* tip * bismuth *"
                    ],
                    "response": [
                        "Drink plenty of clear liquids while you are taking bismuth subsalicylate (Pepto-Bismol). Diarrhea can cause dehydration and drinking enough liquids will help prevent this. Swallow the capsules whole with water. Do not chew them. Swallow the capsules whole with water. Do not chew them."
                    ],
                    "index": 36
                },
                {
                    "rawPattern": [
                        "* alternative * bismuth *"
                    ],
                    "patterns": [
                        "* alternative * bismuth *"
                    ],
                    "response": [
                        "You can buy antimotilities. Natural remedies also exists. For example, you can take ginger and turmeric as it has anti-inflammatory and antimicrobial properties that may help reduce diarrhea symptoms. You may also drink coconut water which have high electrolyte content. "
                    ],
                    "index": 37
                },
                {
                    "rawPattern": [
                        "* where * go * have * diarrhea",
                        "* where * treat * have * diarrhea"
                    ],
                    "patterns": [
                        "* where * go * have * diarrhea",
                        "* where * treat * have * diarrhea"
                    ],
                    "response": [
                        "In most cases, diarrhea can be treated at home and it will resolve itself in a few days. \n        You may drinking plenty of fluids like broths, soups, sports drinks, coconut water, water, oral rehydration solutions while avoiding drinks which can be bad for you like alchohol.\n\n        If you really feel great discomfort , it has lasted for more than 2 days,seeing blood in your stool , or have fever, it is best for you to  go to nearby healthcare center"
                    ],
                    "index": 38
                },
                {
                    "rawPattern": [
                        "* how * tell * have * diarrhea",
                        "* symptom * diarrhea"
                    ],
                    "patterns": [
                        "* how * tell * have * diarrhea",
                        "* symptom * diarrhea"
                    ],
                    "response": [
                        "Someone who experiences diarrhea often feel abdominal cramps , bloating, bloody stools, explosive and painful gas, fatigue, fever, chills, frequent urge to evacuate, large volume of stools mucus on the stool, nausea, and persistent vomiting. Dehydration is also a potential complication of diarrhea, and signs of dehydration may include dry mouth, excessive thirst, dark urine, fatigue, dizziness, and lightheadedness. It is important to seek medical attention if diarrhea persists for more than a few days, or if there are signs of dehydration or other concerning symptoms.\n        "
                    ],
                    "index": 39
                },
                {
                    "rawPattern": [
                        "* virus * influenza *"
                    ],
                    "patterns": [
                        "* virus * influenza *"
                    ],
                    "response": [
                        "Viruses cause influenza. They spread when people with flu cough, sneeze or talk, sending droplets with the virus into the air and potentially into the mouths or noses of people who are nearby."
                    ],
                    "index": 40
                },
                {
                    "rawPattern": [
                        "* get * influenza *"
                    ],
                    "patterns": [
                        "* get * influenza *"
                    ],
                    "response": [
                        "You can get influenza when you breathe or inhale the air released by person who sneezes or coughs even at small amounts. These virus can also be transmitted by touching objects infected with the virus. In simple terms, you can get it when you have contact with surfaces, materials, and clothing contaminated with dischages of infected person.  Seasonal changes can also cause influenza because it human defenses weakens especially in declining temperature."
                    ],
                    "index": 41
                },
                {
                    "rawPattern": [
                        "* rest * treat * influenza *"
                    ],
                    "patterns": [
                        "* rest * treat * influenza *"
                    ],
                    "response": [
                        "You should stay home until your fever has been gone for at least 24 hours. Someone with influenza will recover naturally within 2 to 7 days. By resting during the day, your body can devote more resources to fighting the virus. On top of helping you recover, staying home also prevents spreading the flu to other people in your community or workplace"
                    ],
                    "index": 42
                },
                {
                    "rawPattern": [
                        "* drink * water * treat * influenza *",
                        "* take * water * influenza * "
                    ],
                    "patterns": [
                        "* drink * water * treat * influenza *",
                        "* take * water * influenza * "
                    ],
                    "response": [
                        "Drinking fluids are recommended when having influenza. One symptom of the flu is a high fever, which can lead to sweating. Some people may experience vomiting and diarrhea. Therefore, it is best that you hydrate or drink plenty of fluids to replace lost liquids, and even more to fight off the infection"
                    ],
                    "index": 43
                },
                {
                    "rawPattern": [],
                    "patterns": [],
                    "response": [
                        "You can manage influenza by your own. There are over the counter medicines that can help ease symptoms such as fevers, aches and coughing. If you have the virus, you need to have adequate rest. You should stay home until your fever has been gone for at least 24 hours, drink plenty of fluids, avoid exertion, eat healthy foods. However, going to see a doctor can better help you if your are feeling worse. They can prescribe you specific medication and directions."
                    ],
                    "index": 44
                },
                {
                    "rawPattern": [
                        "* treat * influenza * where *",
                        "* where * treat * influenza *"
                    ],
                    "patterns": [
                        "* treat * influenza * where *",
                        "* where * treat * influenza *"
                    ],
                    "response": [
                        "You can practice self-care in you home. To those having severe cases, you need to see doctor immidately especially if you belong to high risk groups."
                    ],
                    "index": 45
                },
                {
                    "rawPattern": [
                        "* (drug|treat) * influenza *",
                        "* influenza * (drug|treat)*"
                    ],
                    "patterns": [
                        "* (drug|treat) * influenza *",
                        "* influenza * (drug|treat)*"
                    ],
                    "response": [
                        "Influenza, commonly known as the flu, is a viral infection that affects the respiratory system. The best way to treat the flu is to get plenty of rest, drink fluids to prevent dehydration. \n        \n        There are also over the counter medicines you can buy. You can take antihistamines to relieving such annoying symptoms as sneezing, itching, and nasal discharge.Analgesics like acetaminophen or ibuprofen are sometimes taken to reduce fever and relieve body aches. Likewise, non steroidal anti-inflammatory drugs (nsaids) works similar. If you have clogged nose, decongestants are also helpful as these  help open your nasal passages and relieve pressure in your sinuses. If coughing, antitussives works by suppressing cough. It also helps by loosening thick mucus. Finally, lozenges may relieve  temporarily help relieve symptoms such as sore throat, throat irritation, or cough.\n\n        In severe cases, hospitalization may be necessary. Prevention is key in avoiding the flu, and getting an annual flu vaccine is the most effective way to protect oneself from getting sick.\n        "
                    ],
                    "index": 46
                },
                {
                    "rawPattern": [
                        "* get * influenza * vaccine * "
                    ],
                    "patterns": [
                        "* get * influenza * vaccine * "
                    ],
                    "response": [
                        "Although there is no medicine that can prevent flu, flu vaccine are found to help protect you. Flu vaccination prevents illnesses and flu-related doctors visit each year. It help reduce the severity of illnesses in people who get vaccinated but stil get sick. This particularly help people with certain chronic health conditions (such as heart conditions). With this, it reduces flu associated hospitalization. It also protect pregnant , children and people around you."
                    ],
                    "index": 47
                },
                {
                    "rawPattern": [
                        "* (avoid|not) * touch * influenza *",
                        "* distance *  influenza * "
                    ],
                    "patterns": [
                        "* (avoid|not) * touch * influenza *",
                        "* distance *  influenza * "
                    ],
                    "response": [
                        "Avoid close contact with people who are sick. If its you who is sick, keep your distance from others. Distance yourself by at least 1 meter from people who are coughing. Keep yourself away from people with colds. Avoid crowded places because they can increase the risk of getting the virus. You need to do these things to prevent spreading the virus further."
                    ],
                    "index": 48
                },
                {
                    "rawPattern": [
                        "* wear * (influenza|cough|sneeze) *"
                    ],
                    "patterns": [
                        "* wear * (influenza|cough|sneeze) *"
                    ],
                    "response": [
                        "Cover your mouth and nose with a tissue when coughing or sneezing to prevent those around you from getting sick."
                    ],
                    "index": 49
                },
                {
                    "rawPattern": [
                        "* avoid * touch * "
                    ],
                    "patterns": [
                        "* avoid * touch * "
                    ],
                    "response": [
                        "Germs often spread when a person touches something that is contaminated with germs and then touches his or her eyes, nose, or mouth."
                    ],
                    "index": 50
                },
                {
                    "rawPattern": [
                        "* (wear|use) * mask * "
                    ],
                    "patterns": [
                        "* (wear|use) * mask * "
                    ],
                    "response": [
                        "Wearing face mask prevents infection as the virus can get in the air or get on anything touched or used by a person with the flu."
                    ],
                    "index": 51
                },
                {
                    "rawPattern": [
                        "* avoid * influenza *"
                    ],
                    "patterns": [
                        "* avoid * influenza *"
                    ],
                    "response": [
                        "If you can, get vaccinated. Avoid close contact with people who are sick. If you are sick, better stay at home to prevent spreading the virus to others. Always cover your mouth and nose to reduce the risk of transmitting the virus to others. Wearing a face make help you with this.  Practice good hygeine. For example cleaning your hands often and avoid touching your eyes, nose or mouth to prevent any virus from entering your body."
                    ],
                    "index": 52
                },
                {
                    "rawPattern": [
                        "* eat * food * influenza *",
                        "* food * influenza * eat *",
                        "* food * eat * influenza *"
                    ],
                    "patterns": [
                        "* eat * food * influenza *",
                        "* food * influenza * eat *",
                        "* food * eat * influenza *"
                    ],
                    "response": [
                        "There are several foods that may help you recover quicker. You may consider taking several foods. Broths and soup made from chicken, beef, and vegetable may prevent dehydration and its warmth may relieve congestion and sooth sore throat. You may also take garlic since it can enhance immunity nad reduce the serverity of symptoms. Foods sources with probiotics such as yogurt may also help by promoting good gut bacteria that suppors your immune system. Fruits and vegatables containing vitamin c may also help. This include peppers, oranges, citrus, lemons, grapes and those dark leafy greens. You can also take broccoli. Furthermore, oatmeal contains immune-boosting nutrients like copper, iron, selenium, zinc fiber and protien. Additionally, you can also add spicesd such as ginger and turmeric in your food. Finally, always take fluids such as water to keep you hydrate"
                    ],
                    "index": 53
                },
                {
                    "rawPattern": [
                        "* influenza_foods_not_allowed_greasy_foods * ",
                        "* influenza_foods_not_allowed_greasy_foods * influenza * "
                    ],
                    "patterns": [
                        "* influenza_foods_not_allowed_greasy_foods * ",
                        "* influenza_foods_not_allowed_greasy_foods * influenza * "
                    ],
                    "response": [
                        "Oily foods can exacerbate symptoms such as sore throat, coughing, and congestion. Therefore, foods high in saturated fat should be avoided or limited. That means avoiding oily, fried, or greasy foods. Also, these can be harded to digest. Therefore, it is generally recommended to avoid these when experiencing influenza to support the body's healing process"
                    ],
                    "index": 54
                },
                {
                    "rawPattern": [
                        "* influenza_foods_not_allowed_sugary_foods * ",
                        "* influenza_foods_not_allowed_sugary_foods * influenza *"
                    ],
                    "patterns": [
                        "* influenza_foods_not_allowed_sugary_foods * ",
                        "* influenza_foods_not_allowed_sugary_foods * influenza *"
                    ],
                    "response": [
                        "Sugar-rich foods can weaken your immune system, which your body needs to fight off the flu. Eating too many sugary foods can also lead to inflammation, which can worsen symptoms like sore throat and cough. Additionally, sugary foods can cause spikes in blood sugar levels, which can lead to fatigue and other symptoms that can make it more difficult to recover from the flu.\n        "
                    ],
                    "index": 55
                },
                {
                    "rawPattern": [
                        "* (not eat|avoid) * food * influenza *",
                        "* food * (not (take|drink|buy|eat)|avoid) * influenza *",
                        "* influenza * (not eat|avoid) * food *",
                        "* influenza * food * (not eat|avoid) *"
                    ],
                    "patterns": [
                        "* (not eat|avoid) * food * influenza *",
                        "* food * (not (take|drink|buy|eat)|avoid) * influenza *",
                        "* influenza * (not eat|avoid) * food *",
                        "* influenza * food * (not eat|avoid) *"
                    ],
                    "response": [
                        "If you think you have flu, you need to avoid caffeinated drinks, alchohol, greasy foods, hard to digest grains, and sugary foods or sweets. Instead try to take broth-based soups to help place any fluids and sodium that you may lost.  Also try bland foods which includes white bread, potatoes, white rice, bananas, applesauce, lean meats like chicken and fish."
                    ],
                    "index": 56
                },
                {
                    "rawPattern": [
                        "* influenza * problem *",
                        "* problem * influenza *"
                    ],
                    "patterns": [
                        "* influenza * problem *",
                        "* problem * influenza *"
                    ],
                    "response": [
                        "There are some groups of people that are in risk of developing complications from influenza. People who are six months and older, people who have chronic medical conditions such as asthma, heart disease, diabetes, kidney , liver disorders, and chronic lung disease, people with weakened immune system , and people who are morbidly obese need to be wary of getting this disease."
                    ],
                    "index": 57
                },
                {
                    "rawPattern": [
                        "* (what|how) * (dose|take|guide) * antihistamine *",
                        "* (guide|dose|take) * antihistamine *",
                        "* antihistamine * guide *"
                    ],
                    "patterns": [
                        "* (what|how) * (dose|take|guide) * antihistamine *",
                        "* (guide|dose|take) * antihistamine *",
                        "* antihistamine * guide *"
                    ],
                    "response": [
                        "Antihistamines like Citerizine and Benadryl can be taken with food, a glass of water or milk to lessen stomach irritation if necessary. For cetirizine, here is how you can take it. 6 years of age and older can have 5 to 10 miligrams once a day. Those who are 4-6 years old can take maximum of 5mg once or 2.5mg twice a day. Those who are younger than that (4 below) should not take this medicine.\n        \n        The information I represented is an example of how you take it. Proper dosage must be observed. If you have further questions, please refer to your healthcare provider. \n        "
                    ],
                    "index": 58
                },
                {
                    "rawPattern": [
                        "* antihistamine *"
                    ],
                    "patterns": [
                        "* antihistamine *"
                    ],
                    "response": [
                        "Antihistamines ,like Citerizine and Benadryl , are a class of drugs commonly used to treat symptoms of allergies. These drugs help treat conditions caused by too much histamine, a chemical created by your body’s immune system. Antihistamines are most commonly used by people who have allergic reactions to pollen and other allergens. They are also used to treat a variety of other conditions such as stomach problems, colds, anxiety and more. Antihistamines come in several forms including liquids, lotions, syrups, gels, eyedrops, tablets, capsules, creams, and suppositories"
                    ],
                    "index": 59
                },
                {
                    "rawPattern": [
                        "* use * antihistamine *",
                        "* antihistamine *"
                    ],
                    "patterns": [
                        "* use * antihistamine *",
                        "* antihistamine *"
                    ],
                    "response": [
                        "Antihistamines are used to relieve or prevent the symptoms of hay fever and other types of allergy. They work by preventing the effects of a substance called histamine, which is produced by the body. Histamine can cause itching, sneezing, runny nose, and watery eyes. Also, in some persons histamine can close up the bronchial tubes (air passages of the lungs) and make breathing difficult. This medicine come in several forms including liquids, lotions, syrups, gels, eyedrops, tablets, capsules, creams, and suppositories"
                    ],
                    "index": 60
                },
                {
                    "rawPattern": [
                        "* work * treat *",
                        "* antihistamine * work *"
                    ],
                    "patterns": [
                        "* work * treat *",
                        "* antihistamine * work *"
                    ],
                    "response": [
                        "Antihistamines are not typically used to treat influenza. Antihistamines are used relieve some of the symptoms of allergies, such as sneezing, runny nose, and itching, but they are not effective against the flu virus. These medicines work by blocking histamines which are released by the body during allergic reactions. Additionally, other medications such as pain relievers and fever reducers may be used to manage symptoms.\n        "
                    ],
                    "index": 61
                },
                {
                    "rawPattern": [
                        "* avoid * antihistamine *",
                        "* not * (take|use) *  antihistamine *"
                    ],
                    "patterns": [
                        "* avoid * antihistamine *",
                        "* not * (take|use) *  antihistamine *"
                    ],
                    "response": [
                        "Most people can safely take antihistamines. However, people who are pregnant, breastfeeding, young child, taking other medicines, have underlying conditions such as heart disease, liver disease, kidney disease or epilepsy may need to be cautious when taking this."
                    ],
                    "index": 62
                },
                {
                    "rawPattern": [
                        "*effect * antihistamine *"
                    ],
                    "patterns": [
                        "*effect * antihistamine *"
                    ],
                    "response": [
                        "Antihistamines can cause side effects. It may vary depending on the drug taken. However, antihistamines can make you drowsy, dizzy, have a dry mouth, have a blurry vision, constipated,and difficulty in peeing. If you have any underlying medical conditions or are taking other medications, it is important to ask a doctor or pharmacist though.\n        "
                    ],
                    "index": 63
                },
                {
                    "rawPattern": [
                        "* tip *  antihistamine *"
                    ],
                    "patterns": [
                        "* tip *  antihistamine *"
                    ],
                    "response": [
                        "When taking this medicine, try to avoid alcohol, sedatives, and tranquilizers, due to increased risk of drowsiness. It may cause Central nervous system depression. So avoid activities requiring mental alertness. Be careful when patient has hepatic or renal impairment. Same with the elderly as they are more sensitive to adverse effects."
                    ],
                    "index": 64
                },
                {
                    "rawPattern": [
                        "* alternative * antihistamine * "
                    ],
                    "patterns": [
                        "* alternative * antihistamine * "
                    ],
                    "response": [
                        "Try taking Ginger. According to Sinus and Allergy Wellness Center, it is a natural histamine, potent antiviral agent and an immute booster. Ginger is a safe and highly effective herb that soothes the digestive system and improves circulation. You can make some ginger tea to alleviate nasal congestion and headaches. While you sip your tea, inhale the steam coming out of your cup. Also, try to use it with other herbs, such as turmeric, which is another powerful natural healer."
                    ],
                    "index": 65
                },
                {
                    "rawPattern": [
                        "* (what|how) * (guide|dose|take) * analgesic *",
                        "* (guide|dose|take) * analgesic *"
                    ],
                    "patterns": [
                        "* (what|how) * (guide|dose|take) * analgesic *",
                        "* (guide|dose|take) * analgesic *"
                    ],
                    "response": [
                        "\n        For ibuprofen an (NSAID) the maximum single dose is 400mg. For the entire day, its 1200mg. \n        \n        For naproxen (NSAID) , you can take up to 500mg for single dose and 750mg for the entire day.\n        \n        For acetaminophen (paracetamol) you can take up 1000mg for single dose and 4000mg for the entire day.\n        \n        For aspirin, also known as acetylsalicylic acid , you can take up to 1000mg with maximum daily dose of 3000mg for people under 65 and 200mg for people over 65years old. \n        \n        The information I represented is an example of how you take it. Proper dosage must be observed. If you have further questions, please refer to your healthcare provider. \n        "
                    ],
                    "index": 66
                },
                {
                    "rawPattern": [
                        "* analgesic *"
                    ],
                    "patterns": [
                        "* analgesic *"
                    ],
                    "response": [
                        "Analgesics, also called painkillers , such as ibuprofen, acetaminophen, aspirin,paracetamol, Biogesic and Calpol, are medications that relieve different types of pain — from headaches to injuries to arthritis. Anti-inflammatory analgesics reduce inflammation, and opioid analgesics change the way the brain perceives pain.Analgesics are available in many forms such as films, liquid, nasal sprays patches, pills, tablets, capsules, and powder mix."
                    ],
                    "index": 67
                },
                {
                    "rawPattern": [
                        "* analgesic * use  *"
                    ],
                    "patterns": [
                        "* analgesic * use  *"
                    ],
                    "response": [
                        "Over-the-counter painkillers ,such as ibuprofen, acetaminophen, aspirin,paracetamol, Biogesic and Calpol, can relieve acute pain. Their effectiveness will depend on things like the type and severity of the pain and the dose of the medication. Painkillers that are available without a prescription have been approved for the treatment of mild to moderate pain. They shouldn't be used for more than a few days in a row, and the specified maximum daily dose shouldn't be exceeded. These medicines comes in many forms such as films, liquid, nasal sprays patches, pills, tablets, capsules, and powder mix."
                    ],
                    "index": 68
                },
                {
                    "rawPattern": [
                        "* analgesic * (treat|work) *"
                    ],
                    "patterns": [
                        "* analgesic * (treat|work) *"
                    ],
                    "response": [
                        "Analgesics, or pain relievers, can help alleviate the discomfort and fever associated with influenza. They work by blocking the production of certain chemicals in the body that cause pain and inflammation. Common analgesics used for influenza include acetaminophen, ibuprofen, and aspirin.  However, it is important to follow the recommended dosages and precautions, as some analgesics may not be suitable for certain individuals or may have adverse effects when used improperly.\n        "
                    ],
                    "index": 69
                },
                {
                    "rawPattern": [
                        "* avoid * analgesic *",
                        "* not (take|use) * analgesic *"
                    ],
                    "patterns": [
                        "* avoid * analgesic *",
                        "* not (take|use) * analgesic *"
                    ],
                    "response": [
                        "According to WebMD , you should never take this medication for self-treatment of pain for longer than 10 days. You should not use this drug to self-treat a fever that lasts longer than 3 days. In these cases, consult a doctor because you may have a more serious condition"
                    ],
                    "index": 70
                },
                {
                    "rawPattern": [
                        "* what *effect *analgesic  *"
                    ],
                    "patterns": [
                        "* what *effect *analgesic  *"
                    ],
                    "response": [
                        "Anti-inflammatory analgesics are generally safe. But they can cause side effects and complications, if you use them too often, for too long or in very large doses. These medicine can damage internal organs such as liver or kidney. It may also cause diarrhea or constipation, heart problems, hypersensitivity, nausea, upset stomach or heart burn, ringing in the ears, and stomach ulcers."
                    ],
                    "index": 71
                },
                {
                    "rawPattern": [
                        "* what * tip * analgesic *"
                    ],
                    "patterns": [
                        "* what * tip * analgesic *"
                    ],
                    "response": [
                        "Take this medication by mouth. Drink a full glass of water (8 ounces/240 milliliters) with it unless your doctor tells you otherwise. Do not lie down for at least 10 minutes after you have taken this drug. If stomach upset occurs while you are taking this medication, you may take it with food or milk."
                    ],
                    "index": 72
                },
                {
                    "rawPattern": [
                        "* alternative * analgesic* "
                    ],
                    "patterns": [
                        "* alternative * analgesic* "
                    ],
                    "response": [
                        "The Philippine Institute of Traditional and Alternative Healthcare has indicated that you can Ampalaya, Yerba Buena, ulasimang bato or pansit-pansitan, and guava has an analagesic effects."
                    ],
                    "index": 73
                },
                {
                    "rawPattern": [
                        "* (what|how) * (take|guide|dose) * decongestant *"
                    ],
                    "patterns": [
                        "* (what|how) * (take|guide|dose) * decongestant *"
                    ],
                    "response": [
                        "\n        The usual dose depends on the medicine you're taking. For Pseudoephedrine (sudafed) however here are some of the recommendations. The usual dose of pseudoephedrine is 60mg tablets or as a liquid containing 30mg in 5ml. \n        \n        Adults and children aged 12 to 17 years may take one 60mg tablet or two 5ml spoon (10ml) of liquid up to 4 times a day. While, children aged 6 to 11 years may take half a tablet (30mg) or one 5ml spoon of liquid up to 4 times a day.\n\n        The information I provided is an example of how you take this medicine. If you need further information or have underlying health condition please refer to your healthcare provider.\n        "
                    ],
                    "index": 74
                },
                {
                    "rawPattern": [
                        "* decongestant*"
                    ],
                    "patterns": [
                        "* decongestant*"
                    ],
                    "response": [
                        "Decongestants such as pseudoephedrine, decolgen and sudafed are medicines that relieve congestion by reducing swelling, inflammation and mucus formation within the nasal passages or the eye.  They have no other effect on symptoms such as a runny nose or sneezing. These medicines are available as nose drops or nasal sprays, eye drops, and as tablets, capsules, and syrup."
                    ],
                    "index": 75
                },
                {
                    "rawPattern": [
                        "* decongestant * (treat|use) *"
                    ],
                    "patterns": [
                        "* decongestant * (treat|use) *"
                    ],
                    "response": [
                        "Decongestants such as pseudoephedrine, decolgen and sudafed are medicines that help relieve a congested (stuffy) nose. The congestion can be caused by a cold virus or by the flu, sinusitis, or allergies.  These medicines are available as nose drops or nasal sprays, eye drops, and as tablets, capsules, and syrup."
                    ],
                    "index": 76
                },
                {
                    "rawPattern": [
                        "* decongestant * work *"
                    ],
                    "patterns": [
                        "* decongestant * work *"
                    ],
                    "response": [
                        "Decongestants work by narrowing the blood vessels in your nose. Swollen tissue inside the nose shrinks, and air can pass through more easily."
                    ],
                    "index": 77
                },
                {
                    "rawPattern": [
                        "* not * (take|use) * decongestant*",
                        "* avoid * decongestant*"
                    ],
                    "patterns": [
                        "* not * (take|use) * decongestant*",
                        "* avoid * decongestant*"
                    ],
                    "response": [
                        "Don’t take decongestants if you have high blood pressure that isn’t controlled. Taking decongestants can raise your blood pressure even if it is controlled or nearly normal. You may need to look for an alternative to decongestants. Don’t give decongestants to children younger than 6 years of age."
                    ],
                    "index": 78
                },
                {
                    "rawPattern": [
                        "*effect *decongestant*"
                    ],
                    "patterns": [
                        "*effect *decongestant*"
                    ],
                    "response": [
                        "Decongestants can sometimes cause side effects. They can temporarily cause nervousness, dizziness, and sleeping problems. They can cause heart palpitations (feeling like your heart is racing) or higher blood pressure"
                    ],
                    "index": 79
                },
                {
                    "rawPattern": [
                        "* tip * decongestant*"
                    ],
                    "patterns": [
                        "* tip * decongestant*"
                    ],
                    "response": [
                        "Decongestants may be taken orally to help relieve congestion that is affecting the nose, sinuses, and eyes or sprayed directly in the nose or instilled in the eye for a more local effect."
                    ],
                    "index": 80
                },
                {
                    "rawPattern": [
                        "* alternative * decongestant* "
                    ],
                    "patterns": [
                        "* alternative * decongestant* "
                    ],
                    "response": [
                        "Alternatives to oral decongestants are available. In the drug realm, antihistamines such as diphenhydramine (Benadryl), chlorpheniramine (Chlor-Trimeton), cetirizine (Zyrtec), and loratadine (Claritin) can help with a stuffy nose are safe for the hear"
                    ],
                    "index": 81
                },
                {
                    "rawPattern": [
                        "* (how|what) * (guide|take|dose) * expectorant *"
                    ],
                    "patterns": [
                        "* (how|what) * (guide|take|dose) * expectorant *"
                    ],
                    "response": [
                        "The dosage of expectorants can vary depending on the specific medication, age, weight, and health status of the patient. \n        \n        Adults can take 200 to 400 milligrams (mg) every four hours.\n\n        Children 6 to 12 years of age can take 100 to 200 mg every four hours.\n\n        Children 4 to 6 years of age can take 50 to 100 mg every four hours.\n\n        Children and infants up to 4 years of age should not take it.\n\n        Although I presented you some information on how to take antitussives that may seem useful, it is best if you seek doctors help as they prescribe appropriate medications for your condition.\n        "
                    ],
                    "index": 82
                },
                {
                    "rawPattern": [
                        "* expectorant*"
                    ],
                    "patterns": [
                        "* expectorant*"
                    ],
                    "response": [
                        "Expectorants ,like Guiafenesin and Robitussin, are ingredients that increase airway secretions. They do this by increasing the water content of the secretions which decreases their stickiness, making them easier to cough up. Expectorants are often used to help treat respiratory conditions such as bronchitis, pneumonia, and the common cold.In general, expectorants are available over-the-counter (OTC) in liquid, pill, and tablet forms\n        "
                    ],
                    "index": 83
                },
                {
                    "rawPattern": [
                        "* expectorant* use *"
                    ],
                    "patterns": [
                        "* expectorant* use *"
                    ],
                    "response": [
                        "You may take an expectorant ,like Guiafenesin and Robitussin, to help relieve congestion if you have a cold or the flu. Expectorants are available as standalone drugs or as an ingredient in an all-in-one cold or flu medication. In general, expectorants are available over-the-counter (OTC) in liquid, pill, and tablet forms"
                    ],
                    "index": 84
                },
                {
                    "rawPattern": [
                        "* expectorant * (treat|work) *"
                    ],
                    "patterns": [
                        "* expectorant * (treat|work) *"
                    ],
                    "response": [
                        "Expectorants lubricate your airway. This helps loosen up the mucus and make the secretions in your airway thinner. By loosening up the mucus, expectorants make your cough more productive. This makes it easier for you to cough up mucus effectively and clear your throat."
                    ],
                    "index": 85
                },
                {
                    "rawPattern": [
                        "* not * (take|use) * expectorant*",
                        "* avoid * expectorant*"
                    ],
                    "patterns": [
                        "* not * (take|use) * expectorant*",
                        "* avoid * expectorant*"
                    ],
                    "response": [
                        "You should talk to your healthcare provider before using an expectorant if you are pregnant or breastfeeding. If you have developed any type of allergic reaction or intolerance to expectorants in the past, you should not use these medications.\n\n        Use caution when driving or using machinery while taking an expectorant, as these medications can make you drowsy or dizzy\n        "
                    ],
                    "index": 86
                },
                {
                    "rawPattern": [
                        "*effect *expectorant*"
                    ],
                    "patterns": [
                        "*effect *expectorant*"
                    ],
                    "response": [
                        "Expectorants do not commonly cause serious side effects. They may cause dizziness, drowsiness, and rash though."
                    ],
                    "index": 87
                },
                {
                    "rawPattern": [
                        "* tip * expectorant*"
                    ],
                    "patterns": [
                        "* tip * expectorant*"
                    ],
                    "response": [
                        "Do not crush pills, and be sure to measure liquid formulations using the measuring tools provided with your medication. It is often recommended that you drink plenty of fluids when taking an expectorant."
                    ],
                    "index": 88
                },
                {
                    "rawPattern": [
                        "* alternative * expectorant*"
                    ],
                    "patterns": [
                        "* alternative * expectorant*"
                    ],
                    "response": [
                        "Natural expectorants are another option if you’re trying to loosen up mucus and relieve chest congestion. Natural expectorants include: Menthol, Ivyleaf extract, oral hydration ( drinking lots of water ) , steaming (inhaling warm moist air ) , and honey ( adding honey to drinks ) "
                    ],
                    "index": 89
                },
                {
                    "rawPattern": [
                        "* (how|what) * (take|guide|dose) * antitussive *"
                    ],
                    "patterns": [
                        "* (how|what) * (take|guide|dose) * antitussive *"
                    ],
                    "response": [
                        "\n        Generally, antitussives are taken orally and come in different forms, such as tablets, capsules, syrups, and drops. The dosage is usually determined by a healthcare provider and may be adjusted based on factors such as the age, weight of the patient, the severity of the cough, and any other health conditions the patient may have. \n        \n        There are some common knowledge on the dosage which can be found from reputable medical resources online. For antitussives taken as a lozenges, dosage may vary. Adults and children 12 years of age and older can take 5 to 15 mg every two to four hours, as needed. Children 6 to 12 years of age can take 5 to 15 mg every two to six hours, as needed. Children 4 to 6 years of age can take 5 mg every four hours, as needed. Children and infants up to 4 years of age should not take the medicine. \n        \n        For antitussives taken as syrup, the dosage varies also. Adults and children 12 years of age and older can take 30 mg every six to eight hours, as needed. Children 6 to 12 years of age can take 7 mg every four hours or 15 mg every six to eight hours, as needed. Children 4 to 6 years of age can take 3.5 mg every four hours or 7.5 mg every six to eight hours, as needed.Children and infants up to 4 years of age should  is not recommended.\n\n        Although I presented you some information on how to take antitussives that may seem useful, it is best if you seek doctors help as they prescribe appropriate medications for your condition.\n        "
                    ],
                    "index": 90
                },
                {
                    "rawPattern": [
                        "* antitussive *"
                    ],
                    "patterns": [
                        "* antitussive *"
                    ],
                    "response": [
                        "Antitussives ,such as Dextromethorphan or Robitussin, are prescription or over-the-counter drugs used for suppressing cough.  These medicines can be in the form of a tablet, capsule,gel, liquid , syrup, lozenge or strips. However, I can only recommend the usual  dosage of its logenzes and syrup forms"
                    ],
                    "index": 91
                },
                {
                    "rawPattern": [
                        "* antitussive * use *"
                    ],
                    "patterns": [
                        "* antitussive * use *"
                    ],
                    "response": [
                        "They are typically used to treat a dry cough caused by allergies, respiratory illnesses, or infections.Antitussives can also treat post-viral cough, or a persistent cough that develops after an infection has resolved.  These medicines can be in the form of a tablet, capsule,gel, liquid , syrup, lozenge or strips. However, I can only recommend the usual  dosage of its logenzes and syrup forms"
                    ],
                    "index": 92
                },
                {
                    "rawPattern": [
                        "* antitussive * (treat|work) *"
                    ],
                    "patterns": [
                        "* antitussive * (treat|work) *"
                    ],
                    "response": [
                        "Antitussives ,such as Dextromethorphan or Robitussin, are thought to work by inhibiting a coordinating region for coughing located in the brain stem, disrupting the cough reflex arc; although the exact mechanism of action is unknown. These medicines can be in the form of a tablet, capsule,gel, liquid , syrup, lozenge or strips. However, I can only recommend the usual  dosage of its logenzes and syrup forms."
                    ],
                    "index": 93
                },
                {
                    "rawPattern": [
                        "* not * (take|use) * antitussive *",
                        "* avoid * antitussive *"
                    ],
                    "patterns": [
                        "* not * (take|use) * antitussive *",
                        "* avoid * antitussive *"
                    ],
                    "response": [
                        "This medication is not safe for children under the age of 4 years."
                    ],
                    "index": 94
                },
                {
                    "rawPattern": [
                        "*effect *antitussive *"
                    ],
                    "patterns": [
                        "*effect *antitussive *"
                    ],
                    "response": [
                        "The most common side effects include nausea and drowsiness. Some patients may experience a rash or difficulty breathing. High doses may cause hallucinations and disassociation, and the drug has been reported to be used as a recreational drug"
                    ],
                    "index": 95
                },
                {
                    "rawPattern": [
                        "* tip * antitussive *"
                    ],
                    "patterns": [
                        "* tip * antitussive *"
                    ],
                    "response": [
                        "Take this medication by mouth with or without food with a full glass of water (8 ounces or 240 milliliters) or as directed by your doctor. "
                    ],
                    "index": 96
                },
                {
                    "rawPattern": [
                        "* alternative * antitussive *"
                    ],
                    "patterns": [
                        "* alternative * antitussive *"
                    ],
                    "response": [
                        "Honey is a time-honored remedy for a sore throat. According to one study, trusted Source, it can also relieve coughs more effectively than OTC medications that contain dextromethorphan (DM), a cough suppressant."
                    ],
                    "index": 97
                },
                {
                    "rawPattern": [
                        "* (what|how) * (guide|take|dose) * lozenge *",
                        "* guide * lozenge *",
                        "* dose * lozenge *"
                    ],
                    "patterns": [
                        "* (what|how) * (guide|take|dose) * lozenge *",
                        "* guide * lozenge *",
                        "* dose * lozenge *"
                    ],
                    "response": [
                        "Let the lozenge dissolve slowly in your mouth and swallow the dissolved liquid along with your saliva. Do not chew or swallow it whole. This product is usually used every 2 hours as needed"
                    ],
                    "index": 98
                },
                {
                    "rawPattern": [
                        "* lozenge *"
                    ],
                    "patterns": [
                        "* lozenge *"
                    ],
                    "response": [
                        "Lozenges such as Bactidol and Strepsils are used to temporarily relieve pain from minor mouth problems (such as canker sores, sore gums/throat, mouth/gum injury)."
                    ],
                    "index": 99
                },
                {
                    "rawPattern": [
                        "* what * lozenge * use *"
                    ],
                    "patterns": [
                        "* what * lozenge * use *"
                    ],
                    "response": [
                        "Taking Lozenges,  such as Bactidol and Strepsils, are convenient, affordable option for symptomatic treatment of acute and chronic pharyngitis, irritation or inflammation of the upper respiratory tract and relief of unpleasant postoperative sensation in the throat."
                    ],
                    "index": 100
                },
                {
                    "rawPattern": [
                        "* lozenge * (treat|work) *"
                    ],
                    "patterns": [
                        "* lozenge * (treat|work) *"
                    ],
                    "response": [
                        "When you suck on a lozenge, it starts to dissolve and release medicine. It is intended to dissolve slowly in the mouth to temporarily suppress the cough, and lubricate and soothe irritated tissues of the throat. Some have medications that help fight colds, and most have anesthetic to help ease the pain. Lozenges also contain menthol or eucalyptus, which can help cool and sooth the throat. Others contain honey, which is known to have cough suppression properties."
                    ],
                    "index": 101
                },
                {
                    "rawPattern": [
                        "* not * (take|use) * lozenge *",
                        "* avoid * lozenge *"
                    ],
                    "patterns": [
                        "* not * (take|use) * lozenge *",
                        "* avoid * lozenge *"
                    ],
                    "response": [
                        "If you have a sore throat that is severe or that lasts more than 2 days, or a cough that lasts more than 7 days or keeps coming back, or symptoms occur with a fever, headache, rash, swelling, nausea, or vomiting, tell your doctor promptly"
                    ],
                    "index": 102
                },
                {
                    "rawPattern": [
                        "*effect *lozenge *"
                    ],
                    "patterns": [
                        "*effect *lozenge *"
                    ],
                    "response": [
                        "Slight burning, tingling, or stinging may occur. If any of these effects last or get worse, tell your doctor or pharmacist promptly."
                    ],
                    "index": 103
                },
                {
                    "rawPattern": [
                        "* what * tip * lozenge *"
                    ],
                    "patterns": [
                        "* what * tip * lozenge *"
                    ],
                    "response": [
                        "Do not chew or swallow it whole. This product is usually used every 2 hours as needed. "
                    ],
                    "index": 104
                },
                {
                    "rawPattern": [
                        "* alternative * lozenge * "
                    ],
                    "patterns": [
                        "* alternative * lozenge * "
                    ],
                    "response": [
                        "While it may not cure, sipping tea with honey may help and sooth throat conditions."
                    ],
                    "index": 105
                },
                {
                    "rawPattern": [
                        "* where * go * have * influenza *",
                        "* where * treat * have * influenza *"
                    ],
                    "patterns": [
                        "* where * go * have * influenza *",
                        "* where * treat * have * influenza *"
                    ],
                    "response": [
                        "You can manage the symptoms in your home. The best way to treat the flu is to get plenty of rest, drink fluids to prevent dehydration. \n        However, Check with your doctor promptly if you are at higher risk of serious flu complications."
                    ],
                    "index": 106
                },
                {
                    "rawPattern": [
                        "* tell * (symptom|symptom) * influenza *",
                        "* (sign|symptom) * influenza *"
                    ],
                    "patterns": [
                        "* tell * (symptom|symptom) * influenza *",
                        "* (sign|symptom) * influenza *"
                    ],
                    "response": [
                        "The Center of Disease Control indicated that people who have flu have some or all of the following symptoms. They may have fever, cough, sore throat, runny or stuffy nose, muscle or body aches, headaches, and fatigue(tireness). Some others may have vomiting and diarrhea though is is more common in children and adults."
                    ],
                    "index": 107
                },
                {
                    "rawPattern": [
                        "* (treat|remove|treat|TAKE) * vomit *"
                    ],
                    "patterns": [
                        "* (treat|remove|treat|TAKE) * vomit *"
                    ],
                    "response": [
                        "\n        Vomiting is the involuntary forceful expulsion of the contents of one's stomach through the mouth and sometimes the nose which can deplete you of fluids and electrolytes. It is often a symptom of an underlying medical condition such as gastroenteritis, food poisoning, motion sickness, pregnancy, or certain medications.\n        \n        If you are experiencing vomiting, you may follow these guidelines. \n        \n        1. Avoid eating or drinking for several hours after having it. \n        \n        2. Try to sip small amounts of fluids like water, sports drinks, and borths, after. Remember not to drink citrus juices or milk.  Also, avoid foods that can irritate or may be difficult to digest such alcohol, caffeine, fats/oils, spicy food, milk or cheese. If you can tolerate drinking more water, try to drink more. \n        \n        3. If you are hungry, try eating foods such as bananas, rice, dry toast, soda crackers. When you can tolerate bland food, then you can resume your normal diet. Bland foods include boiled or baked potatoes, white rice, plain pasta, cooked or canned fruits, cooked vegetables, and lean meats. These are easy for your stomach to digest.\n        \n        Remember that repeated vomiting requires medical treatment if it results in a lasting lightheaded feeling or weakness.\n        "
                    ],
                    "index": 108
                },
                {
                    "rawPattern": [
                        "* (treat|remove|treat|TAKE) * nausea *"
                    ],
                    "patterns": [
                        "* (treat|remove|treat|TAKE) * nausea *"
                    ],
                    "response": [
                        "\n        Nausea is a sensation of discomfort in the stomach that often precedes vomiting. It can be caused by a variety of factors, such as motion sickness, digestive problems, medication side effects, and certain medical conditions. To alleviate nausea include resting, drinking water, sports drinks , and broths. Avoid fried , greasy foods and sweets. Try to eat bland foods such as saltine crackers or plain bread, in small amounts. Then rest by having your head elevated."
                    ],
                    "index": 109
                },
                {
                    "rawPattern": [
                        "* boil * water *"
                    ],
                    "patterns": [
                        "* boil * water *"
                    ],
                    "response": [
                        "Boiling is done to kill pathogenic bacteria, viruses and protozoa. If water appears cloudy, let it settle and filter it through a clean cloth, paper boiling water towel, or coffee filter. Then bring water to a rolling boil for at least one minute. Let water cool naturally and store it in clean containers with covers. To improve the flat taste of boiled water, add one pinch of salt to each quart or liter of water, or pour the water from one clean container to another several times.\n        "
                    ],
                    "index": 110
                },
                {
                    "rawPattern": [
                        "* clean * water *"
                    ],
                    "patterns": [
                        "* clean * water *"
                    ],
                    "response": [
                        "\n        Disinfecting water is important because it helps to remove harmful bacteria, viruses, and parasites that can cause serious illnesses such as cholera, typhoid, dysentery, and diarrhea. When water is not disinfected, it can become contaminated with these microorganisms and can spread diseases rapidly. Disinfection helps to reduce the risk of waterborne illnesses and ensures that the water is safe for consumption.\n\n        You can disinfect water by using chlorine. You may do these by preparing a stock solution by dissolving 1 level of powdered  chlorine compounds (65% to 75%) to 1 liter of water. Then by adding 2 teaspoons of that stock solution to 5 gallons (20 liters) of water. Mix thoroughly and let it stand for at least 30 minutes before using.        \n        "
                    ],
                    "index": 111
                },
                {
                    "rawPattern": [
                        "* (treat|remove|treat) * fever *"
                    ],
                    "patterns": [
                        "* (treat|remove|treat) * fever *"
                    ],
                    "response": [
                        "When you have a fever, apply damp, luke warm cloths to the forehead. Wear comfortable cloths. If you have chills, it is best to wear layers and keep warm. Then rest. you need plenty of rest to recover.\n        \n        Also, you can drink plenty of fluids to stay hydrated. There are some over-the-counter (otc) pain relievers you can take to reduce discomfort. For example, you can ask your pharmacist for acetaminophen for pain relief.\n        "
                    ],
                    "index": 112
                },
                {
                    "rawPattern": [
                        "* (treat|remove|treat) * clog * nose *"
                    ],
                    "patterns": [
                        "* (treat|remove|treat) * clog * nose *"
                    ],
                    "response": [
                        "\n        A clogged nose happens where there is an obstruction or blockage in the nasal passages. It is also known as nasal congestion and can be caused by various factors such as allergies, colds, flu, sinus infections, and other respiratory illnesses. Symptoms of a clogged nose include difficulty breathing, a runny or stuffy nose, pressure or pain around the nasal area, and decreased sense of smell or taste. \n\n        To manage clogged nose, You need to drink plenty of fluids to think out the mucus running in your sinus. Avoid drinking those that can dehydrate like coffe and alchoholic beverages. You can sip on medicated hot drinks,tea, or soups. Also try to take Vitamin C. The heat and steam can help decongest your airways. You also need to get plenty of rest. Apply warm compress. If you dont have a compress, try moistening a washcloth with warm water and apply it into your face several times a day to relieve nasal congestion.  You can also inhale steam to help thin out mucus and help you drain them. If you have humidifier you can also use it. You can also try to use a saline nasal spray to help nasal passages open. It is also known that eating spicy meal helps relieve clogged nose. So try it out. Lastly, always use the right over-the-counter medicines if you have access to nearest pharmacy."
                    ],
                    "index": 113
                },
                {
                    "rawPattern": [
                        "* (treat|treat|treat) * (head|headache) *"
                    ],
                    "patterns": [
                        "* (treat|treat|treat) * (head|headache) *"
                    ],
                    "response": [
                        "Each type of headache has different treatment methods that can be effective in treating headache pain.Tension headaches are also known as hatband headaches. This is because the pain from these headaches is located around the back of the head, the temples and forehead. They can last from a few hours to a few days. Some treatment options that are effective for tension headaches include physical therapy, muscle relaxants and over-the-counter pain releivers (aspirin and ibuprofen). Another type of headache is migrain headache. To relieve yourself, try to rest in a quite and darkroom, take hot or cold compress, and try massages."
                    ],
                    "index": 114
                },
                {
                    "rawPattern": [
                        "* (treat|treat|treat)  * stomach *"
                    ],
                    "patterns": [
                        "* (treat|treat|treat)  * stomach *"
                    ],
                    "response": [
                        "Most abdominal pain goes away without special treatment. However,there are still things you can do to relieve pain. Try to place a hot water bottle or heated wheat bag on your abdomen. Soak in a warm bath. Take care not to scald yourself. Drink plenty of clear fluids such as water. Reduce your intake of coffee, tea and alcohol as these can make the pain worse. When you are allowed to eat again, start with clear liquids, then progress to bland foods such as crackers, rice, bananas or toast. Get plenty of rest. "
                    ],
                    "index": 115
                },
                {
                    "rawPattern": [
                        "* (treat|remove|treat) * sore throat *"
                    ],
                    "patterns": [
                        "* (treat|remove|treat) * sore throat *"
                    ],
                    "response": [
                        "If you have sore throat, here is what you can do. Drink lots of water and other fluids to thin our mucus or soothe your dry throat. Take medicine as directed by your doctor.  Prop up your head on pillows to help you breath and ease a dry cough. Try cough drops to soothe your throat. Stay away from any smoke.  You can also try gargling with warm water but we do not recommend children to do this.  "
                    ],
                    "index": 116
                },
                {
                    "rawPattern": [
                        "* wear * sneeze *"
                    ],
                    "patterns": [
                        "* wear * sneeze *"
                    ],
                    "response": [
                        "It is highly recommended that you cover your mouth and nose when sneezing or coughing to prevent spread of the virus. You can sneeze or couch into a tissue. Make sure to dispose them properly.  If you don’t have a tissue, cough or sneeze in your elbow and not in your hands. Afterwards, wash your hands or use sanitizer."
                    ],
                    "index": 117
                },
                {
                    "rawPattern": [
                        "* clean * hand *"
                    ],
                    "patterns": [
                        "* clean * hand *"
                    ],
                    "response": [
                        "Washing your hands often will help protect you from germs. To properly do it , lather with soap for at least 20 seconds. After putting soap on your hands, rub your hands together for at least 20 seconds. This is about as long as it takes to sing Happy Birthday twice. Use hand sanitizer when washing isn't possible. Use an alcohol-based hand sanitizer when you can't get to a sink. Apply the hand sanitizer as you would hand lotion, making sure to cover the fronts and backs of both hands. Use a product that contains at least 60% alcohol. "
                    ],
                    "index": 118
                },
                {
                    "rawPattern": [
                        "* symptom *",
                        "* symptom *"
                    ],
                    "patterns": [
                        "* symptom *",
                        "* symptom *"
                    ],
                    "response": [
                        "Medical conditions have symptoms and signs. In order to help you better, please specifiy whether you were asking about diarrhea or influenza"
                    ],
                    "index": 119
                },
                {
                    "rawPattern": [
                        "* (hi|hello) *",
                        "* good (evening|afternoon|morning) *"
                    ],
                    "patterns": [
                        "* (hi|hello) *",
                        "* good (evening|afternoon|morning) *"
                    ],
                    "response": [
                        "Hello there! How can I help you? Im sorry if I am unable to catch everything you say. I am not that smart so lets help each other in our conversations"
                    ],
                    "index": 120
                },
                {
                    "rawPattern": [
                        "* antimotility *"
                    ],
                    "patterns": [
                        "* antimotility *"
                    ],
                    "response": [
                        "Im sorry, I did not undersand what you were asking about antimotilities"
                    ],
                    "index": 121
                },
                {
                    "rawPattern": [
                        "* bismuth *"
                    ],
                    "patterns": [
                        "* bismuth *"
                    ],
                    "response": [
                        "Im sorry, I did not undersand what you were asking about bismuth subsalicylate"
                    ],
                    "index": 122
                },
                {
                    "rawPattern": [
                        "* antihistamine *"
                    ],
                    "patterns": [
                        "* antihistamine *"
                    ],
                    "response": [
                        "I did not catch what you were saying. Sorry. Could you please tell me again what you were saying about bismuth subsalicylate"
                    ],
                    "index": 123
                },
                {
                    "rawPattern": [
                        "* analgesic *"
                    ],
                    "patterns": [
                        "* analgesic *"
                    ],
                    "response": [
                        "I did not catch what you were saying about analgesics. Sorry."
                    ],
                    "index": 124
                },
                {
                    "rawPattern": [
                        "* nsaid *"
                    ],
                    "patterns": [
                        "* nsaid *"
                    ],
                    "response": [
                        "I did not catch what you were saying about analgesics. Sorry."
                    ],
                    "index": 125
                },
                {
                    "rawPattern": [
                        "* decongestant *"
                    ],
                    "patterns": [
                        "* decongestant *"
                    ],
                    "response": [
                        "I know you were telling me about decongestants, but I don't quite understand what you were saying. Sorry"
                    ],
                    "index": 126
                },
                {
                    "rawPattern": [
                        "* expectorant *"
                    ],
                    "patterns": [
                        "* expectorant *"
                    ],
                    "response": [
                        "I know you were telling me about expectorants, but I don't quite understand what you were saying. Sorry"
                    ],
                    "index": 127
                },
                {
                    "rawPattern": [
                        "* antitussive *"
                    ],
                    "patterns": [
                        "* antitussive *"
                    ],
                    "response": [
                        "Sorry, I dont quite understand what you were saying about antitussives."
                    ],
                    "index": 128
                },
                {
                    "rawPattern": [
                        "* lozenge *"
                    ],
                    "patterns": [
                        "* lozenge *"
                    ],
                    "response": [
                        "Sorry, I dont quite understand what you were saying about lozenges."
                    ],
                    "index": 129
                },
                {
                    "rawPattern": [
                        "* (treat|do) *"
                    ],
                    "patterns": [
                        "* (treat|do) *"
                    ],
                    "response": [
                        "I would like to help but I need more information. You can ask me about diarrhea and influenza. I can tell you what can you do to help you feel better. "
                    ],
                    "index": 130
                },
                {
                    "rawPattern": [
                        "*diarrhea*"
                    ],
                    "patterns": [
                        "*diarrhea*"
                    ],
                    "response": [
                        "Im sorry, I dont quite understand what you are saying about diarrhea. To help you better, try to rephrase or be a little specific on your queries like asking treatments, general advices, things you can and cannot eat when feeling sick."
                    ],
                    "index": 131
                },
                {
                    "rawPattern": [
                        "* influenza *"
                    ],
                    "patterns": [
                        "* influenza *"
                    ],
                    "response": [
                        "Im sorry,I dont quite understand what you are saying about influenza. To help you better, try to rephrase or be a little specific on your queries like asking treatments, general advices, things you can and cannot eat when feeling sick."
                    ],
                    "index": 132
                },
                {
                    "rawPattern": [
                        "*vomit*"
                    ],
                    "patterns": [
                        "*vomit*"
                    ],
                    "response": [
                        "Im sorry, but it appears that I dont quite understand what you are trying to tell me about vomiting due to my limited knowledge. However, I can tell you what you can do or how to manage it."
                    ],
                    "index": 133
                },
                {
                    "rawPattern": [
                        "*headache*"
                    ],
                    "patterns": [
                        "*headache*"
                    ],
                    "response": [
                        "Im sorry, but it appears that I dont quite understand what you are trying to tell me about headache due to my limited knowledge. However, I can tell you what you can do or how to manage it."
                    ],
                    "index": 134
                },
                {
                    "rawPattern": [
                        "* stomach *cramp*",
                        "* cramp * stomach*",
                        "* stomach * "
                    ],
                    "patterns": [
                        "* stomach *cramp*",
                        "* cramp * stomach*",
                        "* stomach * "
                    ],
                    "response": [
                        "Im sorry, but it appears that I dont quite understand what you are trying to tell me about abdominal cramps due to my limited knowledge. However, I can tell you what you can do or how to manage it."
                    ],
                    "index": 135
                },
                {
                    "rawPattern": [
                        "*stiffness*"
                    ],
                    "patterns": [
                        "*stiffness*"
                    ],
                    "response": [
                        "Im sorry, but it appears that I dont quite understand what you are trying to tell me about stiffness due to my limited knowledge. However, I can tell you what you can do or how to manage it."
                    ],
                    "index": 136
                },
                {
                    "rawPattern": [
                        "*clog*"
                    ],
                    "patterns": [
                        "*clog*"
                    ],
                    "response": [
                        "Im sorry, but it appears that I dont quite understand what you are trying to tell me about clogged nose due to my limited knowledge. However, I can tell you what you can do or how to manage it."
                    ],
                    "index": 137
                },
                {
                    "rawPattern": [
                        "*nausea*"
                    ],
                    "patterns": [
                        "*nausea*"
                    ],
                    "response": [
                        "Im sorry, but it appears that I dont quite understand what you are trying to tell me about nausea due to my limited knowledge. However, I can tell you what you can do or how to manage it."
                    ],
                    "index": 138
                },
                {
                    "rawPattern": [
                        "*"
                    ],
                    "patterns": [
                        "*"
                    ],
                    "response": [
                        "Sorry, it appears that I don't understand what you are saying."
                    ],
                    "index": 139
                }
            ],
            "index": 140
        }
    },
    "FIL": {
        "wildcardArchive": {
            "forwardIndex": [
                {
                    "rawPattern": "* not * eat * not * peel * eat * ",
                    "pattern": "^(.*)\\bnot\\b(.*)\\beat\\b(.*)\\bnot\\b(.*)\\bpeel\\b(.*)\\beat\\b(.*)$",
                    "index": 14
                },
                {
                    "rawPattern": "* not  * eat * raw * meat *",
                    "pattern": "^(.*)\\bnot\\b(.*)\\beat\\b(.*)\\braw\\b(.*)\\bmeat\\b(.*)$",
                    "index": 15
                },
                {
                    "rawPattern": "* eat * not * cook * meat *",
                    "pattern": "^(.*)\\beat\\b(.*)\\bnot\\b(.*)\\bcook\\b(.*)\\bmeat\\b(.*)$",
                    "index": 15
                },
                {
                    "rawPattern": "* can * diarrhea * not * get *",
                    "pattern": "^(.*)\\bcan\\b(.*)\\bdiarrhea\\b(.*)\\bnot\\b(.*)\\bget\\b(.*)$",
                    "index": 16
                },
                {
                    "rawPattern": "* eat * (not * (drink|eat) ) * diarrhea *",
                    "pattern": "^(.*)\\beat\\b(.*)(\\bnot\\b(.*)(\\bdrink\\b|\\beat\\b))(.*)\\bdiarrhea\\b(.*)$",
                    "index": 22
                },
                {
                    "rawPattern": "* diarrhea * (not * (drink|eat) ) * eat *",
                    "pattern": "^(.*)\\bdiarrhea\\b(.*)(\\bnot\\b(.*)(\\bdrink\\b|\\beat\\b))(.*)\\beat\\b(.*)$",
                    "index": 22
                },
                {
                    "rawPattern": "* not * good * effect * antimotility  *",
                    "pattern": "^(.*)\\bnot\\b(.*)\\bgood\\b(.*)\\beffect\\b(.*)\\bantimotility\\b(.*)$",
                    "index": 29
                },
                {
                    "rawPattern": "* not * good * effect * bismuth *",
                    "pattern": "^(.*)\\bnot\\b(.*)\\bgood\\b(.*)\\beffect\\b(.*)\\bbismuth\\b(.*)$",
                    "index": 37
                },
                {
                    "rawPattern": "* eat * ( not * (drink|eat) ) * influenza *",
                    "pattern": "^(.*)\\beat\\b(.*)(\\bnot\\b(.*)(\\bdrink\\b|\\beat\\b))(.*)\\binfluenza\\b(.*)$",
                    "index": 59
                },
                {
                    "rawPattern": "* influenza * (not * (drink|eat) ) * eat *",
                    "pattern": "^(.*)\\binfluenza\\b(.*)(\\bnot\\b(.*)(\\bdrink\\b|\\beat\\b))(.*)\\beat\\b(.*)$",
                    "index": 59
                },
                {
                    "rawPattern": "* not * good * effect * antihistamine *",
                    "pattern": "^(.*)\\bnot\\b(.*)\\bgood\\b(.*)\\beffect\\b(.*)\\bantihistamine\\b(.*)$",
                    "index": 67
                },
                {
                    "rawPattern": "* not * good * effect * analgesic *",
                    "pattern": "^(.*)\\bnot\\b(.*)\\bgood\\b(.*)\\beffect\\b(.*)\\banalgesic\\b(.*)$",
                    "index": 75
                },
                {
                    "rawPattern": "* not * good * effect * decongestant *",
                    "pattern": "^(.*)\\bnot\\b(.*)\\bgood\\b(.*)\\beffect\\b(.*)\\bdecongestant\\b(.*)$",
                    "index": 83
                },
                {
                    "rawPattern": "* not * good * effect * expectorant *",
                    "pattern": "^(.*)\\bnot\\b(.*)\\bgood\\b(.*)\\beffect\\b(.*)\\bexpectorant\\b(.*)$",
                    "index": 91
                },
                {
                    "rawPattern": "* not * good * effect * antitussive *",
                    "pattern": "^(.*)\\bnot\\b(.*)\\bgood\\b(.*)\\beffect\\b(.*)\\bantitussive\\b(.*)$",
                    "index": 99
                },
                {
                    "rawPattern": "* not * good * effect * lozenge*",
                    "pattern": "^(.*)\\bnot\\b(.*)\\bgood\\b(.*)\\beffect\\b(.*)\\blozenge\\b(.*)$",
                    "index": 107
                },
                {
                    "rawPattern": "* eat * (avoid| (not|not) * (eat|drink|bilhin)) * nausea *",
                    "pattern": "^(.*)\\beat\\b(.*)(\\bavoid\\b|(\\bnot\\b|\\bnot\\b)(.*)(\\beat\\b|\\bdrink\\b|\\bbilhin\\b))(.*)\\bnausea\\b(.*)$",
                    "index": 113
                },
                {
                    "rawPattern": "* what * (bilhin|use) * clean * water *",
                    "pattern": "^(.*)\\bwhat\\b(.*)(\\bbilhin\\b|\\buse\\b)(.*)\\bclean\\b(.*)\\bwater\\b(.*)$",
                    "index": 115
                },
                {
                    "rawPattern": "* (water|hydrate) * treat * \bdiarrhea\b(?!_) * ",
                    "pattern": "^(.*)(\\bwater\\b|\\bhydrate\\b)(.*)\\btreat\\b(.*)\b\\bdiarrhea\\b\b(?!\\b_\\b)(.*)$",
                    "index": 7
                },
                {
                    "rawPattern": "* zinc * treat * \bdiarrhea\b(?!_) *",
                    "pattern": "^(.*)\\bzinc\\b(.*)\\btreat\\b(.*)\b\\bdiarrhea\\b\b(?!\\b_\\b)(.*)$",
                    "index": 8
                },
                {
                    "rawPattern": "* treat * \bdiarrhea\b(?!_) * where * ",
                    "pattern": "^(.*)\\btreat\\b(.*)\b\\bdiarrhea\\b\b(?!\\b_\\b)(.*)\\bwhere\\b(.*)$",
                    "index": 10
                },
                {
                    "rawPattern": "* where * treat * \bdiarrhea\b(?!_) * ",
                    "pattern": "^(.*)\\bwhere\\b(.*)\\btreat\\b(.*)\b\\bdiarrhea\\b\b(?!\\b_\\b)(.*)$",
                    "index": 10
                },
                {
                    "rawPattern": "* treat * blood * (diarrhea|diarrhea) *",
                    "pattern": "^(.*)\\btreat\\b(.*)\\bblood\\b(.*)(\\bdiarrhea\\b|\\bdiarrhea\\b)(.*)$",
                    "index": 11
                },
                {
                    "rawPattern": "* blood * (diarrhea|diarrhea) * work *",
                    "pattern": "^(.*)\\bblood\\b(.*)(\\bdiarrhea\\b|\\bdiarrhea\\b)(.*)\\bwork\\b(.*)$",
                    "index": 11
                },
                {
                    "rawPattern": "* treat * \bdiarrhea\b(?!_) * fever * ",
                    "pattern": "^(.*)\\btreat\\b(.*)\b\\bdiarrhea\\b\b(?!\\b_\\b)(.*)\\bfever\\b(.*)$",
                    "index": 12
                },
                {
                    "rawPattern": "* treat * fever * \bdiarrhea\b(?!_) * ",
                    "pattern": "^(.*)\\btreat\\b(.*)\\bfever\\b(.*)\b\\bdiarrhea\\b\b(?!\\b_\\b)(.*)$",
                    "index": 12
                },
                {
                    "rawPattern": "* \bdiarrhea\b(?!_) * treat * what * ",
                    "pattern": "^(.*)\b\\bdiarrhea\\b\b(?!\\b_\\b)(.*)\\btreat\\b(.*)\\bwhat\\b(.*)$",
                    "index": 13
                },
                {
                    "rawPattern": "* avoid *raw * meat * ",
                    "pattern": "^(.*)\\bavoid\\b(.*)\\braw\\b(.*)\\bmeat\\b(.*)$",
                    "index": 15
                },
                {
                    "rawPattern": "* can * diarrhea * avoid *",
                    "pattern": "^(.*)\\bcan\\b(.*)\\bdiarrhea\\b(.*)\\bavoid\\b(.*)$",
                    "index": 16
                },
                {
                    "rawPattern": "* treat * eat * diarrhea * ",
                    "pattern": "^(.*)\\btreat\\b(.*)\\beat\\b(.*)\\bdiarrhea\\b(.*)$",
                    "index": 17
                },
                {
                    "rawPattern": "* eat * treat * diarrhea *",
                    "pattern": "^(.*)\\beat\\b(.*)\\btreat\\b(.*)\\bdiarrhea\\b(.*)$",
                    "index": 17
                },
                {
                    "rawPattern": "* diarrhea * eat * treat*  ",
                    "pattern": "^(.*)\\bdiarrhea\\b(.*)\\beat\\b(.*)\\btreat\\b(.*)$",
                    "index": 17
                },
                {
                    "rawPattern": "* bad * hydrate * diarrhea *",
                    "pattern": "^(.*)\\bbad\\b(.*)\\bhydrate\\b(.*)\\bdiarrhea\\b(.*)$",
                    "index": 18
                },
                {
                    "rawPattern": "* eat * avoid * diarrhea *",
                    "pattern": "^(.*)\\beat\\b(.*)\\bavoid\\b(.*)\\bdiarrhea\\b(.*)$",
                    "index": 22
                },
                {
                    "rawPattern": "* diarrhea * avoid * eat *",
                    "pattern": "^(.*)\\bdiarrhea\\b(.*)\\bavoid\\b(.*)\\beat\\b(.*)$",
                    "index": 22
                },
                {
                    "rawPattern": "* diarrhea * problem * who * ",
                    "pattern": "^(.*)\\bdiarrhea\\b(.*)\\bproblem\\b(.*)\\bwho\\b(.*)$",
                    "index": 23
                },
                {
                    "rawPattern": "* problem * diarrhea * who * ",
                    "pattern": "^(.*)\\bproblem\\b(.*)\\bdiarrhea\\b(.*)\\bwho\\b(.*)$",
                    "index": 23
                },
                {
                    "rawPattern": "* diarrhea * who * problem * ",
                    "pattern": "^(.*)\\bdiarrhea\\b(.*)\\bwho\\b(.*)\\bproblem\\b(.*)$",
                    "index": 23
                },
                {
                    "rawPattern": "* problem * who * diarrhea * ",
                    "pattern": "^(.*)\\bproblem\\b(.*)\\bwho\\b(.*)\\bdiarrhea\\b(.*)$",
                    "index": 23
                },
                {
                    "rawPattern": "* who * problem * diarrhea * ",
                    "pattern": "^(.*)\\bwho\\b(.*)\\bproblem\\b(.*)\\bdiarrhea\\b(.*)$",
                    "index": 23
                },
                {
                    "rawPattern": "* not * ((eat|drink|use) | avoid)  * antimotility *",
                    "pattern": "^(.*)\\bnot\\b(.*)((\\beat\\b|\\bdrink\\b|\\buse\\b)|\\bavoid\\b)(.*)\\bantimotility\\b(.*)$",
                    "index": 28
                },
                {
                    "rawPattern": "* not * ( (eat|drink|use) | avoid )  *bismuth *",
                    "pattern": "^(.*)\\bnot\\b(.*)((\\beat\\b|\\bdrink\\b|\\buse\\b)|\\bavoid\\b)(.*)\\bbismuth\\b(.*)$",
                    "index": 36
                },
                {
                    "rawPattern": "* where * treat * diarrhea * ",
                    "pattern": "^(.*)\\bwhere\\b(.*)\\btreat\\b(.*)\\bdiarrhea\\b(.*)$",
                    "index": 40
                },
                {
                    "rawPattern": "* where * go * diarrhea * ",
                    "pattern": "^(.*)\\bwhere\\b(.*)\\bgo\\b(.*)\\bdiarrhea\\b(.*)$",
                    "index": 40
                },
                {
                    "rawPattern": "* drink * water * influenza *",
                    "pattern": "^(.*)\\bdrink\\b(.*)\\bwater\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 46
                },
                {
                    "rawPattern": "* who * drug * influenza * ",
                    "pattern": "^(.*)\\bwho\\b(.*)\\bdrug\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 47
                },
                {
                    "rawPattern": "* treat * influenza * where *",
                    "pattern": "^(.*)\\btreat\\b(.*)\\binfluenza\\b(.*)\\bwhere\\b(.*)$",
                    "index": 48
                },
                {
                    "rawPattern": "* where * treat * influenza *",
                    "pattern": "^(.*)\\bwhere\\b(.*)\\btreat\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 48
                },
                {
                    "rawPattern": "* (avoid|not) * touch * influenza *",
                    "pattern": "^(.*)(\\bavoid\\b|\\bnot\\b)(.*)\\btouch\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 51
                },
                {
                    "rawPattern": "* wear * (mouth|nose) * (influenza|cough|sneeze) *",
                    "pattern": "^(.*)\\bwear\\b(.*)(\\bmouth\\b|\\bnose\\b)(.*)(\\binfluenza\\b|\\bcough\\b|\\bsneeze\\b)(.*)$",
                    "index": 52
                },
                {
                    "rawPattern": "* not * touch * (eye|nose|mouth) *",
                    "pattern": "^(.*)\\bnot\\b(.*)\\btouch\\b(.*)(\\beye\\b|\\bnose\\b|\\bmouth\\b)(.*)$",
                    "index": 53
                },
                {
                    "rawPattern": "* treat*  eat * influenza * ",
                    "pattern": "^(.*)\\btreat\\b(.*)\\beat\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 56
                },
                {
                    "rawPattern": "* eat * treat  * influenza *",
                    "pattern": "^(.*)\\beat\\b(.*)\\btreat\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 56
                },
                {
                    "rawPattern": "* influenza * eat * treat*  ",
                    "pattern": "^(.*)\\binfluenza\\b(.*)\\beat\\b(.*)\\btreat\\b(.*)$",
                    "index": 56
                },
                {
                    "rawPattern": "* eat * avoid * influenza *",
                    "pattern": "^(.*)\\beat\\b(.*)\\bavoid\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 59
                },
                {
                    "rawPattern": "* influenza * (avoid) * eat *",
                    "pattern": "^(.*)\\binfluenza\\b(.*)(\\bavoid\\b)(.*)\\beat\\b(.*)$",
                    "index": 59
                },
                {
                    "rawPattern": "* (eat|drink) * (influenza_foods_not_allowed|influenza_foods_not_allowed_caffeinated_drinks|influenza_foods_not_allowed_greasy_foods|influenza_foods_not_allowed_hard_grains|\n        influenza_foods_not_allowed_sugary_foods) * influenza *",
                    "pattern": "^(.*)(\\beat\\b|\\bdrink\\b)(.*)(\\binfluenza_foods_not_allowed\\b|\\binfluenza_foods_not_allowed_caffeinated_drinks\\b|\\binfluenza_foods_not_allowed_greasy_foods\\b|\\binfluenza_foods_not_allowed_hard_grains\\b|\\binfluenza_foods_not_allowed_sugary_foods\\b)(.*)\\binfluenza\\b(.*)$",
                    "index": 60
                },
                {
                    "rawPattern": "* problem * who * influenza *",
                    "pattern": "^(.*)\\bproblem\\b(.*)\\bwho\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 61
                },
                {
                    "rawPattern": "* problem * influenza * who *",
                    "pattern": "^(.*)\\bproblem\\b(.*)\\binfluenza\\b(.*)\\bwho\\b(.*)$",
                    "index": 61
                },
                {
                    "rawPattern": "* who * problem * influenza *",
                    "pattern": "^(.*)\\bwho\\b(.*)\\bproblem\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 61
                },
                {
                    "rawPattern": "* influenza * problem * who *",
                    "pattern": "^(.*)\\binfluenza\\b(.*)\\bproblem\\b(.*)\\bwho\\b(.*)$",
                    "index": 61
                },
                {
                    "rawPattern": "* influenza * who * problem *",
                    "pattern": "^(.*)\\binfluenza\\b(.*)\\bwho\\b(.*)\\bproblem\\b(.*)$",
                    "index": 61
                },
                {
                    "rawPattern": "* (how|what) * (use|drink|eat) * antihistamine *",
                    "pattern": "^(.*)(\\bhow\\b|\\bwhat\\b)(.*)(\\buse\\b|\\bdrink\\b|\\beat\\b)(.*)\\bantihistamine\\b(.*)$",
                    "index": 62
                },
                {
                    "rawPattern": "* (how|what) * antihistamine * (use|drink|eat) *",
                    "pattern": "^(.*)(\\bhow\\b|\\bwhat\\b)(.*)\\bantihistamine\\b(.*)(\\buse\\b|\\bdrink\\b|\\beat\\b)(.*)$",
                    "index": 62
                },
                {
                    "rawPattern": "* how * work * antihistamine * ",
                    "pattern": "^(.*)\\bhow\\b(.*)\\bwork\\b(.*)\\bantihistamine\\b(.*)$",
                    "index": 65
                },
                {
                    "rawPattern": "* ( not * (eat|drink|use) | avoid ) * antihistamine *",
                    "pattern": "^(.*)(\\bnot\\b(.*)(\\beat\\b|\\bdrink\\b|\\buse\\b)|\\bavoid\\b)(.*)\\bantihistamine\\b(.*)$",
                    "index": 66
                },
                {
                    "rawPattern": "* how * (drink|use|eat) * analgesic *",
                    "pattern": "^(.*)\\bhow\\b(.*)(\\bdrink\\b|\\buse\\b|\\beat\\b)(.*)\\banalgesic\\b(.*)$",
                    "index": 70
                },
                {
                    "rawPattern": "* how * analgesic * (drink|use|eat) *",
                    "pattern": "^(.*)\\bhow\\b(.*)\\banalgesic\\b(.*)(\\bdrink\\b|\\buse\\b|\\beat\\b)(.*)$",
                    "index": 70
                },
                {
                    "rawPattern": "* ( not * (eat|drink|use) | avoid) * analgesic *",
                    "pattern": "^(.*)(\\bnot\\b(.*)(\\beat\\b|\\bdrink\\b|\\buse\\b)|\\bavoid\\b)(.*)\\banalgesic\\b(.*)$",
                    "index": 74
                },
                {
                    "rawPattern": "* how * (use|drink|eat) * decongestant *",
                    "pattern": "^(.*)\\bhow\\b(.*)(\\buse\\b|\\bdrink\\b|\\beat\\b)(.*)\\bdecongestant\\b(.*)$",
                    "index": 78
                },
                {
                    "rawPattern": "* how * decongestant * (use|drink|eat)  *",
                    "pattern": "^(.*)\\bhow\\b(.*)\\bdecongestant\\b(.*)(\\buse\\b|\\bdrink\\b|\\beat\\b)(.*)$",
                    "index": 78
                },
                {
                    "rawPattern": "* ( not * (eat|drink|use) | avoid) * decongestant *",
                    "pattern": "^(.*)(\\bnot\\b(.*)(\\beat\\b|\\bdrink\\b|\\buse\\b)|\\bavoid\\b)(.*)\\bdecongestant\\b(.*)$",
                    "index": 82
                },
                {
                    "rawPattern": "* how * (eat|use|drink) * expectorant*",
                    "pattern": "^(.*)\\bhow\\b(.*)(\\beat\\b|\\buse\\b|\\bdrink\\b)(.*)\\bexpectorant\\b(.*)$",
                    "index": 86
                },
                {
                    "rawPattern": "* how * expectorant * (eat|use|drink)  *",
                    "pattern": "^(.*)\\bhow\\b(.*)\\bexpectorant\\b(.*)(\\beat\\b|\\buse\\b|\\bdrink\\b)(.*)$",
                    "index": 86
                },
                {
                    "rawPattern": "* ( not * (eat|drink|use) | avoid) * expectorant*",
                    "pattern": "^(.*)(\\bnot\\b(.*)(\\beat\\b|\\bdrink\\b|\\buse\\b)|\\bavoid\\b)(.*)\\bexpectorant\\b(.*)$",
                    "index": 90
                },
                {
                    "rawPattern": "* ( not * (eat|drink|use) | avoid) * antitussive *",
                    "pattern": "^(.*)(\\bnot\\b(.*)(\\beat\\b|\\bdrink\\b|\\buse\\b)|\\bavoid\\b)(.*)\\bantitussive\\b(.*)$",
                    "index": 98
                },
                {
                    "rawPattern": "* ( not * (eat|drink|use) | avoid ) * lozenge*",
                    "pattern": "^(.*)(\\bnot\\b(.*)(\\beat\\b|\\bdrink\\b|\\buse\\b)|\\bavoid\\b)(.*)\\blozenge\\b(.*)$",
                    "index": 106
                },
                {
                    "rawPattern": "* where * (go|treat) * influenza *",
                    "pattern": "^(.*)\\bwhere\\b(.*)(\\bgo\\b|\\btreat\\b)(.*)\\binfluenza\\b(.*)$",
                    "index": 110
                },
                {
                    "rawPattern": "* (what|how|method) * (treat|remove|treat) *  nausea *",
                    "pattern": "^(.*)(\\bwhat\\b|\\bhow\\b|\\bmethod\\b)(.*)(\\btreat\\b|\\bremove\\b|\\btreat\\b)(.*)\\bnausea\\b(.*)$",
                    "index": 113
                },
                {
                    "rawPattern": "* (treat|remove|treat) * clog * nose *",
                    "pattern": "^(.*)(\\btreat\\b|\\bremove\\b|\\btreat\\b)(.*)\\bclog\\b(.*)\\bnose\\b(.*)$",
                    "index": 117
                },
                {
                    "rawPattern": "* (treat|remove|treat) *  sick * head *",
                    "pattern": "^(.*)(\\btreat\\b|\\bremove\\b|\\btreat\\b)(.*)\\bsick\\b(.*)\\bhead\\b(.*)$",
                    "index": 118
                },
                {
                    "rawPattern": "* (treat|remove|treat) *  stomach * cramp *",
                    "pattern": "^(.*)(\\btreat\\b|\\bremove\\b|\\btreat\\b)(.*)\\bstomach\\b(.*)\\bcramp\\b(.*)$",
                    "index": 119
                },
                {
                    "rawPattern": "* (treat|remove|treat) * sick * (stomach|stomach) *",
                    "pattern": "^(.*)(\\btreat\\b|\\bremove\\b|\\btreat\\b)(.*)\\bsick\\b(.*)(\\bstomach\\b|\\bstomach\\b)(.*)$",
                    "index": 119
                },
                {
                    "rawPattern": "* (treat|remove|treat) * sick * throat *",
                    "pattern": "^(.*)(\\btreat\\b|\\bremove\\b|\\btreat\\b)(.*)\\bsick\\b(.*)\\bthroat\\b(.*)$",
                    "index": 120
                },
                {
                    "rawPattern": "* guide * clean * kamay * ",
                    "pattern": "^(.*)\\bguide\\b(.*)\\bclean\\b(.*)\\bkamay\\b(.*)$",
                    "index": 122
                },
                {
                    "rawPattern": "* sweet * \bdiarrhea\b(?!_) *",
                    "pattern": "^(.*)\\bsweet\\b(.*)\b\\bdiarrhea\\b\b(?!\\b_\\b)(.*)$",
                    "index": 0
                },
                {
                    "rawPattern": "* allergy * \bdiarrhea\b(?!_) *",
                    "pattern": "^(.*)\\ballergy\\b(.*)\b\\bdiarrhea\\b\b(?!\\b_\\b)(.*)$",
                    "index": 1
                },
                {
                    "rawPattern": "* parasite * \bdiarrhea\b(?!_) *",
                    "pattern": "^(.*)\\bparasite\\b(.*)\b\\bdiarrhea\\b\b(?!\\b_\\b)(.*)$",
                    "index": 2
                },
                {
                    "rawPattern": "* bacteria * \bdiarrhea\b(?!_) *",
                    "pattern": "^(.*)\\bbacteria\\b(.*)\b\\bdiarrhea\\b\b(?!\\b_\\b)(.*)$",
                    "index": 3
                },
                {
                    "rawPattern": "* virus * \bdiarrhea\b(?!_) *",
                    "pattern": "^(.*)\\bvirus\\b(.*)\b\\bdiarrhea\\b\b(?!\\b_\\b)(.*)$",
                    "index": 4
                },
                {
                    "rawPattern": "* get * \bdiarrhea\b(?!_) *",
                    "pattern": "^(.*)\\bget\\b(.*)\b\\bdiarrhea\\b\b(?!\\b_\\b)(.*)$",
                    "index": 5
                },
                {
                    "rawPattern": "* (effect|reason|reason) * diarrhea*",
                    "pattern": "^(.*)(\\beffect\\b|\\breason\\b|\\breason\\b)(.*)\\bdiarrhea\\b(.*)$",
                    "index": 6
                },
                {
                    "rawPattern": "* treat * \bdiarrhea\b(?!_) * ",
                    "pattern": "^(.*)\\btreat\\b(.*)\b\\bdiarrhea\\b\b(?!\\b_\\b)(.*)$",
                    "index": 9
                },
                {
                    "rawPattern": "* treat * \bdiarrhea\b(?!_) * ",
                    "pattern": "^(.*)\\btreat\\b(.*)\b\\bdiarrhea\\b\b(?!\\b_\\b)(.*)$",
                    "index": 13
                },
                {
                    "rawPattern": "* peel * eat * ",
                    "pattern": "^(.*)\\bpeel\\b(.*)\\beat\\b(.*)$",
                    "index": 14
                },
                {
                    "rawPattern": "* diarrhea_foods_not_allowed_bad_hydration * diarrhea *",
                    "pattern": "^(.*)\\bdiarrhea_foods_not_allowed_bad_hydration\\b(.*)\\bdiarrhea\\b(.*)$",
                    "index": 18
                },
                {
                    "rawPattern": "* lactose * diarrhea *",
                    "pattern": "^(.*)\\blactose\\b(.*)\\bdiarrhea\\b(.*)$",
                    "index": 19
                },
                {
                    "rawPattern": "* diarrhea_foods_not_allowed_contains_lactose * diarrhea *",
                    "pattern": "^(.*)\\bdiarrhea_foods_not_allowed_contains_lactose\\b(.*)\\bdiarrhea\\b(.*)$",
                    "index": 19
                },
                {
                    "rawPattern": "* diarrhea_foods_not_allowed_irritate_stomach * diarrhea *",
                    "pattern": "^(.*)\\bdiarrhea_foods_not_allowed_irritate_stomach\\b(.*)\\bdiarrhea\\b(.*)$",
                    "index": 20
                },
                {
                    "rawPattern": "* diarrhea_foods_not_allowed_oily * diarrhea *",
                    "pattern": "^(.*)\\bdiarrhea_foods_not_allowed_oily\\b(.*)\\bdiarrhea\\b(.*)$",
                    "index": 21
                },
                {
                    "rawPattern": "* dose * antimotility *",
                    "pattern": "^(.*)\\bdose\\b(.*)\\bantimotility\\b(.*)$",
                    "index": 24
                },
                {
                    "rawPattern": "* guide * antimotility *",
                    "pattern": "^(.*)\\bguide\\b(.*)\\bantimotility\\b(.*)$",
                    "index": 24
                },
                {
                    "rawPattern": "* (eat|use|drink) * antimotility *",
                    "pattern": "^(.*)(\\beat\\b|\\buse\\b|\\bdrink\\b)(.*)\\bantimotility\\b(.*)$",
                    "index": 24
                },
                {
                    "rawPattern": "* antimotility * (use|eat|drink) *",
                    "pattern": "^(.*)\\bantimotility\\b(.*)(\\buse\\b|\\beat\\b|\\bdrink\\b)(.*)$",
                    "index": 24
                },
                {
                    "rawPattern": "* what * antimotility *",
                    "pattern": "^(.*)\\bwhat\\b(.*)\\bantimotility\\b(.*)$",
                    "index": 25
                },
                {
                    "rawPattern": "* use * antimotility *",
                    "pattern": "^(.*)\\buse\\b(.*)\\bantimotility\\b(.*)$",
                    "index": 26
                },
                {
                    "rawPattern": "* work * antimotility * ",
                    "pattern": "^(.*)\\bwork\\b(.*)\\bantimotility\\b(.*)$",
                    "index": 27
                },
                {
                    "rawPattern": "* antimotility * work * ",
                    "pattern": "^(.*)\\bantimotility\\b(.*)\\bwork\\b(.*)$",
                    "index": 27
                },
                {
                    "rawPattern": "* effect * antimotility  * ",
                    "pattern": "^(.*)\\beffect\\b(.*)\\bantimotility\\b(.*)$",
                    "index": 29
                },
                {
                    "rawPattern": "* tip * antimotility *",
                    "pattern": "^(.*)\\btip\\b(.*)\\bantimotility\\b(.*)$",
                    "index": 30
                },
                {
                    "rawPattern": "* alternative *  antimotility *",
                    "pattern": "^(.*)\\balternative\\b(.*)\\bantimotility\\b(.*)$",
                    "index": 31
                },
                {
                    "rawPattern": "* (guide|use|eat|drink|dose) * bismuth *",
                    "pattern": "^(.*)(\\bguide\\b|\\buse\\b|\\beat\\b|\\bdrink\\b|\\bdose\\b)(.*)\\bbismuth\\b(.*)$",
                    "index": 32
                },
                {
                    "rawPattern": "* bismuth * (guide|use|eat|drink|dose)  *",
                    "pattern": "^(.*)\\bbismuth\\b(.*)(\\bguide\\b|\\buse\\b|\\beat\\b|\\bdrink\\b|\\bdose\\b)(.*)$",
                    "index": 32
                },
                {
                    "rawPattern": "* use * bismuth *",
                    "pattern": "^(.*)\\buse\\b(.*)\\bbismuth\\b(.*)$",
                    "index": 34
                },
                {
                    "rawPattern": "* bismuth * work * ",
                    "pattern": "^(.*)\\bbismuth\\b(.*)\\bwork\\b(.*)$",
                    "index": 35
                },
                {
                    "rawPattern": "* work * bismuth * ",
                    "pattern": "^(.*)\\bwork\\b(.*)\\bbismuth\\b(.*)$",
                    "index": 35
                },
                {
                    "rawPattern": "* effect * bismuth * ",
                    "pattern": "^(.*)\\beffect\\b(.*)\\bbismuth\\b(.*)$",
                    "index": 37
                },
                {
                    "rawPattern": "* tip *bismuth *",
                    "pattern": "^(.*)\\btip\\b(.*)\\bbismuth\\b(.*)$",
                    "index": 38
                },
                {
                    "rawPattern": "* alternative * bismuth *",
                    "pattern": "^(.*)\\balternative\\b(.*)\\bbismuth\\b(.*)$",
                    "index": 39
                },
                {
                    "rawPattern": "* diarrhea * symptom *",
                    "pattern": "^(.*)\\bdiarrhea\\b(.*)\\bsymptom\\b(.*)$",
                    "index": 41
                },
                {
                    "rawPattern": "* (symptom|tell) * diarrhea * ",
                    "pattern": "^(.*)(\\bsymptom\\b|\\btell\\b)(.*)\\bdiarrhea\\b(.*)$",
                    "index": 41
                },
                {
                    "rawPattern": "* virus * influenza *",
                    "pattern": "^(.*)\\bvirus\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 42
                },
                {
                    "rawPattern": "* get * influenza *",
                    "pattern": "^(.*)\\bget\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 43
                },
                {
                    "rawPattern": "* get * influenza * ",
                    "pattern": "^(.*)\\bget\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 44
                },
                {
                    "rawPattern": "* rest * influenza *",
                    "pattern": "^(.*)\\brest\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 45
                },
                {
                    "rawPattern": "* drug * influenza *",
                    "pattern": "^(.*)\\bdrug\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 49
                },
                {
                    "rawPattern": "* influenza * drug*",
                    "pattern": "^(.*)\\binfluenza\\b(.*)\\bdrug\\b(.*)$",
                    "index": 49
                },
                {
                    "rawPattern": "* vaccine * influenza *",
                    "pattern": "^(.*)\\bvaccine\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 50
                },
                {
                    "rawPattern": "* lumayo * influenza influenza *",
                    "pattern": "^(.*)\\blumayo\\b(.*)\\binfluenzainfluenza\\b(.*)$",
                    "index": 51
                },
                {
                    "rawPattern": "* (use|wear|condition) * mask * ",
                    "pattern": "^(.*)(\\buse\\b|\\bwear\\b|\\bcondition\\b)(.*)\\bmask\\b(.*)$",
                    "index": 54
                },
                {
                    "rawPattern": "* avoid * influenza * ",
                    "pattern": "^(.*)\\bavoid\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 55
                },
                {
                    "rawPattern": "* influenza_foods_not_allowed_greasy_foods * influenza *",
                    "pattern": "^(.*)\\binfluenza_foods_not_allowed_greasy_foods\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 57
                },
                {
                    "rawPattern": "* influenza_foods_not_allowed_sugary_foods * influenza *",
                    "pattern": "^(.*)\\binfluenza_foods_not_allowed_sugary_foods\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 58
                },
                {
                    "rawPattern": "* dose * antihistamine *",
                    "pattern": "^(.*)\\bdose\\b(.*)\\bantihistamine\\b(.*)$",
                    "index": 62
                },
                {
                    "rawPattern": "* guide * antihistamine *",
                    "pattern": "^(.*)\\bguide\\b(.*)\\bantihistamine\\b(.*)$",
                    "index": 62
                },
                {
                    "rawPattern": "* use * antihistamine *",
                    "pattern": "^(.*)\\buse\\b(.*)\\bantihistamine\\b(.*)$",
                    "index": 64
                },
                {
                    "rawPattern": "* antihistamine * work *",
                    "pattern": "^(.*)\\bantihistamine\\b(.*)\\bwork\\b(.*)$",
                    "index": 65
                },
                {
                    "rawPattern": "* effect * antihistamine * ",
                    "pattern": "^(.*)\\beffect\\b(.*)\\bantihistamine\\b(.*)$",
                    "index": 67
                },
                {
                    "rawPattern": "* tip * antihistamine *",
                    "pattern": "^(.*)\\btip\\b(.*)\\bantihistamine\\b(.*)$",
                    "index": 68
                },
                {
                    "rawPattern": "* alternative * antihistamine *",
                    "pattern": "^(.*)\\balternative\\b(.*)\\bantihistamine\\b(.*)$",
                    "index": 69
                },
                {
                    "rawPattern": "* (guide|dose) * analgesic *",
                    "pattern": "^(.*)(\\bguide\\b|\\bdose\\b)(.*)\\banalgesic\\b(.*)$",
                    "index": 70
                },
                {
                    "rawPattern": "* use * analgesic *",
                    "pattern": "^(.*)\\buse\\b(.*)\\banalgesic\\b(.*)$",
                    "index": 72
                },
                {
                    "rawPattern": "* analgesic * treat *",
                    "pattern": "^(.*)\\banalgesic\\b(.*)\\btreat\\b(.*)$",
                    "index": 73
                },
                {
                    "rawPattern": "* treat * analgesic *",
                    "pattern": "^(.*)\\btreat\\b(.*)\\banalgesic\\b(.*)$",
                    "index": 73
                },
                {
                    "rawPattern": "* effect * analgesic * ",
                    "pattern": "^(.*)\\beffect\\b(.*)\\banalgesic\\b(.*)$",
                    "index": 75
                },
                {
                    "rawPattern": "* tip * analgesic *",
                    "pattern": "^(.*)\\btip\\b(.*)\\banalgesic\\b(.*)$",
                    "index": 76
                },
                {
                    "rawPattern": "* alternative * analgesic *",
                    "pattern": "^(.*)\\balternative\\b(.*)\\banalgesic\\b(.*)$",
                    "index": 77
                },
                {
                    "rawPattern": "* dose * decongestant *",
                    "pattern": "^(.*)\\bdose\\b(.*)\\bdecongestant\\b(.*)$",
                    "index": 78
                },
                {
                    "rawPattern": "* guide * decongestant *",
                    "pattern": "^(.*)\\bguide\\b(.*)\\bdecongestant\\b(.*)$",
                    "index": 78
                },
                {
                    "rawPattern": "* use * decongestant *",
                    "pattern": "^(.*)\\buse\\b(.*)\\bdecongestant\\b(.*)$",
                    "index": 80
                },
                {
                    "rawPattern": "* work * decongestant *",
                    "pattern": "^(.*)\\bwork\\b(.*)\\bdecongestant\\b(.*)$",
                    "index": 81
                },
                {
                    "rawPattern": "* decongestant * (work|treat) *",
                    "pattern": "^(.*)\\bdecongestant\\b(.*)(\\bwork\\b|\\btreat\\b)(.*)$",
                    "index": 81
                },
                {
                    "rawPattern": "* effect * decongestant * ",
                    "pattern": "^(.*)\\beffect\\b(.*)\\bdecongestant\\b(.*)$",
                    "index": 83
                },
                {
                    "rawPattern": "* tip * decongestant *",
                    "pattern": "^(.*)\\btip\\b(.*)\\bdecongestant\\b(.*)$",
                    "index": 84
                },
                {
                    "rawPattern": "* alternative * decongestant *",
                    "pattern": "^(.*)\\balternative\\b(.*)\\bdecongestant\\b(.*)$",
                    "index": 85
                },
                {
                    "rawPattern": "* dose * expectorant*",
                    "pattern": "^(.*)\\bdose\\b(.*)\\bexpectorant\\b(.*)$",
                    "index": 86
                },
                {
                    "rawPattern": "* guide * expectorant*",
                    "pattern": "^(.*)\\bguide\\b(.*)\\bexpectorant\\b(.*)$",
                    "index": 86
                },
                {
                    "rawPattern": "* use * expectorant*",
                    "pattern": "^(.*)\\buse\\b(.*)\\bexpectorant\\b(.*)$",
                    "index": 88
                },
                {
                    "rawPattern": "* work * expectorant* ",
                    "pattern": "^(.*)\\bwork\\b(.*)\\bexpectorant\\b(.*)$",
                    "index": 89
                },
                {
                    "rawPattern": "* expectorant* (work|treat) * ",
                    "pattern": "^(.*)\\bexpectorant\\b(.*)(\\bwork\\b|\\btreat\\b)(.*)$",
                    "index": 89
                },
                {
                    "rawPattern": "* effect * expectorant* ",
                    "pattern": "^(.*)\\beffect\\b(.*)\\bexpectorant\\b(.*)$",
                    "index": 91
                },
                {
                    "rawPattern": "* tip * expectorant*",
                    "pattern": "^(.*)\\btip\\b(.*)\\bexpectorant\\b(.*)$",
                    "index": 92
                },
                {
                    "rawPattern": "* alternative * expectorant*",
                    "pattern": "^(.*)\\balternative\\b(.*)\\bexpectorant\\b(.*)$",
                    "index": 93
                },
                {
                    "rawPattern": "* (dose|guide|drink|use|eat) * antitussive  *",
                    "pattern": "^(.*)(\\bdose\\b|\\bguide\\b|\\bdrink\\b|\\buse\\b|\\beat\\b)(.*)\\bantitussive\\b(.*)$",
                    "index": 94
                },
                {
                    "rawPattern": "* what * antitussive  *",
                    "pattern": "^(.*)\\bwhat\\b(.*)\\bantitussive\\b(.*)$",
                    "index": 95
                },
                {
                    "rawPattern": "* use * antitussive *",
                    "pattern": "^(.*)\\buse\\b(.*)\\bantitussive\\b(.*)$",
                    "index": 96
                },
                {
                    "rawPattern": "* antitussive * (work|treat) *",
                    "pattern": "^(.*)\\bantitussive\\b(.*)(\\bwork\\b|\\btreat\\b)(.*)$",
                    "index": 97
                },
                {
                    "rawPattern": "* effect * antitussive  *",
                    "pattern": "^(.*)\\beffect\\b(.*)\\bantitussive\\b(.*)$",
                    "index": 99
                },
                {
                    "rawPattern": "* tip * antitussive  *",
                    "pattern": "^(.*)\\btip\\b(.*)\\bantitussive\\b(.*)$",
                    "index": 100
                },
                {
                    "rawPattern": "* alternative * antitussive  *",
                    "pattern": "^(.*)\\balternative\\b(.*)\\bantitussive\\b(.*)$",
                    "index": 101
                },
                {
                    "rawPattern": "* (guide|dose|drink|use|eat) * lozenge*",
                    "pattern": "^(.*)(\\bguide\\b|\\bdose\\b|\\bdrink\\b|\\buse\\b|\\beat\\b)(.*)\\blozenge\\b(.*)$",
                    "index": 102
                },
                {
                    "rawPattern": "* lozenge* (guide|dose|drink|use|eat)  *",
                    "pattern": "^(.*)\\blozenge\\b(.*)(\\bguide\\b|\\bdose\\b|\\bdrink\\b|\\buse\\b|\\beat\\b)(.*)$",
                    "index": 102
                },
                {
                    "rawPattern": "* use * lozenge*",
                    "pattern": "^(.*)\\buse\\b(.*)\\blozenge\\b(.*)$",
                    "index": 104
                },
                {
                    "rawPattern": "* lozenge * treat *",
                    "pattern": "^(.*)\\blozenge\\b(.*)\\btreat\\b(.*)$",
                    "index": 105
                },
                {
                    "rawPattern": "* work * lozenge*",
                    "pattern": "^(.*)\\bwork\\b(.*)\\blozenge\\b(.*)$",
                    "index": 105
                },
                {
                    "rawPattern": "* lozenge * work *",
                    "pattern": "^(.*)\\blozenge\\b(.*)\\bwork\\b(.*)$",
                    "index": 105
                },
                {
                    "rawPattern": "* effect * lozenge*",
                    "pattern": "^(.*)\\beffect\\b(.*)\\blozenge\\b(.*)$",
                    "index": 107
                },
                {
                    "rawPattern": "* tip * lozenge*",
                    "pattern": "^(.*)\\btip\\b(.*)\\blozenge\\b(.*)$",
                    "index": 108
                },
                {
                    "rawPattern": "* alternative * lozenge*",
                    "pattern": "^(.*)\\balternative\\b(.*)\\blozenge\\b(.*)$",
                    "index": 109
                },
                {
                    "rawPattern": "* symptom * influenza * ",
                    "pattern": "^(.*)\\bsymptom\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 111
                },
                {
                    "rawPattern": "* tell * influenza *",
                    "pattern": "^(.*)\\btell\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 111
                },
                {
                    "rawPattern": "* (treat|remove|treat) * vomit *",
                    "pattern": "^(.*)(\\btreat\\b|\\bremove\\b|\\btreat\\b)(.*)\\bvomit\\b(.*)$",
                    "index": 112
                },
                {
                    "rawPattern": "* (eat|drink|bilhin) * vomit * ",
                    "pattern": "^(.*)(\\beat\\b|\\bdrink\\b|\\bbilhin\\b)(.*)\\bvomit\\b(.*)$",
                    "index": 112
                },
                {
                    "rawPattern": "* (treat|remove|treat) * nausea *",
                    "pattern": "^(.*)(\\btreat\\b|\\bremove\\b|\\btreat\\b)(.*)\\bnausea\\b(.*)$",
                    "index": 113
                },
                {
                    "rawPattern": "* boil * water * ",
                    "pattern": "^(.*)\\bboil\\b(.*)\\bwater\\b(.*)$",
                    "index": 114
                },
                {
                    "rawPattern": "* guide * clean *",
                    "pattern": "^(.*)\\bguide\\b(.*)\\bclean\\b(.*)$",
                    "index": 115
                },
                {
                    "rawPattern": "* clean * water *",
                    "pattern": "^(.*)\\bclean\\b(.*)\\bwater\\b(.*)$",
                    "index": 115
                },
                {
                    "rawPattern": "* (treat|remove|treat) * (fever|fever) * ",
                    "pattern": "^(.*)(\\btreat\\b|\\bremove\\b|\\btreat\\b)(.*)(\\bfever\\b|\\bfever\\b)(.*)$",
                    "index": 116
                },
                {
                    "rawPattern": "* wear * sneeze *",
                    "pattern": "^(.*)\\bwear\\b(.*)\\bsneeze\\b(.*)$",
                    "index": 121
                },
                {
                    "rawPattern": "* clean * kamay * ",
                    "pattern": "^(.*)\\bclean\\b(.*)\\bkamay\\b(.*)$",
                    "index": 122
                },
                {
                    "rawPattern": "* clean * kamay * ",
                    "pattern": "^(.*)\\bclean\\b(.*)\\bkamay\\b(.*)$",
                    "index": 122
                },
                {
                    "rawPattern": "*sick*head*",
                    "pattern": "^(.*)\\bsick\\b(.*)\\bhead\\b(.*)$",
                    "index": 138
                },
                {
                    "rawPattern": "*stomach * cramp *",
                    "pattern": "^(.*)\\bstomach\\b(.*)\\bcramp\\b(.*)$",
                    "index": 139
                },
                {
                    "rawPattern": "*clog*nose*",
                    "pattern": "^(.*)\\bclog\\b(.*)\\bnose\\b(.*)$",
                    "index": 140
                },
                {
                    "rawPattern": "*clog*nose*",
                    "pattern": "^(.*)\\bclog\\b(.*)\\bnose\\b(.*)$",
                    "index": 140
                },
                {
                    "rawPattern": "* lactose *",
                    "pattern": "^(.*)\\blactose\\b(.*)$",
                    "index": 19
                },
                {
                    "rawPattern": "*diarrhea_foods_not_allowed_contains_lactose*",
                    "pattern": "^(.*)\\bdiarrhea_foods_not_allowed_contains_lactose\\b(.*)$",
                    "index": 19
                },
                {
                    "rawPattern": "* diarrhea_foods_not_allowed_irritate_stomach *",
                    "pattern": "^(.*)\\bdiarrhea_foods_not_allowed_irritate_stomach\\b(.*)$",
                    "index": 20
                },
                {
                    "rawPattern": "* diarrhea_foods_not_allowed_oily *",
                    "pattern": "^(.*)\\bdiarrhea_foods_not_allowed_oily\\b(.*)$",
                    "index": 21
                },
                {
                    "rawPattern": "* bismuth *",
                    "pattern": "^(.*)\\bbismuth\\b(.*)$",
                    "index": 33
                },
                {
                    "rawPattern": "* influenza_foods_not_allowed_greasy_foods * ",
                    "pattern": "^(.*)\\binfluenza_foods_not_allowed_greasy_foods\\b(.*)$",
                    "index": 57
                },
                {
                    "rawPattern": "* influenza_foods_not_allowed_sugary_foods * ",
                    "pattern": "^(.*)\\binfluenza_foods_not_allowed_sugary_foods\\b(.*)$",
                    "index": 58
                },
                {
                    "rawPattern": "* antihistamine *",
                    "pattern": "^(.*)\\bantihistamine\\b(.*)$",
                    "index": 63
                },
                {
                    "rawPattern": "* analgesic *",
                    "pattern": "^(.*)\\banalgesic\\b(.*)$",
                    "index": 71
                },
                {
                    "rawPattern": "* decongestant *",
                    "pattern": "^(.*)\\bdecongestant\\b(.*)$",
                    "index": 79
                },
                {
                    "rawPattern": "* expectorant*",
                    "pattern": "^(.*)\\bexpectorant\\b(.*)$",
                    "index": 87
                },
                {
                    "rawPattern": "* lozenge*",
                    "pattern": "^(.*)\\blozenge\\b(.*)$",
                    "index": 103
                },
                {
                    "rawPattern": "* boil * ",
                    "pattern": "^(.*)\\bboil\\b(.*)$",
                    "index": 114
                },
                {
                    "rawPattern": "* (symptom|symptom|symptom) *",
                    "pattern": "^(.*)(\\bsymptom\\b|\\bsymptom\\b|\\bsymptom\\b)(.*)$",
                    "index": 123
                },
                {
                    "rawPattern": "* (hi|hello) *",
                    "pattern": "^(.*)(\\bhi\\b|\\bhello\\b)(.*)$",
                    "index": 124
                },
                {
                    "rawPattern": "* (good)? (umaga|gabi|tanghali) *",
                    "pattern": "^(.*)(\\bgood\\b)?(\\bumaga\\b|\\bgabi\\b|\\btanghali\\b)(.*)$",
                    "index": 124
                },
                {
                    "rawPattern": "* kamusta *",
                    "pattern": "^(.*)\\bkamusta\\b(.*)$",
                    "index": 124
                },
                {
                    "rawPattern": "* antimotility *",
                    "pattern": "^(.*)\\bantimotility\\b(.*)$",
                    "index": 125
                },
                {
                    "rawPattern": "*bismuth*",
                    "pattern": "^(.*)\\bbismuth\\b(.*)$",
                    "index": 126
                },
                {
                    "rawPattern": "* antihistamine *",
                    "pattern": "^(.*)\\bantihistamine\\b(.*)$",
                    "index": 127
                },
                {
                    "rawPattern": "* analgesic *",
                    "pattern": "^(.*)\\banalgesic\\b(.*)$",
                    "index": 128
                },
                {
                    "rawPattern": "* nsaid *",
                    "pattern": "^(.*)\\bnsaid\\b(.*)$",
                    "index": 129
                },
                {
                    "rawPattern": "* decongestant *",
                    "pattern": "^(.*)\\bdecongestant\\b(.*)$",
                    "index": 130
                },
                {
                    "rawPattern": "* expectorant *",
                    "pattern": "^(.*)\\bexpectorant\\b(.*)$",
                    "index": 131
                },
                {
                    "rawPattern": "* antitussive *",
                    "pattern": "^(.*)\\bantitussive\\b(.*)$",
                    "index": 132
                },
                {
                    "rawPattern": "* lozenge *",
                    "pattern": "^(.*)\\blozenge\\b(.*)$",
                    "index": 133
                },
                {
                    "rawPattern": "* (treat|treat) *",
                    "pattern": "^(.*)(\\btreat\\b|\\btreat\\b)(.*)$",
                    "index": 134
                },
                {
                    "rawPattern": "* diarrhea *",
                    "pattern": "^(.*)\\bdiarrhea\\b(.*)$",
                    "index": 135
                },
                {
                    "rawPattern": "* influenza *",
                    "pattern": "^(.*)\\binfluenza\\b(.*)$",
                    "index": 136
                },
                {
                    "rawPattern": "*vomit*",
                    "pattern": "^(.*)\\bvomit\\b(.*)$",
                    "index": 137
                },
                {
                    "rawPattern": "*headache*",
                    "pattern": "^(.*)\\bheadache\\b(.*)$",
                    "index": 138
                },
                {
                    "rawPattern": "*head*",
                    "pattern": "^(.*)\\bhead\\b(.*)$",
                    "index": 138
                },
                {
                    "rawPattern": "* cramp *",
                    "pattern": "^(.*)\\bcramp\\b(.*)$",
                    "index": 139
                },
                {
                    "rawPattern": "* stomach *",
                    "pattern": "^(.*)\\bstomach\\b(.*)$",
                    "index": 139
                },
                {
                    "rawPattern": "*nose*",
                    "pattern": "^(.*)\\bnose\\b(.*)$",
                    "index": 140
                },
                {
                    "rawPattern": "*nausea*",
                    "pattern": "^(.*)\\bnausea\\b(.*)$",
                    "index": 141
                },
                {
                    "rawPattern": "*fever*",
                    "pattern": "^(.*)\\bfever\\b(.*)$",
                    "index": 142
                },
                {
                    "rawPattern": "*",
                    "pattern": "^(.*)$",
                    "index": 143
                }
            ],
            "memory": [
                {
                    "rawPattern": [
                        "* sweet * \bdiarrhea\b(?!_) *"
                    ],
                    "patterns": [
                        "* sweet * \bdiarrhea\b(?!_) *"
                    ],
                    "response": [
                        "Ang mga matamis ay maaaring mag-trigger ng pagtatae dahil sa kanilang kakayahang lumikha ng isang osmotic na epekto sa mga bituka, kumukuha ng tubig mula sa katawan patungo sa digestive tract, at dahil din sa kanilang kakayahang pasiglahin ang paggawa ng mga digestive enzymes at dagdagan ang paggalaw ng bituka, na humahantong sa hindi kumpletong pagsipsip ng sustansya at tubig.\n        \n        Gayundin, kung minsan ang mga matatamis ay hindi masyadong nasisipsip ng katawan at maaaring mag-ferment sa bituka, na nagiging sanhi ng gas, bloating at pagtatae sa mga madaling kapitan. Halimbawa, ang mga taong lactose-intolerant ay kulang sa enzyme lactase, na kinakailangan upang masira ang lactose sa gatas at mga produkto ng pagawaan ng gatas. Kung ang lactose ay hindi nasira nang maayos, maaari itong maging sanhi ng pagtatae"
                    ],
                    "index": 0
                },
                {
                    "rawPattern": [
                        "* allergy * \bdiarrhea\b(?!_) *"
                    ],
                    "patterns": [
                        "* allergy * \bdiarrhea\b(?!_) *"
                    ],
                    "response": [
                        "Ang mga allergy ay maaaring mag-trigger ng pagtatae bilang resulta ng immune response ng katawan sa isang allergen. Kapag may nakitang allergen, ang immune system ay naglalabas ng histamine at iba pang mga kemikal na maaaring magdulot ng pamamaga at pangangati sa bituka. \n        \n        Ang pamamaga na ito ay maaaring humantong sa pagtaas ng paggalaw ng bituka, pagbawas ng pagsipsip ng tubig, at ang pagtatago ng labis na likido sa mga bituka, na nagreresulta sa pagtatae."
                    ],
                    "index": 1
                },
                {
                    "rawPattern": [
                        "* parasite * \bdiarrhea\b(?!_) *"
                    ],
                    "patterns": [
                        "* parasite * \bdiarrhea\b(?!_) *"
                    ],
                    "response": [
                        "Ang parasites ay maaaring dumikit as bituka na nagdudulot ng pinsala at naglalabas ng mga lason na maaaring mag-trigger ng immune response at pamamaga. Ang pamamaga na ito ay maaaring humantong sa mas madalas na paggalaw ng bituka, pagbawas ng pagsipsip ng tubig, at labis na pagkaubos ng likido ng katawan na nagreresulta sa pagtatae. At saka, ang ilang mga parasito ay maaaring gumawa ng mga enzyme na nakakasagabal sa pagsipsip ng mga sustansya na humahantong sa malabsorption at pagtatae.\n        "
                    ],
                    "index": 2
                },
                {
                    "rawPattern": [
                        "* bacteria * \bdiarrhea\b(?!_) *"
                    ],
                    "patterns": [
                        "* bacteria * \bdiarrhea\b(?!_) *"
                    ],
                    "response": [
                        "Ang mga impeksyon dulot ng bakterya ay maaaring magdulot ng pagtatae dahil sa ito ay nakakalason. Ito ay pumipinsala sa bituka, na nagiging sanhi ng pamamaga at pangangati. At saka ang mga bakterya ay nag tritrigger sa paglabas ng tubig sa katawan ng dahil sa pagtatae. Ang mga bakterya nag naglalabas ng mga enzymes na nakakaapekto sa kakayahan ng bituka na sumipsip ng nutrisyon at tubig na pwedeng humantong sa malabsorption."
                    ],
                    "index": 3
                },
                {
                    "rawPattern": [
                        "* virus * \bdiarrhea\b(?!_) *"
                    ],
                    "patterns": [
                        "* virus * \bdiarrhea\b(?!_) *"
                    ],
                    "response": [
                        "Ang mga impeksyong dulot ng mga virus ay maaaring humantong sa pinsala sa lining ng bituka, na maaaring magpababa sa kakayahan ng iyong katawan na sumipsip ng tubig at nutrients. Ang mga virus ay maaaring magagpapalabas sa katawan ng mga kemikal na nagpapataas ng motility ng bituka, na hahantong sa pagtatae. \n        \n        Mayroong iba't ibang mga virus na maaaring magdulot ng pagtatae, kabilang ang mga norovirus, rotavirus at adenovirus na madaling kumalat sa pamamagitan ng kontaminadong pagkain o tubig; malapit na pakikipag-ugnayan sa isang taong nahawahan.\n        "
                    ],
                    "index": 4
                },
                {
                    "rawPattern": [
                        "* get * \bdiarrhea\b(?!_) *"
                    ],
                    "patterns": [
                        "* get * \bdiarrhea\b(?!_) *"
                    ],
                    "response": [
                        "Maraming bagay bagay na nag dudulot ng diarrhea o magtaetae. Halimbawa nito ay kapag mahina ang iyong resistnensya at may problema ka sa bituka. Maari ding epekto ito ng gamot na kinain mo.  Pero madalas talaga, ang sanhi ng pagtatae ay pagkain. Iyong ibang mga tao may mga food allergy o bawal kumain ng mga natatanging pagkain. Iyong iba naman hindi kayang tunawing ang pagkaing may gatas, sorbitol, pampatamis, at fructose na madalas nakikita sa mga pinoprosesong pagkain."
                    ],
                    "index": 5
                },
                {
                    "rawPattern": [
                        "* (effect|reason|reason) * diarrhea*"
                    ],
                    "patterns": [
                        "* (effect|reason|reason) * diarrhea*"
                    ],
                    "response": [
                        "\n        Ang kontaminasyon ng pagkain at tubig, halimbawa ay ang mga pagkain na hindi maayos na inihanda o pinangangasiwaan, ay maaaring magdulot ng pagtatae.\n\n        At saka, ang ilang mga gamot tulad ng mga antibiotic ay maaaring baguhin ang balanse ng bakterya sa iyong digestive tract at humantong sa mga gastrointestinal disorder.\n        \n        Ang stress, mga pagbabago sa dieta at mga ibang kondisyon ng katawan ay maaari ding mag-resulta sa pagkakaroon ng pagtatae. Ang panganib na magkaroon ng pagtatae ay maaaring mabawasan sa pamamagitan ng madalas na paglinis tulad ng ng madalas na paghuhugas ng kamay at ligtas na paghawak ng pagkain."
                    ],
                    "index": 6
                },
                {
                    "rawPattern": [
                        "* (water|hydrate) * treat * \bdiarrhea\b(?!_) * "
                    ],
                    "patterns": [
                        "* (water|hydrate) * treat * \bdiarrhea\b(?!_) * "
                    ],
                    "response": [
                        "\n        Ang pananatiling hydrated ay mahalaga dahil ang pagtatae ay maaaring humantong sa pagkaubos sa likido ng katawan. Ang pagtatae ay nagiging sanhi ng pagkawala ng tubig at mga electrolyte ng katawan, tulad ng sodium at potassium, na mahalaga para sa normal na paggana ng katawan. \n        \n        Kaya, ang taong nagtatae ay pinapayuhang uminom ng maraming likido, tulad ng tubig, buko juice, am, arrozcaldo, soup, sports drink, sabaw, at oral rehydration solution, ay maaaring palitan ang mga nawawalang likido at electrolyte at maiwasan ang dehydration. Inirerekomenda din na iwasan ang mga inumin na maaaring higit pang makairita sa tiyan, tulad ng alkohol, caffeine, at matamis na inumin.\n       \n        Ang wastong hydration sa panahon ng pagtatae ay makakatulong na mapawi ang mga sintomas at maiwasan ang mga komplikasyon na maaaring magmula sa dehydration.\n        "
                    ],
                    "index": 7
                },
                {
                    "rawPattern": [
                        "* zinc * treat * \bdiarrhea\b(?!_) *"
                    ],
                    "patterns": [
                        "* zinc * treat * \bdiarrhea\b(?!_) *"
                    ],
                    "response": [
                        "Ang zinc ay nakakabawas ng tagal at kalubhaan ng pagtatae at posibilidad ng kasunod na impeksyon. Maaari rin itong makatulong na mapanatili ang balanse ng mga likido at electrolyte, na maaaring maabala kapag nagkakaroon ng pagtatae. Bukod dito, ang zinc ay maaari ding makatulong sa pagpapanumbalik ng malusog na flora ng bituka. Gayunpaman, dahil ang labis na paggamit nito ay maaaring makapinsala, ipinapayong lahat ng mga suplemento ay dapat talakayin sa isang propesyonal sa pangangalagang pangkalusugan bago gamitin.\n        "
                    ],
                    "index": 8
                },
                {
                    "rawPattern": [
                        "* treat * \bdiarrhea\b(?!_) * "
                    ],
                    "patterns": [
                        "* treat * \bdiarrhea\b(?!_) * "
                    ],
                    "response": [
                        "Ang paggamot sa pagtatae ay depende sa dahilan. Para sa mga hindi malalang kaso, maaaring makatulong ang mga over the counter na mga gamot tulad ng loperamide o bismuth subsicylate. Gayunpaman, ang pag-inom ng maraming likido tulad ng tubig, sabaw, sopas, inuming pampalakasan, tubig ng niyog, mga solusyon sa oral rehydration at pag-iwas sa mga inumin na maaaring magpalubha ng tiyan, tulad ng alchohol, ay dapat isaalang-alang. Kailangan mong manatiling hydrated. Kung nagpapatuloy ang mga sintomas, mahalagang magpatingin sa iyong doktor para sa tamang diagnosis at paggamot.\n        "
                    ],
                    "index": 9
                },
                {
                    "rawPattern": [
                        "* treat * \bdiarrhea\b(?!_) * where * ",
                        "* where * treat * \bdiarrhea\b(?!_) * "
                    ],
                    "patterns": [
                        "* treat * \bdiarrhea\b(?!_) * where * ",
                        "* where * treat * \bdiarrhea\b(?!_) * "
                    ],
                    "response": [
                        "Depende sa kalubhaan ng mga sintomas, ang paggamot na may pagtatae ay maaaring gawin sa bahay o sa isang pasilidad ng pangangalagang pangkalusugan. Ang pahinga, hydration at dietary modification ay karaniwang ang pinaka-epektibong paraan upang gamutin ang mga banayad na kaso ng pagtatae. \n        \n        Ang mga sintomas ay maaari ding mapawi sa pamamagitan ng paggamit ng mga over the counter na mga produktong panggamot tulad ng loperamide at bismuth subsicylate. \n        \n        Ngunit ang agarang paggamot ay dapat na simulan kung ang pagtatae ay malubha o sinamahan ng anumang iba pang mga sintomas, kabilang ang lagnat, pag-aalis ng tubig at dugo sa dumi. Gayundin kung ang pagtatae ay nagpapatuloy ng higit sa 48 oras, dalhin ang pasyente sa isang pasilidad ng pangangalagang pangkalusugan. Pumunta sa pinakamalapit na barangay health center\n        ."
                    ],
                    "index": 10
                },
                {
                    "rawPattern": [
                        "* treat * blood * (diarrhea|diarrhea) *",
                        "* blood * (diarrhea|diarrhea) * work *"
                    ],
                    "patterns": [
                        "* treat * blood * (diarrhea|diarrhea) *",
                        "* blood * (diarrhea|diarrhea) * work *"
                    ],
                    "response": [
                        "Mahalagang humingi kaagad ng propesyonal na payo kung may napansin kang dugo sa iyong pagtatae. Maaaring ito ay isang senyales ng matinding karamdaman, halimbawa, pamamaga ng bituka, impeksyon o iba pang mga digestive disorder. Huwag uminom ng mga gamot na nasa counter gaya ng mga antimotility agent tulad ng loperamide imodium at pepto bismol. Panatilihing uminom palagi ng tubig. Upang magamot ang pinagbabatayan ng sanhi ng madugong pagtatae, maaaring magrekomenda ang iyong doktor ng pagsusuri at pagrereseta ng mga produktong panggamot.\n        "
                    ],
                    "index": 11
                },
                {
                    "rawPattern": [
                        "* treat * \bdiarrhea\b(?!_) * fever * ",
                        "* treat * fever * \bdiarrhea\b(?!_) * "
                    ],
                    "patterns": [
                        "* treat * \bdiarrhea\b(?!_) * fever * ",
                        "* treat * fever * \bdiarrhea\b(?!_) * "
                    ],
                    "response": [
                        "Kung ikaw ay nilalagnat, maglagay ng basa at mainit init na tela sa iyong noo. Mag suot din ng komportableng damit. Kung ikaw naman ay nanginging ay mag damit ka ng marami. Tapos mag pahinga ka, kailangan mo yan.\n\n        Kapag nagtatae ka din, ay uminom ka ng maraming tubig o di kaya iyong mga sabaw, sports drinks, tubig na galing sa nyog, oral rehydration solutions at umiwas ka sa mga inuming nakakakati ng bituka tulad ng alchohol.\n\n        Pwede ka din gumamit ng antimotility o bismuth subsalicylate. Ngunit wag mo iyon gamitin kung ikaw ay nilalagat.\n\n        Kapag hindi parin mawala ang iyong sakit ay magpatingin kana sa doktor.\n        "
                    ],
                    "index": 12
                },
                {
                    "rawPattern": [
                        "* treat * \bdiarrhea\b(?!_) * ",
                        "* \bdiarrhea\b(?!_) * treat * what * "
                    ],
                    "patterns": [
                        "* treat * \bdiarrhea\b(?!_) * ",
                        "* \bdiarrhea\b(?!_) * treat * what * "
                    ],
                    "response": [
                        "\n        Ang paggamot sa pagtatae ay depende sa dahilan. Para sa mga hindi malalang kaso, maaaring makatulong ang mga over the counter na mga gamot tulad ng loperamide o bismuth subsicylate.Ngunit, huwag kang gumamit nito kung ikaw ay nilalagnat o nagdudugo ang iyong pagtatae. \n        \n        Gayunpaman, ang pag-inom ng maraming likido tulad ng tubig, sabaw, sopas, inuming pampalakasan, tubig ng niyog, mga solusyon sa oral rehydration at pag-iwas sa mga inumin na maaaring magpalubha ng tiyan, tulad ng alchohol, ay dapat isaalang-alang. Kailangan mong manatiling hydrated. Kung nagpapatuloy ang mga sintomas, mahalagang magpatingin sa iyong doktor para sa tamang diagnosis at paggamot.\n        \n        Kapag ang iyong pagtatae ay tumagal ng dalawang araw ay pinapapayuhan kang mag patingin kaagad sa doctor.\n        "
                    ],
                    "index": 13
                },
                {
                    "rawPattern": [
                        "* peel * eat * ",
                        "* not * eat * not * peel * eat * "
                    ],
                    "patterns": [
                        "* peel * eat * ",
                        "* not * eat * not * peel * eat * "
                    ],
                    "response": [
                        "Upang maiwasan ang pagtatae, inirerekumenda na balatan ang mga prutas bago kainin dahil ito ay maaaring naglalaman ng mga nakakapinsalang bakterya, parasito at mga virus na maaaring magdulot ng mga impeksiyon. As saka, ang panganib ng kontaminasyon ay maaaring mas mababawasan sa pamamagitan ng maingat na paghuhugas ng mga prutas ng malinaw na tubig bago ito balatan."
                    ],
                    "index": 14
                },
                {
                    "rawPattern": [
                        "* not  * eat * raw * meat *",
                        "* eat * not * cook * meat *",
                        "* avoid *raw * meat * "
                    ],
                    "patterns": [
                        "* not  * eat * raw * meat *",
                        "* eat * not * cook * meat *",
                        "* avoid *raw * meat * "
                    ],
                    "response": [
                        "Ang tamang pagluluto ng pagkain ay mahalaga dahil pinapatay nito ang mga nakakapinsalang bakterya, mga virus, at mga parasito na maaaring magdulot ng mga impeksyon sa bituka. Ang pagkain ng hindi luto o hilaw na pagkain, lalo na ang mga karne, manok, itlog, at pagkaing-dagat, ay maaaring mapanganib dahil dito. \n      \n      Ang mga wastong pagluluto, tulad ng pagluluto ng pagkain na naaangkop sa temperatura at pag-iwas sa cross-contamination sa pagitan ng mga hilaw at lutong pagkain, ay maaaring makatulong na maiwasan ang pagkalat ng mga nakakapinsalang bakterya at mabawasan ang panganib na magkaroon ng pagtatae."
                    ],
                    "index": 15
                },
                {
                    "rawPattern": [
                        "* can * diarrhea * not * get *",
                        "* can * diarrhea * avoid *"
                    ],
                    "patterns": [
                        "* can * diarrhea * not * get *",
                        "* can * diarrhea * avoid *"
                    ],
                    "response": [
                        "Ang pagiging malinis, tulad ng paghuhugas ng kamay gamit ang sabon o tubig bago ka kumain at pagkatapos ng pagpunta sa banyo, ay mahalaga upang hindi magkaroon ng pagtatae. \n      \n      Ang pagtiyak ng malinis at ligtas na pinagkukunan ng pagkain at tubig pati na rin ang tamang pagluluto ng mga pagkain upang maalis ang anumang nakakapinsalang bakterya o mga parasito ay mahalaga din. Ang pag-iwas sa pagtatae ay maaari din sa pamamagitan ng hidi pagkain ng mga hilaw o hindi natulo na pagkain, mga produktong gumagamit ng gatas na hindi na-pasteurize at hindi malinis na pinagmumulan ng tubig. \n      \n      At saka, ang pananatiling hydrated at pagpapanatili ng isang malusog na diyeta ay makakatulong na palakasin ang immune system at maiwasan ang mga impeksyon na maaaring humantong sa pagtatae."
                    ],
                    "index": 16
                },
                {
                    "rawPattern": [
                        "* treat * eat * diarrhea * ",
                        "* eat * treat * diarrhea *",
                        "* diarrhea * eat * treat*  "
                    ],
                    "patterns": [
                        "* treat * eat * diarrhea * ",
                        "* eat * treat * diarrhea *",
                        "* diarrhea * eat * treat*  "
                    ],
                    "response": [
                        "Maaari kang kumain ng arrozcaldo, saging, sabaw, manok, chicken soup, congee, electrolyte drink, oatmeal, peanut butter , patatas, kanin, sopas, sports drink, toast, tubig, yogurt, rice soup (am) , at buko juice. \n       \n      Ngunit, ang paggamot sa pagtatae ay depende sa dahilan. Para sa mga hindi malalang kaso, maaaring makatulong ang mga over the counter na mga gamot tulad ng loperamide o bismuth subsicylate.Kung nagpapatuloy ang mga sintomas, mahalagang magpatingin sa iyong doktor para sa tamang diagnosis at paggamot."
                    ],
                    "index": 17
                },
                {
                    "rawPattern": [
                        "* bad * hydrate * diarrhea *",
                        "* diarrhea_foods_not_allowed_bad_hydration * diarrhea *"
                    ],
                    "patterns": [
                        "* bad * hydrate * diarrhea *",
                        "* diarrhea_foods_not_allowed_bad_hydration * diarrhea *"
                    ],
                    "response": [
                        "Mahalagang iwasan ang mga pagkaing tulad ng iyong nabanggit kapag nakakaranas ng pagtatae dahil ang mga ito ay maaaring higit pang mag-dehydrate ng katawan. Sa halip, kumain ng pagkaing madaling matunaw at naglalaman ng maraming tubig tulad ng sabaw, mga sopas, pinakuluang gulay, at prutas na may mataas na nilalaman ng tubig, upang makatulong na palitan ang mga naubos na likido at electrolyte sa katawa at nang maiwasan din ang sobrang pagkauhaw."
                    ],
                    "index": 18
                },
                {
                    "rawPattern": [
                        "* lactose * diarrhea *",
                        "* lactose *",
                        "*diarrhea_foods_not_allowed_contains_lactose*",
                        "* diarrhea_foods_not_allowed_contains_lactose * diarrhea *"
                    ],
                    "patterns": [
                        "* lactose * diarrhea *",
                        "* lactose *",
                        "*diarrhea_foods_not_allowed_contains_lactose*",
                        "* diarrhea_foods_not_allowed_contains_lactose * diarrhea *"
                    ],
                    "response": [
                        "Kung ikaw ay nag tatae, umiwas ka sa mga pagkaing may lactose dahil maaari nitong sirain ang lining ng iyong maliit na bituka. Pag nangyari ito, nababawasan ang kakayahang ng bituka na gumawa ng lactase na isang enzyme na tumutulong sa pagsira ng lactose. Maaari ma-stuck ang iyong kinain sa mas malaking bituka, na magdulot ng pangungutot, paglobo ng tyan o hindi pagkatunaw ng pagkain kapag ang katawan ay hindi kayang i absorb ang lactose nang maayos. \n      \n      Ang pag iwas ng mga pagkaing naglalaman ng lactose ay makakatulong upang mabawasan ang mga sintomas ng pagtatae at maiwasan ang mga problema sa hinahara kung hindi ka kakain ng mga pagkain tulad ng gatas, keso o ice cream.\n      \n      Subalit may mga iba ka pa namang pwedeng gawin. Halimbawa, pwede kang uminom o kamain ng mga pagkaing maraming tubig tulad ng arrozcaldo, saging, sabaw, manok, chicken soup, congee, electrolyte drink, oatmeal, peanut butter , patatas, kanin, sopas, sports drink, toast, tubig, yogurt, rice soup (am) , at buko juice. \n      \n      Pwede ka ding kumain ng loperamide o bismuth subsicylate.Kung nagpapatuloy ang mga sintomas, mahalagang magpatingin sa iyong doktor para sa tamang diagnosis at paggamot.\n      "
                    ],
                    "index": 19
                },
                {
                    "rawPattern": [
                        "* diarrhea_foods_not_allowed_irritate_stomach *",
                        "* diarrhea_foods_not_allowed_irritate_stomach * diarrhea *"
                    ],
                    "patterns": [
                        "* diarrhea_foods_not_allowed_irritate_stomach *",
                        "* diarrhea_foods_not_allowed_irritate_stomach * diarrhea *"
                    ],
                    "response": [
                        "\n      Ang mga maanghang na pagkain ay maaaring makairita sa tiyan. Ito rin ay maaaring humantong sa paglala ng mga sintomas ng pagtatae. Higit pa rito, ang mga maanghang na pagkain ay maaaring maglaman ng mga sangkap na mahirap matunaw, na nagdudulot ng karagdagang gastrointestinal distress o panankit ng tyan. Ipinapayo na iwasan ang paggamit ng mga pagkaing pampalasa na maaanghang.\n\n      Sa halip, pwede kang uminom o kamain ng mga pagkaing maraming tubig tulad ng arrozcaldo, saging, sabaw, manok, chicken soup, congee, electrolyte drink, oatmeal, peanut butter , patatas, kanin, sopas, sports drink, toast, tubig, yogurt, rice soup (am) , at buko juice. \n      \n      Pwede ka ding kumain ng loperamide o bismuth subsicylate.Kung nagpapatuloy ang mga sintomas, mahalagang magpatingin sa iyong doktor para sa tamang diagnosis at paggamot.\n      "
                    ],
                    "index": 20
                },
                {
                    "rawPattern": [
                        "* diarrhea_foods_not_allowed_oily *",
                        "* diarrhea_foods_not_allowed_oily * diarrhea *"
                    ],
                    "patterns": [
                        "* diarrhea_foods_not_allowed_oily *",
                        "* diarrhea_foods_not_allowed_oily * diarrhea *"
                    ],
                    "response": [
                        "Ang mga mamantikang pagkain ay naglalaman ng maraming taba na nag papabagal sa pagkatunaw ng pagkain sa tiyan. \n      \n      Dahil mahirap matunaw ang mantika at mamantika na pagkain, maaaring itong maging sanhi ng pagtatae. Maaari rin itong maging sanhi ng pagtaas ng produksyon ng acid sa tiyan, na umiirita sa bituka at humantong sa paglala ng mga sintomas. \n      \n      Kung mayroon kang pagtatae, ang pag iwas sa mga mamantikaing pagkain ay makatulong upang mabawasan ang mga sintomas at mapabilis ang paggaling.\n      \n      Upang gumaling, subukang uminom o kamain ng mga pagkaing maraming tubig tulad ng arrozcaldo, saging, sabaw, manok, chicken soup, congee, electrolyte drink, oatmeal, peanut butter , patatas, kanin, sopas, sports drink, toast, tubig, yogurt, rice soup (am) , at buko juice. \n      \n      Pwede ka ding kumain ng loperamide o bismuth subsicylate.Kung nagpapatuloy ang mga sintomas, mahalagang magpatingin sa iyong doktor para sa tamang diagnosis at paggamot.\n      "
                    ],
                    "index": 21
                },
                {
                    "rawPattern": [
                        "* eat * avoid * diarrhea *",
                        "* eat * (not * (drink|eat) ) * diarrhea *",
                        "* diarrhea * avoid * eat *",
                        "* diarrhea * (not * (drink|eat) ) * eat *"
                    ],
                    "patterns": [
                        "* eat * avoid * diarrhea *",
                        "* eat * (not * (drink|eat) ) * diarrhea *",
                        "* diarrhea * avoid * eat *",
                        "* diarrhea * (not * (drink|eat) ) * eat *"
                    ],
                    "response": [
                        "\n      Ang pag-iwas sa ilang partikular na pagkain kapag nagtatae ay mahalaga dahil ang ilang sa mga ito ay maaaring makairita sa digestive system at magpapalala ng mga sintomas. Maaaring mahirap matunaw ng katawan ang maanghang, mamantika, o matatabang pagkain, habang ang mga pagkaing naglalaman ng lactose o fructose ay maaaring magpalala ng pagtatae sa mga taong may lactose o fructose intolerance. Higit pa rito, ang ilang uri ng fiber, gaya ng mga makikita sa beans, cruciferous vegetables, at whole grains, ay maaaring mahirap matunaw at maaaring magdulot ng pangungutot o kabag.\n\n      Ang mga pagkaing at inuming dapat mong iwasan ay ang mga inuming nag lalaman ng alchohol, beans, berries, brocoli, repolyo, cauliflower, keso, chickpeas, kape, mais, dates, fruit jucies, ubas, berdeng madahong gulay, gum, honey ice cream, gatas, mani, mamantikaing pagkain, mga maaanghang na pagkain, paminta, hilaw na karne , salad, shellfish, soft drink, at tsaa.\n      "
                    ],
                    "index": 22
                },
                {
                    "rawPattern": [
                        "* diarrhea * problem * who * ",
                        "* problem * diarrhea * who * ",
                        "* diarrhea * who * problem * ",
                        "* problem * who * diarrhea * ",
                        "* who * problem * diarrhea * "
                    ],
                    "patterns": [
                        "* diarrhea * problem * who * ",
                        "* problem * diarrhea * who * ",
                        "* diarrhea * who * problem * ",
                        "* problem * who * diarrhea * ",
                        "* who * problem * diarrhea * "
                    ],
                    "response": [
                        "Maaring magkaroon ng matinding problema ang mga mga batang wala pang 3 taong gulang, mas matatandang pasyente, mga taong mahina ang immune system, malnourished na mga bata, may pagtatae ng higit sa 24 na oras, mga pasyente na may 39 degree celcius, mga pasyente na may dumi at nana, mga pasyente na may mga gamot sa altapresyon, at mga manlalakbay na may mga kasalukuyang kondisyon sa kalusugan ay ang mga taong may panganib na magkaroon ng mga komplikasyon"
                    ],
                    "index": 23
                },
                {
                    "rawPattern": [
                        "* dose * antimotility *",
                        "* guide * antimotility *",
                        "* (eat|use|drink) * antimotility *",
                        "* antimotility * (use|eat|drink) *"
                    ],
                    "patterns": [
                        "* dose * antimotility *",
                        "* guide * antimotility *",
                        "* (eat|use|drink) * antimotility *",
                        "* antimotility * (use|eat|drink) *"
                    ],
                    "response": [
                        "Uminom ng maraming tubig habang ginagamot mo ang iyong pagtatae gamit ang antimotilities. Ang pagtatae ay maaaring magpa-dehydrate sa iyo. \n\n        Para sa mga nasa hustong gulang at mga bata sa edad na 12 at mas matanda, ang inirerekomendang dosis ay 2 tablet sa pamamagitan ng bibig pagkatapos ng unang maluwag na dumi. Pagkatapos, uminom ng 1 tablet pagkatapos ng bawat maluwag na dumi. Huwag uminom ng higit sa 4 na tablet sa loob ng 24 na oras. \n        \n        Para sa mga batang edad 9 hanggang 11 taon o mga bata na tumitimbang ng 60 lbs hanggang 95 lbs, ang inirerekomendang dosis ay 1 tablet sa bibig pagkatapos ng unang maluwag na dumi. Pagkatapos, uminom ng kalahati ng isang tableta pagkatapos ng bawat maluwag na dumi. Huwag uminom ng higit sa 3 buong tablet sa loob ng 24 na oras. \n        \n        Para sa mga batang edad 6 hanggang 8 taong gulang o mga bata na tumitimbang ng 48 lbs hanggang 59 lbs, ang inirerekomendang dosis ay 1 tablet sa bibig pagkatapos ng unang maluwag na dumi. Pagkatapos, uminom ng kalahati ng isang tableta pagkatapos ng bawat maluwag na dumi. Huwag uminom ng higit sa 2 buong tablet sa loob ng 24 na oras. \n        \n        Para sa mga batang 5 taon at mas bata, tanungin ang doktor ng iyong anak upang makita kung ano ang iba pang mga opsyon na magagamit upang gamutin ang pagtatae ng iyong anak.\n        \n        Ang mga nabangit na paraan ng pag inom ng antimotility ay pawang mga halibawa lamang. \n        "
                    ],
                    "index": 24
                },
                {
                    "rawPattern": [
                        "* what * antimotility *"
                    ],
                    "patterns": [
                        "* what * antimotility *"
                    ],
                    "response": [
                        "Ang mga antimotility tulad ng Loperamide at Imodium ay ginagamit upang pabagalin o pahintuhin ang paggalaw ng bituka. Gumagana ito sa pamamagitan ng pagbubuklod sa mga opioid receptor ng bituka na nag babawas  sa contraction ntio at tumutulong na pabagalin ang pagdaan ng dumi sa bituka. Ang gamot na ito ay may ibat ibang anyo tulad ng mga tablet, kapsula, likido at mga suspensyon. "
                    ],
                    "index": 25
                },
                {
                    "rawPattern": [
                        "* use * antimotility *"
                    ],
                    "patterns": [
                        "* use * antimotility *"
                    ],
                    "response": [
                        "Ang mga antimotility tulad ng Loperamide at Imodium ay nagbabawas o nagpigil sa mga pag-galaw ng bituka. Nagbibigay din ito sa katawan ng mas maraming oras upang sumipsip ng tubig at mga sustansya mula sa natitirang mga nilalaman ng bituka, na maaaring humantong sa pagbaba sa dalas at intensity ng pagdumi. Ang gamot na ito ay may ibat ibang anyo tulad ng mga tablet, kapsula, likido at mga suspensyon. "
                    ],
                    "index": 26
                },
                {
                    "rawPattern": [
                        "* work * antimotility * ",
                        "* antimotility * work * "
                    ],
                    "patterns": [
                        "* work * antimotility * ",
                        "* antimotility * work * "
                    ],
                    "response": [
                        "Ang mga antimotility, tulad ng Loperamide at Imodium, ay pumipigil sa paggalaw ng bituka at maaaring gamitin upang gamutin ang pagtatae. Gumagana ang mga ito sa pamamagitan ng mas mabilis na pagsipsip ng tubig at mga electrolyte sa iyong dumi. Kaya, napapadalang ang pagdumi pagkatapos kumain nito.  Madalas gumana ang gamot pagkatapos ng humigit-kumulang isang oras, ngunit maaari itong mag-iba sa bawat tao. Gayunpaman, tandaan na maaaring hindi angkop ang mga ito para sa bawat pasyente at maaaring magkaroon ng potensyal na epekto."
                    ],
                    "index": 27
                },
                {
                    "rawPattern": [
                        "* not * ((eat|drink|use) | avoid)  * antimotility *"
                    ],
                    "patterns": [
                        "* not * ((eat|drink|use) | avoid)  * antimotility *"
                    ],
                    "response": [
                        "Dapat na iwasan ang mga antimotility agent kung may mga senyales ng matinding dehydration, mataas na lagnat, o may dugo ang iyong dumi, dahil ang mga ito ay maaaring magpahiwatig ng mas malubhang kondisyon na nangangailangan ng medikal na atensyon"
                    ],
                    "index": 28
                },
                {
                    "rawPattern": [
                        "* effect * antimotility  * ",
                        "* not * good * effect * antimotility  *"
                    ],
                    "patterns": [
                        "* effect * antimotility  * ",
                        "* not * good * effect * antimotility  *"
                    ],
                    "response": [
                        "Ang mga antimotility, tulad ng Loperamide, ay maaaring magdulot ng mga side effect. Madalas na makaramdam ang mga tao ng kabag, pananakit ng tiyan, pagduduwal, pagsusuka, at tuyong bibig. Ang ilang mga tao ay maaari ring makaranas ng pagkahilo, pag-aantok, at hirap sa pag-ihi. Mahalagang sundin nang mabuti ang mga tagubilin ng iyong doktor o ang label ng gamot.\n        "
                    ],
                    "index": 29
                },
                {
                    "rawPattern": [
                        "* tip * antimotility *"
                    ],
                    "patterns": [
                        "* tip * antimotility *"
                    ],
                    "response": [
                        "Huwag gumamit ng antimotilities kung mayroong dugo sa iyong dumi o itim na dumi. Kung mayroon kang kasaysayan ng sakit sa atay o mga problema sa ritmo ng puso, maaaring hindi rin ito ang pinakamahusay na gamot para sa iyo"
                    ],
                    "index": 30
                },
                {
                    "rawPattern": [
                        "* alternative *  antimotility *"
                    ],
                    "patterns": [
                        "* alternative *  antimotility *"
                    ],
                    "response": [
                        "Mayroong ilang mga natural o herbal na alternatibo sa mga antimotilities.\n        \n        Halimbawa, ang pagpapakulo ng dahon ng bayabas at pag-inom nito ay maaaring makatulong sa paglaban sa bakterya at mga virus.\n       \n        At saka , Ang luya ay may mga anti-inflammatory properties na maaaring makatulong sa pagpapaginhawa sa digestive system at bawasan ang pagtatae. \n        \n        Maaari ka ring kumain ng saging. Naglalaman ang mga ito ng mataas na antas ng potassium, na makakatulong sa pag-regulate ng pagdumi at pagpapalit ng mga nawawalang electrolyte. Naglalaman din ang mga ito ng pectin, na makakatulong sa pagpapakapal ng dumi at mabawasan ang pagtatae\n        "
                    ],
                    "index": 31
                },
                {
                    "rawPattern": [
                        "* (guide|use|eat|drink|dose) * bismuth *",
                        "* bismuth * (guide|use|eat|drink|dose)  *"
                    ],
                    "patterns": [
                        "* (guide|use|eat|drink|dose) * bismuth *",
                        "* bismuth * (guide|use|eat|drink|dose)  *"
                    ],
                    "response": [
                        "May pagkakaiba sa pagitan ng tablet at likidong anyo.Ilan sa paraan o karaniwang dosing ng Bismuth Subsalicylate ay ang mga sumusunod. \n        \n        Halimbawa, para sa tablet, kung ang tao ay may edad na 12 at mas matanda, ang karaniwang dosis ay 2 tablets (524 mg) tuwing 30 at hanggang 60 minuto kung kinakailangan hanggang sa 2 araw. Huwag uminom ng higit sa 16 na tableta (4,192 mg) sa isang araw.\n        \n        Kung mayroon ito naman ay likidong anyo, kung ang tao ay may edad na 12 at mas matanda , ang karaniwang dosis ay 30 mL (525 mg) bawat 30 minuto at kung kinakailangan ay hanggang sa 2 araw. Kung umiinom ka ng bismuth subsalicylate (Pepto-Bismol) upang gamutin ang pagtatae, maaari kang uminom ng 60 mL (1,050 mg) tuwing 60 minuto. Huwag uminom ng higit sa 240 mL (4,200 mg) sa isang araw\n        \n        Ang mga nabangit na paraan ng pag inom ng antimotility ay pawang mga halibawa lamang. "
                    ],
                    "index": 32
                },
                {
                    "rawPattern": [
                        "* bismuth *"
                    ],
                    "patterns": [
                        "* bismuth *"
                    ],
                    "response": [
                        "Ang Bismuth subsalicylate (Pepto-bismol o Bismatrol) ay isang over-the-counter na gamot na ginagamit upang gamutin ang sira ng tiyan at pagtatae. Gumagana ito nang maayos upang ihinto ang pagtatae, ngunit maaaring kailanganin mong inumin ito nang maraming beses sa isang araw. Ang gamot na ito ay karaniwang okay naman kainin ng isang tao, ngunit maaari itong magdulot ng hindi nakakapinsalang pagdidilim ng iyong dila o dumi. Karaniwang mabibili ito bilang tablet, kapsula, likidong suspensyon, o tabletas"
                    ],
                    "index": 33
                },
                {
                    "rawPattern": [
                        "* use * bismuth *"
                    ],
                    "patterns": [
                        "* use * bismuth *"
                    ],
                    "response": [
                        "Ang bismuth subsalicylate  (Pepto-bismol o Bismatrol)  ay isang over-the-counter na gamot na ginagamit para sa paggamot ng pagtatae, kabag, sakit sa tiyan, hindi pagkatunaw ng pagkain, heartburn, pagduduwal at bilang isang prophylaxis para sa pagtatae ng manlalakbay.Karaniwang mabibili ito bilang tablet, kapsula, likidong suspensyon, o tabletas"
                    ],
                    "index": 34
                },
                {
                    "rawPattern": [
                        "* bismuth * work * ",
                        "* work * bismuth * "
                    ],
                    "patterns": [
                        "* bismuth * work * ",
                        "* work * bismuth * "
                    ],
                    "response": [
                        "\n        Ang bismuth subsalicylate  (Pepto-bismol o Bismatrol)  ay isang oral antidiarrheal na gamot. Ito rin ay antibacterial, na maaaring makatulong sa paglaban sa mga pathogen na nagdudulot ng pagtatae. Maaaring makatulong ang bismuth subsalicylate na gamutin ang mga sintomas tulad ng pag-cramping ng tiyan, pagtatae, o pagduduwal dahil sa pagbawas ng pamamaga at pagkaubos ng mga likido ng katawan. Gayunpaman, mahalagang tandaan na ang bismuth subsalicylate ay hindi dapat inumin kapag umiinom ng aspirin, may allergy ka, may bleeding disorder ka, o renal impairment ka. Dapat din itong gamitin nang may pag-iingat ng mga bata at buntis.Hindi ka dapat gumamit ng bismuth subsalicylate nang higit sa 2 araw.\n        "
                    ],
                    "index": 35
                },
                {
                    "rawPattern": [
                        "* not * ( (eat|drink|use) | avoid )  *bismuth *"
                    ],
                    "patterns": [
                        "* not * ( (eat|drink|use) | avoid )  *bismuth *"
                    ],
                    "response": [
                        "Hindi mo ito dapat inumin kung mayroon kang mga problema sa pagdurugo, ulser sa tiyan, dugo sa iyong dumi, o kung ikaw ay alerdyi sa aspirin o iba pang gamot. Huwag ibigay ang gamot na ito sa isang bata o teenager na may lagnat, sintomas ng trangkaso, o bulutong-tubig"
                    ],
                    "index": 36
                },
                {
                    "rawPattern": [
                        "* effect * bismuth * ",
                        "* not * good * effect * bismuth *"
                    ],
                    "patterns": [
                        "* effect * bismuth * ",
                        "* not * good * effect * bismuth *"
                    ],
                    "response": [
                        "Maaari kang makaranas ng pansamantalang pangingitim ng dumi o dila. Kung makaranas ng matinding reaksiyong alerhiya tulad ng kahirapan sa paghinga, pantal sa balat, at pamamaga, at Rye's syndrome na nagpapakita ng pagtatae, pagsusuka, hindi pangkaraniwang mababang enerhiya, pagkawala ng malay, seizure, pagbabago sa pag-uugali, pagkalito, panghihina ng kalamnan, pagbabago sa paningin o pandinig, makipag-ugnayan kaagad sa iyong doktor"
                    ],
                    "index": 37
                },
                {
                    "rawPattern": [
                        "* tip *bismuth *"
                    ],
                    "patterns": [
                        "* tip *bismuth *"
                    ],
                    "response": [
                        "Uminom ng maraming tubig habang umiinom ka ng bismuth subsalicylate. Ang pagtatae ay maaaring magdulot ng dehydration at ang pag-inom ng sapat na likido ay makakatulong na maiwasan ito. Lunukin ang mga kapsula nang buo sa tubig. Huwag nguyain ang mga ito. Lunukin ang mga kapsula nang buo sa tubig. Huwag nguyain ang mga ito."
                    ],
                    "index": 38
                },
                {
                    "rawPattern": [
                        "* alternative * bismuth *"
                    ],
                    "patterns": [
                        "* alternative * bismuth *"
                    ],
                    "response": [
                        "Pwede kang bumili ng antimotilities. Mayroon ding mga natural na gamot. Halimbawa, maaari kang uminom ng luya at kalawag dahil mayroon itong mga anti-inflammatory at antimicrobial na katangian na maaaring makatulong na mabawasan ang mga sintomas ng pagtatae. Maaari ka ring uminom ng tubig ng niyog na may mataas na nilalaman ng electrolyte."
                    ],
                    "index": 39
                },
                {
                    "rawPattern": [
                        "* where * treat * diarrhea * ",
                        "* where * go * diarrhea * "
                    ],
                    "patterns": [
                        "* where * treat * diarrhea * ",
                        "* where * go * diarrhea * "
                    ],
                    "response": [
                        "Sa karamihan ng mga kaso, ang pagtatae ay maaaring gamutin sa bahay at malulutas nito ang sarili sa loob ng ilang araw. Kung talagang nakakaramdam ka ng matinding discomfort, tumagal ito ng higit sa 2 araw, nakakakita ng dugo sa iyong dumi, o nilalagnat, pinakamainam para sa iyo na pumunta sa malapit na healthcare center"
                    ],
                    "index": 40
                },
                {
                    "rawPattern": [
                        "* diarrhea * symptom *",
                        "* (symptom|tell) * diarrhea * "
                    ],
                    "patterns": [
                        "* diarrhea * symptom *",
                        "* (symptom|tell) * diarrhea * "
                    ],
                    "response": [
                        "Maraming sintomas ang pagtatae. Kadalasan kapag mayroon ka nito makakaramdam ka ng pananakit ng tiyan , bloating, dugo sa dumi, masakit na kabag o utot, pagkapagod, lagnat, panginginig, madalas na pagnanais na magbawas, malaking dami ng uhog ng dumi, pagduduwal, at patuloy na pagsusuka."
                    ],
                    "index": 41
                },
                {
                    "rawPattern": [
                        "* virus * influenza *"
                    ],
                    "patterns": [
                        "* virus * influenza *"
                    ],
                    "response": [
                        "Ang mga virus ay nagdudulot ng trangkaso. Ang mga ito ay kumakalat kapag ang mga taong may trangkaso ay umuubo, bumahin o nagsasalita, nagpapadala ng mga droplet na may virus sa hangin at posibleng sa mga bibig o ilong ng mga taong nasa malapit."
                    ],
                    "index": 42
                },
                {
                    "rawPattern": [
                        "* get * influenza *"
                    ],
                    "patterns": [
                        "* get * influenza *"
                    ],
                    "response": [
                        "Maaari kang makakuha ng trangkaso kapag nalalanghap mo o nalalanghap ang hangin na inilabas ng taong bumahing o umuubo kahit kaunti lang. Ang mga virus na ito ay maaari ding maipasa sa pamamagitan ng paghawak sa mga bagay na nahawaan ng virus. Sa simpleng mga salita, maaari mo itong makuha kapag nadikit ka sa mga ibabaw, materyales, at damit na kontaminado ng dischages ng taong nahawahan. Ang mga pana-panahong pagbabago ay maaari ding magdulot ng trangkaso dahil humihina ang mga panlaban natin lalo na sa pagbaba ng temperatura."
                    ],
                    "index": 43
                },
                {
                    "rawPattern": [
                        "* get * influenza * "
                    ],
                    "patterns": [
                        "* get * influenza * "
                    ],
                    "response": [
                        "Ang paglanghap ng hangin at ang pagkakaroon ng pisikal na paghawak sa mga bagay na nahawaan ng virus ay ang mga kilalang paraan ng pagkakaroon ng trangkaso. Palaging magsuot ng mask sa mataong lugar, maghugas ng kamay nang madalas, at gumamit ng hand sanitizer bilang pag-iingat."
                    ],
                    "index": 44
                },
                {
                    "rawPattern": [
                        "* rest * influenza *"
                    ],
                    "patterns": [
                        "* rest * influenza *"
                    ],
                    "response": [
                        "Dapat kang manatili sa bahay hanggang sa mawala ang iyong lagnat nang hindi bababa sa 24 na oras. Ang isang taong may trangkaso ay natural na gagaling sa loob ng 2 hanggang 7 araw. Sa pamamagitan ng pagpapahinga sa araw, ang iyong katawan ay maaaring maglaan ng mas maraming mapagkukunan sa paglaban sa virus. Bukod sa pagtulong sa iyong gumaling, ang pananatili sa bahay ay pinipigilan din ang pagkalat ng trangkaso sa ibang tao sa iyong komunidad o lugar ng trabaho."
                    ],
                    "index": 45
                },
                {
                    "rawPattern": [
                        "* drink * water * influenza *"
                    ],
                    "patterns": [
                        "* drink * water * influenza *"
                    ],
                    "response": [
                        "Pinapayuhan ang sinumang nakakararanas ng trangkaso na dalasan ang pag inom ng tubig.Ang isang sintomas ng trangkaso ay isang mataas na lagnat, na maaaring humantong sa pagpapawis. Maaari ka ring dumaranas ng mga pagsusuka o pagtatae. Ang iyong katawan ay nangangailangan ng maraming likido upang palitan ang mga nawawalang likido, at higit pa upang labanan ang impeksiyon."
                    ],
                    "index": 46
                },
                {
                    "rawPattern": [
                        "* who * drug * influenza * "
                    ],
                    "patterns": [
                        "* who * drug * influenza * "
                    ],
                    "response": [
                        "Maaari mong alagaan ang iyong sarili. May mga over-the-counter na gamot na makakatulong sa pagpapabuti ng mga sintomas tulad ng lagnat, pananakit at ubo. Kinakailangan mong ding magpahinga upang gumaling. Dapat manatili lang sa bahay hanggang sa mawala ang iyong lagnat. Ugaliing uminom ng maraming tubig. Iwasan din ang mga nakakapagod na gawain. Kumain din ng masusustansyang pagkain. Gayunpaman, mas makakatulong sa iyo ang pagpapatingin sa doktor kung mas malala ang iyong pakiramdam. Maaari silang magreseta sa iyo ng partikular na gamot at direksyon."
                    ],
                    "index": 47
                },
                {
                    "rawPattern": [
                        "* treat * influenza * where *",
                        "* where * treat * influenza *"
                    ],
                    "patterns": [
                        "* treat * influenza * where *",
                        "* where * treat * influenza *"
                    ],
                    "response": [
                        "Maaari mo itong gawin iyong tahanan. Kapag malala ang kaso nito, kailangan mong magpatingin kaagad sa doktor lalo na kung kabilang ka sa mga high risk group"
                    ],
                    "index": 48
                },
                {
                    "rawPattern": [
                        "* drug * influenza *",
                        "* influenza * drug*"
                    ],
                    "patterns": [
                        "* drug * influenza *",
                        "* influenza * drug*"
                    ],
                    "response": [
                        "\n        Ang trangkaso , o karaniwang tinatawag na flu, ay isang impeksyon durlog ng virus na nakakaapekto sa paghinga o baga ng isang tao. Kaya dapat magpahinga at uminom ng mga likido upang maiwasan ang pagkaubos ng tubig sa katawan.\n\n        Mayroon ding mga over the counter na gamot na mabibili. Maaari kang uminom ng mga antihistamine upang mapawi ang mga nakakainis na sintomas gaya ng pagbabahing, pangangati, at pagkaka sipon. Minsan ay iniinom ang mga analgesic tulad ng acetaminophen o ibuprofen upang mabawasan ang lagnat at mapawi ang pananakit ng katawan. Gayundin, ang mga non-steroidal na anti-inflammatory na gamot. Kung may barado kang ilong, nakakatulong din ang mga decongestant dahil nakakatulong ito sa pagtanggal ng baradong ilong at pag-alis ng presyon sa iyong sinuses. Kung umuubo, ang mga antitussives naman ay nakakatulong sa pamamagitan ng ng pagluwag ng makapal na uhog. Sa wakas, ang lozenges ay maaaring pansamantalang mapawi ang mga sintomas tulad ng namamagang lalamunan, pangangati ng lalamunan, o ubo.\n\n        Ang mga malalang kaso ay maaaring kailanganin ang ospital. Ang pag-iwas sa mga bagay bagay na pwedeng makahawa sa trangkaso ay kinakailangan. Kaya ang pagkuha ng taunang bakuna laban sa trangkaso ay ang pinakamabisang paraan upang maprotektahan ang sarili mula sa pagkakasakit.\n        "
                    ],
                    "index": 49
                },
                {
                    "rawPattern": [
                        "* vaccine * influenza *"
                    ],
                    "patterns": [
                        "* vaccine * influenza *"
                    ],
                    "response": [
                        "Bagama't walang gamot na makakapigil sa trangkaso, ang pagpapabakuna makakatulong sa pagprotekta sa iyo upang maibsan ang mga panganib na dala nito. Partikular itong nakakatulong sa mga taong may ilang malalang kondisyon sa kalusugan (tulad ng mga kondisyon sa puso). Pinoprotektahan din nito ang mga buntis, mga bata at mga tao sa paligid mo."
                    ],
                    "index": 50
                },
                {
                    "rawPattern": [
                        "* (avoid|not) * touch * influenza *",
                        "* lumayo * influenza influenza *"
                    ],
                    "patterns": [
                        "* (avoid|not) * touch * influenza *",
                        "* lumayo * influenza influenza *"
                    ],
                    "response": [
                        "Umiwas sa taong nakakaramdam ng sintomas ng trangkaso. Kung ikaw ang may sakit, panatilihin ang iyong distansya sa iba. Tandaan, dumistansya nang higit sa isang metro mula sa mga taong umuubo. Ilayo ang iyong sarili sa mga taong may sipon. Pinapayuhan ka ring umiwas sa mga matataong lugar dahil maaari kang mahawaan. Kailangan mong gawin ang mga bagay na ito upang maiwasan ang pagkalat pa ng virus."
                    ],
                    "index": 51
                },
                {
                    "rawPattern": [
                        "* wear * (mouth|nose) * (influenza|cough|sneeze) *"
                    ],
                    "patterns": [
                        "* wear * (mouth|nose) * (influenza|cough|sneeze) *"
                    ],
                    "response": [
                        "Takpan ang iyong bibig at ilong ng tissue kapag umuubo o bumabahing upang maiwasang magkasakit ang mga nasa paligid mo."
                    ],
                    "index": 52
                },
                {
                    "rawPattern": [
                        "* not * touch * (eye|nose|mouth) *"
                    ],
                    "patterns": [
                        "* not * touch * (eye|nose|mouth) *"
                    ],
                    "response": [
                        "Ang mga mikrobyo ay madalas na kumakalat kapag ang isang tao ay nakahawak ng isang bagay na kontaminado ng nito at pagkatapos ay hinawakan ang kanyang mga mata, ilong, o bibig"
                    ],
                    "index": 53
                },
                {
                    "rawPattern": [
                        "* (use|wear|condition) * mask * "
                    ],
                    "patterns": [
                        "* (use|wear|condition) * mask * "
                    ],
                    "response": [
                        "Ang pagsusuot ng face mask nakakatulong na mapigilan ang pagkahawa sa impkesyong dahil sa mga virus na maaaring makuha sa hangin o mapunta sa anumang bagay na hinawakan o ginagamit ng isang taong may trangkaso."
                    ],
                    "index": 54
                },
                {
                    "rawPattern": [
                        "* avoid * influenza * "
                    ],
                    "patterns": [
                        "* avoid * influenza * "
                    ],
                    "response": [
                        "Ugaliing magpabakuna para maka iwas sa trangkaso. Umiwas ka sa taong nakakaramdam ng mga sintomas ng trangkaso. Kung ikaw ay may sakit, mas mabuting manatili na muna sa bahay at magpahinga upang maiwasan ang pagkalat ng virus sa iba. \n        \n        Laging takpan ang iyong bibig at ilong, upang mabawasan ang panganib na maipasa ang virus sa iba. Ang pagsusuot ng face mask ay makakatulong sa iyo kung kinakailangan mo talagang lumabas ng bahay. \n        \n        Panatilihin din ang pagiging malinis. Halimbawa, madalas na linisin ang iyong mga kamay at iwasang hawakan ang iyong mga mata, ilong o bibig upang maiwasan ang anumang virus na pumasok sa iyong katawan."
                    ],
                    "index": 55
                },
                {
                    "rawPattern": [
                        "* treat*  eat * influenza * ",
                        "* eat * treat  * influenza *",
                        "* influenza * eat * treat*  "
                    ],
                    "patterns": [
                        "* treat*  eat * influenza * ",
                        "* eat * treat  * influenza *",
                        "* influenza * eat * treat*  "
                    ],
                    "response": [
                        "Mayroong ilang mga pagkain na maaaring makatulong sa iyo na gumaling nang mas mabilis. Halimbawa, ang pag kain o inom ng mga sabaw at sopas na gawa sa manok, baka, at gulay ay maaaring maiwasan ang dehydration at ang init nito ay maaaring mapawi ang barado ilong at mapawi ang pananakit ng lalamunan. \n        \n        Maaari ka ring kumain ng bawang dahil maaari itong makapagpagaling ng sakit at mabawasan ang serverity ng mga sintomas. Ang mga pagkaing naglalaman ng mga probiotics tulad ng yogurt ay maaari ding makatulong sa pamamagitan ng pagpaparami ng magandang bacteria sa bituka na sumusuporta sa iyong immune system. \n        \n        Ang pagkain ng mga prutas at gulay na naglalaman ng bitamina c ay maaari ding makatulong. Kabilang dito ang mga paminta, dalandan, citrus, lemon, ubas at mga maitim na madahong gulay. Maaari ka ring kumain ng broccoli. Higit pa rito, ang oatmeal ay naglalaman ng mga nutrients na nagpapalakas ng immune tulad ng copper, iron, selenium, zinc fiber at protien. \n        \n        Maaari ka ring magdagdag ng mga pampalasa tulad ng luya at kalawag sa iyong pagkain. Panghuli, palaging uminom ng mga likido tulad ng tubig upang mapanatili kang hydrated."
                    ],
                    "index": 56
                },
                {
                    "rawPattern": [
                        "* influenza_foods_not_allowed_greasy_foods * ",
                        "* influenza_foods_not_allowed_greasy_foods * influenza *"
                    ],
                    "patterns": [
                        "* influenza_foods_not_allowed_greasy_foods * ",
                        "* influenza_foods_not_allowed_greasy_foods * influenza *"
                    ],
                    "response": [
                        "Nararapat na iwasan ang mga pagkaing matataba o mamaintikain dahil mahirap itong i tunawin ng iyong gastrointestinal system o bituka. Kaya ang mga pagkaing mataas sa saturated fat ay dapat na iwasan o limitahan, gayundin ang pritong, mamantika na pagkain.\n        \n        Sa halip, kumain o inom ng mga sabaw at sopas na gawa sa manok, baka, at gulay. Maaari ka ring kumain ng bawang dahil maaari itong makapagpagaling ng sakit at mabawasan ang serverity ng mga sintomas.\n        \n        Kung kinakailangan mo ng gamot, pwede kang uminom ng antihistamine, analgesic tulad ng acetaminophen o ibuprofen upang mabawasan ang lagnat at mapawi ang pananakit ng katawa, at decongestants kung hirap kang huminga dahil sa baradong ilong. Kung ika'y umuubo, pwede kang kumain ng antitussives. At pag makati o masakit ang lalamunan pwede kang uminom ng lozenges.\n        \n        "
                    ],
                    "index": 57
                },
                {
                    "rawPattern": [
                        "* influenza_foods_not_allowed_sugary_foods * ",
                        "* influenza_foods_not_allowed_sugary_foods * influenza *"
                    ],
                    "patterns": [
                        "* influenza_foods_not_allowed_sugary_foods * ",
                        "* influenza_foods_not_allowed_sugary_foods * influenza *"
                    ],
                    "response": [
                        "Ang mga matatamis na pagkain ay pwedeng magpahina sa immune system na pangunahing lumalaban sa flu. Ang pagkain nito ay nag dudulot ng pamamaga sa katawan na syang pwedeng magpapalala sa masakit na lalamunan at ubo. At saka, ang mga matatamis na pagkain ay nag papataas ng blood sugar na pwedeng ika fatigue or pagod ng tao. Pwede din nitong mapalala ang ibang sintomas ng trangkaso.\n        \n        Sa halip, kumain o inom ng mga sabaw at sopas na gawa sa manok, baka, at gulay. Maaari ka ring kumain ng bawang dahil maaari itong makapagpagaling ng sakit at mabawasan ang serverity ng mga sintomas.\n        \n        Kung kinakailangan mo ng gamot, pwede kang uminom ng antihistamine, analgesic tulad ng acetaminophen o ibuprofen upang mabawasan ang lagnat at mapawi ang pananakit ng katawa, at decongestants kung hirap kang huminga dahil sa baradong ilong. Kung ika'y umuubo, pwede kang kumain ng antitussives. At pag makati o masakit ang lalamunan pwede kang uminom ng lozenges.\n        "
                    ],
                    "index": 58
                },
                {
                    "rawPattern": [
                        "* eat * avoid * influenza *",
                        "* eat * ( not * (drink|eat) ) * influenza *",
                        "* influenza * (not * (drink|eat) ) * eat *",
                        "* influenza * (avoid) * eat *"
                    ],
                    "patterns": [
                        "* eat * avoid * influenza *",
                        "* eat * ( not * (drink|eat) ) * influenza *",
                        "* influenza * (not * (drink|eat) ) * eat *",
                        "* influenza * (avoid) * eat *"
                    ],
                    "response": [
                        "Kung sa tingin mo ay mayroon kang trangkaso, kailangan mong umiwas sa mga inuming may caffeine, alkohol, mamantika na pagkain, mahirap matunaw na butil, at matamis na pagkain o inumin. Sa halip, subukang uminom ng mga sopas o sabaw para mapalitan ang likido ng katawan at sodium na maaaring mawala sa iyo. Subukan din kumain ng puting tinapay, patatas, puting bigas, saging, sarsa ng mansanas, walang taba na karne tulad ng manok at isda.\n        \n        Sa halip, kumain o inom ng mga sabaw at sopas na gawa sa manok, baka, at gulay. Maaari ka ring kumain ng bawang dahil maaari itong makapagpagaling ng sakit at mabawasan ang serverity ng mga sintomas.\n        \n        Kung kinakailangan mo ng gamot, pwede kang uminom ng antihistamine, analgesic tulad ng acetaminophen o ibuprofen upang mabawasan ang lagnat at mapawi ang pananakit ng katawa, at decongestants kung hirap kang huminga dahil sa baradong ilong. Kung ika'y umuubo, pwede kang kumain ng antitussives. At pag makati o masakit ang lalamunan pwede kang uminom ng lozenges.\n        "
                    ],
                    "index": 59
                },
                {
                    "rawPattern": [
                        "* (eat|drink) * (influenza_foods_not_allowed|influenza_foods_not_allowed_caffeinated_drinks|influenza_foods_not_allowed_greasy_foods|influenza_foods_not_allowed_hard_grains|\n        influenza_foods_not_allowed_sugary_foods) * influenza *"
                    ],
                    "patterns": [
                        "* (eat|drink) * (influenza_foods_not_allowed|influenza_foods_not_allowed_caffeinated_drinks|influenza_foods_not_allowed_greasy_foods|influenza_foods_not_allowed_hard_grains|\n        influenza_foods_not_allowed_sugary_foods) * influenza *"
                    ],
                    "response": [
                        "May mga pagkain na kailangan mong mag-ingat. Kung ikaw ay may trangkaso, subukang kumain ng sabaw, mga pagkaing mayaman sa probiotic tulad ng mga fermented, sabaw at murang pagkain tulad ng puting tinapay, patatas, puting bigas, saging, sarsa ng mansanas, walang taba na karne tulad ng manok at isda."
                    ],
                    "index": 60
                },
                {
                    "rawPattern": [
                        "* problem * who * influenza *",
                        "* problem * influenza * who *",
                        "* who * problem * influenza *",
                        "* influenza * problem * who *",
                        "* influenza * who * problem *"
                    ],
                    "patterns": [
                        "* problem * who * influenza *",
                        "* problem * influenza * who *",
                        "* who * problem * influenza *",
                        "* influenza * problem * who *",
                        "* influenza * who * problem *"
                    ],
                    "response": [
                        "May ilang grupo ng mga tao na nasa panganib na magkaroon ng mga komplikasyon mula sa trangkaso. Ang mga taong anim na buwan at matanda, mga taong may malalang kondisyong medikal tulad ng hika, sakit sa puso, diabetes, bato, sakit sa atay, at malalang sakit sa baga, mga taong may mahinang immune system, at mga taong sobrang laki ay kailangang mag-ingat sa pagkakaroon ng ang sakit na ito."
                    ],
                    "index": 61
                },
                {
                    "rawPattern": [
                        "* dose * antihistamine *",
                        "* guide * antihistamine *",
                        "* (how|what) * (use|drink|eat) * antihistamine *",
                        "* (how|what) * antihistamine * (use|drink|eat) *"
                    ],
                    "patterns": [
                        "* dose * antihistamine *",
                        "* guide * antihistamine *",
                        "* (how|what) * (use|drink|eat) * antihistamine *",
                        "* (how|what) * antihistamine * (use|drink|eat) *"
                    ],
                    "response": [
                        "Ang mga antihistamine tulad ng Citerizine at Benadryl ay maaaring inumin kasama ng pagkain o isang baso ng tubig o gatas upang mabawasan ang pangangati ng tiyan kung kinakailangan. Para sa cetirizine, narito kung paano mo ito inumin. Ang 6 na taong gulang at mas matanda ay maaaring magkaroon ng 5 hanggang 10 miligrams isang beses sa isang araw. Ang mga 4-6 taong gulang ay maaaring uminom ng maximum na 5mg isang beses o 2.5mg dalawang beses sa isang araw. Ang mga mas bata pa rito (4 sa ibaba) ay hindi dapat uminom ng gamot na ito.\n        \n        Bagama't ipinakita ko sa iyo ang ilang impormasyon kung paano uminom ng mga antihistamines, mas mainam na humingi ka ng tulong sa mga doktor. PWede sila mag reseta naaangkop na gamot para sa iyong kondisyon. "
                    ],
                    "index": 62
                },
                {
                    "rawPattern": [
                        "* antihistamine *"
                    ],
                    "patterns": [
                        "* antihistamine *"
                    ],
                    "response": [
                        "Ang mga antihistamine tulad ng Citerizine at Benadryl ay ginagamit upang mapawi o maiwasan ang mga sintomas ng hay fever at iba pang uri ng allergy.Ang mga antihistamine ay may iba't ibang anyo. Pwede ito maging mga likido, lotion, syrup, gel, eyedrops, tablet, kapsula, cream, at suppositories. Gumagana ang mga ito sa pamamagitan ng pagpigil sa mga epekto ng histamine, na ginawa ng katawan bilang reaksyon tuwing may sakit. Ang histamine ay maaaring maging sanhi ng pangangati, pagbahing, sipon, at matubig na mga mata. Gayundin, sa ilang mga tao ay maaaring isara ng histamine ang mga bronchial tubes (mga daanan ng hangin ng mga baga) at nagpapahirap sa paghinga "
                    ],
                    "index": 63
                },
                {
                    "rawPattern": [
                        "* use * antihistamine *"
                    ],
                    "patterns": [
                        "* use * antihistamine *"
                    ],
                    "response": [
                        "\n       Ang mga antihistamines tulad ng Citerizine at Benadryl ay mga gamot na karaniwang ginagamit para sa mga allergies. Itong mga gamot na to ay tumulong sa mga sakit na nagdudulog sa maraming histamine na isang kemikal na ginagawa ng katawan ng tao bilang immune response. Kaya ito ay madalas na ginagamit din sa ibang sakit tulad ng pananakit ng tyan, sipon, anxiety at iba pa. Ang gamot na ito ay pwede mabili bilang likido, lotion, syrup, gel, eyedrops, tablet, kapsula, cream, at suppositories. "
                    ],
                    "index": 64
                },
                {
                    "rawPattern": [
                        "* antihistamine * work *",
                        "* how * work * antihistamine * "
                    ],
                    "patterns": [
                        "* antihistamine * work *",
                        "* how * work * antihistamine * "
                    ],
                    "response": [
                        "Ang mga antihistamine ay hindi karaniwang ginagamit upang gamutin ang trangkaso.  Ang mga antihistamine ay ginagamit upang mapawi ang ilan sa mga sintomas ng allergy, tulad ng pagbahing, runny nose, at pangangati, ngunit hindi ito epektibo laban sa flu virus. Gumagana ang mga gamot na ito sa pamamagitan ng paghihinto sa mga histamine na inilalabas ng katawan pag nagkaka-allergy. Bukod pa rito, maaaring gamitin ang iba pang mga gamot tulad ng mga pain reliever at pampababa ng lagnat ay maari ding gamitin upang malunasan ang iba pang mga sintomas.\n        "
                    ],
                    "index": 65
                },
                {
                    "rawPattern": [
                        "* ( not * (eat|drink|use) | avoid ) * antihistamine *"
                    ],
                    "patterns": [
                        "* ( not * (eat|drink|use) | avoid ) * antihistamine *"
                    ],
                    "response": [
                        "Karamihan sa mga tao ay maaaring ligtas na uminom ng mga antihistamine. Gayunpaman, ang mga taong buntis, nagpapasuso, bata, umiinom ng iba pang mga gamot, may pinagbabatayan na mga kondisyon tulad ng sakit sa puso, sakit sa atay, sakit sa bato o epilepsy ay kinakailangang maging maingat kapag umiinom nito."
                    ],
                    "index": 66
                },
                {
                    "rawPattern": [
                        "* effect * antihistamine * ",
                        "* not * good * effect * antihistamine *"
                    ],
                    "patterns": [
                        "* effect * antihistamine * ",
                        "* not * good * effect * antihistamine *"
                    ],
                    "response": [
                        "Ang mga antihistamine ay maaaring magdulot ng mga side effect. Ito ay maaaring mag-iba depende sa gamot na kinuha. Gayunpaman, ang mga antihistamine ay maaaring magdulot sa iyo ng antok, pagkahilo, tuyong bibig, malabo ang paningin, paninigas ng dumi, at kahirapan sa pag-ihi. Kung mayroon kang iniindang  kondisyong medikal o umiinom ng iba pang mga gamot, mahalagang magtanong muna sa doktor bago gamitin ito. \n        "
                    ],
                    "index": 67
                },
                {
                    "rawPattern": [
                        "* tip * antihistamine *"
                    ],
                    "patterns": [
                        "* tip * antihistamine *"
                    ],
                    "response": [
                        "Kapag umiinom ng gamot na ito, subukang umiwas sa mga alak, sedatives, at tranquilizers, dahil sa mas mataas na panganib ng antok. Maaari itong maging sanhi ng depresyon ng Central nervous system. Kaya iwasan ang mga aktibidad na nangangailangan ng mental alertness. Mag-ingat kapag ang pasyente ay may kapansanan sa atay o bato. Pareho sa mga matatanda dahil mas sensitibo sila sa masamang epekto.\n        "
                    ],
                    "index": 68
                },
                {
                    "rawPattern": [
                        "* alternative * antihistamine *"
                    ],
                    "patterns": [
                        "* alternative * antihistamine *"
                    ],
                    "response": [
                        "Subukan mong kumain ng luya. Ayon sa Sinus and Allergy Wellness Center, ito ay isang natural na histamine, potent antiviral agent at isang immute booster. Ang luya ay isang ligtas at lubos na epektibong halamang gamot na nagpapaginhawa sa sistema ng pagtunaw at nagpapabuti sa sirkulasyon. Maaari kang gumawa ng ilang tsaa ng luya upang maibsan ang pagsisikip ng ilong at pananakit ng ulo. Habang humihigop ka ng iyong tsaa, langhapin ang singaw na lumalabas sa iyong tasa. Gayundin, subukang gamitin ito kasama ng iba pang mga halamang gamot, tulad ng turmeric, na isa pang malakas na natural na manggagamot."
                    ],
                    "index": 69
                },
                {
                    "rawPattern": [
                        "* (guide|dose) * analgesic *",
                        "* how * (drink|use|eat) * analgesic *",
                        "* how * analgesic * (drink|use|eat) *"
                    ],
                    "patterns": [
                        "* (guide|dose) * analgesic *",
                        "* how * (drink|use|eat) * analgesic *",
                        "* how * analgesic * (drink|use|eat) *"
                    ],
                    "response": [
                        "Para sa ibuprofen an (NSAID), 400mg ang dosage kada inuman at 1200 sa butong araw.\n\n        Para sa naproxen (NSAID), maaari kang uminom ng 500mg kada inuman at 750 sa butong araw.\n        \n        Para sa acetaminophen (paracetamol) maaari kang uminom ng 1000mg tuwing iinom ka at hanggang 4000mg para sa buong araw. \n        \n        Para sa aspirin, na kilala rin bilang acetylsalicylic acid, maaari kang uminom ng hanggang 1000mg na may maximum na pang-araw-araw na dosis. At 3000mg naman para sa mga taong wala pang 65 at 200mg para sa mga taong higit sa 65 taong gulang.\n     \n        Tandaan na ang mga nabangit na paraan ng pag inom nitong gamot ay pawang mga halibawa lamang. \n        "
                    ],
                    "index": 70
                },
                {
                    "rawPattern": [
                        "* analgesic *"
                    ],
                    "patterns": [
                        "* analgesic *"
                    ],
                    "response": [
                        "\n        Ang mga analgesics tulad ng ibuprofen, acetaminophen, aspirin, paracetamol, biogesic, at calpol ay kay kilala din bilang pain killers. Ito ay mga gamot na ginagamit para maibsan ang mga masasakit na bahagi ng katawan tulad ng sakit as ulo at pinsala sa katawan. Ang mga anti-inflammatory analagesics ay tumutulong sa mga pamamaga sa katawan, habang ang mga opioi analgesics naman ay sinasalin kung paano nararamadaman ang sakit sa utak. Tandaang maraming anyo ang analgesics tulad ng mga films, likido, mga patch ng pang-ilong, mga tabletas, mga tablet, mga kapsula, at pinaghalong powder. "
                    ],
                    "index": 71
                },
                {
                    "rawPattern": [
                        "* use * analgesic *"
                    ],
                    "patterns": [
                        "* use * analgesic *"
                    ],
                    "response": [
                        "\n        Ang mga analgesics tulad ng ibuprofen, acetaminophen, aspirin, paracetamol, biogesic, at calpol ay nakakapagpabuti sa mga hindi masyado malalang mga masakit na bahagi ng katawan. Ang pagiging epektibo nito ay naka depende parin sa lala ng kondisyon at sa dosage na ininom ng tao. Ang mga gamot din na ito ay nabibili kahit walang riseta. Maari itong igamot sa mga hindi ganoon ka lalang sakit. Ngunit , hindi nararapat na inumin ito ng sunod sunod na araw. Tandaang maraming anyo ang analgesics tulad ng mga films, likido, mga patch ng pang-ilong, mga tabletas, mga tablet, mga kapsula, at pinaghalong powder."
                    ],
                    "index": 72
                },
                {
                    "rawPattern": [
                        "* analgesic * treat *",
                        "* treat * analgesic *"
                    ],
                    "patterns": [
                        "* analgesic * treat *",
                        "* treat * analgesic *"
                    ],
                    "response": [
                        "Ang analgesics, o mga pain reliever, ay maaaring makatulong sa pagpapagaan ng karamdaman at lagnat na nauugnay sa trangkaso. Gumagana ang mga ito sa pamamagitan ng pagharang sa paggawa ng ilang mga kemikal sa katawan na nagdudulot ng pananakit at pamamaga. Ang mga karaniwang analgesics na ginagamit para sa trangkaso ay kinabibilangan ng acetaminophen, ibuprofen, at aspirin. Gayunpaman, mahalagang sundin ang mga inirerekomendang dosis at pag-iingat, dahil ang ilang analgesics ay maaaring hindi angkop para sa ilang partikular na indibidwal o maaaring magkaroon ng masamang epekto kapag ginamit nang hindi wasto.\n        "
                    ],
                    "index": 73
                },
                {
                    "rawPattern": [
                        "* ( not * (eat|drink|use) | avoid) * analgesic *"
                    ],
                    "patterns": [
                        "* ( not * (eat|drink|use) | avoid) * analgesic *"
                    ],
                    "response": [
                        "Ayon sa WebMD, hindi mo dapat inumin ang gamot na ito para sa self-treatment ng sakit nang mas mahaba kaysa sa 10 araw. Hindi mo dapat gamitin ang gamot na ito upang gamutin ang sarili ng lagnat na tumatagal ng higit sa 3 araw. Sa mga ganitong kaso, kumunsulta sa doktor dahil maaaring mas malubha ang kondisyon mo"
                    ],
                    "index": 74
                },
                {
                    "rawPattern": [
                        "* effect * analgesic * ",
                        "* not * good * effect * analgesic *"
                    ],
                    "patterns": [
                        "* effect * analgesic * ",
                        "* not * good * effect * analgesic *"
                    ],
                    "response": [
                        "Ang mga anti-inflammatory analgesics ay karaniwang ligtas. Ngunit maaari silang magdulot ng mga side effect at komplikasyon, kung madalas mong gamitin ang mga ito, nang masyadong mahaba o sa napakalaking dosis: Pinsala sa lamang loob tulad ng atay o bato, pagtatae o paninigas ng dumi, mga problema sa puso, hypersensitivity, pagduduwal, sakit ng tiyan,  at ulser sa tiyan"
                    ],
                    "index": 75
                },
                {
                    "rawPattern": [
                        "* tip * analgesic *"
                    ],
                    "patterns": [
                        "* tip * analgesic *"
                    ],
                    "response": [
                        "Uminom ng isang buong baso ng tubig (8 ounces/240 mililitro) kasama nito. Huwag humiga nang hindi bababa sa 10 minuto pagkatapos mong inumin ang gamot na ito. Kung sumakit ang tiyan habang iniinom mo ang gamot na ito, maaari mo itong inumin kasama ng pagkain o gatas."
                    ],
                    "index": 76
                },
                {
                    "rawPattern": [
                        "* alternative * analgesic *"
                    ],
                    "patterns": [
                        "* alternative * analgesic *"
                    ],
                    "response": [
                        "Ang Philippine Institute of Traditional and Alternative Healthcare ay nagpahiwatig na maaari mong Ampalaya, Yerba Buena, ulasimang bato o pansit-pansitan, at bayabas ay may analagesic effect."
                    ],
                    "index": 77
                },
                {
                    "rawPattern": [
                        "* dose * decongestant *",
                        "* guide * decongestant *",
                        "* how * (use|drink|eat) * decongestant *",
                        "* how * decongestant * (use|drink|eat)  *"
                    ],
                    "patterns": [
                        "* dose * decongestant *",
                        "* guide * decongestant *",
                        "* how * (use|drink|eat) * decongestant *",
                        "* how * decongestant * (use|drink|eat)  *"
                    ],
                    "response": [
                        "Ang karaniwang dosis ay depende sa gamot na iyong iinumin. Para sa Pseudoephedrine (sudafed) gayunpaman narito ang ilan sa mga rekomendasyon. \n        \n        Ang karaniwang dosis ng pseudoephedrine ay 60mg tablets o bilang isang likidong naglalaman ng 30mg sa 5ml.\n\n        Ang mga matatanda at bata na may edad 12 hanggang 17 taon ay pwede uminom ng isang 60mg tablet o dalawang 5ml na kutsara (10ml) ng likido hanggang 4 na beses sa isang araw.\n        \n        Ang mga batang may edad 6 hanggang 11 taon ay pwedeng uminom ng kalahating tableta (30mg) o isang 5ml na kutsara ng likido hanggang 4 na beses sa isang araw.\n        \n        Tandaan na ang mga nabangit na paraan ng pag inom nitong gamot ay pawang mga halibawa lamang. \n        "
                    ],
                    "index": 78
                },
                {
                    "rawPattern": [
                        "* decongestant *"
                    ],
                    "patterns": [
                        "* decongestant *"
                    ],
                    "response": [
                        "Ang mga decongestant tulad ng phenylephrine, decolgen, o sudafed ay mga gamot na nagpapaginhawa sa pamamagitan ng pagbabawas ng pamamaga, pamamaga at pagbuo ng mucus sa loob ng mga daanan ng ilong o mata. Wala silang ibang epekto sa mga sintomas tulad ng runny nose o pagbahin. Ang mga gamot na ito ay mabibili bilang patak sa ilong, patak sa mata, o di kaya mga tablet, kapsula, at syrup."
                    ],
                    "index": 79
                },
                {
                    "rawPattern": [
                        "* use * decongestant *"
                    ],
                    "patterns": [
                        "* use * decongestant *"
                    ],
                    "response": [
                        "\n        Ang mga decongestants tulad ng phenylephrine, decolgen, o sudafed ay mga gamot na tumutulog magpaginhawa ng baradong ilong. Ang pagbara nito na nararamdaman kapag may flu ay dahil sa virus na nag dudulot ng flu, sinusitis o allergy.Ang mga gamot na ito ay mabibili bilang patak sa ilong, patak sa mata, o di kaya mga tablet, kapsula, at syrup."
                    ],
                    "index": 80
                },
                {
                    "rawPattern": [
                        "* work * decongestant *",
                        "* decongestant * (work|treat) *"
                    ],
                    "patterns": [
                        "* work * decongestant *",
                        "* decongestant * (work|treat) *"
                    ],
                    "response": [
                        "Gumagana ang mga decongestant sa pamamagitan ng pagpapaliit ng mga daluyan ng dugo sa iyong ilong. Ang namamagang tissue sa loob ng ilong ay lumiliit, at mas madaling dumaan ang hangin."
                    ],
                    "index": 81
                },
                {
                    "rawPattern": [
                        "* ( not * (eat|drink|use) | avoid) * decongestant *"
                    ],
                    "patterns": [
                        "* ( not * (eat|drink|use) | avoid) * decongestant *"
                    ],
                    "response": [
                        "Huwag uminom ng mga decongestant kung mayroon kang mataas na presyon ng dugo na hindi nakokontrol. Ang pag-inom ng mga decongestant ay maaaring magpataan ng iyong presyon ng dugo kahit na ito ay kontrolado o halos normal. Maaaring kailanganin mong maghanap ng alternatibo sa mga decongestant. Huwag magbigay ng mga decongestant sa mga batang wala pang 6 taong gulang."
                    ],
                    "index": 82
                },
                {
                    "rawPattern": [
                        "* effect * decongestant * ",
                        "* not * good * effect * decongestant *"
                    ],
                    "patterns": [
                        "* effect * decongestant * ",
                        "* not * good * effect * decongestant *"
                    ],
                    "response": [
                        "Ang mga decongestant ay maaaring magka side effect. Maaari silang pansamantalang magdulot ng nerbiyos, pagkahilo, at mga problema sa pagtulog. Maaari silang maging sanhi ng palpitations ng puso (pakiramdam na mabilis na pagtibog ng iyong puso) o mas mataas na presyon ng dugo"
                    ],
                    "index": 83
                },
                {
                    "rawPattern": [
                        "* tip * decongestant *"
                    ],
                    "patterns": [
                        "* tip * decongestant *"
                    ],
                    "response": [
                        "Ang mga decongestant ay maaaring inumin upang makatulong na mapawi ang kasikipan na nakakaapekto sa ilong, sinuses, at mata o direktang i-spray sa ilong o itanim sa mata para sa mas lokal na epekto."
                    ],
                    "index": 84
                },
                {
                    "rawPattern": [
                        "* alternative * decongestant *"
                    ],
                    "patterns": [
                        "* alternative * decongestant *"
                    ],
                    "response": [
                        "Available ang mga alternatibo sa oral decongestant. Sa larangan ng droga, ang mga antihistamine tulad ng diphenhydramine (Benadryl), chlorpheniramine (Chlor-Trimeton), cetirizine (Zyrtec), at loratadine (Claritin) ay makakatulong sa baradong ilong na ligtas para sa pandinig"
                    ],
                    "index": 85
                },
                {
                    "rawPattern": [
                        "* dose * expectorant*",
                        "* guide * expectorant*",
                        "* how * (eat|use|drink) * expectorant*",
                        "* how * expectorant * (eat|use|drink)  *"
                    ],
                    "patterns": [
                        "* dose * expectorant*",
                        "* guide * expectorant*",
                        "* how * (eat|use|drink) * expectorant*",
                        "* how * expectorant * (eat|use|drink)  *"
                    ],
                    "response": [
                        "\n        Ang pag inom ng expectorants ay naka depedende sa gamot, tanda, at bigat ng katawan ng isa tao. Ang mga susunod kong banggitin ay ilan laman sa mga halimbawa kung paano ito.\n\n        Ang mga matatanda ay maaaring tumagal ng 200 hanggang 400 milligrams (mg) bawat apat na oras.\n\n        Ang mga batang 6 hanggang 12 taong gulang ay maaaring tumagal ng 100 hanggang 200 mg bawat apat na oras.\n\n        Ang mga batang 4 hanggang 6 na taong gulang ay maaaring tumagal ng 50 hanggang 100 mg bawat apat na oras.\n\n        Ang mga bata at sanggol hanggang 4 na taong gulang ay hindi dapat uminom nito.\n        \n        Tandaan na ang mga nabangit na paraan ng pag inom nitong gamot ay pawang mga halibawa lamang. \n        "
                    ],
                    "index": 86
                },
                {
                    "rawPattern": [
                        "* expectorant*"
                    ],
                    "patterns": [
                        "* expectorant*"
                    ],
                    "response": [
                        "Ang mga expectorant tulad ng Guiafenesin o Robutissin ay mga sangkap na nagpapaluwag sa daluyan ng hangin. Ginagawa nila ito sa pamamagitan ng pagtaas ng tubig na nilalaman ng mga secretions na nagpapababa ng kanilang lagkit upang mas madaling maibo ito. Ang mga expectorant ay kadalasang ginagamit upang tumulong sa paggamot sa mga kondisyon ng paghinga tulad ng bronchitis, pulmonya, at karaniwang sipon. Tandaan na ang gamot na ito ay maaring bilhin bilang likido o tabletas.\n        "
                    ],
                    "index": 87
                },
                {
                    "rawPattern": [
                        "* use * expectorant*"
                    ],
                    "patterns": [
                        "* use * expectorant*"
                    ],
                    "response": [
                        "Maaari kang uminom ng expectorant tulad ng Guiafenesin o Robutissin upang makahinga ng mabuti kung mayroon kang sipon o trangkaso. Available ang mga ito bilang mga standalone na gamot o bilang isang sangkap sa isang all-in-one na gamot sa sipon o trangkaso. Tandaan na ang gamot na ito ay maaring bilhin bilang likido o tabletas"
                    ],
                    "index": 88
                },
                {
                    "rawPattern": [
                        "* work * expectorant* ",
                        "* expectorant* (work|treat) * "
                    ],
                    "patterns": [
                        "* work * expectorant* ",
                        "* expectorant* (work|treat) * "
                    ],
                    "response": [
                        "Ang mga expectorant ay nagpapadulas sa iyong daanan ng hangin. Nakakatulong ito na lumuwag ang uhog at gawing mas manipis ang daluyan ng hangin pag humihinga. Sa pamamagitan ng pagluwag ng uhog, ginagawang mas produktibo ng mga expectorant ang iyong ubo. Ginagawa nitong mas madali para sa iyo na mabisang umubo ng uhog at malinis ang iyong lalamunan."
                    ],
                    "index": 89
                },
                {
                    "rawPattern": [
                        "* ( not * (eat|drink|use) | avoid) * expectorant*"
                    ],
                    "patterns": [
                        "* ( not * (eat|drink|use) | avoid) * expectorant*"
                    ],
                    "response": [
                        "Dapat kang makipag-usap sa doktor bago gumamit ng expectorant lalo na kung ikaw ay buntis o nagpapasuso. Kung mayroon kang anumang uri ng reaksiyong alerdyi o hindi pagpaparaan sa mga expectorant sa nakaraan, hindi mo dapat gamitin ang mga gamot na ito.\n\n        Mag-ingat kapag nagmamaneho o gumagamit ng makinarya habang umiinom ng expectorant, dahil ang mga gamot na ito ay maaaring magdulot sa iyo ng antok o pagkahilo."
                    ],
                    "index": 90
                },
                {
                    "rawPattern": [
                        "* effect * expectorant* ",
                        "* not * good * effect * expectorant *"
                    ],
                    "patterns": [
                        "* effect * expectorant* ",
                        "* not * good * effect * expectorant *"
                    ],
                    "response": [
                        "Ang mga expectorant ay hindi karaniwang nagdudulot ng malubhang epekto. Ang pinakakaraniwang epekto ay ang pagkahilo, pag-aantok, at pantal."
                    ],
                    "index": 91
                },
                {
                    "rawPattern": [
                        "* tip * expectorant*"
                    ],
                    "patterns": [
                        "* tip * expectorant*"
                    ],
                    "response": [
                        "Huwag durugin ang mga tabletas, at siguraduhing sukatin ang mga likidong formulasyon gamit ang mga panukat na tool na ibinigay kasama ng iyong gamot. Kadalasang inirerekomenda na uminom ka ng maraming likido kapag umiinom ng expectorant."
                    ],
                    "index": 92
                },
                {
                    "rawPattern": [
                        "* alternative * expectorant*"
                    ],
                    "patterns": [
                        "* alternative * expectorant*"
                    ],
                    "response": [
                        "Ang mga natural na expectorant ay isa pang opsyon kung sinusubukan mong paluwagin ang uhog at mapawi ang pagsikip ng dibdib. Kasama sa mga natural na expectorant ang:Menthol, Ivyleaf extract , oral hydration (pag-inom ng maraming tubig), steaming (paglanghap ng mainit na basang hangin), at honey (pagdaragdag ng pulot sa mga inumin)"
                    ],
                    "index": 93
                },
                {
                    "rawPattern": [
                        "* (dose|guide|drink|use|eat) * antitussive  *"
                    ],
                    "patterns": [
                        "* (dose|guide|drink|use|eat) * antitussive  *"
                    ],
                    "response": [
                        "Sa pangkalahatan, ang mga antitussive ay iniinom at may iba't ibang anyo, tulad ng mga tablet, kapsula, syrup, at patak. Ang dosis ay karaniwang tinutukoy ng isang doktor at maaaring iakma batay sa mga salik tulad ng edad at bigat ng pasyente, ang kalubhaan ng ubo, at anumang iba pang kondisyong pangkalusugan na maaaring mayroon ang pasyente.\n        \n        Mayroong ilang mga karaniwang kaalaman sa dosis na maaaring matagpuan mula sa mga kagalang-galang na mapagkukunang medikal online. Para sa mga antitussive bilang lozenges, maaaring mag-iba ang dosis. Para sa mga, mga matatanda at bata 12 taong gulang at mas matanda-5 hanggang 15 mg bawat dalawa hanggang apat na oras, kung kinakailangan.Para sa mga mga batang 6 hanggang 12 taong gulang, 5 hanggang 15 mg bawat dalawa hanggang anim na oras, kung kinakailangan. Para naman sa mga batang 4 hanggang 6 na taong gulang, pwede ang 5 mg kada apat na oras, kung kinakailangan. Mga bata at sanggol hanggang 4 na taong gulang—Hindi inirerekomenda ang paggamit. \n        \n        Para sa mga antitussive na kinuha bilang syrup, ang dosis ay nag-iiba din. Ang mga matatanda at bata 12 taong gulang at mas matanda ay pwedeng kumain ng 30 mg tuwing anim hanggang walong oras, kung kinakailangan. Ang mga batang 6 hanggang 12 taong gulang naman ay pwedeng uminom ng 7 mg tuwing apat na oras o 15 mg tuwing anim hanggang walong oras, kung kinakailangan. Para naman sa mga batang 4 hanggang 6 na taong gulang, pwedeng mag take ng 3.5 mg bawat apat na oras o 7.5 mg bawat anim hanggang walong oras, kung kinakailangan. Ngunit ang mga bata at sanggol hanggang 4 na taong gulang ay hindi pinapayuhang kumain nito.\n        \n        Bagama't ipinakita ko sa iyo ang ilang impormasyon kung paano uminom ng mga antitussive, mas mainam kung humingi ka ng tulong sa mga doktor habang nagrereseta sila ng mga naaangkop na gamot para sa iyong kondisyon.\n        "
                    ],
                    "index": 94
                },
                {
                    "rawPattern": [
                        "* what * antitussive  *"
                    ],
                    "patterns": [
                        "* what * antitussive  *"
                    ],
                    "response": [
                        "Ang mga antitussive tulad ng Dexthromethorphan o Robitussin ay mga reseta o over-the-counter na gamot na ginagamit para gamutin ang ubo. Maaari itong mabili bilang isang tableta, kapsula, gel, likido, syrup, lozenge o strips. Gayunpaman, maaari ko lamang irekomenda ang karaniwang dosis ng mga logenze at syrup form nito"
                    ],
                    "index": 95
                },
                {
                    "rawPattern": [
                        "* use * antitussive *"
                    ],
                    "patterns": [
                        "* use * antitussive *"
                    ],
                    "response": [
                        "Karaniwang ginagamit ang mga antitussive tulad ng Dexthromethorphan o Robitussin upang gamutin ang tuyong ubo na dulot ng mga allergy, sakit sa paghinga, o impeksyon. Maaari ding gamutin ng mga antitussive ang post-viral na ubo, o isang patuloy na ubo na nabubuo pagkatapos malutas ang isang impeksiyon.Maaari itong mabili bilang isang tableta, kapsula, gel, likido, syrup, lozenge o strips."
                    ],
                    "index": 96
                },
                {
                    "rawPattern": [
                        "* antitussive * (work|treat) *"
                    ],
                    "patterns": [
                        "* antitussive * (work|treat) *"
                    ],
                    "response": [
                        "Ang mga antitussive tulad ng Dexthromethorphan o Robitussin ay gumagana sa pamamagitan ng pagpigil sa isang coordinating region para sa pag-ubo na matatagpuan sa stem ng utak, na nakakagambala sa cough reflex arc; bagaman ang eksaktong mekanismo ng pagkilos ay hindi alam.Maaari itong mabili bilang isang tableta, kapsula, gel, likido, syrup, lozenge o strips. "
                    ],
                    "index": 97
                },
                {
                    "rawPattern": [
                        "* ( not * (eat|drink|use) | avoid) * antitussive *"
                    ],
                    "patterns": [
                        "* ( not * (eat|drink|use) | avoid) * antitussive *"
                    ],
                    "response": [
                        "Ang gamot na ito ay hindi ligtas para sa mga batang wala pang 4 taong gulang."
                    ],
                    "index": 98
                },
                {
                    "rawPattern": [
                        "* effect * antitussive  *",
                        "* not * good * effect * antitussive *"
                    ],
                    "patterns": [
                        "* effect * antitussive  *",
                        "* not * good * effect * antitussive *"
                    ],
                    "response": [
                        "Ang pinakakaraniwang epekto ay kinabibilangan ng pagduduwal at pag-aantok. Ang ilang mga pasyente ay maaaring makaranas ng pantal o kahirapan sa paghinga. Ang mataas na dosis ay maaaring magdulot ng mga guni-guni at pagkakahiwalay, at ang gamot ay naiulat na ginagamit bilang isang panlibang na gamot. Kaya dapat mag ingat pag kumain ng antitussives"
                    ],
                    "index": 99
                },
                {
                    "rawPattern": [
                        "* tip * antitussive  *"
                    ],
                    "patterns": [
                        "* tip * antitussive  *"
                    ],
                    "response": [
                        "Inumin ang gamot na ito sa pamamagitan ng bibig na mayroon o walang pagkain na may isang buong baso ng tubig (8 onsa o 240 mililitro) o ayon sa direksyon ng iyong doktor."
                    ],
                    "index": 100
                },
                {
                    "rawPattern": [
                        "* alternative * antitussive  *"
                    ],
                    "patterns": [
                        "* alternative * antitussive  *"
                    ],
                    "response": [
                        "Ang Honey o pulot ay isang napapanahong lunas para sa namamagang lalamunan. Ayon sa isang pag-aaral, maaari din nitong mapawi ang ubo nang mas epektibo kaysa sa mga OTC na gamot na naglalaman ng dextromethorphan (DM), isang panpigil sa ubo."
                    ],
                    "index": 101
                },
                {
                    "rawPattern": [
                        "* (guide|dose|drink|use|eat) * lozenge*",
                        "* lozenge* (guide|dose|drink|use|eat)  *"
                    ],
                    "patterns": [
                        "* (guide|dose|drink|use|eat) * lozenge*",
                        "* lozenge* (guide|dose|drink|use|eat)  *"
                    ],
                    "response": [
                        "Hayaang matunaw ang lozenge nang dahan-dahan sa iyong bibig at lunukin ang natunaw na likido kasama ng iyong laway. Huwag nguyain o lunukin nang buo. Karaniwang ginagamit ang produktong ito tuwing 2 oras kung kinakailangan"
                    ],
                    "index": 102
                },
                {
                    "rawPattern": [
                        "* lozenge*"
                    ],
                    "patterns": [
                        "* lozenge*"
                    ],
                    "response": [
                        "Ginagamit ang lozenges tulad ng Bactidol o Strepsils upang pansamantalang mapawi ang pananakit mula sa maliliit na problema sa bibig (tulad ng mga ulser, namamagang gilagid/lalamunan, pinsala sa bibig/gigilid)."
                    ],
                    "index": 103
                },
                {
                    "rawPattern": [
                        "* use * lozenge*"
                    ],
                    "patterns": [
                        "* use * lozenge*"
                    ],
                    "response": [
                        "Ang pag gamit ng Lozenges tulad ng Bactidol o Strepsils ay isang abot-kayang opsyon para sa nagpapakilalang paggamot ng talamak at talamak na pharyngitis, pangangati o pamamaga ng upper respiratory tract at pagpapagaan ng hindi kasiya-siyang sensasyon sa lalamunan."
                    ],
                    "index": 104
                },
                {
                    "rawPattern": [
                        "* lozenge * treat *",
                        "* work * lozenge*",
                        "* lozenge * work *"
                    ],
                    "patterns": [
                        "* lozenge * treat *",
                        "* work * lozenge*",
                        "* lozenge * work *"
                    ],
                    "response": [
                        "Kapag sumipsip ka ng lozenge Lozenges tulad ng Bactidol o Strepsils, nagsisimula itong matunaw at maglalabas ng gamot. Kaya dapat itong tunawin nang dahan-dahan sa bibig upang pansamantalang sugpuin ang ubo, at mag-lubricate at paginhawahin ang nanggagalit na mga tisyu ng lalamunan.\n        \n        Ang mga lozenges ay tumutulong sa paglaban sa sipon, at karamihan ay may pampamanhid upang makatulong na mabawasan ang sakit. Naglalaman din ito ng menthol o eucalyptus, na makakatulong sa pagpapalamig at pagpapatahimik sa lalamunan. Ang iba ay naglalaman ng pulot, na kilala na may mga katangian ng pagsugpo sa ubo."
                    ],
                    "index": 105
                },
                {
                    "rawPattern": [
                        "* ( not * (eat|drink|use) | avoid ) * lozenge*"
                    ],
                    "patterns": [
                        "* ( not * (eat|drink|use) | avoid ) * lozenge*"
                    ],
                    "response": [
                        "Kung mayroon kang namamagang lalamunan na malubha o tumatagal ng higit sa 2 araw, o ubo na tumatagal ng higit sa 7 araw na patuloy na bumabalik, o may mga sintomas na may lagnat, sakit ng ulo, pantal, pamamaga, pagduduwal, o pagsusuka, magpatingin na sa iyong doktor kaagad"
                    ],
                    "index": 106
                },
                {
                    "rawPattern": [
                        "* effect * lozenge*",
                        "* not * good * effect * lozenge*"
                    ],
                    "patterns": [
                        "* effect * lozenge*",
                        "* not * good * effect * lozenge*"
                    ],
                    "response": [
                        "Maaaring mangyari ang bahagyang paghapdi ng lalamunan. Kung ang alinman sa mga epektong ito ay tumagal o lumala, sabihin kaagad sa iyong doktor o parmasyutiko."
                    ],
                    "index": 107
                },
                {
                    "rawPattern": [
                        "* tip * lozenge*"
                    ],
                    "patterns": [
                        "* tip * lozenge*"
                    ],
                    "response": [
                        "Huwag nguyain o lunukin nang buo. Ang produktong ito ay karaniwang ginagamit tuwing 2 oras kung kinakailangan."
                    ],
                    "index": 108
                },
                {
                    "rawPattern": [
                        "* alternative * lozenge*"
                    ],
                    "patterns": [
                        "* alternative * lozenge*"
                    ],
                    "response": [
                        "Ang pagsipsip ng tsaa na may pulot ay maaaring makatulong at mapawi ang mga kondisyon ng lalamunan."
                    ],
                    "index": 109
                },
                {
                    "rawPattern": [
                        "* where * (go|treat) * influenza *"
                    ],
                    "patterns": [
                        "* where * (go|treat) * influenza *"
                    ],
                    "response": [
                        "Maaari mong alagaan ang sarili mo sa inyong bahay lamang. Gayunpaman, magpatingin kaagad sa iyong doktor kung ikaw ay nasa mas mataas na panganib ng malubhang komplikasyon ng trangkaso"
                    ],
                    "index": 110
                },
                {
                    "rawPattern": [
                        "* symptom * influenza * ",
                        "* tell * influenza *"
                    ],
                    "patterns": [
                        "* symptom * influenza * ",
                        "* tell * influenza *"
                    ],
                    "response": [
                        "Ayon sa Center of Disease and Control, ang mga taong may trangkaso ay maaring makaranas ng lagnat, ubo, namamagang lalamunan, sipon o baradong ilong, pananakit ng kalamnan o katawan, pananakit ng ulo, at pagkapagod (pagkapagod). Ang ilan sa iba ay maaaring magkaroon ng pagsusuka at pagtatae kahit na ito ay mas karaniwan sa mga bata at matatanda."
                    ],
                    "index": 111
                },
                {
                    "rawPattern": [
                        "* (treat|remove|treat) * vomit *",
                        "* (eat|drink|bilhin) * vomit * "
                    ],
                    "patterns": [
                        "* (treat|remove|treat) * vomit *",
                        "* (eat|drink|bilhin) * vomit * "
                    ],
                    "response": [
                        "\n        Ang pagsusuka ay ang dahasang paglabas ng kinain ng isang tao galing sa kanyang bitua papuntang bunganga at minsan sa ilong din na pwedeng umubos sa tubig at electrolytes ng katawan. Ito ay karaniwang sintomas ng isang sakit tulad ng gastroenteritis, pagkalason, motion sickness, pagiging buntis ang iba pa.\n\n        Kung ikaw ay nagsusuka, maari mong sundin ang mga sumusunod.\n        \n        1. Maghintay ng ilang oras bago kumain o uminom. \n\n        2. Subukang uminom paunti unti ng fluids tulad ng tubig, sports drinks, o sabaw. HUwag kang uminom ng mga mga maasim na juice o gatas. At saka umiwas ka sa mga pagkain o inuming may alchohol, caffeine, mamantikain, maanghang, gatas o keso. Kung kaya mo ay uminom kalang ng tubig paunti unti.\n\n        3. Kung ikaw ay gutom, subukan mong kumain ng saging, kanin, tuyong tinapay, o soda crakers. Kung kaya mo nang kumain ng mga walang lasang pagkain , saka lang kumain ng normal. Ang mga wala masyadong lasang pagkain ay mga tulad ng patatas, bigay, pasta, mga niluto naka pack na prutas, mga nalutong gulay, at karne. \n\n        Laging isa isip na ang paulit ulit na pagsusuka ay nangangailangan ng agarang gamutan. \n        "
                    ],
                    "index": 112
                },
                {
                    "rawPattern": [
                        "* (treat|remove|treat) * nausea *",
                        "* (what|how|method) * (treat|remove|treat) *  nausea *",
                        "* eat * (avoid| (not|not) * (eat|drink|bilhin)) * nausea *"
                    ],
                    "patterns": [
                        "* (treat|remove|treat) * nausea *",
                        "* (what|how|method) * (treat|remove|treat) *  nausea *",
                        "* eat * (avoid| (not|not) * (eat|drink|bilhin)) * nausea *"
                    ],
                    "response": [
                        "Ang nausea o pag duduwal ay iyong pakiramdam na madalas na nagyayari bago magsuka ang isang tao. Ito ay maaring dahilan ng ibang sakit tulad ng motion sickess, sakit sa tyan, epekto ng mga kinaing gamot, at iba pa. Para maibsan ang iniindang karamdaman, magpahinga at uminom ng tubig, sports drinks, o sabaw. Umiwas muna sa mga pinirito , mamantikaing pagkain at mga matatamis. Sa halip, subukang kumain ng mga pagkaing wala masyadong lasa tulad ng saltine crackers o tinapay ng paunti unti. Pag nagpapahinga naman ay subukang I angat ang iyong ulo.\n        "
                    ],
                    "index": 113
                },
                {
                    "rawPattern": [
                        "* boil * ",
                        "* boil * water * "
                    ],
                    "patterns": [
                        "* boil * ",
                        "* boil * water * "
                    ],
                    "response": [
                        "Ang pagpapakulo ng tubig ay gingawa upang mapatay ang mga bacteria, virus at protozoa na nakahalo sa tubig. Kapag magpapakulo, siguraduhin na kumukulo ang tubig ng hindi baba sa isang minuto. Kung medyo malabo naman ang tubig, subukang i filter muna ito gamit ang malinis na tela o papel bago ito pakuluin. Para magkaroon ng lasa ang tubig, maari mong lagyan ng isang pinch ng asin kada litro o ilipat ang tubig sa ibang malinis na paglalagyan. "
                    ],
                    "index": 114
                },
                {
                    "rawPattern": [
                        "* guide * clean *",
                        "* clean * water *",
                        "* what * (bilhin|use) * clean * water *"
                    ],
                    "patterns": [
                        "* guide * clean *",
                        "* clean * water *",
                        "* what * (bilhin|use) * clean * water *"
                    ],
                    "response": [
                        "Ang paglilinis ng tubig ay kinakailangan upang mawala ang mga masasamang bacteria, virus o parasites na pwedeng makapagdulot ng sakit tulad ng cholera , typhoid, dystentery at diarrhea. Kapag ang tubig ay di malinia, maari itong macontaminate ng mga microorgaanisms na pwedeng mapagmulan ng ibang ibang sakit. Ang prosesong ito ay nagpapababa na tsansang makakuha ang isang tao ng water borne diseases at masisiguro nito na pwedeng mainom ang tubig.\n\n        Pwede ka mag disinfect ng tubig gamit ang chlorine. Mag handa ng isang stock ng tubig kung saan lagyan ito ng chlorine compounds na 65% hanggang 75% kada litro. Pagkatapos ay maglagay ng dalawang teaspoon ng stock solution na ito sa limang galon (20 liters) ng tubig. Haluin ito ng maayos at hayaan ito ng at least 30 minutes bago unimin.\n        "
                    ],
                    "index": 115
                },
                {
                    "rawPattern": [
                        "* (treat|remove|treat) * (fever|fever) * "
                    ],
                    "patterns": [
                        "* (treat|remove|treat) * (fever|fever) * "
                    ],
                    "response": [
                        "Pwede kang uminom ng fluids para mapatili mo ang sarili mong hydrated. May mga gamot din na nabibili sa botika upang maibsan ang iniida mong sakit. Pwede kang huminge ng payo sa pharmachist ukol sa acetaminophen para sa sakit ng katawan. Kapag ikaw naman ay nilalagnat, subukan maglagay ng medyo basa at mainit na damit sa noo ng pasyente. Magsuot ka din na komportableng mga damit. Hingit na mahalaga na mapanatili mong mainit ang iyong katawan. Magpahinga ka din."
                    ],
                    "index": 116
                },
                {
                    "rawPattern": [
                        "* (treat|remove|treat) * clog * nose *"
                    ],
                    "patterns": [
                        "* (treat|remove|treat) * clog * nose *"
                    ],
                    "response": [
                        "Ang clogged nose ay nagyayari dahil may bumabara sa iyong nasal passages. Ito ay tinatawag na nasal congestion at maaring dahil ito sa allergies, sipon, flu, sinus infection at iba pang sakit sa baga. Kabilang sa sinotmas ng clogged nose ang hirap na paghinga, madalas na pagkahulog ng sipon or pagbara nito, pressure o sakit sa may ilong at kapag hindi masyado makaamoy at kapag mawal ng lasa ang isang tao.\n\n        Para bumuti ang iniindang sakit, ugaliing uminom ng marmaing tubig upang magnipinis ang sipon sa iyong sinus. Huwag ka ding uminom ng mga inuming nakaka dehydrate tulad ng kape at iyong may mga alchohol. Pwede kang uminom ng mga mainit na tsaa o mga sabaw. Pwede ka ding kumain ng Vitamin C. Ang pag tataob ay pwede ding makatulog sayo upang maka hinga ka. Kinakailangan mo din ng mahabang pahinga. Maglakagay ka din ng warm compress sa may ilong mo. Kung wala ka nito ay subukan mong kumuha ka damit na pwede mong basain ng mainit na tubig at idampi ito sa mukhang ng ilang beses upang maibsan ang nasal congestion. Pwede ka ding gumamit ng saline nasal spray upang bumuka ang iyong nasal pasages. Napag alaman din na ang pagkain ng mga maaanghang ay nakakatulog sa clogged nose. Panghuli, ugaliing gumamit ng tamang gamot. "
                    ],
                    "index": 117
                },
                {
                    "rawPattern": [
                        "* (treat|remove|treat) *  sick * head *"
                    ],
                    "patterns": [
                        "* (treat|remove|treat) *  sick * head *"
                    ],
                    "response": [
                        "Ang sakit sa ulo ay isa iba iba kaya iba iba din ang mga paraan ng paggamot nito. Ang tension headaches ay kilala din sa hatband headaches. Dahil ang sakit ay nagagagling sa likod ng ulo, temples at noo. Ito ay maaring manatili ng ilang oras hanggang sa ilang araw. Ang mga gamot nito ay physical therapy , muscle relaxants, at over the counter pain relievers (aspirin o ibuprofen). Ang isa pang uri ng sakit sa ulo ay ang tinatawag na migraine. Para maibsan ang sakit ng ulo. Subukang magkulong sa isang madilim na kwarto at mag lagay ng hot o cold compress. Subukan din imasahe ang iyong katawan."
                    ],
                    "index": 118
                },
                {
                    "rawPattern": [
                        "* (treat|remove|treat) *  stomach * cramp *",
                        "* (treat|remove|treat) * sick * (stomach|stomach) *"
                    ],
                    "patterns": [
                        "* (treat|remove|treat) *  stomach * cramp *",
                        "* (treat|remove|treat) * sick * (stomach|stomach) *"
                    ],
                    "response": [
                        " Madalas na ang sakit sa tyan ay nawawala din kahit di ginagamot. Ngunit, may mga bagay bagay parin namang pwede gawin. Subukang mag lagay na mainit na tubig sa botelya sa iyong tiyan. Pwede din subukang maligo sa mainit na tubig. Ingatan mo lang at baka ikaw ay mapaso. Uminom din ng maraming tubig. Huwag ka munang iminom ng kape, tsaaa o may mga alchohol dahil magpapalala ito ng sakit ng tyan. Kapag pwede ka nang kamain ulit, sumubukan mong uminom ng mga tubig tapos kumain ka ng mga wala masyadong lasang pagkain tulad ng crackers, kanin, saging o toas. Magpahinga ka din."
                    ],
                    "index": 119
                },
                {
                    "rawPattern": [
                        "* (treat|remove|treat) * sick * throat *"
                    ],
                    "patterns": [
                        "* (treat|remove|treat) * sick * throat *"
                    ],
                    "response": [
                        "Kapag nananakit ang iyong lalamunan, imuinom ka ng maraming tubig upang matanggal ang sipon na dumikit o para hindi matuyo ang iyong lalamunan. Kumain ng gamot. I angat ng kaunti ang ulo sa unan kapag hirap kang huminga at para hindi ka masyado umubo.  Subukan mong kumain ng cough drops o lozenges upang guminhawa ang iyong lalamunan. Huwag ka din lumapit sa mga usok. Sa ibang paraan, pwede kang mag mugmog ng mainit na tubig. Ngunin hindi ito ipanapayo sa mga bata."
                    ],
                    "index": 120
                },
                {
                    "rawPattern": [
                        "* wear * sneeze *"
                    ],
                    "patterns": [
                        "* wear * sneeze *"
                    ],
                    "response": [
                        "Pinapayuhang takpan ang bunganga at ilong kapag ikaw ang bumabahing o umuubo upang hindi ka magkalat ng virus sa iyong paligid. Pwede kang bumahing sa isang tisuee kung kinakailangan. Ngunit siguraduhin mong itapon ito ng maayo. Kung wala ka namang tissue, bumahing o umubo sa iyong braso at hindi sa iyong kamay. Pagkatapos ay hugasan ito ng maayo at gumamit ng sanitizer."
                    ],
                    "index": 121
                },
                {
                    "rawPattern": [
                        "* guide * clean * kamay * ",
                        "* clean * kamay * ",
                        "* clean * kamay * "
                    ],
                    "patterns": [
                        "* guide * clean * kamay * ",
                        "* clean * kamay * ",
                        "* clean * kamay * "
                    ],
                    "response": [
                        "Ang pag huhugas ng kamay ay mag proprotekta sayo laban sa mga mikrobyo. Maglagay ng sabon nang hindi bababa sa 20 segundo. Pagkatapos maglagay ng sabon sa iyong mga kamay, kuskusin ang iyong mga kamay nang hindi bababa sa 20 segundo. Gawin mo yan hanggang matapos mong kantahin ang Maligayang Kaarawan nang dalawang beses. \n        \n        Gumamit ng hand sanitizer kapag hindi posible ang paghuhugas. Gumamit ng alcohol-based na hand sanitizer kapag walang tubig. Ilapat ang hand sanitizer gaya ng pag-hand lotion mo, siguraduhing takpan ang harap at likod ng magkabilang kamay. Gumamit ng isang produkto na naglalaman ng hindi bababa sa 60% na alkohol."
                    ],
                    "index": 122
                },
                {
                    "rawPattern": [
                        "* (symptom|symptom|symptom) *"
                    ],
                    "patterns": [
                        "* (symptom|symptom|symptom) *"
                    ],
                    "response": [
                        "\n        Ang mga sakit may may kanya kanyang sintomas at senyales. Upang matulungan kita, baka pwedeng maging specific ka sa impormasyon sa mga chat mo kung para sa pagtatae o trangkaso ang hinahanap mo."
                    ],
                    "index": 123
                },
                {
                    "rawPattern": [
                        "* (hi|hello) *",
                        "* (good)? (umaga|gabi|tanghali) *",
                        "* kamusta *"
                    ],
                    "patterns": [
                        "* (hi|hello) *",
                        "* (good)? (umaga|gabi|tanghali) *",
                        "* kamusta *"
                    ],
                    "response": [
                        "Kamusta, paano kita matutulungan. Paumanhin, hindi ko nauwaan ang nasabi mo. Hindi ako ganon katalino kaya kung maari ay tulungan natin ang isa't isa sa ating paguusap."
                    ],
                    "index": 124
                },
                {
                    "rawPattern": [
                        "* antimotility *"
                    ],
                    "patterns": [
                        "* antimotility *"
                    ],
                    "response": [
                        "Paumanhin, hindi ko naintindihan ang iyong sinabi tungkol sa antimotilities."
                    ],
                    "index": 125
                },
                {
                    "rawPattern": [
                        "*bismuth*"
                    ],
                    "patterns": [
                        "*bismuth*"
                    ],
                    "response": [
                        "Paumanhin, hindi ko naintindihan ang iyong sinabi tungkol sa bismuth subsalicylate."
                    ],
                    "index": 126
                },
                {
                    "rawPattern": [
                        "* antihistamine *"
                    ],
                    "patterns": [
                        "* antihistamine *"
                    ],
                    "response": [
                        "Hindi kita naintindihan ba, pasensya na. Ano nga iyong sinasabi mo tungkol sa bismuth subsalicylate"
                    ],
                    "index": 127
                },
                {
                    "rawPattern": [
                        "* analgesic *"
                    ],
                    "patterns": [
                        "* analgesic *"
                    ],
                    "response": [
                        "Hindi ko naintindihan ang mga sinabi mo tungkol sa analgesics. Pasensya na."
                    ],
                    "index": 128
                },
                {
                    "rawPattern": [
                        "* nsaid *"
                    ],
                    "patterns": [
                        "* nsaid *"
                    ],
                    "response": [
                        "Hindi ko naintindihan ang mga sinabi mo tungkol sa nsaids. Pasensya na."
                    ],
                    "index": 129
                },
                {
                    "rawPattern": [
                        "* decongestant *"
                    ],
                    "patterns": [
                        "* decongestant *"
                    ],
                    "response": [
                        "Alam kong tungkol sa decongestants pinagsasabi mo, pero hindi ko ito naintindihan ba. Pasensya na."
                    ],
                    "index": 130
                },
                {
                    "rawPattern": [
                        "* expectorant *"
                    ],
                    "patterns": [
                        "* expectorant *"
                    ],
                    "response": [
                        "Alam kong tungkol sa expectorants pinagsasabi mo, pero hindi ko ito naintindihan ba. Pasensya na."
                    ],
                    "index": 131
                },
                {
                    "rawPattern": [
                        "* antitussive *"
                    ],
                    "patterns": [
                        "* antitussive *"
                    ],
                    "response": [
                        "Alam kong tungkol sa antitussives pinagsasabi mo, pero hindi ko ito naintindihan ba. Pasensya na."
                    ],
                    "index": 132
                },
                {
                    "rawPattern": [
                        "* lozenge *"
                    ],
                    "patterns": [
                        "* lozenge *"
                    ],
                    "response": [
                        "Alam kong tungkol sa lozenges pinagsasabi mo, pero hindi ko ito naintindihan ba. Pasensya na."
                    ],
                    "index": 133
                },
                {
                    "rawPattern": [
                        "* (treat|treat) *"
                    ],
                    "patterns": [
                        "* (treat|treat) *"
                    ],
                    "response": [
                        "Gusto kitang tulungan ngunit kinakailangan ko ng karagdagang impormasyon. Pwede mo ako tanungin tungkol sa pagtatae o trangkaso. Pwede kitang mabigyan ng impormasyon para matulungan ka."
                    ],
                    "index": 134
                },
                {
                    "rawPattern": [
                        "* diarrhea *"
                    ],
                    "patterns": [
                        "* diarrhea *"
                    ],
                    "response": [
                        "Mukhang hindi ko naintindihan ang sinabi mo tungkol sa pagtatae. Para matulungan kita ng maayos, baka pwedeng pakiulit ang iyong sinabi. Maari kang mag tanong tungkol sa mga gamot, mga payo, at kung ano ang mga dapat mong iwasan o pwede mong kaining mga pagkain."
                    ],
                    "index": 135
                },
                {
                    "rawPattern": [
                        "* influenza *"
                    ],
                    "patterns": [
                        "* influenza *"
                    ],
                    "response": [
                        "Mukhang hindi ko naintindihan ang sinabi mo tungkol sa influenza o trangkaso. Para matulungan kita ng maayos, baka pwedeng pakiulit ang iyong sinabi. Maari kang mag tanong tungkol sa mga gamot, mga payo, at kung ano ang mga dapat mong iwasan o pwede mong kaining mga pagkain."
                    ],
                    "index": 136
                },
                {
                    "rawPattern": [
                        "*vomit*"
                    ],
                    "patterns": [
                        "*vomit*"
                    ],
                    "response": [
                        "Pasensya na, hindi ko masyadong naintindihan ang sinabi mo tungkol sa pagsusuka. Ngunit, pwede kitang bigyan ng payo para guminhawa ang nakakaramdam nito"
                    ],
                    "index": 137
                },
                {
                    "rawPattern": [
                        "*headache*",
                        "*head*",
                        "*sick*head*"
                    ],
                    "patterns": [
                        "*headache*",
                        "*head*",
                        "*sick*head*"
                    ],
                    "response": [
                        "Pasensya na, hindi ko masyadong naintindihan ang sinabi mo tungkol sa masakit na ulo. Ngunit, pwede kitang bigyan ng payo para guminhawa ang nakakaramdam nito"
                    ],
                    "index": 138
                },
                {
                    "rawPattern": [
                        "*stomach * cramp *",
                        "* cramp *",
                        "* stomach *"
                    ],
                    "patterns": [
                        "*stomach * cramp *",
                        "* cramp *",
                        "* stomach *"
                    ],
                    "response": [
                        "Pasensya na, hindi ko masyadong naintindihan ang sinabi mo tungkol sa sumasakit na tyan. Ngunit, pwede kitang bigyan ng payo para guminhawa ang nakakaramdam nito"
                    ],
                    "index": 139
                },
                {
                    "rawPattern": [
                        "*clog*nose*",
                        "*clog*nose*",
                        "*nose*"
                    ],
                    "patterns": [
                        "*clog*nose*",
                        "*clog*nose*",
                        "*nose*"
                    ],
                    "response": [
                        "Pasensya na, hindi ko masyadong naintindihan ang sinabi mo tungkol sa baradong ilong o taong hindi masyado makahinga. Ngunit, pwede kitang bigyan ng payo para guminhawa ang nakakaramdam nito"
                    ],
                    "index": 140
                },
                {
                    "rawPattern": [
                        "*nausea*"
                    ],
                    "patterns": [
                        "*nausea*"
                    ],
                    "response": [
                        "Pasensya na, hindi ko masyadong naintindihan ang sinabi mo tungkol sa nausea o pagduduwal. Ngunit, pwede kitang bigyan ng payo para guminhawa ang nakakaramdam nito"
                    ],
                    "index": 141
                },
                {
                    "rawPattern": [
                        "*fever*"
                    ],
                    "patterns": [
                        "*fever*"
                    ],
                    "response": [
                        "Pasensya na, hindi ko masyadong naintindihan ang sinabi mo tungkol sa pagkakaroon ng lagnat. Ngunit, pwede kitang bigyan ng payo para guminhawa ang nakakaramdam nito"
                    ],
                    "index": 142
                },
                {
                    "rawPattern": [
                        "*"
                    ],
                    "patterns": [
                        "*"
                    ],
                    "response": [
                        "Pasensya na, mukhang hindi ko naiintindihan ang iyong sinasabi."
                    ],
                    "index": 143
                }
            ],
            "index": 144
        }
    },
    "MAG": {
        "wildcardArchive": {

            "forwardIndex": [
                {
                    "rawPattern": "* not * eat * none * peel * eat * ",
                    "pattern": "^(.*)\\bnot\\b(.*)\\beat\\b(.*)\\bnone\\b(.*)\\bpeel\\b(.*)\\beat\\b(.*)$",
                    "index": 14
                },
                {
                    "rawPattern": "* doctor * (remove|drug|treat|treat) *  (remove|drug|treat) * diarrhea *",
                    "pattern": "^(.*)\\bdoctor\\b(.*)(\\bremove\\b|\\bdrug\\b|\\btreat\\b|\\btreat\\b)(.*)(\\bremove\\b|\\bdrug\\b|\\btreat\\b)(.*)\\bdiarrhea\\b(.*)$",
                    "index": 9
                },
                {
                    "rawPattern": "* not * eat * (none cook|raw) * meat * ",
                    "pattern": "^(.*)\\bnot\\b(.*)\\beat\\b(.*)(\\bnonecook\\b|\\braw\\b)(.*)\\bmeat\\b(.*)$",
                    "index": 15
                },
                {
                    "rawPattern": "* not * good * hydrate * \bdiarrhea\b(?!_) *",
                    "pattern": "^(.*)\\bnot\\b(.*)\\bgood\\b(.*)\\bhydrate\\b(.*)\b\\bdiarrhea\\b\b(?!\\b_\\b)(.*)$",
                    "index": 18
                },
                {
                    "rawPattern": "* eat * not * (drink|eat) * diarrhea * ",
                    "pattern": "^(.*)\\beat\\b(.*)\\bnot\\b(.*)(\\bdrink\\b|\\beat\\b)(.*)\\bdiarrhea\\b(.*)$",
                    "index": 22
                },
                {
                    "rawPattern": "* diarrhea * not * (drink|eat) * eat *",
                    "pattern": "^(.*)\\bdiarrhea\\b(.*)\\bnot\\b(.*)(\\bdrink\\b|\\beat\\b)(.*)\\beat\\b(.*)$",
                    "index": 22
                },
                {
                    "rawPattern": "* not * good * effect * antimotility * ",
                    "pattern": "^(.*)\\bnot\\b(.*)\\bgood\\b(.*)\\beffect\\b(.*)\\bantimotility\\b(.*)$",
                    "index": 29
                },
                {
                    "rawPattern": "* not * good * effect * bismuth * ",
                    "pattern": "^(.*)\\bnot\\b(.*)\\bgood\\b(.*)\\beffect\\b(.*)\\bbismuth\\b(.*)$",
                    "index": 37
                },
                {
                    "rawPattern": "* eat * not * (drink|eat) * influenza * ",
                    "pattern": "^(.*)\\beat\\b(.*)\\bnot\\b(.*)(\\bdrink\\b|\\beat\\b)(.*)\\binfluenza\\b(.*)$",
                    "index": 59
                },
                {
                    "rawPattern": "* influenza * not * (drink|eat) * eat *",
                    "pattern": "^(.*)\\binfluenza\\b(.*)\\bnot\\b(.*)(\\bdrink\\b|\\beat\\b)(.*)\\beat\\b(.*)$",
                    "index": 59
                },
                {
                    "rawPattern": "* not * good * effect * antihistamine * ",
                    "pattern": "^(.*)\\bnot\\b(.*)\\bgood\\b(.*)\\beffect\\b(.*)\\bantihistamine\\b(.*)$",
                    "index": 66
                },
                {
                    "rawPattern": "* not * good * effect * analgesic  * ",
                    "pattern": "^(.*)\\bnot\\b(.*)\\bgood\\b(.*)\\beffect\\b(.*)\\banalgesic\\b(.*)$",
                    "index": 74
                },
                {
                    "rawPattern": "* not * good * effect * decongestant * ",
                    "pattern": "^(.*)\\bnot\\b(.*)\\bgood\\b(.*)\\beffect\\b(.*)\\bdecongestant\\b(.*)$",
                    "index": 82
                },
                {
                    "rawPattern": "* not * good * effect * expectorant * ",
                    "pattern": "^(.*)\\bnot\\b(.*)\\bgood\\b(.*)\\beffect\\b(.*)\\bexpectorant\\b(.*)$",
                    "index": 90
                },
                {
                    "rawPattern": "* not * good * effect * antitussive  * ",
                    "pattern": "^(.*)\\bnot\\b(.*)\\bgood\\b(.*)\\beffect\\b(.*)\\bantitussive\\b(.*)$",
                    "index": 98
                },
                {
                    "rawPattern": "* not * good * effect * lozenge  * ",
                    "pattern": "^(.*)\\bnot\\b(.*)\\bgood\\b(.*)\\beffect\\b(.*)\\blozenge\\b(.*)$",
                    "index": 106
                },
                {
                    "rawPattern": "* what * not * (eat|drink|pamasa) * (headache|headache) * ",
                    "pattern": "^(.*)\\bwhat\\b(.*)\\bnot\\b(.*)(\\beat\\b|\\bdrink\\b|\\bpamasa\\b)(.*)(\\bheadache\\b|\\bheadache\\b)(.*)$",
                    "index": 112
                },
                {
                    "rawPattern": "* (drink|water) * (remove|drug|treat|treat) *  diarrhea * ",
                    "pattern": "^(.*)(\\bdrink\\b|\\bwater\\b)(.*)(\\bremove\\b|\\bdrug\\b|\\btreat\\b|\\btreat\\b)(.*)\\bdiarrhea\\b(.*)$",
                    "index": 7
                },
                {
                    "rawPattern": "* zinc * (remove|drug|treat|treat) * diarrhea *",
                    "pattern": "^(.*)\\bzinc\\b(.*)(\\bremove\\b|\\bdrug\\b|\\btreat\\b|\\btreat\\b)(.*)\\bdiarrhea\\b(.*)$",
                    "index": 8
                },
                {
                    "rawPattern": "* how * drug * diarrhea * ",
                    "pattern": "^(.*)\\bhow\\b(.*)\\bdrug\\b(.*)\\bdiarrhea\\b(.*)$",
                    "index": 10
                },
                {
                    "rawPattern": "* (treat|work|treat) * blood * (diarrhea|stool) *",
                    "pattern": "^(.*)(\\btreat\\b|\\bwork\\b|\\btreat\\b)(.*)\\bblood\\b(.*)(\\bdiarrhea\\b|\\bstool\\b)(.*)$",
                    "index": 12
                },
                {
                    "rawPattern": "* blood * (diarrhea|stool) * (treat|work|treat) * ",
                    "pattern": "^(.*)\\bblood\\b(.*)(\\bdiarrhea\\b|\\bstool\\b)(.*)(\\btreat\\b|\\bwork\\b|\\btreat\\b)(.*)$",
                    "index": 12
                },
                {
                    "rawPattern": "* (drug|treat|treat) * diarrhea * fever * ",
                    "pattern": "^(.*)(\\bdrug\\b|\\btreat\\b|\\btreat\\b)(.*)\\bdiarrhea\\b(.*)\\bfever\\b(.*)$",
                    "index": 13
                },
                {
                    "rawPattern": "* (drug|treat|treat) * fever * diarrhea * ",
                    "pattern": "^(.*)(\\bdrug\\b|\\btreat\\b|\\btreat\\b)(.*)\\bfever\\b(.*)\\bdiarrhea\\b(.*)$",
                    "index": 13
                },
                {
                    "rawPattern": "* (eat|eat|drink) * (can|good|treat) * diarrhea *",
                    "pattern": "^(.*)(\\beat\\b|\\beat\\b|\\bdrink\\b)(.*)(\\bcan\\b|\\bgood\\b|\\btreat\\b)(.*)\\bdiarrhea\\b(.*)$",
                    "index": 17
                },
                {
                    "rawPattern": "* (eat|eat|drink) * diarrhea * (can|good|treat) * ",
                    "pattern": "^(.*)(\\beat\\b|\\beat\\b|\\bdrink\\b)(.*)\\bdiarrhea\\b(.*)(\\bcan\\b|\\bgood\\b|\\btreat\\b)(.*)$",
                    "index": 17
                },
                {
                    "rawPattern": "* (can|good|treat) * (eat|eat|drink) * diarrhea * ",
                    "pattern": "^(.*)(\\bcan\\b|\\bgood\\b|\\btreat\\b)(.*)(\\beat\\b|\\beat\\b|\\bdrink\\b)(.*)\\bdiarrhea\\b(.*)$",
                    "index": 17
                },
                {
                    "rawPattern": "* (can|good|treat) * diarrhea * (eat|eat|drink) * ",
                    "pattern": "^(.*)(\\bcan\\b|\\bgood\\b|\\btreat\\b)(.*)\\bdiarrhea\\b(.*)(\\beat\\b|\\beat\\b|\\bdrink\\b)(.*)$",
                    "index": 17
                },
                {
                    "rawPattern": "* diarrhea * (can|good|treat) * (eat|eat|drink) * ",
                    "pattern": "^(.*)\\bdiarrhea\\b(.*)(\\bcan\\b|\\bgood\\b|\\btreat\\b)(.*)(\\beat\\b|\\beat\\b|\\bdrink\\b)(.*)$",
                    "index": 17
                },
                {
                    "rawPattern": "* diarrhea * (eat|eat|drink) * (can|good|treat) *",
                    "pattern": "^(.*)\\bdiarrhea\\b(.*)(\\beat\\b|\\beat\\b|\\bdrink\\b)(.*)(\\bcan\\b|\\bgood\\b|\\btreat\\b)(.*)$",
                    "index": 17
                },
                {
                    "rawPattern": "* diarrhea * eat * avoid *",
                    "pattern": "^(.*)\\bdiarrhea\\b(.*)\\beat\\b(.*)\\bavoid\\b(.*)$",
                    "index": 22
                },
                {
                    "rawPattern": "* avoid * eat * diarrhea *",
                    "pattern": "^(.*)\\bavoid\\b(.*)\\beat\\b(.*)\\bdiarrhea\\b(.*)$",
                    "index": 22
                },
                {
                    "rawPattern": "* eat * avoid * diarrhea *",
                    "pattern": "^(.*)\\beat\\b(.*)\\bavoid\\b(.*)\\bdiarrhea\\b(.*)$",
                    "index": 22
                },
                {
                    "rawPattern": "* not * (eat|drink|use) * antimotility * ",
                    "pattern": "^(.*)\\bnot\\b(.*)(\\beat\\b|\\bdrink\\b|\\buse\\b)(.*)\\bantimotility\\b(.*)$",
                    "index": 28
                },
                {
                    "rawPattern": "* not * (eat|drink|use) * bismuth * ",
                    "pattern": "^(.*)\\bnot\\b(.*)(\\beat\\b|\\bdrink\\b|\\buse\\b)(.*)\\bbismuth\\b(.*)$",
                    "index": 36
                },
                {
                    "rawPattern": "* where * drug * diarrhea * ",
                    "pattern": "^(.*)\\bwhere\\b(.*)\\bdrug\\b(.*)\\bdiarrhea\\b(.*)$",
                    "index": 40
                },
                {
                    "rawPattern": "* who * (remove|drug|treat|treat|go) * influenza *",
                    "pattern": "^(.*)\\bwho\\b(.*)(\\bremove\\b|\\bdrug\\b|\\btreat\\b|\\btreat\\b|\\bgo\\b)(.*)\\binfluenza\\b(.*)$",
                    "index": 46
                },
                {
                    "rawPattern": "* can * drug * influenza *",
                    "pattern": "^(.*)\\bcan\\b(.*)\\bdrug\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 47
                },
                {
                    "rawPattern": "* where * treat * influenza * ",
                    "pattern": "^(.*)\\bwhere\\b(.*)\\btreat\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 48
                },
                {
                    "rawPattern": "* treat * influenza * where *",
                    "pattern": "^(.*)\\btreat\\b(.*)\\binfluenza\\b(.*)\\bwhere\\b(.*)$",
                    "index": 48
                },
                {
                    "rawPattern": "* not * approach * influenza *",
                    "pattern": "^(.*)\\bnot\\b(.*)\\bapproach\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 51
                },
                {
                    "rawPattern": "* wear * (nose|mouth|cough|sneeze) * influenza *",
                    "pattern": "^(.*)\\bwear\\b(.*)(\\bnose\\b|\\bmouth\\b|\\bcough\\b|\\bsneeze\\b)(.*)\\binfluenza\\b(.*)$",
                    "index": 52
                },
                {
                    "rawPattern": "* (can|good|treat) * influenza * eat * ",
                    "pattern": "^(.*)(\\bcan\\b|\\bgood\\b|\\btreat\\b)(.*)\\binfluenza\\b(.*)\\beat\\b(.*)$",
                    "index": 56
                },
                {
                    "rawPattern": "* (can|good|treat) * eat * influenza * ",
                    "pattern": "^(.*)(\\bcan\\b|\\bgood\\b|\\btreat\\b)(.*)\\beat\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 56
                },
                {
                    "rawPattern": "* influenza * (can|good|treat) * eat * ",
                    "pattern": "^(.*)\\binfluenza\\b(.*)(\\bcan\\b|\\bgood\\b|\\btreat\\b)(.*)\\beat\\b(.*)$",
                    "index": 56
                },
                {
                    "rawPattern": "* eat * (can|good|treat) * influenza *",
                    "pattern": "^(.*)\\beat\\b(.*)(\\bcan\\b|\\bgood\\b|\\btreat\\b)(.*)\\binfluenza\\b(.*)$",
                    "index": 56
                },
                {
                    "rawPattern": "* eat * influenza * (can|good|treat) * ",
                    "pattern": "^(.*)\\beat\\b(.*)\\binfluenza\\b(.*)(\\bcan\\b|\\bgood\\b|\\btreat\\b)(.*)$",
                    "index": 56
                },
                {
                    "rawPattern": "* antihistamine * not * (eat|drink|use) *",
                    "pattern": "^(.*)\\bantihistamine\\b(.*)\\bnot\\b(.*)(\\beat\\b|\\bdrink\\b|\\buse\\b)(.*)$",
                    "index": 65
                },
                {
                    "rawPattern": "* not * (eat|drink|use) * antihistamine  * ",
                    "pattern": "^(.*)\\bnot\\b(.*)(\\beat\\b|\\bdrink\\b|\\buse\\b)(.*)\\bantihistamine\\b(.*)$",
                    "index": 65
                },
                {
                    "rawPattern": "* not * (eat|drink|use) * analgesic  * ",
                    "pattern": "^(.*)\\bnot\\b(.*)(\\beat\\b|\\bdrink\\b|\\buse\\b)(.*)\\banalgesic\\b(.*)$",
                    "index": 73
                },
                {
                    "rawPattern": "* analgesic * not * (eat|drink|use) *",
                    "pattern": "^(.*)\\banalgesic\\b(.*)\\bnot\\b(.*)(\\beat\\b|\\bdrink\\b|\\buse\\b)(.*)$",
                    "index": 73
                },
                {
                    "rawPattern": "* not * (eat|drink|use) * decongestant * ",
                    "pattern": "^(.*)\\bnot\\b(.*)(\\beat\\b|\\bdrink\\b|\\buse\\b)(.*)\\bdecongestant\\b(.*)$",
                    "index": 81
                },
                {
                    "rawPattern": "* decongestant * not * (eat|drink|use) *",
                    "pattern": "^(.*)\\bdecongestant\\b(.*)\\bnot\\b(.*)(\\beat\\b|\\bdrink\\b|\\buse\\b)(.*)$",
                    "index": 81
                },
                {
                    "rawPattern": "* not * (eat|drink|use) * expectorant * ",
                    "pattern": "^(.*)\\bnot\\b(.*)(\\beat\\b|\\bdrink\\b|\\buse\\b)(.*)\\bexpectorant\\b(.*)$",
                    "index": 89
                },
                {
                    "rawPattern": "* not * (eat|drink|use) * antitussive  * ",
                    "pattern": "^(.*)\\bnot\\b(.*)(\\beat\\b|\\bdrink\\b|\\buse\\b)(.*)\\bantitussive\\b(.*)$",
                    "index": 97
                },
                {
                    "rawPattern": "* not * (eat|drink|use) * lozenge * ",
                    "pattern": "^(.*)\\bnot\\b(.*)(\\beat\\b|\\bdrink\\b|\\buse\\b)(.*)\\blozenge\\b(.*)$",
                    "index": 105
                },
                {
                    "rawPattern": "* where * go * influenza *",
                    "pattern": "^(.*)\\bwhere\\b(.*)\\bgo\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 109
                },
                {
                    "rawPattern": "* where * drug * influenza * ",
                    "pattern": "^(.*)\\bwhere\\b(.*)\\bdrug\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 109
                },
                {
                    "rawPattern": "* (what|how) * (remove|drug|treat|treat) * (headache|headache) *",
                    "pattern": "^(.*)(\\bwhat\\b|\\bhow\\b)(.*)(\\bremove\\b|\\bdrug\\b|\\btreat\\b|\\btreat\\b)(.*)(\\bheadache\\b|\\bheadache\\b)(.*)$",
                    "index": 112
                },
                {
                    "rawPattern": "* (pamasa|use) * clean * water * ",
                    "pattern": "^(.*)(\\bpamasa\\b|\\buse\\b)(.*)\\bclean\\b(.*)\\bwater\\b(.*)$",
                    "index": 114
                },
                {
                    "rawPattern": "* (remove|drug|treat|treat) * sick  * head * ",
                    "pattern": "^(.*)(\\bremove\\b|\\bdrug\\b|\\btreat\\b|\\btreat\\b)(.*)\\bsick\\b(.*)\\bhead\\b(.*)$",
                    "index": 117
                },
                {
                    "rawPattern": "* (remove|drug|treat|treat) * (sick|sick) * stomach *",
                    "pattern": "^(.*)(\\bremove\\b|\\bdrug\\b|\\btreat\\b|\\btreat\\b)(.*)(\\bsick\\b|\\bsick\\b)(.*)\\bstomach\\b(.*)$",
                    "index": 118
                },
                {
                    "rawPattern": "* (remove|drug|treat|treat) * sick * throat * ",
                    "pattern": "^(.*)(\\bremove\\b|\\bdrug\\b|\\btreat\\b|\\btreat\\b)(.*)\\bsick\\b(.*)\\bthroat\\b(.*)$",
                    "index": 119
                },
                {
                    "rawPattern": "* what * betad * nengka *",
                    "pattern": "^(.*)\\bwhat\\b(.*)\\bbetad\\b(.*)\\bnengka\\b(.*)$",
                    "index": 123
                },
                {
                    "rawPattern": "* sweet * diarrhea *",
                    "pattern": "^(.*)\\bsweet\\b(.*)\\bdiarrhea\\b(.*)$",
                    "index": 0
                },
                {
                    "rawPattern": "* allergy * diarrhea *",
                    "pattern": "^(.*)\\ballergy\\b(.*)\\bdiarrhea\\b(.*)$",
                    "index": 1
                },
                {
                    "rawPattern": "* parasite * diarrhea *",
                    "pattern": "^(.*)\\bparasite\\b(.*)\\bdiarrhea\\b(.*)$",
                    "index": 2
                },
                {
                    "rawPattern": "* bacteria * diarrhea *",
                    "pattern": "^(.*)\\bbacteria\\b(.*)\\bdiarrhea\\b(.*)$",
                    "index": 3
                },
                {
                    "rawPattern": "* virus * diarrhea *",
                    "pattern": "^(.*)\\bvirus\\b(.*)\\bdiarrhea\\b(.*)$",
                    "index": 4
                },
                {
                    "rawPattern": "* get * diarrhea *",
                    "pattern": "^(.*)\\bget\\b(.*)\\bdiarrhea\\b(.*)$",
                    "index": 5
                },
                {
                    "rawPattern": "* give * diarrhea * ",
                    "pattern": "^(.*)\\bgive\\b(.*)\\bdiarrhea\\b(.*)$",
                    "index": 6
                },
                {
                    "rawPattern": "* (remove|drug|treat|treat) * diarrhea * ",
                    "pattern": "^(.*)(\\bremove\\b|\\bdrug\\b|\\btreat\\b|\\btreat\\b)(.*)\\bdiarrhea\\b(.*)$",
                    "index": 10
                },
                {
                    "rawPattern": "* diarrhea * (remove|drug|treat|treat) * ",
                    "pattern": "^(.*)\\bdiarrhea\\b(.*)(\\bremove\\b|\\bdrug\\b|\\btreat\\b|\\btreat\\b)(.*)$",
                    "index": 10
                },
                {
                    "rawPattern": "* treat * diarrhea *",
                    "pattern": "^(.*)\\btreat\\b(.*)\\bdiarrhea\\b(.*)$",
                    "index": 11
                },
                {
                    "rawPattern": "* drug * diarrhea *",
                    "pattern": "^(.*)\\bdrug\\b(.*)\\bdiarrhea\\b(.*)$",
                    "index": 13
                },
                {
                    "rawPattern": "* peel * eat * ",
                    "pattern": "^(.*)\\bpeel\\b(.*)\\beat\\b(.*)$",
                    "index": 14
                },
                {
                    "rawPattern": "* care * diarrhea * ",
                    "pattern": "^(.*)\\bcare\\b(.*)\\bdiarrhea\\b(.*)$",
                    "index": 16
                },
                {
                    "rawPattern": "* quick * diarrhea * ",
                    "pattern": "^(.*)\\bquick\\b(.*)\\bdiarrhea\\b(.*)$",
                    "index": 16
                },
                {
                    "rawPattern": "* diarrhea_foods_not_allowed_bad_hydration * \bdiarrhea\b(?!_) *",
                    "pattern": "^(.*)\\bdiarrhea_foods_not_allowed_bad_hydration\\b(.*)\b\\bdiarrhea\\b\b(?!\\b_\\b)(.*)$",
                    "index": 18
                },
                {
                    "rawPattern": "* lactose * \bdiarrhea\b(?!_) *",
                    "pattern": "^(.*)\\blactose\\b(.*)\b\\bdiarrhea\\b\b(?!\\b_\\b)(.*)$",
                    "index": 19
                },
                {
                    "rawPattern": "* diarrhea_foods_not_allowed_contains_lactose * \bdiarrhea\b(?!_) *",
                    "pattern": "^(.*)\\bdiarrhea_foods_not_allowed_contains_lactose\\b(.*)\b\\bdiarrhea\\b\b(?!\\b_\\b)(.*)$",
                    "index": 19
                },
                {
                    "rawPattern": "* diarrhea_foods_not_allowed_irritate_stomach * \bdiarrhea\b(?!_) *",
                    "pattern": "^(.*)\\bdiarrhea_foods_not_allowed_irritate_stomach\\b(.*)\b\\bdiarrhea\\b\b(?!\\b_\\b)(.*)$",
                    "index": 20
                },
                {
                    "rawPattern": "* diarrhea_foods_not_allowed_oily * \bdiarrhea\b(?!_) *",
                    "pattern": "^(.*)\\bdiarrhea_foods_not_allowed_oily\\b(.*)\b\\bdiarrhea\\b\b(?!\\b_\\b)(.*)$",
                    "index": 21
                },
                {
                    "rawPattern": "* problem * diarrhea * ",
                    "pattern": "^(.*)\\bproblem\\b(.*)\\bdiarrhea\\b(.*)$",
                    "index": 23
                },
                {
                    "rawPattern": "* diarrhea * problem *",
                    "pattern": "^(.*)\\bdiarrhea\\b(.*)\\bproblem\\b(.*)$",
                    "index": 23
                },
                {
                    "rawPattern": "* dose * antimotility *",
                    "pattern": "^(.*)\\bdose\\b(.*)\\bantimotility\\b(.*)$",
                    "index": 24
                },
                {
                    "rawPattern": "* (use|eat|drink) * antimotility * ",
                    "pattern": "^(.*)(\\buse\\b|\\beat\\b|\\bdrink\\b)(.*)\\bantimotility\\b(.*)$",
                    "index": 24
                },
                {
                    "rawPattern": "* method * antimotility * ",
                    "pattern": "^(.*)\\bmethod\\b(.*)\\bantimotility\\b(.*)$",
                    "index": 24
                },
                {
                    "rawPattern": "* antimotility * (use|eat|drink) * ",
                    "pattern": "^(.*)\\bantimotility\\b(.*)(\\buse\\b|\\beat\\b|\\bdrink\\b)(.*)$",
                    "index": 24
                },
                {
                    "rawPattern": "* antimotility * use * ",
                    "pattern": "^(.*)\\bantimotility\\b(.*)\\buse\\b(.*)$",
                    "index": 26
                },
                {
                    "rawPattern": "* use * antimotility *",
                    "pattern": "^(.*)\\buse\\b(.*)\\bantimotility\\b(.*)$",
                    "index": 26
                },
                {
                    "rawPattern": "*work * antimotility *",
                    "pattern": "^(.*)\\bwork\\b(.*)\\bantimotility\\b(.*)$",
                    "index": 27
                },
                {
                    "rawPattern": "* antimotility * work * ",
                    "pattern": "^(.*)\\bantimotility\\b(.*)\\bwork\\b(.*)$",
                    "index": 27
                },
                {
                    "rawPattern": "* tip*  antimotility * ",
                    "pattern": "^(.*)\\btip\\b(.*)\\bantimotility\\b(.*)$",
                    "index": 30
                },
                {
                    "rawPattern": "* sambi * antimotility * ",
                    "pattern": "^(.*)\\bsambi\\b(.*)\\bantimotility\\b(.*)$",
                    "index": 31
                },
                {
                    "rawPattern": "* dose *bismuth * ",
                    "pattern": "^(.*)\\bdose\\b(.*)\\bbismuth\\b(.*)$",
                    "index": 32
                },
                {
                    "rawPattern": "* (use|eat|drink) *bismuth * ",
                    "pattern": "^(.*)(\\buse\\b|\\beat\\b|\\bdrink\\b)(.*)\\bbismuth\\b(.*)$",
                    "index": 32
                },
                {
                    "rawPattern": "* method *bismuth * ",
                    "pattern": "^(.*)\\bmethod\\b(.*)\\bbismuth\\b(.*)$",
                    "index": 32
                },
                {
                    "rawPattern": "* bismuth subsalicylate  * (use|eat|drink) *",
                    "pattern": "^(.*)\\bbismuthsubsalicylate\\b(.*)(\\buse\\b|\\beat\\b|\\bdrink\\b)(.*)$",
                    "index": 32
                },
                {
                    "rawPattern": "* bismuth * use * ",
                    "pattern": "^(.*)\\bbismuth\\b(.*)\\buse\\b(.*)$",
                    "index": 34
                },
                {
                    "rawPattern": "* use * bismuth * ",
                    "pattern": "^(.*)\\buse\\b(.*)\\bbismuth\\b(.*)$",
                    "index": 34
                },
                {
                    "rawPattern": "* work * bismuth *",
                    "pattern": "^(.*)\\bwork\\b(.*)\\bbismuth\\b(.*)$",
                    "index": 35
                },
                {
                    "rawPattern": "*bismuth * work * ",
                    "pattern": "^(.*)\\bbismuth\\b(.*)\\bwork\\b(.*)$",
                    "index": 35
                },
                {
                    "rawPattern": "* tip* bismuth * ",
                    "pattern": "^(.*)\\btip\\b(.*)\\bbismuth\\b(.*)$",
                    "index": 38
                },
                {
                    "rawPattern": "* sambi *bismuth * ",
                    "pattern": "^(.*)\\bsambi\\b(.*)\\bbismuth\\b(.*)$",
                    "index": 39
                },
                {
                    "rawPattern": "* go * diarrhea * ",
                    "pattern": "^(.*)\\bgo\\b(.*)\\bdiarrhea\\b(.*)$",
                    "index": 40
                },
                {
                    "rawPattern": "* symptom * \bdiarrhea\b(?!_) * ",
                    "pattern": "^(.*)\\bsymptom\\b(.*)\b\\bdiarrhea\\b\b(?!\\b_\\b)(.*)$",
                    "index": 41
                },
                {
                    "rawPattern": "* (identify) * diarrhea * ",
                    "pattern": "^(.*)(\\bidentify\\b)(.*)\\bdiarrhea\\b(.*)$",
                    "index": 41
                },
                {
                    "rawPattern": "* virus * influenza *",
                    "pattern": "^(.*)\\bvirus\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 42
                },
                {
                    "rawPattern": "* get * influenza *",
                    "pattern": "^(.*)\\bget\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 43
                },
                {
                    "rawPattern": "* rest *  influenza *",
                    "pattern": "^(.*)\\brest\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 44
                },
                {
                    "rawPattern": "* drink * influenza *",
                    "pattern": "^(.*)\\bdrink\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 45
                },
                {
                    "rawPattern": "* water * influenza *",
                    "pattern": "^(.*)\\bwater\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 45
                },
                {
                    "rawPattern": "* influenza * drug *",
                    "pattern": "^(.*)\\binfluenza\\b(.*)\\bdrug\\b(.*)$",
                    "index": 47
                },
                {
                    "rawPattern": "* influenza * (remove|drug|treat|treat) *",
                    "pattern": "^(.*)\\binfluenza\\b(.*)(\\bremove\\b|\\bdrug\\b|\\btreat\\b|\\btreat\\b)(.*)$",
                    "index": 49
                },
                {
                    "rawPattern": "* (remove|drug|treat|treat) * influenza * ",
                    "pattern": "^(.*)(\\bremove\\b|\\bdrug\\b|\\btreat\\b|\\btreat\\b)(.*)\\binfluenza\\b(.*)$",
                    "index": 49
                },
                {
                    "rawPattern": "* drug * influenza * ",
                    "pattern": "^(.*)\\bdrug\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 49
                },
                {
                    "rawPattern": "* influenza * drug * ",
                    "pattern": "^(.*)\\binfluenza\\b(.*)\\bdrug\\b(.*)$",
                    "index": 49
                },
                {
                    "rawPattern": "*vaccine * influenza *",
                    "pattern": "^(.*)\\bvaccine\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 50
                },
                {
                    "rawPattern": "* (avoid|remove) * influenza *",
                    "pattern": "^(.*)(\\bavoid\\b|\\bremove\\b)(.*)\\binfluenza\\b(.*)$",
                    "index": 51
                },
                {
                    "rawPattern": "* clean * hand * ",
                    "pattern": "^(.*)\\bclean\\b(.*)\\bhand\\b(.*)$",
                    "index": 53
                },
                {
                    "rawPattern": "* use * mask * ",
                    "pattern": "^(.*)\\buse\\b(.*)\\bmask\\b(.*)$",
                    "index": 54
                },
                {
                    "rawPattern": "* (care|avoid|kapananggila) * influenza * ",
                    "pattern": "^(.*)(\\bcare\\b|\\bavoid\\b|\\bkapananggila\\b)(.*)\\binfluenza\\b(.*)$",
                    "index": 55
                },
                {
                    "rawPattern": "* influenza * kapananggila * ",
                    "pattern": "^(.*)\\binfluenza\\b(.*)\\bkapananggila\\b(.*)$",
                    "index": 55
                },
                {
                    "rawPattern": "* influenza * eat * ",
                    "pattern": "^(.*)\\binfluenza\\b(.*)\\beat\\b(.*)$",
                    "index": 56
                },
                {
                    "rawPattern": "* eat * influenza * ",
                    "pattern": "^(.*)\\beat\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 56
                },
                {
                    "rawPattern": "* influenza_foods_not_allowed_greasy_foods * influenza * ",
                    "pattern": "^(.*)\\binfluenza_foods_not_allowed_greasy_foods\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 57
                },
                {
                    "rawPattern": "* influenza_foods_not_allowed_sugary_foods * influenza *",
                    "pattern": "^(.*)\\binfluenza_foods_not_allowed_sugary_foods\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 58
                },
                {
                    "rawPattern": "* problem * influenza * ",
                    "pattern": "^(.*)\\bproblem\\b(.*)\\binfluenza\\b(.*)$",
                    "index": 60
                },
                {
                    "rawPattern": "* influenza * problem *",
                    "pattern": "^(.*)\\binfluenza\\b(.*)\\bproblem\\b(.*)$",
                    "index": 60
                },
                {
                    "rawPattern": "* (use|eat|drink|dose) * antihistamine * ",
                    "pattern": "^(.*)(\\buse\\b|\\beat\\b|\\bdrink\\b|\\bdose\\b)(.*)\\bantihistamine\\b(.*)$",
                    "index": 61
                },
                {
                    "rawPattern": "* method * antihistamine * ",
                    "pattern": "^(.*)\\bmethod\\b(.*)\\bantihistamine\\b(.*)$",
                    "index": 61
                },
                {
                    "rawPattern": "* antihistamine  * (use|eat|drink) *",
                    "pattern": "^(.*)\\bantihistamine\\b(.*)(\\buse\\b|\\beat\\b|\\bdrink\\b)(.*)$",
                    "index": 61
                },
                {
                    "rawPattern": "*antihistamine * use * ",
                    "pattern": "^(.*)\\bantihistamine\\b(.*)\\buse\\b(.*)$",
                    "index": 63
                },
                {
                    "rawPattern": "* use * antihistamine *",
                    "pattern": "^(.*)\\buse\\b(.*)\\bantihistamine\\b(.*)$",
                    "index": 63
                },
                {
                    "rawPattern": "* antihistamine * (remove|drug|treat|treat|work) *",
                    "pattern": "^(.*)\\bantihistamine\\b(.*)(\\bremove\\b|\\bdrug\\b|\\btreat\\b|\\btreat\\b|\\bwork\\b)(.*)$",
                    "index": 64
                },
                {
                    "rawPattern": "* (remove|drug|treat|treat|work)  * antihistamine  *",
                    "pattern": "^(.*)(\\bremove\\b|\\bdrug\\b|\\btreat\\b|\\btreat\\b|\\bwork\\b)(.*)\\bantihistamine\\b(.*)$",
                    "index": 64
                },
                {
                    "rawPattern": "* tip* antihistamine  * ",
                    "pattern": "^(.*)\\btip\\b(.*)\\bantihistamine\\b(.*)$",
                    "index": 67
                },
                {
                    "rawPattern": "* sambi * antihistamine  * ",
                    "pattern": "^(.*)\\bsambi\\b(.*)\\bantihistamine\\b(.*)$",
                    "index": 68
                },
                {
                    "rawPattern": "* (dose|use|eat|drink|method) *  analgesic  * ",
                    "pattern": "^(.*)(\\bdose\\b|\\buse\\b|\\beat\\b|\\bdrink\\b|\\bmethod\\b)(.*)\\banalgesic\\b(.*)$",
                    "index": 69
                },
                {
                    "rawPattern": "* analgesic * (use|eat|drink) *",
                    "pattern": "^(.*)\\banalgesic\\b(.*)(\\buse\\b|\\beat\\b|\\bdrink\\b)(.*)$",
                    "index": 69
                },
                {
                    "rawPattern": "* analgesic * use * ",
                    "pattern": "^(.*)\\banalgesic\\b(.*)\\buse\\b(.*)$",
                    "index": 71
                },
                {
                    "rawPattern": "* work * analgesic *",
                    "pattern": "^(.*)\\bwork\\b(.*)\\banalgesic\\b(.*)$",
                    "index": 72
                },
                {
                    "rawPattern": "* analgesic * (work|remove|drug|treat|treat) *",
                    "pattern": "^(.*)\\banalgesic\\b(.*)(\\bwork\\b|\\bremove\\b|\\bdrug\\b|\\btreat\\b|\\btreat\\b)(.*)$",
                    "index": 72
                },
                {
                    "rawPattern": "* tip* analgesic  *",
                    "pattern": "^(.*)\\btip\\b(.*)\\banalgesic\\b(.*)$",
                    "index": 75
                },
                {
                    "rawPattern": "* sambi * analgesic  *",
                    "pattern": "^(.*)\\bsambi\\b(.*)\\banalgesic\\b(.*)$",
                    "index": 76
                },
                {
                    "rawPattern": "* (method|dose|use|eat|drink) * decongestant * ",
                    "pattern": "^(.*)(\\bmethod\\b|\\bdose\\b|\\buse\\b|\\beat\\b|\\bdrink\\b)(.*)\\bdecongestant\\b(.*)$",
                    "index": 77
                },
                {
                    "rawPattern": "* decongestant * (use|eat|drink) *",
                    "pattern": "^(.*)\\bdecongestant\\b(.*)(\\buse\\b|\\beat\\b|\\bdrink\\b)(.*)$",
                    "index": 77
                },
                {
                    "rawPattern": "* decongestant * use * ",
                    "pattern": "^(.*)\\bdecongestant\\b(.*)\\buse\\b(.*)$",
                    "index": 79
                },
                {
                    "rawPattern": "* use * decongestant * ",
                    "pattern": "^(.*)\\buse\\b(.*)\\bdecongestant\\b(.*)$",
                    "index": 79
                },
                {
                    "rawPattern": "* (work|remove|drug|treat|treat) * decongestant *",
                    "pattern": "^(.*)(\\bwork\\b|\\bremove\\b|\\bdrug\\b|\\btreat\\b|\\btreat\\b)(.*)\\bdecongestant\\b(.*)$",
                    "index": 80
                },
                {
                    "rawPattern": "* decongestant* (work|remove|drug|treat|treat) *",
                    "pattern": "^(.*)\\bdecongestant\\b(.*)(\\bwork\\b|\\bremove\\b|\\bdrug\\b|\\btreat\\b|\\btreat\\b)(.*)$",
                    "index": 80
                },
                {
                    "rawPattern": "* tip*  decongestant  * ",
                    "pattern": "^(.*)\\btip\\b(.*)\\bdecongestant\\b(.*)$",
                    "index": 83
                },
                {
                    "rawPattern": "* sambi * decongestant  * ",
                    "pattern": "^(.*)\\bsambi\\b(.*)\\bdecongestant\\b(.*)$",
                    "index": 84
                },
                {
                    "rawPattern": "* (dose|method|use|eat|drink) * expectorant * ",
                    "pattern": "^(.*)(\\bdose\\b|\\bmethod\\b|\\buse\\b|\\beat\\b|\\bdrink\\b)(.*)\\bexpectorant\\b(.*)$",
                    "index": 85
                },
                {
                    "rawPattern": "* expectorant * (use|eat|drink) *",
                    "pattern": "^(.*)\\bexpectorant\\b(.*)(\\buse\\b|\\beat\\b|\\bdrink\\b)(.*)$",
                    "index": 85
                },
                {
                    "rawPattern": "* expectorant * use * ",
                    "pattern": "^(.*)\\bexpectorant\\b(.*)\\buse\\b(.*)$",
                    "index": 87
                },
                {
                    "rawPattern": "* use * expectorant  * ",
                    "pattern": "^(.*)\\buse\\b(.*)\\bexpectorant\\b(.*)$",
                    "index": 87
                },
                {
                    "rawPattern": "* (work|remove|drug|treat|treat) * expectorant *",
                    "pattern": "^(.*)(\\bwork\\b|\\bremove\\b|\\bdrug\\b|\\btreat\\b|\\btreat\\b)(.*)\\bexpectorant\\b(.*)$",
                    "index": 88
                },
                {
                    "rawPattern": "* expectorant * (work|remove|drug|treat|treat) *",
                    "pattern": "^(.*)\\bexpectorant\\b(.*)(\\bwork\\b|\\bremove\\b|\\bdrug\\b|\\btreat\\b|\\btreat\\b)(.*)$",
                    "index": 88
                },
                {
                    "rawPattern": "* tip*  expectorant * ",
                    "pattern": "^(.*)\\btip\\b(.*)\\bexpectorant\\b(.*)$",
                    "index": 91
                },
                {
                    "rawPattern": "* sambi * expectorant * ",
                    "pattern": "^(.*)\\bsambi\\b(.*)\\bexpectorant\\b(.*)$",
                    "index": 92
                },
                {
                    "rawPattern": "* (dose|method|use|eat|drink) * antitussive  * ",
                    "pattern": "^(.*)(\\bdose\\b|\\bmethod\\b|\\buse\\b|\\beat\\b|\\bdrink\\b)(.*)\\bantitussive\\b(.*)$",
                    "index": 93
                },
                {
                    "rawPattern": "* antitussive  * (use|eat|drink) *",
                    "pattern": "^(.*)\\bantitussive\\b(.*)(\\buse\\b|\\beat\\b|\\bdrink\\b)(.*)$",
                    "index": 93
                },
                {
                    "rawPattern": "* antitussive * use * ",
                    "pattern": "^(.*)\\bantitussive\\b(.*)\\buse\\b(.*)$",
                    "index": 95
                },
                {
                    "rawPattern": "* use * antitussive  * ",
                    "pattern": "^(.*)\\buse\\b(.*)\\bantitussive\\b(.*)$",
                    "index": 95
                },
                {
                    "rawPattern": "* (work|remove|drug|treat|treat) * antitussive  *",
                    "pattern": "^(.*)(\\bwork\\b|\\bremove\\b|\\bdrug\\b|\\btreat\\b|\\btreat\\b)(.*)\\bantitussive\\b(.*)$",
                    "index": 96
                },
                {
                    "rawPattern": "* antitussive * (work|remove|drug|treat|treat) *",
                    "pattern": "^(.*)\\bantitussive\\b(.*)(\\bwork\\b|\\bremove\\b|\\bdrug\\b|\\btreat\\b|\\btreat\\b)(.*)$",
                    "index": 96
                },
                {
                    "rawPattern": "* tip*  antitussive  * ",
                    "pattern": "^(.*)\\btip\\b(.*)\\bantitussive\\b(.*)$",
                    "index": 99
                },
                {
                    "rawPattern": "* sambi * antitussive  * ",
                    "pattern": "^(.*)\\bsambi\\b(.*)\\bantitussive\\b(.*)$",
                    "index": 100
                },
                {
                    "rawPattern": "* (dose|method|use|eat|drink) * lozenge * ",
                    "pattern": "^(.*)(\\bdose\\b|\\bmethod\\b|\\buse\\b|\\beat\\b|\\bdrink\\b)(.*)\\blozenge\\b(.*)$",
                    "index": 101
                },
                {
                    "rawPattern": "* lozenge  * (use|eat|drink) *",
                    "pattern": "^(.*)\\blozenge\\b(.*)(\\buse\\b|\\beat\\b|\\bdrink\\b)(.*)$",
                    "index": 101
                },
                {
                    "rawPattern": "* lozenge * use * ",
                    "pattern": "^(.*)\\blozenge\\b(.*)\\buse\\b(.*)$",
                    "index": 103
                },
                {
                    "rawPattern": "*  use *lozenge * ",
                    "pattern": "^(.*)\\buse\\b(.*)\\blozenge\\b(.*)$",
                    "index": 103
                },
                {
                    "rawPattern": "* lozenge * (work|remove|drug|treat|treat) *",
                    "pattern": "^(.*)\\blozenge\\b(.*)(\\bwork\\b|\\bremove\\b|\\bdrug\\b|\\btreat\\b|\\btreat\\b)(.*)$",
                    "index": 104
                },
                {
                    "rawPattern": "* (work|remove|drug|treat|treat) * lozenge *",
                    "pattern": "^(.*)(\\bwork\\b|\\bremove\\b|\\bdrug\\b|\\btreat\\b|\\btreat\\b)(.*)\\blozenge\\b(.*)$",
                    "index": 104
                },
                {
                    "rawPattern": "* tip*  lozenge * ",
                    "pattern": "^(.*)\\btip\\b(.*)\\blozenge\\b(.*)$",
                    "index": 107
                },
                {
                    "rawPattern": "* sambi * lozenge * ",
                    "pattern": "^(.*)\\bsambi\\b(.*)\\blozenge\\b(.*)$",
                    "index": 108
                },
                {
                    "rawPattern": "* (symptom|symptom|symptom) * influenza * ",
                    "pattern": "^(.*)(\\bsymptom\\b|\\bsymptom\\b|\\bsymptom\\b)(.*)\\binfluenza\\b(.*)$",
                    "index": 110
                },
                {
                    "rawPattern": "* drug * vomit *",
                    "pattern": "^(.*)\\bdrug\\b(.*)\\bvomit\\b(.*)$",
                    "index": 111
                },
                {
                    "rawPattern": "* (remove|drug|treat|treat) * vomit * ",
                    "pattern": "^(.*)(\\bremove\\b|\\bdrug\\b|\\btreat\\b|\\btreat\\b)(.*)\\bvomit\\b(.*)$",
                    "index": 111
                },
                {
                    "rawPattern": "* (remove|drug|treat|treat) * (headache|headache) *",
                    "pattern": "^(.*)(\\bremove\\b|\\bdrug\\b|\\btreat\\b|\\btreat\\b)(.*)(\\bheadache\\b|\\bheadache\\b)(.*)$",
                    "index": 112
                },
                {
                    "rawPattern": "* boil * water * ",
                    "pattern": "^(.*)\\bboil\\b(.*)\\bwater\\b(.*)$",
                    "index": 113
                },
                {
                    "rawPattern": "* clean * water *",
                    "pattern": "^(.*)\\bclean\\b(.*)\\bwater\\b(.*)$",
                    "index": 114
                },
                {
                    "rawPattern": "* method * clean * ",
                    "pattern": "^(.*)\\bmethod\\b(.*)\\bclean\\b(.*)$",
                    "index": 114
                },
                {
                    "rawPattern": "* (remove|drug|treat|treat) * (fever|fever) * ",
                    "pattern": "^(.*)(\\bremove\\b|\\bdrug\\b|\\btreat\\b|\\btreat\\b)(.*)(\\bfever\\b|\\bfever\\b)(.*)$",
                    "index": 115
                },
                {
                    "rawPattern": "* (remove|drug|treat|treat) * (cold|cold) *",
                    "pattern": "^(.*)(\\bremove\\b|\\bdrug\\b|\\btreat\\b|\\btreat\\b)(.*)(\\bcold\\b|\\bcold\\b)(.*)$",
                    "index": 116
                },
                {
                    "rawPattern": "* wear * sneeze * ",
                    "pattern": "^(.*)\\bwear\\b(.*)\\bsneeze\\b(.*)$",
                    "index": 120
                },
                {
                    "rawPattern": "* wear * (nose|mouth) *",
                    "pattern": "^(.*)\\bwear\\b(.*)(\\bnose\\b|\\bmouth\\b)(.*)$",
                    "index": 120
                },
                {
                    "rawPattern": "* clean * hand * ",
                    "pattern": "^(.*)\\bclean\\b(.*)\\bhand\\b(.*)$",
                    "index": 121
                },
                {
                    "rawPattern": "* diarrhea * ",
                    "pattern": "^(.*)\\bdiarrhea\\b(.*)$",
                    "index": 6
                },
                {
                    "rawPattern": "* lactose *",
                    "pattern": "^(.*)\\blactose\\b(.*)$",
                    "index": 19
                },
                {
                    "rawPattern": "* diarrhea_foods_not_allowed_irritate_stomach *",
                    "pattern": "^(.*)\\bdiarrhea_foods_not_allowed_irritate_stomach\\b(.*)$",
                    "index": 20
                },
                {
                    "rawPattern": "* diarrhea_foods_not_allowed_oily *",
                    "pattern": "^(.*)\\bdiarrhea_foods_not_allowed_oily\\b(.*)$",
                    "index": 21
                },
                {
                    "rawPattern": "* antimotility * ",
                    "pattern": "^(.*)\\bantimotility\\b(.*)$",
                    "index": 25
                },
                {
                    "rawPattern": "* bismuth * ",
                    "pattern": "^(.*)\\bbismuth\\b(.*)$",
                    "index": 33
                },
                {
                    "rawPattern": "* influenza_foods_not_allowed_greasy_foods * ",
                    "pattern": "^(.*)\\binfluenza_foods_not_allowed_greasy_foods\\b(.*)$",
                    "index": 57
                },
                {
                    "rawPattern": "* influenza_foods_not_allowed_sugary_foods * ",
                    "pattern": "^(.*)\\binfluenza_foods_not_allowed_sugary_foods\\b(.*)$",
                    "index": 58
                },
                {
                    "rawPattern": "* antihistamine * ",
                    "pattern": "^(.*)\\bantihistamine\\b(.*)$",
                    "index": 62
                },
                {
                    "rawPattern": "* analgesic  * ",
                    "pattern": "^(.*)\\banalgesic\\b(.*)$",
                    "index": 70
                },
                {
                    "rawPattern": "* use * analgesic  ",
                    "pattern": "^(.*)\\buse\\b(.*)\\banalgesic\\b$",
                    "index": 71
                },
                {
                    "rawPattern": "* decongestant  * ",
                    "pattern": "^(.*)\\bdecongestant\\b(.*)$",
                    "index": 78
                },
                {
                    "rawPattern": "* expectorant * ",
                    "pattern": "^(.*)\\bexpectorant\\b(.*)$",
                    "index": 86
                },
                {
                    "rawPattern": "* antitussive * ",
                    "pattern": "^(.*)\\bantitussive\\b(.*)$",
                    "index": 94
                },
                {
                    "rawPattern": "* lozenge  * ",
                    "pattern": "^(.*)\\blozenge\\b(.*)$",
                    "index": 102
                },
                {
                    "rawPattern": "why * boil * ",
                    "pattern": "^\\bwhy\\b(.*)\\bboil\\b(.*)$",
                    "index": 113
                },
                {
                    "rawPattern": "* (symptom|symptom|symptom) *",
                    "pattern": "^(.*)(\\bsymptom\\b|\\bsymptom\\b|\\bsymptom\\b)(.*)$",
                    "index": 122
                },
                {
                    "rawPattern": "* good (mapita|maudto|malulem|magabi) *",
                    "pattern": "^(.*)\\bgood\\b(\\bmapita\\b|\\bmaudto\\b|\\bmalulem\\b|\\bmagabi\\b)(.*)$",
                    "index": 123
                },
                {
                    "rawPattern": "* antimotility *",
                    "pattern": "^(.*)\\bantimotility\\b(.*)$",
                    "index": 124
                },
                {
                    "rawPattern": "*bismuth *",
                    "pattern": "^(.*)\\bbismuth\\b(.*)$",
                    "index": 125
                },
                {
                    "rawPattern": "* antihistamine *",
                    "pattern": "^(.*)\\bantihistamine\\b(.*)$",
                    "index": 126
                },
                {
                    "rawPattern": "* analgesic *",
                    "pattern": "^(.*)\\banalgesic\\b(.*)$",
                    "index": 127
                },
                {
                    "rawPattern": "* nsaid *",
                    "pattern": "^(.*)\\bnsaid\\b(.*)$",
                    "index": 128
                },
                {
                    "rawPattern": "* decongestant *",
                    "pattern": "^(.*)\\bdecongestant\\b(.*)$",
                    "index": 129
                },
                {
                    "rawPattern": "* expectorant *",
                    "pattern": "^(.*)\\bexpectorant\\b(.*)$",
                    "index": 130
                },
                {
                    "rawPattern": "* antitussive *",
                    "pattern": "^(.*)\\bantitussive\\b(.*)$",
                    "index": 131
                },
                {
                    "rawPattern": "* lozenge *",
                    "pattern": "^(.*)\\blozenge\\b(.*)$",
                    "index": 132
                },
                {
                    "rawPattern": "* treat *",
                    "pattern": "^(.*)\\btreat\\b(.*)$",
                    "index": 133
                },
                {
                    "rawPattern": "* diarrhea *",
                    "pattern": "^(.*)\\bdiarrhea\\b(.*)$",
                    "index": 134
                },
                {
                    "rawPattern": "* influenza *",
                    "pattern": "^(.*)\\binfluenza\\b(.*)$",
                    "index": 135
                },
                {
                    "rawPattern": "*kapanegas*",
                    "pattern": "^(.*)\\bkapanegas\\b(.*)$",
                    "index": 136
                },
                {
                    "rawPattern": "*(headache|headache)*",
                    "pattern": "^(.*)(\\bheadache\\b|\\bheadache\\b)(.*)$",
                    "index": 137
                },
                {
                    "rawPattern": "*fever*",
                    "pattern": "^(.*)\\bfever\\b(.*)$",
                    "index": 138
                },
                {
                    "rawPattern": "*ngilon*",
                    "pattern": "^(.*)\\bngilon\\b(.*)$",
                    "index": 139
                },
                {
                    "rawPattern": "*stomach*",
                    "pattern": "^(.*)\\bstomach\\b(.*)$",
                    "index": 140
                },
                {
                    "rawPattern": "*head*",
                    "pattern": "^(.*)\\bhead\\b(.*)$",
                    "index": 141
                },
                {
                    "rawPattern": "*vomit*",
                    "pattern": "^(.*)\\bvomit\\b(.*)$",
                    "index": 142
                },
                {
                    "rawPattern": "*",
                    "pattern": "^(.*)$",
                    "index": 143
                }
            ],
            "memory": [
                {
                    "rawPattern": [
                        "* sweet * diarrhea *"
                    ],
                    "patterns": [
                        "* sweet * diarrhea *"
                    ],
                    "response": [
                        "Su mga mamis a pegken na pakaddtagudo sabap sa  osmotic effect nilan sa tinae na taw na pakasisip sa ig na lawas endu sabap sa namba na pakagkadakel sa digestive enzymes na papengalbel sa tyan na pakangguna sa dikena kumplito a kasisip nu lawas sa nutrients endu ig. Endu aw na to na su mga mamis a pegken na di ka sisip ebpyapya na tinae na pakangguna sa kadtagetut , kagkasakit na tyan endu kadtagudo.Nya nin upaman na su mga lactose intolerant a mga tao o du di ato mapya ganggula nin upama ka minom o keman sa aden gatas nin. Su lawas na mga namba a taw na kulang i lactase nilan a nasisita sa ka sesep nu lawas sa aden gatas. Upama ka masesep nu lawas na taw i lactos na namba i gadsabapan na tagudo "
                    ],
                    "index": 0
                },
                {
                    "rawPattern": [
                        "* allergy * diarrhea *"
                    ],
                    "patterns": [
                        "* allergy * diarrhea *"
                    ],
                    "response": [
                        "Su allergies na pakadtagudo sabap sa immune response nu taw sa allergen. Upama ka ka su allergen na nadetect nu lawas, na su immune system na pablyu sa histamine abpeg kaped pan a chemicals na pakalebag abpeg pakagkagatel sa tinae, pakagkapaydo sa ka sesep nu tinae sa ig, abpeg nu ka lyu nu ig sa lawas sya kano tinae na gadsabapan na kapedtagudo."
                    ],
                    "index": 1
                },
                {
                    "rawPattern": [
                        "* parasite * diarrhea *"
                    ],
                    "patterns": [
                        "* parasite * diarrhea *"
                    ],
                    "response": [
                        "\n        So parasites na pegkapit sa tinai nu taw a pakabinasa lun abpeg paka duti pan. Nya ba na paka trigger sa immune response abpeg lebag na lawas. Su nya ba a lebag na paka stimulate o papenggalbeken nin nu tinai nu taw, papegkapaydun nin i kasisep sa ig, abpeg su kalyu nin sa tinae. So mga nya ba na pakadtagudo. Aden bon mga parasite a pakaumbal sa enzyme na pakabinasa sa kapedsesep nu tai sa nutrients. upama ka manggula i nya ba na su taw na makagedam sa malabsorption abpeg kadtagudo.\n        "
                    ],
                    "index": 2
                },
                {
                    "rawPattern": [
                        "* bacteria * diarrhea *"
                    ],
                    "patterns": [
                        "* bacteria * diarrhea *"
                    ],
                    "response": [
                        "So bacterials infection na pakadtagudo  sabap sa ibelyo nilan a mga duti a maka binasa, pakalebag, abpeg makagkagatel sa tinae. Nya ba na pakangguna bon sa ka lyu na ig sa tinae. Su mga bacteria na blyu sa enzymes a pedtabang sa ka sesep nu pegken sa tinai a gadsabapan na malabsorption abpeg diarrhea."
                    ],
                    "index": 3
                },
                {
                    "rawPattern": [
                        "* virus * diarrhea *"
                    ],
                    "patterns": [
                        "* virus * diarrhea *"
                    ],
                    "response": [
                        "So mga infection a sabap sa virus na pakabinasa sa lining nu tinae. Nya ba na pakabinasa sa kapedsesep nu taw sa ig abpeg nutrents na mga pegken. So mga virus na aw na to na paka stimulate o papengalbeken nin su lawas na taw endu pakalyu sa mga checmicals a papengalbek sa tinae. Nya ba na pakadtagudo. Aden mga kila a mga virus a pakadtagudo mana su norovirus, rotavirus abpeg adenovirus. nya ba na mlmo i kaalat nin sa taw amayka ga contaiminate su pegken o ig abpeg upama ka umayn nu taw i aden sakit nin. "
                    ],
                    "index": 4
                },
                {
                    "rawPattern": [
                        "* get * diarrhea *"
                    ],
                    "patterns": [
                        "* get * diarrhea *"
                    ],
                    "response": [
                        "Madakel I makadtagudo. Nya ba I mga katawan tao saguna. Upama ka malubay su lawas abpeg aden sakit na tinai na makadtagudo bon. Aw na to na sabap I namba sa gamot a kinan nengka. Ugayd na nya kadakelan na pedtagudo na sabap sa kinan nilan. Su kaped manem na sabap sa di nilan kagaga pegkanin su pegken mana su aden mga gatas nin, sorbitol, mamis, fructose a gangatun sa pendagangen a pegken. "
                    ],
                    "index": 5
                },
                {
                    "rawPattern": [
                        "* give * diarrhea * ",
                        "* diarrhea * "
                    ],
                    "patterns": [
                        "* give * diarrhea * ",
                        "* diarrhea * "
                    ],
                    "response": [
                        "Amayka nasimbulan su pegken abpeg su ig na kagaw o dala maluto ebpyapya i pegken na makadtagudo i to ba. Upama manem ka kiman ka sa gamot a mana su antibiotics na kasambiyan nin su balance na bacteria sa tyan nengka na pakadtagudo bon. Su stress abpeg su mga ukit na kakan nengka abpeg amayka aden sakit nengka a kaped na makadtagudo bon i to ba. Su kadtagudo na kaagapan umayka lemempyo i taw abpeg ka mangagas sa lima endu ebpyampyanan nin i kapagami nin sa pegken."
                    ],
                    "index": 6
                },
                {
                    "rawPattern": [
                        "* (drink|water) * (remove|drug|treat|treat) *  diarrhea * "
                    ],
                    "patterns": [
                        "* (drink|water) * (remove|drug|treat|treat) *  diarrhea * "
                    ],
                    "response": [
                        "So ka inom sa ig na nasisita sa ku kadtagudo na kaudo nengka su ig na lawas. Su kadtagudo bon na dikena bo ig i gadadag sa leka ka abpeg a mga electrolytes a mana su sodium abpeg potassium a nasisita nu lawas nu taw.\n\n        Tu ba nan ka inom ka sa aden ig nin mana su ig, beteng, buko juice, oral rehydration solutions, am, arroscalso, sabaw, o sports drinks. Da ka paginom sa mga aden alchohol nin, caffeine nin o su mga mamis a to a paginumen. \n        \n        Nya ba kapaginom a nya na makatabang sa kagamot sa sintomas endu di galunsanan i kapedtagudo sabap sa dehydration"
                    ],
                    "index": 7
                },
                {
                    "rawPattern": [
                        "* zinc * (remove|drug|treat|treat) * diarrhea *"
                    ],
                    "patterns": [
                        "* zinc * (remove|drug|treat|treat) * diarrhea *"
                    ],
                    "response": [
                        "Su kanggamot sa zinc na natun a pakagkalngkas sa kaawa na kapedtagudo. Pakadtabang bon i nya ba endu ga maintain su balans na ig abpeg electrolytes nu lawas a ga disturbo umayka pedtagudo su taw. Engo nya ba na kapenggamot sa zinc na na pakadtabang endu di ka makakwa sa kaped pan a infection. Ugayd na so sobla sobla a kakan sa nya ba na di mapya. Pangingidsa ka sa doctor o panun i mapya a kakan sa nya ba a gamot.\n        "
                    ],
                    "index": 8
                },
                {
                    "rawPattern": [
                        "* doctor * (remove|drug|treat|treat) *  (remove|drug|treat) * diarrhea *"
                    ],
                    "patterns": [
                        "* doctor * (remove|drug|treat|treat) *  (remove|drug|treat) * diarrhea *"
                    ],
                    "response": [
                        "Upama ka nauget ka den pedtagudo o amayka pedtagudo ka na pegkayaw ka , masakit i tyan nin, endu aden lugo na tay nengka na nasisita i kaangay nengka sa doktor. Kagina silan na katawan nilan ngen i pakairan sa leka abpeg na kaenggan ka nila sa gamot. Upama ka di nengka i namba pagamutan na du kadtagudo na maka dehydrate abpeg na makin den kalunsanan."
                    ],
                    "index": 9
                },
                {
                    "rawPattern": [
                        "* (remove|drug|treat|treat) * diarrhea * ",
                        "* how * drug * diarrhea * ",
                        "* diarrhea * (remove|drug|treat|treat) * "
                    ],
                    "patterns": [
                        "* (remove|drug|treat|treat) * diarrhea * ",
                        "* how * drug * diarrhea * ",
                        "* diarrhea * (remove|drug|treat|treat) * "
                    ],
                    "response": [
                        "So kapenggamot sa tagudo na depende sa sabap nin. Su mga minor cases, na gapakay a minom su taw sa antimotility o bismuth subsalicylate. Ugayd na inom ka bon sa madakel o aden ig nin a mga pegken mana su sabaw, sports drinks, ig a nyog, ig, oral rehydration solutions endu tanga ka sa mga paginumen a aden alchohol nin. Nasisita na engula ka su kainom sa ig. Upama ka di gaawa na nya ba i kapedtagudo , na angay ka den sa doctor endu kagamutan ka ebpyapya."
                    ],
                    "index": 10
                },
                {
                    "rawPattern": [
                        "* treat * diarrhea *"
                    ],
                    "patterns": [
                        "* treat * diarrhea *"
                    ],
                    "response": [
                        "Depende sa kapedtagudo nu tao, su kapenggamot lon na mapakay apya sya bo sa walay o sya mangay sa ospital. Su ka degka, hydrate o kainom sa ig, abpeg kasambi sa pegkanen na mga mapya a enggulan na taw umayka pakagedam sekanin sa dikena bon ged mapasang a kapedtagudo. Su mga sintomas manem na kapakay pengamutan na mga gamot a gapamasa sa botika mana su lopermaide abpeg bismuth subsalicylate. Ugayd na upama ka mapasang den a benel su kapedtagudo ka pegkayaw su taw, ga dehydrate abped pebpaugo i tay nin na angay ka den sa doctor. Meto bun upama ka pedtagudo su taw na naipos a dwa gay. Aw na to na angay ka sa barangay health center"
                    ],
                    "index": 11
                },
                {
                    "rawPattern": [
                        "* (treat|work|treat) * blood * (diarrhea|stool) *",
                        "* blood * (diarrhea|stool) * (treat|work|treat) * "
                    ],
                    "patterns": [
                        "* (treat|work|treat) * blood * (diarrhea|stool) *",
                        "* blood * (diarrhea|stool) * (treat|work|treat) * "
                    ],
                    "response": [
                        "Nya mapya enggulan nu taw na mangay sekanin sa doktor endu kagamutan sekanin upama ka pebpaugo i kapedtagudo nin. Namba na aw na to na sintomas na keped a di mapya a sakit mana su inflammatory bowel disease, infection o kaped a sakit na tinae. Da ka pegkan sa gamot a gapama sa da risenta nin sa botika mana su antimotilities abpeg a bismuth subsalicylate. Di ka blipat paginom sa ig. Endu kagamutan ka ebpyapya na pailay ka sa doctor endu kainggan ka sa nakasugat a gamot"
                    ],
                    "index": 12
                },
                {
                    "rawPattern": [
                        "* drug * diarrhea *",
                        "* (drug|treat|treat) * diarrhea * fever * ",
                        "* (drug|treat|treat) * fever * diarrhea * "
                    ],
                    "patterns": [
                        "* drug * diarrhea *",
                        "* (drug|treat|treat) * diarrhea * fever * ",
                        "* (drug|treat|treat) * fever * diarrhea * "
                    ],
                    "response": [
                        "\n        Upama ka pedtagudo ka na inom ka sa madakel a ig. Mapakay ka obn keman sa mana su sabaw, sports drinks, beteng, o oral rehydration solutions engo da ka paginom sa mga makagkagatel sa tyan mana su aden alchohol nin.\n        \n        Aden bon mga gamot a gapamasa mana su antimotility o bismuth subsalicylate a mapakay nengka engamuten. Ugayd, na da ka pegkan sa antimotility agents mana su loperamide abpeg imodium upama ka pegkayaw ka.\n\n        Amayka ka pegkayaw ka, na betadi ka sa mawasa a mayaw a debpas i bunan bunan nengka. Embalgkas ka sa dikena masimpit. Upama pegkegkel ka, na embalgkas ka sa madakel. Degka ka bon engo pegkabagel ka. \n\n        Amayka di maawa i sakit nengka, na nasisita su ka angay sa doktor engo pegkabagel ka.\n        \n        \n        "
                    ],
                    "index": 13
                },
                {
                    "rawPattern": [
                        "* peel * eat * ",
                        "* not * eat * none * peel * eat * "
                    ],
                    "patterns": [
                        "* peel * eat * ",
                        "* not * eat * none * peel * eat * "
                    ],
                    "response": [
                        "Endu di ka pedtagudo na upisi ka i mga unga na kayo bago pegkanen ka su upis nin na aw na to na aden mga kagaw nin a mana su bacteria, parasites abpeg a virus. Upama ka enggulan nengka i nya ba na katangkan nengka su mga namba. Gagasi ka bon ebpyapya bago ka bagupis endu gaawa su mga duti a nakadeket lun."
                    ],
                    "index": 14
                },
                {
                    "rawPattern": [
                        "* not * eat * (none cook|raw) * meat * "
                    ],
                    "patterns": [
                        "* not * eat * (none cook|raw) * meat * "
                    ],
                    "response": [
                        "Su kapangiluto sa pegken ebpyapya na nasisita a enggulan nu taw endu pebpatay su mga bacterial, virus abpeg mga parasites a gadsabapan na kapedtagudo. Su kakan sa da maluto ged a pegken o mga mailaw a mga karni, manok, leman, abpeg a mga seda na makadsakit. Su kapagiluto embpyapya endu su kasenggay sa mga pagiluton abpeg su naluto na makatabang endu makatangka sa kapedtagudo."
                    ],
                    "index": 15
                },
                {
                    "rawPattern": [
                        "* care * diarrhea * ",
                        "* quick * diarrhea * "
                    ],
                    "patterns": [
                        "* care * diarrhea * ",
                        "* quick * diarrhea * "
                    ],
                    "response": [
                        "Su kalimpyo , mana su kagagas sa lima sa sabon enggo ig , bago pegkan o kapasad gemamit sa cr na nasisita endu di ka edtagudo. Sigurado ka na malinis i gaganatanan a pegken abpeg su ig a paginumin. Endu iluto ka ebpyapya su pegken endu pebpatay i mga bacteria abpeg a parasite a pendeket sa pegken. Su di kakan sa mga da maluto na enguggulan nu taw endu di sekanin edtagudo. Meto bun su mga pegken na aden gatas nin a dala ma pasteruize abpeg nu mga maldsik a ig. Inom ka bon sa ig abpeg a kan sa ebpyapya ka namba na pakagkabagel sa lawas endu di ka kadampuan na kapedtagudo"
                    ],
                    "index": 16
                },
                {
                    "rawPattern": [
                        "* (eat|eat|drink) * (can|good|treat) * diarrhea *",
                        "* (eat|eat|drink) * diarrhea * (can|good|treat) * ",
                        "* (can|good|treat) * (eat|eat|drink) * diarrhea * ",
                        "* (can|good|treat) * diarrhea * (eat|eat|drink) * ",
                        "* diarrhea * (can|good|treat) * (eat|eat|drink) * ",
                        "* diarrhea * (eat|eat|drink) * (can|good|treat) *"
                    ],
                    "patterns": [
                        "* (eat|eat|drink) * (can|good|treat) * diarrhea *",
                        "* (eat|eat|drink) * diarrhea * (can|good|treat) * ",
                        "* (can|good|treat) * (eat|eat|drink) * diarrhea * ",
                        "* (can|good|treat) * diarrhea * (eat|eat|drink) * ",
                        "* diarrhea * (can|good|treat) * (eat|eat|drink) * ",
                        "* diarrhea * (eat|eat|drink) * (can|good|treat) *"
                    ],
                    "response": [
                        "Kapakay ka pegkan sa arroscaldo, saging, sabaw, manok, binubog, electrolyte drinks, oatmeal, peanutbutter, patatas, emay, sports drinks, toast, ig, yogurt, am, abpeg a beteng. Mapakay ko bun edalon ngin I di ka pegkan upama ka pedtagudo ka.  "
                    ],
                    "index": 17
                },
                {
                    "rawPattern": [
                        "* not * good * hydrate * \bdiarrhea\b(?!_) *",
                        "* diarrhea_foods_not_allowed_bad_hydration * \bdiarrhea\b(?!_) *"
                    ],
                    "patterns": [
                        "* not * good * hydrate * \bdiarrhea\b(?!_) *",
                        "* diarrhea_foods_not_allowed_bad_hydration * \bdiarrhea\b(?!_) *"
                    ],
                    "response": [
                        "Enggulan nu taw su di kakan sa mga pegken a di mapya sa hyrdation mana namba nilabit nengka kagina namba silan na pakalunsan sa dyhdration nu lawas. Nya mapya na kan ka sa mga pegken a malmo ka tunag sa tyan endu madakel i ig nin mana su sabay, tininda a kamo, abpeg mga unga na kayo ka madakel i ig nilan a makatabang sa kasambi na nadadag a ig nu taw abpeg electrolyes."
                    ],
                    "index": 18
                },
                {
                    "rawPattern": [
                        "* lactose *",
                        "* lactose * \bdiarrhea\b(?!_) *",
                        "* diarrhea_foods_not_allowed_contains_lactose * \bdiarrhea\b(?!_) *"
                    ],
                    "patterns": [
                        "* lactose *",
                        "* lactose * \bdiarrhea\b(?!_) *",
                        "* diarrhea_foods_not_allowed_contains_lactose * \bdiarrhea\b(?!_) *"
                    ],
                    "response": [
                        "Upama ka pedtagudo so taw na di kapakay a keman su taw sa mga pegken a aden lactose nin ka pakabinasa sa tinay i to ba endu di makambal sa lactase a enzyme a pedtabang sa kasesep sa lactose su taw. Upama ka di masesep nu lawas ebpyapya su lactose, na di maawa i namba sa tinae. Namba na pakadtagetut abpeg pakadsakit sa tyan. Tu ba nan, nasisita su katangka sa mga pegken a aden lactose nin mana su mga gatas , cheese abpeg ice cream. "
                    ],
                    "index": 19
                },
                {
                    "rawPattern": [
                        "* diarrhea_foods_not_allowed_irritate_stomach * \bdiarrhea\b(?!_) *",
                        "* diarrhea_foods_not_allowed_irritate_stomach *"
                    ],
                    "patterns": [
                        "* diarrhea_foods_not_allowed_irritate_stomach * \bdiarrhea\b(?!_) *",
                        "* diarrhea_foods_not_allowed_irritate_stomach *"
                    ],
                    "response": [
                        "Su mga malalas a pegken na ti mapya sa tinae ka pakalunsan sa kapedtagudo. Engo, nya mga mga malalas a pegken na aden mga ingredients nin a malgen ga sesep nu tinay a pakalunsan sa sakit. Namba sabap nin enduken nasisita su di kakan sa mga namba"
                    ],
                    "index": 20
                },
                {
                    "rawPattern": [
                        "* diarrhea_foods_not_allowed_oily * \bdiarrhea\b(?!_) *",
                        "* diarrhea_foods_not_allowed_oily *"
                    ],
                    "patterns": [
                        "* diarrhea_foods_not_allowed_oily * \bdiarrhea\b(?!_) *",
                        "* diarrhea_foods_not_allowed_oily *"
                    ],
                    "response": [
                        "So mga lanan a pegken na madakel i fats nin a pakagkawget sa ka lyu nu pegken ebpun sa tinay. Malgen bon pedsesepen so lana a paka stimulate sa kanggagalbek nu tinay a pakadtagudo. Endu su lana na paka umbal abpeg pakagkadakel sa stomach acid a makalunsan sa kangegedam nu taw. Upama ka pedtagudo i isa na temangka sekanin a mga nya ba lanan a pegken"
                    ],
                    "index": 21
                },
                {
                    "rawPattern": [
                        "* diarrhea * eat * avoid *",
                        "* avoid * eat * diarrhea *",
                        "* eat * avoid * diarrhea *",
                        "* eat * not * (drink|eat) * diarrhea * ",
                        "* diarrhea * not * (drink|eat) * eat *"
                    ],
                    "patterns": [
                        "* diarrhea * eat * avoid *",
                        "* avoid * eat * diarrhea *",
                        "* eat * avoid * diarrhea *",
                        "* eat * not * (drink|eat) * diarrhea * ",
                        "* diarrhea * not * (drink|eat) * eat *"
                    ],
                    "response": [
                        "\n      Da ka pegkan sa mga malalas, lanan , madakel i fats nin na malgen ga digest o sesep nu tinay nu taw. Kaped a dayt a pananggilan nu taw na su kakan sa aden lactose o fructose nin na di mapya ka pakalunsan sa sakit kagina su kaped a mga taw na di nilan gasesep i namba.  Di bon dayt a keman su taw sa mga kamo a madakil i fiber nin mana su mga munggo, mga mategas a kamo abpeg mga hard grains na malgen gatunag sa tyan. Aw na to na nya ba na makadtagetut o makagkasakit sa tyan. \n\n      \nKaped sa di mapya a kanen o inumen nu pedtagudo na su aden alchohol nin, berries, broccoli, repolyo, cauliflower, cheese, cheakpeas, kapi, kamais, petsay, fruit juice, grapes, mga gadong a kamo, teneb, ice crea, gatas, mani, lanan a pegken, malalas a pegken, paminta, mailaw a pegken, salad, shellfish, softdrinks, ebpeg tea. \n      \n      Nya mapya na kan ka sa mga pegken a malmo gatunag sa tyan nin mana su mga da ged nanam nin a pegken endu d kaumnanan ni kapedtagudo nu taw\n      "
                    ],
                    "index": 22
                },
                {
                    "rawPattern": [
                        "* problem * diarrhea * ",
                        "* diarrhea * problem *"
                    ],
                    "patterns": [
                        "* problem * diarrhea * ",
                        "* diarrhea * problem *"
                    ],
                    "response": [
                        "Su wata a naka tlo lagon pan, su mga matuwa na malubay I lawas nin, su di pakakan pyapya, tayn I pedtagudo sa naipos a dwa gay, su pegkayaw sa 39 degree celcius, su aden dana na tai nin, su mapulo I lugo nin, su aden pagangayan nin, abpeg na su aden bon sakit ni andang n abasi kalunsanan I sakit nilan."
                    ],
                    "index": 23
                },
                {
                    "rawPattern": [
                        "* dose * antimotility *",
                        "* (use|eat|drink) * antimotility * ",
                        "* method * antimotility * ",
                        "* antimotility * (use|eat|drink) * "
                    ],
                    "patterns": [
                        "* dose * antimotility *",
                        "* (use|eat|drink) * antimotility * ",
                        "* method * antimotility * ",
                        "* antimotility * (use|eat|drink) * "
                    ],
                    "response": [
                        "Inom ka sa ig upama ka penggamutan nengka I kadtagudo sa antimotilities. Su kadtagudo na makalenguk ged I namaba. Nya ba I enggula ka samaya. Sa mga wata a sampong gu dwa o mas matuwa pan san na paimon ka sa dwa katabletas kapasad nin makaudo. Edaw kapasad nin, painom ka sa isa ka tabletas uman den makaudo. Di ka papaginom sa sobra sa pat timan a tabletas su taw sa sagay.  Sa mga wata a siyaw taman sa sampong gu isa lagon o mga wata a 60 lbs I kaugat nin taman sa 95 lbs na painom ka sa saka tabletas endaw kapasad nin makaudo. Kapasad nin na painom ka sa sabad na tabletas a nan uman makaudo. Di ka papaginom su wata sa tlo ka tabletas sa sagay. Sa mga wata a nem taman sa walo lago o mga wata a 48 lbs taman sa 59 lbs na painom ka sa saka tabletas endaw kapasad nin makaudo.kapasad nin na painom ka sa sabad a tabletas sa sagay. Sa mga wata a lima lagon o mas wata man na idsa ka sa doctor panon I kagamot lon."
                    ],
                    "index": 24
                },
                {
                    "rawPattern": [
                        "* antimotility * "
                    ],
                    "patterns": [
                        "* antimotility * "
                    ],
                    "response": [
                        "Su antimotility mana so Loperamide abpeg Imodium na papegkalungaden nin su kapenggedi nu tyan. Ny anin penggulan na pembind nin su opioid receptors nu tinai endu pegkapaydo su kapengedi nin endu pegkalungat su kapagukit nu tay sa tinae. Nya buntal na gamot a nya ba na aw na to na capsul, igen, o tablitas."
                    ],
                    "index": 25
                },
                {
                    "rawPattern": [
                        "* antimotility * use * ",
                        "* use * antimotility *"
                    ],
                    "patterns": [
                        "* antimotility * use * ",
                        "* use * antimotility *"
                    ],
                    "response": [
                        "Su antimotility  mana so Loperamide abpeg Imodium na nya nen pengamutan na su sintomas na kapedtagudo. Papegkapaydun nin su kapenggedi nu tyan endu di ged pakaukit su pegken abpeg su ig. Nya ba na pangenggan nin su tinay sa oras para gasesep nin su ig abpeg nutrients sa tinay. Nya ba na pakagkapaydu sa kalyu na tay.Nya buntal na gamot a nya ba na aw na to na capsul, igen, o tablitas."
                    ],
                    "index": 26
                },
                {
                    "rawPattern": [
                        "*work * antimotility *",
                        "* antimotility * work * "
                    ],
                    "patterns": [
                        "*work * antimotility *",
                        "* antimotility * work * "
                    ],
                    "response": [
                        "Su antimolitities a mana su loperamide abpeg a imodium na pedtabang sa kapengedi na tyan endu pakagamot sa kapedtagudo. Nya nilan penggulan na pedtabang sa kasesep sa ig abpeg electroltes sa tay. Sabap sa nya ba na pegkapaydu i kapagudo nu taw. Nya mga a gamot na pangatan sa sakawras endu pegkapya i manggegedam nu taw. Ugayd na embibidaya i nya ba sa mga tao. Ugayd, na tanday ka dikena ba langon na pedtaguo na mapakaay enggamot sa nya ba endu aden side effects na nya ba."
                    ],
                    "index": 27
                },
                {
                    "rawPattern": [
                        "* not * (eat|drink|use) * antimotility * "
                    ],
                    "patterns": [
                        "* not * (eat|drink|use) * antimotility * "
                    ],
                    "response": [
                        "So mga antimotility na di dayt inumen nu taw amengka gailay nengka a dehydrated to taw, mapulu i kayaw nin o aden lugo na gaudo nin ka nya ba na padsa na kaped a sakit na nasisita i pendoktor."
                    ],
                    "index": 28
                },
                {
                    "rawPattern": [
                        "* not * good * effect * antimotility * "
                    ],
                    "patterns": [
                        "* not * good * effect * antimotility * "
                    ],
                    "response": [
                        "Su antimotilities na makalangot aw na to na makalugat pan. Da ka pendrive o penggulan sa mga galbel nasisita I kabfocus taman sa sa di nengka katawan ngin I enggulan na gamot a nan sa leka. Upamaka ka lemebag su tyan nengka na angay ka sa doctor gagan."
                    ],
                    "index": 29
                },
                {
                    "rawPattern": [
                        "* tip*  antimotility * "
                    ],
                    "patterns": [
                        "* tip*  antimotility * "
                    ],
                    "response": [
                        "So antimotilities a mana su loperamide na aden mga side effects nin.  Da ka penggamit sa nya ba a agamot upama ka pebpilugo o maytem su tae. Upama ka aden bun sakit nengka andang sa atay o pamusungan na dikena bon ged I nya ba mapya a gamot sa leka."
                    ],
                    "index": 30
                },
                {
                    "rawPattern": [
                        "* sambi * antimotility * "
                    ],
                    "patterns": [
                        "* sambi * antimotility * "
                    ],
                    "response": [
                        "Aden kaped a mga gamot sa antimotilitiesl mana su kapaginom sa tinabel a lawn. Si luya na aden anti-inflammatory properties nin a pakatabang sa tyan nu taw. Mayto bon su saging kagina mapulo i postassium nin a pakatabang sa kapengedi na tyan. Endu su saging na aden pectin nin na pakadtabang endu pegkakapal su tay nu taw a pedtagudo."
                    ],
                    "index": 31
                },
                {
                    "rawPattern": [
                        "* dose *bismuth * ",
                        "* (use|eat|drink) *bismuth * ",
                        "* method *bismuth * ",
                        "* bismuth subsalicylate  * (use|eat|drink) *"
                    ],
                    "patterns": [
                        "* dose *bismuth * ",
                        "* (use|eat|drink) *bismuth * ",
                        "* method *bismuth * ",
                        "* bismuth subsalicylate  * (use|eat|drink) *"
                    ],
                    "response": [
                        "Su kapegkan sa bismuth subsalicyltae na depende sa buntal nin. kagina aden bidayan nu tablitas endu igen a to. \n        \n        Su mga wata a 12 lagon na mapakay keman sa dwa ka tablitas o 524mg uman 30 ka minutus taman sa 60 minutes taman sa dwa gay. Di dayt a kanin i nya subla sa 16 ka tablitas sa sagay.\n        \n        Upama manem ka igen i buntal na bismuth subsalicylate na su taw a 12 i umol ni na mapakay enggamot sa 30ml uman 30 minutes taman sa dwa gay. Di dayt a edsubla i kakan sa nya ba 240ml sa sagay.\n\n        Namba nalabit ko a nan na upaman bo i nan a panon i kanggamot lul. Su nakasugat a dose nin na dayt a pagunutan. Idsa ka sa doctor panon i kakan lun ka silan na katawan nilan i namba.\n        "
                    ],
                    "index": 32
                },
                {
                    "rawPattern": [
                        "* bismuth * "
                    ],
                    "patterns": [
                        "* bismuth * "
                    ],
                    "response": [
                        "Su bismuth subsalicylate mana su pepto-Bismol o bismatrol na ga pamasa sa botika apya dala riseta nin. Pakagamot I namba sa pedtagudo. Nya nin penggulan na makapaenda nin su kadtagudo. Ugayd na inom aw na to na inom ka I namba makapila sa kagabyan. Su bismuth subasalicylate ( pept-bismol ) na mapya bon man, ugay na aw na to na makagkaytem sa dila o tae. Nya ba gamot na nya nin buntal na tablitas, capsule, aw na to na igen."
                    ],
                    "index": 33
                },
                {
                    "rawPattern": [
                        "* bismuth * use * ",
                        "* use * bismuth * "
                    ],
                    "patterns": [
                        "* bismuth * use * ",
                        "* use * bismuth * "
                    ],
                    "response": [
                        "Su bismuth subsalicylate na kapamasa sa botika apya da riseta na doctor. Pakagamot I namba sa kadtagudo , sakit a tyan, endu su kanggedam a mana ka pakauta. Makadtabang I namba sa mga tao a istidi aden pebpawangan nin. Nya ba gamot na nya nin buntal na tablitas, capsule, aw na to na igen."
                    ],
                    "index": 34
                },
                {
                    "rawPattern": [
                        "* work * bismuth *",
                        "*bismuth * work * "
                    ],
                    "patterns": [
                        "* work * bismuth *",
                        "*bismuth * work * "
                    ],
                    "response": [
                        "Su bismuth subsalicylate mana su pepto-Bismol o bismatrol na nabedtuan sa antidiarrheal medicine o gamot para sa kapedtagudo kanina pakagkapya sekanin sa kablibag endu kaibped na ig nu tinae nu taw. Antibacterial bon sekanin a pakadtabang sa kapedtagudo. Su nya ba a gamot na pakatabang bon amayka pakagedam su taw sa kapanegas nu tyan nin, kangri nin, kadtabrik, endu kalangot sabap sa kinaibped nu ig nu lawas nin. Ugayd, na nasisista na tuntay ka na su bismuth subsalicylate na di dayt a kanen nu taw a aden allegy nin sa aspirin, allergy sa kabpilugo, o aden sakit na tinay nin. Endu mangingat ka kagina di dayt i nya ba ipakan sa mga wala apbeg maginay. Di dayt ka kanen ba i nya edsubla sa dwa gay."
                    ],
                    "index": 35
                },
                {
                    "rawPattern": [
                        "* not * (eat|drink|use) * bismuth * "
                    ],
                    "patterns": [
                        "* not * (eat|drink|use) * bismuth * "
                    ],
                    "response": [
                        "Di ka papegkan su taw sa namba umayka aden bleeding problems nengka, o sakit a malbo ka ebpilugo, aden ulcer nin, aden lugo na tay nin, aden allergy nin sa asipiri o pegkan ka sa kaped a salicylates. Di ka benel papegkan I wata o manguda a pegkayaw , pembatuken o aden chickenpox nin."
                    ],
                    "index": 36
                },
                {
                    "rawPattern": [
                        "* not * good * effect * bismuth * "
                    ],
                    "patterns": [
                        "* not * good * effect * bismuth * "
                    ],
                    "response": [
                        "Aw na to na gaitem I tai nengka o dila nengka sa gamot a nan. Amayka makanggedam ka sa allergy mana di ka paka ginawa, blyu mga tapilak, blebag ka,  endu rye syndrome a katusan amayka pedtagudo ka a pakauta ka na dala bagel nengka abpeg kalangot ka a mana ka ga beleg na edtanggit ka I pasente sa doctor"
                    ],
                    "index": 37
                },
                {
                    "rawPattern": [
                        "* tip* bismuth * "
                    ],
                    "patterns": [
                        "* tip* bismuth * "
                    ],
                    "response": [
                        "Inom ka sa di maldsik a ig umayka mininom ka sa bismuth subsalicylate ( pepto-bismol). Su kadtagudo ga ludus nis u ig na lawas bali lenukan ka edsamikel. Tu banan su kapaginom sa ig na masya I makatabang nin kano taw. Upama ka enggamot ka na lenuk ka su capsule. Di ka pedsepa su gamot."
                    ],
                    "index": 38
                },
                {
                    "rawPattern": [
                        "* sambi *bismuth * "
                    ],
                    "patterns": [
                        "* sambi *bismuth * "
                    ],
                    "response": [
                        "Mapakay ka mamasa sa antimotitilities. Aden bon mga kaped a mapakay nengka kanen na dikena gamot a gapamasa sa botika. Mapakay ka keman sa luya o kalawag kagina nya ba na pakadtabang sa lebag abpeg aden antimicrobial property nin a pakadtabang sa pakagedam sa kapedtagudo. mapakay ka bon minom sa beteng kagina madakel i electrolytes nin. "
                    ],
                    "index": 39
                },
                {
                    "rawPattern": [
                        "* where * drug * diarrhea * ",
                        "* go * diarrhea * "
                    ],
                    "patterns": [
                        "* where * drug * diarrhea * ",
                        "* go * diarrhea * "
                    ],
                    "response": [
                        "Su kadtagudo na mapakay na apya sa walay nu bo penggamutan. Egkapya bon I nan mga pila gay. Ugayd na amayka di den a benel mapya I kangegedam nengka, limambas den sa dwa gay I kauget nin, pebpilugo I tay nin o pegkayaw pan sekanin, na nya mapya san na edtanggit ka den sa ospital I pasente nengka."
                    ],
                    "index": 40
                },
                {
                    "rawPattern": [
                        "* symptom * \bdiarrhea\b(?!_) * ",
                        "* (identify) * diarrhea * "
                    ],
                    "patterns": [
                        "* symptom * \bdiarrhea\b(?!_) * ",
                        "* (identify) * diarrhea * "
                    ],
                    "response": [
                        "Madakel I sipat na kapedtagudo. Kadakelan sa  mga taw na nya nilan kanggedam na pedsakit I tyan nilan, pegkasla tyan nila, aden lugo na tay nilan, pedtagetut silan a paka tik pan, galugat ket, pegkayaw, pegkegkel, pakaudo den edtandang, masla I ka nga udo din, aw na to na pakauta pan."
                    ],
                    "index": 41
                },
                {
                    "rawPattern": [
                        "* virus * influenza *"
                    ],
                    "patterns": [
                        "* virus * influenza *"
                    ],
                    "response": [
                        "Su mga kagaw a mana su virus na maka influenza. Pakaalat I namba amayka su taw na pembatok, pembalen, o pedtagedteb ka pakadtubpa nin I yug nin sa sa sambel. Namba na paakalat sa tao amayka ka sengot nin sa ngali o ngilong nin."
                    ],
                    "index": 42
                },
                {
                    "rawPattern": [
                        "* get * influenza *"
                    ],
                    "patterns": [
                        "* get * influenza *"
                    ],
                    "response": [
                        "Makwa nengka I influenza umayka makasengap ka sa sambel nu aden sakit nin. Su mga virus na kapakayan bun a makaalat sa leka amayka maami nengka I mga katamanan a natubpan na kagaw a to. Nya nin mana na kapakay nengka makwa umayka nadeketan nengka I langon na naabpel nu aden a to sakit nn. Ugayd na mapakay bon na upama ka su gay na pedsambi den pendtandang na makandadalo bun I to ba."
                    ],
                    "index": 43
                },
                {
                    "rawPattern": [
                        "* rest *  influenza *"
                    ],
                    "patterns": [
                        "* rest *  influenza *"
                    ],
                    "response": [
                        "Su taw a pegkayaw na nya mapya a enggulan nin demegka sa walay sa apya sagay. Su taw a aden influenza nin na pegkabagel mga dwa o pito gay inganat na kinaludso na sakit nin. Upama ka demegka su taw, su lawas nengka na maka pokus sa kaawa na virus a nan. Endo, su kadegka sa walay na makatabang endu di ka kaalatan I mga kaped nengka."
                    ],
                    "index": 44
                },
                {
                    "rawPattern": [
                        "* drink * influenza *",
                        "* water * influenza *"
                    ],
                    "patterns": [
                        "* drink * influenza *",
                        "* water * influenza *"
                    ],
                    "response": [
                        "Su isa a pagilayan upama ka aden sakit nengka a kambabatokbatok na amayka pegkegkel o pegkayaw su lawas nin. Namba na makapagating. Kaped a mga taw na aw na to a manguta endu edtagudo. Tu ba nana, nasisita su ka inom sa madakel a ig endu kasambiyan i ig a blyu na lawas nengka"
                    ],
                    "index": 45
                },
                {
                    "rawPattern": [
                        "* who * (remove|drug|treat|treat|go) * influenza *"
                    ],
                    "patterns": [
                        "* who * (remove|drug|treat|treat|go) * influenza *"
                    ],
                    "response": [
                        "\n        Su Center of Diseases and Control na nya nilan nadtalo na su taw a aden trangkaso nin na aden pila timan nin a sintomas. Aw na to na aden mayaw nilan, batok, blebag a tideg, sepu o di pakaginawa, pedsakit a lawas, pedsakit a ulo, abpeg a kalugat pedtandang. Su kaped na pakauta pan abpeg a pedtagudo ugayd na sya ba I nya ba kailay ged sa mga wata abpeg matuwa.\n\n        Katyakapan nengka su dalo nengka apya da kaped nengka. Aden mga gamot a gapamasa sa botika sa da riseta nin a makadtabang sa leka sa kaped nin a sakit mana su mayaw endu kadsakit na ulo. Upamaka ka aden dalo nengka na degka ka pan sa walay taman sa di embaba su kayaw nengka sa 24 oras. Iom ka sa madakel a ig, da ka ged pegkategel, endu kan na ebpyapya. \n        \n        Ugayd na labi bon I kapya nin upama ka mapailay sa doctor ka engu ka nilan ka enggan sa risita na gamot endu madtalo nila ngin I kapayan nengka engullan."
                    ],
                    "index": 46
                },
                {
                    "rawPattern": [
                        "* influenza * drug *",
                        "* can * drug * influenza *"
                    ],
                    "patterns": [
                        "* influenza * drug *",
                        "* can * drug * influenza *"
                    ],
                    "response": [
                        "Su pedsakit sa influenza na aw na to na egkayaw sekanin abpeg embabatok, blebag a tidek nin, pedsepu o di pakaginawa, pedsakit a lawas, pedsakit a ulo, abpeg a kalugat pedtandang. Su kaped na pakauta pan abpeg a pedtagudo ugayd na sya ba I nya ba kailay ged sa mga wata abpeg matuwa.\n\n        Upama ka aden dalo nengka na degka ka. Da ka blyu sa walay taman sa di maawa I kayaw nengka sa 24 oras, inom ka sa madael a ig, di ka blugata I lawas nengka, endu kan ka ebpyapya. Kagamutan ka bon upama ka makakan ka sa gamot a ka nga ton bun sa botika.\n        \n        Ugayd na labi bon I kapya nin upama ka mapailay sa doctor ka engu ka nilan ka enggan sa risita na gamot endu madtalo nila ngin I kapayan nengka engullan.\n        "
                    ],
                    "index": 47
                },
                {
                    "rawPattern": [
                        "* where * treat * influenza * ",
                        "* treat * influenza * where *"
                    ],
                    "patterns": [
                        "* where * treat * influenza * ",
                        "* treat * influenza * where *"
                    ],
                    "response": [
                        "Su pedsakit sa influenza na aw na to na egkayaw sekanin abpeg embabatok, blebag a tidek nin, pedsepu o di pakaginawa, pedsakit a lawas, pedsakit a ulo, abpeg a kalugat pedtandang. Su kaped na pakauta pan abpeg a pedtagudo ugayd na sya ba I nya ba kailay ged sa mga wata abpeg matuwa.\n\n        Kapakay nengka bon na tyakapi ka bo I ginawa nengka. Tupan ka pedsaldseg i dalu nin na nya labi a mapya na pailay ka sa doktor minuna den upama ka isa ka sa mga aden kaped nin pan a dalo. "
                    ],
                    "index": 48
                },
                {
                    "rawPattern": [
                        "* influenza * (remove|drug|treat|treat) *",
                        "* (remove|drug|treat|treat) * influenza * ",
                        "* drug * influenza * ",
                        "* influenza * drug * "
                    ],
                    "patterns": [
                        "* influenza * (remove|drug|treat|treat) *",
                        "* (remove|drug|treat|treat) * influenza * ",
                        "* drug * influenza * ",
                        "* influenza * drug * "
                    ],
                    "response": [
                        "\n        Su influenza o flu na viral infect na pakabinasa sa kapenginawa nu respiratory system. Nya mapya enggulan na taw upama ka pakagedam sekanin sa namba na minom sekanin sa madakel a ig endu di sekanin ma dehydrate.\n        \n        Aden bon mga gamot a gapamasa sa botika a da resita nin a mapakay nengka paginumen. Mapakay a enggamot ka sa antihistamines endu egkapya mangiginawa nengka amayka aden magatel nengka, aden ngug nengka o pegkagatel ka. Su analgesic manem mana su acetaminophen o ibuprofen na pakagamot sa sakit na lawas abpeg sa mayaw. Su mga non steroidal anti-inflammatory drugs (nsaids) na meto bun ba i penggulan nun. Upama ka pedsepu ka a benel a di ka pagainawa na mapakay ka enggamot sa decongestants. Upama manem ka pembatoken ka na tekaw na gemamit sa antitussives. Mapakay bon a keman ka sa lozenges upama manem ka magatel i tidek nengka o pembatok ka.  \n\n        Aw na to na su pagospitalen su taw upama ka di den a benel menda i influenza nin. Nya mapya a enggulan nu taw tangkan nin su nganin nganin a makainfluenza endu mapatebek sikanin sa bakuna endu di edsakit.\n        "
                    ],
                    "index": 49
                },
                {
                    "rawPattern": [
                        "*vaccine * influenza *"
                    ],
                    "patterns": [
                        "*vaccine * influenza *"
                    ],
                    "response": [
                        "Saguna na dala pan gamot sa flu, ugayd na su kambakuna na makadtabang sa leka. Su flu vaccine abpeg su kapailay sa doctor uman lagon na makatabang bun. Namba na makatabang para di ged pegkabagel I sakit nu tao. Su mga tao a aden sakit nin mana su sakit na pamusungan na katabangan nin. Kagina ka mayto na su kapaguspital sabap sa nya na di ged manggula. Makatabang bon I nyaba sa magingay, wata abpeg a tao sa ubay nengka."
                    ],
                    "index": 50
                },
                {
                    "rawPattern": [
                        "* (avoid|remove) * influenza *",
                        "* not * approach * influenza *"
                    ],
                    "patterns": [
                        "* (avoid|remove) * influenza *",
                        "* not * approach * influenza *"
                    ],
                    "response": [
                        "Da ka aged pagubay sa kaped nengka upama ka aden sakit nin. Upama ka seka i aden sakit nin na tangka ka. da ka pagubay sa saka lepa sa mga tao a pembabatok. Tangka ka bon sa tayn I aden ngog nin. Da ka ged pagamong sa madakel a taw ka makwa nengka i kagaw a nan. Enggula ka I nyaba para di den makalanag I sakit a nya."
                    ],
                    "index": 51
                },
                {
                    "rawPattern": [
                        "* wear * (nose|mouth|cough|sneeze) * influenza *"
                    ],
                    "patterns": [
                        "* wear * (nose|mouth|cough|sneeze) * influenza *"
                    ],
                    "response": [
                        "Tagubi ka I ngali abpeg ngilong nengka sa tissue upama ka pembatuken ka o pembalen ka enggu di maalat I sakit a nan sa kaped nengka."
                    ],
                    "index": 52
                },
                {
                    "rawPattern": [
                        "* clean * hand * "
                    ],
                    "patterns": [
                        "* clean * hand * "
                    ],
                    "response": [
                        "Gagas ka sa lima edsamikel para di nengka madtapik I kagaw a nan. Upama ka dala sabon abpeg a ig, na bubusi ka lima nengka sa alchohol."
                    ],
                    "index": 53
                },
                {
                    "rawPattern": [
                        "* use * mask * "
                    ],
                    "patterns": [
                        "* use * mask * "
                    ],
                    "response": [
                        "Gamit ka sa facemask enggu di ka kaalatan  na virus kagina namba na makwa bun sa sambel o upama ka maami nengka o magamit nengka su nganin ngain a gamit na a naabpel nu tao  a to"
                    ],
                    "index": 54
                },
                {
                    "rawPattern": [
                        "* (care|avoid|kapananggila) * influenza * ",
                        "* influenza * kapananggila * "
                    ],
                    "patterns": [
                        "* (care|avoid|kapananggila) * influenza * ",
                        "* influenza * kapananggila * "
                    ],
                    "response": [
                        "Upama ka pakagaga ka na pabakuna ka. Tangkay ka su mga taw a aden sakit nin. Upamak ka seka su aden sakit nin na lenek kawm pan sa lawas endu di mganalat sakit nengka. Tagubi ka istidi i ngali abpeg su ngilong nengka endu di makaalat i sakit a nana. Gmait ka sa facemask. Pamlimpyo ka mana su kakagad sa lima endu di ka pagamit i mata , ngilong abpeg a ngali nengka endu di maka ludep i virus a nan sa lawas nengka."
                    ],
                    "index": 55
                },
                {
                    "rawPattern": [
                        "* (can|good|treat) * influenza * eat * ",
                        "* (can|good|treat) * eat * influenza * ",
                        "* influenza * (can|good|treat) * eat * ",
                        "* influenza * eat * ",
                        "* eat * (can|good|treat) * influenza *",
                        "* eat * influenza * (can|good|treat) * ",
                        "* eat * influenza * "
                    ],
                    "patterns": [
                        "* (can|good|treat) * influenza * eat * ",
                        "* (can|good|treat) * eat * influenza * ",
                        "* influenza * (can|good|treat) * eat * ",
                        "* influenza * eat * ",
                        "* eat * (can|good|treat) * influenza *",
                        "* eat * influenza * (can|good|treat) * ",
                        "* eat * influenza * "
                    ],
                    "response": [
                        "Aden embalangan a pegken na makadtabang endu engkabagel ka sa malengkas. Nya nin umpaman na su sabaw na manok, sapi o kamo na makadtabang sa dehydration engo su kayaw nin ma makadtabang sa kagkapya na tidek. Kapakay ka bon keman sa lansuna kagina makakagkapya bon I nya bas a sakit abpeg su mga padsa nin. Su mga pegken a to a aden probiotic nin a mana s yogurt na kapakay bon makadtabang sa kapegpadadakel sa mapya a bakterya na tinae abpeg nu lawas. Su mga unga na kayo abpeg su kamo na aden vitamin c na makadtabang bon. Nya nin mga kaped I nya ban a su paminta, kalamansi, grapes abpeg su mga madakel a to I lawn I a kamo. Kapakay ka bon keman sa kamo a mana su broccoli. Su oatmeal bon na aden nutrients nin mana su copper, iron, selenium, zinc fiber endo proteen na makagkabagel bon sa lawas. Kaped pan sa makadtabang na su mga luya abpeg a kalawag. Nya bon tanto a makadtabang na di ka blepatani I kainom sa madakel a ig. "
                    ],
                    "index": 56
                },
                {
                    "rawPattern": [
                        "* influenza_foods_not_allowed_greasy_foods * ",
                        "* influenza_foods_not_allowed_greasy_foods * influenza * "
                    ],
                    "patterns": [
                        "* influenza_foods_not_allowed_greasy_foods * ",
                        "* influenza_foods_not_allowed_greasy_foods * influenza * "
                    ],
                    "response": [
                        "\n        Su mga lanan a mga pegken na makalunsan sa sakit na tidek, kambabatok abpeg di kepenginawa. Tu ba nan su mga pegken a madakel i fats nin na tangkan o di ged kanen nu taw. Nya sabap na nya ba na malken su ka tunag nilan sya kano tyan nu taw. Nasisista na di ka ged pegkan sa nya ba endo malmo kagkabagel na lawas nengka"
                    ],
                    "index": 57
                },
                {
                    "rawPattern": [
                        "* influenza_foods_not_allowed_sugary_foods * ",
                        "* influenza_foods_not_allowed_sugary_foods * influenza *"
                    ],
                    "patterns": [
                        "* influenza_foods_not_allowed_sugary_foods * ",
                        "* influenza_foods_not_allowed_sugary_foods * influenza *"
                    ],
                    "response": [
                        "Su mga kakan sa amadakel I mamis nin a pegken na makagkalubay sa immune system nengka a pedtabang sa mga sakit mana su flu. Su kakan bon sa nya ba na pakalebag. Nya ba na pakalunsan sa sakit na tidek abpeg a batok. Endo su mga mamis ged a pegken na pakagkapulu sa blood sugar levels a sabapan na sobla sobla a kapegkalugat abpeg malunggad a kagkabagel sa flu."
                    ],
                    "index": 58
                },
                {
                    "rawPattern": [
                        "* eat * not * (drink|eat) * influenza * ",
                        "* influenza * not * (drink|eat) * eat *"
                    ],
                    "patterns": [
                        "* eat * not * (drink|eat) * influenza * ",
                        "* influenza * not * (drink|eat) * eat *"
                    ],
                    "response": [
                        "Upama ka pakagedam ka sa flu na da ka paginom engo pegkan sa mga caffeinated drinks, coks, lanan ged, mategas a mga pegken, abpeg mga mamis a bnel a pegken. Tekaw ka kan sa mga aden sabay nin engo kasambiyan su mga nadadag a ig nu lawas. Kan ka sa pan, patatas, emay, saging, manok abpeg seda."
                    ],
                    "index": 59
                },
                {
                    "rawPattern": [
                        "* problem * influenza * ",
                        "* influenza * problem *"
                    ],
                    "patterns": [
                        "* problem * influenza * ",
                        "* influenza * problem *"
                    ],
                    "response": [
                        "Aden mga taw a mangingat sabap sa influenza. Nya ba silan a mana su mga nem ulan o mga matuwa. Abpeg su mga taw a to a aden mga sakit nin a kaped mana su umes, sakit a pamusungan, diabetes, sakit sa kidney, sakit sa atay, mga di ged pakaginawa, so mga malubay a taw abpeg su sobla sobra den i kasebud nin a mga taw."
                    ],
                    "index": 60
                },
                {
                    "rawPattern": [
                        "* (use|eat|drink|dose) * antihistamine * ",
                        "* method * antihistamine * ",
                        "* antihistamine  * (use|eat|drink) *"
                    ],
                    "patterns": [
                        "* (use|eat|drink|dose) * antihistamine * ",
                        "* method * antihistamine * ",
                        "* antihistamine  * (use|eat|drink) *"
                    ],
                    "response": [
                        "Su antihistamine mana su Citerizing abpeg a Benadryl na kapay nengka pegkanin apya da ka kan, da ka makainum sa ig o gatas enggu di get kagatel tyan nengka. Nyaba I enggula ka upama ka keman ka sa citerizine. Su nem lagon a wata apeg a matuwa na kapakayan a keman sa lima taman sa sapulo ka milligram uman gay. Su pat taman sa nem lagon na kapakay kelan sa lima ka milligram o dwa enggula sabad maka dwa sa sagay. So tayn manem I da makasot sa pat lagon na d papegkanen sa nya ba a gamot."
                    ],
                    "index": 61
                },
                {
                    "rawPattern": [
                        "* antihistamine * "
                    ],
                    "patterns": [
                        "* antihistamine * "
                    ],
                    "response": [
                        "Su antihistamine mana su Citerizing abpeg a Benadryl na embalangan a gamot na penggamiten na madakel sa kapenggamot s allergy. Nya ba silan na pakadtabang upama ka madakel ged I histamine nu taw. Nya ba na chemical na pagumbalen nu lawas nu gagaysa. Nya ba gamot na penggamitin nu madakel sa allergy sa polen abpeg kaped pan. Ugayd na kapakayan bon I penggamot sa kaped a sakit mana su sakit na nya, sepu, anxiety abpeg kaped pan. Nya ba gamot na madakel I embalangan nin mana igen, ipegkugil, syrup, gel, eyedrops, tablitas, capsules, creams abpeg I pegsumbok sa pudit nu taw."
                    ],
                    "index": 62
                },
                {
                    "rawPattern": [
                        "*antihistamine * use * ",
                        "* use * antihistamine *"
                    ],
                    "patterns": [
                        "*antihistamine * use * ",
                        "* use * antihistamine *"
                    ],
                    "response": [
                        "Su antihistamine mana su Citerizing abpeg a Benadryl na kagamit sekanin enggu pakatabang sa allergy o mga kagkagatel. Nya ba gamot na penggamutan i sobla kadakel na histamine a pagumbalen na lawas upamaka ka pedsakit su taw. Su antihistamines na pengamiten  nu mga taw a aden allergic reaction nilan sa polens engu allergens. Pakagamot bon i nya ba sa kaped a sakit mana su sakit na nya, sepu, anxiety abpeg kaped pan.Nya ba gamot na madakel I embalangan nin mana igen, ipegkugil, syrup, gel, eyedrops, tablitas, capsules, creams abpeg I pegsumbok sa pudit nu taw."
                    ],
                    "index": 63
                },
                {
                    "rawPattern": [
                        "* antihistamine * (remove|drug|treat|treat|work) *",
                        "* (remove|drug|treat|treat|work)  * antihistamine  *"
                    ],
                    "patterns": [
                        "* antihistamine * (remove|drug|treat|treat|work) *",
                        "* (remove|drug|treat|treat|work)  * antihistamine  *"
                    ],
                    "response": [
                        "Su antihistamines na penggamiten sa kapenggamot sa hay fever o kapegkayaw abpeg allergy o mga kagkagated. Papedtalenen nin su histamines a pagumbalen nu lawas upama ka aden sakit na taw a sabapan na kagkagatel, kambals, blyu edtandang i ngong, abpeg kadsakit na mata."
                    ],
                    "index": 64
                },
                {
                    "rawPattern": [
                        "* antihistamine * not * (eat|drink|use) *",
                        "* not * (eat|drink|use) * antihistamine  * "
                    ],
                    "patterns": [
                        "* antihistamine * not * (eat|drink|use) *",
                        "* not * (eat|drink|use) * antihistamine  * "
                    ],
                    "response": [
                        "Madakel sa mga taw na da manggulan nilan upama ka minom sa antihistamines. Ugayd na aden mga taw mana su mga maginay, papedsusu, wata , pegkan sa kaped a mga gamot, aden mga sakit nin mana su sakit a pamusungan, sakit na atay, sakit na kidney o eplipepsy na mangingat sa kapegkan sa nya ba gamot.\n        "
                    ],
                    "index": 65
                },
                {
                    "rawPattern": [
                        "* not * good * effect * antihistamine * "
                    ],
                    "patterns": [
                        "* not * good * effect * antihistamine * "
                    ],
                    "response": [
                        "Mana kaped a gamot, aden dikena mapya a epekto na antihistamine. Nya ba na embidabida sa taw.Ugayd na su antihistamines na makalangot, makagkalbog sa kailay, makagkalgen sa kaudo, abpeg kagkalgen na ka titi. upama ka aden sakit nengka o pegkan ka sa kaped a gamot na nasisita i ka id sa nengka sa doktor o pendagang sa gamot mana su pharmacist panon i nakasugat a kakan sa nya ba.s\n        "
                    ],
                    "index": 66
                },
                {
                    "rawPattern": [
                        "* tip* antihistamine  * "
                    ],
                    "patterns": [
                        "* tip* antihistamine  * "
                    ],
                    "response": [
                        "Upama ka keman ka nya ba a gamot na da ka paginom sa aden alchohol nin abpeg a makandadalangot. Da ka ged pengalbek sa mga galbekan a makapagitong ka gayd. Panginat ka bon upama ka su aden sakit nin na aden hepatic abpeg a renal impairment nin. Pagidsan bun sa matuwa ka nya malmo nilan mangedam I dikena mapya a epekto na nya ba."
                    ],
                    "index": 67
                },
                {
                    "rawPattern": [
                        "* sambi * antihistamine  * "
                    ],
                    "patterns": [
                        "* sambi * antihistamine  * "
                    ],
                    "response": [
                        "Tekaw ka kan sa luya. Niya tig na Sinus and Allergy Wellness Center na namba na natural a histamine. Niya nin mana na isa sekanin a pakadtabang sa lawas. So luya na mapya a makadtabang a gamot kagina pakadtabang sekanin sa lawas. Kapakay ka mumbal sa sa ti para makatabang sa kapedsakit na ulo. Upama ka pagigop ka manem sa ti na, pagebaw ka it to ba. Mayto bon na tekaw ka gamit sa kaped pan a gamut mana su kalawag ka mabagel I namba a natural a gamot."
                    ],
                    "index": 68
                },
                {
                    "rawPattern": [
                        "* (dose|use|eat|drink|method) *  analgesic  * ",
                        "* analgesic * (use|eat|drink) *"
                    ],
                    "patterns": [
                        "* (dose|use|eat|drink|method) *  analgesic  * ",
                        "* analgesic * (use|eat|drink) *"
                    ],
                    "response": [
                        "Su analgesics na embalangan na gamot na papagenda sa mga masakit sa lawas. Maya ba I kapengkan sa nya ba gamot. Su ibuprofen na nya nin den pinaka masla a dose nin a makaysa nengka kanin na 400mg bo. Sa sagay n ataman sa 1200mg I kapakayan. Upama ka naproxen, na kapakay ka keman sa 500mg sa makaysa. Ugayd n ataman bo I namba sa 750 sa sagay.. sa acetaminophen na taman sa 1000mg  sa sagay ugayd na di kapakayan na lumampas ka pan sa 400mg. sa aspirin , na kapakay I 1000mg a makaysa a dose ugayd na sa gay na 3000mg bo sa mga taw a mababa I umul nin sa 65. upama manem ka mas matuwa pan san na taman bo sa 200mg."
                    ],
                    "index": 69
                },
                {
                    "rawPattern": [
                        "* analgesic  * "
                    ],
                    "patterns": [
                        "* analgesic  * "
                    ],
                    "response": [
                        "Su mga analgesics mana acetaminophen, ibuprofen, paracetamol, biogesic abpeg na calpol, na nabedtuan a pain killers a pagamot sa embalangan na masakit mana su masakit a ulo , su mga injuries, abpeg arthitis. Su mga anti-inflammatory analgesics na mga gamot a papegkapaydon nin su kablebgag. So opoiod analgesics manem na pedsambian nin su panun su kapegkagedam sa sakit nu taw sya kanu utek nin. Su nya ba a gamot na nya nin buntal na igen, nasal spray, tablitas, capsules, aw na to na powder."
                    ],
                    "index": 70
                },
                {
                    "rawPattern": [
                        "* analgesic * use * ",
                        "* use * analgesic  "
                    ],
                    "patterns": [
                        "* analgesic * use * ",
                        "* use * analgesic  "
                    ],
                    "response": [
                        "Su mga over the counter a analagesics mana acetaminophen, ibuprofen, paracetamol, biogesic abpeg na calpol na gapamasa sa parmachies mana su ibuprofen abpeg a acetaminophen o paracetamol na pakagkapya sa mga masakit. Ugayd na ibibidaya i kapya na gamot a nan sa upaman nu sakit, su  kabagel nin, enggo su kadakel nu gamot a pegkanen. Su pain killers na gapamasa sa da resita nin na kapakayan penggamuten sa mga dikena ged mga masakit a kangedam nu taw. Ugayd na di ba inan dayt a pegkanen sa edututundog a pila gay endu su kakan sa nya ba di di dayn a pedsublan.Su nya ba a gamot na nya nin buntal na igen, nasal spray, tablitas, capsules, aw na to na powder."
                    ],
                    "index": 71
                },
                {
                    "rawPattern": [
                        "* work * analgesic *",
                        "* analgesic * (work|remove|drug|treat|treat) *"
                    ],
                    "patterns": [
                        "* work * analgesic *",
                        "* analgesic * (work|remove|drug|treat|treat) *"
                    ],
                    "response": [
                        "Su analgesics a bedtuan bon sa pain releivers na pakatabang sa kagkapya na mga mangedam nu taw abpeg su mayaw a kadtapik nu influenza. Nya penggulan na gamot ba nan paptedtalnen nin su kapagumbal nu lawas sa chemicals a sabapan na kangedam nu taw sa masakit abpeg kablebag. Su mga common a mga analgesics a gapamasa na su acetaminophe, ibuprofen, abpeg a aspirin. Ugayd, na nasisita su kaunot sa nakasugat a kapegkan lun ka aden mga analgesics a di dayt a inumen nu taw ka makalunsan sa sakit nin."
                    ],
                    "index": 72
                },
                {
                    "rawPattern": [
                        "* not * (eat|drink|use) * analgesic  * ",
                        "* analgesic * not * (eat|drink|use) *"
                    ],
                    "patterns": [
                        "* not * (eat|drink|use) * analgesic  * ",
                        "* analgesic * not * (eat|drink|use) *"
                    ],
                    "response": [
                        "Nya tig na WebMD, na di ka paginom sa namba gamot upama ka so sakit nengka nan aka sapulo gay den. Di dayt a penggamuten I nya ba upama ka su mayaw nu tao na sobla den sa tlo gay. Upama ka mauma den sa may aba na pailay ka den sa doctor ka basi sakabiyas den a dalo I namba."
                    ],
                    "index": 73
                },
                {
                    "rawPattern": [
                        "* not * good * effect * analgesic  * "
                    ],
                    "patterns": [
                        "* not * good * effect * analgesic  * "
                    ],
                    "response": [
                        "Su anti-inflammatory analgesics na di bun makagkayd. Ugayd na makagkayd ba i nya sa kaped a tao. Upama ka minum ka edtandang sa gamot a nya sa mawget na pakabinasa ba I nya bas a ludep a lawas nu taw. Gabinasa nin su atay abpeg su kidney. Makadtaguno abpeg a madtegan pan I nya ba. Makadsakit sa tangila abpeg makabinasa ba I nya sa tyan."
                    ],
                    "index": 74
                },
                {
                    "rawPattern": [
                        "* tip* analgesic  *"
                    ],
                    "patterns": [
                        "* tip* analgesic  *"
                    ],
                    "response": [
                        "Pegkanin I nya ba a gamot. Inom ka sa ig mga walo ka baso. Da ka pagiga sa mga sapulo ka minutos kapasad nengka keman sa nya ba gamot. Upama ka edsakit I tyan nengka kapasad nengka keman sa nya ba na kan ka sa pegken o inom ka s agatas. "
                    ],
                    "index": 75
                },
                {
                    "rawPattern": [
                        "* sambi * analgesic  *"
                    ],
                    "patterns": [
                        "* sambi * analgesic  *"
                    ],
                    "response": [
                        "Su Philippine Institute of Traditional and Alternative Healthcare na niya nilan tig na makadtabang kon su palya, yerba Buena, ulasimang bato o pansit-pansita, endu so bayabas kagina aden kon analgesic effect nilan."
                    ],
                    "index": 76
                },
                {
                    "rawPattern": [
                        "* (method|dose|use|eat|drink) * decongestant * ",
                        "* decongestant * (use|eat|drink) *"
                    ],
                    "patterns": [
                        "* (method|dose|use|eat|drink) * decongestant * ",
                        "* decongestant * (use|eat|drink) *"
                    ],
                    "response": [
                        "Su kapegkan sa nya ba gamot na nakadepended sa gamot a pengkanin. Upamaka ka nya nengka pinamasa na pseudoephedrine o Sudafed, the su gamutan nin na 60mg a tablitas. upama ka sui gen I kanen nengka na 30mg in 5ml.\n\n        Su matuwa abpeg a wat ana nya nin lagon 12 taman sa 17 na nya gamutan nin na 60mg tablet o dwa ka 5ml nu igen a gamot a to taman sa makapat sa sagay.\n        \n        Sa mga wata a nem lagon taman sa sapulo enggu isa na sabad ka tablitas mana 30mg bo o 5ml a salidot nu igen a gamot taman sa makapat sa sagay.\n        "
                    ],
                    "index": 77
                },
                {
                    "rawPattern": [
                        "* decongestant  * "
                    ],
                    "patterns": [
                        "* decongestant  * "
                    ],
                    "response": [
                        "Su decongestant mana su pseudoephedrine, decolgen abpeg na sudafed na gamot a pakadtabang sa di ged pakaginawa i ngilong nin. Papedtanan nin  I lebag a nan abpeg su ngog nu taw. Da ged epekto nin I namba sa pagigingis I ngog nin abpeg pembaln. Nya ba gamot na gapamasa sekanin sa nose drops , nasal sprays, eye drops, tablitas, capsuls, abpeg syrup. "
                    ],
                    "index": 78
                },
                {
                    "rawPattern": [
                        "* decongestant * use * ",
                        "* use * decongestant * "
                    ],
                    "patterns": [
                        "* decongestant * use * ",
                        "* use * decongestant * "
                    ],
                    "response": [
                        "Su decongestants mana su pseudoephedrine, decolgen abpeg na sudafed na mga gamot a pakadtabang sa di pakaginawa ka naalnan I ngilong nin sa ngog. Namba di nin a nan kapenginawa na sabap ba I naman sa sa virus or sakit a flu, sinusitis o allergy.Nya ba gamot na gapamasa sekanin sa nose drops , nasal sprays, eye drops, tablitas, capsuls, abpeg syrup."
                    ],
                    "index": 79
                },
                {
                    "rawPattern": [
                        "* (work|remove|drug|treat|treat) * decongestant *",
                        "* decongestant* (work|remove|drug|treat|treat) *"
                    ],
                    "patterns": [
                        "* (work|remove|drug|treat|treat) * decongestant *",
                        "* decongestant* (work|remove|drug|treat|treat) *"
                    ],
                    "response": [
                        "Su decongenstant na nya nin galbek na papedsimpiten nin su blood vessels sa ngilong. Su blebag a tissue na ngilong na pegkanawt enggu pegkapya kapengginawa nu taw."
                    ],
                    "index": 80
                },
                {
                    "rawPattern": [
                        "* not * (eat|drink|use) * decongestant * ",
                        "* decongestant * not * (eat|drink|use) *"
                    ],
                    "patterns": [
                        "* not * (eat|drink|use) * decongestant * ",
                        "* decongestant * not * (eat|drink|use) *"
                    ],
                    "response": [
                        "Da ka pegkan sa decongenstants upama ka mapulo I lugo nengka o di nengka ka control I namaba kagina makagkapulo nya ba sa lugo. Ilay ka sa kaped a kapakayan nengka kanin. Enggu di ka papegkan su wata a mababa pan sa nem lagon sa nya ba a agamot."
                    ],
                    "index": 81
                },
                {
                    "rawPattern": [
                        "* not * good * effect * decongestant * "
                    ],
                    "patterns": [
                        "* not * good * effect * decongestant * "
                    ],
                    "response": [
                        "Su decongenstants na aw na to na di mapya sa kaped a taw. Nya ba gamot na malmu ta makakedu, malagot, abpeg makatulog. Aw nato na makagkalngkas I nya ba sa kapenginawa o kapulo I lugo nengka."
                    ],
                    "index": 82
                },
                {
                    "rawPattern": [
                        "* tip*  decongestant  * "
                    ],
                    "patterns": [
                        "* tip*  decongestant  * "
                    ],
                    "response": [
                        "Su decongestatnt na kapakay pegkanen sa ngali endu makaginawa taw a aden sakit nin sa ngilog."
                    ],
                    "index": 83
                },
                {
                    "rawPattern": [
                        "* sambi * decongestant  * "
                    ],
                    "patterns": [
                        "* sambi * decongestant  * "
                    ],
                    "response": [
                        "Amayka di kapakayan su oral decongestants sa lek ana aden kaped nengka pan a manggamot. Umpama ka gamot bon, ka tekawi ka I antihistamines mana su Benadryl, citericine abpeg loratadine. Nya ba na makatabang bon I nya bas a barado I ngilong nin."
                    ],
                    "index": 84
                },
                {
                    "rawPattern": [
                        "* (dose|method|use|eat|drink) * expectorant * ",
                        "* expectorant * (use|eat|drink) *"
                    ],
                    "patterns": [
                        "* (dose|method|use|eat|drink) * expectorant * ",
                        "* expectorant * (use|eat|drink) *"
                    ],
                    "response": [
                        "\n        Su kapenggamit sa expectorants na nakadepende sa gamot, lagon, kaugat endu lawas nu taw. \n\n        So mga matuwa na mapakay keman sa 200 to 400 milligrams uman pat kauras. \n\n        Su mga wata a 6 taman sa 12 lagon na mapakay keman sa 100 taman sa 200 mg uman pat kauras.\n\n        Su mga wata manem a 4 taman sa 6 lagon na mapakay keman sa 50 taman sa 100mg uman pat kauras.\n\n        Su mga bago pimbata endu da makasaw i umul nin sa 4 lagon na di pakanen sa nya ba gamot.\n\n        Nya ba pidtalo ko a nya na makatadbang upama ka di nengka katawas panon i enggulan nengka. Ugayd na nasisita i pailay ka o angay ka sa doctor engu kainggan su taw a sa nakasugat a gamot nu sakit nin.\n        "
                    ],
                    "index": 85
                },
                {
                    "rawPattern": [
                        "* expectorant * "
                    ],
                    "patterns": [
                        "* expectorant * "
                    ],
                    "response": [
                        "Su expectorants mana guaifenesin abpeg na Robitussin na papegkalmon nin su kalyu nu ngog o klad. Sabap ba i nya na papegkadakel nin sa ig sa mga namba. Kagina mayto ba i penggulan nin na malbo i ka lyu nin sa lawas nu taw upama ka embatuken sekanin. Su mga expectornats na kagamit silan sa kapenggamot sa mga sakit mana su bronchitis, pneumonia, abpeg sepu. Nya ba na gamot na aw na to na iged tablitas i buntal nin."
                    ],
                    "index": 86
                },
                {
                    "rawPattern": [
                        "* expectorant * use * ",
                        "* use * expectorant  * "
                    ],
                    "patterns": [
                        "* expectorant * use * ",
                        "* use * expectorant  * "
                    ],
                    "response": [
                        "Kapakay ka pegkan sa expectorant mana so guaifenesin abpeg na Robitussin amayka di ka ged pakaginawa sabap sa sepu. Nya ba a gamot na na aw nato na isa nin bo a gamot na da maamong sa kaped a gamot.Nya ba na gamot na aw na to na iged tablitas i buntal nin. "
                    ],
                    "index": 87
                },
                {
                    "rawPattern": [
                        "* (work|remove|drug|treat|treat) * expectorant *",
                        "* expectorant * (work|remove|drug|treat|treat) *"
                    ],
                    "patterns": [
                        "* (work|remove|drug|treat|treat) * expectorant *",
                        "* expectorant * (work|remove|drug|treat|treat) *"
                    ],
                    "response": [
                        "Su expectorants mana so guaifenesin abpeg na Robitussin na papegkalindegen nin u pagukitan na sabmel sa lawas nu taw. Sabap sa namba penggulan nin na papegkalmon nin su kablyu nu ngong engu klad nu taw. Kagina malmo den i ka lyu na ngog na malmo bon i kabatok nu taw endu gaawa su ngog endu klad sa tidek "
                    ],
                    "index": 88
                },
                {
                    "rawPattern": [
                        "* not * (eat|drink|use) * expectorant * "
                    ],
                    "patterns": [
                        "* not * (eat|drink|use) * expectorant * "
                    ],
                    "response": [
                        "Embityala nengka I doctor nengka bago ka penggamot sa expectorant upama magingay ka o papedsusu ka. Upama ka nya ka kailay na nagallergy ka na telni ka gamot a nan.Ingat ka sa kandrive ka o kagamit nengka sa makina upama ka pengkan ka sa expectorant kagina makandadalangot ba I nya ba\n        "
                    ],
                    "index": 89
                },
                {
                    "rawPattern": [
                        "* not * good * effect * expectorant * "
                    ],
                    "patterns": [
                        "* not * good * effect * expectorant * "
                    ],
                    "response": [
                        "Su expectorant na da ged masla a side effect nin. Ugayd, na makandadadalangot ba I nya ba abpeg makanggagatel"
                    ],
                    "index": 90
                },
                {
                    "rawPattern": [
                        "* tip*  expectorant * "
                    ],
                    "patterns": [
                        "* tip*  expectorant * "
                    ],
                    "response": [
                        "Di ka blupet I gamot a nan. Upama ka nya nengka paginumen sui gen a gamot na bilang ka I kadakel nin. Inom ka bon sa madakel a ig upama ka pegkan ka sa expectorant."
                    ],
                    "index": 91
                },
                {
                    "rawPattern": [
                        "* sambi * expectorant * "
                    ],
                    "patterns": [
                        "* sambi * expectorant * "
                    ],
                    "response": [
                        "Su mga natural a expectoral na kapakay nengka bon pengamiten. Nya ba na mana su menthol, ivy leaf extract, oral hydration solutions , kapaginom sa madakel a ig, abpeg a teneb. "
                    ],
                    "index": 92
                },
                {
                    "rawPattern": [
                        "* (dose|method|use|eat|drink) * antitussive  * ",
                        "* antitussive  * (use|eat|drink) *"
                    ],
                    "patterns": [
                        "* (dose|method|use|eat|drink) * antitussive  * ",
                        "* antitussive  * (use|eat|drink) *"
                    ],
                    "response": [
                        "\n        Su mga antitussives na paginumen. Ugayd na madakel i upaman nim na tablitas, capsules, syrups engo drops. So dosage na gamot a nya na nya bo makadtalo lon na isa a healthcare provided kagina pagilayn nila su lagon , kaugat nu pasente, su kabagel nu batok, endu kaped a kanggedam nu taw.\n        \n        kaped sa mga ula ula sa kakan sa antitussive na gaton sa mga medical resources sya sa internet. Nya nin upaman na su antitussive a nya nin buntal na lozenges. Bibidaya i ukit a kakan lol. Upama ka nya pegkan na wata a 12 lago o matuwa pan san na kapakay keman sekanin na enggamot sa 5 taman sa 15mg uman dwa taman sa pat kauras. Su mga wata manem a 6 taman sa 12 lagon na  mapakay keman sa 5 taman sa 15mg uman dwa taman sa nem kauras. Su mga wata manem a 4 taman sa 6 lagon na mapakay keman sa 5mg uman pat kauras. Ugayd na su mga wala a da makasampay sa 4 lagon i umul nin na di keman sa nya ba gamot.\n\n        Upama manem ka antitussive na syrup na bidabida bon i kakan lon. Upama ka nya pegkan na wata a 12 lago o matuwa pan san na kapakay keman sekanin na enggamot sa 30mg uman nem taman sa walo kauras. Su mga wata manem a 6 taman sa 12 lagon na  mapakay keman sa 7mg uman pat kauras o 15mg uman nem taman sa walo ka oras. Su mga wata manem a 4 taman sa 6 lagon na mapakay keman sa 3.5mg uman pat kauras o 7.5mg uman nem taman sa walo ka oras. Ugayd na su mga wala a da makasampay sa 4 lagon i umul nin na di keman sa nya ba gamot.\n\n        Nya ba nadtalo ko a nya na mga upaman bo na panon i kakan sa antitussive. Nasisista i kaangay nengka sa doktor engu madtalo nin ngin i mapya o nakasugat a dose para sa leka.\n        "
                    ],
                    "index": 93
                },
                {
                    "rawPattern": [
                        "* antitussive * "
                    ],
                    "patterns": [
                        "* antitussive * "
                    ],
                    "response": [
                        "Su antitussives mana so Dexthomethorphan o Robitussin na gamot na batok na kapakayan a kapamasa apya da den resita nin ugayd na aw na to na aden bon resita nin.Nya ba a gamot na madakel I embalangan nin mana tablitas, capsul, gel, igen, syrup , lozenge o strips .\n        "
                    ],
                    "index": 94
                },
                {
                    "rawPattern": [
                        "* antitussive * use * ",
                        "* use * antitussive  * "
                    ],
                    "patterns": [
                        "* antitussive * use * ",
                        "* use * antitussive  * "
                    ],
                    "response": [
                        "Nya ba antitussive a nya a mana su Dexthomethorphan o Robitussin paginumen upama ka matitik I batok nu taw sabap sa allergy o kaped a sakit a baga. Su antitussives na pakagamot bun sa post-viral cough o di den a nan pagenda a batok sabap sa virus infection. Nya ba a gamot na madakel I embalangan nin mana tablitas, capsul, gel, igen, syrup , lozenge o strips "
                    ],
                    "index": 95
                },
                {
                    "rawPattern": [
                        "* (work|remove|drug|treat|treat) * antitussive  *",
                        "* antitussive * (work|remove|drug|treat|treat) *"
                    ],
                    "patterns": [
                        "* (work|remove|drug|treat|treat) * antitussive  *",
                        "* antitussive * (work|remove|drug|treat|treat) *"
                    ],
                    "response": [
                        "Su antitussives mana su Dexthomethorphan o Robitussin na papedtelenin nin su tulan a papembatok sa taw na gailay sa brain stem. Ugayd na su sakto a penggulan nin na di bun katawan na mga doctor taman saguna."
                    ],
                    "index": 96
                },
                {
                    "rawPattern": [
                        "* not * (eat|drink|use) * antitussive  * "
                    ],
                    "patterns": [
                        "* not * (eat|drink|use) * antitussive  * "
                    ],
                    "response": [
                        "Dikena ba I nya mapya a gamot sa mga wata a da man mauma I umul nin sa 4 lagon"
                    ],
                    "index": 97
                },
                {
                    "rawPattern": [
                        "* not * good * effect * antitussive  * "
                    ],
                    "patterns": [
                        "* not * good * effect * antitussive  * "
                    ],
                    "response": [
                        "Nya epekto na gamot ba  a nya na aw na to na makangegedam su taw sa kapanguta, abpeg kalangot. Su kaped a pasinti na aw na to na kagatel o kalgenan silan sa ka ginawa. Upama ka masla ged a dose I nakan du taw na aw na to na di ged mapya kapagitong nin"
                    ],
                    "index": 98
                },
                {
                    "rawPattern": [
                        "* tip*  antitussive  * "
                    ],
                    "patterns": [
                        "* tip*  antitussive  * "
                    ],
                    "response": [
                        "Kapakayan ba I nya ba pegkanin apya dala ka kan basta inom ka sa ig a madakel ( mga walo ka baso)"
                    ],
                    "index": 99
                },
                {
                    "rawPattern": [
                        "* sambi * antitussive  * "
                    ],
                    "patterns": [
                        "* sambi * antitussive  * "
                    ],
                    "response": [
                        "Su teneb na na gamot ba I nya ba.  Su mga nangagi sa nya ba gamot na ya tig nilan na makatabang ba I nya sa kambabatok enggu nya pan mapya sa kapamasa a gamot sa otika. "
                    ],
                    "index": 100
                },
                {
                    "rawPattern": [
                        "* (dose|method|use|eat|drink) * lozenge * ",
                        "* lozenge  * (use|eat|drink) *"
                    ],
                    "patterns": [
                        "* (dose|method|use|eat|drink) * lozenge * ",
                        "* lozenge  * (use|eat|drink) *"
                    ],
                    "response": [
                        "Nya kapenggamot sa lozenges na pedtunagen sekanin sa ngali tupan na blunuken kaped na yug nu taw. Di ka pedsepa su gamot a nya o blenuk sa makaisa. Nya kapegkan na sya ba na uman dwa ka oras."
                    ],
                    "index": 101
                },
                {
                    "rawPattern": [
                        "* lozenge  * "
                    ],
                    "patterns": [
                        "* lozenge  * "
                    ],
                    "response": [
                        "Nya ba a gamot na pakadtabang bon sa mga sakit na ngali mana su sorethroat, sore gums, mouth gums injury. "
                    ],
                    "index": 102
                },
                {
                    "rawPattern": [
                        "* lozenge * use * ",
                        "*  use *lozenge * "
                    ],
                    "patterns": [
                        "* lozenge * use * ",
                        "*  use *lozenge * "
                    ],
                    "response": [
                        "Su kakan sa logenze mana su Bactidol o Strepsils na dikena ged malgen abpeg kapamasa sa tayn I aden sakit nin a mana su chronic pharyngitis, aden sakit nin sa respiratory tract, apeg aden kangegedam nin sa tidek nin."
                    ],
                    "index": 103
                },
                {
                    "rawPattern": [
                        "* lozenge * (work|remove|drug|treat|treat) *",
                        "* (work|remove|drug|treat|treat) * lozenge *"
                    ],
                    "patterns": [
                        "* lozenge * (work|remove|drug|treat|treat) *",
                        "* (work|remove|drug|treat|treat) * lozenge *"
                    ],
                    "response": [
                        "Upama ka su taw na enggamot sa lozenge  mana su Bactidol o Strepsils , na lemedsu I nya ba sa katunag nin ka tupamba lemyo I gamot a nan. Inumbal i namba engo mauget i katunag nin. Pedtunagen bo sa ngali enggu makagamot sa batok abpeg a tidek. Su kaped a logenzes na pakagamot bon sa aden sepu. Su kaped manem na aden eucalyptus nin na pakadtabang sa masakit a tidek. Su kaped manem na inamunan sa teneb"
                    ],
                    "index": 104
                },
                {
                    "rawPattern": [
                        "* not * (eat|drink|use) * lozenge * "
                    ],
                    "patterns": [
                        "* not * (eat|drink|use) * lozenge * "
                    ],
                    "response": [
                        "Upama ka masakit I tidek nengka sa naipos a dwa gay, basi pembatuken ka den sa nakasapadian, o babalingan den I batok nengka o aw na to na aden pan mayaw nengka sakit na ulo abpeg a kagatel, lebag, aw na to na manguta ka pan na nya mapya na ebpawang ka den sa doctor."
                    ],
                    "index": 105
                },
                {
                    "rawPattern": [
                        "* not * good * effect * lozenge  * "
                    ],
                    "patterns": [
                        "* not * good * effect * lozenge  * "
                    ],
                    "response": [
                        "Aw na to na egkasakit I tidek nengka. Amaykaaden manggedam nengka a mayaba o basi esaldseg I namba sakit nengka na ebpawang ka den sa doctor."
                    ],
                    "index": 106
                },
                {
                    "rawPattern": [
                        "* tip*  lozenge * "
                    ],
                    "patterns": [
                        "* tip*  lozenge * "
                    ],
                    "response": [
                        "Di ka pedsepa o blenok I gamot a nya. Tunag ka sa ngali nengka. Uman dwa ka oras I kakan nengka sa nya ba gamot."
                    ],
                    "index": 107
                },
                {
                    "rawPattern": [
                        "* sambi * lozenge * "
                    ],
                    "patterns": [
                        "* sambi * lozenge * "
                    ],
                    "response": [
                        "So kasisip sa tin a aden teneb nin na makadtabang abpeg makagkapya sa tidek."
                    ],
                    "index": 108
                },
                {
                    "rawPattern": [
                        "* where * go * influenza *",
                        "* where * drug * influenza * "
                    ],
                    "patterns": [
                        "* where * go * influenza *",
                        "* where * drug * influenza * "
                    ],
                    "response": [
                        "Kapakayan nengka pedtyakapan sakit nengka sa walay. Ugay na angay ka sa doctor upama ka nga nengka kailay na masla I mangguna na flu a nan sa leka. "
                    ],
                    "index": 109
                },
                {
                    "rawPattern": [
                        "* (symptom|symptom|symptom) * influenza * "
                    ],
                    "patterns": [
                        "* (symptom|symptom|symptom) * influenza * "
                    ],
                    "response": [
                        "Su Center of Diseases and Control na nya nilan nadtalo na su taw a aden trangkaso nin na aden pila timan nin a sintomas. Aw na to na aden mayaw nilan, batok, blebag a tideg, sepu o di pakaginawa, pedsakit a lawas, pedsakit a ulo, abpeg a kalugat pedtandang. Su kaped na pakauta pan abpeg a pedtagudo ugayd na sya ba I nya ba kailay ged sa mga wata abpeg matuwa."
                    ],
                    "index": 110
                },
                {
                    "rawPattern": [
                        "* drug * vomit *",
                        "* (remove|drug|treat|treat) * vomit * "
                    ],
                    "patterns": [
                        "* drug * vomit *",
                        "* (remove|drug|treat|treat) * vomit * "
                    ],
                    "response": [
                        "Su kapanguta na namba su pedtekaw den mon a to a blyu i kinan nu taw sa ngali o ngilong nin. Namba na pakaibped sa ig nu lawas abpeg mga electrolytes. Namba na tanda na sakit mana su gastroenteritis, food poisoning, motion sickness, kagingay, engo nganin nganin a kaped pan san. \n        \n        Upama ka paauka na nya ba i mapakay a unuti ka. \n\n        1. Da ka pegkan o paginom sa pila kauras.\n\n        2. Tikaw ka semesep sa babaydo a ig, sports drinks, o sabaw.Tanday ka na da ka paginom sa maledsem o gatas. Endu da ka pegkan sa mga magatel na tinay o tyan mana su aden alchohol nin, aden caffeine nin, su mga lanan ged, su mga malalaas, abpeg su gatas engo su cheese.Upamaka ka pagaga ka denminom, na umani ka embabaydo i paginumen nengka.\n        \n        3. Upama ka kagutem ka na mapakay ka keman sa saging, emay, pan, abpeg soda crackers. Upama ka makakagaga ka keman sa mga da ged nanam ni a pegken, na tupamba ka makakan ka sa apya ngen. Tanday ka su mga da nanam nin a pegken na nya nin mga kaped na su tinanda a patatas, emay, pasta, naluto a unga na kayo, naluto a kamo, abpeg a karne. \n\n        Ingati ka ka su pembabalingan a kapanguta na nasisista nin i kapendoktor labi den upama ka pakagedam ka sa kapegka(langot|langut) o amayka da bagel nengka.\n        "
                    ],
                    "index": 111
                },
                {
                    "rawPattern": [
                        "* (remove|drug|treat|treat) * (headache|headache) *",
                        "* (what|how) * (remove|drug|treat|treat) * (headache|headache) *",
                        "* what * not * (eat|drink|pamasa) * (headache|headache) * "
                    ],
                    "patterns": [
                        "* (remove|drug|treat|treat) * (headache|headache) *",
                        "* (what|how) * (remove|drug|treat|treat) * (headache|headache) *",
                        "* what * not * (eat|drink|pamasa) * (headache|headache) * "
                    ],
                    "response": [
                        "Uman balangan na (langot|langut) o sakit na ulo na embidabida i kapenggamot lun. Su tension headaches na kila sa tawag a hatband headache. Sya manggedam na taw i nya ba sa taligkudan na ulo nin abpeg sa bunan bunan nu taw. Nya ba na aw na to na taman sa pila kaoras taman sa pila gay. Nya kapenggamot na sya ba na physical therapy, muscle relaxants, engo mga pain relievers mana su aspirin abpeg ibuprofen. Aden pan kaped a balangan na sakit na ulo a nya tawag lun na migraine. Engu pegkapya mangiginawa nengka na degka ka sa malibuting a kwartu, depbpasi ka ulo nengka sa mayaw o matengaw , engo pamisel ka ulo nengka"
                    ],
                    "index": 112
                },
                {
                    "rawPattern": [
                        "* boil * water * ",
                        "why * boil * "
                    ],
                    "patterns": [
                        "* boil * water * ",
                        "why * boil * "
                    ],
                    "response": [
                        " Su katabel na nasisista engo pebpatay su pathogenic a mga bacteria, virus engo protozoa. Amayka pedtabel su taw na mangata sekanin sa dwa ka minutos kapasad nin edsebu. Upama ka su ig na malbog na pangatay ka a makadtakena sekanin engo ibubus nengka su ig sa gapas engu ga salal u mga maldsik nin. Amayka malini ka sa aden nanam na ig ba nan a tinabel nengka na betad ka sa paydo a timos uman saka litro na ig o I alat nengka su ig sa kaped a gabetadan na ig.\n        "
                    ],
                    "index": 113
                },
                {
                    "rawPattern": [
                        "* (pamasa|use) * clean * water * ",
                        "* clean * water *",
                        "* method * clean * "
                    ],
                    "patterns": [
                        "* (pamasa|use) * clean * water * ",
                        "* clean * water *",
                        "* method * clean * "
                    ],
                    "response": [
                        "Su kalinis sa ig na nasisista endu gaawa su mga bacteria, virus endu parasistes a pakangguna sa sakit a mana su cholera, typhoid, dysentery abepeg kapedtagudo. Upama ka dikena nalimpyuan i ig a paginumen, na mapakay i namaba ka deketan na mga microorganisms a pakadalo. Endu su kablinis sa ig na pakatabang endu di ka makakwa sa mga sakit a sabap sa maldsik a ig. \n\n        Mapakay nengka blimpyoan i ig  a paginumen nengka sa chlorine. Padtakena ka sa saka saka botol a ig tupan na tunag ka sa isa a powdered chlorine compounds a mga 65 to 75 ka porsento uman saka litro na ig. Mapasad i namba, na tupan ka kwa ka sa 2 teaspoon ebun sa ig a to a aden chlorine nin ka isimbol nengka sa lima ka galon o 20 liters a ig. Padsimbol ka silan ebpyapya endu pangata ka sa 30 ka minutos bago gainom su ig.    \n        "
                    ],
                    "index": 114
                },
                {
                    "rawPattern": [
                        "* (remove|drug|treat|treat) * (fever|fever) * "
                    ],
                    "patterns": [
                        "* (remove|drug|treat|treat) * (fever|fever) * "
                    ],
                    "response": [
                        " Upama ka pegkayaw su taw na minom sekanin sa madakel a ig. Aden mga gamot sa botika a gapamasa apya da riseta nin a makatabang sa leka. Mapakay ka mangingidsa sa pendagang a pharcmacist sa Acetaminophen para sa sakit na lawas. Upama ka pegkayaw ka na betadi ka sa mawasa a malalabendaw a gapas i ulo nengka. Embalgkas ka bon sa dikena ged masimpit. Upama manem ka pegkegkel ka, na nya mapya na embalegkas ka sa pila timan engu mayaw i manggedam nengka. Tupan na degka ka sa mauget engo pegkabagel i lawas nengka."
                    ],
                    "index": 115
                },
                {
                    "rawPattern": [
                        "* (remove|drug|treat|treat) * (cold|cold) *"
                    ],
                    "patterns": [
                        "* (remove|drug|treat|treat) * (cold|cold) *"
                    ],
                    "response": [
                        "Su clogged nose na kanggula upama ka aden naka aln sa ngilong nu taw. Nya kaped a tawag sa namba na nasal congestion. Kaped sa mga sabap na namba na allergies, sepu, flu, sinus infection engo kaped a sakit na baga. Su sintomas na clogged nose na su aw na to na di pakaginawa, pagigis pedtandang i sepu nin o aw na to na di blue, masakit i tampal sa ngilong nin endu di ged maka baw o nanam.\n\n        Engu pegkapya mangedam nu taw, na minom sekanin sa madakel a ig engo pakalyo su ngog. Ugayd na da ka paginom sa paka dehydrate mana su kapi endu soft drinks. Mapakay ka semesep sa mga mayaw a paginumen, mga ti o sabaw. Mapakay ka bon engamot sa vitamin C. Mapakay ka bon semengap sa mga mayaw a bel endu makaginawa ka. Degka ka bon. Aw na to na betad ka sa warm compress. Upama ka da leka meto na tekaw ka iwasa sa twalya sa mayaw a ig. Itapi nengka namba sa biyas nengka maka pila sa sagay.Upama ka aden humidifier nengka na mapakay ka bon gemamit sa to ba. Mapaky ka bon enamot sa saline nasal spray. Aw na to na kan ka sa mga malalas a pegken kagina pakatabang i mga namba sa kagkalwag na nginlong nu taw. Engo pamaka sa sa gamot para engkapya mangegedam nengka."
                    ],
                    "index": 116
                },
                {
                    "rawPattern": [
                        "* (remove|drug|treat|treat) * sick  * head * "
                    ],
                    "patterns": [
                        "* (remove|drug|treat|treat) * sick  * head * "
                    ],
                    "response": [
                        "Su kasakit na ulo na madakel i embalangan nin, tu ba nan bibidaya bon i gamot nin. Su tension headaches na kila bon sa tawag a hatband headaches. Nya ba na sakit na ulo na sya kagedam sa talugkodan na uow, temples endo bunan bunan. Namba na mangedam nu taw sa pila kawras taman sa pila gay. So mga gamot na nya ba na physical therapy, muscle relaxants engu gamot a gapamasa sa da riseta nin mana su aspirin abpeg ibuprofen. Isa pan a balangan na sakit na ulo na su migraine. Endu pegkapya su mangedam nu taw na demegka sekanin sa malibuteng a kwarto, depasan nin su lawas nin sa warm compress o cold compress , engu pamasel ka su ulo nengka.\n        "
                    ],
                    "index": 117
                },
                {
                    "rawPattern": [
                        "* (remove|drug|treat|treat) * (sick|sick) * stomach *"
                    ],
                    "patterns": [
                        "* (remove|drug|treat|treat) * (sick|sick) * stomach *"
                    ],
                    "response": [
                        "Apya di pengamutan su kasakit na nya na maawa bon i nan. Ugayd na aden bon kaped a mapakay engulan nu taw engu mapya i mangegedam nin.  Tekaw ka betad sa botol a aden mayaw nin a ig sa tyan nengka. Ebpaygo ka bon sa malalabendaw a ig. Pangingat ka engu di ka maupang. Inom ka bon sa madakel a ig. Pakapaydo ka bo i kainom nengka sa kapi, ti abpeg aden alcohol nin kanina makalunan i mga namba sa sakit na tyan. Upama ka pakagaga ka den keman na inom ka muna sa ig, tupan na kan ka sa mga da ged nanam nin mana su crackers, emay, saging o pan. Degka ka bon."
                    ],
                    "index": 118
                },
                {
                    "rawPattern": [
                        "* (remove|drug|treat|treat) * sick * throat * "
                    ],
                    "patterns": [
                        "* (remove|drug|treat|treat) * sick * throat * "
                    ],
                    "response": [
                        "Upama ka masakit i tidek nengka na nya ba edtalon ko na mapakay nengka engulan. Inom ka sa madakel a ig engu pegkapaydo i ngog sa tidek nengka. Kan ka sa gamot depende sa ngin nalabit na doctor nengka. Pakapulo ka bon i ulo nengka sa unan upama ka miga ka. Da ka pedsengap sa bel. Mapakay ka bon emumug sa mayaw a ig ugayd na di pa papengula i nya sa mga wata."
                    ],
                    "index": 119
                },
                {
                    "rawPattern": [
                        "* wear * sneeze * ",
                        "* wear * (nose|mouth) *"
                    ],
                    "patterns": [
                        "* wear * sneeze * ",
                        "* wear * (nose|mouth) *"
                    ],
                    "response": [
                        "\n        Nasisista na taguban nu taw su ngale abpeg ngilon nin upama ka pagatsing, pembaln, o pembatok su taw endu du masangap na kaped nin su virus. Upama ka embaln na ka sya ka engula i namba sa tissue. Ugayd na idtog nengka i namba ebpyapya. Upama ka da tissue nengka, ta tagubi ka sa siko nengka. Gagasi ka namba kapasad nengka."
                    ],
                    "index": 120
                },
                {
                    "rawPattern": [
                        "* clean * hand * "
                    ],
                    "patterns": [
                        "* clean * hand * "
                    ],
                    "response": [
                        "Su kagagas sa lima na pakatabang engo pebpatay i mga kagaw. Betadi ka sa sabon I lima nengka sa dwa pulo ka Segundo. Kapasad nengka , kukus I lima nengka sa dwa pulo bon ka Segundo. Edsengal ka sa happy birthday sa makadwa tupan na gagasi ka su sabon. Amayka da sabon nengka na gagasi ka su lima nengka sa sanitizer. Gamit ka sa alchohol a sanitizer upama ka dala ig. Betadi ka lima nengka sa namba pya pya mana kabetad nengka sa losyon. Ilay ka ka nga ka gamit na su 60% I kabagel nin a alchohol. "
                    ],
                    "index": 121
                },
                {
                    "rawPattern": [
                        "* (symptom|symptom|symptom) *"
                    ],
                    "patterns": [
                        "* (symptom|symptom|symptom) *"
                    ],
                    "response": [
                        "Langon na sakit na aden sintomas nin abpeg senyales. Endo katabangan ko seka epyapya na labit ka amayka para sa kapedtagudo o influenza i bityala nengka."
                    ],
                    "index": 122
                },
                {
                    "rawPattern": [
                        "* good (mapita|maudto|malulem|magabi) *",
                        "* what * betad * nengka *"
                    ],
                    "patterns": [
                        "* good (mapita|maudto|malulem|magabi) *",
                        "* what * betad * nengka *"
                    ],
                    "response": [
                        "\n        Ngin betad nengka? Ngen makadtabang ko saleka? Ampon ka bo upama ka di ko kasabutan i pedtalon nengka. Dikena ko ged pakasabot tu banan tabangan ta i engagaysa engu makadsabuta ta."
                    ],
                    "index": 123
                },
                {
                    "rawPattern": [
                        "* antimotility *"
                    ],
                    "patterns": [
                        "* antimotility *"
                    ],
                    "response": [
                        "Ampon ka bo, di ko gasabutan i pedtalon nengka sa antimotilities"
                    ],
                    "index": 124
                },
                {
                    "rawPattern": [
                        "*bismuth *"
                    ],
                    "patterns": [
                        "*bismuth *"
                    ],
                    "response": [
                        "Ampon ka bo, di ko gasabutan i pedtalon nengka sa bismuth subsalicylate"
                    ],
                    "index": 125
                },
                {
                    "rawPattern": [
                        "* antihistamine *"
                    ],
                    "patterns": [
                        "* antihistamine *"
                    ],
                    "response": [
                        "Da ko samaya kasabuti i pedtalon nengka. Ampon ka bo. Basi labit ka kon edsaluman ngin i tu ba pedtalon nengka sa antihistamines"
                    ],
                    "index": 126
                },
                {
                    "rawPattern": [
                        "* analgesic *"
                    ],
                    "patterns": [
                        "* analgesic *"
                    ],
                    "response": [
                        "Da ko samaya kasabuti i pedtalon nengka. Ampon ka bo. Basi labit ka kon edsaluman ngin i tu ba pedtalon nengka sa analgesics"
                    ],
                    "index": 127
                },
                {
                    "rawPattern": [
                        "* nsaid *"
                    ],
                    "patterns": [
                        "* nsaid *"
                    ],
                    "response": [
                        "Da ko samaya kasabuti i pedtalon nengka. Ampon ka bo. Basi labit ka kon edsaluman ngin i tu ba pedtalon nengka sa nsaids"
                    ],
                    "index": 128
                },
                {
                    "rawPattern": [
                        "* decongestant *"
                    ],
                    "patterns": [
                        "* decongestant *"
                    ],
                    "response": [
                        "Gatawan ko nya nengka blabiten na decongestants, ugayd mana su di ko gasabutan i pedtalon nengka. Ampon ka bo."
                    ],
                    "index": 129
                },
                {
                    "rawPattern": [
                        "* expectorant *"
                    ],
                    "patterns": [
                        "* expectorant *"
                    ],
                    "response": [
                        "Gatawan ko nya nengka blabiten na expectorants, ugayd mana su di ko gasabutan i pedtalon nengka. Ampon ka bo."
                    ],
                    "index": 130
                },
                {
                    "rawPattern": [
                        "* antitussive *"
                    ],
                    "patterns": [
                        "* antitussive *"
                    ],
                    "response": [
                        "Gatawan ko nya nengka blabiten na antitussives, ugayd mana su di ko gasabutan i pedtalon nengka. Ampon ka bo."
                    ],
                    "index": 131
                },
                {
                    "rawPattern": [
                        "* lozenge *"
                    ],
                    "patterns": [
                        "* lozenge *"
                    ],
                    "response": [
                        "Ampon ka bo, di ko gasabutan i pedtalon nengka sa lozenges"
                    ],
                    "index": 132
                },
                {
                    "rawPattern": [
                        "* treat *"
                    ],
                    "patterns": [
                        "* treat *"
                    ],
                    "response": [
                        "Bago ko seka katabangan na pasabot ako ko nengka muna. Mapakay ako nengka idsan sa kapedtagudo o influenza. Mapakay ko labiten ngin i enggulan nengka edu mapya mangiginawa nengka"
                    ],
                    "index": 133
                },
                {
                    "rawPattern": [
                        "* diarrhea *"
                    ],
                    "patterns": [
                        "* diarrhea *"
                    ],
                    "response": [
                        "Ampon ka bo, mana na ko kasabuti i pedtalon nengka pantag sa kapedtagudo. Engu katabangan ko seka sa mapya, na edsalumani ka to ba. Aw na to na mapakay ka midsa sa mga gamot, ngen mapya enggulan endo ngin i mga mapakay a kanen nu taw a to a pedsakit."
                    ],
                    "index": 134
                },
                {
                    "rawPattern": [
                        "* influenza *"
                    ],
                    "patterns": [
                        "* influenza *"
                    ],
                    "response": [
                        "Ampon ka bo, mana na ko kasabuti i pedtalon pantag sa influenza. Engu katabangan ko seka sa mapya, na edsalumani ka to ba.Aw na to na mapakay ka midsa sa mga gamot, ngen mapya enggulan endo ngin i mga mapakay a kanen nu taw a to a pedsakit."
                    ],
                    "index": 135
                },
                {
                    "rawPattern": [
                        "*kapanegas*"
                    ],
                    "patterns": [
                        "*kapanegas*"
                    ],
                    "response": [
                        "Ampon ka bo, ka di ko samana gasabutan i pedtalon nengka pantag sa kapanegas nu lawas kapanegas. Ugayd na mapakay ko labiten sa leka ngi i mga mapya enggulan endo pegkapya kangegedam nu taw a pedsakit sa namba ba"
                    ],
                    "index": 136
                },
                {
                    "rawPattern": [
                        "*(headache|headache)*"
                    ],
                    "patterns": [
                        "*(headache|headache)*"
                    ],
                    "response": [
                        "Ampon ka bo, ka di ko samana gasabutan i pedtalon nengka pantag sa taw a ga(langot|langut). Ugayd na mapakay ko labiten sa leka ngi i mga mapya enggulan endo pegkapya kangegedam nu taw a pedsakit sa namba ba"
                    ],
                    "index": 137
                },
                {
                    "rawPattern": [
                        "*fever*"
                    ],
                    "patterns": [
                        "*fever*"
                    ],
                    "response": [
                        "Ampon ka bo, ka di ko samana gasabutan i pedtalon nengka pantag sa kapegkayaw. Ugayd na mapakay ko labiten sa leka ngi i mga mapya enggulan endo pegkapya kangegedam nu taw a pedsakit sa namba ba"
                    ],
                    "index": 138
                },
                {
                    "rawPattern": [
                        "*ngilon*"
                    ],
                    "patterns": [
                        "*ngilon*"
                    ],
                    "response": [
                        "Ampon ka bo, ka di ko samana gasabutan i pedtalon nengka pantag sa di ged pakaginawa sa ngilong. Ugayd na mapakay ko labiten sa leka ngi i mga mapya enggulan endo pegkapya kangegedam nu taw a pedsakit sa namba ba"
                    ],
                    "index": 139
                },
                {
                    "rawPattern": [
                        "*stomach*"
                    ],
                    "patterns": [
                        "*stomach*"
                    ],
                    "response": [
                        "Ampon ka bo, ka di ko samana gasabutan i pedtalon nengka pantag sa kapedsakit na tyan. Ugayd na mapakay ko labiten sa leka ngi i mga mapya enggulan endo pegkapya kangegedam nu taw a pedsakit sa namba ba"
                    ],
                    "index": 140
                },
                {
                    "rawPattern": [
                        "*head*"
                    ],
                    "patterns": [
                        "*head*"
                    ],
                    "response": [
                        "Ampon ka bo, ka di ko samana gasabutan i pedtalon nengka pantag sa kapedsakit na ulo. Ugayd na mapakay ko labiten sa leka ngi i mga mapya enggulan endo pegkapya kangegedam nu taw a pedsakit sa namba ba"
                    ],
                    "index": 141
                },
                {
                    "rawPattern": [
                        "*vomit*"
                    ],
                    "patterns": [
                        "*vomit*"
                    ],
                    "response": [
                        "Ampon ka bo, ka di ko samana gasabutan i pedtalon nengka pantag sa kapanguta. Ugayd na mapakay ko labiten sa leka ngi i mga mapya enggulan endo pegkapya kangegedam nu taw a pedsakit sa namba ba"
                    ],
                    "index": 142
                },
                {
                    "rawPattern": [
                        "*"
                    ],
                    "patterns": [
                        "*"
                    ],
                    "response": [
                        "Ampon ka bo, mana su di ko gasabutan i pedtalon nengka."
                    ],
                    "index": 143
                }
            ],
            "index": 144
        }
    }
}