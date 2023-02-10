import { encodeMemory } from "@/api/engine/model"

let section11 = [
    encodeMemory([
        `* (why|how) * antimotility  * treat *`
    ],[
        `Loperamide are the most effective agents for the treatment of chronic diarrea. It slows the movement of food throught your intestines, which letsyour body absorb more liquid.  An antidiarrheal medication, such as Lomotil or Imodium, can decrease the number of diarrheal stools but can also cause complications for people with serious infections.`
    ]),
    encodeMemory([
        `* (why|how) * bismuth subsalicylate  * treat  *`
    ],[
        `This works by decreasing the flow of fluids and electrolytes into the bowel.`
    ]),
    encodeMemory([
        `* (why|how) * electrolyte  * treat *`
    ],[
        `This balances out how fluid moves through your digestive tract. It reduces diarrheal stool output in adults and children`
    ]),
    encodeMemory([
        `* (why|how) *  petroleum jelly  * treat *`
    ],[
        `If your rectal area is becoming sore, its itching,or burthing, this can help.`
    ]),
    encodeMemory([
        `* (why|how) * rehydration solution  * treat *`
    ],[
        `This don’t treat diarrhea , but it helps replace fluids to prevent dehydrations`
    ]),
    encodeMemory([
        `* (why|how) * probiotics  * treat  *`
    ],[
        `sometimes diarrhea is result of imbalance of bacteria in  the gut. Taking probiotics help by restoring this balance   by providing higher level of good bacteria.`
    ]),
    encodeMemory([
        `* (why|how) * zinc * treat  *`
    ],[
        `Supplementary zinc benefits children with diarrhoea because  it is a vital micronutrient essential for protein synthesis, cell growth and differentiation, immune function, and intestinal transport of water and electrolytes`
    ]),
    encodeMemory([
        `* what * generic * drugs * diarrhea *`
    ],[
        `We have loperamide and bismuth subsalicylate as antimotility. There is hydrite which you can buy in local pharmacy`
    ]),
    encodeMemory([
        `* what * branded * antidiarrheal * drugs *`,
        `* what * branded * diarrhea * drugs * `
    ],[
        `Imodium and Pepto Bismol are some of the branded names of antidiarrhea drug`
    ]),
    encodeMemory([
        `* how * does * it * work *`
    ],[
        ``
    ]),
    // antimotility
    encodeMemory([
        `* what * generic * antimotility *`
    ],[
        `Loperamide is a generic name of an antidiarrheal drug you can find in the pharmacies`
    ]),
    encodeMemory([
        `* what * branded * antimotility *`
    ],[
        `There is Imodium which is a branded name for loperamide`
    ]),
    encodeMemory([
        `* what * dosing * (!loperamide|imodium) *`,
        `* how * (take|use) * (!loperamide|imodium) *`,
        `* what * direction * (!loperamide|imodium) *`,
        `* how * (!loperamide|imodium) * (take|use) *`
    ],[
        `Drink plenty of clear liquids while you're treating your diarrhea with loperamide. Having diarrhea can make you dehydrated.  Here are the different dosing you can follow.  For adults and children of age 12 and older, the recommended dose is 2 tablets by mouth after the first loose stool. Then, take 1 tablet after each loose stool. Don't take more than 4 tablets in 24 hours. For children age 9 to 11 years or children who weigh 60 lbs to 95 lbs, the recommended dose is 1 tablet by mouth after the first loose stool.  Then, take one-half of a tablet after each loose stool. Don't take more than 3 whole tablets in 24 hours. For children age 6 to 8 years or children who weigh 48 lbs to 59 lbs, the recommended dose is 1 tablet by mouth after the first loose stool. Then, take one-half of a tablet after each loose stool. Don't take more than 2 whole tablets in 24 hours. For children 5 years and younger: Ask your child's doctor to see what other options are available to treat your child's diarrhea.`
    ]),
    encodeMemory([
        `* what * is * (!loperamide|imodium) *`
    ],[
        `Loperamide (Imodium A-D) is an over-the-counter (OTC) medication  that works well to stop diarrhea, including traveler's diarrhea. It's usually taken once you start having loose stools and after each loose stool thereafter.`
    ]),
    encodeMemory([
        `* what * (!loperamide|imodium) * use  *`
    ],[
        `Controls the symptoms of diarrhea`
    ]),
    encodeMemory([
        `* how * (!loperamide|imodium) * work *`
    ],[
        `Loperamide (Imodium A-D) takes about an hour to help with your diarrhea symptoms, but this can vary from  person to person. Contact your provider if your  symptoms become worse after taking the medication`
    ]),
    encodeMemory([
        `* when * ( not  (take|use) | avoid ) * (!loperamide|imodium) *`
    ],[
        `You shouldn't take loperamide (Imodium A-D) if you've ever had an allergic reaction to the medication or if you have bloody or black stools. You might want to contact your provider before using loperamide (Imodium A-D) if you have a fever or mucus in your stool.`
    ]),
    encodeMemory([
        `* what * side !effects? * (!loperamide|imodium) *`
    ],[
        `Loperamide (Imodium A-D) can cause dizziness, drowsiness, or tiredness.  Don't drive or do anything that requires you to focus until you know how the medication affects you. If you happen to experience stomach swelling, contact a doctor immediately`
    ]),
    encodeMemory([
        `* what * tips * (!loperamide|imodium) *`
    ],[
        `Don't use loperamide (Imodium A-D) if you have bloody or black stools. If you have a history of liver disease or heart rhythm problems, this may not be the best medication for you either`
    ]),
    encodeMemory([
        `* (what|how) * (!loperamide|imodium) * price *`
    ],[
        `Loperamide  is available as a generic medication and may be significantly cheaper compared to the brand version. In watsons, it is sold at 2mg (4pcs) for 72 pesos. It may be lower in other pharmacies.`
    ]),
    encodeMemory([
        `* what * forms * (!loperamide|imodium) *`
    ],[
        `It can be capsule, a solution, tablet, and suspension`
    ]),
    encodeMemory([
        `* what * alternative * (!loperamide|imodium)`
    ],[
        `There is Lomotil (diphenoxylate / atropine) , but you need to  obtain a prescription for that. You can't just buy it like loperamide when you go to pharmacy`
    ]),
    // bismuth subsalicylate
    encodeMemory([
        `* what * generic * !bismuth !subsalicylate *`
    ],[
        `That is a generic name my friend`
    ]),
    encodeMemory([
        `* what * branded * !bismuth !subsalicylate * drugs *`
    ],[
        `Some of the known ones are Pink Bismuth, Pepto-Bismol,and Bismatrol`
    ]),
    encodeMemory([
        `* what * dosing * !bismuth !subsalicylate *`,
        `* how * (take|use) * !bismuth !subsalicylate *`,
        `* what * direction * !bismuth !subsalicylate *`,
        `* how * !bismuth !subsalicylate * (take|use) *`,
    ],[
        `The typical dosing of Bismuth Subsalicylate. There are difference between tablet and liquid form. For tablet, if person is aged 12 and older, the typical dose is 2 tablets (524 mg) by mouth every 30 to 60 minutes as needed for up to 2 days. Don’t take more than 16 tablets (4,192 mg) in a day.  If you have the liquid form, if person is aged 12 and older , the typical dose is 30 mL (525 mg) by mouth every 30 minutes as needed for up to 2 days. If you’re taking bismuth subsalicylate (Pepto-Bismol) to treat diarrhea, you can take 60 mL (1,050 mg) by mouth every 60 minutes instead. Don’t take more than 240 mL (4,200 mg) in a day`
    ]),
    encodeMemory([
        `* what * is * !bismuth !subsalicylate *`
    ],[
        `Bismuth subsalicylate (Pepto-Bismol) is an over-the-counter medication used to treat upset stomach and diarrhea. It works well to stop diarrhea, but you might need to take it multiple times a day. Bismuth subsalicylate (Pepto-Bismol) is generally well-tolerated, but it can cause harmless darkening of your tongue or stools.

        `
    ]),
    encodeMemory([
        `* what * !bismuth !subsalicylate * use  *`
    ],[
        `Bismuth subsalicylate is an over-the-counter medication used for treatment of diarrhea, gas, upset stomach, indigestion, heartburn,nausea and as a prophylaxis for traveler's diarrhea`
    ]),
    encodeMemory([
        `* how * !bismuth !subsalicylate * work *`
    ],[
        `Most patients should see a positive therapeutic response within four hours of the ingestion of BS. You shouldn’t use bismuth subsalicylate (Pepto-Bismol) for more than 2 days. If you still have diarrhea or stomach problems after 2 days of taking it, talk with your provider.`
    ]),
    encodeMemory([
        `* when * ( not  (take|use) | avoid )  * !bismuth !subsalicylate *`
    ],[
        `You should not give it if you have bleeding problems, a stomach ulcer, blood in your stools, or if you are allergic to aspirin or other salicylates. Do not give this medicine to a child or teenager with a fever, flu symptoms, or chickenpox.`
    ]),
    encodeMemory([
        `* what * side !effects? * !bismuth !subsalicylate *`
    ],[
        `You may experience temporary darkening of the stool or tongue. If experience severe allergic reaction such as difficulty breathing, skin rash, and swelling, and Rye's syndrome which exhibits  diarrhea, vomiting, unusually low energy, loss of consciousness, seizure, changes in behavior, confusion, muscle weakness, changes in vision or hearing, contact your doctor immediately
        `
    ]),
    encodeMemory([
        `* what * tips * !bismuth !subsalicylate *`
    ],[
        `Drink plenty of clear liquids while you are taking bismuth subsalicylate (Pepto-Bismol). Diarrhea can cause dehydration and drinking enough liquids will help prevent this. Swallow the capsules whole with water. Do not chew them. Swallow the capsules whole with water. Do not chew them.`
    ]),
    encodeMemory([
        `* (what|how) * !bismuth !subsalicylate * price *`
    ],[
        `It is often sold as pack. Based on the listings in iprice ph, its about 500 pesos. It may cost less though for individual tablets`
    ]),
    encodeMemory([
        `* what * forms * !bismuth !subsalicylate *`
    ],[
        `answer not available..`
    ]),
    encodeMemory([
        `* what * alternative * !bismuth !subsalicylate *`
    ],[
        `Loperamide (Imodium A-D) can be an alterantive`
    ]),
]
// incomplete... where are the rest? only 2 are medicines??
// are you sure??


