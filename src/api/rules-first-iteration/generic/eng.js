import { encodeMemory } from "@/api/config/model"



// section 5
let data = []

// hydration
// data.push(encodeMemory([
//     `* hydrate * treat *`,
//     `* take * water * treat *`,
//     `How does drinking water help`,
//     `How does replenishing fluids help`,
//     `What is the role of water`,
//     `Why is it important to drink water`,
//     `Why is it important to stay hydrated`,
//     `tell or explain why hydrate`,
//     `what to do to hydrate`,
// ],[
//     `Staying hydrated is important to replenish fluid in your body. There are diseases like like diarrhea and influeza can cause the body to lose water and electrolytes. So it's best if you keep this in mind.  Drinking fluids, such as  water, buko juice, am, arrozcaldo, soups, sports drinks, broths, and oral rehydration solutions, can replace lost fluids and electrolytes and prevent it. It is also recommended to avoid beverages that can further irritate the stomach, such as alcohol, caffeine, and sugary drinks. Proper hydration can help relieve symptoms and prevent complications  that can arise from dehydration. `
// ],1))

// healthy food
// data.push(encodeMemory([
//     `* healthy * food  * treat * `,
//     `How does a healthy diet help `,
//     `How does eating a healthy diet help to treat `,
//     `What are some foods to avoid during diarrhea`,
//     `What are the benefits of eating a healthy diet`,
//     `What are the risks of not eating a healthy diet`,
//     `What is the role of a healthy diet in treating`,
//     `Why is it important to eat healthy`,
//     `tell why eat healthy food to treat conditions`
// ],[
//     `It's a vital thing to eat well because it supports your body's immune system. `
// ],1))

// consult doctor 
// data.push(encodeMemory([
//     `* consult * doctor *`,
//     `How can a doctor help me to treat `,
//     `What are the benefits of consulting a doctor for treatment`,
//     `When should I seek medical attention`,
//     `Why is self-diagnosing and self-treating not recommended`,
//     `tell or give reasons why consult doctors to treat conditions`
// ],[
//     `It has always been recommended to seek help from medical professionals. They can help diagnose and administer proper treatment for health conditions.`
// ],1))

// where to buy medicines
// data.push(encodeMemory([
//     `Are drugs available over the counter`,
//     `Can I find medication at a grocery store`,
//     `What stores sell medication`,
//     `Where can I buy medication`,
//     `Where can I find medication `,
//     `Where can I find or buy medicines `,
//     `Where can I purchase medication`,
//     `tell me where can i buy medicines or drugs`
// ],[
//     `Keep in mind that only buy medicines from reputable drug stores. Some grocery outlets may also have sections for medicines your can buy.`
// ],1))

// SYMPTOMS 

// 1. VOMITING
// https://uhs.umich.edu/diarrheavomiting#:~:text=Do%20not%20eat%20or%20drink,ice%2C%20popsicles%20or%20apple%20juice.

data.push(
    encodeMemory([
        `* (treat|reduce|control|TAKE) * vomit *`,
        // `How to manage, handle,prevent,reduce,supress vomiting`,
        `What are natural ways to treat manage control vomiting`,
        `What can be done to treat manage control vomiting`,
        `What to do treat manage control stop vomiting`,
        `how do i treat manage control vomit`,
        `how what do you treat manage control vomiting`,
        `what should i do when vomiting`,
    ],[
        `
        Vomiting is the involuntary forceful expulsion of the contents of one's stomach through the mouth and sometimes the nose which can deplete you of fluids and electrolytes. It is often a symptom of an underlying medical condition such as gastroenteritis, food poisoning, motion sickness, pregnancy, or certain medications.
        
        If you are experiencing vomiting, you may follow these guidelines. 
        
        1. Avoid eating or drinking for several hours after having it. 
        
        2. Try to sip small amounts of fluids like water, sports drinks, and borths, after. Remember not to drink citrus juices or milk.  Also, avoid foods that can irritate or may be difficult to digest such alcohol, caffeine, fats/oils, spicy food, milk or cheese. If you can tolerate drinking more water, try to drink more. 
        
        3. If you are hungry, try eating foods such as bananas, rice, dry toast, soda crackers. When you can tolerate bland food, then you can resume your normal diet. Bland foods include boiled or baked potatoes, white rice, plain pasta, cooked or canned fruits, cooked vegetables, and lean meats. These are easy for your stomach to digest.
        
        Remember that repeated vomiting requires medical treatment if it results in a lasting lightheaded feeling or weakness.
        `
    ],2)
)

