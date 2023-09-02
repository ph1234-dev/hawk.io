import { encodeMemory } from "@/api/config/model"

let section6 = [
    encodeMemory([
        `* why * peel * fruit *`,
        `* why * not * take * unpeeled * fruits *`,
        `* why * avoid * unpeeled * fruits *`,
        `Are there any health reasons for peeling fruit?`,
        `Can unpeeled fruits be contaminated?`,
        `Is it harmful to eat unpeeled fruits?`,
        `Is it necessary to peel fruit?`,
        `Should I always peel my fruit?`,
        `Should I avoid unpeeled fruits altogether?`,
        `What are the benefits of peeling fruit?`,
        `What are the dangers of eating unpeeled fruits?`,
        `What are the potential risks of consuming unpeeled fruits?`,
        `What happens if you don't peel fruit?`,
        `What is the purpose of peeling fruit?`,
        `What is the reason for avoiding unpeeled fruits?`,
        `Why do some people prefer to peel fruit?`,
        `Why is it important to wash and peel fruits?`,
        `Why is it not recommended to eat unpeeled fruits?`,
        `Why is it safer to peel fruits before eating?`,
        `Why should I avoid unpeeled fruits?`,
        `Why should I peel fruit?`,
    ],[
        `To avoid diarrhoea, it is recommended that fruits are peeled before eating as their skins may harbour harmful bacteria, parasites and viruses which can cause infections. The chances of exposure to these pathogens will decrease considerably with the peeling of fruits. In addition, the risk of contamination can be further reduced by rinsing fruits carefully with clear water before they are peeled.`
    ],5),
    encodeMemory([
        `* why * (not (take|buy)|avoid) * raw * meat * `,
        `* why * avoid * raw * meat *`,
        `* why * cook * meats? *`,
        `* why * not * take * raw * meat *`,
        `* why * raw * (not (take|buy)|avoid) * meat `,
        `How can consuming raw meat aggravate diarrhea and other digestive problems?`,
        `How can eating raw meat worsen diarrhea ?`,
        `How can raw meat be harmful to your health?`,
        `What are the consequences of eating raw meat?`,
        `What are the dangers of consuming raw meat?`,
        `What are the dangers of eating raw meat`,
        `What are the health risks associated with eating uncooked meat?`,
        `What are the possible illnesses caused by eating undercooked meat?`,
        `What are the potential health hazards of eating uncooked meat?`,
        `What are the potential health risks of eating raw meat ?`,
        `What are the reasons for avoiding or not consuming raw meat`,
        `What are the reasons to avoid eating raw meat?`,
        `What are the risks of eating raw meat?`,
        `What can happen if you eat raw meat`,
        `What makes raw meat harmful to consume`,
        `Why is it advised to avoid raw meat ?`,
        `Why is it important to cook meat thoroughly?`,
        `Why is it not recommended to eat raw meat?`,
        `Why is it recommended to avoid undercooked meat`,
        // chatgpt end
    ],[
        `Cooking food properly is important because it kills harmful bacteria, viruses, and parasites that can cause gastrointestinal infections. Consuming undercooked or raw foods, especially meats, poultry, eggs, and seafood, can increase the risk of foodborne illnesses. Proper cooking techniques, such as cooking food to appropriate temperatures and avoiding cross-contamination between raw and cooked foods, can help prevent the spread of harmful bacteria and reduce the risk of developing diarrhea.`
    ],5),
    encodeMemory([
        `* (how|what) * (prevent|avoid) * diarrhea *`,
        `How to avoid getting diarrhea`,
        `How to keep from getting diarrhea`,
        `How to protect yourself from diarrhea`,
        `What to do to prevent diarrhea`,
        `Steps to avoid getting diarrhea`,
        `Tips to prevent diarrhea`,
        `Ways to prevent diarrhea`,
        `What can be done to prevent diarrhea`,
        `What to do to prevent getting diarrhea`,
        `What you need to know to avoid diarrhea`,
    ],[
        `Good hygiene, such as handwashing with soap or water before you eat and after going to the bathroom, is essential in order not to get diarrhoea. Ensuring clean and safe sources of food and water as well as the thorough cooking of foods in order to eliminate any harmful bacteria or parasites is also important. Diarrhoea prevention can also be ensured by avoiding raw or undercooked foods, dairy products that are unpasteurized and unclean water sources. Additionally, staying hydrated and maintaining a healthy diet can help strengthen the immune system and prevent infections that can lead to diarrhea.`
    ],1),
]



