import { encodeMemory } from "@/api/config/model"


let section6 = [
        `* get * flu * vaccine * `,
        `How does getting a flu vaccine help?`,
        `How does the flu vaccine prevent the flu?`,
        `How does the flu vaccine protect against the flu?`,
        `What are the benefits of getting a flu vaccine?`,
        `What are the benefits of receiving a flu vaccine?`,
        `What are the reasons behind getting a flu vaccine?`,
        `What are the reasons to get a flu vaccine?`,
        `Why should I get a flu vaccine?`,
        `What is the importance of getting a flu vaccine?`,
        `What is the purpose of getting a flu vaccine?`,
        `What is the significance of getting a flu vaccine?`,
        `Why is a flu vaccine necessary?`,
        `Why is it important to get a flu vaccine?`,  
        `Why is it recommended to get a flu vaccine?`,
        `tell me about why get flu vaccine when having influenza`,
    encodeMemory([
    ],[
        `Although there is no medicine that can prevent flu, flu vaccine are found to help protect you. Flu vaccination prevents illnesses and flu-related doctors visit each year. It help reduce the severity of illnesses in people who get vaccinated but stil get sick. This particularly help people with certain chronic health conditions (such as heart conditions). With this, it reduces flu associated hospitalization. It also protect pregnant , children and people around you.`
    ],5),
    encodeMemory([
        `* (avoid|not) * contact * influenza *`,
        `* distance *  influenza * `,
        `How does avoiding close contact help in containing influenza?`,
        `How does avoiding physical contact help in preventing influenza?`,
        `How does physical distancing help in preventing the transmission of influenza?`,
        `What are the reasons behind avoiding physical contact during influenza?`,
        `What is the science behind avoiding close contact with others during influenza?`,
        `What is the significance of avoiding physical contact when you are infected with influenza?`,
        `Why is it needed to maintain distance from others when you have influenza?`,
        `Why is it crucial to limit physical contact with others when you have influenza?`,   
        `Why is it important to avoid physical contact when you have influenza?`,
        `tell me about why avoid or distance yourself when feeling influenza`
    ],[
        `Avoid close contact with people who are sick. If its you who is sick, keep your distance from others. Distance yourself by at least 1 meter from people who are coughing. Keep yourself away from people with colds. Avoid crowded places because they can increase the risk of getting the virus. You need to do these things to prevent spreading the virus further.`
    ],5),
    encodeMemory([
        `* home * sick * influenza * `,
        `What are the consequences of not staying home when you have the flu?`,
        `What's the purpose or reason of staying home when you have the flu?`,
        `What's the science behind staying home when you have the flu?`,
        `Why do health experts recommend staying home when you have the flu?`,
        `Why is it important to stay home when you have the flu?`,
        `Why is staying home when you have the flu the responsible thing to do?`,
        `Why should you avoid going out when you have the flu?`,
    ],[
        `Stay home from work, school, and errands when you are sick to prevent spreading your illness to others. You need to take a rest and treat yourself.`
    ],5),
    encodeMemory([
        `* cover * (influenza|cough|sneezing) *`,
        `How does covering your mouth and nose help when having influenza?`,
        `How does covering your mouth and nose reduce the spread of influenza?`,
        `What are the benefits of covering your mouth and nose when having influenza?`,
        `What are the consequences of not covering your mouth and nose when having influenza?`,
        `What can happen if you don't cover your mouth and nose when having influenza?`,
        `Why is it necessary to cover your mouth and nose to prevent spreading influenza?`,
        `Why is it recommended or important to cover your mouth and nose when having influenza?`,
        `tell me why do have to cover when feeling cough or sneeze`,
        `tell me why do you have to cover yourself when you have influenza`
    ],[
        `Cover your mouth and nose with a tissue when coughing or sneezing to prevent those around you from getting sick.`
    ],5),
    encodeMemory([
        `* wash *  hands *`,
        `How does hand washing help prevent illness?`,  
        `How does hand washing reduce the spread of germs?`,  
        `What are the benefits of cleaning hands?`,  
        `What are the reasons for always washing our hands?`,  
        `What is the importance of washing hands?`,  
        `What makes washing hand so essential?`,  
        `Why is hand hygiene important?`,  
        `Why is it important to keep our hands clean?`,
        `Why should we always clean our hands?`,  
        `tell me the importance of washing hands`
    ],[
        `Washing your hands often will help protect you from germs. If soap and water are not available, use an alcohol-based hand rub.`
    ],5),
    encodeMemory([
        `* avoid * touching * `,
        `How can touching your face lead to infection?`,
        `How does avoiding touching your face help prevent illness?`,
        `What are the risks of touching your nose, mouth, and eyes during an outbreak?`,
        `What happens when you touch your face with unwashed hands?`,
        `What's the reason behind avoiding touching your nose, mouth, and eyes?`,
        `Why is avoiding face-touching an important part of infection control?`,
        `Why is it recommended or important to avoid touching your nose, mouth, and eyes?`,
        `Why should you keep your hands away from your face?`,
        `tell me why do you avoid touching your face, mouth , nose or eyes`
    ],[
        `Germs often spread when a person touches something that is contaminated with germs and then touches his or her eyes, nose, or mouth.`
    ],5),
    encodeMemory([
        `* wear * mask * `,
        `* use * mask * `,
        `What's the advantage of wearing a face mask when you're suffering from influenza?`,
        `What's the benefit of wearing a face mask when you're infected with influenza?`,
        `What's the purpose of wearing a face mask when you're sick with influenza?`,
        `What's the rationale behind wearing a face mask when you're sick with influenza?`,
        `What's the reason for wearing a face mask when you have influenza?`,
        `Why do recommend wearing a face mask when you have the flu?`,
        `Why should people wear face masks when they have the flu?`,
        `Why is it important to wear a face mask when you have the flu?`,
        `Why is it recommended to wear a face mask when you have the flu?`,
        `Why should you wear a face mask when you have the flu?`,
        `tell me why do you use or wear mask if coughing , sneezing or having influenza`
    ],[
        `Wearing face mask prevents infection as the virus can get in the air or get on anything touched or used by a person with the flu.`
    ],5),
    encodeMemory([
        `* consult * (cough|sneeze|influenza|cold) *`,
        `Which healthcare provider can prescribe medication for influenza?`,
        `Which medical professional can help with my influenza?`,
        `Which specialist is best equipped to handle my influenza?`,
        `Who can diagnose and treat my influenza?`,
        `Who can provide medical advice for my influenza?`,
        `Who is qualified to treat influenza?`,
        `Who is the best healthcare provider to treat influenza?`,
        `Who should I consult for treatment of influenza?`,
        `Who specializes in treating influenza?`,
        `tell me where should i consult when having influenza`,
        `when do i consult when having influenza, cough, colds, or sneeze`,
        `who do i consult when feeling influenza`
    ],[
        // getting to know what doctor treat influenza
        `
        If you have flu, you may consult a general practitioner or family physician. You may also be referred to an infectious disease specialist if you have a severe or complicated case of the flu.
        If you develop severe respiratory symptoms, you may be referred to pulmonologist. Those with underlying medical conditions may be reffered to other specialist such sa cardiologist, endocrinologist, or neurologist for further evaluation nad management. `
    ],5),
    encodeMemory([
        `* avoid * influenza *`,
        `How can I avoid catching influenza?`,
        `How can I protect myself from influenza?`,
        `How can I reduce my risk of getting influenza?`,
        `What are some effective ways to prevent influenza?`,
        `What are some ways to prevent getting influenza?`,
        `What are the best ways to avoid getting influenza?`,
        `What can I do to prevent getting influenza?`,
        `What can be done to prevent getting influenza?`,
        `What measures can I take to prevent influenza?`,
        `What steps can I take to avoid getting influenza?`,
        `tell me how to avoid getting influenza`,
        `tell me how to prevent influenza`,
        `explain why do i have to avoid influenza`
    ],[
        `If you can, get vaccinated. Avoid close contact with people who are sick. If you are sick, better stay at home to prevent spreading the virus to others. Always cover your mouth and nose to reduce the risk of transmitting the virus to others. Wearing a face make help you with this.  Practice good hygeine. For example cleaning your hands often and avoid touching your eyes, nose or mouth to prevent any virus from entering your body.`
    ],1),
]

