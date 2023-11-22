import { encodeMemory } from "@/api/config/model"

let section6 = [
    encodeMemory([
        `* peel * fruit *`,
        `* not * take * unpeeled * fruits *`,
        `* avoid * unpeeled * fruits *`,
        `Can unpeeled fruits be dangerous`,
        `Is it harmful necessary to peel fruit`,
        `Should I always peel or avoid unpeeled fruits altogether`,
        `What are the potential risks  dangers of eating unpeeled fruits`,
        `What is the purpose of peeling fruit`,
        `why should i have to peel remove the skin of fruits before eating them`,
        `why remove avoid peel skin of fruits before cooking`,
    ],[
        `To avoid diarrhoea, it is recommended that fruits are peeled before eating as their skins may harbour harmful bacteria, parasites and viruses which can cause infections. The chances of exposure to these pathogens will decrease considerably with the peeling of fruits. In addition, the risk of contamination can be further reduced by rinsing fruits carefully with clear water before they are peeled.`
    ],5),
    encodeMemory([
        `* not * eat* raw * meat * `,
        `* avoid * raw * meat *`,
        `* cook * meats *`,
        `* not * take * raw * meat *`,
        `* raw * (not * (take|buy)|avoid) * meat *`,
        `How can raw meat be harmful worsen your diarrhea`,
        `What are the dangers consequences of consuming eating raw meat`,
        `What are the illnesses caused by eating undercooked meat`,
        `What are the potential health hazards risks of eating uncooked raw meat`,
        `What are the reasons to avoid for not consuming raw meat`,
        `why What makes raw meat harmful to consume`,
        `Why is it recommended important to cook meat thoroughly`,
        `Why is it not recommended to eat raw meat`,
        // chatgpt end
    ],[
        `Cooking food properly is important because it kills harmful bacteria, viruses, and parasites that can cause gastrointestinal infections. Consuming undercooked or raw foods, especially meats, poultry, eggs, and seafood, can increase the risk of foodborne illnesses. Proper cooking techniques, such as cooking food to appropriate temperatures and avoiding cross-contamination between raw and cooked foods, can help prevent the spread of harmful bacteria and reduce the risk of developing diarrhea.`
    ],5),
    encodeMemory([
        `*avoid * diarrhea *`,
        `How to protect yourself from diarrhea`,
        `Steps to avoid getting diarrhea`,
        `Ways to prevent diarrhea`,
        `What can be done to prevent diarrhea`,
        `What to do to prevent diarrhea`,
        `What you need to know to avoid diarrhea`,
        `explain what are the things to do to prevent having diarrhea`,
        `how to keep away avoid diarrhea`,
        `tell me how to avoid getting diarrhea`,
    ],[
        `Good hygiene, such as handwashing with soap or water before you eat and after going to the bathroom, is essential in order not to get diarrhoea. Ensuring clean and safe sources of food and water as well as the thorough cooking of foods in order to eliminate any harmful bacteria or parasites is also important. Diarrhoea prevention can also be ensured by avoiding raw or undercooked foods, dairy products that are unpasteurized and unclean water sources. Additionally, staying hydrated and maintaining a healthy diet can help strengthen the immune system and prevent infections that can lead to diarrhea.`
    ],1),
]



let section7 = [
  
    encodeMemory([
        `* food * (take|good) * diarrhea *`,
        'show get tell me the list of foods what foods that i can eat take drink when having diarrhea',
        `tell me  What foods can I eat drink take to help with diarrhea`,
        `what foods can should take when i have diarrhea`,
    ],[
        `You can eat arrozcaldo, bananas, broth, chicken, chicken soup, congee, electrolyte drinks, oatmeal, peanut butter ,potatoes, rice, soup, sports drinks, toasts, water, yogurt, rice soup (am) , and buko juice. These are only some of the foods you may taken when having diarrhea.`
    ],4),
]