let section7 = [
  
    encodeMemory([
        `* why * (drink|buy|take|eat) * diarrhea_foods_allowed * diarrhea *`,
        `* diarrhea_foods_allowed * (take|good|buy) * diarrhea *`,
    ],[
        `These foods can help you hydrate. If you have diarrhea, it will help firm up your stool.`
    ],1),
    encodeMemory([
        `* good  * take * diarrhea *`,
        `* treat * good * diarrhea *`,
        `* take * treat * diarrhea *`,
        `* food * (treat|take|good) * diarrhea *`,
        `Are there any foods that can aid in treating diarrhea?`,
        `Can certain foods help ease diarrhea?`,
        `What are some dietary remedies for diarrhea?`,
        `What are some foods that can help treat diarrhea?`,
        `What are some of the best foods to eat when you have diarrhea?`,
        `What foods can I eat to help with diarrhea?`,
        `What foods should I include in my diet to treat diarrhea?`,
        `Which foods can help alleviate diarrhea?`,
        `Which foods have been shown to be effective in treating diarrhea?`,
    ],[
        `You can eat arrozcaldo, bananas, broth, chicken, chicken soup, congee, electrolyte drinks, oatmeal, peanut butter ,potatoes, rice, soup, sports drinks, toasts, water, yogurt, rice soup (am) , and buko juice. These are only some of the foods you may taken when having diarrhea.`
    ],2),
]


