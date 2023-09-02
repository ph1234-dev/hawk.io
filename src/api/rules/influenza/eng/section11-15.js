import { encodeMemory } from "@/api/config/model"


let section11 = [
    // antihistamine
    encodeMemory([
        `* generic * antihistamine *`,
        `Can you give me a list of generic antihistamines?`,
        `Can you name some generic antihistamines?`,
        `I'd like to know the names of generic antihistamines.`,
        `I'm looking for a list of generic antihistamines, can you help?`,
        `What are the names of generic antihistamine?`,
        `What generic antihistamines are on the market?`,
        `What is the list of generic antihistamines?`,
        `Which antihistamines are available in generic form?`,
        `Which over-the-counter antihistamines are available as generics?`,
        `tell the list of generic antihistamine`,
        `give me the list of generic antihistamine`,
    ],[
        `Citerizine is one of the popular generic antihistamines you can buy.It is important to note that these medications may have different brand names depending on the country and manufacturer.If you feel like having influenza , get plenty of rest, stay hydrated, move away from smokes. It is always best to consult with a doctor or pharmacist before taking any medication. 
        `
    ],7),
    encodeMemory([
        `* branded * antihistamine *`,
        `Can you give me the names of branded antihistamines?`,
        `Can you list some branded antihistamines for me?`,
        `Could you provide me with the list of antihistamines with brand names?`,
        `What are the brand names of antihistamines?`,
        `What are the branded versions of antihistamines?`,
        `What are the names of branded antihistamines that are available?`,
        `Which antihistamines are available in branded form?`,
        `Which antihistamines are available under brand names?`,
        `Which antihistamines have brand names?`,
        `tell the list of branded antihistamine`,
        `give me the list of branded antihistamine`,
    ],[
        `Benadryl is one of the popular branded antihistamine you can buy.It's important to note that antihistamines should only be taken under the guidance of a healthcare professional. Also, if you feel like having influenza , get plenty of rest, stay hydrated, move away from smokes. `
    ],7),
    encodeMemory([
        
        `* what * take * antihistamine *`,
        `* what * direction * antihistamine *`,
        `* what * dosing * antihistamine *`,
        `* how * direction * antihistamine *`,
        `* how * dosing * antihistamine *`,
        `* how * take * antihistamine *`,

        `* dosing * antihistamine *`,
        `* antihistamine * direction *`,
        `Are there any special instructions for taking antihistamines?`,
        `Can you explain the proper dosage of antihistamine?`,
        `Can you give me guidance on taking antihistamine?`,
        `Can you tell me how to properly take antihistamine?`,
        `Can you tell me the proper way to take antihistamine?`,
        `How many antihistamine should I take per day?`,
        `How much antihistamine should I take?`,
        `How often should I take antihistamine?`,
        `What is the appropriate dosage of antihistamine?`,
        `What is the correct way to take antihistamine?`,
        `What is the prescribed amount of antihistamine?`,
        `What is the recommended dosage for antihistamine?`,
        `What is the recommended frequency of antihistamine intake?`,
        `What is the safe dosage for antihistamine?`,
        `What is the standard dosage of antihistamine?`,   
        `tell me about how to eat antihistamines`,
        `tell me about the correct dosage of antihistamines`,
        `explain to me the dosage of antihistamines`
    ],[
        `Antihistamines can be taken with food, a glass of water or milk to lessen stomach irritation if necessary. For cetirizine, here is how you can take it. 6 years of age and older can have 5 to 10 miligrams once a day. Those who are 4-6 years old can take maximum of 5mg once or 2.5mg twice a day. Those who are younger than that (4 below) should not take this medicine.
        
        The information I represented is an example of how you take it. Proper dosage must be observed. If you have further questions, please refer to your healthcare provider. 
        `
    ],7),
    encodeMemory([
        `* antihistamine *`,
        `Can you tell me about antihistamine?`,  
        `Could you describe what antihistamine are?`,  
        `What do you know about antihistamine?`,  
        `What exactly are antihistamine?`,  
        `What is the definition of antihistamine?`,  
        `tell me about antihistamine`,
        `explain to me what is antihistamine`
    ],[
        `Antihistamines are a class of drugs commonly used to treat symptoms of allergies. These drugs help treat conditions caused by too much histamine, a chemical created by your body’s immune system. Antihistamines are most commonly used by people who have allergic reactions to pollen and other allergens. They are also used to treat a variety of other conditions such as stomach problems, colds, anxiety and more.`
    ],7),
    encodeMemory([
        `* use * antihistamine  *`,
        `* antihistamine *   *`,
        `Can you explain what antihistamine are used for?`,  
        `How do antihistamine help with allergies?`,
        `How do antihistamine help?`,
        `In what ways are antihistamine helpful?`,
        `What are antihistamine and how do they work?`,  
        `What are antihistamine used for?`,
        `What are the therapeutic uses of antihistamine?`,
        `What conditions are treated with antihistamine?`,
        `What do antihistamine do?`,
        `Why are antihistamine prescribed?`,
        `tell me where is antihistamine used`
    ],[
        `Antihistamines are used to relieve or prevent the symptoms of hay fever and other types of allergy. They work by preventing the effects of a substance called histamine, which is produced by the body. Histamine can cause itching, sneezing, runny nose, and watery eyes. Also, in some persons histamine can close up the bronchial tubes (air passages of the lungs) and make breathing difficult.`
    ],7),
    encodeMemory([
        `* work * treat *`,
        `* antihistamine * work *`,
        `Can you tell me how antihistamine reduce allergy?`,  
        `Explain how antihistamine inhibit allergic reactions`,  
        `Explain how antihistamine work to relieve allergy`,  
        `How do antihistamine treat allergy?`,  
        `Tell me how antihistamine work to stop allergic reactions`,  
        `What happens in the body when antihistamine are used to treat allergies?`,  
        `What is the method by which antihistamine work to treat allergies?`,  
        `What is the process by which antihistamine relieve allergy?`,  
        `What is the purpose of antihistamine?`,  
        `What is the way in which antihistamine affect the body's response to allergens?`,
        `What is the way in which antihistamine alleviate allergy?`,  
        `tell me how does antihistamines treat`,
        `explain how antihistamines treat health condition`,
        `how does antihistamines treat  influenza`,
    ],[
        `Antihistamines are not typically used to treat influenza. Antihistamines are used relieve some of the symptoms of allergies, such as sneezing, runny nose, and itching, but they are not effective against the flu virus. These medicines work by blocking histamines which are released by the body during allergic reactions. Additionally, other medications such as pain relievers and fever reducers may be used to manage symptoms.
        `
    ],7),
    encodeMemory([
        `* avoid *  antihistamine *`,
        `* not * (take|use) *  antihistamine *`,
        `Are there any circumstances where antihistamine should be avoided?`,
        `In what situations should I refrain from taking antihistamine?`,
        `What are the conditions that make antihistamine unsuitable?`,
        `What are the reasons to avoid taking antihistamine?`,
        `What are the situations in which antihistamine should not be taken?`,
        `What are the situations where antihistamine may  harm??`,
        `When is it inappropriate to take antihistamine?`,
        `When is it unsafe to take antihistamine?`,
        `When might antihistamine be dangerous?`,
        `When should I not take antihistamine?`,
        `Why is it not recommended to take antihistamines?`,
        `Why should I be careful when taking antihistamines?`,
        `tell me why should a person avoid eating antihistamines`,
        `tell me why is it necessary to avoid having antihistamine`,
        `tell me why antihistamines can be dangerous`,
    ],[
        `Most people can safely take antihistamines. However, people who are pregnant, breastfeeding, young child, taking other medicines, have underlying conditions such as heart disease, liver disease, kidney disease or epilepsy may need to be cautious when taking this.`
    ],7),
    encodeMemory([
        `*effect * antihistamine *`,
        `Are there any known drawbacks to using antihistamine?`,  
        `Are there any negative side effects associated with taking antihistamine?`,  
        `Can you tell me about the side effects of antihistamine?`,  
        `Could you describe the  side effects of antihistamine?`,  
        `What adverse reactions might occur when taking antihistamine?`,  
        `What is the effect of antihistamine on the immune system?`,  
        `What kind of side effects can antihistamine ?`,  
        `What should I be aware of in terms of antihistamine side effects?`,  
        `give me the list of side effects of  eating antihistamines`,
        `tell me about the side effects of the antihistamines`,
        `explain the potential side effects of antihistamines`,
        `tell me why antihistamines can be dangerous`,
    ],[
        `Antihistamines can cause side effects. It may vary depending on the drug taken. However, antihistamines can make you drowsy, dizzy, have a dry mouth, have a blurry vision, constipated,and difficulty in peeing. If you have any underlying medical conditions or are taking other medications, it is important to ask a doctor or pharmacist though.
        `
    ],7),
    encodeMemory([
        `* tips *  antihistamine *`,
        `Can you give me some advice on taking antihistamines?`,
        `Can you tell me some dos and don'ts when taking antihistamines?`,
        `Do you have any recommendations for taking antihistamines?`,
        `How should I take antihistamines for best results?`,
        `What are some dos and don'ts for taking antihistamines?`,
        `What are some recommendations when taking antihistamines?`,
        `What are some things to keep in mind when taking antihistamines?`,
        `What are some tips for safely taking antihistamines?`,
        `What should I keep in mind when taking antihistamines?`,
        `What should I know about taking antihistamines?`,
        `tell me some tips or advices in taking antihistamines`
    ],[
        `When taking this medicine, try to avoid alcohol, sedatives, and tranquilizers, due to increased risk of drowsiness. It may cause Central nervous system depression. So avoid activities requiring mental alertness. Be careful when patient has hepatic or renal impairment. Same with the elderly as they are more sensitive to adverse effects.`
    ],7),
    encodeMemory([
        `* antihistamine * price *`,
        `How expensive are antihistamines?`,
        `How much do antihistamines cost?`,
        `What is the average price of antihistamines?`,
        `What is the cost of antihistamine?`,
        `What is the price of antihistamines?`,
        `tell me the cost of antihistamines`
    ],[
        `The price range for antihistamine varies from pharmacy to pharmacy. Antihistamines such as citerezine (10mg) costs around 15 pesos (according to watsons pharmacy). Benadryl , on the otherhand cost around 41 pesos for one tablet.`
    ],7),
    encodeMemory([
        `* forms * antihistamine *`,
        `Can you give me an idea of the different types of antihistamines?`,
        `Can you tell me the various forms of antihistamines?`,
        `Could you inform me of the different forms of antihistamines?`,
        `Do you happen to know the different forms of antihistamines?`,
        `I'm curious, what forms do antihistamines come in?`,
        `I'm interested in antihistamines, what forms do they come in?`,
        `What are the different types of antihistamines available on the market?`,
        `tell me about the diffent forms of antihistamines`
    ],[
        `Antihistamines come in several forms including liquids, lotions, syrups, gels, eyedrops, tablets, capsules, creams, and suppositories`
    ],7),
    encodeMemory([
        `* alternative * antihistamine * `,
        `Are there any other options besides antihistamines for allergies?`,
        `Can you suggest some non antihistamine allergy treatments?`,
        `Do you know of any antihistamine free allergy medications?`,
        `I'm looking for alternative allergy treatments that don't involve antihistamines, what options do I have?`,
        `I'm looking for alternatives to antihistamines for my allergies, what are my choices?`,
        `What are some alternatives to antihistamines?`,
        `What are the different types of allergy medications that don't contain antihistamines?`,
        `What are the different types of antihistamine-free allergy medications?`,
        `What natural remedies are available as alternatives to antihistamines?`,
        `What other treatments can I consider for my allergies besides antihistamines?`,
        `What prescription allergy medications are available that don't contain antihistamines?`,
    ],[
        `Try taking Ginger. According to Sinus and Allergy Wellness Center, it is a natural histamine, potent antiviral agent and an immute booster. Ginger is a safe and highly effective herb that soothes the digestive system and improves circulation. You can make some ginger tea to alleviate nasal congestion and headaches. While you sip your tea, inhale the steam coming out of your cup. Also, try to use it with other herbs, such as turmeric, which is another powerful natural healer.`
    ],7),
    // analgesics rule 20 above
    encodeMemory([
        `* generic * analgesics*`,
        `Can you provide me with a list of generic analgesics?`,
        `Can you tell me some generic pain killers names?`,
        `Could you give me a rundown of generic analgesics`,
        `I need a list of generic  analgesics. Can you get that for me?`,
        `I'm looking for a list of non brand name painkillers. Can you help me out?`,
        `I'm trying to find a list of generic  analgesics . Can you assist me?`,
        `What are some common generic analgesics`,
        `What are some examples of generic analgesics?`,
        `What are some examples of generic  analgesics that are commonly used?`,
        `What are some of the most commonly used generic  analgesics`,
        `What are the generic names of some over-the-counter  analgesics`,
        `What are the generic versions of popular  analgesics`,
        `What are the names of some generic analgesics`,
        `tell me about the generic analgesics`
    ],[
        `Some common generic analgesics include ibuprofen, acetaminophen, aspirin,paracetamol, naproxen, and ketoprofen. These medications work by blocking or reducing the body's production of prostaglandins, which are chemicals that cause inflammation and pain. By reducing the production of prostaglandins, these drugs can help to reduce pain and inflammation in the body.`,
    ],7),
    encodeMemory([
        `* branded * analgesics *`,
        `Can you give me some examples of branded painkillers?`,
        `Can you provide me with a list of brand names of analgesics?`,
        `Could you provide me with a list of branded drugs for pain relief?`,
        `I need to know the brand names of some pain relievers`,
        `I'm trying to find branded analgesics. Can you help me?`,
        `What are some commonly known brands of painkillers?`,
        `What are some examples of branded analgesics?`,
        `What are some of the well-known brand names of painkillers?`,
        `What are the brand names of some commonly prescribed painkillers?`,
        `What are the brand versions of commonly used analgesics?`,
        `tell me about branded analgesics`,
    ],[
        `Some of the branded names of paracetamol is Biogesic and Calpol.These medications work by blocking or reducing the body's production of prostaglandins, which are chemicals that cause inflammation and pain. By reducing the production of prostaglandins, these drugs can help to reduce pain and inflammation in the body.`
    ],7),
    encodeMemory([
        `* what * take * analgesics *`,
        `* what * direction * analgesics *`,
        `* what * dosing * analgesics *`,
        `* how * direction * analgesics *`,
        `* how * dosing * analgesics *`,
        `* how * take * analgesics *`,
        `* direction * analgesics *`,
        `* dosing * analgesics  *`,
        `Can you explain the correct dosage of analgesics?`,
        `Can you guide me on how to properly dose analgesics for pain relief?`,
        `Can you tell me how to properly use analgesics for pain relief?`,
        `How long can I take analgesics and at what frequency?`,
        `How many analgesics tablets should I take for my pain?`,
        `How much analgesics should I take and how often?`,
        `What are the guidelines for taking analgesics?`,
        `What are the instructions for taking analgesics safely?`,
        `What is the proper way to take analgesics?`,
        `What is the recommended dosage for analgesics depending on the type of pain?`,
        `What is the recommended dosage for taking analgesics?`,
        `What is the recommended frequency for taking analgesics?`,
        `What is the safe and effective dose of analgesics?`,
        `What should I know about taking analgesics and the correct dosage?`,
        `tell me how to you use analgesics`,
        `tell me how to you take analgesics`,
        `tell me how to you eat analgesics`,
        `tell me about the correct dose of taking analgesics`,
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
        `Can you explain what analgesics are?`,
        `Can you recommend any analgesics for specific types of pain?`,
        `Could you give me some information on analgesics?`,
        `I'm interested in learning about analgesics. What can you tell me?`,
        `I'm not familiar with analgesics. Can you give me a brief overview?`,
        `Tell me about analgesics and their uses.`,
        `What are the benefits of using analgesics?`,
        `tell me about analgesics`,
    ],[
        `Analgesics, also called painkillers, are medications that relieve different types of pain — from headaches to injuries to arthritis. Anti-inflammatory analgesics reduce inflammation, and opioid analgesics change the way the brain perceives pain.`
    ],7),
    encodeMemory([
        `* analgesics * use  *`,
        `For what conditions are analgesics prescribed?`,
        `How are analgesics commonly used in medicine?`,
        `What are some of the ailments that analgesics can treat?`,
        `What are the applications of analgesics?`,
        `What are the benefits of using analgesics?`,
        `What are the uses of analgesics?`,
        `What pain conditions can be treated with analgesics?`,
        `tell me about where is analgesics used`
    ],[
        `Over-the-counter painkillers available from pharmacies, such as ibuprofen or acetaminophen (paracetamol), can relieve acute pain. Their effectiveness will depend on things like the type and severity of the pain and the dose of the medication. Painkillers that are available without a prescription have been approved for the treatment of mild to moderate pain. They shouldn't be used for more than a few days in a row, and the specified maximum daily dose shouldn't be exceeded.`
    ],7),
    encodeMemory([
        `* analgesics * (treat|work) *`,
        `Can you explain how analgesics alleviate pain?`, 
        `Can you explain how analgesics work?`, 
        `Can you tell me how an analgesic helps to manage pain?`, 
        `How do analgesics interact with the body to reduce pain?`, 
        `How do analgesics treat pain?`, 
        `How does an analgesic act on the body to treat pain?`,
        `How does an analgesic work to reduce pain?`,
        `What are the ways in which analgesics alleviate pain?`, 
        `What are the ways in which analgesics reduce pain?`, 
        `What is the action of analgesics in reducing pain?`, 
        `What is the function of an analgesic in treating pain?`, 
        `What is the process by which analgesics provide relief from pain?`, 
        `What is the way analgesics work to reduce pain?`, 
        `What is the working principle of analgesics in treating pain?`, 
        `tell me about how does analgesics treat conditions`,
        `explain how analgesics  treats illness`,
        `how does analgesics treat  influenza`,
    ],[
        `Analgesics, or pain relievers, can help alleviate the discomfort and fever associated with influenza. They work by blocking the production of certain chemicals in the body that cause pain and inflammation. Common analgesics used for influenza include acetaminophen, ibuprofen, and aspirin.  However, it is important to follow the recommended dosages and precautions, as some analgesics may not be suitable for certain individuals or may have adverse effects when used improperly.
        `
    ],7),
    encodeMemory([
        `* avoid * analgesics *`,
        `* not (take|use) * analgesics *`,
        `Are there any warnings against taking analgesics?`,    
        `Can you tell me when I should avoid taking analgesics?`,  
        `In what situations should I avoid using analgesics?`,  
        `What are the instances where taking analgesics is not recommended?`,  
        `What are the reasons for avoiding analgesics?`,
        `What are the situations in which analgesics should be avoided?`,  
        `What are the situations where I should avoid taking analgesics?`,  
        `What conditions would make taking analgesics a bad idea?`,  
        `When should I avoid using analgesics?`,
        `When should I not take analgesic?`,  
        `When should I refrain from using analgesics?`,  
        `When should I skip taking analgesics?`,  
        `Why is it recommended to avoid taking analgesics?`,
        `tell me why is it important to avoid analgesics`,
        `tell me when is it necessary to not take analgesics`,
        `explain why a person should  avoid analgesics`,
        `tell me why analgesics can be harmful`,
        `explain why it can be problematic to take analgesics`
    ],[
        `According to WebMD , you should never take this medication for self-treatment of pain for longer than 10 days. You should not use this drug to self-treat a fever that lasts longer than 3 days. In these cases, consult a doctor because you may have a more serious condition`
    ],7),
    encodeMemory([
        `* what *effect *analgesics  *`,
        `Are there any adverse effects associated with using analgesics?`,
        `Are there any common side effects of using analgesics?`,
        `Are there any dangers associated with analgesics?`,
        `Are there any dangers involved with taking analgesics?`,
        `Can analgesics be harmful?`,
        `Can analgesics have any harmful side effects?`,
        `Do analgesics have any known negative effects on the body?`,
        `What are some  drawbacks of using analgesics?`,
        `What are the downsides of taking analgesics?`,
        `What are the negative effects of taking analgesics?`,
        `What are the  complications of taking analgesics?`,
        `What are the potential side effects of taking analgesics?`,
        `What are the risks of taking analgesics?`,
        `What are the side effects of analgesics?`,
        `What kind of side effects can occur from taking analgesics?`,
        `What kind of unwanted effects can analgesics produce?`,
        `tell me the list of side effects of analgesics`,
        `show me the list of complications when taking analgesics`
    ],[
        `Anti-inflammatory analgesics are generally safe. But they can cause side effects and complications, if you use them too often, for too long or in very large doses. These medicine can damage internal organs such as liver or kidney. It may also cause diarrhea or constipation, heart problems, hypersensitivity, nausea, upset stomach or heart burn, ringing in the ears, and stomach ulcers.`
    ],7),
    encodeMemory([
        `* what * tips * analgesics *`,
        `Can you give me some advice on taking analgesics?`,  
        `Do you have any tips for taking analgesics?`,  
        `What are some common mistakes to avoid when taking analgesics?`,  
        `What are some guidelines for taking analgesics?`,  
        `What are some things to consider when taking analgesics?`,  
        `What are some things to keep in mind when taking analgesics long-term?`,  
        `What are some tips for managing analgesic side effects?`,  
        `What is the best way to take analgesics?`,   
        `What should I keep in mind when taking analgesics?`,  
        `give me tips or advices when taking analgesics`,
        `tell tips or advices when taking analgesics`
    ],[
        `Take this medication by mouth. Drink a full glass of water (8 ounces/240 milliliters) with it unless your doctor tells you otherwise. Do not lie down for at least 10 minutes after you have taken this drug. If stomach upset occurs while you are taking this medication, you may take it with food or milk.`
    ],7),
    encodeMemory([
        `* analgesics * price *`,
        `Can you give me an idea of how much analgesics cost?`,
        `Can you tell me the cost of analgesics?`,
        `How expensive are analgesics?`,
        `How much do analgesics cost?`,
        `What is the average cost of analgesics?`,
        `What is the cost of analgesics?`,
        `What is the price range for analgesics?`,
        `What is the typical cost of analgesics?`,
        `tell me the price of analgesics`
    ],[
        `According to Muramed and Watsons pharmacy, paracetamol such as biogesic may start at 4 pesos. Meanwhile, aspirin can start at 3.50 pesos as listed by watsons pharmacy. You, however, cannot buy this without prescription and the prices may vary depending on where you bought these.`
    ],7),
    encodeMemory([
        `* forms * analgesics *`,
        `Can you give me an idea of the different types of analgesics?`,
        `Can you tell me the various forms of analgesics?`,
        `Could you inform me of the different forms of analgesics?`,
        `Do you happen to know the different forms of analgesics?`,
        `How are analgesics available?`,
        `I'm curious, what forms do analgesics come in?`,
        `I'm interested in analgesics, what forms do they come in?`,
        `What are some common types of analgesics?`,
        `What are the different types of analgesics available on the market?`,
    ],[
        `Analgesics are available in many forms such as films, liquid, nasal sprays patches, pills, tablets, capsules, and powder mix.`
    ],7),
    encodeMemory([
        `* alternative * analgesics* `,
        `Apart from analgesics, what other choices do I have?`,
        `Are there any alternative treatments to analgesics?`,
        `Are there any natural remedies that can replace analgesics?`,
        `Are there any over-the-counter products that can replace analgesics?`,
        `Could you recommend any alternatives to analgesics?`,
        `I'm looking for options other than analgesics. What do you suggest?`,
        `What are some alternative therapies for pain besides analgesics?`,
        `What are some complementary treatments that can be used instead of analgesics?`,
        `What are some other drugs that can be used in place of analgesics?`,
        `What are some other medications that can be used instead of analgesics?`,
        `What are some substitutes for analgesics?`,
        `What are the different treatments available besides analgesics?`,
        `What are the other options for treating pain other than analgesics?`,
        `What other options are there besides analgesics?`,
        `tell me the list of alternatives for analgesics`,
        `give me the list of alternatives for analgesics`,
        `tell me about the natural remedies that are alternative to analgesics`
    ],[
        `The Philippine Institute of Traditional and Alternative Healthcare has indicated that you can Ampalaya, Yerba Buena, ulasimang bato or pansit-pansitan, and guava has an analagesic effects.`
    ],7),
    // nsaids names 
    encodeMemory([
        `* generic * nsaid*`,
        `Can you give me some examples of generic NSAIDs?`,
        `Can you provide me with a list of generic drugs nsaids ?`,
        `Can you tell me some generic name for nsaids ?`,
        `Could you provide me with a list of generic names for NSAIDs ?`,
        `I need to know the non brand name names of  nsaids `,
        `What are some common generic names of nsaids ?`,
        `What are some examples of generic  nsaids ?`,
        `What are some generic names of  nsaids ?`,
        `What are the generic names of nsaids ?`,
        `What are the generic names of some commonly used nsaids ?`,
        `What are the generic versions of popular NSAIDs `,
        `tell me about generic nsaids`,
    ],[
        `NSAID has generic names such as ibuprofen, naproxen, and aspirin which are mostly over the counter anti-inflammatory drugs`
    ],7),
    encodeMemory([
        `* what * branded * nsaid*`,
        `Can you give me some examples of branded NSAIDs?`,
        `Can you provide me with a list of brand names of NSAIDs?`,
        `Could you provide me with a list of branded drugs for inflammation relief?`,
        `I need to know the brand names of some NSAIDs`,
        `I'm trying to find branded NSAIDs. Can you help me?`,
        `What are some commonly known brands of non-steroidal anti-inflammatory drugs?`,
        `What are some examples of branded NSAIDs?`,
        `What are some of the well-known brand names of NSAIDs?`,
        `What are the brand names of some commonly prescribed NSAIDs?`,
        `What are the brand versions of commonly used NSAIDs?`,
        `tell me about branded nsaids`
    ],[
        `Advil is a known ibuprofen. Meanwhile, Flanax Forte is a known brand for Naproxen.`
    ],7),
    encodeMemory([
        `* what * take * nsaid *`,
        `* what * direction * nsaid *`,
        `* what * dosing * nsaid *`,
        `* how * direction * nsaid *`,
        `* how * dosing * nsaid *`,
        `* how * take * nsaid *`,
        `* how * nsaid * take *`,
        `* what * direction * nsaid*`,
        `* what * dosing * nsaid*`,
        `Can I take analgesics with food  on an empty stomach?`,
        `How much analgesic should I take?`,
        `How often should I take analgesics?`,
        `What are the instructions for taking analgesics?`,
        `What is the proper way to take analgesics?`,
        `What is the recommended dosage for analgesics?`,
        `When should I take analgesics?`,
        `tell me how do i take nsaids`,
        `tell me how to eat nsaids`,
        `tell me about the correct dosage of nsaids`,
        `what is the correct way of taking nsaids`,
        `tell me about the direction of taking nsaids`,
    ],[
        `Here are some of the dosages you can follow. For ibuprofen an (NSAID) the maximum single dose is 400mg. For the entire day, its 1200mg. For naproxen (NSAID) , you can take up to 500mg for single dose and 750mg for the entire day. For aspirin, also known as acetylsalicylic acid, you can take up to 1000mg with maximum daily dose of 3000mg for people under 65 and 200mg for people over 65years old. The information I provided is an example of how you take this medicine. If you need further information or have underlying health condition please refer to your healthcare provider.
        `
    ],7),
    encodeMemory([
        `* nsaid*`,
        `Can you explain what NSAIDs are?`,
        `Could you tell me about NSAIDs?`,
        `How would you define NSAIDs?`,
        `What are the purposes of NSAIDs?`,
        `What can you tell me about NSAIDs?`,
        `What exactly are NSAIDs?`,
        `What is the definition of NSAIDs?`,
    ],[
        `Non-steroidal anti-inflammatory drugs (NSAIDs) are medicines that are widely used to relieve pain, reduce inflammation, and bring down a high temperature.`
    ],7),
    encodeMemory([
        `* what * nsaid* use *`,
        `How are NSAIDs used in managing pain?`,
        `In what situations might NSAIDs be prescribed?`,
        `What are the common uses of NSAIDs?`,
        `What conditions can NSAIDs help alleviate?`,
        `What do NSAIDs do and how are they used?`,
        `What medical conditions are NSAIDs typically prescribed for?`,
        `What types of inflammation and pain are NSAIDs effective at treating?`,
        `When are NSAIDs typically recommended for use?`,
        `tell me about where nsaids are used`
    ],[
        `They're often used to relieve symptoms of headaches, painful periods, sprains and strains, colds and flu, arthritis, and other causes of long-term pain`
    ],7),
    encodeMemory([
        `* nsaids? * treat *`,
        `* nsaid* work *`,
        `How do nsaids affect the immune system?`,
        `How do nsaids treat inflammation?`,
        `How do nsaids work to relieve pain?`,
        `What are NSAIDs and how do they work?`,
        `What is the role of nsaids in inhibiting pain signals?`,
        `tell me how nsaids treats`,
        `how does nsaid treat  influenza`,
    ],[
        `NSAIDs block a specific enzyme called cyclooxygenase (or COX) used by the body to make prostaglandins. By reducing production of prostaglandins, NSAIDs help relieve the discomfort of fever and reduce inflammation and the associated pain.`
    ],7),
    encodeMemory([
        `* avoid * nsaid*`,
        `* not * (take|use) * nsaid*`,
        `Are there any circumstances where I should avoid NSAIDs altogether?`,
        `Are there any conditions where I should avoid using NSAIDs?`,
        `Can you tell me when it's not safe to take NSAIDs?`,
        `In what scenarios are NSAIDs not recommended?`,
        `Should I avoid NSAIDs if I have certain medical conditions?`,
        `What are some situations where I should avoid taking NSAIDs?`,
        `What are the  risks of taking NSAIDs in certain situations?`,
        `When should I not take NSAIDs?`,
        `tell me why is it important not to take nsaids`,
        `explain to me why should i not take nsaids`
    ],[
        `NSAIDs are generally not recommended for people with kidney disease, heart failure, or cirrhosis, or for people who take diuretics. Some patients who are allergic to aspirin may be able to take selective NSAIDs safely, although this should be discussed in advance with a health care provider.`
    ],7),
    encodeMemory([
        `*effect *nsaid*`,
        `Are there any adverse effects associated with taking NSAIDs?`,
        `Can you describe some of the common side effects of NSAIDs?`,
        `Can you tell me about the risks and drawbacks of taking NSAIDs?`,
        `Do NSAIDs have any harmful effects on the body?`,
        `What are some of the side effects that may result from taking NSAIDs?`,
        `What are the  negative consequences of using NSAIDs?`,
        `What are the potential side effects of NSAIDs?`,
        `What are the uses and effects of NSAIDs?`,
        `What should I watch out for when taking NSAIDs to avoid any adverse reactions?`,
        `tell me about the side effects nsaids`,
        `What are the potential risks and benefits of taking NSAIDs?`,
        `tell to me why nsaids can be harmful`,
    ],[
        `There's a risk of side effects from NSAIDs. These tend to be more common if you're taking high doses for a long time, or you're elderly or in poor general health. 
        
        The possible side effects include indigestions, stomach aches, stomach ulcers, headaches, drowsiness, dizziness, allergic reactions, it can also cause problems with your liver, kidneys or heart circulation, such as heart failure, heart attacks and strokes.
        
        Over-the-counter NSAIDs generally have fewer side effects than stronger prescription medicines.
        `
    ],7),
    encodeMemory([
        `* tips * nsaid*`,
        `Can you provide some advice on taking NSAIDs?`,
        `What are some dos and don'ts in taking NSAIDs?`,
        `What are the best practices in using NSAIDs?`,
        `What are the important things to keep in mind when taking NSAIDs?`,
        `What are the key factors to consider when taking NSAIDs?`,
        `tell me tips or advices when taking nsaids`,
        `give me tips or advices when taking nsaids`
    ],[
        `Do not mix one NSAID with another. For example, don't take aspirin or ibuprofen with any other nonsteroidal anti-inflammatory drugs.`
    ],7),
    encodeMemory([
        `* nsaid* price *`,
        `Can you give me an idea of how much NSAIDs cost?`,  
        `How expensive are NSAIDs?`,  
        `How much do NSAIDs typically cost?`,  
        `How much money do I need to buy NSAIDs?`,
        `What is the average price of NSAIDs?`,  
        `What is the cost of NSAIDs?`,  
        `What is the going rate for NSAIDs?`,  
        `What is the market price of NSAIDs?`,  
        `What is the price range of NSAIDs?`,  
        `tell me about the price of nsaids`
    ],[
        `Based on data from watsons, this medicine usually starts at 8php per piece`
    ],7),
    encodeMemory([
        `* forms * nsaid*`,
        `Can you give me an idea of the different types of NSAIDs?`,
        `Can you tell me the various forms of NSAIDs?`,
        `Could you inform me of the different forms of NSAIDs?`,
        `Do you happen to know the different forms of NSAIDs?`,
        `How are NSAIDs available?`,
        `I'm curious, what forms do NSAIDs come in?`,
        `I'm interested in NSAIDs, what forms do they come in?`,
        `What are the different forms of NSAIDs available?`,
        `What are the different types of NSAIDs on the market?`,
        `What are the different types of NSAIDs?`,
        `give me the list of different forms of nsaids`,
        `tell me the list of different forms of nsaids`
    ],[
        `Common NSAIDs are usually in forms of capsules, tablets creams or gels as NSAIDs can cause troublesome side effects, alternatives are often recommended first. `
    ],7),
    encodeMemory([
        `* alternative * nsaid* `,
        `Apart from NSAIDs, what other choices do I have?`,
        `Are there any alternative treatments to NSAIDs?`,
        `Are there any natural remedies that can replace NSAIDs?`,
        `Are there any over-the-counter products that can replace NSAIDs?`,
        `Could you recommend any alternatives to NSAIDs?`,
        `I'm looking for options other than NSAIDs. What do you suggest?`,
        `What are some alternative therapies for pain and inflammation besides NSAIDs?`,
        `What are some complementary treatments that can be used instead of NSAIDs?`,
        `What are some other drugs that can be used in place of NSAIDs?`,
        `What are some other medications that can be used instead of NSAIDs?`,
        `What are some substitutes for NSAIDs?`,
        `What are the different treatments available besides NSAIDs?`,
        `What are the other options for treating pain and inflammation other than NSAIDs?`,
        `What other options are there besides NSAIDs?`,
        `tell me a list of alternative to nsaids`,
        `give me a list of alternative to nsaids`,
        `tell  me the list of alternative natural herbal remedies aside from nsaids`
    ],[
        `The main alternative for pain relief is paracetamol, which is available over the counter and is safe for most people to take.`
    ],7),

    // decongestatnts
    encodeMemory([
        `*  generic * decongestant*`,
        `Can you give me some examples of generic decongestant medication?`,
        `Can you provide me with a list of generic decongestants?`,
        `Can you provide me with a list of generic drugs for nasal congestion?`,
        `Could you provide me with a list of generic names for nasal decongestants?`,
        `What are some common generic names of nasal decongestants?`,
        `What are some examples of generic nasal decongestants?`,
        `What are some generic names of decongestant medication that are commonly used?`,
        `What are the generic names of some common decongestants?`,
        `What are the generic names of some commonly used decongestants?`,
        `What are the generic versions of popular decongestants?`,
        `tell me about generic decongestants`
    ],[
        `Generic decongestants include phenylephrine, pseudoephedrine, and oxymetazoline. These medications are available over the counter and can come in various forms such as tablets, capsules, nasal sprays, or liquids. It is important to follow the recommended dosage and precautions when taking decongestants as they can cause side effects such as nervousness, increased heart rate, and high blood pressure in some individuals.`
    ],7),
    encodeMemory([
        `* branded * decongestant*`,
        `Can you give me some examples of branded nasal sprays that are also decongestants?`,
        `Can you provide me with a list of brand names of decongestants?`,
        `Could you provide me with a list of branded drugs for congestion relief?`,
        `I need to know the brand names of some decongestants`,
        `I'm trying to find branded decongestants.`,
        `What are some commonly known brands of nasal decongestants?`,
        `What are some examples of branded decongestants?`,
        `What are some of the well-known brand names of decongestants?`,
        `What are the brand names of some commonly prescribed nasal decongestants?`,
        `What are the brand versions of commonly used decongestants?`,
        `tell me about branded decongestants`,
    ],[
        `Some known branded decongestant are decolgen and sudafed. It is important to follow the recommended dosage and precautions when taking decongestants as they can cause side effects such as nervousness, increased heart rate, and high blood pressure in some individuals.`
    ],7),
    encodeMemory([
        `* what * take * expectorant *`,
        `* what * direction * expectorant *`,
        `* what * dosing * expectorant *`,
        `* how * direction * expectorant *`,
        `* how * dosing * expectorant *`,
        `* how * take * expectorant *`,
        `* how * decongestant*`,
        `* what * direction * decongestant*`,
        `* what * dosing * decongestant*`,
        `Can you tell me on the proper dosing of decongestant?`,
        `Can you tell me about the dosing of decongestant?`,
        `How often should I take decongestant?`,
        `How should decongestant be taken?`,
        `What are the guidelines instructions for taking decongestant?`,
        `What is the specific appropriate correct proper way to use take decongestant?`,
        `What is the recommended dosage for taking decongestant?`,
        `What is the safe dosage for decongestant?`,
        `What is the typical dosage for decongestant?`,
        `What is the typical duration of treatment when using decongestants?`,
        `What is the usual dosage for decongestant?`,
        `explain to me the correct way of taking decongestants`,
        `tell me about the dosage of decongestants`,
    ],[
        `
        The usual dose depends on the medicine you're taking. For Pseudoephedrine (sudafed) however here are some of the recommendations. The usual dose of pseudoephedrine is 60mg tablets or as a liquid containing 30mg in 5ml. 
        
        Adults and children aged 12 to 17 years may take one 60mg tablet or two 5ml spoon (10ml) of liquid up to 4 times a day. While, children aged 6 to 11 years may take half a tablet (30mg) or one 5ml spoon of liquid up to 4 times a day.

        The information I provided is an example of how you take this medicine. If you need further information or have underlying health condition please refer to your healthcare provider.
        `
    ],7),
    encodeMemory([
        `* decongestant*`,
        `Can you describe decongestants to me?`,
        `Can you explain what decongestants are?`,
        `Could you give me an overview of decongestants?`,
        `How would you define decongestants?`,
        `I'm not familiar with decongestants, can you fill me in?`,
        `What are decongestants and how do they work?`,
        `What are the basics properties of decongestants?`,
        `What do you know about decongestants?`,
        `What is the purpose of decongestants?`,
        `tell me about decongestants`
    ],[
        `Decongestants are medicines that relieve congestion by reducing swelling, inflammation and mucus formation within the nasal passages or the eye.  They have no other effect on symptoms such as a runny nose or sneezing.`
    ],7),
    encodeMemory([
        `* decongestants * treat *`,
        `* decongestant* use *`,
        `How do decongestants work to treat congestion?`,
        `How quickly do decongestants start working to relieve congestion?`,
        `In what ways can decongestants relieve?`,
        `What are the benefits of using decongestants?`,
        `What conditions are decongestants used to treat?`,
        `tell me what does decongestants treat`,
        `how does decongestants treat  influenza`,
    ],[
        `Decongestants are medicines that help relieve a congested (stuffy) nose. The congestion can be caused by a cold virus or by the flu, sinusitis, or allergies`
    ],7),
    encodeMemory([
        `* decongestant* work *`,
        `Can you describe the process of how decongestants work?`,
        `Can you explain how decongestants work?`,
        `How do decongestants operate to relieve congestion?`,
        `How do decongestants reduce nasal congestion?`,
        `In what manner do decongestants work?`,
        `What are the ways in which decongestants function?`,
        `What happens in the body when decongestants are taken?`,
        `tell me about how decongestants work to treat`
    ],[
        `Decongestants work by narrowing the blood vessels in your nose. Swollen tissue inside the nose shrinks, and air can pass through more easily.`
    ],7),
    encodeMemory([
        `* not * (take|use) * decongestant*`,
        `* avoid * decongestant*`,
        `Are there any circumstances where decongestants should not be used?`,
        `What are the  interactions that may make it necessary to avoid decongestants?`,
        `What are the reasons to avoid decongestants?`,
        `What are the situations in which decongestants should be avoided?`,
        `What conditions make it necessary to avoid decongestants?`,
        `What makes decongestants unsafe to use?`,
        `When is it necessary to stop taking decongestants?`,
        `When is it not safe to take decongestants?`,
        `Why are decongestants not suitable for everyone?`,
        `Why is it not recommended to take decongestants?`,
        `explain why decongestants should be avoided`,
        `tell why decongestants should be avoided`
    ],[
        `Don’t take decongestants if you have high blood pressure that isn’t controlled. Taking decongestants can raise your blood pressure even if it is controlled or nearly normal. You may need to look for an alternative to decongestants. Don’t give decongestants to children younger than 6 years of age.`
    ],7),
    encodeMemory([
        `*effect *decongestant*`,
        `Are there any negative effects associated with taking decongestants?`,
        `Are there any side effects to be aware of when taking decongestants?`,
        `Can you list some side effects of decongestants?`,
        `Do decongestants have any unwanted effects?`,
        `How can decongestants affect the body negatively?`,
        `What are some of the  side effects of decongestants?`,
        `What are the effects of decongestants on the body?`,
        `What are the risks associated with taking decongestants?`,
        `What are some potential side effects of using decongestants?`,
        `What are the potential risks of taking decongestants in certain situations?`,
        `What are the side effects of decongestants and why should I avoid them?`,  
        `tell me the list of side effects of decongestants`,
        `show me the list of side effects of decongestants`
    ],[
        `Decongestants can sometimes cause side effects. They can temporarily cause nervousness, dizziness, and sleeping problems. They can cause heart palpitations (feeling like your heart is racing) or higher blood pressure`
    ],7),
    encodeMemory([
        `* tips * decongestant*`,
        `What are some do's and don'ts of taking decongestants?`,
        `What are some helpful hints for taking decongestants?`,
        `What are some important considerations for taking decongestants?`,
        `What are some important things to keep in mind when using decongestants?`,
        `What are some recommendations for taking decongestants safely and effectively?`,
        `What are the best practices for taking decongestants?`,
        `tell me advice or tips in  using decongestantss`
    ],[
        `Decongestants may be taken orally to help relieve congestion that is affecting the nose, sinuses, and eyes or sprayed directly in the nose or instilled in the eye for a more local effect.`
    ],7),
    encodeMemory([
        `* decongestant * price *`,
        `Can you give me an idea of the cost of decongestants?`,
        `Can you tell me the price of decongestants?`,
        `How much does it cost to buy decongestants?`,
        `I'm curious, how much do decongestants cost?`,
        `What is the price tag on decongestants?`,
        `What's the cost of decongestants?`,
        `tell me the price of decongestant`
    ],[
        `The price varies according to the form of the medicine. For example, for nasal sprays it starts with 90php, for drops around 78 (rose pharmacy website), and tablets like decolgen it starts with 6php (watsons).`
    ],7),
    encodeMemory([
        `* what * forms * decongestant*`,
        `Can you give me an idea of the different types of decongestants?`,
        `Can you tell me the various forms of decongestants?`,
        `Could you inform me of the different forms of decongestants?`,
        `Do you happen to know the different forms of decongestants?`,
        `I'm curious, what forms do decongestants come in?`,
        `I'm interested in decongestants, what forms do they come in?`,
        `What are the different types of decongestants available on the market?`,
        `tell me about the different forms of decongestants`
    ],[
        `Decongestants are available as nose drops or nasal sprays, eye drops, and as tablets, capsules, and syrup.`
    ],7),
    encodeMemory([
        `* alternative * decongestant* `,
        `Apart from decongestants, what other choices do I have?`,
        `Are there any alternative treatments to decongestants?`,
        `Are there any natural remedies that can replace decongestants?`,
        `Could you recommend any alternatives to decongestants?`,
        `I'm looking for options other than decongestants. What do you suggest?`,
        `What are some alternative therapies for congestion besides decongestants?`,
        `What are some complementary treatments that can be used instead of decongestants?`,
        `What are some other drugs that can be used in place of decongestants?`,
        `What are some other medications that can be used instead of decongestants?`,
        `What are some substitutes for decongestants?`,
        `What are the different treatments available besides decongestants?`,
        `What are the other options for treating congestion other than decongestants?`,
        `What other options are there besides decongestants?`,
        `tell me about the existing alternatives natural remedies to decongestants`
    ],[
        `Alternatives to oral decongestants are available. In the drug realm, antihistamines such as diphenhydramine (Benadryl), chlorpheniramine (Chlor-Trimeton), cetirizine (Zyrtec), and loratadine (Claritin) can help with a stuffy nose are safe for the hear`
    ],7),

    // expectorants
    encodeMemory([
        `* generic * expectorant*`,
        `Can you tell me the generic names of some expectorant drugs?`,
        `Could you provide me with a list of generic drugs for cough`,
        `Could you provide me with a list of generic expectorants?`,
        `I'm looking for the non-brand names of expectorant medication. Can you help me out?`,
        `I'm trying to find generic expectorants. Can you help me?`,
        `What are some commonly used generic expectorants?`,
        `What are some generic expectorants that are commonly prescribed?`,
        `What are the generic versions of popular expectorant drugs?`,
        `What are the non branded names of commonly used expectorants?`,
        `tell me about generic expectorant`,
        `how does expectorant treat  influenza`,
    ],[
        `Guiafenesin and potassium iodide are examples of a generic expectorant.These are also foud in products such as Mucinex and Robitussin. These medications are commonly used to treat respiratory conditions such as bronchitis, asthma, and the common cold. It is important to note that these medications may not be suitable for everyone and should be used according to the instructions of a healthcare professional.
        `
    ],7),
    encodeMemory([
        `* branded * expectorant*`,
        `Can you give me some examples of branded cough syrups that are also expectorants?`,
        `Can you provide me with a list of brand names of expectorants?`,
        `Could you provide me with a list of branded drugs for mucus relief?`,
        `I need to know the brand names of some expectorants`,
        `I'm trying to find branded expectorants. Can you help me?`,
        `What are some commonly known brands of cough expectorants?`,
        `What are some examples of branded expectorants?`,
        `What are some of the well-known brand names of expectorants?`,
        `What are the brand names of some commonly prescribed cough expectorants?`,
        `What are the brand versions of commonly used expectorants?`,
        `tell me about branded expectorant`
    ],[
        `Mucinex and Robitussin are some of the popular ones. It is important to note that, while there are different names and formulations for brand expectorants, they all work together with the aim of reducing mucus retention in the respiratory system which makes it easier to cough or clear your body. Follow the recommended dosage of this medicine, or as requested by a healthcare professional`
    ],7),
    encodeMemory([
        `* what * take * expectorant *`,
        `* what * direction * expectorant *`,
        `* what * dosing * expectorant *`,
        `* how * direction * expectorant *`,
        `* how * dosing * expectorant *`,
        `* how * take * expectorant *`,
        `Can you tell me how to properly take expectorants?`,
        `How much expectorant should I take?`,
        `How often should I take expectorants?`,
        `How should I take expectorants?`,
        `What is the correct dosage of expectorants?`,
        `What is the proper, recommended, best way to use expectorants?`,
        `What is the safe amount of expectorant to take?`,
        `What is the usual dose of expectorants?`,
        `tell me about the proper dose of expectorants`,
        `tell me what is the proper way of using expectorants`
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
        `Can you explain what expectorants are?`,
        `Could you enlighten me about expectorants?`,
        `How do you define expectorants?`,
        `I would like to know about expectorants.`,
        `What exactly are expectorants?`,
        `What is the definition of expectorants?`,
        `What is the purpose of expectorants?`,
        `tell me about expectorant`
    ],[
        `Expectorants are ingredients that increase airway secretions. They do this by increasing the water content of the secretions which decreases their stickiness, making them easier to cough up. Expectorants are often used to help treat respiratory conditions such as bronchitis, pneumonia, and the common cold.
        `
    ],7),
    encodeMemory([
        `* expectorant* use *`,
        `where are expectorants utilized?`,
        `In what situations are expectorants recommended?`,
        `What are expectorants commonly used for?`,
        `What are the benefits of taking expectorants?`,
        `What are the uses of expectorants?`,
        `What conditions are treated with expectorants?`,
        `What is the function of expectorants in the body?`,
        `What is the purpose of expectorants?`,
        `What is the role of expectorants in treating respiratory conditions?`,
        `Why do people take expectorants?`,
        `tell me about where are expectorants used`,
        `explain to me how are expectorants used`
    ],[
        `You may take an expectorant to help relieve congestion if you have a cold or the flu. Expectorants are available as standalone drugs or as an ingredient in an all-in-one cold or flu medication.`
    ],7),
    encodeMemory([
        `* expectorants * treat *`,
        `* expectorant* work *`,
        `Can you explain how expectorants help with coughs?`,
        `How do expectorants help to alleviate coughing`,
        `How do expectorants work?`,
        `How does an expectorant help loosen mucus?`,
        `In what way do expectorants help with respiratory conditions?`,
        `What happens in the body when someone takes an expectorant?`,
        `tell me about how expectorants treat conditions`,
    ],[
        `Expectorants lubricate your airway. This helps loosen up the mucus and make the secretions in your airway thinner. By loosening up the mucus, expectorants make your cough more productive. This makes it easier for you to cough up mucus effectively and clear your throat.`
    ],7),
    encodeMemory([
        `* not * (take|use) * expectorant*`,
        `* avoid * expectorant*`,
        `Are there any circumstances when expectorants can be harmful?`,
        `Are there any conditions where I shouldn't take expectorants?`,
        `Are there any instances when I should avoid expectorants?`,
        `Can you tell me on when not to use expectorants?`,
        `Can you tell me when expectorants are not recommended?`,
        `In what cases should I steer clear of expectorants?`,
        `What are the scenarios where I should not take expectorants?`,
        `What are the situations when it's not advisable to take expectorants?`,
        `What are the warnings associated with expectorant use?`,
        `When is it best to avoid taking expectorants?`,
        `When is it not safe to take expectorants?`,
        `When should I avoid taking expectorants?`,
        `tell me why should i avoid taking expectorants`
    ],[
        `You should talk to your healthcare provider before using an expectorant if you are pregnant or breastfeeding. If you have developed any type of allergic reaction or intolerance to expectorants in the past, you should not use these medications.

        Use caution when driving or using machinery while taking an expectorant, as these medications can make you drowsy or dizzy
        `
    ],7),
    encodeMemory([
        `*effect *expectorant*`,
        `What are the potential risks of taking expectorants?`,
        `Are there any risks associated with taking expectorants?`,
        `Are there any side effects associated with taking expectorants?`,
        `Do expectorants have any potential side effects?`,
        `What are the common side effects of expectorants?`,
        `What are the known side effects of expectorants?`,
        `What are the  side effects of expectorants?`,
        `What should I be aware of in terms of side effects when taking expectorants?`,
        `show me the list of side effects of expectorants`,
        `tell  the list of side effects of expectorants`
    ],[
        `Expectorants do not commonly cause serious side effects. They may cause dizziness, drowsiness, and rash though.`
    ],7),
    encodeMemory([
        `* tips * expectorant*`,
        `Can you recommend some tips for taking expectorants with food on an empty stomach?`,
        `Can you share some tips on how to take expectorants effectively?`,
        `How should I take expectorants for the best results?`,
        `tell me some advice or tips when taking expectorants`,
        `give me some tips or advice for having expectorants`
    ],[
        `Do not crush pills, and be sure to measure liquid formulations using the measuring tools provided with your medication. It is often recommended that you drink plenty of fluids when taking an expectorant.`
    ],7),
    encodeMemory([
        `* expectorant* price *`,
        `Can you tell me the price of expectorants?`,
        `Could you inform me of the price of expectorants?`,
        `How much does it cost to buy expectorants?`,
        `I'm curious, how much do expectorants cost?`,
        `I'm interested in expectorants, how much are they?`,
        `What is the price tag on expectorants?`,
        `What's the cost of expectorants?`,
        `tell me the price of expectorants`
    ],[
        `At watsons, robitussin guaifenesin price starts at 92php. `
    ],7),
    encodeMemory([
        `* forms * expectorant*`,
        `Can you give me an idea of the different types of expectorants?`,
        `Can you tell me the various forms of expectorants?`,
        `Could you inform me of the different forms of expectorants?`,
        `Do you happen to know the different forms of expectorants?`,
        `I'm curious, what forms do expectorants come in?`,
        `I'm interested in expectorants, what forms do they come in?`,
        `What are the different types of expectorants available on the market?`,
        `tell me about the various forms of expectorants`
    ],[
        `In general, expectorants are available over-the-counter (OTC) in liquid, pill, and tablet forms.`
    ],7),
    encodeMemory([
        `* alternative * expectorant*`,
        `Are there any natural remedies that can replace expectorants?`,
        `Are there any other options for relieving chest congestion besides expectorants?`,
        `What are some alternative treatments for respiratory congestion?`,
        `What are some home remedies for chest congestion that don't involve expectorants?`,
        `What are the substitutes for expectorants?`,
        `What herbal remedies can be used instead of expectorants?`,
        `What non-medical alternatives are there to expectorants?`,
        `What other medications can be used in place of expectorants?`,
        `What other types of medications can help with cough and congestion?`,
        `What over the counter medications can be used instead of expectorants?`,
        `tell show me a list of the alternatives to expectorants`
    ],[
        `Natural expectorants are another option if you’re trying to loosen up mucus and relieve chest congestion. Natural expectorants include: Menthol, Ivyleaf extract, oral hydration ( drinking lots of water ) , steaming (inhaling warm moist air ) , and honey ( adding honey to drinks ) `
    ],7),

    // antitussives
    encodeMemory([
        `* generic * antitussive *`,
        `Can you give me some examples of generic antitussive medication?`,
        `Can you provide me with a list of generic antitussives? `,
        `Could you provide me with a list of generic drugs for antitussives`,
        `I'm trying to find generic antitussives. Can you help me?`,
        `What are some examples of generic  antitussives`,
        `What are the generic names of some common antitussives?`,
        `What are the generic names of some commonly prescribed antitussives`,
        `What are the generic versions of commonly used antitussives?`,
        `tell me about generic antitussives`
    ],[
        `Dextromethorphan, codeine and diphenhydramine are some of the popular generic antitussives. It is important to remember that generic antitussives contain similar active substances with are also found in branded ones`
    ],7),
    encodeMemory([
        `* branded * antitussive *`,
        `Can you give me some examples of branded cough syrups that are also antitussives?`,
        `Can you provide me with a list of brand names of antitussives?`,
        `Could you provide me with a list of branded drugs for cough suppression?`,
        `I need to know the brand names of some antitussives`,
        `I'm trying to find branded antitussives. Can you help me?`,
        `What are some commonly known brands of cough suppressants?`,
        `What are some examples of branded antitussives?`,
        `What are some of the well-known brand names of antitussives?`,
        `What are the brand names of some commonly prescribed cough suppressants?`,
        `What are the brand versions of commonly used antitussives?`,
        `tell me about branded antitussives`
    ],[
        `Robitussin is among the popular antitussive found in pharmacies. You have to remember that despite having identical ingredients, branded ones are more expensive than the generic ones.`
    ],7),
    encodeMemory([
        `* what * take * antitussive *`,
        `* what * direction * antitussive *`,
        `* what * dosing * antitussive *`,
        `* how * direction * antitussive *`,
        `* how * dosing * antitussive *`,
        `* how * take * antitussive *`,
        `Are there any special instructions I should follow when taking antitussives?`,  
        `How long should I continue taking antitussives?`,  
        `How often should I take antitussives?`,   
        `What is the proper way to take antitussives?`,  
        `What is the recommended dosage of antitussives?`, 
        `tell me about the correct way of taking antitussives`,
        `tell me how do you take antitussives`,
        `tell me about the propose dose of taking antitussives`,
        `give me some directions on how to use antitussives`,
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
        `Can you explain what antitussives are?`,
        `What are antitussives?`,
        `What are the uses of antitussives?`,
        `What do antitussives do?`,
        `What do you know about antitussives?`,
        `What is the definition of antitussives?`,
        `What is the purpose of antitussives?`,
        `tell me about antitussives`
    ],[
        `Antitussives are prescription or over-the-counter drugs used for suppressing cough.`
    ],7),
    encodeMemory([
        `* antitussive * use *`,
        `For what reasons are antitussives taken?`,
        `In what conditions are antitussives used?`,
        `What ailments do antitussives treat?`,
        `What are the benefits of using antitussives?`,
        `What are the indications for using antitussives?`,
        `What are the therapeutic uses of antitussives?`,
        `What are the uses of antitussives?`,
        `What is the purpose of taking antitussives?`,
        `What medical issues do antitussives help with?`,
        `Why are antitussives prescribed?`,
        `tell me about the usage of antitussives`
    ],[
        `They are typically used to treat a dry cough caused by allergies, respiratory illnesses, or infections.Antitussives can also treat post-viral cough, or a persistent cough that develops after an infection has resolved.`
    ],7),
    encodeMemory([
        `* antitussives * treat *`,
        `* antitussive * work *`,
        `How do antitussives interact with the nervous system to treat coughing?`,
        `How do antitussives suppress coughing?`,
        `How does antitussives affect the cough center in the brain?`,
        `How does antitussives affect the cough reflex?`,
        `How does antitussives relieve coughing?`,
        `What are the benefits of antitussives for coughing patients?`,
        `What are the effects of antitussives on cough reflex sensitivity?`,
        `What are the ways antitussives work to treat coughing?`,
        `What happens in the body when someone takes antitussives?`,
        `What is the mode of action of antitussives?`,
        `What is the role of antitussives in managing cough?`,
        `tell me about how to antitussives treat coughs`,
        `how does antitussives treat  influenza`,
    ],[
        `Antitussives are thought to work by inhibiting a coordinating region for coughing located in the brain stem, disrupting the cough reflex arc; although the exact mechanism of action is unknown.`
    ],7),
    encodeMemory([
        `* not * (take|use) * antitussive *`,
        `* avoid * antitussive *`,
        `Are there any situations where antitussives can be harmful?`,
        `Are there any situations where antitussives should not be taken?`,
        `In which cases should antitussives be avoided?`,
        `Is it safe to take antitussives with other medications?`,  
        `Under what conditions should antitussives be avoided?`,
        `What are the circumstances where antitussives are not recommended?`,
        `What are the factors that determine whether antitussives should be avoided?`,
        `What are the situations where antitussives are not suitable?`,
        `When is it not recommended to take antitussives?`,    
        `When should antitussives be skipped?`,
        `tell me when it is not safe to take antitussives`,
        `tell me why should i avoid antitussives`,
        `explain why should i avoid taking antitussivs`
    ],[
        `This medication is not safe for children under the age of 4 years.`
    ],7),
    encodeMemory([
        `*effect *antitussive *`,
        `Are there any known side effects of antitussives?`,
        `Are there any serious side effects associated with antitussives?`,
        `Are there any side effects I should be aware of when taking antitussives?`,  
        `Can you list some of the side effects of antitussives?`,
        `Do antitussives have any negative effects on the body?`,
        `How safe are antitussives and what are their side effects?`,
        `What are some of the adverse effects of antitussives?`,
        `What are the effects of antitussives?`,
        `What are the most common side effects of antitussives?`,
        `What are the potential side effects of antitussives?`,
        `What should I be aware of in terms of side effects when taking antitussives?`,
        `tell , give, or show me the side effects of antitussivs`
    ],[
        `The most common side effects include nausea and drowsiness. Some patients may experience a rash or difficulty breathing. High doses may cause hallucinations and disassociation, and the drug has been reported to be used as a recreational drug`
    ],7),
    encodeMemory([
        `* tips * antitussive *`,
        `What are some things to keep in mind when taking antitussives?`,
        `Any tips on how to take antitussives effectively?`,
        `What should I know before taking antitussives?`,
        `Can you give me some advice on taking antitussives?`,
        `Are there any special instructions for taking antitussives?`,
        `What are some dos and don'ts of taking antitussives?`,
        `give me advice on how to take antitussives`,
        `tell  advice on how to take antitussives`
    ],[
        `Take this medication by mouth with or without food with a full glass of water (8 ounces or 240 milliliters) or as directed by your doctor. `
    ],7),
    encodeMemory([
        `* antitussive * price *`,
        `Can you tell me the price of antitussives?`,
        `Could you inform me of the price of antitussives?`,
        `How much does it cost to buy antitussives?`,
        `I'm curious, how much do antitussives cost?`,
        `What is the price tag on antitussives?`,
        `What's the cost of antitussives?`,
    ],[
        `In southstar drug store, it dextromethorphan syrup cost starts at 113php. It watsons, its around 189php. It may vary though from other pharmacies`
    ],7),
    encodeMemory([
        `* forms * antitussive *`,
        `Can you give me an idea of the different types of antitussives?`,
        `Can you provide me with a list of the various forms of antitussives?`,
        `Could you inform me of the different forms of antitussives?`,
        `Do you happen to know the different forms of antitussives?`,
        `How are antitussives available?`,
        `I'm interested in antitussives, what forms do they come in?`,
        `What are the different forms of antitussives available?`,
        `What are the different types of antitussives on the market?`,
        `What are the different types of antitussives?`,
        `What forms do antitussives come in?`,
        `tell me about the different forms of antitussives`
    ],[
        `Antitussives have many forms. It can be a tablet, capsule,gel, liquid , syrup, lozenge or strips. However, I can only recommend the usual  dosage of its logenzes and syrup forms.`
    ],7),
    encodeMemory([
        `* alternative * antitussive *`,
        `Apart from expectorants, what other choices do I have?`,
        `Are there any alternative treatments to expectorants?`,
        `Are there any natural remedies that can replace expectorants?`,
        `Are there any over-the-counter products that can replace expectorants?`,
        `Could you recommend any alternatives to expectorants?`,
        `I'm looking for options other than expectorants. What do you suggest?`,
        `What are some alternative therapies for cough and congestion besides expectorants?`,
        `What are some other drugs that can be used in place of expectorants?`,
        `What are some other medications that can be used instead of expectorants?`,
        `What are some substitutes for expectorants?`,
        `What are the different treatments available besides expectorants?`,
        `What are the other options for treating cough and congestion other than expectorants?`,
        `What other options are there besides expectorants?`,
        `tell me abou the alternative remedies to antitussives`
    ],[
        `Honey is a time-honored remedy for a sore throat. According to one study, trusted Source, it can also relieve coughs more effectively than OTC medications that contain dextromethorphan (DM), a cough suppressant.`
    ],7),
    // lozenges
    encodeMemory([
        `* generic * lozenge *`,
        `Can you give me some examples of generic sore throat lozenges?`,
        `Can you provide me with a list of generic lozenges?`,
        `Could you provide me with a list of generic drugs for sore throat relief?`,
        `I need to know the generic names of lozenge medication`,
        `I'm trying to find generic throat lozenges. Can you help me?`,
        `What are some examples of generic throat lozenges?`,
        `What are the generic names of some commonly prescribed throat lozenges?`,
        `What are the generic versions of commonly used throat lozenges?`,
        `tell me about generic lozenges`
    ],[
        `Some of the generic names of logenzes include dextromethorphan and benzocaine-menthol`
    ],7),
    encodeMemory([
        `* branded * lozenge *`,
        `Can you give me some examples of branded lozenges?`,
        `Can you tell me the brand names of some throat lozenges?`,
        `Could you provide me with a list of branded drugs for throat soothing?`,
        `I need to find some lozenges. Can you provide me with a list of brands?`,
        `I'm looking for branded lozenges for my sore throat. Any suggestions?`,
        `What are some commonly used brand names of lozenges?`,
        `What are some examples of lozenges that have a brand name?`,
        `What are some of the branded versions of lozenges that you can recommend?`,
        `What are the well-known brand names of lozenges?`,
        `Which lozenges come in branded versions?`,
        `tell me about branded lozenges`
    ],[
        `Bactidol and strepsils are some of branded names of logenzes that can help relieve your throat`
    ],7),
    encodeMemory([
        `* what * take * lozenge *`,
        `* what * direction * lozenge *`,
        `* what * dosing * lozenge *`,
        `* how * direction * lozenge *`,
        `* how * dosing * lozenge *`,
        `* how * take * lozenge *`,
        `* direction * lozenge *`,
        `* dosing * lozenge *`,
        `What are the directions for using lozenges?`,
        `What are the instructions for taking lozenges?`,
        `What is the best way to take lozenges?`,
        `What is the correct way to use lozenges?`,
        `What is the prescribed dosage for lozenges?`,
        `What is the proper dosage for lozenges?`,
        `What is the proper way to dissolve a lozenge?`,
        `What is the recommended way to take lozenges?`,
        `tell me the proper dose when taking lozenges`,
        `tell us how to take lozenges`,
        `tell me the direction on what is the correct dosage when taking lozenges`
    ],[
        `Let the lozenge dissolve slowly in your mouth and swallow the dissolved liquid along with your saliva. Do not chew or swallow it whole. This product is usually used every 2 hours as needed`
    ],7),
    encodeMemory([
        `* lozenge *`,
        `Can you explain what lozenges are?`,
        `How would you describe lozenges?`,
        `What are lozenges?`,
        `What are the uses of lozenges?`,
        `What is the definition of lozenges?`,
    ],[
        `This product is used to temporarily relieve pain from minor mouth problems (such as canker sores, sore gums/throat, mouth/gum injury).`
    ],7),
    encodeMemory([
        `* what * lozenge * use  *`,
        `How do lozenges help?`,  
        `What ailments do lozenges treat?`,  
        `What are lozenges designed to do?`,  
        `What are the benefits of using lozenges?`,  
        `What are the uses of lozenges?`,  
        `What can lozenges be taken for?`,  
        `What conditions are lozenges helpful for?`,  
        `What is the purpose of lozenges?`,  
        `What do lozenges alleviate?`,  
        `tell me where is lozenges used`
    ],[
        `Taking Lozenges is a convenient, affordable option for symptomatic treatment of acute and chronic pharyngitis, irritation or inflammation of the upper respiratory tract and relief of unpleasant postoperative sensation in the throat.`
    ],7),
    encodeMemory([
        `* lozenges * treat  *`,
        `* lozenge * work *`,
        `Can you describe the way lozenges work to alleviate discomfort?`,
        `Can you explain how lozenges work to relieve?`,
        `How do lozenges help to soothe sore throats `,
        `How do lozenges treat the underlying condition?`,
        `How do lozenges work to alleviate?`,
        `What are the ingredients in lozenges that make them effective?`,
        `What do lozenges do?`,
        `What is the function of lozenges?`,
        `What makes lozenges effective in treating?`,
        `tell me how lozenges treat sore throat`,
        `how does lozenges treat  influenza`,
    ],[
        `When you suck on a lozenge, it starts to dissolve and release medicine. It is intended to dissolve slowly in the mouth to temporarily suppress the cough, and lubricate and soothe irritated tissues of the throat. Some have medications that help fight colds, and most have anesthetic to help ease the pain. Lozenges also contain menthol or eucalyptus, which can help cool and sooth the throat. Others contain honey, which is known to have cough suppression properties.`
    ],7),
    encodeMemory([
        `* not * (take|use) * lozenge *`,
        `* avoid * lozenge *`,
        `Are there any situations when lozenges should be avoided?`,
        `In what scenarios should one not use lozenges?`,
        `In which cases should one refrain from taking lozenges?`,
        `Under what circumstances should one steer clear of lozenges?`,
        `What are the conditions where lozenges should be avoided?`,
        `What are the situations where it is not recommended to take lozenges?`,
        `When is it not appropriate to use lozenges?`,
        `When should lozenges be avoided?`,
        `tell why a person should  avoid having lozenges`,
        `tell why lozenges should be avoided`
    ],[
        `If you have a sore throat that is severe or that lasts more than 2 days, or a cough that lasts more than 7 days or keeps coming back, or symptoms occur with a fever, headache, rash, swelling, nausea, or vomiting, tell your doctor promptly`
    ],7),
    encodeMemory([
        `*effect *lozenge *`,
        `Are there any downsides to using lozenges that I should be aware of?`,
        `Are there any negative effects associated with using lozenges?`,
        `Do lozenges have any known negative consequences?`,
        `What are some  adverse reactions to lozenges?`,
        `What are the potential side effects of using lozenges?`,
        `What are the risks of taking lozenges?`,
        `What kind of side effects should I expect from using lozenges?`,
        `What should I watch out for when using lozenges?`,
        `tell or give me a list of the side effects of lozenges`
    ],[
        `Slight burning, tingling, or stinging may occur. If any of these effects last or get worse, tell your doctor or pharmacist promptly.`
    ],7),
    encodeMemory([
        `* what * tips * lozenges? *`,
        `Can you give me some tips for taking lozenges?`,  
        `Do you have any advice for taking lozenges?`,  
        `What are some common mistakes people make when taking lozenges?`,  
        `What are some dos and don'ts of taking lozenges?`,  
        `What are the best practices for taking lozenges?`,  
        `What do I need to know about using lozenges effectively?`,  
        `What should I know about taking lozenges?`,  
        `What's the recommended way to take lozenges?`,  
        `tell an advice or tip in how to take lozenges`,
        `give an advice or tip in how to take lozenges`
    ],[
        `Do not chew or swallow it whole. This product is usually used every 2 hours as needed. `
    ],7),
    encodeMemory([
        `* lozenge * price *`,
        `Can you give me an idea of the cost of lozenges?`,
        `Can you tell me the price of lozenges?`,
        `Could you inform me of the price of lozenges?`,
        `Do you happen to know the price of lozenges?`,
        `How much does it cost to buy lozenges?`,
        `I'm interested in lozenges, how much are they?`,
        `What is the price tag on lozenges?`,
        `What's the cost of lozenges?`,
    ],[
        `In rose pharmacy it starts arounds 5php per piece. The price may vary in other pharmacies`
    ],7),
    encodeMemory([
        `* forms * lozenge *`,
        `Can you give me an idea of the different types of lozenges?`,
        `Can you provide me with a list of the different types of lozenges?`,
        `Could you inform me of the various types of lozenges?`,
        `Do you happen to know the different forms of lozenges?`,
        `How are lozenges available?`,
        `I'm interested in lozenges, what types do they come in?`,
        `What are the different forms of lozenges available?`,
        `What are the various forms of lozenges?`,
        `What forms do lozenges come in?`,
        `tell the list of different forms of lozenges`,
        `give the list of different forms of lozenges`
    ],[
        `Dosage forms that dissolve slowly in the mouth or that can be chewed and swallowed easily are gaining in popularity, especially for pediatric patients. Hard (compressed or molded) preparations of this dosage form are called lozenges, troches, or drops. Soft (molded) lozenges or troches are often called pastilles, and chewable, gelatin-based lozenges or troches are often called gummy, novelty-shaped products. `
    ],7),
    encodeMemory([
        `* alternative * lozenge * `,
        `Apart from lozenges, what other choices do I have?`,
        `Are there any alternative treatments to lozenges?`,
        `Are there any natural remedies that can replace lozenges?`,
        `Are there any over-the-counter products that can replace lozenges?`,
        `Could you recommend any alternatives to lozenges?`,
        `I'm looking for options other than lozenges. What do you suggest?`,
        `What are some alternative therapies for sore throat and cough besides lozenges?`,
        `What are some complementary treatments that can be used instead of lozenges?`,
        `What are some other drugs that can be used in place of lozenges?`,
        `What are some other medications that can be used instead of lozenges?`,
        `What are some substitutes for lozenges?`,
        `What are the different treatments available besides lozenges?`,
        `What are the other options for treating sore throat and cough other than lozenges?`,
        `What other options are there besides lozenges?`,
        `tell me about the alternatives to lozenges`
    ],[
        `While it may not cure, sipping tea with honey may help and sooth throat conditions.`
    ],7),
]


