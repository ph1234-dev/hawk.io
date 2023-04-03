import { encodeMemory } from "@/api/configuration/model"

let section16 = [
    encodeMemory([
        `* why * (avoid|not (take|use)) * diarrhea_drugs * diarrhea *`,
        `* why * (not (use|take|buy)|avoid) * diarrhea_drugs * diarrhea *`,
        // chatgpt start
        "Why are diarrhea_drugs not recommended for treating diarrhea?",
        "What are the reasons why we should avoid taking diarrhea_drugs for diarrhea?",
        "Can you explain why diarrhea_drugs should not be taken when experiencing diarrhea?",
        "What is the rationale behind not using diarrhea_drugs for diarrhea treatment?",
        "Why is it not advisable to take diarrhea_drugs for diarrhea?",
        "What are the potential risks of taking diarrhea_drugs when experiencing diarrhea?",
        "Is there a specific reason why diarrhea_drugs should not be taken during diarrhea?",
        "What are the possible side effects of taking diarrhea_drugs during diarrhea?",
        "Can you tell me why doctors do not recommend taking diarrhea_drugs for diarrhea?",
        "What is the explanation behind avoiding diarrhea_drugs when having diarrhea?"
        // chatgpt end
    ],[
        `Doctors generally do not recommend using over-the-counter medicines for people who have bloody stools or fever—signs of infection with bacteria or parasites.`
    ],7),
    encodeMemory([
        `* why * (avoid|not (take|use)) * diarrhea_drugs *`,
        `* why * diarrhea_drugs * (avoid|not (take|use)) *`,
        // chatgpt start
        "What are the reasons why diarrhea_drugs should not be taken?",
        "Why are diarrhea_drugs not recommended?",
        "What are the risks of taking diarrhea_drugs?",
        "Why should we avoid taking diarrhea_drugs?",
        "What are the side effects of diarrhea_drugs?",
        "Why is it not recommended to take diarrhea_drugs?",
        "What are the dangers of taking diarrhea_drugs",
        "Why are natural remedies preferred over adiarrhea_drugs?",
        "What are the potential complications of taking diarrhea_drugs?",
        "Why is it important to avoid taking diarrhea_drugs unless prescribed by a doctor?"
        // chatgpt end
    ],[
        `Anti-diarrheal drugs such as bismuth subsalicylate and  antimotility agents such as loperamide should be avoided in people with high fever or bloody diarrhea as they can worsen severe colon infections. In children, these should be avoided they can lead to complications of  hemolytic uremic syndrome in cases of Shiga-toxin E. col.`
    ],7),
    encodeMemory([
        `* who * not (take|use) * on_the_counter * drug *`,
        `* who * not (take|use) * diarrhea_drugs *`,
        `* who * avoid * on_the_counter * drug *`,
        `* who * avoid * diarrhea_drugs *`,
        `* diarrhea_drugs * not (take|use) * (who|by) *`,
        `* diarrhea_drugs * avoid * (who|by) *`,
        // chatgpt start
        "Who is not recommended to take on_the_counter drugs?",
        "What groups of people should avoid taking on_the_counter drugs?",
        "Are there any individuals who should not take on_the_counter drugs?",
        "Which people should not take on_the_counter drugs?",
        "What are the restrictions on taking on_the_counter drugs?",
        "Who should refrain from taking on_the_counter drugs?",
        "What are the contraindications for on_the_counter drugs?",
        "Who should consult a doctor before taking on_the_counter drugs?",
        "What are the risks of taking on_the_counter drugs?",
        "Who should be careful when taking on_the_counter drugs?"
        // chatgpt end
    ],[
        `People who have bloody stools or fever should not take on the counter drugs. `
    ],7),
    encodeMemory([
        `* what * treat * diarrhea *`,
        // chatgpt start
        "What can I take to treat diarrhea?",
        "What medications can help with diarrhea?",
        "How can I relieve diarrhea symptoms?",
        "What remedies are effective for treating diarrhea?",
        "What can I do to stop diarrhea?",
        "What are the best treatments for diarrhea?",
        "What can help soothe diarrhea?",
        "What are some natural remedies for diarrhea?",
        "What are the most effective ways to treat diarrhea?",
        "What should I take to cure diarrhea?"
        // chatgpt end
    ],[
        `You can take antimotility (imodium, loperamide) to slow the movement of food,  bismuth subsalicylate (pepto-bismol and kaopectate) to balance fluids moving through the digestive tract, glucose-electrolyte solutions to balance water sugar, and salts, hemorroid cream or petroleum jelly if your rectal area is sore, Oral rehydration solutions , priobiotics  and zinc supplements`
    ],1),
    encodeMemory([
        `* what * problem * diarrhea_drugs *`,
        // chatgpt start
        "What are the potential side effects of taking diarrhea_drugs",
        "Are there any risks associated with taking diarrhea_drugs for diarrhea?",
        "Can taking diarrhea_drugs cause any complications?",
        "What should I be aware of before taking diarrhea_drugs?",
        "Are there any dangers to taking diarrhea_drugs for diarrhea?",
        "What are the downsides of taking diarrhea_drugs for diarrhea?",
        "Can taking diarrhea_drugs for diarrhea be harmful?",
        "What are the possible adverse effects of taking diarrhea_drugs?",
        "Are there any precautions I should take before using diarrhea_drugs?",
        "What are the risks of using diarrhea_drugs to treat diarrhea?"
        // chatgpt end
    ],[
        `These can worsen severe colon infections. In children, these should be avoided they can lead to complications of hemolytic  uremic syndrome in cases of Shiga-toxin E. col.`
    ],7),
]