// nausea
data.push(
    // nausea should be added in the dictionary
    encodeMemory([
        `* (treat|reduce|control|TAKE) * nausea *`,
        `How do I control or deal with nausea`,
        `What are tips or strategies for  treat manage control nausea`,
        `What can I do to  treat manage control to ease nausea`,
        `tell or explain how do you  treat manage control feeling nausea`,
        `what to do when treat manage control nausea`,
        `what to do whem feeling having nausea`,
    ],[
        // reference
        // https://www.urmc.rochester.edu/encyclopedia/content.aspx?contenttypeid=56&contentid=2939
        `
        Nausea is a sensation of discomfort in the stomach that often precedes vomiting. It can be caused by a variety of factors, such as motion sickness, digestive problems, medication side effects, and certain medical conditions. To alleviate nausea include resting, drinking water, sports drinks , and broths. Avoid fried , greasy foods and sweets. Try to eat bland foods such as saltine crackers or plain bread, in small amounts. Then rest by having your head elevated.`
    ],4),
)


// boiling water
data.push(
    encodeMemory([
        `* boil * water *`,
        `Can you give explain or tell me or walk me through how to properly boil water`,  
        `How can I boil water effectively`,  
        `How should I boil water`,  
        `What do I need to know to boil water`,  
        `What the best, recommended, or proper way to boil water`,  
        `What the correct process or right method for boiling water`,  
        `tell me why do you boil water`,
    ],[
        `Boiling is done to kill pathogenic bacteria, viruses and protozoa. If water appears cloudy, let it settle and filter it through a clean cloth, paper boiling water towel, or coffee filter. Then bring water to a rolling boil for at least one minute. Let water cool naturally and store it in clean containers with covers. To improve the flat taste of boiled water, add one pinch of salt to each quart or liter of water, or pour the water from one clean container to another several times.
        `
    ],1),
)

// disinfecting water
data.push(
    encodeMemory([
        `* disinfect * water *`,
        `How can I make water safe remove bacteria and viruses from water`,
        `How do you purify make sure water is clean enough to drink`,
        `What are effective ways to disinfect decontaminate water`,
        `What are the steps to disinfect water`,
        `What is the best way to sanitize water for drinking`,   
        `tell me how do you disinfect clean water`,
    ],[
        `
        Disinfecting water is important because it helps to remove harmful bacteria, viruses, and parasites that can cause serious illnesses such as cholera, typhoid, dysentery, and diarrhea. When water is not disinfected, it can become contaminated with these microorganisms and can spread diseases rapidly. Disinfection helps to reduce the risk of waterborne illnesses and ensures that the water is safe for consumption.

        You can disinfect water by using chlorine. You may do these by preparing a stock solution by dissolving 1 level of powdered  chlorine compounds (65% to 75%) to 1 liter of water. Then by adding 2 teaspoons of that stock solution to 5 gallons (20 liters) of water. Mix thoroughly and let it stand for at least 30 minutes before using.        
        `
    ],1)
)


// from influenza
// fever chills
data.push(
    // 
    encodeMemory([
        `* (treat|reduce|control) * fever *`,
        `How do you treat manage control relieve bring down a fever`,  
        `What are ways to treat remedies for fever`,
        `What are the best ways to manage or treat a fever`,
        `What are ways to reduce treat a fever`,
        'i feel fever and chills please tell me what to',
        'how to get better if i feel fever and chills',
        `tell me how do i treat manage control fever`,
    ],[
        `When you have a fever, apply damp, luke warm cloths to the forehead. Wear comfortable cloths. If you have chills, it is best to wear layers and keep warm. Then rest. you need plenty of rest to recover.
        
        Also, you can drink plenty of fluids to stay hydrated. There are some over-the-counter (otc) pain relievers you can take to reduce discomfort. For example, you can ask your pharmacist for acetaminophen for pain relief.
        `
    ],2)
)