let section12 = [
    
    encodeMemory([
        `* where * go * have * influenza *`,
        `* where * treat * have * influenza *`,
        `What medical centers provide influenza treatment?`,
        `Where do I go to receive treatment for the flu?`,
        `Where should I go to get treated for the flu?`,
        `Which clinics offer treatment for the flu?`,
        `Which healthcare providers offer influenza treatment?`,
        `Which medical facilities can provide influenza treatment?`,
    ],[
        `You can manage the symptoms in your home. The best way to treat the flu is to get plenty of rest, drink fluids to prevent dehydration. 
        However, Check with your doctor promptly if you are at higher risk of serious flu complications.`
    ],5),
    encodeMemory([
        `* influenza * type A *`,
        `Can you tell me about the influenza A virus?`,
        `How does influenza A spread?`,
        `How long does influenza A typically last?`,
        `What are the characteristics of influenza A?`,
        `What is influenza A?`,
        `What is the incubation period for influenza A?`,
        `Where does the influenza A virus come from?`,
    ],[
        `Type A flu or influenza A are capable of infecting animals, although it is more common for people to suffer the ailments associated with this type of flu. `
    ],1),
    encodeMemory([
        `* influenza * type B *`,
        `How does influenza B spread?`,
        `How is influenza B diagnosed?`,
        `What are the of influenza B?`,
        `What distinguishes influenza B from other strains?`,
        `What is influenza type B?`,
        `What is the difference between influenza A and B?`,
        `Where is influenza B most common?`,
    ],[
        `Unlike type A flu viruses, type B flu is found only in humans. Type B flu may cause a less severe reaction than type A flu virus, but occasionally, type B flu can still be extremely harmful. Influenza type B viruses are not classified by subtype and do not cause pandemics.`
    ],1),
    encodeMemory([
        `* influenza * type C *`,
        `Are there any current outbreaks of influenza c?`,
        `Can you tell me about the characteristics of influenza c?`,
        `How does influenza c differ from other types of influenza?`,
        `How is influenza c transmitted?`,
        `Tell me about the history of influenza c.`,
        `What are the of influenza c?`,
        `What is influenza c?`,
        `What is the mortality rate for influenza c?`,
        `Where is influenza c most commonly found?`,
    ],[
        `Influenza C viruses are also found in people. They are, however, milder than either type A or B. People generally do not become very ill from the influenza type C viruses. Type C flu viruses do not cause epidemics.`
    ],1),
    encodeMemory([
        `* differ * type A * type B * type c * `,
        `* differ * type A * type C * type B * `,
        `* differ * type B * type A * type c * `,
        `* differ * type B * type C * type A * `,
        `* differ * type C * type A * type B * `,
        `* differ * type C * type B * type A * `,
        `Are there any unique characteristics of influenza A, B, or C?`,
        `Can you explain the differences between influenza A, B, and C?`,
        `Could you describe the variances between influenza A, B, and C?`,
        `How are influenza A, B, and C distinct from each other?`,
        `How does influenza A differ from influenza B and C?`,
        `In what ways are influenza A, B, and C different?`,
        `What are the dissimilarities between influenza A, B, and C?`,
        `What distinguishes influenza A from influenza B and C?`,
        `What makes influenza A, B, and C different from one another?`,
        `What sets influenza A apart from influenza B and C?`,
    ],[
        `Type A flu or influenza A viruses are capable of infecting animals, although it is more common for people to suffer the ailments associated with this type of flu. It can cause Epidemics. Type B influenza is only found on humans and causes les severe reaction than Type A virus. Unlike Type A, it does not cause pandemics. Type C is also found on people. People do not get very ill from Type C viruses. Like type B, it cannot cause epidemics.`
    ],1),
]