let section17 = []

let section18 = [
    encodeMemory([
        `* what * steps? * washing * hands *`,
        // chatgpt start
        "Can you explain the proper way to wash your hands?",
        "What is the correct method for washing your hands?",
        "What are the steps for washing your hands effectively?",
        "Could you walk me through the process of washing my hands?",
        "What's the procedure for washing your hands?",
        "What are the recommended steps for washing your hands?",
        "How do you properly wash your hands?",
        "What is the recommended way to wash your hands?",
        "What are the necessary steps to wash your hands correctly?",
        "Can you tell me how to wash my hands thoroughly?"
        // chatgpt end
    ],[
        `Lather with soap for at least 20 seconds.  After putting soap on your hands, rub your hands together for at least 20 seconds. This is about as long as it takes to sing "Happy Birthday" twice through. Use hand sanitizer when washing isn't possible. Use an alcohol-based hand sanitizer when you can't get to a sink. Apply the hand sanitizer as you would hand lotion, making sure to cover the fronts and backs of both hands. Use a product that contains at least 60% alcohol.`
    ],6),
]

let section19 = []

let section20 = [
    // encodeMemory([
    //     `* (what|how) * (treat|reduce|control) * fever * chills *`,
    //     `* (what|how) * (treat|reduce|control) * chills *`,
    //     `* (what|how) * (treat|reduce|control) * fever *`,
    //     // chatgpt start
    //     "What are the treatments for fever?",
    //     "How can I relieve a fever?",
    //     "What are some ways to reduce a fever?",
    //     "What medications can help with fever?",
    //     "What are some home remedies for fever?",
    //     "How can I bring down a fever?",
    //     "What are some natural ways to treat fever?",
    //     "What should I do if I have a fever?",
    //     "How do doctors treat fever?",
    //     "What are the best ways to manage a fever?",
    //     "What are the treatment options for fever?", 
    //     "How can you alleviate a fever?",  
    //     "What are some remedies for fever?",  
    //     "What are the best ways to treat fever?",  
    //     "How do you manage fever symptoms?",  
    //     "What medications can be used to treat fever?",  
    //     "What are some natural ways to treat fever?", 
    //     "How do you bring down a fever?",  
    //     "What should you do to treat a fever?",  
    //     "What are some effective treatments for fever?"
    //     // chatgpt end
    // ],[
    //     `You can drink plenty of fluids to stay hydrated. There are some over-the-counter (otc) pain relievers you can take to reduce discomfort. For example, you can ask your pharmacist for acetaminophen for pain relief. When you have a fever, apply damp, luke warm cloths to the forehead. Wear comfortable cloths. If you have chills, it is best to wear layers and keep warm. Then rest. you need plenty of rest to recover`
    // ],2),
    encodeMemory([
        `* (what|how) * (treat|reduce|control) * vomiting *`,
        // chatgpt start
        "What are the ways to stop vomiting?",
        "How can I manage vomiting?",
        "What are the remedies for vomiting?",
        "What can be done to control vomiting?",
        "How to prevent vomiting?",
        "What are the measures to stop vomiting?",
        "How to suppress vomiting?",
        "What can I do to manage vomiting?",
        "What are some anti-vomiting techniques?",
        "How to reduce vomiting?",
        "What to do to stop vomiting?",
        "What are some vomiting management strategies?",
        "What are some ways to ease vomiting?",
        "How to handle vomiting?",
        "What are some natural ways to control vomiting?"
        // chatgpt end
    ],[
        `1.Do not eat or drink anything for several hours after vomiting.

        2.Sip small amounts of water or suck ice chips every 15 minutes for 3-4 hours.
       
       3.Next, sip clear liquids every 15 minutes for 3-4 hours. Examples include water, sports drinks, flat soda, clear broth, gelatin, flavored ice, popsicles or apple juice. Do not drink citrus juices or milk. Increase fluids as tolerated.
       
        4.When you can tolerate clear liquids for several hours without vomiting and if you're hungry, try eating small amounts of bland foods. Try foods such as bananas, rice, applesauce, dry toast, soda crackers (these foods are called BRAT diet). For 24-48 hours after the last episode of vomiting, avoid foods that can irritate or may be difficult to digest such alcohol, caffeine, fats/oils, spicy food, milk or cheese.
       
        5.When you can tolerate bland food, you can resume your normal diet.
       `
    ],2),
    encodeMemory([
        `* (what|how) * treat * nausea *`,
        // chatgpt start
        // chatgpt end
    ],[
        `• Drink clear or ice-cold drinks.

        • Eat light, bland foods (such as saltine crackers or plain bread).
        
        • Avoid fried, greasy, or sweet foods.
        
        • Eat slowly and eat smaller, more frequent meals.
        
        • Do not mix hot and cold foods.
        
        • Drink beverages slowly.
        
        • Avoid activity after eating.
        
        • Avoid brushing your teeth after eating.
        
        • Choose foods from all the food groups as you can tolerate them to get adequate nutrition.
        `
    ],2),
    // encodeMemory([
    //     `* (what|how) * treat * headache *`,
    //     // chatgpt start
    //     // chatgpt end
    // ],[
    //     `1.  Apply a cold compress or ice pack to the pain site.

    //     2.  Drink fluids. If nausea makes it hard to drink, try sucking on ice.
        
    //     3.  Rest. Protect yourself from bright light and loud noises.
        
    //     4.  Calm your emotions by imagining a peaceful scene.
        
    //     5.  Massage tight neck, shoulder, and head muscles.
        
    //     6.  To relax muscles, soak in a hot bath or use a hot shower
        
    //     `
    // ],2),
    // encodeMemory([
    //     `* (what|how) * treat * abdominal cramp *`,
    //     // chatgpt start
    //     "What are some ways to alleviate abdominal cramps?",  
    //     "How can I relieve abdominal cramps?",  
    //     "What are some treatments for abdominal cramps?",  
    //     "What can I do to ease abdominal cramps?",  
    //     "How to manage abdominal cramps?",  
    //     "What remedies can be used to treat abdominal cramps?",  
    //     "What are some natural ways to treat abdominal cramps?",  
    //     "How to soothe abdominal cramps?",  
    //     "What medications are available to treat abdominal cramps?",  
    //     "What are some effective ways to treat abdominal cramps?",  
    //     "What are some home remedies for abdominal cramps?",  
    //     "What are some self-care measures for abdominal cramps?",  
    //     "How can I prevent abdominal cramps from occurring?",  
    //     "What dietary changes can help alleviate abdominal cramps?",  
    //     "What kind of exercises can help with abdominal cramps?"
    //     // chatgpt end
    // ],[
    //     `* Apply heat. It can help to relax your stomach muscles. This is particularly helpful if muscle strain or overuse  is causing your spasms.

    //     * Massaging your stomach muscles can help to relax them.
        
    //     * If your stomach spasms are caused by dehydration, replenishing  your electrolytes may help. Try drinking a sports drink like  Gatorade or eating a banana. Use caution, however, if you have  a history of kidney failure, because some electrolytes, particularly potassium, can rise to dangerous levels with supplements.
    //     `
    // ]),
    encodeMemory([
        `* what * take * vomit *`,
        // chatgpt start
        "What are some foods to eat after vomiting?",  
        "What can I eat after throwing up?",  
        "What foods should I consume after vomiting?",  
        "What should I eat after experiencing nausea and vomiting?",  
        "What are some recommended foods to eat after vomiting?",  
        "Which foods are safe to eat after vomiting?",  
        "What are some easily digestible foods to eat after vomiting?",  
        "What are some bland foods to eat after vomiting?",  
        "What are some healthy foods to eat after vomiting?",  
        "What can I eat to help my stomach after vomiting?",  
        "What foods should I avoid after vomiting?",  
        "What liquids should I consume after vomiting?",  
        "What are some recommended drinks to have after vomiting?",  
        "What should I avoid drinking after vomiting?",  
        "What can I eat to replenish my body after vomiting?"
        // chatgpt end
    ],[
        `try eating small amounts of bland foods. Try foods such as bananas, rice, applesauce, dry toast,soda crackers (these foods are called BRAT diet).`
    ],2),
    encodeMemory([
        `* what * food * (avoid|not take)  * nausea *`,
        // chatgpt start
        "What are some foods that can be eaten after experiencing nausea?",
        "What foods can I consume after feeling nauseous?",
        "What are some good foods to eat after nausea?",
        "What are the best foods to eat after experiencing nausea?",
        "Which foods are safe to eat after feeling nauseous?",
        "What foods are recommended to eat after nausea?",
        "What are some easy-to-digest foods to eat after feeling nauseous?",
        "Which foods can help alleviate nausea?",
        "What are some bland foods that can be eaten after experiencing nausea?",
        "What foods are gentle on the stomach after nausea?",
        "Which foods should I eat after nausea to avoid making it worse?",
        "What are some foods that won't upset my stomach after experiencing nausea?",
        "Which foods can help settle my stomach after feeling nauseous?",
        "What foods can help with nausea and provide necessary nutrition?",
        "What are some light foods that can be eaten after experiencing nausea?"
        // chatgpt end
    ],[
        `Eat light or bland foods (such as saltine crackers or plain bread).`
    ],4),
    encodeMemory([
        `* why * boil *`,
        // chatgpt start

        // chatgpt end
    ],[
        `Boiling is done to kill pathogenic bacteria, viruses and protozoa. Boiling water should be brought to a rolling boil for at least two (2) minutes `
    ],1),
    encodeMemory([
        `* how * boil * water *`,
        // chatgpt start
        "What's the proper way to boil water?",  
        "Can you explain how to boil water?", 
        "How do I boil water correctly?",  
        "What are the steps to boiling water?",  
        "What's the right method for boiling water?",  
        "Can you tell me how to properly boil water?",  
        "How can I boil water effectively?",  
        "What's the best way to boil water?",  
        "Can you walk me through boiling water?",  
        "What do I need to know to boil water?",  
        "How should I boil water?",  
        "Can you give me instructions on boiling water?",  
        "What's the correct process for boiling water?",  
        "What's the recommended way to boil water?",  
        "How can I ensure that I'm boiling water correctly?"
        // chatgpt end
    ],[
        `* If water is cloudy, let it settle and filter it through a clean cloth, paper boiling water towel, or coffee filter.

        * Bring water to a rolling boil for at least one minute. At altitudes above 5,000 feet (1,000 meters), boil water for three minutes.
        
        * Let water cool naturally and store it in clean containers with covers.  
        
        * To improve the flat taste of boiled water, add one pinch of salt to each quart or liter of water, or pour the water from one clean container to another several times.
        `
    ],1),
    encodeMemory([
        `* steps * disinfect * water *`,
        `* how * disinfect * water *`,
        // chatgpt start
        "How can I make water safe to drink?",
        "What are the steps to disinfect water?",
        "How do you purify water for drinking?",
        "What is the process of sanitizing water?",
        "How do I kill germs in water?",
        "What are some ways to treat water to make it safe?",
        "What chemicals can be used to disinfect water?",
        "How do you make sure water is clean enough to drink?",
        "What are the methods to decontaminate water?",
        "How can I remove bacteria and viruses from water?",
        "What steps should I take to make water potable?",
        "What are some effective ways to disinfect water?",
        "How do I ensure that water is free from harmful microorganisms?",
        "What are the precautions to take when disinfecting water?",
        "What is the best way to sanitize water for drinking?"      
        // chatgpt end
    ],[
        `1. Prepare a stock solution by dissolving 1 level of powdered  chlorine compounds (65% to 75%) to 1 liter of water.

        2. Add 2 teaspoons of stock solution to 5 gallons (20 liters) of water. Mix thoroughly and let it stand for at least 30 minutes before using.        
        `
    ],1),
    encodeMemory([
        `* what * use * disinfect * water *`,
        // chatgpt start
        "What are the methods of disinfecting water?",
        "What can be used to kill bacteria in water?",
        "What are some water disinfection techniques?",
        "Which chemicals can be used to disinfect water?",
        "How do you treat water for drinking?",
        "What are some ways to make water safe to drink?",
        "How can you make sure water is safe to drink?",
        "What are some home water disinfection methods?",
        "What are the steps to purify water?",
        "What disinfectants can be added to water?",
        "What are some natural ways to disinfect water?",
        "How do you clean and disinfect water?",
        "What can you do to make sure your drinking water is safe?",
        "What are some water purification methods?"
        // chatgpt end
    ],[
        `you can use chlorine `
    ],1),
]


export const data = 
  [].concat(section16)
    .concat(section17)
    .concat(section18)
    .concat(section19)
    .concat(section20)