//  nose
data.push(
    // add to dictionary stuffed or clogged
    encodeMemory([
        `* (treat|reduce|control) * clog * nose *`,
        `How can I treat manage , control relieve, alleviate or bring down stuffed or clogged nose`,
        `How what do you treat manage control  stuffed or clogged nose`,  
        `What are natural ways remedies for stuffed or clogged nose`,
        `What should you do to treat manage control a stuffed or clogged nose`,  
    ],[
        `
        A clogged nose happens where there is an obstruction or blockage in the nasal passages. It is also known as nasal congestion and can be caused by various factors such as allergies, colds, flu, sinus infections, and other respiratory illnesses. Symptoms of a clogged nose include difficulty breathing, a runny or stuffy nose, pressure or pain around the nasal area, and decreased sense of smell or taste. 

        To manage clogged nose, You need to drink plenty of fluids to think out the mucus running in your sinus. Avoid drinking those that can dehydrate like coffe and alchoholic beverages. You can sip on medicated hot drinks,tea, or soups. Also try to take Vitamin C. The heat and steam can help decongest your airways. You also need to get plenty of rest. Apply warm compress. If you dont have a compress, try moistening a washcloth with warm water and apply it into your face several times a day to relieve nasal congestion.  You can also inhale steam to help thin out mucus and help you drain them. If you have humidifier you can also use it. You can also try to use a saline nasal spray to help nasal passages open. It is also known that eating spicy meal helps relieve clogged nose. So try it out. Lastly, always use the right over-the-counter medicines if you have access to nearest pharmacy.`
    ],2)
)


// headache
data.push(
    encodeMemory([
        `* (treat|manage|control) * (head|headache) *`,
        `How can I treat manage control deal with a headache or painful head`,
        `How do I manage treat reduce the pain of a headache or head pains`,  
        `What are tips for treat manage control headache or head pains`,   
        `What steps can I take to relieve a headache  or head pains`,  
        'i headache or pain in my head  please tell me what to',
        `what to do if feeling painful hurt headache treat manage control`,
    ],[
        `Each type of headache has different treatment methods that can be effective in treating headache pain.Tension headaches are also known as hatband headaches. This is because the pain from these headaches is located around the back of the head, the temples and forehead. They can last from a few hours to a few days. Some treatment options that are effective for tension headaches include physical therapy, muscle relaxants and over-the-counter pain releivers (aspirin and ibuprofen). Another type of headache is migrain headache. To relieve yourself, try to rest in a quite and darkroom, take hot or cold compress, and try massages.`
    ],2),
)


// abdominal crams
data.push(
    encodeMemory([
        `* (treat|manage|control)  * abdominal *`,
        `How can I prevent or relieve abdominal cramps from occurring`,  
        `How What to treat manage control abdominal cramps`,  
        'how to get better treat manage control if i feel stomach or abdominal cramps',
        `i dont feel like my stomach is doing well treat manage control`,
        `my stomach hurts dont feeling well`,
        `what to treat manage control if feeling abdominal cramps`,
    ],[
        `Most abdominal pain goes away without special treatment. However,there are still things you can do to relieve pain. Try to place a hot water bottle or heated wheat bag on your abdomen. Soak in a warm bath. Take care not to scald yourself. Drink plenty of clear fluids such as water. Reduce your intake of coffee, tea and alcohol as these can make the pain worse. When you are allowed to eat again, start with clear liquids, then progress to bland foods such as crackers, rice, bananas or toast. Get plenty of rest. `
    ],2),
)

// sore throat
data.push(
    encodeMemory([
        `* (treat|reduce|control) * sore throat *`,
        `How What can I treat manage control relieve a sore throat`,  
        `What treat manage control are there for a sore throat`,  
        'how to get better i have sore throat please tell me what to',
        `my thoart is sore , painful or hurts`,
        `i feel sore throat tell me how do you treat manage control sore throat`,
        `what to do if feeling sore throat`,
    ],[
        `If you have sore throat, here is what you can do. Drink lots of water and other fluids to thin our mucus or soothe your dry throat. Take medicine as directed by your doctor.  Prop up your head on pillows to help you breath and ease a dry cough. Try cough drops to soothe your throat. Stay away from any smoke.  You can also try gargling with warm water but we do not recommend children to do this.  `
    ],2),
)

