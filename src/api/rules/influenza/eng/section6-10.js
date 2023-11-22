import { encodeMemory } from "@/api/config/model"


let section6 = [
    encodeMemory([
        `* get * flu * vaccine * `,
        `How does the flu vaccine protect help against or prevent the flu`,
        `What are the benefits of receiving or getting a flu vaccine`,
        `Why should I get a necessary flu vaccine`,
        `Why is it recommended or important to get a flu vaccine`,  
        `tell me about why get flu vaccine when having influenza`,
    ],[
        `Although there is no medicine that can prevent flu, flu vaccine are found to help protect you. Flu vaccination prevents illnesses and flu-related doctors visit each year. It help reduce the severity of illnesses in people who get vaccinated but stil get sick. This particularly help people with certain chronic health conditions (such as heart conditions). With this, it reduces flu associated hospitalization. It also protect pregnant , children and people around you.`
    ],5),
    encodeMemory([
        `* (avoid|not) * contact * influenza *`,
        `* distance *  influenza * `,
        `How does physical distancing help in preventing the transmission of influenza`,
        `What is the significance of avoiding physical contact when you are infected with influenza`,
        `Why is it important to avoid physical contact when you have influenza`,
        `why avoid touching each other when having influenza`,

    ],[
        `Avoid close contact with people who are sick. If its you who is sick, keep your distance from others. Distance yourself by at least 1 meter from people who are coughing. Keep yourself away from people with colds. Avoid crowded places because they can increase the risk of getting the virus. You need to do these things to prevent spreading the virus further.`
    ],5),
    // encodeMemory([
    //     `* home * sick * influenza * `,
    //     `Why do health experts recommend staying home when you have the flu`,
    //     `Why is it important to stay home when you have the flu`,
    //     `Why is staying home when you have the flu the responsible thing to do`,
    //     `Why should you avoid going out when you have the flu`,
    // ],[
    //     `Stay home from work, school, and errands when you are sick to prevent spreading your illness to others. You need to take a rest and treat yourself.`
    // ],5),
    encodeMemory([
        `* cover * (influenza|cough|sneezing) *`,
        // `How does covering your mouth and nose help when having influenza`,
        `How does covering your mouth and nose help reduce the spread of influenza`,
        `What are can happen if you don't cover your mouth and nose when having influenza`,
        `Why is it necessary to cover your mouth and nose when having to prevent spreading influenza`,
        // `Why is it important to cover your mouth and nose when having influenza`,
        `tell me why cover when cough or sneeze`,
    ],[
        `Cover your mouth and nose with a tissue when coughing or sneezing to prevent those around you from getting sick.`
    ],5),
    encodeMemory([
        `* avoid * touching * `,
        `How does avoiding touching your face help prevent illness`,
        `Why should you keep your hands away from your face`,
        `tell why recommended you avoid touching your eyes, nose, mouth`,
    ],[
        `Germs often spread when a person touches something that is contaminated with germs and then touches his or her eyes, nose, or mouth.`
    ],5),
    encodeMemory([
        `* (wear|use) * mask * `,
        `What the advantage of wearing a face mask when suffering from influenza`,
        `Why do recommend wearing a face mask when you have the flu`,
        `Why should people wear face masks when they have the flu`,
        `tell me why do you use or wear mask if coughing , sneezing or having influenza`
    ],[
        `Wearing face mask prevents infection as the virus can get in the air or get on anything touched or used by a person with the flu.`
    ],5),
    // encodeMemory([
    //     `* consult * (cough|sneeze|influenza|cold) *`,
    //     `Which healthcare provider can prescribe medication for influenza`,
    //     `Which medical professional can help with my influenza`,
    //     `Which specialist is best equipped to handle my influenza`,
    //     `Who can diagnose and treat my influenza`,
    //     `Who can provide medical advice for my influenza`,
    //     `Who is qualified to treat influenza`,
    //     `Who is the best healthcare provider to treat influenza`,
    //     `Who should I consult for treatment of influenza`,
    //     `Who specializes in treating influenza`,
    //     `tell me where should i consult when having influenza`,
    //     `when do i consult when having influenza, cough, colds, or sneeze`,
    //     `who do i consult when feeling influenza`
    // ],[
    //     // getting to know what doctor treat influenza
    //     `
    //     If you have flu, you may consult a general practitioner or family physician. You may also be referred to an infectious disease specialist if you have a severe or complicated case of the flu.
    //     If you develop severe respiratory symptoms, you may be referred to pulmonologist. Those with underlying medical conditions may be reffered to other specialist such sa cardiologist, endocrinologist, or neurologist for further evaluation nad management. `
    // ],5),
    encodeMemory([
        `* avoid * influenza *`,
        `How can I protect myself avoid catching influenza`,
        `What are the effective best ways to avoid prevent getting influenza`,
        `What steps measures can I take to prevent avoid getting influenza`,
        `tell me how to avoid prevent getting influenza`,
    ],[
        `If you can, get vaccinated. Avoid close contact with people who are sick. If you are sick, better stay at home to prevent spreading the virus to others. Always cover your mouth and nose to reduce the risk of transmitting the virus to others. Wearing a face make help you with this.  Practice good hygeine. For example cleaning your hands often and avoid touching your eyes, nose or mouth to prevent any virus from entering your body.`
    ],1),
]

