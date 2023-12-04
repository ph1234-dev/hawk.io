import { encodeMemory } from "@/api/config/model"


let section11 = [
    // antihistamine
    // encodeMemory([
    //     `* generic * antihistamine *`,
    //     `tell show give about What are common names generic list antihistamine`, 
    // ],[
    //     `Citerizine is one of the popular generic antihistamines you can buy.It is important to note that these medications may have different brand names depending on the country and manufacturer.If you feel like having influenza , get plenty of rest, stay hydrated, move away from smokes. It is always best to consult with a doctor or pharmacist before taking any medication. 
    //     `
    // ],7),
    // encodeMemory([
    //     `* branded * antihistamine *`,
    //     `tell show give about What are common names branded list antihistamine`, 
    // ],[
    //     `Benadryl is one of the popular branded antihistamine you can buy.It's important to note that antihistamines should only be taken under the guidance of a healthcare professional. Also, if you feel like having influenza , get plenty of rest, stay hydrated, move away from smokes. `
    // ],7),
    encodeMemory([
        
        `* (what|how) * (dosing|take|direction) * antihistamine *`,
        `* (direction|dosing|take) * antihistamine *`,
        `* antihistamine * direction *`,
        // `Are there any special instructions for taking antihistamines`,
        `tell guide explain the proper dosage way of on taking antihistamine`,
        // `Can you tell me how to properly take antihistamine`,
        // `How much antihistamine should I take`,
        `How often should I take antihistamine`,
        `What is the correct way appropriate recommended frequency dosage of antihistamine`,
        // `What is the safe dosage for antihistamine`,
        // `What is the standard dosage of antihistamine`,   
        // `tell me about how to eat antihistamines`,
    ],[
        `Antihistamines like Citerizine and Benadryl can be taken with food, a glass of water or milk to lessen stomach irritation if necessary. For cetirizine, here is how you can take it. 6 years of age and older can have 5 to 10 miligrams once a day. Those who are 4-6 years old can take maximum of 5mg once or 2.5mg twice a day. Those who are younger than that (4 below) should not take this medicine.
        
        The information I represented is an example of how you take it. Proper dosage must be observed. If you have further questions, please refer to your healthcare provider. 
        `
    ],7),
    encodeMemory([
        `* antihistamine *`,
        `explain tell definition describe exactly what about antihistamine`,  
    ],[
        `Antihistamines ,like Citerizine and Benadryl , are a class of drugs commonly used to treat symptoms of allergies. These drugs help treat conditions caused by too much histamine, a chemical created by your body’s immune system. Antihistamines are most commonly used by people who have allergic reactions to pollen and other allergens. They are also used to treat a variety of other conditions such as stomach problems, colds, anxiety and more. Antihistamines come in several forms including liquids, lotions, syrups, gels, eyedrops, tablets, capsules, creams, and suppositories`
    ],7),
    encodeMemory([
        `* use * antihistamine *`,
        `* antihistamine *`,
        `explain What where are antihistamine and how do they work used`,
        `What conditions are treated help with antihistamine`,
    ],[
        `Antihistamines are used to relieve or prevent the symptoms of hay fever and other types of allergy. They work by preventing the effects of a substance called histamine, which is produced by the body. Histamine can cause itching, sneezing, runny nose, and watery eyes. Also, in some persons histamine can close up the bronchial tubes (air passages of the lungs) and make breathing difficult. This medicine come in several forms including liquids, lotions, syrups, gels, eyedrops, tablets, capsules, creams, and suppositories`
    ],7),
    encodeMemory([
        `* work * treat *`,
        `* antihistamine * work *`,,  
        `explain What is the purpose of antihistamine`,  
        `tell me how does antihistamines treat`,
    ],[
        `Antihistamines are not typically used to treat influenza. Antihistamines are used relieve some of the symptoms of allergies, such as sneezing, runny nose, and itching, but they are not effective against the flu virus. These medicines work by blocking histamines which are released by the body during allergic reactions. Additionally, other medications such as pain relievers and fever reducers may be used to manage symptoms.
        `
    ],7),
    encodeMemory([
        `* avoid * antihistamine *`,
        `* not * (take|use) *  antihistamine *`,
        `When is it unsafe inappropriate not recommended to take antihistamine`,
        `Why should I be careful when taking antihistamines`,
        `tell me reasons why necessary to avoid having eating taking antihistamine`,
        `tell me why antihistamines can be dangerous`,
    ],[
        `Most people can safely take antihistamines. However, people who are pregnant, breastfeeding, young child, taking other medicines, have underlying conditions such as heart disease, liver disease, kidney disease or epilepsy may need to be cautious when taking this.`
    ],7),
    encodeMemory([
        `*effect * antihistamine *`,
        `What adverse reactions might occur when taking antihistamine`,   
        `give explain describe the list of potential side effects of antihistamines`,
        `tell me why antihistamines can be dangerous`,
    ],[
        `Antihistamines can cause side effects. It may vary depending on the drug taken. However, antihistamines can make you drowsy, dizzy, have a dry mouth, have a blurry vision, constipated,and difficulty in peeing. If you have any underlying medical conditions or are taking other medications, it is important to ask a doctor or pharmacist though.
        `
    ],7),
    encodeMemory([
        `* tips *  antihistamine *`,
        `How should I take antihistamines`,
        `tell What are some advices tips to keep in mind when taking antihistamines`,
    ],[
        `When taking this medicine, try to avoid alcohol, sedatives, and tranquilizers, due to increased risk of drowsiness. It may cause Central nervous system depression. So avoid activities requiring mental alertness. Be careful when patient has hepatic or renal impairment. Same with the elderly as they are more sensitive to adverse effects.`
    ],7),
    // encodeMemory([
    //     `* antihistamine * price *`,
    //     `How expensive are antihistamines`,
    //     `What is the average price cost of antihistamines`,
    // ],[
    //     `The price range for antihistamine varies from pharmacy to pharmacy. Antihistamines such as citerezine (10mg) costs around 15 pesos (according to watsons pharmacy). Benadryl , on the otherhand cost around 41 pesos for one tablet.`
    // ],7),
    // encodeMemory([
    //     `* forms * antihistamine *`,
    //     `Could you tell inform me of the various different forms  typesof antihistamines`,
    // ],[
    //     `Antihistamines come in several forms including liquids, lotions, syrups, gels, eyedrops, tablets, capsules, creams, and suppositories`
    // ],7),
    encodeMemory([
        `* alternative * antihistamine * `,
        `suggest any antihistamine alternative options besides antihistamine`,
        `What are some alternatives treatment options to antihistamines`,
        `What natural remedies are natural alternative to antihistamines`,
    ],[
        `Try taking Ginger. According to Sinus and Allergy Wellness Center, it is a natural histamine, potent antiviral agent and an immute booster. Ginger is a safe and highly effective herb that soothes the digestive system and improves circulation. You can make some ginger tea to alleviate nasal congestion and headaches. While you sip your tea, inhale the steam coming out of your cup. Also, try to use it with other herbs, such as turmeric, which is another powerful natural healer.`
    ],7),
    // analgesics rule 20 above
    // encodeMemory([
    //     `* generic * analgesics*`,
    //     `tell show give about What are common names generic list analgesics`, 
    // ],[
    //     `Some common generic analgesics include ibuprofen, acetaminophen, aspirin,paracetamol, naproxen, and ketoprofen. These medications work by blocking or reducing the body's production of prostaglandins, which are chemicals that cause inflammation and pain. By reducing the production of prostaglandins, these drugs can help to reduce pain and inflammation in the body.`,
    // ],7),
    // encodeMemory([
    //     `* branded * analgesics *`,
    //     `tell show give about What are common names branded list analgesics`, 
    // ],[
    //     `Some of the branded names of paracetamol is Biogesic and Calpol.These medications work by blocking or reducing the body's production of prostaglandins, which are chemicals that cause inflammation and pain. By reducing the production of prostaglandins, these drugs can help to reduce pain and inflammation in the body.`
    // ],7),
    encodeMemory([
        `* (what|how) * (direction|dosing|take) * analgesics *`,
        `* (direction|dosing|take) * analgesics *`,
        `Can you guide tell explain me how to properly use analgesics for pain relief`,
        `What is the safe and instructions guidelines dose analgesics taking analgesics`,
        `tell me about the correct dose proper way of taking analgesics`,
        `tell me how you use take analgesics`,
        //chatgpt end
    ],[
        `
        For ibuprofen an (NSAID) the maximum single dose is 400mg. For the entire day, its 1200mg. 
        
        For naproxen (NSAID) , you can take up to 500mg for single dose and 750mg for the entire day.
        
        For acetaminophen (paracetamol) you can take up 1000mg for single dose and 4000mg for the entire day.
        
        For aspirin, also known as acetylsalicylic acid , you can take up to 1000mg with maximum daily dose of 3000mg for people under 65 and 200mg for people over 65years old. 
        
        The information I represented is an example of how you take it. Proper dosage must be observed. If you have further questions, please refer to your healthcare provider. 
        `
    ],7),
    encodeMemory([
        `* analgesics *`,
        `Tell explain give me information about analgesics and their uses.`,
    ],[
        `Analgesics, also called painkillers , such as ibuprofen, acetaminophen, aspirin,paracetamol, Biogesic and Calpol, are medications that relieve different types of pain — from headaches to injuries to arthritis. Anti-inflammatory analgesics reduce inflammation, and opioid analgesics change the way the brain perceives pain.Analgesics are available in many forms such as films, liquid, nasal sprays patches, pills, tablets, capsules, and powder mix.`
    ],7),
    encodeMemory([
        `* analgesics * use  *`,
        `tell me about What are the uses applications of analgesics`
    ],[
        `Over-the-counter painkillers ,such as ibuprofen, acetaminophen, aspirin,paracetamol, Biogesic and Calpol, can relieve acute pain. Their effectiveness will depend on things like the type and severity of the pain and the dose of the medication. Painkillers that are available without a prescription have been approved for the treatment of mild to moderate pain. They shouldn't be used for more than a few days in a row, and the specified maximum daily dose shouldn't be exceeded. These medicines comes in many forms such as films, liquid, nasal sprays patches, pills, tablets, capsules, and powder mix.`
    ],7),
    encodeMemory([
        `* analgesics * (treat|work) *`,
        `tell explain me how an analgesic help work  pain`, 
        `How do analgesics reduce treat manage pain`, 
    ],[
        `Analgesics, or pain relievers, can help alleviate the discomfort and fever associated with influenza. They work by blocking the production of certain chemicals in the body that cause pain and inflammation. Common analgesics used for influenza include acetaminophen, ibuprofen, and aspirin.  However, it is important to follow the recommended dosages and precautions, as some analgesics may not be suitable for certain individuals or may have adverse effects when used improperly.
        `
    ],7),
    encodeMemory([
        `* avoid * analgesics *`,
        `* not (take|use) * analgesics *`,
        `Are there any warnings against taking analgesics`,    
        `Can you tell me reasons when I should avoid taking analgesics`,  
        `When Why tell explain recommended a person should avoid analgesics`,
        `tell me why analgesics can be harmful`,
    ],[
        `According to WebMD , you should never take this medication for self-treatment of pain for longer than 10 days. You should not use this drug to self-treat a fever that lasts longer than 3 days. In these cases, consult a doctor because you may have a more serious condition`
    ],7),
    encodeMemory([
        `* what *effect *analgesics  *`,
        `Are there any common adverse side effects dangers of using taking analgesics`,
        `Do analgesics have any known harmful negative side effects`,
        `What are the negative effects complications of taking analgesics`,
        `What kind of unwanted side effects can occur analgesics produce`,
        `get tell me the list of side effects complications of analgesics`,
    ],[
        `Anti-inflammatory analgesics are generally safe. But they can cause side effects and complications, if you use them too often, for too long or in very large doses. These medicine can damage internal organs such as liver or kidney. It may also cause diarrhea or constipation, heart problems, hypersensitivity, nausea, upset stomach or heart burn, ringing in the ears, and stomach ulcers.`
    ],7),
    encodeMemory([
        `* what * tips * analgesics *`,  
        `Do you have any tips advice for taking analgesics`,  
        `give tell show What are tips advices things to keep in mind  when taking analgesics`,
    ],[
        `Take this medication by mouth. Drink a full glass of water (8 ounces/240 milliliters) with it unless your doctor tells you otherwise. Do not lie down for at least 10 minutes after you have taken this drug. If stomach upset occurs while you are taking this medication, you may take it with food or milk.`
    ],7),
    // encodeMemory([
    //     `* analgesics * price *`,
    //     `How expensive are analgesics`,
    //     `tell What is the average cost price of analgesics`,
    // ],[
    //     `According to Muramed and Watsons pharmacy, paracetamol such as biogesic may start at 4 pesos. Meanwhile, aspirin can start at 3.50 pesos as listed by watsons pharmacy. You, however, cannot buy this without prescription and the prices may vary depending on where you bought these.`
    // ],7),
    // encodeMemory([
    //     `* forms * analgesics *`,
    //     `Can you tell give me the various common different forms of analgesics`,
    // ],[
    //     `Analgesics are available in many forms such as films, liquid, nasal sprays patches, pills, tablets, capsules, and powder mix.`
    // ],7),
    encodeMemory([
        `* alternative * analgesics* `,
        `What are some alternative herbal medications that can be used instead of analgesics`,
        `tell get me the list of alternatives herbal subsitute for analgesics`,
        `tell me about recommend the natural remedies that are alternative to analgesics`
    ],[
        `The Philippine Institute of Traditional and Alternative Healthcare has indicated that you can Ampalaya, Yerba Buena, ulasimang bato or pansit-pansitan, and guava has an analagesic effects.`
    ],7),
    // nsaids names 
    // encodeMemory([
    //     `* generic * nsaid*`,
    //     `Can you give me some examples of generic NSAIDs`,
    //     `Can you provide me with a list of generic drugs nsaids `,
    //     `Can you tell me some generic name for nsaids `,
    //     `Could you provide me with a list of generic names for NSAIDs `,
    //     `I need to know the non brand name names of  nsaids `,
    //     `What are some common generic names of nsaids `,
    //     `What are some examples of generic  nsaids `,
    //     `What are some generic names of  nsaids `,
    //     `What are the generic names of nsaids `,
    //     `What are the generic names of some commonly used nsaids `,
    //     `What are the generic versions of popular NSAIDs `,
    //     `tell me about generic nsaids`,
    // ],[
    //     `NSAID has generic names such as ibuprofen, naproxen, and aspirin which are mostly over the counter anti-inflammatory drugs`
    // ],7),
    // encodeMemory([
    //     `* what * branded * nsaid*`,
    //     `Can you give me some examples of branded NSAIDs`,
    //     `Can you provide me with a list of brand names of NSAIDs`,
    //     `Could you provide me with a list of branded drugs for inflammation relief`,
    //     `I need to know the brand names of some NSAIDs`,
    //     `I'm trying to find branded NSAIDs. Can you help me`,
    //     `What are some commonly known brands of non-steroidal anti-inflammatory drugs`,
    //     `What are some examples of branded NSAIDs`,
    //     `What are some of the well-known brand names of NSAIDs`,
    //     `What are the brand names of some commonly prescribed NSAIDs`,
    //     `What are the brand versions of commonly used NSAIDs`,
    //     `tell me about branded nsaids`
    // ],[
    //     `Advil is a known ibuprofen. Meanwhile, Flanax Forte is a known brand for Naproxen.`
    // ],7),
    // encodeMemory([
    //     `* what * take * nsaid *`,
    //     `* what * direction * nsaid *`,
    //     `* what * dosing * nsaid *`,
    //     `* how * direction * nsaid *`,
    //     `* how * dosing * nsaid *`,
    //     `* how * take * nsaid *`,
    //     `* how * nsaid * take *`,
    //     `* what * direction * nsaid*`,
    //     `* what * dosing * nsaid*`,
    //     `Can I take analgesics with food  on an empty stomach`,
    //     `How much analgesic should I take`,
    //     `How often should I take analgesics`,
    //     `What are the instructions for taking analgesics`,
    //     `What is the proper way to take analgesics`,
    //     `What is the recommended dosage for analgesics`,
    //     `When should I take analgesics`,
    //     `tell me how do i take nsaids`,
    //     `tell me how to eat nsaids`,
    //     `tell me about the correct dosage of nsaids`,
    //     `what is the correct way of taking nsaids`,
    //     `tell me about the direction of taking nsaids`,
    // ],[
    //     `Here are some of the dosages you can follow. For ibuprofen an (NSAID) the maximum single dose is 400mg. For the entire day, its 1200mg. For naproxen (NSAID) , you can take up to 500mg for single dose and 750mg for the entire day. For aspirin, also known as acetylsalicylic acid, you can take up to 1000mg with maximum daily dose of 3000mg for people under 65 and 200mg for people over 65years old. The information I provided is an example of how you take this medicine. If you need further information or have underlying health condition please refer to your healthcare provider.
    //     `
    // ],7),
    // encodeMemory([
    //     `* nsaid*`,
    //     `Can you explain what NSAIDs are`,
    //     `Could you tell me about NSAIDs`,
    //     `How would you define NSAIDs`,
    //     `What are the purposes of NSAIDs`,
    //     `What can you tell me about NSAIDs`,
    //     `What exactly are NSAIDs`,
    //     `What is the definition of NSAIDs`,
    // ],[
    //     `Non-steroidal anti-inflammatory drugs (NSAIDs) are medicines that are widely used to relieve pain, reduce inflammation, and bring down a high temperature.`
    // ],7),
    // encodeMemory([
    //     `* what * nsaid* use *`,
    //     `How are NSAIDs used in managing pain`,
    //     `In what situations might NSAIDs be prescribed`,
    //     `What are the common uses of NSAIDs`,
    //     `What conditions can NSAIDs help alleviate`,
    //     `What do NSAIDs do and how are they used`,
    //     `What medical conditions are NSAIDs typically prescribed for`,
    //     `What types of inflammation and pain are NSAIDs effective at treating`,
    //     `When are NSAIDs typically recommended for use`,
    //     `tell me about where nsaids are used`
    // ],[
    //     `They're often used to relieve symptoms of headaches, painful periods, sprains and strains, colds and flu, arthritis, and other causes of long-term pain`
    // ],7),
    // encodeMemory([
    //     `* nsaids? * treat *`,
    //     `* nsaid* work *`,
    //     `How do nsaids affect the immune system`,
    //     `How do nsaids treat inflammation`,
    //     `How do nsaids work to relieve pain`,
    //     `What are NSAIDs and how do they work`,
    //     `What is the role of nsaids in inhibiting pain signals`,
    //     `tell me how nsaids treats`,
    //     `how does nsaid treat  influenza`,
    // ],[
    //     `NSAIDs block a specific enzyme called cyclooxygenase (or COX) used by the body to make prostaglandins. By reducing production of prostaglandins, NSAIDs help relieve the discomfort of fever and reduce inflammation and the associated pain.`
    // ],7),
    // encodeMemory([
    //     `* avoid * nsaid*`,
    //     `* not * (take|use) * nsaid*`,
    //     `Are there any circumstances where I should avoid NSAIDs altogether`,
    //     `Are there any conditions where I should avoid using NSAIDs`,
    //     `Can you tell me when it's not safe to take NSAIDs`,
    //     `In what scenarios are NSAIDs not recommended`,
    //     `Should I avoid NSAIDs if I have certain medical conditions`,
    //     `What are some situations where I should avoid taking NSAIDs`,
    //     `What are the  risks of taking NSAIDs in certain situations`,
    //     `When should I not take NSAIDs`,
    //     `tell me why is it important not to take nsaids`,
    //     `explain to me why should i not take nsaids`
    // ],[
    //     `NSAIDs are generally not recommended for people with kidney disease, heart failure, or cirrhosis, or for people who take diuretics. Some patients who are allergic to aspirin may be able to take selective NSAIDs safely, although this should be discussed in advance with a health care provider.`
    // ],7),
    // encodeMemory([
    //     `*effect *nsaid*`,
    //     `Are there any adverse effects associated with taking NSAIDs`,
    //     `Can you describe some of the common side effects of NSAIDs`,
    //     `Can you tell me about the risks and drawbacks of taking NSAIDs`,
    //     `Do NSAIDs have any harmful effects on the body`,
    //     `What are some of the side effects that may result from taking NSAIDs`,
    //     `What are the  negative consequences of using NSAIDs`,
    //     `What are the potential side effects of NSAIDs`,
    //     `What are the uses and effects of NSAIDs`,
    //     `What should I watch out for when taking NSAIDs to avoid any adverse reactions`,
    //     `tell me about the side effects nsaids`,
    //     `What are the potential risks and benefits of taking NSAIDs`,
    //     `tell to me why nsaids can be harmful`,
    // ],[
    //     `There's a risk of side effects from NSAIDs. These tend to be more common if you're taking high doses for a long time, or you're elderly or in poor general health. 
        
    //     The possible side effects include indigestions, stomach aches, stomach ulcers, headaches, drowsiness, dizziness, allergic reactions, it can also cause problems with your liver, kidneys or heart circulation, such as heart failure, heart attacks and strokes.
        
    //     Over-the-counter NSAIDs generally have fewer side effects than stronger prescription medicines.
    //     `
    // ],7),
    // encodeMemory([
    //     `* tips * nsaid*`,
    //     `Can you provide some advice on taking NSAIDs`,
    //     `What are some dos and don'ts in taking NSAIDs`,
    //     `What are the best practices in using NSAIDs`,
    //     `What are the important things to keep in mind when taking NSAIDs`,
    //     `What are the key factors to consider when taking NSAIDs`,
    //     `tell me tips or advices when taking nsaids`,
    //     `give me tips or advices when taking nsaids`
    // ],[
    //     `Do not mix one NSAID with another. For example, don't take aspirin or ibuprofen with any other nonsteroidal anti-inflammatory drugs.`
    // ],7),
    // encodeMemory([
    //     `* nsaid* price *`,
    //     `Can you give me an idea of how much NSAIDs cost`,  
    //     `How expensive are NSAIDs`,  
    //     `How much do NSAIDs typically cost`,  
    //     `How much money do I need to buy NSAIDs`,
    //     `What is the average price of NSAIDs`,  
    //     `What is the cost of NSAIDs`,  
    //     `What is the going rate for NSAIDs`,  
    //     `What is the market price of NSAIDs`,  
    //     `What is the price range of NSAIDs`,  
    //     `tell me about the price of nsaids`
    // ],[
    //     `Based on data from watsons, this medicine usually starts at 8php per piece`
    // ],7),
    // encodeMemory([
    //     `* forms * nsaid*`,
    //     `Can you give me an idea of the different types of NSAIDs`,
    //     `Can you tell me the various forms of NSAIDs`,
    //     `Could you inform me of the different forms of NSAIDs`,
    //     `Do you happen to know the different forms of NSAIDs`,
    //     `How are NSAIDs available`,
    //     `I'm curious, what forms do NSAIDs come in`,
    //     `I'm interested in NSAIDs, what forms do they come in`,
    //     `What are the different forms of NSAIDs available`,
    //     `What are the different types of NSAIDs on the market`,
    //     `What are the different types of NSAIDs`,
    //     `give me the list of different forms of nsaids`,
    //     `tell me the list of different forms of nsaids`
    // ],[
    //     `Common NSAIDs are usually in forms of capsules, tablets creams or gels as NSAIDs can cause troublesome side effects, alternatives are often recommended first. `
    // ],7),
    // encodeMemory([
    //     `* alternative * nsaid* `,
    //     `Apart from NSAIDs, what other choices do I have`,
    //     `Are there any alternative treatments to NSAIDs`,
    //     `Are there any natural remedies that can replace NSAIDs`,
    //     `Are there any over-the-counter products that can replace NSAIDs`,
    //     `Could you recommend any alternatives to NSAIDs`,
    //     `I'm looking for options other than NSAIDs. What do you suggest`,
    //     `What are some alternative therapies for pain and inflammation besides NSAIDs`,
    //     `What are some complementary treatments that can be used instead of NSAIDs`,
    //     `What are some other drugs that can be used in place of NSAIDs`,
    //     `What are some other medications that can be used instead of NSAIDs`,
    //     `What are some substitutes for NSAIDs`,
    //     `What are the different treatments available besides NSAIDs`,
    //     `What are the other options for treating pain and inflammation other than NSAIDs`,
    //     `What other options are there besides NSAIDs`,
    //     `tell me a list of alternative to nsaids`,
    //     `give me a list of alternative to nsaids`,
    //     `tell  me the list of alternative natural herbal remedies aside from nsaids`
    // ],[
    //     `The main alternative for pain relief is paracetamol, which is available over the counter and is safe for most people to take.`
    // ],7),

    // decongestatnts
    // encodeMemory([
    //     `*  generic * decongestant*`,
    //     `tell show give about What are common names generic list decongestant`, 
    // ],[
    //     `Generic decongestants include phenylephrine, pseudoephedrine, and oxymetazoline. These medications are available over the counter and can come in various forms such as tablets, capsules, nasal sprays, or liquids. It is important to follow the recommended dosage and precautions when taking decongestants as they can cause side effects such as nervousness, increased heart rate, and high blood pressure in some individuals.`
    // ],7),
    // encodeMemory([
    //     `* branded * decongestant*`,
    //     `tell show give about What are common names branded list decongestant`, 
    // ],[
    //     `Some known branded decongestant are decolgen and sudafed. It is important to follow the recommended dosage and precautions when taking decongestants as they can cause side effects such as nervousness, increased heart rate, and high blood pressure in some individuals.`
    // ],7),
    encodeMemory([
        `* (what|how) * (take|direction|dosing) * decongestant *`,
        `tell How should decongestant proper dosing be taken`,
        `What are the guidelines instructions for taking decongestant`,
        `tell What is the recommended typical usual dosage for taking decongestant`,
        `explain to me the correct way of taking decongestants`,
    ],[
        `
        The usual dose depends on the medicine you're taking. For Pseudoephedrine (sudafed) however here are some of the recommendations. The usual dose of pseudoephedrine is 60mg tablets or as a liquid containing 30mg in 5ml. 
        
        Adults and children aged 12 to 17 years may take one 60mg tablet or two 5ml spoon (10ml) of liquid up to 4 times a day. While, children aged 6 to 11 years may take half a tablet (30mg) or one 5ml spoon of liquid up to 4 times a day.

        The information I provided is an example of how you take this medicine. If you need further information or have underlying health condition please refer to your healthcare provider.
        `
    ],7),
    encodeMemory([
        `* decongestant*`,
        `Can you describe define explain purpose what decongestants are`,
        `What are decongestants and how do they work`,
        `What do you know about decongestants`,
    ],[
        `Decongestants such as pseudoephedrine, decolgen and sudafed are medicines that relieve congestion by reducing swelling, inflammation and mucus formation within the nasal passages or the eye.  They have no other effect on symptoms such as a runny nose or sneezing. These medicines are available as nose drops or nasal sprays, eye drops, and as tablets, capsules, and syrup.`
    ],7),
    encodeMemory([
        `* decongestants * (treat|use) *`,
        `What are the benefits of using decongestants`,
        `What conditions are decongestants used to treat`,
        `tell me what does decongestants treat`,
    ],[
        `Decongestants such as pseudoephedrine, decolgen and sudafed are medicines that help relieve a congested (stuffy) nose. The congestion can be caused by a cold virus or by the flu, sinusitis, or allergies.  These medicines are available as nose drops or nasal sprays, eye drops, and as tablets, capsules, and syrup.`
    ],7),
    encodeMemory([
        `* decongestant * work *`,
        `tell explain describe how me about how decongestants work to treat`
    ],[
        `Decongestants work by narrowing the blood vessels in your nose. Swollen tissue inside the nose shrinks, and air can pass through more easily.`
    ],7),
    encodeMemory([
        `* not * (take|use) * decongestant*`,
        `* avoid * decongestant*`,
        `tell explain why What are the reasons to avoid decongestants`,
        `What conditions make it necessary to avoid decongestants`,
        `When is it necessary to stop not safe taking decongestants`,
        `Why are decongestants not suitable recommended for everyone`,
    ],[
        `Don’t take decongestants if you have high blood pressure that isn’t controlled. Taking decongestants can raise your blood pressure even if it is controlled or nearly normal. You may need to look for an alternative to decongestants. Don’t give decongestants to children younger than 6 years of age.`
    ],7),
    encodeMemory([
        `*effect *decongestant*`,
        `Can you list some side effects of decongestants`,
        `What are some of the side negatively effects of decongestants`,
        `Why decongestants should be avoided`,  
        `give show tell me the list of potential risks side effects of decongestants`,
    ],[
        `Decongestants can sometimes cause side effects. They can temporarily cause nervousness, dizziness, and sleeping problems. They can cause heart palpitations (feeling like your heart is racing) or higher blood pressure`
    ],7),
    encodeMemory([
        `* tips * decongestant*`,
        `What are some important tips or consideration keep in mind for using taking decongestants`,
        `give show tell the What advice tips for taking using decongestants`,
    ],[
        `Decongestants may be taken orally to help relieve congestion that is affecting the nose, sinuses, and eyes or sprayed directly in the nose or instilled in the eye for a more local effect.`
    ],7),
    // encodeMemory([
    //     `* decongestant * price *`,
    //     `How much does it cost to buy decongestants`,
    //     `tell What the cost of decongestants`,
    // ],[
    //     `The price varies according to the form of the medicine. For example, for nasal sprays it starts with 90php, for drops around 78 (rose pharmacy website), and tablets like decolgen it starts with 6php (watsons).`
    // ],7),
    // encodeMemory([
    //     `* what * forms * decongestant*`,
    //     `give tell me the various different forms of decongestants`,
    // ],[
    //     `Decongestants are available as nose drops or nasal sprays, eye drops, and as tablets, capsules, and syrup.`
    // ],7),
    encodeMemory([
        `* alternative * decongestant* `,
        `What are herbal alternative substitutes medications that can be used instead of decongestants`,
        `What other alternative natural herbal options are there besides decongestants`,
        `tell me about the existing alternatives natural remedies to decongestants`
    ],[
        `Alternatives to oral decongestants are available. In the drug realm, antihistamines such as diphenhydramine (Benadryl), chlorpheniramine (Chlor-Trimeton), cetirizine (Zyrtec), and loratadine (Claritin) can help with a stuffy nose are safe for the hear`
    ],7),

    // expectorants
    // encodeMemory([
    //     `* generic * expectorant*`,
    //     `tell show give about What are common names generic list expectorant`, 
    // ],[
    //     `Guiafenesin and potassium iodide are examples of a generic expectorant.These are also foud in products such as Mucinex and Robitussin. These medications are commonly used to treat respiratory conditions such as bronchitis, asthma, and the common cold. It is important to note that these medications may not be suitable for everyone and should be used according to the instructions of a healthcare professional.
    //     `
    // ],7),
    // encodeMemory([
    //     `* branded * expectorant*`,
    //     `tell show give about What are common names branded list expectorant`, 
    // ],[
    //     `Mucinex and Robitussin are some of the popular ones. It is important to note that, while there are different names and formulations for brand expectorants, they all work together with the aim of reducing mucus retention in the respiratory system which makes it easier to cough or clear your body. Follow the recommended dosage of this medicine, or as requested by a healthcare professional`
    // ],7),
    encodeMemory([
        `* (how|what) * (direction|take|dosing) * expectorant *`,
        `Can you tell me how to properly take expectorants`,
        `How should I take expectorants`,
        `What is the proper recommended way instruction to use expectorants`,
        `tell What is the correct usual proper dose of using expectorants`,
    ],[
        `The dosage of expectorants can vary depending on the specific medication, age, weight, and health status of the patient. 
        
        Adults can take 200 to 400 milligrams (mg) every four hours.

        Children 6 to 12 years of age can take 100 to 200 mg every four hours.

        Children 4 to 6 years of age can take 50 to 100 mg every four hours.

        Children and infants up to 4 years of age should not take it.

        Although I presented you some information on how to take antitussives that may seem useful, it is best if you seek doctors help as they prescribe appropriate medications for your condition.
        `
    ],7),
    encodeMemory([
        `* expectorant*`,
        `tell How do you explain define expectorants`,
        `tell What exactly is the purpose of expectorants`,
    ],[
        `Expectorants ,like Guiafenesin and Robitussin, are ingredients that increase airway secretions. They do this by increasing the water content of the secretions which decreases their stickiness, making them easier to cough up. Expectorants are often used to help treat respiratory conditions such as bronchitis, pneumonia, and the common cold.In general, expectorants are available over-the-counter (OTC) in liquid, pill, and tablet forms
        `
    ],7),
    encodeMemory([
        `* expectorant* use *`,
        `What are expectorants commonly used for`,
        `What conditions are treated with expectorants`,
        `tell explain me how about where are expectorants used`,
    ],[
        `You may take an expectorant ,like Guiafenesin and Robitussin, to help relieve congestion if you have a cold or the flu. Expectorants are available as standalone drugs or as an ingredient in an all-in-one cold or flu medication. In general, expectorants are available over-the-counter (OTC) in liquid, pill, and tablet forms`
    ],7),
    encodeMemory([
        `* expectorants * (treat|work) *`,
        `How do explain expectorants work`,
        `tell me about how expectorants treat conditions`,
    ],[
        `Expectorants lubricate your airway. This helps loosen up the mucus and make the secretions in your airway thinner. By loosening up the mucus, expectorants make your cough more productive. This makes it easier for you to cough up mucus effectively and clear your throat.`
    ],7),
    encodeMemory([
        `* not * (take|use) * expectorant*`,
        `* avoid * expectorant*`,
        `Are there any instances when I should avoid expectorants`,
        `What are the situations when it is not advisable to take expectorants`,
        `tell why When should I avoid not use safe taking expectorants`,
    ],[
        `You should talk to your healthcare provider before using an expectorant if you are pregnant or breastfeeding. If you have developed any type of allergic reaction or intolerance to expectorants in the past, you should not use these medications.

        Use caution when driving or using machinery while taking an expectorant, as these medications can make you drowsy or dizzy
        `
    ],7),
    encodeMemory([
        `*effect *expectorant*`,
        `Are there any potential risks side effects associated with taking expectorants`,
        `Do expectorants have any potential side effects`,
        `What are the common side effects of expectorants`,
        `show tell give me the list of side effects of expectorants`,
    ],[
        `Expectorants do not commonly cause serious side effects. They may cause dizziness, drowsiness, and rash though.`
    ],7),
    encodeMemory([
        `* tips * expectorant*`,
        `Can you recommend share tips for taking expectorants with food on an empty stomach`,
        `How should I take expectorants for the best results`,
        `give tell me some tips or advice when taking having expectorants`
    ],[
        `Do not crush pills, and be sure to measure liquid formulations using the measuring tools provided with your medication. It is often recommended that you drink plenty of fluids when taking an expectorant.`
    ],7),
    // encodeMemory([
    //     `* expectorant* price *`,
    //     `Can you tell me the price of expectorants`,
    //     `What the cost of expectorants`,
    //     `tell me the price of expectorants`
    // ],[
    //     `At watsons, robitussin guaifenesin price starts at 92php. `
    // ],7),
    // encodeMemory([
    //     `* forms * expectorant*`,
    //     `tell inform me the various different forms of expectorants`,
    // ],[
    //     `In general, expectorants are available over-the-counter (OTC) in liquid, pill, and tablet forms.`
    // ],7),
    encodeMemory([
        `* alternative * expectorant*`,
        `Are there any natural alterantive herbal remedies that can besides expectorants`,
        `What are the alternative herbal substitutes for expectorants`,
        `What other herbal alternative medications can be used instead of expectorants`,
        `tell show me a list of the alternatives herbal to expectorants`
    ],[
        `Natural expectorants are another option if you’re trying to loosen up mucus and relieve chest congestion. Natural expectorants include: Menthol, Ivyleaf extract, oral hydration ( drinking lots of water ) , steaming (inhaling warm moist air ) , and honey ( adding honey to drinks ) `
    ],7),

    // antitussives
    // encodeMemory([
    //     `* generic * antitussive *`,
    //     `tell show give about What are common names generic list antitussive`, 
    // ],[
    //     `Dextromethorphan, codeine and diphenhydramine are some of the popular generic antitussives. It is important to remember that generic antitussives contain similar active substances with are also found in branded ones`
    // ],7),
    // encodeMemory([
    //     `* branded * antitussive *`,
    //     `tell show give about What are common names branded list antitussive`, 
    // ],[
    //     `Robitussin is among the popular antitussive found in pharmacies. You have to remember that despite having identical ingredients, branded ones are more expensive than the generic ones.`
    // ],7),
    encodeMemory([
        `* (how|what) * (take|direction|dosing) * antitussive *`,
        `what Are any special instructions I should follow when taking antitussives`,  
        `tell give What is the recommended proper dosage way to take antitussives`,  
        `tell me how do you take antitussives properly`,
        `give me some directions or guidance on how to use antitussives`,
    ],[
        `
        Generally, antitussives are taken orally and come in different forms, such as tablets, capsules, syrups, and drops. The dosage is usually determined by a healthcare provider and may be adjusted based on factors such as the age, weight of the patient, the severity of the cough, and any other health conditions the patient may have. 
        
        There are some common knowledge on the dosage which can be found from reputable medical resources online. For antitussives taken as a lozenges, dosage may vary. Adults and children 12 years of age and older can take 5 to 15 mg every two to four hours, as needed. Children 6 to 12 years of age can take 5 to 15 mg every two to six hours, as needed. Children 4 to 6 years of age can take 5 mg every four hours, as needed. Children and infants up to 4 years of age should not take the medicine. 
        
        For antitussives taken as syrup, the dosage varies also. Adults and children 12 years of age and older can take 30 mg every six to eight hours, as needed. Children 6 to 12 years of age can take 7 mg every four hours or 15 mg every six to eight hours, as needed. Children 4 to 6 years of age can take 3.5 mg every four hours or 7.5 mg every six to eight hours, as needed.Children and infants up to 4 years of age should  is not recommended.

        Although I presented you some information on how to take antitussives that may seem useful, it is best if you seek doctors help as they prescribe appropriate medications for your condition.
        `
    ],7),
    encodeMemory([
        `* antitussive *`,
        `explain What is the definition purpose uses of antitussives`,
    ],[
        `Antitussives ,such as Dextromethorphan or Robitussin, are prescription or over-the-counter drugs used for suppressing cough.  These medicines can be in the form of a tablet, capsule,gel, liquid , syrup, lozenge or strips. However, I can only recommend the usual  dosage of its logenzes and syrup forms`
    ],7),
    encodeMemory([
        `* antitussive * use *`,
        `tell What are the uses of antitussives`,
        `What is the purpose of taking antitussives`,
        `What medical issues do antitussives help with`,
    ],[
        `They are typically used to treat a dry cough caused by allergies, respiratory illnesses, or infections.Antitussives can also treat post-viral cough, or a persistent cough that develops after an infection has resolved.  These medicines can be in the form of a tablet, capsule,gel, liquid , syrup, lozenge or strips. However, I can only recommend the usual  dosage of its logenzes and syrup forms`
    ],7),
    encodeMemory([
        `* antitussives * (treat|work) *`,
        `How does antitussives relieve`,
        `What are the ways benefits antitussives work`,
        `What happens in the body when someone takes antitussives`,
        `tell me about how to antitussives treat`,
    ],[
        `Antitussives ,such as Dextromethorphan or Robitussin, are thought to work by inhibiting a coordinating region for coughing located in the brain stem, disrupting the cough reflex arc; although the exact mechanism of action is unknown. These medicines can be in the form of a tablet, capsule,gel, liquid , syrup, lozenge or strips. However, I can only recommend the usual  dosage of its logenzes and syrup forms.`
    ],7),
    encodeMemory([
        `* not * (take|use) * antitussive *`,
        `* avoid * antitussive *`,
        `What are the situations  where antitussives are not recommended suitable`,
        `tell me when it is not recommended safe to take antitussives`,
        `tell explain me why should i avoid antitussives`,
    ],[
        `This medication is not safe for children under the age of 4 years.`
    ],7),
    encodeMemory([
        `*effect *antitussive *`,
        `Are there any known serious side effects I should be aware of when taking antitussives`, 
        `tell give show list the potential common adverse side effects of antitussives`,
    ],[
        `The most common side effects include nausea and drowsiness. Some patients may experience a rash or difficulty breathing. High doses may cause hallucinations and disassociation, and the drug has been reported to be used as a recreational drug`
    ],7),
    encodeMemory([
        `* tips * antitussive *`,
        `What are some things to keep in mind when taking antitussives`,
        `Any tips on how to take antitussives effectively`,
        `tell give me advice on how to take antitussives`,
    ],[
        `Take this medication by mouth with or without food with a full glass of water (8 ounces or 240 milliliters) or as directed by your doctor. `
    ],7),
    // encodeMemory([
    //     `* antitussive * price *`,
    //     `Can you tell me the cost of antitussives`,
    //     `What is the price on antitussives`,
    // ],[
    //     `In southstar drug store, it dextromethorphan syrup cost starts at 113php. It watsons, its around 189php. It may vary though from other pharmacies`
    // ],7),
    // encodeMemory([
    //     `* forms * antitussive *`,
    //     `Can you give provide me with a list of the various different forms of antitussives`,
    //     `tell What are the different forms types of antitussives`,
    // ],[
    //     `Antitussives have many forms. It can be a tablet, capsule,gel, liquid , syrup, lozenge or strips. However, I can only recommend the usual  dosage of its logenzes and syrup forms.`
    // ],7),
    encodeMemory([
        `* alternative * antitussive *`,
        `Are there any recommended natural alternative herbal treatments remedies to antitussives`,
        `What are some alternative herbal substitutes medications that can be used instead of antitussives`,
        `What are the different alternative herbal treatments available besides antitussives`,
        `tell me about the alternative options remedies besides antitussives`
    ],[
        `Honey is a time-honored remedy for a sore throat. According to one study, trusted Source, it can also relieve coughs more effectively than OTC medications that contain dextromethorphan (DM), a cough suppressant.`
    ],7),
    // lozenges
    // encodeMemory([
    //     `* generic * lozenge *`,
    //     `tell show give about What are common names generic list lozenge`, 
    // ],[
    //     `Some of the generic names of logenzes include dextromethorphan and benzocaine-menthol`
    // ],7),
    // encodeMemory([
    //     `* branded * lozenge *`,
    //     `tell show give about What are common names branded list lozenge`, 
    // ],[
    //     `Bactidol and strepsils are some of branded names of logenzes that can help relieve your throat`
    // ],7),
    encodeMemory([
        `* (what|how) * (direction|take|dosing) * lozenge *`,
        `* direction * lozenge *`,
        `* dosing * lozenge *`,
        `tell What are the directions instructions for using taking lozenges`,
        `tell What is the proper recommended dosage for taking lozenges`,
        `explain What is the proper way to use dissolve a lozenge`,
        `guide me how to take lozenges`,
        `tell me the direction on what is the correct dosage when taking lozenges`
    ],[
        `Let the lozenge dissolve slowly in your mouth and swallow the dissolved liquid along with your saliva. Do not chew or swallow it whole. This product is usually used every 2 hours as needed`
    ],7),
    encodeMemory([
        `* lozenge *`,
        `How would you explain describe lozenges`,
        `What is the uses definition purpose of lozenges`,
        `tell me where is lozenges used`
    ],[
        `Lozenges such as Bactidol and Strepsils are used to temporarily relieve pain from minor mouth problems (such as canker sores, sore gums/throat, mouth/gum injury).`
    ],7),
    encodeMemory([
        `* what * lozenge * use *`,
        `How do lozenges help`,  
        `What are lozenges designed to do`,  
        `What are the uses benefits of lozenges`,  
        `What can lozenges be taken for`,    
    ],[
        `Taking Lozenges,  such as Bactidol and Strepsils, are convenient, affordable option for symptomatic treatment of acute and chronic pharyngitis, irritation or inflammation of the upper respiratory tract and relief of unpleasant postoperative sensation in the throat.`
    ],7),
    encodeMemory([
        `* lozenges * (treat|work) *`,
        `Can you describe explain how lozenges work to relieve discomfort `,
        `tell me how lozenges treat sore throat`,
        `how does lozenges treat`,
    ],[
        `When you suck on a lozenge, it starts to dissolve and release medicine. It is intended to dissolve slowly in the mouth to temporarily suppress the cough, and lubricate and soothe irritated tissues of the throat. Some have medications that help fight colds, and most have anesthetic to help ease the pain. Lozenges also contain menthol or eucalyptus, which can help cool and sooth the throat. Others contain honey, which is known to have cough suppression properties.`
    ],7),
    encodeMemory([
        `* not * (take|use) * lozenge *`,
        `* avoid * lozenge *`,
        `What are the situations conditions where it is not recommended to take lozenges`,
        `tell When is it not appropriate to take use lozenges`,
        `tell why when lozenges should be avoided or not recommended for use`
    ],[
        `If you have a sore throat that is severe or that lasts more than 2 days, or a cough that lasts more than 7 days or keeps coming back, or symptoms occur with a fever, headache, rash, swelling, nausea, or vomiting, tell your doctor promptly`
    ],7),
    encodeMemory([
        `*effect *lozenge *`,
        `What are some known common adverse reactions to lozenges`,
        `What are the potential side effects risks of taking lozenges`,
        `What kind of side effects should I expect from using lozenges`,
        `What should I watch out for when using lozenges`,
        `tell or give me a list of the side effects of taking lozenges`
    ],[
        `Slight burning, tingling, or stinging may occur. If any of these effects last or get worse, tell your doctor or pharmacist promptly.`
    ],7),
    encodeMemory([
        `* what * tips * lozenges *`,
        `Do you have any tips advice for taking lozenges`,  
        `What the recommended way to take lozenges`,  
        `tell give an advice or tip in how to take lozenges`,
    ],[
        `Do not chew or swallow it whole. This product is usually used every 2 hours as needed. `
    ],7),
    // encodeMemory([
    //     `* lozenge * price *`,
    //     `Can you tell me the price cost of lozenges`,
    //     `How much does it cost to buy lozenges`,
    //     `What is the price tag on lozenges`,
    // ],[
    //     `In rose pharmacy it starts arounds 5php per piece. The price may vary in other pharmacies`
    // ],7),
    // encodeMemory([
    //     `* forms * lozenge *`,
    //     `Do you happen to know the various different forms of lozenges`,
    //     `How are lozenges available`,
    //     `What forms do lozenges come in`,
    //     `tell give What the list of various different forms of lozenges`,
    // ],[
    //     `Dosage forms that dissolve slowly in the mouth or that can be chewed and swallowed easily are gaining in popularity, especially for pediatric patients. Hard (compressed or molded) preparations of this dosage form are called lozenges, troches, or drops. Soft (molded) lozenges or troches are often called pastilles, and chewable, gelatin-based lozenges or troches are often called gummy, novelty-shaped products. `
    // ],7),
    encodeMemory([
        `* alternative * lozenge * `,
        `Apart from lozenges, what other alternative herbal choices do I have`,
        `Are there any natural alternative herbal remedies treatments to lozenges`,
        `Could you recommend any alternatives herbal to lozenges`,
        `What are some other natural herbal substitutes drugs that can be used in place of lozenges`,
        `What are the different natural herbal treatments available besides lozenges`,
        `tell What are the other natural herbal options for treating sore throat and cough other than lozenges`,
        `tell What other natural herbal options are there besides lozenges`,
    ],[
        `While it may not cure, sipping tea with honey may help and sooth throat conditions.`
    ],7),
]


