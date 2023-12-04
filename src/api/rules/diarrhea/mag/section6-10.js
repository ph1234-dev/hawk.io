import { encodeMemory } from "@/api/config/model"


let section6 = [
    encodeMemory([
      `* upisan * unga * `, 
      `* di * kan * da * upisan * unga * `,
      `ngin panon to ba ka nasisita su kaawa kaupis sa upis na unga bago kanen`,
      `panon ngin to ka dayt a upisan o bagawan sa upis su unga o pegken tupan na kanen`,
      `panon a to nginto ka upisan o awan sa upis muna i unga o pegken bago kanen.`,
      `panon ngin to ka awan muna sa upis i unga o pegken bago kanen`,
      `enduken ka pangupisan su mga pegken bago pegkanen`,
    ],[
      `Endu di ka pedtagudo na upisi ka i mga unga na kayo bago pegkanen ka su upis nin na aw na to na aden mga kagaw nin a mana su bacteria, parasites abpeg a virus. Upama ka enggulan nengka i nya ba na katangkan nengka su mga namba. Gagasi ka bon ebpyapya bago ka bagupis endu gaawa su mga duti a nakadeket lun.`,
    ],5),
    encodeMemory([
      `* di * kan * (da naluto|mailaw) * karne * `,
      `panon enduken di keman su da maluto a karne`,
      `ngin to ka di keman su taw sa mailaw a seda o karne`,
      `ngin to ka nya mapya na naluto i seda o karne bago kanen`,
      `ngin to ka pedtudan i seda o karne bago pegkanen`,
      `panon a to ka nasisita a bagiluton ebpyapya i seda o karne bago kanen`,
      `panon nginto ka di mapya i kakan sa da maluto a seda o karne`,
      `ngen sabap nin ka di mapya keman sa da maluto a karne su taw`,
      `ngin to ka dayt a pagiluton i karne bago pegkanen`,
    ],[
      `Su kapangiluto sa pegken ebpyapya na nasisita a enggulan nu taw endu pebpatay su mga bacterial, virus abpeg mga parasites a gadsabapan na kapedtagudo. Su kakan sa da maluto ged a pegken o mga mailaw a mga karni, manok, leman, abpeg a mga seda na makadsakit. Su kapagiluto embpyapya endu su kasenggay sa mga pagiluton abpeg su naluto na makatabang endu makatangka sa kapedtagudo.`,
    ],5),
    
    encodeMemory([
      `* ingat * tagudo * `, 
      `* kasambot * tagudo * `, 
      `* gamot * tagudo *`
      `nasisita a galbeken nu taw endu di sekanin edtagudo`,
      `ngin i galbeken nu taw endu di sekanin edtagudo`,
      `ngen i mapya enggulan nu endu di edtagudo`,
      'panon i di kadtagudo nu taw',
      `panon i katangka sa sa sakit a kapedtagudo`,
      `panon kagamot sa tagudo`,
    ],[
      `Su kalimpyo , mana su kagagas sa lima sa sabon enggo ig , bago pegkan o kapasad gemamit sa cr na nasisita endu di ka edtagudo. Sigurado ka na malinis i gaganatanan a pegken abpeg su ig a paginumin. Endu iluto ka ebpyapya su pegken endu pebpatay i mga bacteria abpeg a parasite a pendeket sa pegken. Su di kakan sa mga da maluto na enguggulan nu taw endu di sekanin edtagudo. Meto bun su mga pegken na aden gatas nin a dala ma pasteruize abpeg nu mga maldsik a ig. Inom ka bon sa ig abpeg a kan sa ebpyapya ka namba na pakagkabagel sa lawas endu di ka kadampuan na kapedtagudo`,
    ],1),
    
]


let section7 = [
    
   encodeMemory([
    `* (kanen|pegken|inumen) * (kapakay|mapya|tabang) * tagudo *`, 
    `* (kanen|pegken|inumen) * tagudo * (kapakay|mapia|tabang) * `, 
    `* (kapakay|mapya|tabang) * (kanen|pegken|inumen) * tagudo * `, 
    `* (kapakay|mapya|tabang) * tagudo * (kanen|pegken|inumen) * `, 
    `* tagudo * (kapakay|mapya|tabang) * (kanen|pegken|inumen) * `, 
    `* tagudo * (kanen|pegken|inumen) * (kapakay|mapya|tabang) *`, 
    `amayka pedtagudo su taw na ngin i pakan sa lekanin`,
    `ngin i mapya a kanen inumen nu taw a pedtagudo`,
    `labit ka sa laki ngin besen i mga pegken a makadtabang sa taw a pedtagudo`,
    `ngen i mapya mapakay ipakan ipasepa sa taw a sick pedtagudo`,
    `ngin i mga pegken a kapakay pakan pamasan kanen nu taw a pedtagudo`,
    `su pedtagudo a taw na ngin i mapakay a kanen nin`,
   ],[
     `Kapakay ka pegkan sa arroscaldo, saging, sabaw, manok, binubog, electrolyte drinks, oatmeal, peanutbutter, patatas, emay, sports drinks, toast, ig, yogurt, am, abpeg a beteng. Mapakay ko bun edalon ngin I di ka pegkan upama ka pedtagudo ka.  `,
   ],4),
]


