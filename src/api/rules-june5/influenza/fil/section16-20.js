import { encodeMemory } from "@/api/config/model"

let section16 = [
        `* bakit * (iwas| (hindi|huwag) * (kain|inom|gamit)) * antibiotics *`,
        `* bakit * antibiotics * (iwas| (hindi|huwag) * (kain|inom|gamit)) *`,
        `Ano ang dahilan kung bakit kailangan iwasan ang antibiotics?`,
        `Ano ang mga epekto ng sobrang paggamit ng antibiotics?`,
        `Ano ang mga rason kung bakit kailangan mag-ingat sa paggamit ng antibiotics?`,
        `Bakit hindi advisable na mag-take ng antibiotics nang basta-basta?`,
        `Bakit hindi dapat mag-self medicate ng antibiotics?`,
        `Bakit hindi dapat uminom ng antibiotics kung hindi ito kinakailangan?`,
        `Bakit hindi dapat uminom ng antibiotics kung hindi kailangan?`,
        `Bakit hindi dapat uminom ng antibiotics kung hindi pa nakakapagpatingin sa doktor?`,
    encodeMemory([
    ],[
        `Gumagana lamang ang mga antibiotic sa bacteria Ang influenza ay sanhi ng virus kaya hindi gagana ang mga antibiotic. Pag may trangkaso ang isang tao ay, antiviral ang nararapat gamitin.`
    ],7),
    encodeMemory([
        `* bakit * (iwas| (hindi|huwag) * (kain|inom|gamit)) * aspirin *`,
        `* bakit * aspirin * (iwas| (hindi|huwag) * (kain|inom|gamit)) *`,
        `Ano ang dahilan kung bakit kailangan umiwas sa aspirin?`,  
        `Ano ang mga side effects ng aspirin?`,
        `Bakit hindi dapat mag-take ng aspirin?`,  
        `Bakit hindi pwede sa mga bata ang aspirin?`,  
        `Bakit mas delikado sa mga matatanda ang pag-take ng aspirin?`,  
        `May mga rason ba kung bakit hindi pwede uminom ng aspirin?`,  
        `Paano nakakaapekto ang aspirin sa katawan?`,  
    ],[
        `Ang pag-inom ng aspirin upang gamutin ang naturang impeksiyon ay lubos na nagpapataas ng panganib ng Reye's Syndrome na isang sakit na nagdudulot ng pinsala sa utak at atay.`
    ],7),
    encodeMemory([
        `* (antibiotic|antibiotics|antivirals|antiviral)  * (hindi|huwag) * (gumamit|kain|inom) * nino * `,
        `* (antibiotic|antibiotics|antivirals|antiviral)  * iwasan * nino *`,
        `* sino * (huwag|hindi) * (gumamit|kain|inom) * (antibiotic|antibiotics|antivirals|antiviral)  * drug * `,
        `* sino * (huwag|hindi)* (gumamit|kain|inom) * (antibiotic|antibiotics|antivirals|antiviral) *`,
        `* sino * iwas * (antibiotic|antibiotics|antivirals|antiviral)  *`,
        `* sino * iwas * (antibiotic|antibiotics|antivirals|antiviral)  *`,
    ],[
        `Ayon sa Center for Disease and Control, ang mga antiviral ay mga inireresetang gamot (mga tabletas, likido, isang inhaled powder, o isang intravenous solution) na lumalaban sa mga virus ng trangkaso sa iyong katawan. Ang mga antiviral na gamot ay hindi ibinebenta sa counter. Makukuha mo lamang ang mga ito kung mayroon kang reseta mula sa isang doctor. Ang mga antiviral na gamot ay iba sa mga antibiotic, na lumalaban sa mga bacterial infection. Ang mga antiviral na gamot para sa trangkaso ay gumagana lamang upang gamutin ang trangkaso. `
    ],7),
]


let section17 = []

let section18 = []

let section19 = []

let section20 = []

let section21 = []


export const data = []
    .concat(section16)
    .concat(section17)
    .concat(section18)
    .concat(section19)
    .concat(section20)
    .concat(section21)
