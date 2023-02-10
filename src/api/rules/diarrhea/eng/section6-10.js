import { encodeMemory } from "@/api/engine/model"

let section6 = [
    encodeMemory([
        `* why * peel * fruit *`
    ],[
        `you need to do this because it may have contact with harmful chemicals and infectious agents like bacterial, viruses, and parasites.`
    ]),
    encodeMemory([
        `* why * avoid * raw * meat *`,
        `* why * not * take * raw * meat *`,
        `* why * cook * meats? *`,
    ],[
        `always cook meat properly to kill any infectious agents present in the meat`
    ]),
    encodeMemory([
        `* why * not * take * unpeeled * fruits *`,
        `* why * avoid * unpeeled * fruits *`,
    ],[
        `you need to do this because it may have contact with harmful chemicals and infectious agents like bacterial, viruses, and parasites`
    ]),
    encodeMemory([
        `* who * consult * diarrhea *`
    ],[
        `I can give you advises like what medicines can you take and what to do if you feel the symptoms. However, you can also go your baranggay health center, ask any doctor, nurses, and even your nearest pharmacist.`
    ]),
    encodeMemory([
        `* where * eat * diarrhea * `
    ],[
        `"For your safety, we highly recommend you eat from restaurant, buffet and street vendors that prepare food properly and practice good hygeine.`
    ]),
    encodeMemory([
        `* where * buy * drug * diarrhea * `,
    ],[
        `These medicines are found in your nearest pharmacy`
    ]),
    encodeMemory([
        `* (how|what) * prevent * diarrhea *`,
        `* (how|what) * avoid * diarrhea *`,
    ],[
        `There are many things you can do. Perhaps the most obvious ones is to eat foods that are properly prepared. Also drink water from clean sources. Always wash your hands with soap and water, if you don’t have soap try to use hand sanitizers. You may al so want to stop sharing your towels, cutlery and utensils. Sometimes, getting vaccines also help.`
    ]),
    encodeMemory([
        `* (can|will|is) * diarrhea * avoid *`,
        `* (can|will|is) * diarrhea * prevent *`,
    ],[
        `Yes you can avoid it. I can tell you what are these. you just need to ask`
    ]),
]



let section7 = [
  
    encodeMemory([
        `* why * take * diarrhea_foods_allowed *`,
        `* why * buy * diarrhea_foods_allowed * diarrhea *`,
        `* why * take * diarrhea_foods_allowed * diarrhea *`,
        `* diarrhea_foods_allowed * take * diarrhea *`,
        `* diarrhea_foods_allowed * good * diarrhea *`,
        `* diarrhea_foods_allowed * buy * diarrhea *`,
    ],[
        `These foods can help you hydrate. If you have diarrhea, it will help firm up your stool.`
    ]),
    encodeMemory([
        `* good  * take * diarrhea *`,
        `* treat * good * diarrhea *`,
        `* take * treat * diarrhea *`,
        `* food * good * diarrhea *`,
        `* food * treat * diarrhea *`,
        `* food * take * diarrhea *`,
        `* what * food * good * diarrhea *`,
        `* what * food * treat * diarrhea *`,
        `* what * food * take * diarrhea *,`,
    ],[
        `There is a lot of them. You can eat arrozcaldo, bananas, broth, chicken, chicken soup, congee, electrolyte drinks, oatmeal, peanut butter ,potatoes, rice, soup, sports drinks, toasts, water, yogurt, rice soup (am) , and buko juice. If you like I can also tell you what you should avoid when having diarrhea`
    ]),
]