let section12 = [
    
    encodeMemory([
        `* where * go * have * influenza *`,
        `* where * treat * have * influenza *`,
        `Where should I go to get treated for the flu`,
        `tell me where do i go to treat my influenza`
    ],[
        `You can manage the symptoms in your home. The best way to treat the flu is to get plenty of rest, drink fluids to prevent dehydration. 
        However, Check with your doctor promptly if you are at higher risk of serious flu complications.`
    ],5),
    // encodeMemory([
    //     `* influenza * type A *`,
    //     `Can you tell me about the influenza A virus`,
    //     `How does influenza A spread`,
    //     `How long does influenza A typically last`,
    //     `What are the characteristics of influenza A`,
    //     `What is influenza A`,
    //     `What is the incubation period for influenza A`,
    //     `Where does the influenza A virus come from`,
    // ],[
    //     `Type A flu or influenza A are capable of infecting animals, although it is more common for people to suffer the ailments associated with this type of flu. `
    // ],1),
    // encodeMemory([
    //     `* influenza * type B *`,
    //     `How does influenza B spread`,
    //     `How is influenza B diagnosed`,
    //     `What are the of influenza B`,
    //     `What distinguishes influenza B from other strains`,
    //     `What is influenza type B`,
    //     `What is the difference between influenza A and B`,
    //     `Where is influenza B most common`,
    // ],[
    //     `Unlike type A flu viruses, type B flu is found only in humans. Type B flu may cause a less severe reaction than type A flu virus, but occasionally, type B flu can still be extremely harmful. Influenza type B viruses are not classified by subtype and do not cause pandemics.`
    // ],1),
    // encodeMemory([
    //     `* influenza * type C *`,
    //     `Are there any current outbreaks of influenza c`,
    //     `Can you tell me about the characteristics of influenza c`,
    //     `How does influenza c differ from other types of influenza`,
    //     `How is influenza c transmitted`,
    //     `Tell me about the history of influenza c.`,
    //     `What are the of influenza c`,
    //     `What is influenza c`,
    //     `What is the mortality rate for influenza c`,
    //     `Where is influenza c most commonly found`,
    // ],[
    //     `Influenza C viruses are also found in people. They are, however, milder than either type A or B. People generally do not become very ill from the influenza type C viruses. Type C flu viruses do not cause epidemics.`
    // ],1),
    // encodeMemory([
    //     `* differ * type A * type B * type c * `,
    //     `* differ * type A * type C * type B * `,
    //     `* differ * type B * type A * type c * `,
    //     `* differ * type B * type C * type A * `,
    //     `* differ * type C * type A * type B * `,
    //     `* differ * type C * type B * type A * `,
    //     `Are there any unique characteristics of influenza A, B, or C`,
    //     `Can you explain the differences between influenza A, B, and C`,
    //     `Could you describe the variances between influenza A, B, and C`,
    //     `How are influenza A, B, and C distinct from each other`,
    //     `How does influenza A differ from influenza B and C`,
    //     `In what ways are influenza A, B, and C different`,
    //     `What are the dissimilarities between influenza A, B, and C`,
    //     `What distinguishes influenza A from influenza B and C`,
    //     `What makes influenza A, B, and C different from one another`,
    //     `What sets influenza A apart from influenza B and C`,
    // ],[
    //     `Type A flu or influenza A viruses are capable of infecting animals, although it is more common for people to suffer the ailments associated with this type of flu. It can cause Epidemics. Type B influenza is only found on humans and causes les severe reaction than Type A virus. Unlike Type A, it does not cause pandemics. Type C is also found on people. People do not get very ill from Type C viruses. Like type B, it cannot cause epidemics.`
    // ],1),
]


