import { encodeMemory } from "@/api/engine/model"



let section6 = [
    encodeMemory([
        "* why * get * flu * vaccine * "
    ],[
        "Although there is no medicine that can prevent flu, flu vaccine are found to help protect you. Flu vaccination prevents illnesses and flu-related doctors visit each year. It help reduce the severity of illnesses in people who get vaccinated but stil get sick. This particularly help people with certain chronic health conditions (such as heart conditions). With this, it reduces flu associated hospitalization. It also protect pregnant , children and people around you."
    ]),
    encodeMemory([
        "* why * avoid * (close|physical) * contact * influenza *",
        "* why * not * (close|physical) * contact * influenza *",
        "* why * distance * yourself * influenza * ",
        "* why * distance * contact * influenza *"
    ],[
        "Avoid close contact with people who are sick. If its you who is sick, keep your distance from others. Distance yourself by at least 1 meter from people who are coughing. Keep yourself away from people with colds. Avoid crowded places because they can increase the risk of getting the virus. You need to do these things to prevent spreading the virus further."
    ]),
    encodeMemory([
        "* why * stay * home * sick * influenza * "
    ],[
        "Stay home from work, school, and errands when you are sick to prevent spreading your illness to others."
    ]),
    encodeMemory([
        "* why * cover * (mouth|nose) * (influenza|cough|sneezing)  *"
    ],[
        "Cover your mouth and nose with a tissue when coughing or sneezing to prevent those around you from getting sick."
    ]),
    encodeMemory([
        "* Why * (clean|wash) *  hands *"
    ],[
        "Washing your hands often will help protect you from germs. If soap and water are not available, use an alcohol-based hand rub."
    ]),
    encodeMemory([
        "* Why * avoid * touching * (eyes|nose|mouth) * "
    ],[
        "Germs often spread when a person touches something that is contaminated with germs and then touches his or her eyes, nose, or mouth."
    ]),
    encodeMemory([
        "* Why * (wear|use) * face * mask * "
    ],[
        "Wearing face mask prevents infection as the virus can get in the air or get on anything touched or used by a person with the flu."
    ]),
    encodeMemory([
        "* who * consult * influenza *"
    ],[
        "I can give you directions on the basic selfcare you can do in your home. However, I am merely a program made to help in these circumstances. If you need further clarification you may need to see a doctor."
    ]),
    encodeMemory([
        "* where * eat * influenza *"
    ],[
        "The general recommendation is avoid going out to prevent you from spreading the virus. At time like a pandemic, eating out may not be good as you may get the virus from going out. Its better to stay at home for now."
    ]),
    encodeMemory([
        "* where * buy * drug * influenza *"
    ],[
        "The common drugs used to treat diseases are commonly found in pharmacies. Some sari-sari store sells them, but be caution. Some may have expired. Be wary of the proliferation of fake drugs too. For such reason, it is best to buy from a certified drug store."
    ]),
    encodeMemory([
        "* (how|what) * prevent * influenza *",
        "* (how|what) * avoid * influenza *"
    ],[
        "Here are the things you can do to prevent getting influenza. If you can, get vaccinated. Avoid close contact with people who are sick. If you are sick, better stay at home to prevent spreading the virus to others. Always cover your mouth and nose ,  to reduce the risk of transmitting the virus to others. Wearing a face make help you with this.  Practice good hygeine. For example cleaning your hands often and avoid touching your eyes, nose or mouth to prevent any virus from entering your body."
    ]),
    encodeMemory([
        "* (can|will|is) * influenza * avoid *",
        "* (can|will|is) * influenza * prevent *"
    ],[
        "Yes, influenza can be prevented. There are several things you can do."
    ]),
]

let section7 = [
    
    encodeMemory([
        "* why * take * influenza_foods_allowed *",
        "* why * buy * influenza_foods_allowed * influenza *",
        "* why * take * influenza_foods_allowed * influenza *",
        "* influenza_foods_allowed * take * influenza *",
        "* influenza_foods_allowed * good * influenza *",
        "* influenza_foods_allowed * buy * influenza *",
    ],[
        " Eating those may sooth your condition and help you recover quicker."
    ]),
    encodeMemory([
        "* good * take * influenza *",
        "* treat * good * influenza *",
        "* take * treat * influenza *",
        "* food * good * influenza *",
        "* food * treat * influenza *",
        "* food * take * influenza *",
        "* what * food * good * influenza *",
        "* what * food * treat * influenza *",
        "* what * food * take * influenza *`",
    ],[
        `There are several foods that may help you recover quicker. You may consider taking several foods. Broths and soup made from chicken, beef, and vegetable may prevent dehydration and its warmth may relieve congestion and sooth sore throat. You may also take garlic since it can enhance immunity nad reduce the serverity of symptoms. Foods sources with probiotics such as yogurt may also help by promoting "good" gut bacteria that suppors your immune system. Fruits and vegatables containing vitamin c may also help. This include peppers, oranges, citrus, lemons, grapes and those dark leafy greens. You can also take broccoli. Furthermore, oatmeal contains immune-boosting nutrients like copper, iron, selenium, zinc fiber and protien. Additionally, you can also add spices such as ginger and turmeric in your food. Finally, always take fluids such as water to keep you hydrate`
    ]),
]

