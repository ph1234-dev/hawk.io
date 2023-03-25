import { encodeMemory } from "@/api/configuration/model"

let section16 = [
    
    encodeMemory([
        "* why * (avoid|not (take|use)) * antibiotics * influenza *",
        "* why * (not (use|take|buy)|avoid) * antibiotics * influenza *"
    ],[
        "Antibiotics only work with bacteria Influenza is caused by virus so antibiotics wont work. Thus, it will not help you feel better. What you need is an antiviral."
    ],7),
    encodeMemory([
        "* why * (avoid|not (take|use)) * aspirin * ",
        "* why * (not (use|take|buy)|avoid) * aspirin *"
    ],[
        "Taking aspirin to treat such an infection greatly increases the risk of Reye's Syndrome which is a disease that causes brain and liver damage. "
    ],7),
    encodeMemory([
        "* why * (avoid|not (take|use)) * analgesics * ",
        "* why * (not (use|take|buy)|avoid) * analgesics *"
    ],[
        "Its okay to take analgesics. But do not take more than one drug containing acetaminophen. Acetaminophen overdose can cause liver damage."
    ],7),
    encodeMemory([
        "* why * (avoid|not (take|use)) * antihistamine * ",
        "* why * (not (use|take|buy)|avoid) * antihistamine *"
    ],[
        "Antihistamines are drugs which treat allergic rhinitis, common cold, influenza, and other allergies.   However, these medicines can make you sleepy. If you are working something that needs focus such as driving , you should probably avoid taking this medicine for the time being."
    ],7),
    encodeMemory([
        "* why * (avoid|not (take|use)) * decongestant * ",
        "* why * (not (use|take|buy)|avoid) * decongestant*"
    ],[
        "“Don’t use a nasal decongestant for more than two to three days, or else the nose becomes addicted to it.”. Besides an increased heart rate is a possible side effect of decongestant use, so these drugs should be avoided if you have high blood pressure, heart disease, or an irregular heartbeat."
    ],7),
    encodeMemory([
        "* who * not (take|use) * on_the_counter * influenza_drug *",
        "* who * not (take|use) * influenza_drugs *",
        "* who * avoid * on_the_counter * influenza_drug *",
        "* who * avoid * influenza_drugs *",
        "* influenza_drugs * not (take|use) * (who|by) *",
        "* influenza_drugs * avoid * (who|by) *",    
    ],[
        `According to the Center for Disease and Control, Flu antiviral drugs are prescription medicines (pills, liquid, an inhaled powder, or an intravenous solution) that fight against flu viruses in your body. Antiviral drugs are not sold over the counter. You can only get them if you have a prescription from a health care provider. Antiviral drugs are different from antibiotics, which fight against bacterial infections. Antiviral drugs for flu only work to treat flu. `
    ],7),
]

let section17 = []

let section18 = []

let section19 = []

