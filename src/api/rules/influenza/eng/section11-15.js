import { encodeMemory } from "@/api/configuration/model"

let section11 = [
    // antihistamine
    encodeMemory([
        "* what * generic * (!antihistamines?|benadryl|citerizine) *",
        //chatgpt start
        "What are the names of generic antihistamines?",
        "Which antihistamines are available in generic form?",
        "Can you give me a list of generic antihistamines?",
        "What generic antihistamines are on the market?",
        "Tell me about the generic versions of antihistamines.",
        "I'm looking for a list of generic antihistamines, can you help?",
        "Which over-the-counter antihistamines are available as generics?",
        "What is the list of generic antihistamines?",
        "Can you name some generic antihistamines?",
        "I'd like to know the names of generic antihistamines."
        //chatgpt end
    ],[
        "Citerizine is one of the popular generic antihistamines"
    ],7),
    encodeMemory([
        "* what * branded * (!antihistamines|benadryl|citerizine) *",
        //chatgpt start
        "Can you give me the names of branded antihistamines?",
        "Which antihistamines are available in branded form?",
        "What are the brand names of antihistamines?",
        "Can you list some branded antihistamines for me?",
        "Which antihistamines have brand names?",
        "Tell me about antihistamines that come in branded versions.",
        "What are the branded versions of antihistamines?",
        "Which antihistamines are available under brand names?",
        "Could you provide me with the list of antihistamines with brand names?",
        "What are the names of branded antihistamines that are available?"
        //chatgpt end
    ],[
        "Benadryl is one of the popular branded antihistamine you can buy"
    ],7),
    encodeMemory([
        "* what * dosing * (!antihistamines?|benadryl|citerizine) *",
        "* how * (take|use) * (!antihistamines?|benadryl|citerizine) *",
        "* what * direction * (!antihistamines?|benadryl|citerizine) *",
        "* how * (!antihistamines?|benadryl|citerizine) * (take|use) *",
        //chatgpt start
        "What is the recommended dosage for antihistamines?",
        "How much antihistamines should I take?",
        "What is the correct way to take antihistamines?",
        "Can you tell me how to properly take antihistamines?",
        "What is the prescribed amount of antihistamines?",
        "Can you give me guidance on taking antihistamines?",
        "What is the appropriate dosage of antihistamines?",
        "How often should I take antihistamines?",
        "What is the standard dosage of antihistamines?",
        "Can you explain the proper dosage of antihistamines?",
        "What is the safe dosage for antihistamines?",
        "Can you tell me the proper way to take antihistamines?",
        "What is the recommended frequency of antihistamine intake?",
        "What is the usual amount of antihistamines to take?",
        "How many antihistamines should I take per day?",
        
        //chatgpt end
    ],[
        "Antihistamines can be taken with food or a glass of water or milk to lessen stomach irritation if necessary. For cetirizine, here is how you can take it. 6 years of age and older can have 5 to 10 miligrams once a day. Those who are 4-6 years old can take maximum of 5mg once or 2.5mg twice a day. Those who are younger than that (4 below) should not take this medicine."
    ],7),
    encodeMemory([
        "* what * is * (!antihistamines?|benadryl|citerizine) *",
        //chatgpt start
        "What are antihistamines and how do they work?",  
        "Can you explain what antihistamines are used for?",  
        "What is the definition of antihistamines?",  
        "What exactly are antihistamines?",  
        "Can you tell me about antihistamines?",  
        "What do you know about antihistamines?",  
        "Could you describe what antihistamines are?",  
        "What are some examples of antihistamines?",  
        "What is the purpose of antihistamines?",  
        "How do antihistamines help with allergies?"
        //chatgpt end
    ],[
        "Antihistamines are a class of drugs commonly used to treat symptoms of allergies. These drugs help treat conditions caused by too much histamine, a chemical created by your body’s immune system. Antihistamines are most commonly used by people who have allergic reactions to pollen and other allergens. They are also used to treat a variety of other conditions such as stomach problems, colds, anxiety and more."
    ],7),
    encodeMemory([
        "* what *  (!antihistamines?|benadryl|citerizine) * use  *",
        //chatgpt start
        "What are antihistamines used for?",
        "What are the benefits of taking antihistamines?",
        "Why are antihistamines prescribed?",
        "What is the purpose of antihistamines?",
        "What do antihistamines do?",
        "How do antihistamines help?",
        "What conditions are treated with antihistamines?",
        "What are the therapeutic uses of antihistamines?",
        "In what ways are antihistamines helpful?",
        "What are the indications for antihistamines?"
        //chatgpt end
    ],[
        "Antihistamines are used to relieve or prevent the symptoms of hay fever and other types of allergy. They work by preventing the effects of a substance called histamine, which is produced by the body. Histamine can cause itching, sneezing, runny nose, and watery eyes. Also, in some persons histamine can close up the bronchial tubes (air passages of the lungs) and make breathing difficult."
    ],7),
    encodeMemory([
        "* how *  (!antihistamines?|benadryl|citerizine) * work *",
        "* (why|how) * antihistamines? * treat *",
        //chatgpt start
        "Explain how antihistamines work to relieve allergy symptoms",  
        "How do antihistamines treat allergy symptoms?",  
        "What is the mechanism of action of antihistamines?",  
        "Can you tell me how antihistamines reduce allergy symptoms?",  
        "What is the process by which antihistamines relieve allergy symptoms?",  
        "In what way do antihistamines counteract allergic reactions?",  
        "What is the way in which antihistamines alleviate allergy symptoms?",  
        "Tell me how antihistamines work to stop allergic reactions",  
        "What happens in the body when antihistamines are used to treat allergies?",  
        "Can you describe how antihistamines are used to relieve allergy symptoms?",  
        "What is the method by which antihistamines work to treat allergies?",  
        "How do antihistamines block the effects of histamines in the body?",  
        "Explain how antihistamines inhibit allergic reactions",  
        "What is the effect of antihistamines on the immune system?",  
        "What is the way in which antihistamines affect the body's response to allergens?"
        //chatgpt end
    ],[
        "Antihistamines block the effects of a substance called histamine in your body."
    ],7),
    encodeMemory([
        "* when * ( not (take|use) | avoid ) *  (!antihistamines?|benadryl|citerizine) *",
        //chatgpt start
        "When are antihistamines contraindicated?",
        "What are the situations in which antihistamines should not be taken?",
        "What are the conditions that make antihistamines unsuitable?",
        "When should I not take antihistamines?",
        "Are there any circumstances where antihistamines should be avoided?",
        "What are the reasons to avoid taking antihistamines?",
        "When is it unsafe to take antihistamines?",
        "In what situations should I refrain from taking antihistamines?",
        "What are the precautions I need to take before using antihistamines?",
        "What are the situations where antihistamines may cause harm?",
        "When might antihistamines be dangerous?",
        "What are the scenarios when antihistamines are not recommended?",
        "Are there any contraindications for antihistamines?",
        "What are the situations where antihistamines are not advised?",
        "When is it inappropriate to take antihistamines?"
        //chatgpt end
    ],[
        "Most people can safely take antihistamines. However, people who are pregnant, breastfeeding, young child, taking other medicines, have underlying conditions such as heart disease, liver disease, kidney disease or epilepsy may need to be cautious when taking this."
    ],7),
    encodeMemory([
        "* what * side !effects? *  (!antihistamines?|benadryl|citerizine) *",
        //chatgpt start
        "What are the potential side effects of antihistamines?",  
        "Can you tell me about the side effects of antihistamines?",  
        "What kind of side effects can antihistamines cause?",  
        "Are there any negative effects associated with taking antihistamines?",  
        "What adverse reactions might occur when taking antihistamines?",  
        "Could you describe the possible side effects of antihistamines?",  
        "What should I be aware of in terms of antihistamine side effects?",  
        "Are there any known drawbacks to using antihistamines?",  
        "What are the possible downsides of taking antihistamines?",  
        "Can you provide me with a list of side effects that antihistamines may cause?"
        //chatgpt end
    ],[
        `Like all medicines, antihistamines can cause side effects.

        Side effects of antihistamines that make you drowsy can include: sleepiness (drowsiness) and reduced co-ordination, reaction speed and judgement – do not drive or use machinery after taking these antihistamines
        dry mouth
        blurred vision
        difficulty peeing:            
        
        Side effects of non-drowsy antihistamines can include:
        headache
        dry mouth
        feeling sick
        drowsiness – although this is less common than with older types of antihistamines
        `
    ],7),
    encodeMemory([
        "* what * tips *  (!antihistamines?|benadryl|citerizine) *",
        //chatgpt start
        "What are some recommendations when taking antihistamines?",
        "How can I get the best results from taking antihistamines?",
        "What are some tips for safely taking antihistamines?",
        "Can you give me advice on taking antihistamines?",
        "What should I know about taking antihistamines?",
        "How should I take antihistamines for best results?",
        "What precautions should I take when taking antihistamines?",
        "What are some things to keep in mind when taking antihistamines?",
        "What are some dos and don'ts for taking antihistamines?",
        "Are there any special instructions for taking antihistamines?",
        "Can you give me some advice on taking antihistamines?",
        "What are some tips for taking antihistamines?",
        "What are the best practices for taking antihistamines?",
        "Do you have any recommendations for taking antihistamines?",
        "How can I optimize the effects of antihistamines?",
        "What should I do to get the most out of my antihistamine medication?",
        "Can you tell me some dos and don'ts when taking antihistamines?",
        "Are there any precautions I should take when taking antihistamines?",
        "What should I keep in mind when taking antihistamines?",
        "How can I minimize the side effects of antihistamines?"
        //chatgpt end
    ],[
        "When taking this medicine, try to avoid alcohol, sedatives, and tranquilizers, due to increased risk of drowsiness. It may cause Central nervous system depression. So avoid activities requiring mental alertness. Be careful when patient has hepatic or renal impairment. Same with the elderly as they are more sensitive to adverse effects."
    ],7),
    encodeMemory([
        "* (what|how) * (!antihistamines?|benadryl|citerizine) * price *",
        //chatgpt start
        "What is the cost of antihistamines?",
        "How much do antihistamines cost?",
        "What is the price of antihistamines?",
        "What is the cost of a single antihistamine dose?",
        "How much does a bottle of antihistamines cost?",
        "What is the average price of antihistamines?",
        "What is the cost of a generic antihistamine?",
        "What is the price range of antihistamines?",
        "What is the cost of a branded antihistamine?",
        "How expensive are antihistamines?"
        //chatgpt end
    ],[
        "The price range for antihistamine varies from pharmacy to pharmacy. Antihistamines such as citerezine (10mg) costs around 15 pesos (according to watsons pharmacy). Benadryl , on the otherhand cost around 41 pesos for one tablet."
    ],7),
    encodeMemory([
        "* what * forms * (!antihistamines?|benadryl|citerizine) *",
        //chatgpt start
        "Can you tell me the various forms of antihistamines?",
        "What are the different types of antihistamines?",
        "I'm curious, what forms do antihistamines come in?",
        "Do you happen to know the different forms of antihistamines?",
        "What are the different forms of antihistamines available?",
        "How are antihistamines available?",
        "Can you give me an idea of the different types of antihistamines?",
        "What are the different types of antihistamines on the market?",
        "I'm interested in antihistamines, what forms do they come in?",
        "Could you inform me of the different forms of antihistamines?"
        //chatgpt end
    ],[
        "Antihistamines come in several forms including liquids, lotions, syrups, gels, eyedrops, tablets, capsules, creams, and suppositories"
    ],7),
    encodeMemory([
        "* what * alternative * (!antihistamines?|benadryl|citerizine) * ",
        //chatgpt start
        "What are some alternatives to antihistamines?",
        "Are there any other options besides antihistamines for allergies?",
        "Can you suggest some non antihistamine allergy treatments?",
        "What are the different types of allergy medications that don't contain antihistamines?",
        "What natural remedies are available as alternatives to antihistamines?",
        "I'm looking for alternative allergy treatments that don't involve antihistamines, what options do I have?",
        "Do you know of any antihistamine free allergy medications?",
        "What other treatments can I consider for my allergies besides antihistamines?",
        "What are the different types of antihistamine-free allergy medications?",
        "I'm looking for alternatives to antihistamines for my allergies, what are my choices?",
        "What prescription allergy medications are available that don't contain antihistamines?",
        //chatgpt end
    ],[
        "Try taking Ginger. According to Sinus and Allergy Wellness Center, it is a natural histamine, potent antiviral agent and an immute booster. Ginger is a safe and highly effective herb that soothes the digestive system and improves circulation. You can make some ginger tea to alleviate nasal congestion and headaches. While you sip your tea, inhale the steam coming out of your cup. Also, try to use it with other herbs, such as turmeric, which is another powerful natural healer."
    ],7),
    // analgesics rule 20 above
    encodeMemory([
        "* what * generic * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen) *",
        //chatgpt start
        "Can you provide me with a list of generic analgesics?",
        "What are some examples of generic analgesics?",
        "I'm looking for a list of non brand name painkillers. Can you help me out?",
        "What are some common generic analgesics",
        "Could you give me a rundown of generic analgesics",
        "I need a list of generic pain relievers or analgesics. Can you get that for me?",
        "Can you tell me some generic pain killers or analgesic names?",
        "What are the names of some generic painkillers or analgesics",
        "I'm trying to find a list of generic pain relievers or analgesics . Can you assist me?",
        "What are the generic versions of popular painkillers? or analgesics",
        "What are some of the most commonly used generic pain relievers?  or analgesics",
        "Can you provide me with a list of generic drugs for pain relief?  or analgesics",
        "What are the generic names of some over-the-counter pain relievers?  or analgesics",
        "I'm trying to find a list of non branded analgesics. Can you help?",
        "What are some examples of generic painkillers  or analgesics that are commonly used?",
        //chatgpt end
    ],[
        "Some of the generic names available are paracetamol, acetaminophen, and aspirin."
    ],7),
    encodeMemory([
        "* what * branded * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen) *",
        //chatgpt start
        "Can you provide me with a list of brand names of analgesics?",
        "What are some commonly known brands of painkillers?",
        "I need to know the brand names of some pain relievers",
        "What are some examples of branded analgesics?",
        "Can you give me some examples of branded painkillers?",
        "What are the brand versions of commonly used analgesics?",
        "Could you provide me with a list of branded drugs for pain relief?",
        "What are some of the well-known brand names of painkillers?",
        "I'm trying to find branded analgesics. Can you help me?",
        "What are the brand names of some commonly prescribed painkillers?",
        //chatgpt end
    ],[
        "Some of the branded names of paracetamol is Biogesic and Calpol. As for aspirin we have aspen and anthrom."
    ],7),
    encodeMemory([
        "* what * dosing * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen)  *",
        "* how * (take|use) * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen)  *",
        "* what * direction * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen)  *",
        "* how * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen)  * (take|use) *",
        //chatgpt start
        "What is the recommended dosage for taking analgesics?",
        "How much analgesics should I take and how often?",
        "What is the proper way to take analgesics?",
        "Can you explain the correct dosage of analgesics?",
        "What are the guidelines for taking analgesics?",
        "What is the recommended frequency for taking analgesics?",
        "How many analgesics tablets should I take for my pain?",
        "What is the safe and effective dose of analgesics?",
        "Can you tell me how to properly use analgesics for pain relief?",
        "What are the instructions for taking analgesics safely?",
        "What should I know about taking analgesics and the correct dosage?",
        "What is the maximum dosage of analgesics that I can take in a day?",
        "How long can I take analgesics and at what frequency?",
        "Can you guide me on how to properly dose analgesics for pain relief?",
        "What is the recommended dosage for analgesics depending on the type of pain?",
        //chatgpt end
    ],[
        "Analgesics is an umbrella term referring to drugs known as pain killers. Here are some of the dosages you can follow. For ibuprofen an (NSAID) the maximum single dose is 400mg. For the entire day, its 1200mg. For naproxen (NSAID) , you can take up to 500mg for single dose and 750mg for the entire day.  For acetaminophen (paracetamol) you can take up 1000mg for single dose and 4000mg for the entire day.  For aspirin, also known as acetylsalicylic acid , you can take up to 1000mg with maximum daily dose of 3000mg for people under 65 and 200mg for people over 65years old. "
    ],7),
    encodeMemory([
        "* what * is * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen) *",
        //chatgpt start
        "Can you explain what analgesics are?",
        "Tell me about analgesics and their uses.",
        "What are the benefits of using analgesics?",
        "Could you give me some information on analgesics?",
        "I'm interested in learning about analgesics. What can you tell me?",
        "What are some common types of analgesics?",
        "What are the side effects of analgesics?",
        "Can you recommend any analgesics for specific types of pain?",
        "I'm not familiar with analgesics. Can you give me a brief overview?"
        //chatgpt end
    ],[
        "Analgesics, also called painkillers, are medications that relieve different types of pain — from headaches to injuries to arthritis. Anti-inflammatory analgesics reduce inflammation, and opioid analgesics change the way the brain perceives pain."
    ],7),
    encodeMemory([
        "* what * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen)  * use  *",
        //chatgpt start
        "What are the applications of analgesics?",
        "What are the uses of analgesics?",
        "What are the benefits of using analgesics?",
        "For what conditions are analgesics prescribed?",
        "What are some of the ailments that analgesics can treat?",
        "What are the indications for using analgesics?",
        "What pain conditions can be treated with analgesics?",
        "What are the therapeutic uses of analgesics?",
        "How are analgesics commonly used in medicine?",
        "What are the clinical uses of analgesics?"
        //chatgpt end
    ],[
        "Over-the-counter painkillers available from pharmacies, such as ibuprofen or acetaminophen (paracetamol), can relieve acute pain. Their effectiveness will depend on things like the type and severity of the pain and the dose of the medication. Painkillers that are available without a prescription have been approved for the treatment of mild to moderate pain. They shouldn't be used for more than a few days in a row, and the specified maximum daily dose shouldn't be exceeded."
    ],7),
    encodeMemory([
        "* how * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen) * work *",
        "* (why|how) * analgesics? * treat *",
        //chatgpt start
        "Can you explain how analgesics work?", 
        "What is the mechanism of action of analgesics?", 
        "How do analgesics treat pain?", 
        "What are the ways in which analgesics alleviate pain?", 
        "How does an analgesic work to reduce pain?",
        "What is the function of an analgesic in treating pain?", 
        "Can you tell me how an analgesic helps to manage pain?", 
        "What is the process by which analgesics provide relief from pain?", 
        "How do analgesics interact with the body to reduce pain?", 
        "What is the way analgesics work to reduce pain?", 
        "What is the action of analgesics in reducing pain?", 
        "Can you explain how analgesics alleviate pain?", 
        "What is the working principle of analgesics in treating pain?", 
        "What are the ways in which analgesics reduce pain?", 
        "How does an analgesic act on the body to treat pain?"
        //chatgpt end
    ],[
        "There are two major groups of analgesics: anti-inflammatory analgesics and opioids. Anti-inflammatory drugs work by reducing inflammation (swelling) at the site of the pain. Examples include: Acetaminophen, Aspirin, and Non steroidal anti-inflammatory drugs such as ibuprofen and naproxen. Analgesic Opiods on the other hands works by chaning the brains perception of pain. Examples are Fentanyl, Hydrocodone, and Methadone."
    ],7),
    encodeMemory([
        "* when * ( not (take|use) | avoid ) * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen) *",
        //chatgpt start
        "When should I not take analgesic?",  
        "What are the situations where I should avoid taking analgesics?",  
        "Are there any circumstances where I should steer clear of analgesics?",  
        "What conditions would make taking analgesics a bad idea?",  
        "In what situations should I avoid using analgesics?",  
        "Are there any warnings against taking analgesics?",  
        "When should I refrain from using analgesics?",  
        "What are the situations in which analgesics should be avoided?",  
        "Can you advise me on when I should not take analgesics?",  
        "What are the contraindications of analgesics?",  
        "What are the instances where taking analgesics is not recommended?",  
        "When should I skip taking analgesics?",  
        "Are there any scenarios where I should not take analgesics?",  
        "Can you tell me when I should avoid taking analgesics?",  
        "What are the precautions for taking analgesics?"
        //chatgpt end
    ],[
        "According to WebMD , you should never take this medication for self-treatment of pain for longer than 10 days. You should not use this drug to self-treat a fever that lasts longer than 3 days. In these cases, consult a doctor because you may have a more serious condition"
    ],7),
    encodeMemory([
        "* what * side !effects? * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen)  *",
        //chatgpt start
        "What are the potential side effects of taking analgesics?",
        "Are there any adverse effects associated with using analgesics?",
        "What kind of side effects can occur from taking analgesics?",
        "Can analgesics cause any harmful side effects?",
        "What are some possible drawbacks of using analgesics?",
        "Do analgesics have any known negative effects on the body?",
        "Are there any risks or dangers involved with taking analgesics?",
        "What are the downsides of taking analgesics?",
        "What kind of unwanted effects can analgesics produce?",
        "Are there any common side effects of using analgesics?"
        //chatgpt end
    ],[
        "Anti-inflammatory analgesics are generally safe. But they can cause side effects and complications, if you use them too often, for too long or in very large doses: Damage to internal organs such as liver or kidney, diarrhea or constipation, heart problems, hypersensitivity, nausea, upset stomach or heart burn, ringing in the ears, and stomach ulcers."
    ],7),
    encodeMemory([
        "* what * tips * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen) *",
        //chatgpt start
        "What are some guidelines for taking analgesics?",  
        "Can you give me some advice on taking analgesics?",  
        "What should I keep in mind when taking analgesics?",  
        "What are some things to consider when taking analgesics?",  "Do you have any tips for taking analgesics?",  
        "How should I take analgesics safely?",  
        "What are some precautions I should take when taking analgesics?",  
        "Are there any special instructions for taking analgesics?",  
        "What should I do to ensure safe and effective use of analgesics?",  
        "What are some common mistakes to avoid when taking analgesics?",  
        "What are some tips for managing analgesic side effects?",  
        "What is the best way to take analgesics?",  
        "What are some ways to maximize the benefits of analgesics?",  
        "What are some things to keep in mind when taking analgesics long-term?",  
        "How can I avoid overdosing on analgesics?"
        //chatgpt end
    ],[
        "Take this medication by mouth. Drink a full glass of water (8 ounces/240 milliliters) with it unless your doctor tells you otherwise. Do not lie down for at least 10 minutes after you have taken this drug. If stomach upset occurs while you are taking this medication, you may take it with food or milk."
    ],7),
    encodeMemory([
        "* (what|how) * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen)  * price *",
        //chatgpt start
        "What is the cost of analgesics?",
        "How much do analgesics cost?",
        "Can you give me an idea of how much analgesics cost?",
        "What is the price range for analgesics?",
        "What is the typical cost of analgesics?",
        "How expensive are analgesics?",
        "What is the going rate for analgesics?",
        "Can you tell me the cost of analgesics?",
        "What is the market price for analgesics?",
        "What is the average cost of analgesics?",
        //chatgpt end
    ],[
        "According to Muramed and Watsons pharmacy, paracetamol such as biogesic may start at 4 pesos. Meanwhile, aspirin can start at 3.50 pesos as listed by watsons pharmacy. You, however, cannot buy this without prescription and the prices may vary depending on where you bought these."
    ],7),
    encodeMemory([
        "* what * forms * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen)  *",
        //chatgpt start
        "Can you tell me the various forms of analgesics?",
        "What are the different types of analgesics?",
        "I'm curious, what forms do analgesics come in?",
        "Do you happen to know the different forms of analgesics?",
        "What are the different forms of analgesics available?",
        "How are analgesics available?",
        "Can you give me an idea of the different types of analgesics?",
        "What are the different types of analgesics on the market?",
        "I'm interested in analgesics, what forms do they come in?",
        "Could you inform me of the different forms of analgesics?"
        //chatgpt end
    ],[
        "Analgesics are available in many forms such as films, liquid, nasal sprays patches, pills, tablets, capsules, and powder mix."
    ],7),
    encodeMemory([
        "* what * alternative * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen) * ",
        //chatgpt start
        "What other options are there besides analgesics?",
        "Are there any alternative treatments to analgesics?",
        "Could you recommend any alternatives to analgesics?",
        "Apart from analgesics, what other choices do I have?",
        "What are some substitutes for analgesics?",
        "What are the different treatments available besides analgesics?",
        "I'm looking for options other than analgesics. What do you suggest?",
        "Are there any natural remedies that can replace analgesics?",
        "What are some other medications that can be used instead of analgesics?",
        "What are the other options for treating pain other than analgesics?",
        "What are some alternative therapies for pain besides analgesics?",
        "What are some non-pharmacological approaches to treating pain instead of analgesics?",
        "What are some complementary treatments that can be used instead of analgesics?",
        "Are there any over-the-counter products that can replace analgesics?",
        "What are some other drugs that can be used in place of analgesics?"
        //chatgpt end
    ],[
        `The Philippine Institute of Traditional and Alternative Healthcare has indicated that you can Ampalaya, Yerba Buena, ulasimang bato or pansit-pansitan, and guava has an analagesic effects.`
    ],7),
    // nsaids names 
    encodeMemory([
        "* what * generic * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) *",
        //chatgpt start
        "What are the generic names of anti-inflammatory drugs or nsaids ?",
        "Can you give me some examples of generic NSAIDs?",
        "I need to know the non brand name names of anti-inflammatory medication  or nsaids ",
        "What are the generic versions of popular NSAIDs  or nsaids ?",
        "Can you tell me some generic names of painkillers that are also anti-inflammatory  or nsaids ?",
        "What are some common generic names of anti-inflammatory medications  or nsaids ?",
        "Could you provide me with a list of generic names for NSAIDs  or nsaids ?",
        "I'm looking for a list of non-brand-name anti-inflammatory drugs  or nsaids . Can you help me out?",
        "What are some examples of generic nonsteroidal anti-inflammatory drugs  or nsaids ?",
        "Can you give me a rundown of generic nonsteroidal anti-inflammatory medication  or nsaids ?",
        "What are the generic versions of ibuprofen and naproxen  or nsaids ?",
        "Can you provide me with a list of generic drugs for inflammation  or nsaids ?",
        "What are the generic names of some commonly used anti-inflammatory drugs  or nsaids ?",
        "I'm trying to find a list of non-branded NSAIDs. Can you help?",
        "What are some generic names of anti-inflammatory medication that are commonly used  or nsaids ?",
        //chatgpt end
    ],[
        "NSAID has generic names such as ibuprofen, naproxen, and aspirin which are mostly over the counter anti-inflammatory drugs"
    ],7),
    encodeMemory([
        "* what * branded * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) *",
        //chatgpt start
        "Can you provide me with a list of brand names of NSAIDs?",
        "What are some commonly known brands of non-steroidal anti-inflammatory drugs?",
        "I need to know the brand names of some NSAIDs",
        "What are some examples of branded NSAIDs?",
        "Can you give me some examples of branded painkillers that are also NSAIDs?",
        "What are the brand versions of commonly used NSAIDs?",
        "Could you provide me with a list of branded drugs for inflammation relief?",
        "What are some of the well-known brand names of NSAIDs?",
        "I'm trying to find branded NSAIDs. Can you help me?",
        "What are the brand names of some commonly prescribed NSAIDs?",
        //chatgpt end
    ],[
        "Advil is a known ibuprofen. Meanwhile, Flanax Forte is a known brand for Naproxen."
    ],7),
    encodeMemory([
        "* what * dosing * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) *",
        "* how * (take|use) * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) *",
        "* what * direction * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) *",
        "* how * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol)  * (take|use) *",
        //chatgpt start
        "What is the recommended dosage for analgesics?",
        "How much analgesic should I take?",
        "What is the proper way to take analgesics?",
        "What are the instructions for taking analgesics?",
        "What is the prescribed amount of analgesics?",
        "How often should I take analgesics?",
        "What is the maximum daily dose of analgesics?",
        "What is the minimum effective dose of analgesics?",
        "When should I take analgesics?",
        "Are there any special instructions for taking analgesics?",
        "What is the duration of treatment with analgesics?",
        "Can I take analgesics with food or on an empty stomach?",
        "What should I do if I miss a dose of analgesics?",
        "What are the precautions when taking analgesics?",
        "What are the possible side effects of analgesics?"
        //chatgpt end
    ],[
        "Here are some of the dosages you can follow. For ibuprofen an (NSAID) the maximum single dose is 400mg. For the entire day, its 1200mg. For naproxen (NSAID) , you can take up to 500mg for single dose and 750mg for the entire day. For aspirin, also known as acetylsalicylic acid, you can take up to 1000mg with maximum daily dose of 3000mg for people under 65 and 200mg for people over 65years old."
    ],7),
    encodeMemory([
        "* what * is * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) *",
        //chatgpt start
        "Can you explain what NSAIDs are?",
        "What are NSAIDs and how do they work?",
        "What do NSAIDs do and how are they used?",
        "What is the definition of NSAIDs?",
        "What are the uses and effects of NSAIDs?",
        "Could you tell me about NSAIDs?",
        "How would you define NSAIDs?",
        "What exactly are NSAIDs?",
        "What can you tell me about NSAIDs?",
        "What are the purposes of NSAIDs?"
        //chatgpt end
    ],[
        "Non-steroidal anti-inflammatory drugs (NSAIDs) are medicines that are widely used to relieve pain, reduce inflammation, and bring down a high temperature."
    ],7),
    encodeMemory([
        "* what * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) * use *",
        //chatgpt start
        "What are the common uses of NSAIDs?",
        "What medical conditions are NSAIDs typically prescribed for?",
        "How are NSAIDs used in managing pain?",
        "What are some of the therapeutic applications of NSAIDs?",
        "Can you explain the different indications for NSAIDs?",
        "What types of inflammation and pain are NSAIDs effective at treating?",
        "What are the benefits of taking NSAIDs?",
        "What conditions can NSAIDs help alleviate?",
        "When are NSAIDs typically recommended for use?",
        "In what situations might NSAIDs be prescribed?"
        //chatgpt end
    ],[
        "They're often used to relieve symptoms of headaches, painful periods, sprains and strains, colds and flu, arthritis, and other causes of long-term pain"
    ],7),
    encodeMemory([
        "* how * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) * work *",
        "* (why|how) * nsaids? * treat *",
        //chatgpt start
        "How do nsaids work to relieve pain?",
        "What is the mechanism of action of nsaids?",
        "How do nsaids treat inflammation?",
        "What is the effect of nsaids on prostaglandins?",
        "How do nsaids reduce fever?",
        "What is the antiplatelet effect of nsaids?",
        "How do nsaids affect the COX enzymes?",
        "What is the role of nsaids in inhibiting pain signals?",
        "How do nsaids affect the immune system?",
        "What is the mechanism by which nsaids relieve pain?"
        //chatgpt end
    ],[
        "NSAIDs block a specific enzyme called cyclooxygenase (or COX) used by the body to make prostaglandins. By reducing production of prostaglandins, NSAIDs help relieve the discomfort of fever and reduce inflammation and the associated pain."
    ],7),
    encodeMemory([
        "* when * ( not (take|use) | avoid ) * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) *",
        //chatgpt start
        "What are some situations where I should avoid taking NSAIDs?",
        "When should I not take NSAIDs?",
        "Are there any conditions where I should avoid using NSAIDs?",
        "What are the contraindications for taking NSAIDs?",
        "In what scenarios are NSAIDs not recommended?",
        "Can you tell me when it's not safe to take NSAIDs?",
        "When should I talk to my doctor before taking NSAIDs?",
        "Are there any circumstances where I should avoid NSAIDs altogether?",
        "What are the possible risks of taking NSAIDs in certain situations?",
        "Should I avoid NSAIDs if I have certain medical conditions?",
        //chatgpt end
    ],[
        "NSAIDs are generally not recommended for people with kidney disease, heart failure, or cirrhosis, or for people who take diuretics. Some patients who are allergic to aspirin may be able to take selective NSAIDs safely, although this should be discussed in advance with a health care provider."
    ],7),
    encodeMemory([
        "* what * side !effects? * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) *",
        //chatgpt start
        "What are the potential side effects of NSAIDs?",
        "What kind of side effects can NSAIDs cause?",
        "Are there any adverse effects associated with taking NSAIDs?",
        "Can you tell me about the risks and drawbacks of taking NSAIDs?",
        "What are the possible negative consequences of using NSAIDs?",
        "Do NSAIDs have any harmful effects on the body?",
        "What are some of the side effects that may result from taking NSAIDs?",
        "Are there any precautions I should take to avoid side effects when taking NSAIDs?",
        "Can you describe some of the common side effects of NSAIDs?",
        "What should I watch out for when taking NSAIDs to avoid any adverse reactions?"
        //chatgpt end
    ],[
        "Like all medicines, there's a risk of side effects from NSAIDs. These tend to be more common if you're taking high doses for a long time, or you're elderly or in poor general health. Over-the-counter NSAIDs generally have fewer side effects than stronger prescription medicines. The possible side effects include indigestions, stomach aches, stomach ulcers, headaches, drowsiness, dizziness, allergic reactions, it can also cause problems with your liver, kidneys or heart circulation, such as heart failure, heart attacks and strokes"
    ],7),
    encodeMemory([
        "* what * tips * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) *",
        //chatgpt start
        "Can you provide some advice on taking NSAIDs?",
        "What are the best practices in using NSAIDs?",
        "How can I maximize the effectiveness of my NSAID treatment?",
        "What are some dos and don'ts in taking NSAIDs?",
        "What precautions should I take when using NSAIDs?",
        "What are the important things to keep in mind when taking NSAIDs?",
        "What are the key factors to consider when taking NSAIDs?",
        "What are the potential risks and benefits of taking NSAIDs?",
        "What are the common mistakes people make when taking NSAIDs?",
        "Are there any dietary restrictions or considerations when taking NSAIDs?",
        "Can you recommend any complementary therapies or techniques to use with NSAIDs?",
        
        //chatgpt end
    ],[
        "Do not mix one NSAID with another. For example, don't take aspirin or ibuprofen with any other nonsteroidal anti-inflammatory drugs."
    ],7),
    encodeMemory([
        "* (what|how) * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) * price *",
        //chatgpt start
        "What is the cost of NSAIDs?",  
        "Can you give me an idea of how much NSAIDs cost?",  
        "What is the price range of NSAIDs?",  
        "How expensive are NSAIDs?",  
        "What is the average price of NSAIDs?",  
        "How much do NSAIDs typically cost?",  
        "What is the price tag of NSAIDs?",  
        "What is the going rate for NSAIDs?",  
        "What is the market price of NSAIDs?",  
        "How much money do I need to buy NSAIDs?"
        //chatgpt end
    ],[
        "Based on data from watsons, this medicine usually starts at 8php per piece"
    ],7),
    encodeMemory([
        "* what * forms * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) *",
        //chatgpt start
        "Can you tell me the various forms of NSAIDs?",
        "What are the different types of NSAIDs?",
        "I'm curious, what forms do NSAIDs come in?",
        "Do you happen to know the different forms of NSAIDs?",
        "What are the different forms of NSAIDs available?",
        "How are NSAIDs available?",
        "Can you give me an idea of the different types of NSAIDs?",
        "What are the different types of NSAIDs on the market?",
        "I'm interested in NSAIDs, what forms do they come in?",
        "Could you inform me of the different forms of NSAIDs?"
        //chatgpt end
    ],[
        `
        Common NSAIDs are usually in forms of capsules, tablets creams or gels as NSAIDs can cause troublesome side effects, alternatives are often recommended first.
        `
    ],7),
    encodeMemory([
        "* what * alternative * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) * ",
        //chatgpt start
        "What other options are there besides NSAIDs?",
        "Are there any alternative treatments to NSAIDs?",
        "Could you recommend any alternatives to NSAIDs?",
        "Apart from NSAIDs, what other choices do I have?",
        "What are some substitutes for NSAIDs?",
        "What are the different treatments available besides NSAIDs?",
        "I'm looking for options other than NSAIDs. What do you suggest?",
        "Are there any natural remedies that can replace NSAIDs?",
        "What are some other medications that can be used instead of NSAIDs?",
        "What are the other options for treating pain and inflammation other than NSAIDs?",
        "What are some alternative therapies for pain and inflammation besides NSAIDs?",
        "What are some non-pharmacological approaches to treating pain and inflammation instead of NSAIDs?",
        "What are some complementary treatments that can be used instead of NSAIDs?",
        "Are there any over-the-counter products that can replace NSAIDs?",
        "What are some other drugs that can be used in place of NSAIDs?"
        //chatgpt end
    ],[
        "The main alternative for pain relief is paracetamol, which is available over the counter and is safe for most people to take."
    ],7),

    // decongestatnts
    encodeMemory([
        "* what * generic * (!decongestants?|pseudoephedrine|sudafed) *",
        //chatgpt start
        "Can you provide me with a list of generic decongestants?",
        "What are the generic names of some common decongestants?",
        "I need to know the non-brand-name names of decongestant medication",
        "What are some examples of generic nasal decongestants?",
        "Can you give me some examples of generic decongestant medication?",
        "What are the generic versions of popular decongestants?",
        "Could you provide me with a list of generic names for nasal decongestants?",
        "I'm looking for a list of non-brand-name decongestants. Can you help me out?",
        "What are some common generic names of nasal decongestants?",
        "Can you give me a rundown of generic decongestant medication?",
        "What are the generic versions of pseudoephedrine and phenylephrine?",
        "Can you provide me with a list of generic drugs for nasal congestion?",
        "What are the generic names of some commonly used decongestants?",
        "I'm trying to find a list of non-branded decongestants. Can you help?",
        "What are some generic names of decongestant medication that are commonly used?",
        //chatgpt end
    ],[
        "A popular generic name of decongestant is pseudoephedrine phenylephrine"
    ],7),
    encodeMemory([
        "* what * branded * (!decongestants?|pseudoephedrine|sudafed) *",
        //chatgpt start
        "Can you provide me with a list of brand names of decongestants?",
        "What are some commonly known brands of nasal decongestants?",
        "I need to know the brand names of some decongestants",
        "What are some examples of branded decongestants?",
        "Can you give me some examples of branded nasal sprays that are also decongestants?",
        "What are the brand versions of commonly used decongestants?",
        "Could you provide me with a list of branded drugs for congestion relief?",
        "What are some of the well-known brand names of decongestants?",
        "I'm trying to find branded decongestants. Can you help me?",
        "What are the brand names of some commonly prescribed nasal decongestants?",
        //chatgpt end
    ],[
        "An example of a branded decongestant are decolgen and sudafed"
    ],7),
    encodeMemory([
        "* what * dosing * (!decongestants?|pseudoephedrine|sudafed) *",
        "* how * (take|use) * (!decongestants?|pseudoephedrine|sudafed) *",
        "* what * direction * (!decongestants?|pseudoephedrine|sudafed) *",
        "* how * (!decongestants?|pseudoephedrine|sudafed) *",
        //chatgpt start
        "What is the recommended dosage for taking decongestant?",
        "What is the proper way to take decongestant?",
        "How should decongestant be taken?",
        "What is the usual dosage for decongestant?",
        "Can you tell me about the dosing of decongestant?",
        "What is the correct way to use decongestant?",
        "What are the instructions for taking decongestant?",
        "What is the safe dosage for decongestant?",
        "Can you advise me on the proper dosing of decongestant?",
        "How often should I take decongestant?",
        "Is there a specific way to take decongestant?",
        "What are the guidelines for taking decongestant?",
        "What is the typical dosage for decongestant?",
        "What is the appropriate way to take decongestant?",
        "Are there any precautions to be taken while using decongestant?"
        //chatgpt end
    ],[
        `
        The usual dose depends on the medicine you're taking. For Pseudoephedrine (sudafed) however here are some of the recommendations. The usual dose of pseudoephedrine is 60mg tablets or as a liquid containing 30mg in 5ml.

        Adults and children aged 12 to 17 years: take one 60mg tablet or two 5ml spoon (10ml) of liquid up to 4 times a day.

        Children aged 6 to 11 years: take half a tablet (30mg) or one 5ml spoon of liquid up to 4 times a day.
        `
    ],7),
    encodeMemory([
        "* what * is * (!decongestants?|pseudoephedrine|sudafed) *",
        //chatgpt start
        "Can you explain what decongestants are?",
        "What are decongestants and how do they work?",
        "What do you know about decongestants?",
        "What are the basics of decongestants?",
        "Can you describe decongestants to me?",
        "I'm not familiar with decongestants, can you fill me in?",
        "Could you give me an overview of decongestants?",
        "What are the properties of decongestants?",
        "What is the purpose of decongestants?",
        "How would you define decongestants?"
        //chatgpt end
    ],[
        "Decongestants are medicines that relieve congestion by reducing swelling, inflammation and mucus formation within the nasal passages or the eye.  They have no other effect on symptoms such as a runny nose or sneezing."
    ],7),
    encodeMemory([
        "* what * (!decongestants?|pseudoephedrine|sudafed) * use *",
        "* (why|how) * decongestants? * treat *",
        //chatgpt start
        "What conditions are decongestants used to treat?",
        "How do decongestants work to treat congestion?",
        "What are the benefits of using decongestants?",
        "In what ways can decongestants relieve symptoms?",
        "What are the different types of congestion that decongestants can treat?",
        "What are the recommended dosages for using decongestants?",
        "Can decongestants be used to treat other conditions besides congestion?",
        "What are some potential side effects of using decongestants?",
        "How quickly do decongestants start working to relieve congestion?",
        "What is the typical duration of treatment when using decongestants?"
        //chatgpt end
    ],[
        "Decongestants are medicines that help relieve a congested (stuffy) nose. The congestion can be caused by a cold virus or by the flu, sinusitis, or allergies"
    ],7),
    encodeMemory([
        "* how * (!decongestants?|pseudoephedrine|sudafed) * work *",
        //chatgpt start
        "What is the mechanism of action of decongestants?",
        "Can you explain how decongestants work?",
        "What are the ways in which decongestants function?",
        "How do decongestants operate to relieve congestion?",
        "In what manner do decongestants work?",
        "What are the effects of decongestants on the body?",
        "What happens in the body when decongestants are taken?",
        "Can you describe the process of how decongestants work?",
        "What is the scientific explanation of how decongestants work?",
        "How do decongestants reduce nasal congestion?"
        //chatgpt end
    ],[
        "Decongestants work by narrowing the blood vessels in your nose. Swollen tissue inside the nose shrinks, and air can pass through more easily."
    ],7),
    encodeMemory([
        "* when * ( not (take|use) | avoid ) * (!decongestants?|pseudoephedrine|sudafed) *",
        //chatgpt start
        "What are the reasons to avoid decongestants?",
        "What are the situations in which decongestants should be avoided?",
        "When is it not safe to take decongestants?",
        "What are the contraindications for decongestants?",
        "What conditions make it necessary to avoid decongestants?",
        "What are the potential risks of taking decongestants in certain situations?",
        "Are there any circumstances where decongestants should not be used?",
        "What are the precautions to be taken while using decongestants?",
        "When is it necessary to stop taking decongestants?",
        "What are the possible interactions that may make it necessary to avoid decongestants?"
        //chatgpt end
    ],[
        "Don’t take decongestants if you have high blood pressure that isn’t controlled. Taking decongestants can raise your blood pressure even if it is controlled or nearly normal. You may need to look for an alternative to decongestants. Don’t give decongestants to children younger than 6 years of age."
    ],7),
    encodeMemory([
        "* what * side !effects? * (!decongestants?|pseudoephedrine|sudafed) *",
        //chatgpt start
        "What are the potential adverse effects of decongestants?",
        "Can you list some side effects of decongestants?",
        "Are there any negative effects associated with taking decongestants?",
        "What are the common side effects of decongestants?",
        "What are the risks of taking decongestants?",
        "Do decongestants have any unwanted effects?",
        "What are some of the possible side effects of decongestants?",
        "How can decongestants affect the body negatively?",
        "Are there any side effects to be aware of when taking decongestants?",
        "What are the downsides of using decongestants?"
        //chatgpt end
    ],[
        "Like any medicine, decongestants can sometimes cause side effects. They can temporarily cause nervousness, dizziness, and sleeping problems. They can cause heart palpitations (feeling like your heart is racing) or higher blood pressure"
    ],7),
    encodeMemory([
        "* what * tips * (!decongestants?|pseudoephedrine|sudafed) *",
        //chatgpt start
        "How should I use decongestants?",
        "What are the best practices for taking decongestants?",
        "What should I know about using decongestants?",
        "What are some do's and don'ts of taking decongestants?",
        "How can I safely use decongestants?",
        "What precautions should I take when taking decongestants?",
        "What are some important things to keep in mind when using decongestants?",
        "What are some common mistakes to avoid when taking decongestants?",
        "What are some tips for maximizing the benefits of decongestants?",
        "What are some ways to minimize the risks of decongestants?",
        "How can I get the most out of my decongestant medication?",
        "What are some helpful hints for taking decongestants?",
        "What are some recommendations for taking decongestants safely and effectively?",
        "What are some important considerations for taking decongestants?"
        //chatgpt end
    ],[
        "Decongestants may be taken orally to help relieve congestion that is affecting the nose, sinuses, and eyes or sprayed directly in the nose or instilled in the eye for a more local effect."
    ],7),
    encodeMemory([
        "* (what|how) * (!decongestants?|pseudoephedrine|sudafed) * price *",
        //chatgpt start
        "Can you tell me the price of decongestants?",
        "What's the cost of decongestants?",
        "I'm curious, how much do decongestants cost?",
        "Do you happen to know the price of decongestants?",
        "What is the price tag on decongestants?",
        "How much does it cost to buy decongestants?",
        "Can you give me an idea of the cost of decongestants?",
        "What's the going rate for decongestants?",
        "I'm interested in decongestants, how much are they?",
        "Could you inform me of the price of decongestants?"
        //chatgpt end
    ],[
        "The price varies according to the form of the medicine. For example, for nasal sprays it starts with 90php, for drops around 78 (rose pharmacy website), and tablets like decolgen it starts with 6php (watsons)."
    ],7),
    encodeMemory([
        "* what * forms * (!decongestants?|pseudoephedrine|sudafed) *",
        //chatgpt start
        "Can you tell me the various forms of decongestants?",
        "What are the different types of decongestants?",
        "I'm curious, what forms do decongestants come in?",
        "Do you happen to know the different forms of decongestants?",
        "What are the different forms of decongestants available?",
        "How are decongestants available?",
        "Can you give me an idea of the different types of decongestants?",
        "What are the different types of decongestants on the market?",
        "I'm interested in decongestants, what forms do they come in?",
        "Could you inform me of the different forms of decongestants?"
        //chatgpt end
    ],[
        "Decongestants are available as nose drops or nasal sprays, eye drops, and as tablets, capsules, and syrup."
    ],7),
    encodeMemory([
        "* what * alternative * (!decongestants?|pseudoephedrine|sudafed) * ",
        //chatgpt start
        "What other options are there besides decongestants?",
        "Are there any alternative treatments to decongestants?",
        "Could you recommend any alternatives to decongestants?",
        "Apart from decongestants, what other choices do I have?",
        "What are some substitutes for decongestants?",
        "What are the different treatments available besides decongestants?",
        "I'm looking for options other than decongestants. What do you suggest?",
        "Are there any natural remedies that can replace decongestants?",
        "What are some other medications that can be used instead of decongestants?",
        "What are the other options for treating congestion other than decongestants?",
        "What are some alternative therapies for congestion besides decongestants?",
        "What are some non-pharmacological approaches to treating congestion instead of decongestants?",
        "What are some complementary treatments that can be used instead of decongestants?",
        "Are there any over-the-counter products that can replace decongestants?",
        "What are some other drugs that can be used in place of decongestants?"
        //chatgpt end
    ],[
        "Alternatives to oral decongestants are available. In the drug realm, antihistamines such as diphenhydramine (Benadryl), chlorpheniramine (Chlor-Trimeton), cetirizine (Zyrtec), and loratadine (Claritin) can help with a stuffy nose are safe for the hear"
    ],7),

    // expectorants
    encodeMemory([
        "* what * generic * (!expectorants?|guaifenesin) *",
        //chatgpt start
        "Could you provide me with a list of generic expectorants?",
        "What are some commonly used generic expectorants?",
        "I'm looking for the non-brand names of expectorant medication. Can you help me out?",
        "Can you give me some examples of generic mucolytic agents?",
        "What are some generic expectorants that are commonly prescribed?",
        "Can you tell me the generic names of some expectorant drugs?",
        "What are the non branded names of commonly used expectorants?",
        "I'm trying to find generic expectorants. Can you help me?",
        "What are the generic versions of popular expectorant drugs?",
        "Could you provide me with a list of generic drugs for cough and chest congestion?",
        //chatgpt end
    ],[
        "Guiafenesin and potassium iodide are examples of a generic expectorant "
    ],7),
    encodeMemory([
        "* what * branded * (!expectorants?|guaifenesin) *",
        //chatgpt start
        "Can you provide me with a list of brand names of expectorants?",
        "What are some commonly known brands of cough expectorants?",
        "I need to know the brand names of some expectorants",
        "What are some examples of branded expectorants?",
        "Can you give me some examples of branded cough syrups that are also expectorants?",
        "What are the brand versions of commonly used expectorants?",
        "Could you provide me with a list of branded drugs for mucus relief?",
        "What are some of the well-known brand names of expectorants?",
        "I'm trying to find branded expectorants. Can you help me?",
        "What are the brand names of some commonly prescribed cough expectorants?",
        //chatgpt end
    ],[
        "some of the popular ones are Mucinex and Robitussin"
    ],7),
    encodeMemory([
        "* what * dosing * (!expectorants?|guaifenesin) *",
        "* how * (take|use) * (!expectorants?|guaifenesin) *",
        "* what * direction * (!expectorants?|guaifenesin) *",
        "* how * (!expectorants?|guaifenesin) *",
        //chatgpt start
        "What is the recommended dosage for expectorants?",
        "How should I take expectorants?",
        "What is the proper way to use expectorants?",
        "How much expectorant should I take?",
        "What is the safe amount of expectorant to take?",
        "What are the instructions for taking expectorants?",
        "What is the usual dose of expectorants?",
        "What is the best way to use expectorants?",
        "What is the correct dosage of expectorants?",
        "What is the maximum dose of expectorants?",
        "What is the minimum dose of expectorants?",
        "What are the guidelines for taking expectorants?",
        "How often should I take expectorants?",
        "Can you tell me how to properly take expectorants?",
        "What are the precautions when taking expectorants?"
        //chatgpt end
    ],[
        `For regular (short-acting) oral dosage forms (capsules, oral solution, syrup, or tablets) of guaifenesin:
        For cough: Adults can take 200 to 400 milligrams (mg) every four hours.
        Children 6 to 12 years of age can take 100 to 200 mg every four hours.
        Children 4 to 6 years of age can take 50 to 100 mg every four hours.
        Children and infants up to 4 years of age should not take it
        `
    ],7),
    encodeMemory([
        "* what * is * (!expectorants?|guaifenesin) *",
        //chatgpt start
        "What are expectorants?",
        "What is the definition of expectorants?",
        "Can you explain what expectorants are?",
        "What is the function of expectorants?",
        "What is the purpose of expectorants?",
        "How do you define expectorants?",
        "What exactly are expectorants?",
        "I would like to know about expectorants.",
        "Please tell me about expectorants.",
        "Could you enlighten me about expectorants?"
        //chatgpt end
    ],[
        "Expectorants are ingredients that increase airway secretions. They do this by increasing the water content of the secretions which decreases their stickiness, making them easier to cough up."
    ],7),
    encodeMemory([
        "* what * (!expectorants?|guaifenesin) * use *",
        //chatgpt start
        "What is the purpose of expectorants?",
        "What are expectorants commonly used for?",
        "What conditions are treated with expectorants?",
        "Why do people take expectorants?",
        "In what situations are expectorants recommended?",
        "What are the benefits of taking expectorants?",
        "What are the uses of expectorants?",
        "How are expectorants utilized?",
        "What is the role of expectorants in treating respiratory conditions?",
        "What is the function of expectorants in the body?"
        //chatgpt end
    ],[
        "You may take an expectorant to help relieve congestion if you have a cold or the flu. Expectorants are available as standalone drugs or as an ingredient in an all-in-one cold or flu medication."
    ],7),
    encodeMemory([
        "* how * (!expectorants?|guaifenesin) * work *",
        "* (why|how) * expectorants? * treat *",
        //chatgpt start
        "How do expectorants work?",
        "What is the mechanism of action for expectorants?",
        "In what way do expectorants help with respiratory conditions?",
        "Can you explain how expectorants help with coughs?",
        "How does an expectorant help loosen mucus?",
        "What is the science behind how expectorants treat respiratory issues?",
        "How do expectorants promote mucus clearance?",
        "What happens in the body when someone takes an expectorant?",
        "What is the biological process behind how expectorants work?",
        "How do expectorants help to alleviate coughing and congestion?",
        //chatgpt end
    ],[
        "Expectorants lubricate your airway. This helps loosen up the mucus and make the secretions in your airway thinner. By loosening up the mucus, expectorants make your cough more productive. This makes it easier for you to cough up mucus effectively and clear your throat."
    ],7),
    encodeMemory([
        "* when * ( not (take|use) | avoid ) * (!expectorants?|guaifenesin) *",
        //chatgpt start
        "What are the situations when it's not advisable to take expectorants?",
        "When should I avoid taking expectorants?",
        "Are there any conditions where I shouldn't take expectorants?",
        "What are the contraindications for expectorants?",
        "Are there any circumstances when expectorants can be harmful?",
        "Can you tell me when expectorants are not recommended?",
        "In what cases should I steer clear of expectorants?",
        "Are there any instances when I should avoid expectorants?",
        "What are the scenarios where I should not take expectorants?",
        "When is it not safe to take expectorants?",
        "Are there any precautions I should take before using expectorants?",
        "Can you advise me on when not to use expectorants?",
        "What are the warnings associated with expectorant use?",
        "When is it best to avoid taking expectorants?",
        "What are the potential risks of taking expectorants?"
        //chatgpt end
    ],[
        `You should talk to your healthcare provider before using an expectorant if you are pregnant or breastfeeding. If you have developed any type of allergic reaction or intolerance to expectorants in the past, you should not use these medications.

        Use caution when driving or using machinery while taking an expectorant, as these medications can make you drowsy or dizzy
        `
    ],7),
    encodeMemory([
        "* what * side !effects? * (!expectorants?|guaifenesin) *",
        //chatgpt start
        "What are the possible side effects of expectorants?",
        "Are there any side effects associated with taking expectorants?",
        "Can expectorants cause any adverse effects?",
        "What kind of side effects can be caused by expectorants?",
        "Are there any risks associated with taking expectorants?",
        "What are the common side effects of expectorants?",
        "Do expectorants have any potential side effects?",
        "What should I be aware of in terms of side effects when taking expectorants?",
        "What are the known side effects of expectorants?",
        "Are there any precautions I should take to avoid the side effects of expectorants?"
        //chatgpt end
    ],[
        "Expectorants do not commonly cause serious side effects. The most common side effects include dizziness, drowsiness, and rash."
    ],7),
    encodeMemory([
        "* what * tips * (!expectorants?|guaifenesin) *",
        //chatgpt start
        "What are some ways to take expectorants safely?",
        "Can you share some tips on how to take expectorants effectively?",
        "What are some precautions to consider when taking expectorants?",
        "What do I need to know before taking expectorants?",
        "How should I take expectorants for the best results?",
        "What are some things I should avoid while taking expectorants?",
        "Can you recommend some tips for taking expectorants with food or on an empty stomach?",
        "Are there any special instructions for taking expectorants with other medications?",
        //chatgpt end
    ],[
        "Do not crush pills, and be sure to measure liquid formulations using the measuring tools provided with your medication. It is often recommended that you drink plenty of fluids when taking an expectorant."
    ],7),
    encodeMemory([
        "* (what|how) * (!expectorants?|guaifenesin) * price *",
        //chatgpt start
        "Can you tell me the price of expectorants?",
        "What's the cost of expectorants?",
        "I'm curious, how much do expectorants cost?",
        "Do you happen to know the price of expectorants?",
        "What is the price tag on expectorants?",
        "How much does it cost to buy expectorants?",
        "Can you give me an idea of the cost of expectorants?",
        "What's the going rate for expectorants?",
        "I'm interested in expectorants, how much are they?",
        "Could you inform me of the price of expectorants?"
        //chatgpt end
    ],[
        "At watsons, robitussin guaifenesin price starts at 92php. "
    ],7),
    encodeMemory([
        "* what * forms * (!expectorants?|guaifenesin) *",
        //chatgpt start
        "Can you tell me the various forms of expectorants?",
        "What are the different types of expectorants?",
        "I'm curious, what forms do expectorants come in?",
        "Do you happen to know the different forms of expectorants?",
        "What are the different forms of expectorants available?",
        "How are expectorants available?",
        "Can you give me an idea of the different types of expectorants?",
        "What are the different types of expectorants on the market?",
        "I'm interested in expectorants, what forms do they come in?",
        "Could you inform me of the different forms of expectorants?"
        //chatgpt end
    ],[
        "In general, expectorants are available over-the-counter (OTC) in liquid, pill, and tablet forms."
    ],7),
    encodeMemory([
        "* what * alternative * (!expectorants?|guaifenesin) *",
        //chatgpt start
        "What other medications can be used in place of expectorants?",
        "Are there any natural remedies that can replace expectorants?",
        "What non-medical alternatives are there to expectorants?",
        "What are some alternative treatments for respiratory congestion?",
        "Are there any other options for relieving chest congestion besides expectorants?",
        "What are the substitutes for expectorants?",
        "What other types of medications can help with cough and congestion?",
        "What herbal remedies can be used instead of expectorants?",
        "What over the counter medications can be used instead of expectorants?",
        "What are some home remedies for chest congestion that don't involve expectorants?"
        //chatgpt end
    ],[
        "Natural expectorants are another option if you’re trying to loosen up mucus and relieve chest congestion. Natural expectorants include: Menthol, Ivyleaf extract, oral hydration ( drinking lots of water ) , steaming (inhaling warm moist air ) , and honey ( adding honey to drinks ) "
    ],7),

    // antitussives
    encodeMemory([
        "* what * generic * (!antitussives?|cough suppressants?|dextromethorphan |robitussin) *",
        //chatgpt start
        "Can you provide me with a list of generic antitussives? ",
        "What are the generic names of some common antitussives?",
        "I need to know the non-brand-name names of antitussive medication",
        "What are some examples of generic cough suppressants? or antitussives",
        "Can you give me some examples of generic antitussive medication?",
        "What are the generic versions of commonly used antitussives?",
        "Could you provide me with a list of generic drugs for cough suppression? or antitussives",
        "What are the non-branded names of commonly used antitussives?",
        "I'm trying to find generic antitussives. Can you help me?",
        "What are the generic names of some commonly prescribed cough suppressants? or antitussives",
        //chatgpt end
    ],[
        "Dexthomethorphan and diphenhydramine are some of the common antitussives "
    ],7),
    encodeMemory([
        "* what * branded * (!antitussives?|cough suppressants?|dextromethorphan |robitussin) *",
        //chatgpt start
        "Can you provide me with a list of brand names of antitussives?",
        "What are some commonly known brands of cough suppressants?",
        "I need to know the brand names of some antitussives",
        "What are some examples of branded antitussives?",
        "Can you give me some examples of branded cough syrups that are also antitussives?",
        "What are the brand versions of commonly used antitussives?",
        "Could you provide me with a list of branded drugs for cough suppression?",
        "What are some of the well-known brand names of antitussives?",
        "I'm trying to find branded antitussives. Can you help me?",
        "What are the brand names of some commonly prescribed cough suppressants?",
        //chatgpt end
    ],[
        "Robitussin is one of them"
    ],7),
    encodeMemory([
        "* what * dosing * (!antitussives?|cough suppressants?|dextromethorphan |robitussin) *",
        "* how * (take|use) * (!antitussives?|cough suppressants?|dextromethorphan |robitussin) *",
        "* what * direction * (!antitussives?|cough suppressants?|dextromethorphan |robitussin) *",
        "* how * (!antitussives?|cough suppressants?|dextromethorphan |robitussin) *",
        //chatgpt start
        "What is the proper way to take antitussives?",  
        "What is the recommended dosage of antitussives?", 
        "How often should I take antitussives?",  
        "What is the best time of day to take antitussives?",  
        "Can I take antitussives with food or should I take them on an empty stomach?",  
        "Is it safe to take antitussives with other medications?",  
        "Are there any side effects I should be aware of when taking antitussives?",  
        "What happens if I miss a dose of antitussives?",  "How long should I continue taking antitussives?",  
        "What should I do if I accidentally take too much antitussives?",  
        "Can I give antitussives to children and if so, what is the appropriate dosage?",  
        "Are there any special instructions I should follow when taking antitussives?",  
        "Do I need to shake the antitussives before taking them?",  
        "Can I crush or chew antitussives, or do they need to be swallowed whole?",  
        "What should I do if I experience any unusual symptoms while taking antitussives?"
        //chatgpt end
    ],[
        `For lozenge dosage form:
        For cough:
        Adults and children 12 years of age and older—5 to 15 mg every two to four hours, as needed.
        Children 6 to 12 years of age—5 to 15 mg every two to six hours, as needed.
        Children 4 to 6 years of age—5 mg every four hours, as needed.
        Children and infants up to 4 years of age—Use is not recommended .
        For syrup dosage form:
        For cough:
        Adults and children 12 years of age and older—30 mg every six to eight hours, as needed.
        Children 6 to 12 years of age—7 mg every four hours or 15 mg every six to eight hours, as needed.
        Children 4 to 6 years of age—3.5 mg every four hours or 7.5 mg every six to eight hours, as needed.
        Children and infants up to 4 years of age—Use is not recommended .
        `
    ],7),
    encodeMemory([
        "* what * is * (!antitussives?|cough suppressants?|dextromethorphan |robitussin) *",
        //chatgpt start
        "What are antitussives?",
        "What do you know about antitussives?",
        "Can you explain what antitussives are?",
        "What is the definition of antitussives?",
        "What are the uses of antitussives?",
        "What are the benefits of antitussives?",
        "What are the properties of antitussives?",
        "What do antitussives do?",
        "What is the purpose of antitussives?",
        "What are the effects of antitussives?"
        //chatgpt end
    ],[
        "Antitussives are prescription or over-the-counter drugs used for suppressing cough."
    ],7),
    encodeMemory([
        "* what * (!antitussives?|cough suppressants?|dextromethorphan |robitussin) * use *",
        //chatgpt start
        "What are the uses of antitussives?",
        "What is the purpose of taking antitussives?",
        "Why are antitussives prescribed?",
        "In what conditions are antitussives used?",
        "What are the benefits of using antitussives?",
        "For what reasons are antitussives taken?",
        "What medical issues do antitussives help with?",
        "What are the therapeutic uses of antitussives?",
        "What ailments do antitussives treat?",
        "What are the indications for using antitussives?"
        //chatgpt end
    ],[
        "They are typically used to treat a dry cough caused by allergies, respiratory illnesses, or infections.Antitussives can also treat post-viral cough, or a persistent cough that develops after an infection has resolved."
    ],7),
    encodeMemory([
        "* how * (!antitussives?|cough suppressants?|dextromethorphan |robitussin) * work *",
        "* (why|how) * antitussives? * treat *",
        //chatgpt start
        "What is the mechanism of action for antitussives?",
        "How do antitussives suppress coughing?",
        "What are the ways antitussives work to treat coughing?",
        "How does antitussives affect the cough reflex?",
        "What are the pharmacological actions of antitussives?",
        "What are the effects of antitussives on the respiratory system?",
        "How does antitussives relieve coughing?",
        "What is the mode of action of antitussives?",
        "What happens in the body when someone takes antitussives?",
        "How do antitussives interact with the nervous system to treat coughing?",
        "What is the role of antitussives in managing cough symptoms?",
        "What are the physiological changes that occur when someone takes antitussives?",
        "How does antitussives affect the cough center in the brain?",
        "What are the benefits of antitussives for coughing patients?",
        "What are the effects of antitussives on cough reflex sensitivity?"
        //chatgpt end
    ],[
        "Antitussives are thought to work by inhibiting a coordinating region for coughing located in the brain stem, disrupting the cough reflex arc; although the exact mechanism of action is unknown."
    ],7),
    encodeMemory([
        "* when * ( not (take|use) | avoid ) * (!antitussives?|cough suppressants?|dextromethorphan |robitussin) *",
        //chatgpt start
        "Are there any situations where antitussives should not be taken?",
        "What are the circumstances where antitussives are not recommended?",
        "In which cases should antitussives be avoided?",
        "What are the contraindications for taking antitussives?",
        "When should antitussives be skipped?",
        "What are the situations where antitussives are not suitable?",
        "Under what conditions should antitussives be avoided?",
        "Are there any situations where antitussives can be harmful?",
        "What are the factors that determine whether antitussives should be avoided?",
        "When is it not recommended to take antitussives?"    
        //chatgpt end
    ],[
        "This medication is not safe for children under the age of 4 years."
    ],7),
    encodeMemory([
        "* what * side !effects? * (!antitussives?|cough suppressants?|dextromethorphan |robitussin) *",
        //chatgpt start
        "What are the potential side effects of antitussives?",
        "Can you list some of the side effects of antitussives?",
        "What are some of the adverse effects of antitussives?",
        "Are there any known side effects of antitussives?",
        "What kind of side effects can antitussives cause?",
        "How safe are antitussives and what are their side effects?",
        "What are the most common side effects of antitussives?",
        "Are there any serious side effects associated with antitussives?",
        "Do antitussives have any negative effects on the body?",
        "What should I be aware of in terms of side effects when taking antitussives?"
        //chatgpt end
    ],[
        "The most common side effects include nausea and drowsiness. Some patients may experience a rash or difficulty breathing. High doses may cause hallucinations and disassociation, and the drug has been reported to be used as a recreational drug"
    ],7),
    encodeMemory([
        "* what * tips * (!antitussives?|cough suppressants?|dextromethorphan |robitussin) *",
        //chatgpt start
        "What are some things to keep in mind when taking antitussives?",
        "Any tips on how to take antitussives effectively?",
        "What should I know before taking antitussives?",
        "Can you give me some advice on taking antitussives?",
        "Are there any special instructions for taking antitussives?",
        "What are some precautions to take when using antitussives?",
        "What are some dos and don'ts of taking antitussives?",
        "What are some common mistakes to avoid when taking antitussives?",
         //chatgpt end
    ],[
        "Take this medication by mouth with or without food with a full glass of water (8 ounces or 240 milliliters) or as directed by your doctor. "
    ],7),
    encodeMemory([
        "* (what|how) * (!antitussives?|cough suppressants?|dextromethorphan |robitussin) * price *",
        //chatgpt start
        "Can you tell me the price of antitussives?",
        "What's the cost of antitussives?",
        "I'm curious, how much do antitussives cost?",
        "Do you happen to know the price of antitussives?",
        "What is the price tag on antitussives?",
        "How much does it cost to buy antitussives?",
        "Can you give me an idea of the cost of antitussives?",
        "What's the going rate for antitussives?",
        "I'm interested in antitussives, how much are they?",
        "Could you inform me of the price of antitussives?"
        //chatgpt end
    ],[
        "In southstar drug store, it dextromethorphan syrup cost starts at 113php. It watsons, its around 189php. It may vary though from other pharmacies"
    ],7),
    encodeMemory([
        "* what * forms * (!antitussives?|cough suppressants?|dextromethorphan |robitussin) *",
        //chatgpt start
        "Can you provide me with a list of the various forms of antitussives?",
        "What are the different types of antitussives?",
        "I'm interested in antitussives, what forms do they come in?",
        "Do you happen to know the different forms of antitussives?",
        "What are the different forms of antitussives available?",
        "How are antitussives available?",
        "Can you give me an idea of the different types of antitussives?",
        "What are the different types of antitussives on the market?",
        "What forms do antitussives come in?",
        "Could you inform me of the different forms of antitussives?"
        //chatgpt end
    ],[
        "Antitussives have many forms. It can be a tablet, capsule,gel, liquid , syrup, lozenge or strips. However, I can only recommend the usual  dosage of its logenzes and syrup forms."
    ],7),
    encodeMemory([
        "* what * alternative * (!antitussives?|cough suppressants?|dextromethorphan |robitussin) *",
        //chatgpt start
        "What other options are there besides expectorants?",
        "Are there any alternative treatments to expectorants?",
        "Could you recommend any alternatives to expectorants?",
        "Apart from expectorants, what other choices do I have?",
        "What are some substitutes for expectorants?",
        "What are the different treatments available besides expectorants?",
        "I'm looking for options other than expectorants. What do you suggest?",
        "Are there any natural remedies that can replace expectorants?",
        "What are some other medications that can be used instead of expectorants?",
        "What are the other options for treating cough and congestion other than expectorants?",
        "What are some alternative therapies for cough and congestion besides expectorants?",
        "What are some non-pharmacological approaches to treating cough and congestion instead of expectorants?",
        "What are some complementary treatments that can be used instead of expectorants?",
        "Are there any over-the-counter products that can replace expectorants?",
        "What are some other drugs that can be used in place of expectorants?"
        //chatgpt end
    ],[
        "Honey is a time-honored remedy for a sore throat. According to one study, trusted Source, it can also relieve coughs more effectively than OTC medications that contain dextromethorphan (DM), a cough suppressant."
    ],7),
    // lozenges
    encodeMemory([
        "* what * generic * (lozenges?) *",
        //chatgpt start
        "Can you provide me with a list of generic lozenges?",
        "What are the non-brand names of some common lozenges?",
        "I need to know the generic names of lozenge medication",
        "What are some examples of generic throat lozenges?",
        "Can you give me some examples of generic sore throat lozenges?",
        "What are the generic versions of commonly used throat lozenges?",
        "Could you provide me with a list of generic drugs for sore throat relief?",
        "What are the non-branded names of commonly used throat lozenges?",
        "I'm trying to find generic throat lozenges. Can you help me?",
        "What are the generic names of some commonly prescribed throat lozenges?",
        //chatgpt end
    ],[
        "Some of the generic names of logenzes include dextromethorphan and benzocaine-menthol"
    ],7),
    encodeMemory([
        "* what * branded * (lozenges?) *",
        //chatgpt start
        "Can you give me some examples of branded lozenges?",
        "What are the well-known brand names of lozenges?",
        "I need to find some lozenges. Can you provide me with a list of brands?",
        "What are some commonly used brand names of lozenges?",
        "What are some of the branded versions of lozenges that you can recommend?",
        "What are some examples of lozenges that have a brand name?",
        "Can you tell me the brand names of some throat lozenges?",
        "Which lozenges come in branded versions?",
        "I'm looking for branded lozenges for my sore throat. Any suggestions?",
        "Could you provide me with a list of branded drugs for throat soothing?",
        //chatgpt end
    ],[
        "Bactidol and strepsils are some of branded names of logenzes that can help relieve your throat"
    ],7),
    encodeMemory([
        "* what * dosing * (lozenges?) *",
        "* how * (take|use) * (lozenges?) *",
        "* what * direction * (lozenges?) *",
        "* how * (lozenges?) * * (take|use)",
        //chatgpt start
        "What is the recommended way to take lozenges?",
        "How should I use lozenges?",
        "What is the proper dosage for lozenges?",
        "How often should I take lozenges?",
        "What is the best way to take lozenges?",
        "What is the correct way to use lozenges?",
        "What is the prescribed dosage for lozenges?",
        "What are the instructions for taking lozenges?",
        "How many lozenges should I take at once?",
        "What is the maximum daily dosage of lozenges?",
        "What is the proper way to dissolve a lozenge?",
        "What are the directions for using lozenges?",
        "How long should I wait between taking lozenges?",
        "Can I take lozenges with food or drink?",
        "What should I do if I accidentally take too many lozenges?"
        //chatgpt end
    ],[
        "Let the lozenge dissolve slowly in your mouth and swallow the dissolved liquid along with your saliva. Do not chew or swallow it whole. This product is usually used every 2 hours as needed"
    ],7),
    encodeMemory([
        "* what * is * (lozenges?) *",
        //chatgpt start
        "What are lozenges?",
        "What is the purpose of lozenges?",
        "Can you explain what lozenges are?",
        "What is the definition of lozenges?",
        "What are the uses of lozenges?",
        "What do lozenges do?",
        "How would you describe lozenges?",
        "What are the benefits of using lozenges?",
        "What is the composition of lozenges?",
        "What is the function of lozenges?"
        //chatgpt end
    ],[
        "This product is used to temporarily relieve pain from minor mouth problems (such as canker sores, sore gums/throat, mouth/gum injury)."
    ],7),
    encodeMemory([
        "* what * (lozenges?) * use  *",
        //chatgpt start
        "What is the purpose of lozenges?",  
        "What are lozenges designed to do?",  
        "What are the benefits of using lozenges?",  
        "How do lozenges help with symptoms?",  
        "What symptoms do lozenges alleviate?",  
        "What are the uses of lozenges?",  
        "What can lozenges be taken for?",  
        "What conditions are lozenges helpful for?",  
        "What ailments do lozenges treat?",  
        "What are the therapeutic effects of lozenges?"
        //chatgpt end
    ],[
        "Taking Lozenges is a convenient, affordable option for symptomatic treatment of acute and chronic pharyngitis, irritation or inflammation of the upper respiratory tract and relief of unpleasant postoperative sensation in the throat."
    ],7),
    encodeMemory([
        "* how * (lozenges?) * work *",
        "* (why|how) * lozenges? * treat  *",
        //chatgpt start
        "How do lozenges work to alleviate symptoms?",
        "What is the mechanism of action of lozenges?",
        "Can you explain how lozenges work to relieve symptoms?",
        "What makes lozenges effective in treating symptoms?",
        "How do lozenges treat the underlying condition?",
        "What are the therapeutic properties of lozenges?",
        "Can you describe the way lozenges work to alleviate discomfort?",
        "What is the pharmacological action of lozenges?",
        "How do lozenges help to soothe sore throats or coughs?",
        "What are the ingredients in lozenges that make them effective?"
        //chatgpt end
    ],[
        "When you suck on a lozenge, it starts to dissolve and release medicine. It is intended to dissolve slowly in the mouth to temporarily suppress the cough, and lubricate and soothe irritated tissues of the throat. Some have medications that help fight colds, and most have anesthetic to help ease the pain. Lozenges also contain menthol or eucalyptus, which can help cool and sooth the throat. Others contain honey, which is known to have cough suppression properties."
    ],7),
    encodeMemory([
        "* when * (not (take|use)|avoid) * (lozenges?) *",
        //chatgpt start
        "Are there any situations when lozenges should be avoided?",
        "In which cases should one refrain from taking lozenges?",
        "Are there any circumstances when lozenges should not be used?",
        "When should lozenges be avoided?",
        "What are the situations where it is not recommended to take lozenges?",
        "In what scenarios should one not use lozenges?",
        "Are there any contraindications to taking lozenges?",
        "What are the conditions where lozenges should be avoided?",
        "When is it not appropriate to use lozenges?",
        "Under what circumstances should one steer clear of lozenges?"
        //chatgpt end
    ],[
        "If you have a sore throat that is severe or that lasts more than 2 days, or a cough that lasts more than 7 days or keeps coming back, or symptoms occur with a fever, headache, rash, swelling, nausea, or vomiting, tell your doctor promptly"
    ],7),
    encodeMemory([
        "* what * side !effects? * (lozenges?) *",
        //chatgpt start
        "What are the potential side effects of using lozenges?",
        "Are there any negative effects associated with using lozenges?",
        "What kind of side effects should I expect from using lozenges?",
        "What are some possible adverse reactions to lozenges?",
        "Are there any downsides to using lozenges that I should be aware of?",
        "What are the risks of taking lozenges?",
        "Can lozenges cause any harmful side effects?",
        "What should I watch out for when using lozenges?",
        "Do lozenges have any known negative consequences?",
        "Are there any precautions I should take when using lozenges?"
        //chatgpt end
    ],[
        "Slight burning, tingling, or stinging may occur. If any of these effects last or get worse, tell your doctor or pharmacist promptly."
    ],7),
    encodeMemory([
        "* what * tips * lozenges? *",
        //chatgpt start
        "What are the best practices for taking lozenges?",  
        "What should I know about taking lozenges?",  
        "How can I get the most out of my lozenges?",  
        "Are there any special instructions for taking lozenges?", 
        "What's the recommended way to take lozenges?",  
        "Can you give me some tips for taking lozenges?",  
        "Do you have any advice for taking lozenges?",  
        "What do I need to know about using lozenges effectively?",  
        "What are some dos and don'ts of taking lozenges?",  
        "What are some common mistakes people make when taking lozenges?",  
        //chatgpt end
    ],[
        "Do not chew or swallow it whole. This product is usually used every 2 hours as needed. "
    ],7),
    encodeMemory([
        "* (what|how) * (lozenges?) * price *",
        //chatgpt start
        "Can you tell me the price of lozenges?",
        "What's the cost of lozenges?",
        "I'm curious, how much do lozenges cost?",
        "Do you happen to know the price of lozenges?",
        "What is the price tag on lozenges?",
        "How much does it cost to buy lozenges?",
        "Can you give me an idea of the cost of lozenges?",
        "What's the going rate for lozenges?",
        "I'm interested in lozenges, how much are they?",
        "Could you inform me of the price of lozenges?"
        //chatgpt end
    ],[
        "In rose pharmacy it starts arounds 5php per piece. The price may vary in other pharmacies"
    ],7),
    encodeMemory([
        "* what * forms * (lozenges?) *",
        //chatgpt start
        "Can you provide me with a list of the different types of lozenges?",
        "What are the various forms of lozenges?",
        "I'm interested in lozenges, what types do they come in?",
        "Do you happen to know the different forms of lozenges?",
        "What are the different forms of lozenges available?",
        "How are lozenges available?",
        "Can you give me an idea of the different types of lozenges?",
        "What are the different types of lozenges on the market?",
        "What forms do lozenges come in?",
        "Could you inform me of the various types of lozenges?"
        //chatgpt end
    ],[
        "Dosage forms that dissolve slowly in the mouth or that can be chewed and swallowed easily are gaining in popularity, especially for pediatric patients. Hard (compressed or molded) preparations of this dosage form are called lozenges, troches, or drops. Soft (molded) lozenges or troches are often called pastilles, and chewable, gelatin-based lozenges or troches are often called gummy, novelty-shaped products. "
    ],7),
    encodeMemory([
        "* what * alternative * (lozenges?) * ",
        //chatgpt start
        "What other options are there besides lozenges?",
        "Are there any alternative treatments to lozenges?",
        "Could you recommend any alternatives to lozenges?",
        "Apart from lozenges, what other choices do I have?",
        "What are some substitutes for lozenges?",
        "What are the different treatments available besides lozenges?",
        "I'm looking for options other than lozenges. What do you suggest?",
        "Are there any natural remedies that can replace lozenges?",
        "What are some other medications that can be used instead of lozenges?",
        "What are the other options for treating sore throat and cough other than lozenges?",
        "What are some alternative therapies for sore throat and cough besides lozenges?",
        "What are some non-pharmacological approaches to treating sore throat and cough instead of lozenges?",
        "What are some complementary treatments that can be used instead of lozenges?",
        "Are there any over-the-counter products that can replace lozenges?",
        "What are some other drugs that can be used in place of lozenges?"
        //chatgpt end
    ],[
        "While it may not cure, sipping tea with honey may help and sooth throat conditions."
    ],7),
]


