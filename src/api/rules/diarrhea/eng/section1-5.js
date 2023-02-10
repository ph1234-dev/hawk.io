import { encodeMemory } from "@/api/engine/model"

let section4 = [

    // section 4
    encodeMemory([
        "* (why|how|when) * weak * immune system * trigger * diarrhea *"
    ],[
        "If you have frequent diarrhea, gas or constipation, it could be a sign that your immune system is compromised."
    ]),
    encodeMemory([
        "* (why|how|when) * sweetener * trigger * diarrhea *"
    ],[
        "some people are sorbitol intolerant which are highly used in processed foods."
    ]),
    encodeMemory([
        "* (why|how|when) * food allergy * trigger  * diarrhea *"
    ],[
        "Undigested disaccharides cause an osmotic load that attracts water and electrolytes into the bowel. Your body isn't able to take in many of the nutrients from the food you eat."
    ]),
    encodeMemory([
        "* (why|how|when) * malnutrition *  trigger * diarrhea * "
    ],[
        "Malabsorption can result in both nutritional deficits and diarrhoea. With severe malnutrition, chronic diarrhoea can persist due to impaired immune function and poor mucosal recovery. Food intolerance and an inappropriate diet in the setting of malabsorption may also contribute to chronic diarrhoea"
    ]),
    encodeMemory([
        "(why|how|when) * drug * trigger *  diarrhea * "
    ],[
        "Diarrhea may be a sign of serious reaction to a medicine, such as a toxic reaction. Diarrhea is an early sign of toxicity for some medicines"
    ]),
    encodeMemory([
        "* (why|how|when) * parasite * infection * trigger * diarrhea *"
    ],[
        "The parasite attaches itself to the lining of the small intestines in humans, where it causes diarrhea and interferes with the body's absorption of fats and carbohydrates from digested foods"
    ]),
    encodeMemory([
        "* (why|how|when) * bacteria * infection * trigger * diarrhrea * "
    ],[
        "Bacterial gastroenteritis happens when bacteria cause an infection in your gut. The infection leads to inflammation in your stomach and intestines."
    ]),
    encodeMemory([
        "* (why|how|when) *  virus * infection * trigger * diarrhea * "
    ],[
        "Viral gastroenteritis is an inflammation of the inside lining of your gastrointestinal tract. It can be caused by rotavirus, norovirus, adenovirus, and other viruses. Babies can be vaccinated against rotavirus. Symptoms of viral gastroenteritis are nausea, vomiting, and watery diarrhea."
    ]),
    encodeMemory([
        "* (why|how|when) *  digestive problem * trigger *  diarrhea * "
    ],[
        "Diarrhea can be present due to abnormalities in the small intestine or the large intestine. Diarrhea has a number of other causes, such as IBS, Crohn's disease, ulcerative colitis, celiac disease, microscopic colitis and small intestinal bacterial overgrowth (SIBO)."
    ]),
    encodeMemory([
        " * (how|where) * get * diarrhea * ",
        " * get *  diarrhea * where *"
    ],[
        "There are many ways you can get diarrhea. Here are some of the well known. If you have altered immune system you may be at increased risk. If you have digestive tract problems that would also be problematic. There are instances that diarrhea may also be a side effect of taking a particular medicine. The most common causes, however is related to food. Some people have food allergies. Some have problems digesting carbohydrates such as lactose from milk and dairy products, sorbitol from artificial sweeteners, and fructose which are also found in some fruits and processed foods. "
    ]),
    encodeMemory([
        "* (will|shall|do|can|would) * get * diarrhea * diarrhea_causes *"
    ],[
        "Yes.  There are medical reports indicating that you can get diarrrhea from that. So be very careful , if you have it, don’t panic. It will mostly relieve on its own. There are some medicines you can take to relieve some of the discomfort. But if diarrhea persists or you are seeing blood in your stool, it is best to see a doctor for better guidance."
    ]),
    encodeMemory([
        "* (will|shall|do|can|would) * diarrhea_unabsorbable_sugar_to_some * trigger * diarrhea *"
    ],[
        ""
    ]),
    encodeMemory([
        "* what * trigger * diarrhea *"
    ],[
        `Based on the reports , you can get diarrhea from  bacterial, viral, and parasitic infections.
         If you have weak immune system, you may have increase risk. That is also true when you have 
        underlying digestive tract problems. It can also be a side effect of your medicine. When it 
        comes to food and drinks, those containing lactose, fructose and sorbitol can trigger diarrhea to people who are unable to process them.
        `
    ]),    
    encodeMemory([
        "* (can|will|should|would|shall|are|is) * diarrhea_causes * trigger * diarrhea *"
    ],[
        "Yes. What you said can cause diarrhea."
    ]),
]