let section7 = [
    encodeMemory([
        `* eat * food * influenza *`,
        `* food * influenza * eat *`,
        `* food * eat * influenza *`,
        `what foods take eat when i have influenza`,
        `are there any foods that can help treat recover with influenza`,
        `get me the list of foods that i can treat eat, drink take when having influenza`,
        `show give tell me about the list of foods that i can eat when treat having influenza to recover`,
        `what fruits, snacks, desers, meals, can i take when feeling treat influenza`,
    ],[
        `There are several foods that may help you recover quicker. You may consider taking several foods. Broths and soup made from chicken, beef, and vegetable may prevent dehydration and its warmth may relieve congestion and sooth sore throat. You may also take garlic since it can enhance immunity nad reduce the serverity of symptoms. Foods sources with probiotics such as yogurt may also help by promoting good gut bacteria that suppors your immune system. Fruits and vegatables containing vitamin c may also help. This include peppers, oranges, citrus, lemons, grapes and those dark leafy greens. You can also take broccoli. Furthermore, oatmeal contains immune-boosting nutrients like copper, iron, selenium, zinc fiber and protien. Additionally, you can also add spicesd such as ginger and turmeric in your food. Finally, always take fluids such as water to keep you hydrate`
    ],4),
]

let section8 = [
    // encodeMemory([
    //     `* avoid * influenza_foods_not_allowed_caffeinated_drinks * influenza *`,
    //     `* not * eat* influenza_foods_not_allowed_caffeinated_drinks * influenza *`,
    //     `* influenza_foods_not_allowed_caffeinated_drinks* avoid * influenza *  `,
    //     `* influenza_foods_not_allowed_caffeinated_drinks* not * eat* influenza *  `,
    //     `Can caffeinated drinks worsen the of influenza? Why`,
    //     `Does consuming caffeinated drinks prolong the recovery time from influenza? Why`,
    //     `How does consuming caffeinated drinks affect influenza `,
    //     `What is the impact of eating influenza_foods_not_allowed_caffeinated_drinks during influenza`,  
    //     `What makes influenza_foods_not_allowed_caffeinated_drinks a food to avoid when experiencing influenza`,  
    //     `Why are influenza_foods_not_allowed_caffeinated_drinks not recommended during influenza`,  
    //     `Why is it advisable to avoid caffeinated drinks during influenza`,
    //     `Why is it important to avoid caffeinated drinks when you have influenza`,
    //     `Why should influenza_foods_not_allowed_caffeinated_drinks be excluded from the diet during influenza`,  
    //     `Why should one stay away from caffeinated drinks when having influenza`,
    //     `tell me why do i have ot avoid eating  influenza_foods_not_allowed_caffeinated_drinks`,
    //     // 
    //     `is it okay to eat influenza_foods_not_allowed_caffeinated_drinks when feeling influenza`,
    //     `can i eat when influenza_foods_not_allowed_caffeinated_drinks having influenza`,
    //     `can eating influenza_foods_not_allowed_caffeinated_drinks help treat influenza`,
    //     `is it okay to eat influenza_foods_not_allowed_caffeinated_drinks when experiencing influenza`,
    //     `tell me if its okay to eat influenza_foods_not_allowed_caffeinated_drinks when experiencing influenza`,
    // ],[
    //     `When you have a fever, you may experience elevated temperatures and increased sweating, dehydration is something to be cautious of when you have a fever. Caffeine and alcohol present in some drinks like cofee and soda can make your symptoms worse (especially stomach-related symptoms). Its better to sip water and clear liquids throughout the day.`
    // ],4),
    encodeMemory([
        `* influenza_foods_not_allowed_greasy_foods * `,
        `* influenza_foods_not_allowed_greasy_foods * influenza * `,
        `why should avoid not eat drink food that are deep fried in oil oily oiled when having influenza`,
        `why should avoid not eat drink food that are influenza_foods_not_allowed_greasy_foods when having influenza`,
    ],[
        `Oily foods can exacerbate symptoms such as sore throat, coughing, and congestion. Therefore, foods high in saturated fat should be avoided or limited. That means avoiding oily, fried, or greasy foods. Also, these can be harded to digest. Therefore, it is generally recommended to avoid these when experiencing influenza to support the body's healing process`
    ],4),
    // encodeMemory([
    //     `* influenza_foods_not_allowed_hard_grains * avoid * influenza *  `,
    //     `* influenza_foods_not_allowed_hard_grains * not * eat* influenza *  `,
    //     `* savoid * influenza_foods_not_allowed_hard_grains * influenza *`,
    //     `* not * eat* influenza_foods_not_allowed_hard_grains * influenza *`,
    //     `Why is it recommended to avoid influenza_foods_not_allowed_hard_grains when you have influenza`,
    //     `Why not to eat influenza_foods_not_allowed_hard_grains when you have influenza`,
    //     `What happens if you eat influenza_foods_not_allowed_hard_grains when you have influenza`,
    //     `Why should one refrain from eating influenza_foods_not_allowed_hard_grains when having influenza`,
    //     `Why is it important to avoid eating influenza_foods_not_allowed_hard_grains when you have influenza`,
    //     `What is the impact of eating influenza_foods_not_allowed_hard_grains on influenza`,
    //     `Why is it important to avoid taking hard grains when having influenza`,
    //     `What makes hard grains a bad choice to eat when dealing with influenza`,
    //     `Why should you stay away from eating hard grains when you have influenza`,
    //     `Why is it recommended to avoid eating hard grains during influenza`,
    //     `tell me why should i not take hard grains when having influenza`,
    //     `tell me why should i not eat influenza_foods_not_allowed_hard_grains when having influenza`,
    //     // 
    //     `is it okay to eat influenza_foods_not_allowed_hard_grains when feeling influenza`,
    //     `can i eat when influenza_foods_not_allowed_hard_grains having influenza`,
    //     `can eating  influenza_foods_not_allowed_hard_grains help treat influenza`,
    //     `is it okay to eat influenza_foods_not_allowed_hard_grains when experiencing influenza`,
    //     `tell me if its okay to eat influenza_foods_not_allowed_hard_grains when experiencing influenza`,
    // ],[
    //     `The flu occasionally causes you to have an upset stomach, so sticking with foods that are easy to digest like simple/refined carbohydrates is recommended. Foods like dry saltine crackers, toast and pretzels are easy on your stomach and are most likely to be tolerated when you have the flu. It is also good to avoid fibrous foods for the time being.`
    // ],4),
    encodeMemory([
        `* influenza_foods_not_allowed_sugary_foods * `,
        `* influenza_foods_not_allowed_sugary_foods * influenza *`,
        `why avoid not eat drink food that has a lot of sugar sugars or sweet sweets when having diarrhea`,
        `why should avoid not eat drink food that are influenza_foods_not_allowed_sugary_foods when having influenza`,
    ],[
        `Sugar-rich foods can weaken your immune system, which your body needs to fight off the flu. Eating too many sugary foods can also lead to inflammation, which can worsen symptoms like sore throat and cough. Additionally, sugary foods can cause spikes in blood sugar levels, which can lead to fatigue and other symptoms that can make it more difficult to recover from the flu.
        `
    ],4),
    encodeMemory([
        `* (not eat|avoid) * foods * influenza *`,
        `* foods * (not (take|drink|buy|eat)|avoid) * influenza *`,
        `* influenza * (not eat|avoid) * foods *`,
        `* influenza * foods * (not eat|avoid) *`,
        `tell get show me the what list of foods that i should not eat drink or avoid when having influenza worse`,
    ],[
        `If you think you have flu, you need to avoid caffeinated drinks, alchohol, greasy foods, hard to digest grains, and sugary foods or sweets. Instead try to take broth-based soups to help place any fluids and sodium that you may lost.  Also try bland foods which includes white bread, potatoes, white rice, bananas, applesauce, lean meats like chicken and fish.`
    ],4),
]


let section9 = []


let section10 = [
    
    encodeMemory([
        `* influenza * problem *`,
        `* problem * influenza *`,
        // `Who is susceptible to severe flu`,
        // `Who is at risk of developing complications from the flu`,
        // `Whose health is at risk during flu season`,
        // `tell me the list of people who are in danger of getting flu`,
        `Who are the people most risk vulnerable developing experience complications from the flu`,
        `Who is more likely to have serious complications may experience severe from the flu`,
        // `Who may experience severe when they have the flu`,
        `tell explain me about the problems potential complications when having influenza`,
    ],[
        `There are some groups of people that are in risk of developing complications from influenza. People who are six months and older, people who have chronic medical conditions such as asthma, heart disease, diabetes, kidney , liver disorders, and chronic lung disease, people with weakened immune system , and people who are morbidly obese need to be wary of getting this disease.`
    ],1),
]

export const data = 
    [].concat(section6)
        .concat(section7)
        .concat(section8)
        .concat(section9)
        .concat(section10)