let section12 = [
    encodeMemory([
        `* where * treat * have * diarrhea *`,
        `* where * go * have * diarrhea *`,
    ],[
        `In most cases, diarrhea can be treated at home and it will resolve itself in a few days. If you really feel great discomfort , it has lasted for more than 2 days,seeing blood in your stool , or have fever, it is best for you to  go to nearby healthcare center`
    ]),
    encodeMemory([
        `* (what|when|how) * acute * diarrhea *`
    ],[
        `When diarrhea lasts 1 or 2 days then you have an acute one.  This may be caused by food or water that was contaminated -by bacteria, viruses, or parasites.  When you travel , there is a chance that you'll get what they call “travelers diarrhea”. You can manage your diarrhea by taking on the counter drugs and through rehydration. If  condition persist for more than 2 days, see blood in  your stool or have fever, you may want to go nearby     healthcare center for better help. `
    ]),
    encodeMemory([
        `* (what|when|how) * chronic * diarrhea *`
    ],[
        `You can tell if you have a chronic diarrhea when it lasts for a few weeks. This may be caused by another health problem such as irritable bowel syndrome. It can also  be caused by an intestinal disease. You can manage your diarrhea by taking on the counter drugs and through rehydration. However, you may want to go nearby healthcare center so they can find what is causing it and to give more appropriate help.`
    ]),
    encodeMemory([
        `* (what|how) * differ * acute diarrhea * chronic diarrhea *`,
        `* (what|how) * differ * chronic diarrhea * acute diarrhea *`,
    ],[
        `Diarrhea can be acute or chronic. Acute diarrhea is known to last for 1 to 2 days. Chronic diarrhea , on the other hand, last for several weeks. Both types of diarrhea may cause dehydration so keep hydrating to prevent this.`
    ]),
    encodeMemory([
        `* how * treat * acute * diarrhea *`
    ],[
        `The first step to treating acute diarrhea is rehydration, preferably oral rehydration. Taking loperamide may provide faster and more complete relief of acute nonspecific diarrhea and gas-related discomfort   than either medication alone.`
    ]),
    encodeMemory([
        `* how * treat * chronic * diarrhea *`
    ],[
        `You need to keep on hydrating to replenish the fluids you expelled. However, it is recommended for you to seek medical help from doctor so they can find its cause and treat you for any complications`
    ]),
]