let section8 = [
  
    encodeMemory([
        `* why * diarrhea_foods_not_allowed_bad_hydration * (not (take|buy)|avoid) * diarrhea *`,
        `* why * (not (take|buy)|avoid) * diarrhea_foods_not_allowed_bad_hydration * diarrhea *`,
        `What are the risks of consuming diarrhea_foods_not_allowed_bad_hydration when experiencing diarrhea?`,  
        `What is the impact of eating diarrhea_foods_not_allowed_bad_hydration during diarrhea?`,  
        `What is the reason for avoiding or not taking diarrhea_foods_not_allowed_bad_hydration during diarrhea?`,  
        `What makes diarrhea_foods_not_allowed_bad_hydration a food to avoid when experiencing diarrhea?`,  
        `What makes diarrhea_foods_not_allowed_bad_hydration difficult to digest during diarrhea?`,  
        `Why are diarrhea_foods_not_allowed_bad_hydration not recommended during diarrhea?`,  
        `Why should diarrhea_foods_not_allowed_bad_hydration be excluded from the diet during diarrhea?`,  
    ],[
        `It is important to avoid foods that are bad for hydration such as what you mentioned when experiencing diarrhea because these foods can further dehydrate the body.Instead, it is recommended to consume foods that are easy to digest and high in water content, such as broths, soups, boiled vegetables, and fruits with high water content, to help replace lost fluids , electrolytes and prevent dehydration.`
    ],4),
    encodeMemory([
        `* why * diarrhea_foods_not_allowed_produces_gas * (not (take|buy)|avoid) * diarrhea *`,
        `* why * (not (take|buy)|avoid) * diarrhea_foods_not_allowed_produces_gas * diarrhea *`,
        `What is the reason for avoiding or not taking diarrhea_foods_not_allowed_produces_gas during diarrhea?`,  
        `Why are diarrhea_foods_not_allowed_produces_gas not recommended during diarrhea?`,  
        `What makes diarrhea_foods_not_allowed_produces_gas a food to avoid when experiencing diarrhea?`,  
        `Why should diarrhea_foods_not_allowed_produces_gas be excluded from the diet during diarrhea?`,  
        `What makes diarrhea_foods_not_allowed_produces_gas difficult to digest during diarrhea?`,  
        `What is the impact of eating diarrhea_foods_not_allowed_produces_gas during diarrhea?`,  
        `What are the risks of consuming diarrhea_foods_not_allowed_produces_gas when experiencing diarrhea?`,  
    ],[
        ` It is vital to avoid foods that induce gas when you experience diarrhoea, as it may aggravate abdominal discomfort and blepharitis. Gas and diarrhoea may be triggered by foods high in fiber, such as beans, lentils or cruciferous vegetables. The production of gas may also be supported by carbonate drinks, chew gum and some artificial sweeteners. It may help ease symptoms and promote recovery by selecting foods with a low fibre content, avoiding food that produces gas. `
    ],4),
    encodeMemory([
        `* why * diarrhea_foods_not_allowed_contains_lactose * (not (take|buy)|avoid) * diarrhea *`,
        `* why * (not (take|buy)|avoid) * diarrhea_foods_not_allowed_contains_lactose * diarrhea *`,
        `What is the reason for avoiding or not taking diarrhea_foods_not_allowed_contains_lactose during diarrhea?`,  
        `Why are diarrhea_foods_not_allowed_contains_lactose not recommended during diarrhea?`,  
        `What makes diarrhea_foods_not_allowed_contains_lactose a food to avoid when experiencing diarrhea?`,  
        `Why should diarrhea_foods_not_allowed_contains_lactose be excluded from the diet during diarrhea?`,  
        `What makes diarrhea_foods_not_allowed_contains_lactose difficult to digest during diarrhea?`,  
        `What is the impact of eating diarrhea_foods_not_allowed_contains_lactose during diarrhea?`,  
        `What are the risks of consuming diarrhea_foods_not_allowed_contains_lactose when experiencing diarrhea?`,
    ],[
        ` If you have diarrhea, avoid foods containing lactose because it may destroy the lining of your small intestine and reduce its ability to produce lactase, an enzyme which helps break down lactose. It may get stuck in the larger intestine, giving rise to gas, bloat or all sorts of indigestion if lactose is not properly absorbed. As a result, it can help to reduce diarrhoea symptoms and prevent future problems if you do not eat lactose-containing foods such as milk, cheese or ice cream.`
    ],4),
    encodeMemory([
        `* why * diarrhea_foods_not_allowed_contains_fructose * (not (take|buy)|avoid) * diarrhea *`,
        `* why * (not (take|buy)|avoid) * diarrhea_foods_not_allowed_contains_fructose * diarrhea *`,
        `What is the reason for avoiding or not taking diarrhea_foods_not_allowed_contains_fructose during diarrhea?`,  
        `Why are diarrhea_foods_not_allowed_contains_fructose not recommended during diarrhea?`,  
        `What makes diarrhea_foods_not_allowed_contains_fructose a food to avoid when experiencing diarrhea?`,  
        `Why should diarrhea_foods_not_allowed_contains_fructose be excluded from the diet during diarrhea?`,  
        `What makes diarrhea_foods_not_allowed_contains_fructose difficult to digest during diarrhea?`,  
        `What is the impact of eating diarrhea_foods_not_allowed_contains_fructose during diarrhea?`,  
        `What are the risks of consuming diarrhea_foods_not_allowed_contains_fructose when experiencing diarrhea?`,
    ],[
        ` Fructose is a sugar which comes from the fruits, Honey and some vegetables. Diarrhoea symptoms can be exacerbated in some individuals by eating foods with high fructose levels because the body may have difficulty breaking down and absorbing these sugars. Water can be attracted to the gastrointestinal tract by fructose, leading to further loss of fluid and dehydration. It is thus possible to ease symptoms and promote the healing process through avoidance of foods that contain fructose in a bout of diarrhoea.`
    ],4),
    encodeMemory([
        `* why * diarrhea_foods_not_allowed_irritate_stomach * (not (take|buy)|avoid) * diarrhea *`,
        `* why * (not (take|buy)|avoid) * diarrhea_foods_not_allowed_irritate_stomach * diarrhea *`,
        `What is the reason for avoiding or not taking diarrhea_foods_not_allowed_irritate_stomach during diarrhea?`,  
        `Why are diarrhea_foods_not_allowed_irritate_stomach not recommended during diarrhea?`,  
        `What makes diarrhea_foods_not_allowed_irritate_stomach a food to avoid when experiencing diarrhea?`,  
        `Why should diarrhea_foods_not_allowed_irritate_stomach be excluded from the diet during diarrhea?`,  
        `What makes diarrhea_foods_not_allowed_irritate_stomach difficult to digest during diarrhea?`,  
        `What is the impact of eating diarrhea_foods_not_allowed_irritate_stomach during diarrhea?`,  
        `What are the risks of consuming diarrhea_foods_not_allowed_irritate_stomach when experiencing diarrhea?`,
    ],[
        `Spicy foods can irritate stomach, causing increased bowel movements which may lead to worsening of diarrhea symptoms. Furthermore,, spicy foods may contain ingredients that are difficult to digest, causing further gastrointestinal distress. As a result, when diarrhoea occurs, it is advised to avoid the use of spice foods.`
    ],4),
    encodeMemory([
        `* why * diarrhea_foods_not_allowed_oily * (not (take|buy)|avoid) * diarrhea *`,
        `* why * (not (take|buy)|avoid) * diarrhea_foods_not_allowed_oily * diarrhea *`,
        `What is the reason for avoiding or not taking diarrhea_foods_not_allowed_oily during diarrhea?`,  
        `Why are diarrhea_foods_not_allowed_oily not recommended during diarrhea?`,  
        `What makes diarrhea_foods_not_allowed_oily a food to avoid when experiencing diarrhea?`,  
        `Why should diarrhea_foods_not_allowed_oily be excluded from the diet during diarrhea?`,  
        `What makes diarrhea_foods_not_allowed_oily difficult to digest during diarrhea?`,  
        `What is the impact of eating diarrhea_foods_not_allowed_oily during diarrhea?`,  
        `What are the risks of consuming diarrhea_foods_not_allowed_oily when experiencing diarrhea?`,
    ],[
        `Greasy foods contain high amounts of fat, they slow stomach emptying. It is difficult to digest oil and greasy food, which may stimulate the gastrointestinal tract causing diarrhoea. This may also cause stomach acid production to increase, which can irritate the bowels and lead to worsening of symptoms. If you have a diarrhoea, it may help to reduce symptoms and speed up recovery by avoiding oily foods.`
    ],4),
    encodeMemory([
        `* (which|what) * foods * (not (take|buy)|avoid) * diarrhea *`,
        `* foods * (not (take|buy)|avoid) * diarrhea *`,
        `* (not (take|buy)|avoid) * foods * diarrhea *`,
        `* diarrhea * (not (take|buy)|avoid) * foods *`,
        `* diarrhea * foods * (not (take|buy)|avoid) *`,
        `* (give|buy) * (diarrhea_foods_not_allowed_bad_hydration
          |diarrhea_foods_not_allowed_produces_gas
          |diarrhea_foods_not_allowed_contains_lactose
          |diarrhea_foods_not_allowed_contains_fructose
          |diarrhea_foods_not_allowed_irritate_stomach
          |diarrhea_foods_not_allowed_oily) *
          diarrhea *
        `,
        `What foods should I avoid if I have diarrhea?`,
        `Which foods should I stay away from if I have diarrhea?`, 
        `Are there certain foods that can make diarrhea worse?`, 
        `Which foods can cause diarrhea?`, 
        `What foods to skip when suffering from diarrhea?`, 
        `What foods can trigger diarrhea?`, 
        `What foods should I remove from my diet when I have diarrhea?`, 
        `What foods should be eliminated during diarrhea?`, 
        `What foods to avoid when dealing with diarrhea?`,
    ],[
        `
        Avoiding certain foods when having diarrhea is important because some foods can irritate the digestive system and worsen symptoms. Spicy, greasy, or fatty foods can be difficult for the body to digest, while foods containing lactose or fructose can exacerbate diarrhea in people with lactose or fructose intolerance. Furthermore, certain types of fiber, such as those found in beans, cruciferous vegetables, and whole grains, can  be difficult to digest and may cause gas or bloating. 
        
        Some of the foods you should avoid includes avoid Alchohol, beans, berries, brocoli, cabbage, cauliflower, cheese, chickpeas, coffee, corn,  dates, fruit jucies, grapes, green leafy  vegetables, gum, honey ice cream, milk,  nuts, oily foods, spicy foods, peppers,  raw meat , salads, shellfish, soft drinks,  and tea.

        So, it is best to stick with easily digestible, bland foods and avoid foods that may worsen diarrhea symptoms.
        `
    ],4),
]

