import { encodeMemory } from "@/api/config/model"


let section16 = [
    encodeMemory([
        `* di * (kan|inom|gamit) * antibiotics *`,
        `*antibiotics * di * (kan|inom|gamit) *`,
        `duken ka di mapya a keman , minom o enggamot , sa antibiotics`,
        `enduken ka di pakadtabang i antibiotics`,
    ],[
        `Namba antibiotic a nan na pakagamot bo sa bacteria. Su influenza a sabap sa virus na di nin I namba kagamutan. Nya nin nasisita samba na antiviral.`
    ],7),
    encodeMemory([
        `* di * (kan|inom|gamit) * aspirin *`,
        `* aspirin * di * (kan|inom|gamit) *`,
        `ten a mga taw i di mapakay a keman o minom sa aspirin`,
        `duken ka nasisita su katangka sa aspirin`,
        `ngento ka di dayt a enggamot su taw sa aspirin`,
        `panon a to ka di gapakay a gamiten su aspirin`,
        `duken ka su aspirin na di mapakay a gamiten`,
    ],[
        `Su kainom sa aspirin upama ka aden mga lebag nengka na aw na t na makagkapulo sa Reyes syndrome na paka binasa sa utek abpeg nu atay.`
    ],7),
    encodeMemory([
        `* di * (kan|inom|gamit) * (antibiotic|antibiotics|antivirals|antiviral) * influenza * `,
        `* (antibiotic|antibiotics|antivirals|antiviral)  * di * (kan|inom|gamit) * influenza *`,
        `ten a mga taw i di mapakay a keman o minom sa (antibiotic|antibiotics|antivirals|antiviral)`,
        `duken ka nasisita su katangka sa (antibiotic|antibiotics|antivirals|antiviral)`,
        `ngento ka di dayt a enggamot su taw sa (antibiotic|antibiotics|antivirals|antiviral)`,
        `panon a to ka di gapakay a gamiten su (antibiotic|antibiotics|antivirals|antiviral)`,
        `duken ka su (antibiotic|antibiotics|antivirals|antiviral) na di mapakay a gamiten`,

    ],[
        `Niya tig a Center for Disease and Control na su mga antiviral a gamut na trangkaso na iberisita (mga tablitas, ig, inhaled powder, o isa a intravenous solution) na pakadtabang sa virus na lawas. Su ma antivarial a gamut na di pendagaganeng sa counter. Makwa nengka bo I nya ba upama aden riseta nin sa dktor. Su antiviral a gamut na sakabiyas I nya bas a antibiotic a gamut na bacterial infection.  Su mga antiviral a gamut para sa trangkaso na pakadtabang sa kapenggamot sa trangkaso.  `
    ],7),
]

let section17 = []

let section18 = []

let section19 = []

let section20 = []

let section21 = []

export const data = 
    []
    // .concat(section16)
        .concat(section17)
        .concat(section18)
        .concat(section19)
        .concat(section20)
        .concat(section21)