let section13 = [
    encodeMemory([
        `* what * problem * diarrhea *`,
        `* problem * diarrhea * what *`,
        `* what * diarrhea * problem *`,
    ],[
        `Diarrhea can cause mild, moderate or severe dehydration because of expelling too much fluids.   When one is dehydration , their body lack enough fluid and   electrolytes(sodium, chloride, potassium, and bicarbonate)  to work properly. At worst,  this can be life-threatening . It is important to keep keep hydrating  to replenish these fluids. Diarrhea can also result to malabsorption. If people  do not absorb enough nutrients from the food they eat, they may become malnourished. There are many other problems associated with diarrhea. These are just some of the notable ones.
        `
    ]),
]

let section14 = [
    encodeMemory([
        `* (who|where) * ask * (sign|symptom) * diarrhea *`
    ],[
        `You can ask me for the basics. But I highly recommend you ask nearby healthcare professional`
    ]),
    encodeMemory([
        `* where * (treat|go) * (sign|symptom) * diarrhea *`
    ],[
        `You can pretty much manage your diarrhea in your home. You may want to take some on the counter medicines to relieve what you are feeling. If you see blood in your stool , have fever, or has lasted for 2 days, its best to see a doctor  immediately for further help`
    ]),
    encodeMemory([
        `* what * (sign|symptom) * diarrhea *`,
        `* what * (sign|symptom) * dehydration *`,
        `* how * tell * has diarrhea *`,
    ],[
        `There are many symptoms of diarrhea. Usually when you have it you'll feel any of the following: abdominal cramps , bloating, bloody stools, explosive and painful gas, fatigue, fever, chills, frequent urge to evacuate, large volume of stools mucus on the stool, nausea, and persistent vomiting.`
    ]),
    encodeMemory([
        `* how * treat * diarrhea *`
    ],[
        `You can take some on the counter medicines, but you need to watch out what you take if you have bloody stools. On the counter  drugs are not recommended if you are experiencing it`
    ]),
    encodeMemory([
        `* (are|is) * diarrhea_symptoms * (sign|symptom) * diarrhea *`,
        `* (are|is) * diarrhea_symptoms * diarrhea * (sign|symptom) *`,
    ],[
        `Yes, it is a symptom`
    ]),
]

let section15 = [
    encodeMemory([
        ``
    ],[
        ``
    ]),
]


export const data = 
  [].concat(section11)
    .concat(section12)
    .concat(section13)
    .concat(section14)
    .concat(section15)