let section7 = [
    
    encodeMemory([
        `* influenza_foods_allowed * take * influenza *`,
        `* influenza_foods_allowed * eat * influenza *`,
        `* eat * influenza *`,
        `* (take|good|buy|eat)  * influenza_foods_allowed * influenza *`,
        `What is the impact of eating influenza_foods_allowed during influenza?`,  
        `What is the reason for eating or taking influenza_foods_allowed during influenza?`,  
        `What makes influenza_foods_allowed good when experiencing influenza?`,  
        `why influenza_foods_allowed is recommended to eat when having flu`,
        `tell me what are the foods or drinks that i can eat or take to recover from influenza`,
        `get me the list of foods or drinks that i can eat when having influenza`,
        `show me the list of foods or drinks that i can eat if i feel influenza`,
        `tell me the foods or drinks that i can eat when having influenza`,
        `what are the foods or drinks that i can take when having influenza`,
        `what fruits, snacks, desers, meals, can i take when feeling influenza`,
        `tell me what foods or drinks can treat my influenza`
    ],[
        `There are several foods that may help you recover quicker. You may consider taking several foods. Broths and soup made from chicken, beef, and vegetable may prevent dehydration and its warmth may relieve congestion and sooth sore throat. You may also take garlic since it can enhance immunity nad reduce the serverity of symptoms. Foods sources with probiotics such as yogurt may also help by promoting good gut bacteria that suppors your immune system. Fruits and vegatables containing vitamin c may also help. This include peppers, oranges, citrus, lemons, grapes and those dark leafy greens. You can also take broccoli. Furthermore, oatmeal contains immune-boosting nutrients like copper, iron, selenium, zinc fiber and protien. Additionally, you can also add spicesd such as ginger and turmeric in your food. Finally, always take fluids such as water to keep you hydrate`
    ],4),
    encodeMemory([
        `* (treat|take|good|eat) * food * influenza *`,
        `* food *  influenza  * (treat|take|good|eat) *`,
        `* food * (treat|take|good|eat) * influenza *`,
        `Are there any foods I should take when I have the flu?`,
        `Are there any specific foods that can help with flu?`,
        `Can my diet affect how quickly I recover from the flu?`,
        `Can you recommend some foods that will make me feel better when I have the flu?`,
        `Is there a specific diet I should follow when I have the flu?`,
        `What are some flu-fighting foods?`,
        `What are some good foods to eat when I have the flu?`,
        `What are some immune-boosting foods that can help with the flu?`,
        `What foods can I eat to help me recover from the flu?`,
        `get me the list of foods that i can eat, drink take when having influenza`,
        `show me the list of foods what foods that i can eat , drink or take when feeling or having influenza`,
        `tell me about the foods that can be eaten when having influenza`,
        `tell me what foods i can eat or take when feeling influenza`,
        `what foods can i eat take and drink when having influenza`,
    ],[
        `There are several foods that may help you recover quicker. You may consider taking several foods. Broths and soup made from chicken, beef, and vegetable may prevent dehydration and its warmth may relieve congestion and sooth sore throat. You may also take garlic since it can enhance immunity nad reduce the serverity of symptoms. Foods sources with probiotics such as yogurt may also help by promoting good gut bacteria that suppors your immune system. Fruits and vegatables containing vitamin c may also help. This include peppers, oranges, citrus, lemons, grapes and those dark leafy greens. You can also take broccoli. Furthermore, oatmeal contains immune-boosting nutrients like copper, iron, selenium, zinc fiber and protien. Additionally, you can also add spicesd such as ginger and turmeric in your food. Finally, always take fluids such as water to keep you hydrate`
    ],4),
]

