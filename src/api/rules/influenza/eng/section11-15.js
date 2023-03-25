import { encodeMemory } from "@/api/configuration/model"

let section11 = [
    // antihistamine
    encodeMemory([
        "* what * generic * (!antihistamines?|benadryl|citerizine) *"
    ],[
        "Citerizine is one of the popular generic antihistamines"
    ],7),
    encodeMemory([
        "* what * branded * (!antihistamines|benadryl|citerizine) *"
    ],[
        "Benadryl is one of the popular branded antihistamine you can buy"
    ],7),
    encodeMemory([
        "* what * dosing * (!antihistamines?|benadryl|citerizine) *",
        "* how * (take|use) * (!antihistamines?|benadryl|citerizine) *",
        "* what * direction * (!antihistamines?|benadryl|citerizine) *",
        "* how * (!antihistamines?|benadryl|citerizine) * (take|use)",
    ],[
        "Antihistamines can be taken with food or a glass of water or milk to lessen stomach irritation if necessary. For cetirizine, here is how you can take it. 6 years of age and older can have 5 to 10 miligrams once a day. Those who are 4-6 years old can take maximum of 5mg once or 2.5mg twice a day. Those who are younger than that (4 below) should not take this medicine."
    ],7),
    encodeMemory([
        "* what * is * (!antihistamines?|benadryl|citerizine) *"
    ],[
        "Antihistamines are a class of drugs commonly used to treat symptoms of allergies. These drugs help treat conditions caused by too much histamine, a chemical created by your body’s immune system. Antihistamines are most commonly used by people who have allergic reactions to pollen and other allergens. They are also used to treat a variety of other conditions such as stomach problems, colds, anxiety and more."
    ],7),
    encodeMemory([
        "* what *  (!antihistamines?|benadryl|citerizine) * use  *"
    ],[
        "Antihistamines are used to relieve or prevent the symptoms of hay fever and other types of allergy. They work by preventing the effects of a substance called histamine, which is produced by the body. Histamine can cause itching, sneezing, runny nose, and watery eyes. Also, in some persons histamine can close up the bronchial tubes (air passages of the lungs) and make breathing difficult."
    ],7),
    encodeMemory([
        "* how *  (!antihistamines?|benadryl|citerizine) * work *",
        "* (why|how) * antihistamines? * treat *"
    ],[
        "Antihistamines block the effects of a substance called histamine in your body."
    ],7),
    encodeMemory([
        "* when * ( not (take|use) | avoid ) *  (!antihistamines?|benadryl|citerizine) *"
    ],[
        "Most people can safely take antihistamines. However, people who are pregnant, breastfeeding, young child, taking other medicines, have underlying conditions such as heart disease, liver disease, kidney disease or epilepsy may need to be cautious when taking this."
    ],7),
    encodeMemory([
        "* what * side !effects? *  (!antihistamines?|benadryl|citerizine) *"
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
        "* what * tips *  (!antihistamines?|benadryl|citerizine) *"
    ],[
        "When taking this medicine, try to avoid alcohol, sedatives, and tranquilizers, due to increased risk of drowsiness. It may cause Central nervous system depression. So avoid activities requiring mental alertness. Be careful when patient has hepatic or renal impairment. Same with the elderly as they are more sensitive to adverse effects."
    ],7),
    encodeMemory([
        "* (what|how) * (!antihistamines?|benadryl|citerizine) * price *"
    ],[
        "The price range for antihistamine varies from pharmacy to pharmacy. Antihistamines such as citerezine (10mg) costs around 15 pesos (according to watsons pharmacy). Benadryl , on the otherhand cost around 41 pesos for one tablet."
    ],7),
    encodeMemory([
        "* what * forms * (!antihistamines?|benadryl|citerizine) *"
    ],[
        "Antihistamines come in several forms including liquids, lotions, syrups, gels, eyedrops, tablets, capsules, creams, and suppositories"
    ],7),
    encodeMemory([
        "* what * alternative * (!antihistamines?|benadryl|citerizine) * "
    ],[
        "Try taking Ginger. According to Sinus and Allergy Wellness Center, it is a natural histamine, potent antiviral agent and an immute booster. Ginger is a safe and highly effective herb that soothes the digestive system and improves circulation. You can make some ginger tea to alleviate nasal congestion and headaches. While you sip your tea, inhale the steam coming out of your cup. Also, try to use it with other herbs, such as turmeric, which is another powerful natural healer."
    ],7),
    // analgesics rule 20 above
    encodeMemory([
        "* what * generic * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen) *"
    ],[
        "Some of the generic names available are paracetamol, acetaminophen, and aspirin."
    ],7),
    encodeMemory([
        "* what * branded * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen) *"
    ],[
        "Some of the branded names of paracetamol is Biogesic and Calpol. As for aspirin we have aspen and anthrom."
    ],7),
    encodeMemory([
        "* what * dosing * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen)  *",
        "* how * (take|use) * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen)  *",
        "* what * direction * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen)  *",
        "* how * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen)  * (take|use) *"
    ],[
        "Analgesics is an umbrella term referring to drugs known as pain killers. Here are some of the dosages you can follow. For ibuprofen an (NSAID) the maximum single dose is 400mg. For the entire day, its 1200mg. For naproxen (NSAID) , you can take up to 500mg for single dose and 750mg for the entire day.  For acetaminophen (paracetamol) you can take up 1000mg for single dose and 4000mg for the entire day.  For aspirin, also known as acetylsalicylic acid , you can take up to 1000mg with maximum daily dose of 3000mg for people under 65 and 200mg for people over 65years old. "
    ],7),
    encodeMemory([
        "* what * is * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen) *"
    ],[
        "Analgesics, also called painkillers, are medications that relieve different types of pain — from headaches to injuries to arthritis. Anti-inflammatory analgesics reduce inflammation, and opioid analgesics change the way the brain perceives pain."
    ],7),
    encodeMemory([
        "* what * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen)  * use  *"
    ],[
        "Over-the-counter painkillers available from pharmacies, such as ibuprofen or acetaminophen (paracetamol), can relieve acute pain. Their effectiveness will depend on things like the type and severity of the pain and the dose of the medication. Painkillers that are available without a prescription have been approved for the treatment of mild to moderate pain. They shouldn't be used for more than a few days in a row, and the specified maximum daily dose shouldn't be exceeded."
    ],7),
    encodeMemory([
        "* how * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen) * work *",
        "* (why|how) * analgesics? * treat *"
    ],[
        "There are two major groups of analgesics: anti-inflammatory analgesics and opioids. Anti-inflammatory drugs work by reducing inflammation (swelling) at the site of the pain. Examples include: Acetaminophen, Aspirin, and Non steroidal anti-inflammatory drugs such as ibuprofen and naproxen. Analgesic Opiods on the other hands works by chaning the brains perception of pain. Examples are Fentanyl, Hydrocodone, and Methadone."
    ],7),
    encodeMemory([
        "* when * ( not (take|use) | avoid ) * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen) *"
    ],[
        "According to WebMD , you should never take this medication for self-treatment of pain for longer than 10 days. You should not use this drug to self-treat a fever that lasts longer than 3 days. In these cases, consult a doctor because you may have a more serious condition"
    ],7),
    encodeMemory([
        "* what * side !effects? * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen)  *"
    ],[
        "Anti-inflammatory analgesics are generally safe. But they can cause side effects and complications, if you use them too often, for too long or in very large doses: Damage to internal organs such as liver or kidney, diarrhea or constipation, heart problems, hypersensitivity, nausea, upset stomach or heart burn, ringing in the ears, and stomach ulcers."
    ],7),
    encodeMemory([
        "* what * tips * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen) *"
    ],[
        "Take this medication by mouth. Drink a full glass of water (8 ounces/240 milliliters) with it unless your doctor tells you otherwise. Do not lie down for at least 10 minutes after you have taken this drug. If stomach upset occurs while you are taking this medication, you may take it with food or milk."
    ],7),
    encodeMemory([
        "* (what|how) * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen)  * price *"
    ],[
        "According to Muramed and Watsons pharmacy, paracetamol such as biogesic may start at 4 pesos. Meanwhile, aspirin can start at 3.50 pesos as listed by watsons pharmacy. You, however, cannot buy this without prescription and the prices may vary depending on where you bought these."
    ],7),
    encodeMemory([
        "* what * forms * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen)  *"
    ],[
        "Analgesics are available in many forms such as films, liquid, nasal sprays patches, pills, tablets, capsules, and powder mix."
    ],7),
    encodeMemory([
        "* what * alternative * (!analgesics?|paracetamol|biogesic|aspirin|acetaminophen) * "
    ],[
        `The Philippine Institute of Traditional and Alternative Healthcare has indicated that you can Ampalaya, Yerba Buena, ulasimang bato or pansit-pansitan, and guava has an analagesic effects.`
    ],7),
    // nsaids names 
    encodeMemory([
        "* what * generic * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) *"
    ],[
        "NSAID has generic names such as ibuprofen, naproxen, and aspirin which are mostly over the counter anti-inflammatory drugs"
    ],7),
    encodeMemory([
        "* what * branded * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) *"
    ],[
        "Advil is a known ibuprofen. Meanwhile, Flanax Forte is a known brand for Naproxen."
    ],7),
    encodeMemory([
        "* what * dosing * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) *",
        "* how * (take|use) * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) *",
        "* what * direction * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) *",
        "* how * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol)  * (take|use) *",
    ],[
        "Here are some of the dosages you can follow. For ibuprofen an (NSAID) the maximum single dose is 400mg. For the entire day, its 1200mg. For naproxen (NSAID) , you can take up to 500mg for single dose and 750mg for the entire day. For aspirin, also known as acetylsalicylic acid, you can take up to 1000mg with maximum daily dose of 3000mg for people under 65 and 200mg for people over 65years old."
    ],7),
    encodeMemory([
        "* what * is * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) *"
    ],[
        "Non-steroidal anti-inflammatory drugs (NSAIDs) are medicines that are widely used to relieve pain, reduce inflammation, and bring down a high temperature."
    ],7),
    encodeMemory([
        "* what * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) * use *"
    ],[
        "They're often used to relieve symptoms of headaches, painful periods, sprains and strains, colds and flu, arthritis, and other causes of long-term pain"
    ],7),
    encodeMemory([
        "* how * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) * work *",
        "* (why|how) * nsaids? * treat *"
    ],[
        "NSAIDs block a specific enzyme called cyclooxygenase (or COX) used by the body to make prostaglandins. By reducing production of prostaglandins, NSAIDs help relieve the discomfort of fever and reduce inflammation and the associated pain."
    ],7),
    encodeMemory([
        "* when * ( not (take|use) | avoid ) * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) *"
    ],[
        "NSAIDs are generally not recommended for people with kidney disease, heart failure, or cirrhosis, or for people who take diuretics. Some patients who are allergic to aspirin may be able to take selective NSAIDs safely, although this should be discussed in advance with a health care provider."
    ],7),
    encodeMemory([
        "* what * side !effects? * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) *"
    ],[
        "Like all medicines, there's a risk of side effects from NSAIDs. These tend to be more common if you're taking high doses for a long time, or you're elderly or in poor general health. Over-the-counter NSAIDs generally have fewer side effects than stronger prescription medicines. The possible side effects include indigestions, stomach aches, stomach ulcers, headaches, drowsiness, dizziness, allergic reactions, it can also cause problems with your liver, kidneys or heart circulation, such as heart failure, heart attacks and strokes"
    ],7),
    encodeMemory([
        "* what * tips * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) *"
    ],[
        "Do not mix one NSAID with another. For example, don't take aspirin or ibuprofen with any other nonsteroidal anti-inflammatory drugs."
    ],7),
    encodeMemory([
        "* (what|how) * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) * price *"
    ],[
        "Based on data from watsons, this medicine usually starts at 8php per piece"
    ],7),
    encodeMemory([
        "* what * forms * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) *"
    ],[
        `
        Common NSAIDs are usually in forms of capsules, tablets creams or gels as NSAIDs can cause troublesome side effects, alternatives are often recommended first.
        `
    ],7),
    encodeMemory([
        "* what * alternative * (!nsaids?|ibuprofen|naproxen|advil|mortin|aspirin|alaxan|medicol) * "
    ],[
        "The main alternative for pain relief is paracetamol, which is available over the counter and is safe for most people to take."
    ],7),

    // decongestatnts
    encodeMemory([
        "* what * generic * (!decongestants?|pseudophedrine|sudafed) *"
    ],[
        "A popular generic name of decongestant is pseudoephedrine phenylephrine"
    ],7),
    encodeMemory([
        "* what * branded * (!decongestants?|pseudophedrine|sudafed) *"
    ],[
        "An example of a branded decongestant are decolgen and sudafed"
    ],7),
    encodeMemory([
        "* what * dosing * (!decongestants?|pseudophedrine|sudafed) *",
        "* how * (take|use) * (!decongestants?|pseudophedrine|sudafed) *",
        "* what * direction * (!decongestants?|pseudophedrine|sudafed) *",
        "* how * (!decongestants?|pseudophedrine|sudafed) *",
    ],[
        `
        The usual dose depends on the medicine you're taking. For Pseudoephedrine (sudafed) however here are some of the recommendations. The usual dose of pseudoephedrine is 60mg tablets or as a liquid containing 30mg in 5ml.

        Adults and children aged 12 to 17 years: take one 60mg tablet or two 5ml spoon (10ml) of liquid up to 4 times a day.

        Children aged 6 to 11 years: take half a tablet (30mg) or one 5ml spoon of liquid up to 4 times a day.
        `
    ],7),
    encodeMemory([
        "* what * is * (!decongestants?|pseudophedrine|sudafed) *"
    ],[
        "Decongestants are medicines that relieve congestion by reducing swelling, inflammation and mucus formation within the nasal passages or the eye.  They have no other effect on symptoms such as a runny nose or sneezing."
    ],7),
    encodeMemory([
        "* what * (!decongestants?|pseudophedrine|sudafed) * use *",
        "* (why|how) * decongestants? * treat *"
    ],[
        "Decongestants are medicines that help relieve a congested (stuffy) nose. The congestion can be caused by a cold virus or by the flu, sinusitis, or allergies"
    ],7),
    encodeMemory([
        "* how * (!decongestants?|pseudophedrine|sudafed) * work *"
    ],[
        "Decongestants work by narrowing the blood vessels in your nose. Swollen tissue inside the nose shrinks, and air can pass through more easily."
    ],7),
    encodeMemory([
        "* when * ( not (take|use) | avoid ) * (!decongestants?|pseudophedrine|sudafed) *"
    ],[
        "Don’t take decongestants if you have high blood pressure that isn’t controlled. Taking decongestants can raise your blood pressure even if it is controlled or nearly normal. You may need to look for an alternative to decongestants. Don’t give decongestants to children younger than 6 years of age."
    ],7),
    encodeMemory([
        "* what * side !effects? * (!decongestants?|pseudophedrine|sudafed) *"
    ],[
        "Like any medicine, decongestants can sometimes cause side effects. They can temporarily cause nervousness, dizziness, and sleeping problems. They can cause heart palpitations (feeling like your heart is racing) or higher blood pressure"
    ],7),
    encodeMemory([
        "* what * tips * (!decongestants?|pseudophedrine|sudafed) *"
    ],[
        "Decongestants may be taken orally to help relieve congestion that is affecting the nose, sinuses, and eyes or sprayed directly in the nose or instilled in the eye for a more local effect."
    ],7),
    encodeMemory([
        "* (what|how) * (!decongestants?|pseudophedrine|sudafed) * price *"
    ],[
        "The price varies according to the form of the medicine. For example, for nasal sprays it starts with 90php, for drops around 78 (rose pharmacy website), and tablets like decolgen it starts with 6php (watsons)."
    ],7),
    encodeMemory([
        "* what * forms * (!decongestants?|pseudophedrine|sudafed) *"
    ],[
        "Decongestants are available as nose drops or nasal sprays, eye drops, and as tablets, capsules, and syrup."
    ],7),
    encodeMemory([
        "* what * alternative * (!decongestants?|pseudophedrine|sudafed) * "
    ],[
        "Alternatives to oral decongestants are available. In the drug realm, antihistamines such as diphenhydramine (Benadryl), chlorpheniramine (Chlor-Trimeton), cetirizine (Zyrtec), and loratadine (Claritin) can help with a stuffy nose are safe for the hear"
    ],7),

    // expectorants
    encodeMemory([
        "* what * generic * (!expectorants?|guaifenesin) *"
    ],[
        "Guiafenesin and potassium iodide are examples of a generic expectorant "
    ],7),
    encodeMemory([
        "* what * branded * (!expectorants?|guaifenesin) *"
    ],[
        "some of the popular ones are Mucinex and Robitussin"
    ],7),
    encodeMemory([
        "* what * dosing * (!expectorants?|guaifenesin) *",
        "* how * (take|use) * (!expectorants?|guaifenesin) *",
        "* what * direction * (!expectorants?|guaifenesin) *",
        "* how * (!expectorants?|guaifenesin) *"
    ],[
        `For regular (short-acting) oral dosage forms (capsules, oral solution, syrup, or tablets) of guaifenesin:
        For cough: Adults can take 200 to 400 milligrams (mg) every four hours.
        Children 6 to 12 years of age can take 100 to 200 mg every four hours.
        Children 4 to 6 years of age can take 50 to 100 mg every four hours.
        Children and infants up to 4 years of age should not take it
        `
    ],7),
    encodeMemory([
        "* what * is * (!expectorants?|guaifenesin) *"
    ],[
        "Expectorants are ingredients that increase airway secretions. They do this by increasing the water content of the secretions which decreases their stickiness, making them easier to cough up."
    ],7),
    encodeMemory([
        "* what * (!expectorants?|guaifenesin) * use *"
    ],[
        "You may take an expectorant to help relieve congestion if you have a cold or the flu. Expectorants are available as standalone drugs or as an ingredient in an all-in-one cold or flu medication."
    ],7),
    encodeMemory([
        "* how * (!expectorants?|guaifenesin) * work *",
        "* (why|how) * expectorants? * treat *"
    ],[
        "Expectorants lubricate your airway. This helps loosen up the mucus and make the secretions in your airway thinner. By loosening up the mucus, expectorants make your cough more productive. This makes it easier for you to cough up mucus effectively and clear your throat."
    ],7),
    encodeMemory([
        "* when * ( not (take|use) | avoid ) * (!expectorants?|guaifenesin) *"
    ],[
        `You should talk to your healthcare provider before using an expectorant if you are pregnant or breastfeeding. If you have developed any type of allergic reaction or intolerance to expectorants in the past, you should not use these medications.

        Use caution when driving or using machinery while taking an expectorant, as these medications can make you drowsy or dizzy
        `
    ],7),
    encodeMemory([
        "* what * side !effects? * (!expectorants?|guaifenesin) *"
    ],[
        "Expectorants do not commonly cause serious side effects. The most common side effects include dizziness, drowsiness, and rash."
    ],7),
    encodeMemory([
        "* what * tips * (!expectorants?|guaifenesin) *"
    ],[
        "Do not crush pills, and be sure to measure liquid formulations using the measuring tools provided with your medication. It is often recommended that you drink plenty of fluids when taking an expectorant."
    ],7),
    encodeMemory([
        "* (what|how) * (!expectorants?|guaifenesin) * price *"
    ],[
        "At watsons, robitussin guaifenesin price starts at 92php. "
    ],7),
    encodeMemory([
        "* what * forms * (!expectorants?|guaifenesin) *"
    ],[
        "In general, expectorants are available over-the-counter (OTC) in liquid, pill, and tablet forms."
    ],7),
    encodeMemory([
        "* what * alternative * (!expectorants?|guaifenesin) *"
    ],[
        "Natural expectorants are another option if you’re trying to loosen up mucus and relieve chest congestion. Natural expectorants include: Menthol, Ivyleaf extract, oral hydration ( drinking lots of water ) , steaming (inhaling warm moist air ) , and honey ( adding honey to drinks ) "
    ],7),

    // antitussives
    encodeMemory([
        "* what * generic * (!antitussives?|cough suppressants?|dextromethorphan |robitussin) *"
    ],[
        "Dexthomethorphan and diphenhydramine are some of the common antitussives "
    ],7),
    encodeMemory([
        "* what * branded * (!antitussives?|cough suppressants?|dextromethorphan |robitussin) *"
    ],[
        "Robitussin is one of them"
    ],7),
    encodeMemory([
        "* what * dosing * (!antitussives?|cough suppressants?|dextromethorphan |robitussin) *",
        "* how * (take|use) * (!antitussives?|cough suppressants?|dextromethorphan |robitussin) *",
        "* what * direction * (!antitussives?|cough suppressants?|dextromethorphan |robitussin) *",
        "* how * (!antitussives?|cough suppressants?|dextromethorphan |robitussin) *"
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
        "* what * is * (!antitussives?|cough suppressants?|dextromethorphan |robitussin) *"
    ],[
        "Antitussives are prescription or over-the-counter drugs used for suppressing cough."
    ],7),
    encodeMemory([
        "* what * (!antitussives?|cough suppressants?|dextromethorphan |robitussin) * use *"
    ],[
        "They are typically used to treat a dry cough caused by allergies, respiratory illnesses, or infections.Antitussives can also treat post-viral cough, or a persistent cough that develops after an infection has resolved."
    ],7),
    encodeMemory([
        "* how * (!antitussives?|cough suppressants?|dextromethorphan |robitussin) * work *",
        "* (why|how) * antitussives? * treat *"
    ],[
        "Antitussives are thought to work by inhibiting a coordinating region for coughing located in the brain stem, disrupting the cough reflex arc; although the exact mechanism of action is unknown."
    ],7),
    encodeMemory([
        "* when * ( not (take|use) | avoid ) * (!antitussives?|cough suppressants?|dextromethorphan |robitussin) *"
    ],[
        "This medication is not safe for children under the age of 4 years."
    ],7),
    encodeMemory([
        "* what * side !effects? * (!antitussives?|cough suppressants?|dextromethorphan |robitussin) *"
    ],[
        "The most common side effects include nausea and drowsiness. Some patients may experience a rash or difficulty breathing. High doses may cause hallucinations and disassociation, and the drug has been reported to be used as a recreational drug"
    ],7),
    encodeMemory([
        "* what * tips * (!antitussives?|cough suppressants?|dextromethorphan |robitussin) *"
    ],[
        "Take this medication by mouth with or without food with a full glass of water (8 ounces or 240 milliliters) or as directed by your doctor. "
    ],7),
    encodeMemory([
        "* (what|how) * (!antitussives?|cough suppressants?|dextromethorphan |robitussin) * price *"
    ],[
        "In southstar drug store, it dextromethorphan syrup cost starts at 113php. It watsons, its around 189php. It may vary though from other pharmacies"
    ],7),
    encodeMemory([
        "* what * forms * (!antitussives?|cough suppressants?|dextromethorphan |robitussin) *"
    ],[
        "Antitussives have many forms. It can be a tablet, capsule,gel, liquid , syrup, lozenge or strips. However, I can only recommend the usual  dosage of its logenzes and syrup forms."
    ],7),
    encodeMemory([
        "* what * alternative * (!antitussives?|cough suppressants?|dextromethorphan |robitussin) *"
    ],[
        "Honey is a time-honored remedy for a sore throat. According to one study, trusted Source, it can also relieve coughs more effectively than OTC medications that contain dextromethorphan (DM), a cough suppressant."
    ],7),
    // lozenges
    encodeMemory([
        "* what * generic * (lozenges?) *"
    ],[
        "Some of the generic names of logenzes include dextromethorphan and benzocaine-menthol"
    ],7),
    encodeMemory([
        "* what * branded * (lozenges?) *"
    ],[
        "Bactidol and strepsils are some of branded names of logenzes that can help relieve your throat"
    ],7),
    encodeMemory([
        "* what * dosing * (lozenges?) *",
        "* how * (take|use) * (lozenges?) *",
        "* what * direction * (lozenges?) *",
        "* how * (lozenges?) *"
    ],[
        "Let the lozenge dissolve slowly in your mouth and swallow the dissolved liquid along with your saliva. Do not chew or swallow it whole. This product is usually used every 2 hours as needed"
    ],7),
    encodeMemory([
        "* what * is * (lozenges?) *"
    ],[
        "This product is used to temporarily relieve pain from minor mouth problems (such as canker sores, sore gums/throat, mouth/gum injury)."
    ],7),
    encodeMemory([
        "* what * (lozenges?) * use  *"
    ],[
        "Taking Lozenges is a convenient, affordable option for symptomatic treatment of acute and chronic pharyngitis, irritation or inflammation of the upper respiratory tract and relief of unpleasant postoperative sensation in the throat."
    ],7),
    encodeMemory([
        "* how * (lozenges?) * work *",
        "* (why|how) * lozenges? * treat  *"
    ],[
        "When you suck on a lozenge, it starts to dissolve and release medicine. It is intended to dissolve slowly in the mouth to temporarily suppress the cough, and lubricate and soothe irritated tissues of the throat. Some have medications that help fight colds, and most have anesthetic to help ease the pain. Lozenges also contain menthol or eucalyptus, which can help cool and sooth the throat. Others contain honey, which is known to have cough suppression properties."
    ],7),
    encodeMemory([
        "* when * (not (take|use)|avoid) * (lozenges?) *"
    ],[
        "If you have a sore throat that is severe or that lasts more than 2 days, or a cough that lasts more than 7 days or keeps coming back, or symptoms occur with a fever, headache, rash, swelling, nausea, or vomiting, tell your doctor promptly"
    ],7),
    encodeMemory([
        "* what * side !effects? * (lozenges?) *"
    ],[
        "Slight burning, tingling, or stinging may occur. If any of these effects last or get worse, tell your doctor or pharmacist promptly."
    ],7),
    encodeMemory([
        "* what * tips * (lozenges?) *"
    ],[
        "Do not chew or swallow it whole. This product is usually used every 2 hours as needed. "
    ],7),
    encodeMemory([
        "* (what|how) * (lozenges?) * price *"
    ],[
        "In rose pharmacy it starts arounds 5php per piece. The price may vary in other pharmacies"
    ],7),
    encodeMemory([
        "* what * forms * (lozenges?) *"
    ],[
        "Dosage forms that dissolve slowly in the mouth or that can be chewed and swallowed easily are gaining in popularity, especially for pediatric patients. Hard (compressed or molded) preparations of this dosage form are called lozenges, troches, or drops. Soft (molded) lozenges or troches are often called pastilles, and chewable, gelatin-based lozenges or troches are often called gummy, novelty-shaped products. "
    ],7),
    encodeMemory([
        "* what * alternative * (lozenges?) * "
    ],[
        "While it may not cure, sipping tea with honey may help and sooth throat conditions."
    ],7),
]