let section8 = [
  
    encodeMemory([
        `* bad * hydration * diarrhea *`,
        `* diarrhea_foods_not_allowed_bad_hydration * diarrhea *`,
        `why avoid not eat drink food that are bad for hydration when having diarrhea`,
        `why avoid not eat diarrhea_foods_not_allowed_bad_hydration when having diarrhea`,
    ],[
        `It is important to avoid foods that are bad for hydration such as what you mentioned when experiencing diarrhea because these foods can further dehydrate the body.Instead, it is recommended to consume foods that are easy to digest and high in water content, such as broths, soups, boiled vegetables, and fruits with high water content, to help replace lost fluids , electrolytes and prevent dehydration.`
    ],4),
    // encodeMemory([
    //     `* diarrhea_foods_not_allowed_produces_gas * (not eat|avoid) * diarrhea *`,
    //     `* diarrhea_foods_not_allowed_produces_gas * avoid * diarrhea *`,
    //     `* (not eat|avoid) * diarrhea_foods_not_allowed_produces_gas * diarrhea *`,
    //     `* avoid * diarrhea_foods_not_allowed_produces_gas * diarrhea *`,
    //     `Why are diarrhea_foods_not_allowed_produces_gas not recommended during diarrhea`,  
    //     `What makes diarrhea_foods_not_allowed_produces_gas a food to avoid when experiencing diarrhea`,  
    //     `What makes diarrhea_foods_not_allowed_produces_gas difficult to digest during diarrhea`,  
    //     `What is the impact of eating diarrhea_foods_not_allowed_produces_gas during diarrhea`,  
    //     //
    //     `can i eat when diarrhea_foods_not_allowed_produces_gas having diarrhea`,
    //     `can eating diarrhea_foods_not_allowed_produces_gas help treat diarrhea`,
    // ],[
    //     ` It is vital to avoid foods that induce gas when you experience diarrhoea, as it may aggravate abdominal discomfort and blepharitis. Gas and diarrhoea may be triggered by foods high in fiber, such as beans, lentils or cruciferous vegetables. The production of gas may also be supported by carbonate drinks, chew gum and some artificial sweeteners. It may help ease symptoms and promote recovery by selecting foods with a low fibre content, avoiding food that produces gas. `
    // ],4),
    encodeMemory([
        `* lactose *`,
        `* lactose * diarrhea *`,
        `* diarrhea_foods_not_allowed_contains_lactose * diarrhea *`,
        `* diarrhea_foods_not_allowed_contains_lactose *`,
        `why avoid not eat drink food that contains lactose when having diarrhea`,
        `why avoid not eat diarrhea_foods_not_allowed_contains_lactose when having diarrhea`,
    ],[
        ` If you have diarrhea, avoid foods containing lactose because it may destroy the lining of your small intestine and reduce its ability to produce lactase, an enzyme which helps break down lactose. It may get stuck in the larger intestine, giving rise to gas, bloat or all sorts of indigestion if lactose is not properly absorbed. As a result, it can help to reduce diarrhoea symptoms and prevent future problems if you do not eat lactose-containing foods such as milk, cheese or ice cream.`
    ],4),
    // encodeMemory([
    //     `* diarrhea_foods_not_allowed_contains_fructose * (not eat|avoid) * diarrhea *`,
    //     `* diarrhea_foods_not_allowed_contains_fructose * avoid * diarrhea *`,
    //     `* (not eat|avoid) * diarrhea_foods_not_allowed_contains_fructose * diarrhea *`,
    //     `* avoid * diarrhea_foods_not_allowed_contains_fructose * diarrhea *`,
    //     `Why are diarrhea_foods_not_allowed_contains_fructose not recommended during diarrhea`,  
    //     `What makes diarrhea_foods_not_allowed_contains_fructose a food to avoid when experiencing diarrhea`,  
    //     `What makes diarrhea_foods_not_allowed_contains_fructose difficult to digest during diarrhea`,  
    //     `What is the impact of eating diarrhea_foods_not_allowed_contains_fructose during diarrhea`,  
    //     //
    //     `can i eat when diarrhea_foods_not_allowed_contains_fructose having diarrhea`,
    //     `can eating diarrhea_foods_not_allowed_contains_fructose help treat diarrhea`,
    //     `tell me if its okay to  eat  diarrhea_foods_not_allowed_contains_fructose when experiencing diarrhea`,
    // ],[
    //     ` Fructose is a sugar which comes from the fruits, Honey and some vegetables. Diarrhoea symptoms can be exacerbated in some individuals by eating foods with high fructose levels because the body may have difficulty breaking down and absorbing these sugars. Water can be attracted to the gastrointestinal tract by fructose, leading to further loss of fluid and dehydration. It is thus possible to ease symptoms and promote the healing process through avoidance of foods that contain fructose in a bout of diarrhoea.`
    // ],4),
    encodeMemory([
        `* diarrhea_foods_not_allowed_irritate_stomach * diarrhea *`,
        `* diarrhea_foods_not_allowed_irritate_stomach *`,
        `why avoid not eat drink spicy chilli foods when having diarrhea`,
        `why avoid not eat diarrhea_foods_not_allowed_irritate_stomach when having diarrhea`,
    ],[
        `Spicy foods can irritate stomach, causing increased bowel movements which may lead to worsening of diarrhea symptoms. Furthermore, spicy foods may contain ingredients that are difficult to digest, causing further gastrointestinal distress. As a result, when diarrhoea occurs, it is advised to avoid the use of spice foods.`
    ],4),
    encodeMemory([        
        `* diarrhea_foods_not_allowed_oily * diarrhea *`,
        `* diarrhea_foods_not_allowed_oily *`,
        `why avoid not eat drink food that are oily or contians grease oils oil fried when having diarrhea`,
        `why avoid not take drink eat diarrhea_foods_not_allowed_oily when having diarrhea`,
    ],[
        `Greasy foods contain high amounts of fat, they slow stomach emptying. It is difficult to digest oil and greasy food, which may stimulate the gastrointestinal tract causing diarrhoea. This may also cause stomach acid production to increase, which can irritate the bowels and lead to worsening of symptoms. If you have a diarrhoea, it may help to reduce symptoms and speed up recovery by avoiding oily foods.`
    ],4),
    encodeMemory([
        `* foods * avoid * diarrhea *`,
        `* foods * not * (eaten|taken) * diarrhea *`,
        `* avoid * foods * diarrhea *`,
        `* diarrhea * not * eaten * foods *`,
        `* diarrhea * foods * not * eaten *`,
        `What foods should I not take eat drink avoid if I have diarrhea`,
        `Are there certain foods that can make diarrhea worse`, 
        `What foods should be avoid eliminated when during diarrhea`, 
        `tell me the list of foods that i should not eat or avoid when having diarrhea`,
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
        `* who * problem * diarrhea *`,
        `* diarrhea * who * problem *`,
        `* diarrhea * problem *who *`,
        `Who are likely risk susceptible vulnerable to complications when experiencing diarrhea`,
        `Who may face more serious health issues when dealing with diarrhea`,
        `Who should be especially careful concerned about the effects of diarrhea on their health`,
        `tell me who are in danger of getting diarrhea`,
        `who are those people that can be at risk when they get diarrhea`,
        `who can have problems when they have diarrhea`
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