// stiffness
// data.push(
//     encodeMemory([
//         `* (treat|reduce|control) * stiffness *`,
//         `How can I loosen up or alleviate my body stiffness`,
//         `What are home remedies for reducing body stiffness`,
//         `What are strategies or techniques for reducing or lessen body stiffness`,
//         `What are ways to decrease or relieve body stiffness`,
//         `What can I do to ease body stiffness`,
//         `What exercises can help reduce body stiffness`,
//         `What stretches can I do to alleviate body stiffness`,
//         `tell me what do i do when i feel  body stiffness`,
//         'i have body stiffness please tell me what to',
//         'how to get better if i feel  body stiffness',
//         `what to do if feeling stiffness`,
//         `what to do when having stiffness`,
//     ],[
//         `To manage body stiffness you may do the following. You may be able to treat muscle stiffness with rest, massage and application of heat and cold compress. Applying heat to muscle may help loosen tightness and applying cold to inflamed part of your body may reduce swelling.`
//     ],2),
// )


// SNEEZE
data.push(
    encodeMemory([
        `* cover * sneeze *`,
        `How should you cover your mouth when you sneeze`,
        `What is the proper correct way to sneeze `,
        `tell explain why do you need to cover when sneezing or coughing`,
        `why is it necessary to cover when sneezing or coughing`,
    ],[
        `It is highly recommended that you cover your mouth and nose when sneezing or coughing to prevent spread of the virus. You can sneeze or couch into a tissue. Make sure to dispose them properly.  If you don’t have a tissue, cough or sneeze in your elbow and not in your hands. Afterwards, wash your hands or use sanitizer.`
    ],2),
)


data.push(
    encodeMemory([
        `* wash * hands *`,
        `Can you tell explain the proper way to wash your hands`,
        `Could you walk me through the process of washing my hands`,
        `What are the correct necessary recommended steps to wash your hands correctly`,
        `give tell me the list of steps on how to wash hands`,
        `How what to do wash hands`,
    ],[
        `Washing your hands often will help protect you from germs. To properly do it , lather with soap for at least 20 seconds. After putting soap on your hands, rub your hands together for at least 20 seconds. This is about as long as it takes to sing Happy Birthday twice. Use hand sanitizer when washing isn't possible. Use an alcohol-based hand sanitizer when you can't get to a sink. Apply the hand sanitizer as you would hand lotion, making sure to cover the fronts and backs of both hands. Use a product that contains at least 60% alcohol. `
    ],6)
)

// GENERAL CONVERSATIONS
// treatments
// data.push(
//     encodeMemory([
//         `* (medicine|treaments) *`,
//     ],[
//         `Ah, medicines. The thing that everbody seem to ask to help them feel better. They often treat various medical conditions and alleviate symptoms. These control pain, reduce inflammation, fight infections, manage illnesses, and improve overall health. However, it's important to be cautious and aware of certain factors when taking medicine. 
        
//         If you have further questions, I can tell you about several of these like antimotilities, bismuth subsalicylate, antihistamines, analgesics, nsaids, decongestants, expectorants, antitussives, and lozenges.`
//     ],1)
// )

// medicines

// treatments
data.push(
    encodeMemory([
        `* symptoms *`,
        `* signs *`,
    ],[
        `Medical conditions have symptoms and signs. In order to help you better, please specifiy whether you were asking about diarrhea or influenza`
    ],1)
)

// symptoms
data.push(
    encodeMemory([
        `* (hi|hello) *`,
        `* good (evening|afternoon|morning) *`,
    ],[
        `Hello there! How can I help you? Im sorry if I am unable to catch everything you say. I am not that smart so lets help each other in our conversations`
    ],1)
)

// signs
// data.push(
//     encodeMemory([
//         `* who *`,
//         `* what * `,
//         `* where *`,
//         `* how *`,
//         `* when*`,
//     ],[
//         `I am sorry, it appears that I don't understand what you are saying. Try to be more descriptive by specifying whether oyu are asking about diarrhea or influenza`
//     ],1)
// )

// antimotilities
data.push(
    encodeMemory([
        `* antimotility *`,
    ],[
        `Im sorry, I did not undersand what you were asking about antimotilities`
    ],1)
)