let section12 = [
    
    encodeMemory([
        "* where * treat * have * influenza *",
        "* where * go * have * influenza *"
    ],[
        "You can manage the symptoms in your home. However, Check with your doctor promptly if you are at higher risk of serious flu complications."
    ],5),
    encodeMemory([
        "* (what|when|how) * influenza * type A *"
    ],[
        "Type A flu or influenza A are capable of infecting animals, although it is more common for people to suffer the ailments associated with this type of flu. "
    ],1),
    encodeMemory([
        "* (what|when|how) * influenza * type B *"
    ],[
        "Unlike type A flu viruses, type B flu is found only in humans. Type B flu may cause a less severe reaction than type A flu virus, but occasionally, type B flu can still be extremely harmful. Influenza type B viruses are not classified by subtype and do not cause pandemics."
    ],1),
    encodeMemory([
        "* (what|when|how) * influenza * type C *"
    ],[
        "Influenza C viruses are also found in people. They are, however, milder than either type A or B. People generally do not become very ill from the influenza type C viruses. Type C flu viruses do not cause epidemics."
    ],1),
    encodeMemory([
        "* (what|how) * differ * type A * type B * type c * ",
        "* (what|how) * differ * type B * type C * type A * ",
        "* (what|how) * differ * type C * type A * type B * ",
        "* (what|how) * differ * type A * type C * type B * ",
        "* (what|how) * differ * type B * type A * type c * ",
        "* (what|how) * differ * type C * type B * type A * "
    ],[
        "Type A flu or influenza A viruses are capable of infecting animals, although it is more common for people to suffer the ailments associated with this type of flu. It can cause Epidemics. Type B influenza is only found on humans and causes les severe reaction than Type A virus. Unlike Type A, it does not cause pandemics. Type C is also found on people. People do not get very ill from Type C viruses. Like type B, it cannot cause epidemics."
    ],1),
    encodeMemory([
        "* how * treat * influenza*"
    ],[
        "Usually, you'll need nothing more than rest and plenty of fluids to treat the flu. But if you have a severe infection or are at higher risk of complications, your health care provider may prescribe an antiviral medication to treat the flu. "
    ],1),
]