let section13 = [
    
    encodeMemory([
        `* problem * influenza *`,
        `* influenza * problem *`,
        `What complications can arise from influenza?`,
        `What are some of the risks associated with having influenza?`,
        `What kind of problems can arise if influenza is left untreated?`,
        `What are the potential dangers of having influenza?`,
        `What are some of the severe complications of influenza?`,
        `What are some of the challenges associated with treating influenza?`,
        `What are the long-term effects of having influenza?`,
        `Tell me about what could be the problems when having influenza`,
        'Describe the problems that could happen during influenza',
        'What could be the harms for influenza',
        `tell me about the problems associated with influenza`,
        `tell me about potential dangers of influenza`,
        `explain the problems of influenza`,
        `why influenza can be concern or dangerous`
    ],[
        `
        If left untreated, influenza can lead to various complications, including bacterial and viral pneumonia, bronchitis or inflammed airways, sinus infections,dehydration, ear infections, encephalitis which is a brain infection, and sepsis or blood infection and worsening of underlying chronic medical conditions such as asthma or congestive heart failure. In severe cases, influenza may even be fatal especially in people at high risk, such as elderly or young children and those with weakened immune systems.
        `
    ],1),
]

let section14 = [
    
    encodeMemory([
        `* ask * symptom * influenza *`,
        // `Are there any online forums or support groups for discussing the symptom of influenza?`,
        // `Is there a hotline or website I can visit to learn about the symptom of influenza?`,
        `What are the best sources to learn about the symptom of influenza?`,
        `What resources are available to learn about the symptom of influenza?`,
        `Where can I ask questions about the symptom of influenza?`,
        `Where can I find reliable information about the symptom of influenza?`,
        `Where can I get information about the symptom of influenza?`,
        `Who can I talk to about the symptom of influenza?`,
        `tell me where can i ask abou the symptom of influenza`
    ],[
       `You can get information from me regarding basic informaiton on symptoms, causes, things to avoid, foods you can and shouldnt take, the treatments, and how to manage it. 
       Further, I can explain these to help you perform self-care. However, I am not a medical practicitioner and the information I provide are meant for awareness only. 
       If you find these inadequate , it is best to ask your doctor for advises. `
    ],1),
    encodeMemory([
        `* where * treat * symptoms * influenza *`,
        `What are my options for influenza treatment locations?`,
        `Where can I find treatment for my influenza symptoms?`,
        `Where can I receive medical care for my influenza symptoms?`,
        `Where can I seek treatment for influenza symptoms?`,
        `Where is the best place to go for influenza treatment?`,
        `Where should I go to get treatment for influenza?`,
        `Which healthcare providers can help treat influenza symptoms?`,
        `Which hospitals offer influenza treatment?`,
        `Which medical facilities can I go to for influenza treatment?`,
        `Who can provide treatment for influenza symptoms?`,
        `tell me where do i treat my influenza`
    ],[
        `
        According to the Centers for Disease Control and Prevention, influenza is a contagious respiratory illness caused by influenza viruses that infect the nose, throat, and sometimes the lungs.
        
        While you can manage the symptoms of influenza at home, it is 
        generally recommended to seek medical attention from a healthcare provider. They can prescribe antiviral medications and provide other treatments to help manage your symptoms and prevent any complications. 
        
        It is important to consult a doctor if you experience serious symptoms or are at increased risk for complications.
        `
    ],5),
    
    encodeMemory([
        `* tell * (signs|symptoms) * influenza *`,
        `* (sign|symptom) * influenza *`,
        `How can you recognize the symptoms of influenza?`,
        `What are some indications that someone has influenza?`,
        `What are some of the early symptoms of influenza?`,
        `What are some of the most noticeable symptoms of influenza?`,
        `What are the common symptom of influenza?`,
        `What are the first signs of influenza to appear?`,
        `What are the initial signs of influenza?`,
        `What are the most common signs of influenza?`,
        `What are the primary indications of influenza?`,
        `What are the typical symptoms of influenza?`,
        `What should I look out for if I suspect someone has influenza?`,
        `What symptoms should I expect if I have influenza?`,
        `tell me about the symptom of influenza`,
        `explain to me the signs of influenza`,
        `explain the symptoms of influenza`,
        `explain the signs of influenza`,
        `describe the symptoms of influenza`,
        `show me the signs of influenza`,
        `tell me how do you identify if one has influenza`,
        `What should I look for to identify influenza in someone?`,
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
