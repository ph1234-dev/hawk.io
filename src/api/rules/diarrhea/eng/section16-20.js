import { encodeMemory } from "@/api/configuration/model"

let section16 = [
    encodeMemory([
        `* why * (avoid|not (take|use)) * diarrhea_drugs * diarrhea *`,
        `* why * (not (use|take|buy)|avoid) * diarrhea_drugs * diarrhea *`,
    ],[
        `Doctors generally do not recommend using over-the-counter medicines for people who have bloody stools or fever—signs of infection with bacteria or parasites.`
    ],7),
    encodeMemory([
        `* why * (avoid|not (take|use)) * diarrhea_drugs *`,
        `* why * diarrhea_drugs * (avoid|not (take|use)) *`
    ],[
        `Anti-diarrheal drugs such as bismuth subsalicylate and   antimotility agents such as loperamide should be avoided in people with high fever or bloody diarrhea as they can worsen severe colon infections. In children, these should be avoided they can lead to complications of  hemolytic uremic syndrome in cases of Shiga-toxin E. col.`
    ],7),
    encodeMemory([
        `* who * not (take|use) * on_the_counter * drug *`,
        `* who * not (take|use) * diarrhea_drugs *`,
        `* who * avoid * on_the_counter * drug *`,
        `* who * avoid * diarrhea_drugs *`,
        `* diarrhea_drugs * not (take|use) * (who|by) *`,
        `* diarrhea_drugs * avoid * (who|by) *`,
    ],[
        `People who have bloody stools or fever should not take on the counter drugs. `
    ],7),
    encodeMemory([
        `* what * treat * diarrhea *`
    ],[
        `You can take antimotility (imodium, loperamide) to slow the movement of food,  bismuth subsalicylate (pepto-bismol and kaopectate) to balance fluids moving through the digestive tract, glucose-electrolyte solutions to balance water sugar, and salts, hemorroid cream or petroleum jelly if your rectal area is sore, Oral rehydration solutions , priobiotics  and zinc supplements`
    ],1),
    encodeMemory([
        `* what * problem * diarrhea_drugs *`
    ],[
        `These can worsen severe colon infections. In children, these should be avoided they can lead to complications of hemolytic  uremic syndrome in cases of Shiga-toxin E. col.`
    ],7),
]


let section17 = [

]

let section18 = [
    encodeMemory([
        `* what * steps? * washing * hands *`
    ],[
        `Lather with soap for at least 20 seconds.  After putting soap on your hands, rub your hands together for at least 20 seconds. This is about as long as it takes to sing "Happy Birthday" twice through. Use hand sanitizer when washing isn't possible. Use an alcohol-based hand sanitizer when you can't get to a sink. Apply the hand sanitizer as you would hand lotion, making sure to cover the fronts and backs of both hands. Use a product that contains at least 60% alcohol.`
    ],6),
]

let section19 = [
    
]

let section20 = [
    encodeMemory([
        `* (what|how) * (treat|reduce|control) * fever * chills *`,
        `* (what|how) * (treat|reduce|control) * chills *`,
        `* (what|how) * (treat|reduce|control) * fever *`
    ],[
        `You can drink plenty of fluids to stay hydrated. There are some over-the-counter (otc) pain relievers you can take to reduce discomfort. For example, you can ask your pharmacist for acetaminophen for pain relief. When you have a fever, apply damp, luke warm cloths to the forehead. Wear comfortable cloths. If you have chills, it is best to wear layers and keep warm. Then rest. you need plenty of rest to recover`
    ],2),
    encodeMemory([
        `* (what|how) * (treat|reduce|control) * vomiting *`
    ],[
        `1.Do not eat or drink anything for several hours after vomiting.

        2.Sip small amounts of water or suck ice chips every 15 minutes for 3-4 hours.
       
       3.Next, sip clear liquids every 15 minutes for 3-4 hours. Examples include water, sports drinks, flat soda, clear broth, gelatin, flavored ice, popsicles or apple juice. Do not drink citrus juices or milk. Increase fluids as tolerated.
       
        4.When you can tolerate clear liquids for several hours without vomiting and if you're hungry, try eating small amounts of bland foods. Try foods such as bananas, rice, applesauce, dry toast, soda crackers (these foods are called BRAT diet). For 24-48 hours after the last episode of vomiting, avoid foods that can irritate or may be difficult to digest such alcohol, caffeine, fats/oils, spicy food, milk or cheese.
       
        5.When you can tolerate bland food, you can resume your normal diet.
       `
    ],2),
    encodeMemory([
        `* (what|how) * treat * nausea *`
    ],[
        `• Drink clear or ice-cold drinks.

        • Eat light, bland foods (such as saltine crackers or plain bread).
        
        • Avoid fried, greasy, or sweet foods.
        
        • Eat slowly and eat smaller, more frequent meals.
        
        • Do not mix hot and cold foods.
        
        • Drink beverages slowly.
        
        • Avoid activity after eating.
        
        • Avoid brushing your teeth after eating.
        
        • Choose foods from all the food groups as you 
            can tolerate them to get adequate nutrition.
        `
    ],2),
    encodeMemory([
        `* (what|how) * treat * headache *`
    ],[
        `1.  Apply a cold compress or ice pack to the pain site.

        2.  Drink fluids. If nausea makes it hard to drink, try sucking on ice.
        
        3.  Rest. Protect yourself from bright light and loud noises.
        
        4.  Calm your emotions by imagining a peaceful scene.
        
        5.  Massage tight neck, shoulder, and head muscles.
        
        6.  To relax muscles, soak in a hot bath or use a hot shower
        
        `
    ],2),
    encodeMemory([
        `* (what|how) * treat * abdominal cramp *`
    ],[
        `* Apply heat. It can help to relax your stomach muscles. This is particularly helpful if muscle strain or overuse  is causing your spasms.

        * Massaging your stomach muscles can help to relax them.
        
        * If your stomach spasms are caused by dehydration, replenishing  your electrolytes may help. Try drinking a sports drink like  Gatorade or eating a banana. Use caution, however, if you have  a history of kidney failure, because some electrolytes,    particularly potassium, can rise to dangerous levels with supplements.
        `
    ]),
    encodeMemory([
        `* what * take * vomit *`
    ],[
        `try eating small amounts of bland foods. Try foods such as bananas, rice, applesauce, dry toast,soda crackers (these foods are called BRAT diet).`
    ],2),
    encodeMemory([
        `* what * food * (avoid|not take)  * nausea *`
    ],[
        `Eat light or bland foods (such as saltine crackers or plain bread).`
    ],4),
    encodeMemory([
        `* why * boil *`
    ],[
        `Boiling is done to kill pathogenic bacteria, viruses and protozoa. Boiling water should be brought to a rolling boil for at least two (2) minutes `
    ],1),
    encodeMemory([
        `* how * boil * water *`
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
    ],[
        `1. Prepare a stock solution by dissolving 1 level of powdered  chlorine compounds (65% to 75%) to 1 liter of water.

        2. Add 2 teaspoons of stock solution to 5 gallons (20 liters) of water. Mix thoroughly and let it stand for at least 30 minutes before using.        
        `
    ],1),
    encodeMemory([
        `* what * use * disinfect * water *`
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