let section9 = []

let section10 = [
  
    encodeMemory([
        `* (i|me|who) * problem * diarrhea *`,
        `* diarrhea * (i|me|who) * problem *`,
        `* diarrhea * problem * (i|me|who) *`,
        `* problem * (i|me|who) * diarrhea *`,
        `* problem * diarrhea * (i|me|who) *`,
        `Who is at a higher risk for complications when experiencing diarrhea?`,
        `Who is more likely to experience severe symptoms when having diarrhea?`,
        `Who is more susceptible to complications from diarrhea?`,
        `Who is more vulnerable to complications related to diarrhea?`,
        `Who may face more serious health issues when dealing with diarrhea?`,
        `Who may need to take additional measures to manage their diarrhea symptoms?`,
        `Who may require medical attention when having diarrhea?`,
        `Who should be concerned about the effects of diarrhea on their health?`,
        `Who should be especially careful when having diarrhea?`,
        `Who should take extra precautions when experiencing diarrhea?`,
    ],[
        `The people who should be cautious are children under 3 years, older patients, people with weak immune system, malnourished children, patients have diarrhea for more than 24 hours, patients having 39 degree celcius, patients havin bloody stools and pus, patients having high blood pressure medications, and travelers having pre-existing health conditions should take extra care when having diarrhea as they have higher risk of developing complications`
    ],1),
]




export const data = 
  [].concat(section6)
    .concat(section7)
    .concat(section8)
    .concat(section9)
    .concat(section10)