let section12 = [
    
    encodeMemory([
        "* where * treat * have * influenza *",
        "* where * go * have * influenza *",
        //chatgpt start
        "Where can I seek treatment for influenza?",
        "Which medical facilities can provide influenza treatment?",
        "What are my options for receiving influenza treatment?",
        "Where should I go to get treated for the flu?",
        "Which healthcare providers offer influenza treatment?",
        "What are the available places to seek treatment for the flu?",
        "Where can I find treatment for influenza?",
        "Which clinics or hospitals offer treatment for the flu?",
        "What medical centers provide influenza treatment?",
        "Where do I go to receive treatment for the flu?"
        //chatgpt end
    ],[
        "You can manage the symptoms in your home. However, Check with your doctor promptly if you are at higher risk of serious flu complications."
    ],5),
    encodeMemory([
        "* (what|when|how) * influenza * type A *",
        //chatgpt start
        "What is influenza A?",
        "What are the characteristics of influenza A?",
        "Can you tell me about the influenza A virus?",
        "Where does the influenza A virus come from?",
        "How does influenza A spread?",
        "What are the symptoms of influenza A?",
        "What is the incubation period for influenza A?",
        "How long does influenza A typically last?",
        "What are the complications of influenza A?",
        "What are the treatments for influenza A?"
        //chatgpt end
    ],[
        "Type A flu or influenza A are capable of infecting animals, although it is more common for people to suffer the ailments associated with this type of flu. "
    ],1),
    encodeMemory([
        "* (what|when|how) * influenza * type B *",
        //chatgpt start
        "What is influenza type B?",
        "What distinguishes influenza B from other strains?",
        "What are the symptoms of influenza B?",
        "How is influenza B diagnosed?",
        "What are the treatment options for influenza B?",
        "Where is influenza B most common?",
        "What is the difference between influenza A and B?",
        "What causes influenza B?",
        "How does influenza B spread?",
        "What are the complications of influenza B?"
        //chatgpt end
    ],[
        "Unlike type A flu viruses, type B flu is found only in humans. Type B flu may cause a less severe reaction than type A flu virus, but occasionally, type B flu can still be extremely harmful. Influenza type B viruses are not classified by subtype and do not cause pandemics."
    ],1),
    encodeMemory([
        "* (what|when|how) * influenza * type C *",
        //chatgpt start
        "What is influenza c?",
        "Can you tell me about the characteristics of influenza c?",
        "How does influenza c differ from other types of influenza?",
        "What are the symptoms of influenza c?",
        "Where is influenza c most commonly found?",
        "How is influenza c transmitted?",
        "What treatments are available for influenza c?",
        "Tell me about the history of influenza c.",
        "What is the mortality rate for influenza c?",
        "Are there any current outbreaks of influenza c?"
        //chatgpt end
    ],[
        "Influenza C viruses are also found in people. They are, however, milder than either type A or B. People generally do not become very ill from the influenza type C viruses. Type C flu viruses do not cause epidemics."
    ],1),
    encodeMemory([
        "* (what|how) * differ * type A * type B * type c * ",
        "* (what|how) * differ * type B * type C * type A * ",
        "* (what|how) * differ * type C * type A * type B * ",
        "* (what|how) * differ * type A * type C * type B * ",
        "* (what|how) * differ * type B * type A * type c * ",
        "* (what|how) * differ * type C * type B * type A * ",
        //chatgpt start
        "How does influenza A differ from influenza B and C?",
        "In what ways are influenza A, B, and C different?",
        "What distinguishes influenza A from influenza B and C?",
        "Can you explain the differences between influenza A, B, and C?",
        "What sets influenza A apart from influenza B and C?",
        "Are there any unique characteristics of influenza A, B, or C?",
        "How are influenza A, B, and C distinct from each other?",
        "What makes influenza A, B, and C different from one another?",
        "What are the dissimilarities between influenza A, B, and C?",
        "Could you describe the variances between influenza A, B, and C?"
      
        //chatgpt end
    ],[
        "Type A flu or influenza A viruses are capable of infecting animals, although it is more common for people to suffer the ailments associated with this type of flu. It can cause Epidemics. Type B influenza is only found on humans and causes les severe reaction than Type A virus. Unlike Type A, it does not cause pandemics. Type C is also found on people. People do not get very ill from Type C viruses. Like type B, it cannot cause epidemics."
    ],1),
    // encodeMemory([
    //     "* how * treat * influenza*",
    //     //chatgpt start
        
    //     //chatgpt end
    // ],[
    //     "Usually, you'll need nothing more than rest and plenty of fluids to treat the flu. But if you have a severe infection or are at higher risk of complications, your health care provider may prescribe an antiviral medication to treat the flu. "
    // ],1),
]