let section20 = [
    
    encodeMemory([
        "* (what|how) * (treat|reduce|control) * fever * chills *",
        "* (what|how) * (treat|reduce|control) * chills *",
        "* (what|how) * (treat|reduce|control) * fever *"
    ],[
       `If you have fever, you may do the following:
       Check temperature every four (4) hours; You may drink paracetamol if your temperature reaches above 37.5-degree celsius, every four (4) hours. Take a bath daily if you can and if possible Ensure good ventilation and airflow in your room. Do not wear more layers of clothes. Drink a lot of water, fresh fruit juices, and mild teas.       
       `
    ],2),
    encodeMemory([
        "* (what|how) * (treat|reduce|control) * germs *"
    ],[
        `To keep gems away try wash your hands before eating, or touching your eyes, nose or mouth. Also, wash your hands after touching anyone who is sneezing, coughing or blowing their nose. Don't share things like towels, lipstick, toys, or anything else that might be contaminated with respiratory germs.
        Don't share food, utensils or beverage containers with others.
        `
    ],2),
    encodeMemory([
        "* (what|how) * (treat|reduce|control) * (stuffy|clogged) * nose *"
    ],[
        `Here is what you can do when you have runny or stuffy nose: You need to drink plenty of fluids to think out the mucus running in your sinus. Avoid drinking those that can dehydrate like coffe and alchoholic beverages. You can sip on medicated hot drinks,tea, or soups. Also try to take Vitamin C. The heat and steam can help decongest your airways. You also need to get plenty of rest. Apply warm compress. If you dont have a compress, try moistening a washcloth with warm water and apply it into your face several times a day to relieve nasal congestion.  You can also inhale steam to help thin out mucus and help you drain them. If you have humidifier you can also use it. You can also try to use a saline nasal spray to help nasal passages open. It is also known that eating spicy meal helps relieve clogged nose. So try it out. Lastly, always use the right over-the-counter medicines if you have access to nearest pharmacy.`
    ],2),
    encodeMemory([
        "* (what|how) * treat * nausea *"
    ],[
        `When trying to control nausea:

        Drink clear or ice-cold drinks.
        Eat light, bland foods (such as saltine crackers or plain bread).
        Avoid fried, greasy, or sweet foods.
        Eat slowly and eat smaller, more frequent meals.
        Do not mix hot and cold foods.
        Drink beverages slowly.
        Avoid activity after eating.
        Avoid brushing your teeth after eating.
        Choose foods from all the food groups as you can tolerate them to get adequate nutrition.
        `
    ],2),
    encodeMemory([
        "* (what|how) * treat * headache *"
    ],[
        `Each type of headache has different treatment methods that can be effective in treating headache pain.Tension headaches are also known as "hatband" headaches. This is because the pain from these headaches is located around the back of the head, the temples and forehead. They can last from a few hours to a few days. Some treatment options that are effective for tension headaches include physical therapy, muscle relaxants and over-the-counter pain releivers (aspirin and ibuprofen). Another type of headache is migrain headache. To relieve yourself, try to rest in a quite and darkroom, take hot or cold compress, and try massages.`
    ],2),
    encodeMemory([
        "* (what|how) * treat * abdominal cramp *"
    ],[
        "Most abdominal pain goes away without special treatment. However,there are still things you can do to relieve pain. Try to place a hot water bottle or heated wheat bag on your abdomen. Soak in a warm bath. Take care not to scald yourself. Drink plenty of clear fluids such as water. Reduce your intake of coffee, tea and alcohol as these can make the pain worse. When you are allowed to eat again, start with clear liquids, then progress to bland foods such as crackers, rice, bananas or toast. Get plenty of rest. "
    ],2),
]

let section21 = [
    encodeMemory([
        "* (what|how) * (treat|reduce|control) * influenza *"
    ],[
        `
        Two types of medication are used to treat the flu: symptom control medications and antiviral medications. You can pretty much manage influenza by your own. As I said there are over the counter medicines that can help ease symptoms such as fevers, aches and coughing. 

        You can take pain relievers to reduce fever, headache and body aches such as ibuprofen and acetaminophen (paracetamol ). 

        You can take decongestants to help open your nasal passages and relieve pressure in your sinuses. Cough suppressants such as robitussin can hel you sooth dry cough. Expectorants can also help by loosening thich mucus. 

        Antihistamines can also help by relieving such annoying symptoms as sneezing, itching, and nasal discharge. In regards to selfcare,  If you have the virus, you need to have adequate rest. 

        You should stay home until your fever has been gone for at least 24 hours, drink plenty of fluids, avoid exertion, eat healthy foods. However, going to see a doctor can better help you if your are feeling worse. They can prescribe you specific medication and directions.
        `
    ],2),
    encodeMemory([
        "* (what|how) * (cover) * sneeze *"
    ],[
        "It is highly recommended that you cover your mouth and nose when sneezing or coughing to prevent spread of the virus. You can sneeze or couch into a tissue. Make sure to dispose them properly.  If you don’t have a tissue, cough or sneeze in your elbow and not in your hands. Afterwards, wash your hands or use sanitizer."
    ],2),
    encodeMemory([
        "* (what|how) * (treat|reduce|control) * sore throat *"
    ],[
        "If you have sore throat, here is what you can do. Drink lots of water and other fluids to thin our mucus or soothe your dry throat. Take medicine as directed by your doctor.  Prop up your head on pillows to help you breath and ease a dry cough. Ty cough drops to soothe your throat. Stay away from any smoke.  You can also try gargling with warm water but we do not recommend children to do this.  "
    ],2),
    encodeMemory([
        "* (what|how) * (treat|reduce|control) * stiffness *"
    ],[
        "To manage body stiffness you may do the following. You may be able to treat muscle stiffness with rest, massage and application of heat and cold compress. Applying heat to muscle may help loosen tightness and applying cold to inflamed part of your body may reduce swelling."
    ],2),
]

export const data = 
    [].concat(section16)
        .concat(section17)
        .concat(section18)
        .concat(section19)
        .concat(section20)
        .concat(section21)