let section13 = [
    
    encodeMemory([
        "* what * problem * influenza *",
        "* problem * influenza * what *",
        "* what * influenza * problem *"
    ],[
        "Influenza can make people susceptible to bacterial pneumonia, bronchitis (inflamed airways), dehydration, ear infections, encephalitis ( a brain infection ) , sepsis ( a blood infection ) , sinus infections,  viral pneumonia and can worsen chronic medical conditions."
    ],1),
]

let section14 = [
    
    encodeMemory([
        "* (who|where) * ask * (sign|symptom) * influenza *"
    ],[
        "You can ask me with the basic information. But if you need more extensive information, try to go to the Center for Disease and Control and the Department of Health. They have more detailed discussion."
    ],1),
    encodeMemory([
        "* where * (treat|go) * (sign|symptom) * influenza *"
    ],[
        "You can manage the symptoms in your home. However, Check with your doctor promptly if you are at higher risk of serious flu complications."
    ],5),
    encodeMemory([
        "* what * (sign|symptom) * influenza *",
        "* how * tell * has influenza *"
    ],[
        "The Center of Disease Control indicated that people who have flu have some or all of the following symptoms. They may have fever, cough, sore throat, runny or stuffy nose, muscle or body aches, headaches, and fatigue(tireness). Some others may have vomiting and diarrhea though is is more common in children and adults."
    ],1),
    encodeMemory([
        "* (are|is) * influenza_symptoms * (sign|symptom) * influenza *",
        "* (are|is) * influenza_symptoms * influenza * (sign|symptom) *"
    ],[
        "yes it is"
    ],1),
]

let section15 = []




export const data = 
    [].concat(section11)
        .concat(section12)
        .concat(section13)
        .concat(section14)
        .concat(section15)
