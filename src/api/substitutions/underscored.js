import { encodeSubstitution } from "@/api/configuration/model";

export const substitutionsUnderscored = [
    encodeSubstitution('diarrhea_causes',['altered immune function', 'artificial sweeteners', 'malabsorption', 'malnutrition']),
    encodeSubstitution('diarrhea_causes',['(bacterial?|parasit(e|ic)|vir(us|al)) infections', 'digestive tract problems', 'food allergy']),
    encodeSubstitution('diarrhea_foods_allowed',['Arroz caldo', 'bananas?', 'broths?', 'chickens?', 'congee?', 'electrolyte drinks?', 'fruit juice', 'oatmeals?', 'peanut butter?', 'potato(es)?', 'rice', 'soup?', 'sports drinks?', 'toasts?', 'water', 'yogurt']),
    encodeSubstitution('diarrhea_foods_allowed',['sabaw', 'manok', 'lugaw', 'bigas', 'tubig']),
    encodeSubstitution('diarrhea_foods_allowed',['sinabawan', 'manuk', 'b(e|i)n(u|o)b(u|o)g', 'emay', 'ig']),
    encodeSubstitution('diarrhea_foods_not_allowed_bad_hydration',['alcohols?', '(coffees?|espresso|latte|cappuccino)', '(Coca-Cola|Pepsi|Sprite|Royal|7Up|Mirinda|Mountain Dew)', 'Tea']),
    encodeSubstitution('diarrhea_foods_not_allowed_bad_hydration',['beer', '(cider|wine|whiskey|tequilla)', '(vodka|gin|rum|tequila|whiskey|brandy)']),
    encodeSubstitution('diarrhea_foods_not_allowed_bad_hydration',['kape', 'coke', 'tsaa']),
    encodeSubstitution('diarrhea_foods_not_allowed_bad_hydration',['kapi', 'koks', 'ti']),
    encodeSubstitution('diarrhea_foods_not_allowed_contains_fructose',['fruit juices', 'gums?', 'dates?', 'grapes?', 'honey']),
    encodeSubstitution('diarrhea_foods_not_allowed_contains_fructose',['ubas']),
    encodeSubstitution('diarrhea_foods_not_allowed_contains_lactose',['(ice)? cream', 'milk', 'cheeses?', 'unpasteurized milk']),
    encodeSubstitution('diarrhea_foods_not_allowed_contains_lactose',['(selecta|magnolia|nestle|Dairy Queen)', '(alaska|nestle|bear brand|anchor)', '(eden|cheeze whiz|magnolia|kraft|quickmelt|anchor)']),
    encodeSubstitution('diarrhea_foods_not_allowed_contains_lactose',['gatas']),
    encodeSubstitution('diarrhea_foods_not_allowed_irritate_stomach',['chili', 'hot sauces', 'spicy foods?']),
    encodeSubstitution('diarrhea_foods_not_allowed_irritate_stomach',['maa?anghang', 'sili', 'labuyo']),
    encodeSubstitution('diarrhea_foods_not_allowed_oily',['oily foods?', 'fr(y|ied)', 'fr(y|ies|ied|ying)', 'hamburger', 'burgers', 'hotdogs', 'bacon', 'sausage', 'dogs', 'greas(e|y|ed)']),
    encodeSubstitution('diarrhea_foods_not_allowed_oily',['(adobo|lechon|sisig|kare-kare|ginataan|tocino)', 'pork chop']),
    encodeSubstitution('diarrhea_foods_not_allowed_oily',['prito(ng)?', 'pinirito', 'baboy']),
    encodeSubstitution('diarrhea_foods_not_allowed_oily',['(na|ma)?s(e|i)n(e|i)ndag', 'pinanendag', 'kembot']),
    encodeSubstitution('diarrhea_foods_not_allowed_produces_gas',['beans?', 'berr(y|ies)', 'broccoli', 'chickpeas?', 'corns?', 'green leafy vegetables', 'peas?', 'peppers?', "nut's", 'cabbages?', 'cauliflowers?', 'salads?']),
    encodeSubstitution('diarrhea_foods_not_allowed_produces_gas',['kamais', 'sili', 'mani']),
    encodeSubstitution('diarrhea_on_the_counter',['antimotility', 'loperamide', 'bismuth', 'electrolyte', 'petroleum jelly', 'oral rehydration solution', 'probiotics', 'zinc']),
    encodeSubstitution('influenza_drugs',['analgesics?', 'ibuprofen', 'advil', 'naproxen', 'paracetamol', 'aspirin', 'antihistamines', 'benadryl', 'cetirizine', 'decongestants', 'expectorants', 'antitussives', 'cough suppressants', 'dextromethorphan', 'guaifenesin', 'robitussin']),
    encodeSubstitution('influenza_foods_allowed',['broccoli', 'broths?', 'chicken soups?', 'fruits', 'garlics?', 'gingers?', 'herbal teas with honey', 'juices?', 'leafy greens?', 'oatmeals?', 'soups?', 'spices?', 'yogurts?', 'oranges?', 'peppers?', 'citrus(es)?', 'berr(y|ies)', 'cabbages?', 'spinach', 'water']),
    encodeSubstitution('influenza_foods_allowed',['((m|p|n)ag?)?s(in)?a(sa)?baw(ang?)?', 'prutas', 'bawang', 'luya', 'sili', 'ni?yog']),
    encodeSubstitution('influenza_foods_not_allowed',['Caffeinated Drinks', 'greasy foods', 'hard grains', 'sugary drinks']),
    encodeSubstitution('influenza_foods_not_allowed_caffeinated_drinks',['(coffees?|espresso|latte|cappuccino)', 'tea', 'softdrinks?', 'energy drink', 'chocolates?', 'cocoas?']),
    encodeSubstitution('influenza_foods_not_allowed_caffeinated_drinks',['(Coca-Cola|Pepsi|Sprite|Royal|7Up|Mirinda|Mountain Dew)', 'gatorade']),
    encodeSubstitution('influenza_foods_not_allowed_greasy_foods',['fr(y|ies|ied|ying)', 'burgers?', 'hotdogs?', 'bacons?', 'sausages?', 'dogs?']),
    encodeSubstitution('influenza_foods_not_allowed_hard_grains',['quinoa', 'rice', '(corn|maize)', 'trigo', 'buckwheat', 'bibingka']),
    encodeSubstitution('influenza_foods_not_allowed_sugary_foods',['leche flan', 'halo halo', 'turon', 'halaya', 'pastillas', 'puto']),
]