let section8 = [
    
    encodeMemory([
        "* why * influenza_foods_not_allowed * (not (take|buy)|avoid) * influenza *",
        "* why * (not (take|buy)|avoid) * influenza_foods_not_allowed * influenza *"
    ],[
        "To help you recover, it is important that you take good care of yourself. You need to avoid those as it can aggravate your underlying health conditions"
    ]),
    encodeMemory([
        "* why * influenza_foods_not_allowed_caffeinated_drinks* (not (take|buy)|avoid) * influenza *  ",
        "* why * (not (take|buy)|avoid) * influenza_foods_not_allowed_caffeinated_drinks * influenza *"
    ],[
        "When you have a fever, you may experience elevated temperatures and increased sweating, dehydration is something to be cautious of when you have a fever. Caffeine and alcohol can make your symptoms worse (especially stomach-related symptoms). Its better to sip water and clear liquids throughout the day."
    ]),
    encodeMemory([
        "* why * influenza_foods_not_allowed_greasy_foods * (not (take|buy)|avoid) * influenza * ",
        "* why * (not (take|buy)|avoid) * influenza_foods_not_allowed_greasy_foods  * influenza *",
    ],[
        "You’ll want to avoid foods that are difficult to break down and hard on your gastrointestinal system. Foods high in saturated fat should be avoided or limited, as well as fried, greasy foods."
    ]),
    encodeMemory([
        "* why * influenza_foods_not_allowed_hard_grains * (not (take|buy)|avoid) * influenza *  ",
        "* why * (not (take|buy)|avoid) * influenza_foods_not_allowed_hard_grains * influenza *"
    ],[
        "The flu occasionally causes you to have an upset stomach, so sticking with foods that are easy to digest like simple/refined carbohydrates is recommended. Foods like dry saltine crackers, toast and pretzels are easy on your stomach and are most likely to be tolerated when you have the flu. It is also good to avoid fibrous foods for the time being."
    ]),
    encodeMemory([
        "* why * influenza_foods_not_allowed_sugary_foods * (not (take|buy)|avoid) * influenza * ",
        "* why * (not (take|buy)|avoid) * influenza_foods_not_allowed_sugary_foods * influenza *"
    ],[
        "Sugar-rich foods can weaken your immune system, which your body needs to fight off the flu."
    ]),
    encodeMemory([
        "* (which|what) * foods * (not (take|buy)|avoid) * influenza *",
        "* foods * (not (take|buy)|avoid) * influenza *",
        "* (not (take|buy)|avoid) * foods * influenza *",
        "* influenza * (not (take|buy)|avoid) * foods *",
        "* influenza * foods * (not (take|buy)|avoid) *",
    ],[
        "If you think you have flu, you need to avoid caffeinated drinks, alchohol, greasy foods, hard to digest grains, and sugary foods or drinks. Instead try to take broth-based soups to help place any fluids and sodium that you may lost.  Also try bland foods which includes white bread, potatoes, white rice, bananas, applesauce, lean meats like chicken and fish."
    ]),
    encodeMemory([
        "* (give|buy) * influenza_foods_not_allowed *"
    ],[
        "There are foods that you need to be wary of. If you have flu try eating broth, probiotic rich foods such as those fermented, broths and bland foods like white bread, potatoes, white rice, bananas, applesauce, lean meats like chicken and fish."
    ]),
]


let section9 = []


let section10 = [
    
    encodeMemory([
        "* (i|me|who) * problem * influenza *",
        "* influenza * (i|me|who) * problem *",
        "* influenza * problem * (i|me|who) *",
        "* problem * (i|me|who) * influenza *",
        "* problem * influenza * (i|me|who) *",
    ],[
        "There are some groups of people that are in risk of developing complications from influenza. People who are six months and older, people who have chronic medical conditions such as asthma, heart disease, diabetes, kidney , liver disorders, and chronic lung disease, people with weakened immune system , and people who are morbidly obese need to be wary of getting this disease."
    ]),
]

export const data = 
    [].concat(section6)
        .concat(section7)
        .concat(section8)
        .concat(section9)
        .concat(section10)