let section8 = [
  
    encodeMemory([
        `* why * diarrhea_foods_not_allowed_bad_hydration * (not (take|buy)|avoid) * diarrhea *`,
        `* why * (not (take|buy)|avoid) * diarrhea_foods_not_allowed_bad_hydration * diarrhea *`,
    ],[
        `You need to stay away from that. They are basically not good for hydration`
    ]),
    encodeMemory([
        `* why * diarrhea_foods_not_allowed_produces_gas * (not (take|buy)|avoid) * diarrhea *`,
        `* why * (not (take|buy)|avoid) * diarrhea_foods_not_allowed_produces_gas * diarrhea *`,
    ],[
        `Some of these may also cause gas You probably  don’t want that when having diarrhea. It will  worsen `
    ]),
    encodeMemory([
        `* why * diarrhea_foods_not_allowed_contains_lactose * (not (take|buy)|avoid) * diarrhea *`,
        `* why * (not (take|buy)|avoid) * diarrhea_foods_not_allowed_contains_lactose * diarrhea *`,
    ],[
        `If you are lactose intolerant, this is not good for you. By that I mean if you go to bathroom after drinking something   containing milk, you need to avoid it`
    ]),
    encodeMemory([
        `* why * diarrhea_foods_not_allowed_contains_fructose * (not (take|buy)|avoid) * diarrhea *`,
        `* why * (not (take|buy)|avoid) * diarrhea_foods_not_allowed_contains_fructose * diarrhea *`,
    ],[
        `There has been reports that some people experienced worsening of  their diarrhea because of high amounts of fructose. You probably need to be  careful of these for the time being`
    ]),
    encodeMemory([
        `* why * diarrhea_foods_not_allowed_irritate_stomach * (not (take|buy)|avoid) * diarrhea *`,
        `* why * (not (take|buy)|avoid) * diarrhea_foods_not_allowed_irritate_stomach * diarrhea *`,
    ],[
        `This food can irritate your stomach and make your diarrhe worse`
    ]),
    encodeMemory([
        `* why * diarrhea_foods_not_allowed_oily * (not (take|buy)|avoid) * diarrhea *`,
        `* why * (not (take|buy)|avoid) * diarrhea_foods_not_allowed_oily * diarrhea *`,
    ],[
        `Greasy foods contain high amounts of fat, they slow stomach emptying. You dont want that if you have diarrhea`
    ]),
    encodeMemory([
        `* why * raw * (not (take|buy)|avoid) * diarrhea *`,
        `* why * (not (take|buy)|avoid) * raw * diarrhea *`,
    ],[
        `These foods may contain toxins and may lead to food poisoning. You don’t want this when you are having a stomach condition.`
    ]),
    encodeMemory([
        `* (which|what) * foods * (not (take|buy)|avoid) * diarrhea *`,
        `* foods * (not (take|buy)|avoid) * diarrhea *`,
        `* (not (take|buy)|avoid) * foods * diarrhea *`,
        `* diarrhea * (not (take|buy)|avoid) * foods *`,
        `* diarrhea * foods * (not (take|buy)|avoid) *`,
    ],[
        `There is a whole bunch of these. Alchohol,   beans, berries, brocoli, cabbage,   cauliflower, cheese, chickpeas, coffee, corn,  dates, fruit jucies, grapes, green leafy  vegetables, gum, honey ice cream, milk,  nuts, oily foods, spicy foods, peppers,  raw meat , salads, shellfish, soft drinks,   and tea are some of what you need to avoid`
    ]),
    encodeMemory([
        `* (give|buy) * 
        (diarrhea_foods_not_allowed_bad_hydration
          |diarrhea_foods_not_allowed_produces_gas
          |diarrhea_foods_not_allowed_contains_lactose
          |diarrhea_foods_not_allowed_contains_fructose
          |diarrhea_foods_not_allowed_irritate_stomach
          |diarrhea_foods_not_allowed_oily) *
          diarrhea *
        `,
    ],[
        `Avoid giving or taking that if someone has diarrhea. There are   better options out there. I can name a few if you ask me`
    ]),
]

let section9 = [
  
]

let section10 = [
  
    encodeMemory([
        `* (i|me|who) * problem * diarrhea *`,
        `* diarrhea * (i|me|who) * problem *`,
        `* diarrhea * problem * (i|me|who) *`,
        `* problem * (i|me|who) * diarrhea *`,
        `* problem * diarrhea * (i|me|who) *`,
    ],[
        `Children under 3 years, older patients, people with weak immune system, malnourished children, patients have diarrhea for more than 24 hours, patients having 39 degree celcius, patients havin bloody stools and pus, patients having high blood pressure medications, and travelers having pre-existing health conditions are the people that have risk of developing complications`
    ]),
]




export const data = 
  [].concat(section6)
    .concat(section7)
    .concat(section8)
    .concat(section9)
    .concat(section10)