let section8 = [
    encodeMemory([
      `* di * mapya * hydration * \bdiarrhea\b(?!_) *`,
      `* diarrhea_foods_not_allowed_bad_hydration * \bdiarrhea\b(?!_) *`,
      `enduken ka di mapya minom o keman su taw sa paka dehydrate upama ka pendalo sa tagudo`,
      `enduken ka di mapya minom o keman su taw sa diarrhea_foods_not_allowed_bad_hydration amayka upama ka pedtagudo`,
      ,
    ],[
      `Enggulan nu taw su di kakan sa mga pegken a di mapya sa hyrdation mana namba nilabit nengka kagina namba silan na pakalunsan sa dyhdration nu lawas. Nya mapya na kan ka sa mga pegken a malmo ka tunag sa tyan endu madakel i ig nin mana su sabay, tininda a kamo, abpeg mga unga na kayo ka madakel i ig nilan a makatabang sa kasambi na nadadag a ig nu taw abpeg electrolyes.`,
    ],4),
    // encodeMemory([
    //   `* duken * diarrhea_foods_not_allowed_produces_gas * di * (inom|kan|pamasan) * tagudo *`, 
    //   `* duken * di * (inom|kan|pamasan) * diarrhea_foods_not_allowed_produces_gas * tagudo * `,   
    //   `nginto ka di pakanen su taw sa diarrhea_foods_not_allowed_produces_gas upama pedtagudo`,
    //   `ngin to ka temangka su taw sa diarrhea_foods_not_allowed_produces_gas amayka pakagedam sa kapedtagudo`,
    //   `mapakay a keman o minom su taw a pedtagudo sa diarrhea_foods_not_allowed_produces_gas`,
    //   `kapakayan a keman o minum sa diarrhea_foods_not_allowed_produces_gas i taw a pedtagudo`,
    //   `ngin i mapya a galbeken nu taw amayka aden diarrhea_foods_not_allowed_produces_gas`,
    //   `enduken ka di mamasa sa diarrhea_foods_not_allowed_produces_gas i tayn san a pedtagudo`,
    //   `ngin sabap nin ka , da ka pamasa sa diarrhea_foods_not_allowed_produces_gas upama ka pedtagudo su taw`,
    // ],[
    //   `Nasisita su di kakan nu taw sa mga pegken a pakadtagetut endu di penggedi i tyan nin. Su Kapedtagetut abpeg diarrhea na galunsanan na mga pegken a sobra i kadakel na fiber nin mana su beans, lentils, abpeg madakel i lawn nin a kamo. Su tut na ga kwa bon sa mga softdrinks, chewing gum, abpeg mga mamis. Makatabang sa kangedam nu taw amayka keman sekanin sa mga pegken a di ged madakel i fiber nin endu su katanga sa mga pegken a makadtagetut.`,
    // ],4),
    encodeMemory([
      `* lactose *`,
      `* lactose * \bdiarrhea\b(?!_) *`,
      `* diarrhea_foods_not_allowed_contains_lactose * \bdiarrhea\b(?!_) *`,
      `enduken ka di mapya minom o keman su taw sa aden lactose nin upama ka pendalo sa tagudo`,
      `enduken ka di mapya minom o keman su taw sa diarrhea_foods_not_allowed_contains_lactose amayka upama ka pedtagudo`,
    ],[
      `Upama ka pedtagudo so taw na di kapakay a keman su taw sa mga pegken a aden lactose nin ka pakabinasa sa tinay i to ba endu di makambal sa lactase a enzyme a pedtabang sa kasesep sa lactose su taw. Upama ka di masesep nu lawas ebpyapya su lactose, na di maawa i namba sa tinae. Namba na pakadtagetut abpeg pakadsakit sa tyan. Tu ba nan, nasisita su katangka sa mga pegken a aden lactose nin mana su mga gatas , cheese abpeg ice cream. `,
    ],4),
    // encodeMemory([
    //   `* di * (inom|kan|pamasan) * diarrhea_foods_not_allowed_contains_fructose * tagudo *`, 
    //   `* diarrhea_foods_not_allowed_contains_fructose * di * (inom|kan|pamasan) * tagudo *`, 
    //   `enduken ka di mamasa sa diarrhea_foods_not_allowed_contains_fructose i tayn san a pedtagudo`,
    //   `kapakayan a keman o minum sa diarrhea_foods_not_allowed_contains_fructose i taw a pedtagudo`,
    //   `mapakay a keman o minom su taw a pedtagudo sa diarrhea_foods_not_allowed_contains_fructose`,
    //   `ngin i mapya a galbeken nu taw amayka aden diarrhea_foods_not_allowed_contains_fructose`,
    //   `ngin sabap nin ka , da ka pamasa sa diarrhea_foods_not_allowed_contains_fructose upama ka pedtagudo su taw`,
    //   `ngin to ka temangka su taw sa diarrhea_foods_not_allowed_contains_fructose amayka pakagedam sa kapedtagudo`,
    //   `nginto ka di pakanen su taw sa diarrhea_foods_not_allowed_contains_fructose upama pedtagudo`,
    // ],[
    //   `
    //   Su fructose na mamis i namba a sya gaton sa mga unga na kayo, teneb abpeg mga kamo. Su kapedtagudo na galunsanan na nya ba ka aden mga tao a di nilan gasesep empyapya su fructose. Nasisista i katanga sa mga pegken a aden fructose nin upama ka pedtagudo i taw.
    //   `,
    // ],4),
    encodeMemory([
      `* diarrhea_foods_not_allowed_irritate_stomach * \bdiarrhea\b(?!_) *`,
      `* diarrhea_foods_not_allowed_irritate_stomach *`,
      `enduken ka di mapya minom o keman su taw sa mga malalas o malas a pegken upama ka pendalo sa tagudo`,
      `enduken ka di mapya minom o keman su taw sa diarrhea_foods_not_allowed_irritate_stomach amayka upama ka pedtagudo`,
    ],[
      `Su mga malalas a pegken na ti mapya sa tinae ka pakalunsan sa kapedtagudo. Engo, nya mga mga malalas a pegken na aden mga ingredients nin a malgen ga sesep nu tinay a pakalunsan sa sakit. Namba sabap nin enduken nasisita su di kakan sa mga namba`,
    ],4),
    encodeMemory([
      `* diarrhea_foods_not_allowed_oily * \bdiarrhea\b(?!_) *`,
      `* diarrhea_foods_not_allowed_oily *`,
      `enduken ka di mapya minom o keman su taw sa madakel i lana nin o lanan a o pegken upama ka pendalo sa tagudo`,
      `enduken ka di mapya minom o keman su taw sa diarrhea_foods_not_allowed_oily amayka upama ka pedtagudo`,
    ],[
      `So mga lanan a pegken na madakel i fats nin a pakagkawget sa ka lyu nu pegken ebpun sa tinay. Malgen bon pedsesepen so lana a paka stimulate sa kanggagalbek nu tinay a pakadtagudo. Endu su lana na paka umbal abpeg pakagkadakel sa stomach acid a makalunsan sa kangegedam nu taw. Upama ka pedtagudo i isa na temangka sekanin a mga nya ba lanan a pegken`,
    ],4),
    encodeMemory([
      `* pegken * di * (inom|kan) * tagudo * `, 
      `* tagudo * di * (inom|kan) * pegken *`, 
      `labit ka sa laki ngin i mga pegken a di mapakay kanen iluton nu taw a pedtagudo`,
      `ngen a mga di mapya mapakay a pamasen kanen inumen iluton nu taw a pedtagudo`,
      `ngin i mga pegken a tangkan di dayt a pamasan kanen o iluton nu taw a pedtagudo`,
      `aden ngin mga pegken tangkan di dayt a kanen inumen pamasen iluton nu taw a pedtagudo`,
    ],[
      `
      So katangka sa kaped a mga pegken na nasisita edu di kalunsanan su sakit nu taw. Su mga malalas, lanan , madakel i fats nin na malgen ga digest o sesep nu tinay nu taw. Su mga pegken manem a aden lactose o fructose nin na di mapya ka pakalunsan sa sakit kagina su kaped a mga taw na di nilan gasesep i namba. Endu aden mga pegken a madakil i fiber nin mana su mga beans, mga cruciferous vegetables abpeg mga hard grains na malgen gatunag sa tyan. Aw na to na nya ba na makadtagetut o makagkasakit sa tyan. 

      Kaped sa di mapya a kanen o inumen nu pedtagudo na su aden alchohol nin, beans, berries, broccoli, repolyo, cauliflower, cheese, cheakpeas, kapi, kamais, petsay, fruit juice, grapes, mga gadong a kamo, teneb, ice crea, gatas, mani, lanan a pegken, malalas a pegken, paminta, mailaw a pegken, salad, shellfish, softdrinks, ebpeg tea. 
      
      Nya mapya na kan ka sa mga pegken a malmo gatunag sa tyan nin mana su mga da ged nanam nin a pegken endu d kaumnanan ni kapedtagudo nu taw
      `,
    ],4),
]

let section9 = []

let section10 = [
    encodeMemory([
      `* problema * tagudo * `, 
      `* tagudo * problema *`,  
      `Tayn i dayt a magingat amayka pedtagudo`,
      `su wata o matuwa na mangingat sa kadtagudo`,
      `tayn Ngin a mga taw i mangingat emangka sa kapedtagudo`,
      `aden taw a kalunsanan magkaproblema kadtagudo nin`,
    ],[
      `Su wata a naka tlo lagon pan, su mga matuwa na malubay I lawas nin, su di pakakan pyapya, tayn I pedtagudo sa naipos a dwa gay, su pegkayaw sa 39 degree celcius, su aden dana na tai nin, su mapulo I lugo nin, su aden pagangayan nin, abpeg na su aden bon sakit ni andang n abasi kalunsanan I sakit nilan.`,
    ],1),
]


let data = 
  [].concat(section6)
    .concat(section7)
    .concat(section8)
    .concat(section9)
    .concat(section10)


export{
    data
}