let section5 = [
    encodeMemory([
        "* (why|how) * hydrate * treat * diarrhea *"
    ],[
        `you need to hydrate to keep yourself away from dehydration. You loose water when you have diarrhea so keep drinking fluids like water, buko juice, oral rehydration solutions, am, arrozcaldo, soups, sports drinks, and broths.`  
    ]),
    encodeMemory([
        "* (why|how) * take * water * treat * diarrhea *"
    ],[
        `when you have diarrhea you may loose tons of water. Drinking water ensure you replenish water you lost which in turn prevents diarrhea` 
    ]),
    encodeMemory([
        "* (why|how) * zinc * treat * diarrhea *"
    ],[
        `Supplementary zinc benefits children with diarrhoea because it is a vital micronutrient essential for protein synthesis, cell growth and differentiation, immune function, and intestinal transport of water and electrolytes. Zinc supplementation has been found to reduce the duration and severity of diarrhoeal episodes and likelihood of subsequent infection`
    ]),
    encodeMemory([
        "* (why|how) * healthy * food  * treat * diarrhea *"
    ],[
        `When you have diarrhea, the foods that you eat and the foods that you avoid can be critical to helping you recover quicker`  
    ]),
    encodeMemory([
        "* (why|how) * consult * doctor * treat * diarrhea *"
    ],[
        `Visit your doctor right away if you experience any of the following symptoms: Diarrhea that lasts more than two days. Diarrhea accompanied by a fever of 102 degrees F or higher. Six or more loose stools in 24 hours` 
    ]),
    encodeMemory([
        "* why * take * water * "
    ],[
        `you need to replace the fluids lost during diarrhea to prevent dehydration. ` 
    ]),
    encodeMemory([
        "* why * hydrate *"
    ],[
        `oral rehydration salts don’t stop diarrhea. It helps replace the fluids and essential salts you lost which in turn help prevent dehydration. That can help you if you have diarrhea`
    ]),
    encodeMemory([
        "* why * take *  zinc * diarrhea *"
    ],[
        `zinc supplementation, at a dosage of 20 milligrams per day for children older than six months or 10 mg per day in those younger than six months, for 10–14 days.`
    ]),
    encodeMemory([
        "* why * take * healthy * food * diarrhea *"
    ],[
        `When you have diarrhea, the foods that you eat and the foods that you avoid can be critical to helping you recover quicker`
    ]),
    encodeMemory([
        "* how * treat * diarrhea *"
    ],[
        `There are several things you can do when you have diarrhea. You may take oral rehydration solutions to replace lost fluids and zinc supplements. Eat nutrient rich foods too. However, its best if you consult a doctor when your diarrhea lasts for more than 48 hours or when you see blood in your stools.`
    ]),
    encodeMemory([
        "* who * treat * diarrhea *"
    ],[
        `Most of the time, your diarrhea may resolve on its own. However, if it gets worse, it lasts more than 2days or you can see blood in your stools. Seek medical help immediately `
    ]),
    encodeMemory([
        "* (can|is|will|would) * diarrhea * treat *",
        "* (can|shall|will|would) * treat * diarrhea*"
    ],[
        `yes, you can manage diarrhea` 
    ]),
    encodeMemory([
        "* when * consult * doctor * diarrhea * "
    ],[
        `When your diarrhea persists for more than 48 hours , or when there is blood in your stool, or if you see signs of dehydration consult a healthcare professional immediately`
    ]),
    encodeMemory([
        "* where * treat * diarrhea *",
        "* treat * diarrhea * where *"
    ],[
        `If your diarrhea is acute you can treat it in your home, but it gets worse or persist more than 48 hours, there is blood in your stool or see signs of dehydration bring the patient to a healthcare facility immediately. Go to nearest baranggay health center`
    ]),
    encodeMemory([
        "* where * buy * diarrhea_drugs *",
        "* where * buy * diarrhea * drugs *",
        "* where * buy * drugs * diarrhea *"
    ],[
        `you can buy them in pharmacy , just tell the pharmacist you need the medicine. If the patient is having bloody stools or fever don’t buy antimotility drugs such as loperamide and imodium. You can buy oral rehydration solutions to help replenish the water the patient lost.`
    ]),
    encodeMemory([
        "* what * do * blood * stool*",
        "* what * do * blood * diarrhea *",
        "* blood * stool * what * do *",
        "* blood * diarrhea * what * do *",
    ],[
        `A bloody diarrhea may be an indication of some underlying infection. Don’t take on the counter medicines such as antimotility agents like loperamide imodium and pepto bismol. Keep hydrating yourself. Also, go see a doctor immediate. They know what to do when you have bloody diarrhea. `
    ]),
    encodeMemory([
        "* what * do * fever * diarrhea *",
        "* what * do * diarrhea * fever *",
    ],[
        `Don’t take on the antimotility agents like loperamide and imodium when you are having fever when having diarrhea. Drink plenty of fluids for now.Bring the patient immediately to doctor`
    ]),
    encodeMemory([
        "* diarrhea * treat * how *",
        "* treat * diarrhea * how *",
        "* how * treat * diarrhea *",
        "* what * treat * diarrhea *",
        "* what * diarrhea * treat *",
        "* treat * diarrhea * how *",
        "* what * drug * diarrhea *",
        "* diarrhea * drug * what *",
        "* drug * diarrhea * what *",
    ],[
        `Most acute diarrhea resolve on its own. There are some medicines that help. You can take antimotility agents such as loperamide, imodium, and bismuth subsalicylate. However, dont take antimotility agents when you have fever or have bloody stools.Also when you have diarrhea, you loose a lot of fluids "So keep hydrating. You can take broths, soups, sports drinks, coconut water, water, oral rehydration solutions. You can also take zinc supplements. If you have access to healthy foods, have them. If your diarrhea lasts for than 2 days or when you see blood in your stool its best to see doctor immediately`
    ]),
]



export const data = 
  [].concat(section4)
    .concat(section5)