let section8 = [
    
    encodeMemory([
        `* avoid * influenza_foods_not_allowed * influenza *`,
        `* not * (take|buy|eat) * influenza_foods_not_allowed * influenza *`,
        `* influenza_foods_not_allowed * avoid * influenza *`,
        `* influenza_foods_not_allowed * not * (take|buy|eat) * influenza *`,
        `What are the benefits of not eating influenza_foods_not_allowed when you have influenza?`,
        `What are the reasons behind avoiding influenza_foods_not_allowed when you have influenza?`,
        `What is the impact of eating influenza_foods_not_allowed on influenza?`,
        `What is the reason for avoiding influenza_foods_not_allowed when you have influenza?`,
        `Why not to eat influenza_foods_not_allowed when you have influenza?`,
        `Why is it important to avoid influenza_foods_not_allowed when you have influenza?`,
        `Why is it recommended to not take influenza_foods_not_allowed when you have influenza?`,
        `Why should one not eat influenza_foods_not_allowed when having influenza?`,
        `tell my why should i avoid influenza_foods_not_allowed when having influenza`
    ],[
        `To help you recover, it is important that you take good care of yourself. You need to avoid those as it can aggravate your underlying health conditions`
    ],4),
    encodeMemory([
        `* avoid * influenza_foods_not_allowed_caffeinated_drinks * influenza *`,
        `* not * (take|buy|eat) * influenza_foods_not_allowed_caffeinated_drinks * influenza *`,
        `* influenza_foods_not_allowed_caffeinated_drinks* avoid * influenza *  `,
        `* influenza_foods_not_allowed_caffeinated_drinks* not * (take|buy|eat) * influenza *  `,
        `Can caffeinated drinks worsen the of influenza? Why?`,
        `Does consuming caffeinated drinks prolong the recovery time from influenza? Why?`,
        `How does consuming caffeinated drinks affect influenza ?`,
        `What are the risks of consuming influenza_foods_not_allowed_caffeinated_drinks when experiencing influenza?`,  
        `What are the risks of drinking caffeinated beverages when suffering from influenza?`,
        `What is the impact of eating influenza_foods_not_allowed_caffeinated_drinks during influenza?`,  
        `What is the reason for avoiding or not taking influenza_foods_not_allowed_caffeinated_drinks during influenza?`,  
        `What makes influenza_foods_not_allowed_caffeinated_drinks a food to avoid when experiencing influenza?`,  
        `What's the reason behind avoiding caffeinated drinks when having influenza?`,
        `Why are influenza_foods_not_allowed_caffeinated_drinks not recommended during influenza?`,  
        `Why is it advisable to avoid caffeinated drinks during influenza?`,
        `Why is it important to avoid caffeinated drinks when you have influenza?`,
        `Why should influenza_foods_not_allowed_caffeinated_drinks be excluded from the diet during influenza?`,  
        `Why should one stay away from caffeinated drinks when having influenza?`,
        `tell me why do i have ot avoid eating or taking influenza_foods_not_allowed_caffeinated_drinks`
    ],[
        `When you have a fever, you may experience elevated temperatures and increased sweating, dehydration is something to be cautious of when you have a fever. Caffeine and alcohol present in some drinks like cofee and soda can make your symptoms worse (especially stomach-related symptoms). Its better to sip water and clear liquids throughout the day.`
    ],4),
    encodeMemory([
        `* not * (take|buy|eat) * influenza_foods_not_allowed_greasy_foods  * influenza *`,
        `* avoid * influenza_foods_not_allowed_greasy_foods  * influenza *`,
        `* influenza_foods_not_allowed_greasy_foods * avoid * influenza * `,
        `* influenza_foods_not_allowed_greasy_foods * not * (take|buy|eat) * influenza * `,
        `Can greasy, deep fried or oily foods worsen  of influenza? Why?`,
        `Does consuming greasy, deep fried or oily foods prolong the recovery time from influenza? Why?`,
        `How does consuming greasy, deep fried or oily foods affect influenza?`,
        `What are the reasons behind avoiding influenza_foods_not_allowed_greasy_foods when you have influenza?`,
        `What are the risks of greasy, deep fried or oily foods when suffering from influenza?`,
        `What happens if you eat influenza_foods_not_allowed_greasy_foods when you have influenza?`,
        `What is the reason for avoiding influenza_foods_not_allowed_greasy_foods when you have influenza?`,
        `What's the reason behind avoiding greasy, deep fried or oily foods when having influenza?`,
        `Why is it advisable to avoid greasy, deep fried or oily foods during influenza?`,
        `Why not to eat influenza_foods_not_allowed_greasy_foods when you have influenza?`,
        `Why is it important to avoid influenza_foods_not_allowed_greasy_foods when you have influenza?`,
        `Why is it recommended to avoid influenza_foods_not_allowed_greasy_foods when you have influenza?`,
        `Why should one not eat greasy, deep fried or oily foods when having influenza?`,
        `Why should one refrain from eating influenza_foods_not_allowed_greasy_foods when having influenza?`,
        `tell me why do i have to avoid eating influenza_foods_not_allowed_greasy_foods when having influenza`,
        
    ],[
        `
        Oily foods can exacerbate symptoms such as sore throat, coughing, and congestion. Therefore, foods high in saturated fat should be avoided or limited. That means avoiding oily, fried, or greasy foods. Also, these can be harded to digest. Therefore, it is generally recommended to avoid these when experiencing influenza to support the body's healing process`
    ],4),
    encodeMemory([
        `* influenza_foods_not_allowed_hard_grains * avoid * influenza *  `,
        `* influenza_foods_not_allowed_hard_grains * not * (take|buy|eat) * influenza *  `,
        `* savoid * influenza_foods_not_allowed_hard_grains * influenza *`,
        `* not * (take|buy) * influenza_foods_not_allowed_hard_grains * influenza *`,
        `Why is it recommended to avoid influenza_foods_not_allowed_hard_grains when you have influenza?`,
        `What is the reason for avoiding influenza_foods_not_allowed_hard_grains when you have influenza?`,
        `Why not to eat influenza_foods_not_allowed_hard_grains when you have influenza?`,
        `What are the reasons behind not eating influenza_foods_not_allowed_hard_grains when you have influenza?`,
        `What happens if you eat influenza_foods_not_allowed_hard_grains when you have influenza?`,
        `Why should one refrain from eating influenza_foods_not_allowed_hard_grains when having influenza?`,
        `Why is it important to avoid eating influenza_foods_not_allowed_hard_grains when you have influenza?`,
        `What is the impact of eating influenza_foods_not_allowed_hard_grains on influenza?`,
        `Why is it important to avoid taking hard grains when having influenza?`,
        `What's the reason behind avoiding  taking or eating hard grains when having influenza?`,
        `What makes hard grains a bad choice to eat when dealing with influenza?`,
        `Why should you stay away from eating hard grains when you have influenza?`,
        `Why is it recommended to avoid eating hard grains during influenza?`,
        `tell me why should i not take hard grains when having influenza`,
        `tell me why should i not eat influenza_foods_not_allowed_hard_grains when having influenza`,
    ],[
        `The flu occasionally causes you to have an upset stomach, so sticking with foods that are easy to digest like simple/refined carbohydrates is recommended. Foods like dry saltine crackers, toast and pretzels are easy on your stomach and are most likely to be tolerated when you have the flu. It is also good to avoid fibrous foods for the time being.`
    ],4),
    encodeMemory([
        `* avoid * influenza_foods_not_allowed_sugary_foods * influenza *`,
        `* influenza_foods_not_allowed_sugary_foods * avoid * influenza * `,
        `* not * (take|buy|eat) * influenza_foods_not_allowed_sugary_foods * influenza *`,
        `* influenza_foods_not_allowed_sugary_foods * not * (take|buy) * influenza * `,
        `How does avoiding sweet foods help when you have the flu?`,
        `What are the benefits of avoiding or not eating sweet influenza_foods_not_allowed_sugary_foods when you have influenza?`,
        `What are the reasons behind avoiding influenza_foods_not_allowed_sugary_foods when you have influenza?`,
        `What effect do sweet foods have on the body when you have the flu?`,
        `What happens if you eat sweets foods when you have the flu?`,
        `What happens if you eat sweets when you have influenza?`,
        `What happens if you eat influenza_foods_not_allowed_sugary_foods when you have influenza?`,
        `What is the impact of eating influenza_foods_not_allowed_sugary_foods on influenza?`,
        `What is the reason behind avoiding or not eating sweet foods when you have the flu?`,
        `What is the reason for avoiding or not eating influenza_foods_not_allowed_sugary_foods when you have influenza?`,
        `Why  not to eat influenza_foods_not_allowed_sugary_foods when you have influenza?`,
        `Why is it important to avoid or not eat sweet foods when you have the flu?`,
        `Why is it important to avoid influenza_foods_not_allowed_sugary_foods when you have influenza?`,
        `Why is it recommended to avoid sweets foods when you have the flu?`,
        `Why is it recommended to not take influenza_foods_not_allowed_sugary_foods when you have influenza?`,
        `Why should one refrain from eating sweets or influenza_foods_not_allowed_sugary_foods when having influenza?`,
        `tell me why should i not take or eat sweets when having influenza`,
        `tell me why should i avoid or not take or eat influenza_foods_not_allowed_sugary_foods when having influenza`,
    ],[
        `Sugar-rich foods can weaken your immune system, which your body needs to fight off the flu. Eating too many sugary foods can also lead to inflammation, which can worsen symptoms like sore throat and cough. Additionally, sugary foods can cause spikes in blood sugar levels, which can lead to fatigue and other symptoms that can make it more difficult to recover from the flu.
        `
    ],4),
    encodeMemory([
        `* (not (take|buy|eat)|avoid) * foods * influenza *`,
        `* foods * (not (take|bu|eat)|avoid) * influenza *`,
        `* foods * (not (take|buy|eat)|avoid) * influenza *`,
        `* influenza * (not (take|buy|eat)|avoid) * foods *`,
        `* influenza * foods * (not (take|buy|eat)|avoid) *`,
        `Are there any foods that I should avoid when I have influenza?`,
        `Can you give me a list of foods to avoid or not eat take when I have the flu?`,
        `Can you tell me what foods to avoid when I have the flu?`,
        `I'm curious about which foods to avoid when I have influenza. Can you help me?`,
        `I'm not sure which foods to avoid or not eat when I have influenza`,
        `What are the foods that can make my influenza worse?`,
        `What foods should I avoid when I have influenza?`,
        `Which foods are not good to eat when I have the flu?`,
        `Which foods should I eliminate or remove from my diet when I have the flu?`,
        `tell me what foods i should not eat,take or avoid when having flu`,
        `show or get me the list of foods that i cannot take when having influenza`,
        `get me the list of foods that i should avoid or not eat when having flu`
    ],[
        `If you think you have flu, you need to avoid caffeinated drinks, alchohol, greasy foods, hard to digest grains, and sugary foods or sweets. Instead try to take broth-based soups to help place any fluids and sodium that you may lost.  Also try bland foods which includes white bread, potatoes, white rice, bananas, applesauce, lean meats like chicken and fish.`
    ],4),
]


let section9 = []


let section10 = [
    
    encodeMemory([
        `* influenza * problem *`,
        `* problem * influenza *`,
        `Who are the people most vulnerable to complications from the flu?`,
        `Who is at risk of developing complications from the flu?`,
        `Who is more likely to have serious complications from the flu?`,
        `Who is susceptible to severe flu?`,
        `Who may experience severe when they have the flu?`,
        `Whose health is at risk during flu season?`,
        `tell me about the problems when having influenza`,
        `tell me what could be the complications of flu`,
        `explain to me the potential complications of flu`,
        `who are those people who could experience problems with flu`,
        `tell me the list of people who are in danger of getting flu`,
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
