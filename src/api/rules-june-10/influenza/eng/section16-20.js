import { encodeMemory } from "@/api/config/model"

let section16 = [
    
    encodeMemory([
        `* avoid * antibiotics * influenza *`,
        `* not * (use|take|buy) * antibiotics * influenza *`,
        `What's the harm in taking antibiotics for influenza?`,
        `What's the reason behind not using antibiotics to treat influenza?`,
        `Why are antibiotics ineffective against influenza?`,
        `Why are antibiotics not recommended for treating influenza?`,
        `Why is it important to avoid antibiotics for the flu?`,
        `Why is it not appropriate to take antibiotics for viral infections like influenza?`,
        `tell me why avoid taking antibiotics when having influenza`
    ],[
        `Antibiotics only work with bacteria Influenza is caused by virus so antibiotics wont work. Thus, it will not help you feel better. What you need is an antiviral.`,
     ],7),
    encodeMemory([
        `* avoid * aspirin * `,
        `* not (use|take|buy) * aspirin *`,
        `What are the problems of taking aspirin?`,
        `Why is it not recommended to take aspirin?`,
        `Why should I not take aspirin?`,
        `tell me why avoid taking aspirin when having influenza`
    ],[
        `Taking aspirin to treat such an infection greatly increases the risk of Reye's Syndrome which is a disease that causes brain and liver damage. `
    ],7),
    encodeMemory([
        `* not (take|use) * (antibiotic|antivirals)  * influenza * `,
        `* avoid * (antibiotic|antivirals) * influenza *`,
        `* (antibiotic|antivirals) * influenza * (not (take|use) | avoid ) *`,
    ],[
        `According to the Center for Disease and Control, Flu antiviral drugs are prescription medicines (pills, liquid, an inhaled powder, or an intravenous solution) that fight against flu viruses in your body. Antiviral drugs are not sold over the counter. You can only get them if you have a prescription from a health care provider. Antiviral drugs are different from antibiotics, which fight against bacterial infections. Antiviral drugs for flu only work to treat flu. `
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