// bismuth 
data.push(
    encodeMemory([
        `* bismuth *`,
    ],[
        `Im sorry, I did not undersand what you were asking about bismuth subsalicylate`
    ],1)
)

// antihistamines
data.push(
    encodeMemory([
        `* antihistamines *`,
    ],[
        `I did not catch what you were saying. Sorry. Could you please tell me again what you were saying about bismuth subsalicylate`
    ],1)
)

// analgesics
data.push(
    encodeMemory([
        `* analgesics *`,
    ],[
        `I did not catch what you were saying about analgesics. Sorry.`
    ],1)
)
// nsaids
data.push(
    encodeMemory([
        `* nsaids *`,
    ],[
        `I did not catch what you were saying about analgesics. Sorry.`
    ],1)
)

// decongestants
data.push(
    encodeMemory([
        `* decongestants *`,
    ],[
        `I know you were telling me about decongestants, but I don't quite understand what you were saying. Sorry`
    ],1)
)

// expectorants
data.push(
    encodeMemory([
        `* expectorants *`,
    ],[
        `I know you were telling me about expectorants, but I don't quite understand what you were saying. Sorry`
    ],1)
)

// anttussives
data.push(
    encodeMemory([
        `* antitussives *`,
    ],[
        `Sorry, I dont quite understand what you were saying about antitussives.`
    ],1)
)

// lozenges
data.push(
    encodeMemory([
        `* lozenges *`,
    ],[
        `Sorry, I dont quite understand what you were saying about lozenges.`
    ],1)
)

// help
data.push(
    encodeMemory([
        `* (help|do) *`,
    ],[
        `I would like to help but I need more information. You can ask me about diarrhea and influenza. I can tell you what can you do to help you feel better. `
    ],1)
)


// what is diarrhea
data.push(
    encodeMemory([
        `*diarrhea*`,
    ],[
        `Im sorry, I dont quite understand what you are saying about diarrhea. To help you better, try to rephrase or be a little specific on your queries like asking treatments, general advices, things you can and cannot eat when feeling sick.`
    ],1))


// what is diarrhea
data.push(
    encodeMemory([
        `* influenza *`,
    ],[
        `Im sorry,I dont quite understand what you are saying about influenza. To help you better, try to rephrase or be a little specific on your queries like asking treatments, general advices, things you can and cannot eat when feeling sick.`
    ],1))


data.push(
    encodeMemory([
        `*vomit*`,
    ],[
        `Im sorry, but it appears that I dont quite understand what you are trying to tell me about vomiting due to my limited knowledge. However, I can tell you what you can do or how to manage it.`
    ],1)
)


data.push(
    encodeMemory([
        `*headache*`,
    ],[
        `Im sorry, but it appears that I dont quite understand what you are trying to tell me about headache due to my limited knowledge. However, I can tell you what you can do or how to manage it.`
    ],1)
)


data.push(
    encodeMemory([
        `* abdomen *cramps*`,
        `* cramps * abdomen*`,
        `* stomach * `
    ],[
        `Im sorry, but it appears that I dont quite understand what you are trying to tell me about abdominal cramps due to my limited knowledge. However, I can tell you what you can do or how to manage it.`
    ],1)
)

data.push(
    encodeMemory([
        `*stiffness*`,
    ],[
        `Im sorry, but it appears that I dont quite understand what you are trying to tell me about stiffness due to my limited knowledge. However, I can tell you what you can do or how to manage it.`
    ],1)
)


data.push(
    encodeMemory([
        `*clogged*`,
    ],[
        `Im sorry, but it appears that I dont quite understand what you are trying to tell me about clogged nose due to my limited knowledge. However, I can tell you what you can do or how to manage it.`
    ],1)
)

data.push(
    encodeMemory([
        `*nausea*`,
    ],[
        `Im sorry, but it appears that I dont quite understand what you are trying to tell me about nausea due to my limited knowledge. However, I can tell you what you can do or how to manage it.`
    ],1)
)


// catch all
data.push(
    encodeMemory([
        `*`,
    ],[
        `Sorry, it appears that I don't understand what you are saying.`
    ],1))

export let eng = [].concat(data)