let section13 = [
    
    encodeMemory([
        "* what * problem * influenza *",
        "* problem * influenza * what *",
        "* what * influenza * problem *",
        //chatgpt start
        "What complications can arise from influenza?",
        "What health problems can occur as a result of influenza?",
        "What are some of the risks associated with having influenza?",
        "What kind of problems can arise if influenza is left untreated?",
        "What are the potential dangers of having influenza?",
        "What are some of the severe complications of influenza?",
        "What health issues can be exacerbated by having influenza?",
        "What are some of the challenges associated with treating influenza?",
        "What are the long-term effects of having influenza?"
        //chatgpt end
    ],[
        "Influenza can make people susceptible to bacterial pneumonia, bronchitis (inflamed airways), dehydration, ear infections, encephalitis ( a brain infection ) , sepsis ( a blood infection ) , sinus infections,  viral pneumonia and can worsen chronic medical conditions."
    ],1),
]

let section14 = [
    
    encodeMemory([
        "* (who|where) * ask * (sign|symptom) * influenza *",
        //chatgpt start
        "Where can I get information about the signs and symptoms of influenza?",
        "What resources are available to learn about the signs and symptoms of influenza?",
        "Who can I talk to about the signs and symptoms of influenza?",
        "What are the best sources to learn about the signs and symptoms of influenza?",
        "Is there a hotline or website I can visit to learn about the signs and symptoms of influenza?",
        "Where can I find reliable information about the signs and symptoms of influenza?",
        "What healthcare professionals can I consult for information about the signs and symptoms of influenza?",
        "Are there any online forums or support groups for discussing the signs and symptoms of influenza?",
        "Where can I ask questions about the signs and symptoms of influenza?",
        "What organizations or websites can I turn to for information about the signs and symptoms of influenza?"
        //chatgpt end
    ],[
        "You can ask me with the basic information. But if you need more extensive information, try to go to the Center for Disease and Control and the Department of Health. They have more detailed discussion."
    ],1),
    encodeMemory([
        "* where * (treat|go) * (sign|symptom) * influenza *",
        //chatgpt start
        "Where can I seek treatment for influenza symptoms?",
        "Which medical facilities can I go to for influenza treatment?",
        "Where is the best place to go for influenza treatment?",
        "Who can provide treatment for influenza symptoms?",
        "Where should I go to get treatment for influenza?",
        "Which healthcare providers can help treat influenza symptoms?",
        "What are my options for influenza treatment locations?",
        "Where can I receive medical care for my influenza symptoms?",
        "Which hospitals or clinics offer influenza treatment?",
        "Where can I find treatment for my influenza symptoms?"
        //chatgpt end
    ],[
        "You can manage the symptoms in your home. However, Check with your doctor promptly if you are at higher risk of serious flu complications."
    ],5),
    encodeMemory([
        "* what * (sign|symptom) * influenza *",
        "* how * tell * has influenza *",
        //chatgpt start
        "What are the common signs and symptoms of influenza?",
        "What are some indications that someone has influenza?",
        "What are the tell-tale signs of influenza?",
        "How can you recognize the symptoms of influenza?",
        "What are some of the hallmark symptoms of influenza?",
        "What are the typical symptoms of influenza?",
        "What are some of the most noticeable symptoms of influenza?",
        "What are the initial signs of influenza?",
        "What should I look out for if I suspect someone has influenza?",
        "What are some of the early symptoms of influenza?",
        "What are the most common signs of influenza?",
        "How can I differentiate between a cold and influenza symptoms?",
        "What symptoms should I expect if I have influenza?",
        "What are the primary indications of influenza?",
        "What are the first signs of influenza to appear?"
        //chatgpt end
    ],[
        "The Center of Disease Control indicated that people who have flu have some or all of the following symptoms. They may have fever, cough, sore throat, runny or stuffy nose, muscle or body aches, headaches, and fatigue(tireness). Some others may have vomiting and diarrhea though is is more common in children and adults."
    ],1),
    // encodeMemory([
    //     "* (are|is) * influenza_symptoms * (sign|symptom) * influenza *",
    //     "* (are|is) * influenza_symptoms * influenza * (sign|symptom) *",
    //     //chatgpt start
        
    //     //chatgpt end
    // ],[
    //     "yes it is"
    // ],1),
]

let section15 = []




export const data = 
    [].concat(section11)
        .concat(section12)
        .concat(section13)
        .concat(section14)
        .concat(section15)