let section13 = [
    
    // encodeMemory([
    //     `* problem * influenza *`,
    //     `* influenza * problem *`,
    //     `What complications risks associated arise from influenza`,
    //     `Describe What kind of problems can arise if influenza is left untreated`,
    //     'explain What could be the problems harms for influenza',
    //     `tell me about the potential , problems,harms, or dangers associated with influenza`,
    //     `why influenza can be concern or dangerous`
    // ],[
    //     `
    //     If left untreated, influenza can lead to various complications, including bacterial and viral pneumonia, bronchitis or inflammed airways, sinus infections,dehydration, ear infections, encephalitis which is a brain infection, and sepsis or blood infection and worsening of underlying chronic medical conditions such as asthma or congestive heart failure. In severe cases, influenza may even be fatal especially in people at high risk, such as elderly or young children and those with weakened immune systems.
    //     `
    // ],1),
]

let section14 = [
    
    // encodeMemory([
    //     `* ask * symptom * influenza *`,
    //     // `Are there any online forums or support groups for discussing the symptom of influenza`,
    //     // `Is there a hotline or website I can visit to learn about the symptom of influenza`,
    //     // `What are the best sources to learn about the symptom of influenza`,
    //     `What resources are available to learn about the symptom of influenza`,
    //     `Where can I ask questions about the symptom of influenza`,
    //     `Where can I find reliable information about the symptom of influenza`,
    //     `Where can I get information about the symptom of influenza`,
    //     `Who can I talk to about the symptom of influenza`,
    //     `tell me where can i ask abou the symptom of influenza`
    // ],[
    //    `You can get information from me regarding basic informaiton on symptoms, causes, things to avoid, foods you can and shouldnt take, the treatments, and how to manage it. 
    //    Further, I can explain these to help you perform self-care. However, I am not a medical practicitioner and the information I provide are meant for awareness only. 
    //    If you find these inadequate , it is best to ask your doctor for advises. `
    // ],1),
    // encodeMemory([
    //     `* where * treat * symptoms * influenza *`,
    //     `Where can I seek treatment for influenza symptoms`,
    //     `Where should I go to get treatment for influenza`,
    //     `Who can provide treatment for influenza symptoms`,
    // ],[
    //     `
    //     According to the Centers for Disease Control and Prevention, influenza is a contagious respiratory illness caused by influenza viruses that infect the nose, throat, and sometimes the lungs.
        
    //     While you can manage the symptoms of influenza at home, it is 
    //     generally recommended to seek medical attention from a healthcare provider. They can prescribe antiviral medications and provide other treatments to help manage your symptoms and prevent any complications. 
        
    //     It is important to consult a doctor if you experience serious symptoms or are at increased risk for complications.
    //     `
    // ],5),
    
    encodeMemory([
        `* tell * (signs|symptoms) * influenza *`,
        `* (sign|symptom) * influenza *`,
        `How can you recognize the symptoms of influenza`,
        `What are the indications signs or symptoms of influenza`,
        `What symptoms should I expect if I have influenza`,
        `explain describe show tell the signs or symptoms of influenza`,
        `give show me the signs of influenza`,
        `get me a list of the symptom of influenza`,
        `how can you tell if someone has influenza`,
    ],[
        `The Center of Disease Control indicated that people who have flu have some or all of the following symptoms. They may have fever, cough, sore throat, runny or stuffy nose, muscle or body aches, headaches, and fatigue(tireness). Some others may have vomiting and diarrhea though is is more common in children and adults.`
    ],1),
]

let section15 = []




export const data = 
    [].concat(section11)
        .concat(section12)
        .concat(section13)
        .concat(section14)
        .concat(section15)
