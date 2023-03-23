import { encodeMemory } from "@/api/engine/model"

let section16 = [
    encodeMemory([
        `* duken * di * (kan|inom|gamit) * gamot_na_tagudo * `,
    ],[
        `Su mga doctor na di silan ged myug sa pengamit ka sa gamot a kapamasa sa botika sad ala resita nin upama ka aden kailay nengka lugo sa kapedtagudo nengka endu amay ka pegkayaw ka kagina tanda I namba na aden dana na tinay nengka sabap sa kagaw a mana bacteria, virus, parasites.`
    ],7),
    encodeMemory([
        `* duken * di * (kan|inom|gamit) * gamot_na_tagudo *`,
        `* duken * gamot_na_tagudo * di * (kan|inom|gamit) *`,
    ],[
        `Su gamot na tagudo mana su bismuth subsalicylate enggo mga antimotility a mana su loperamide na di mapya a kanen nu tao a pegkayaw a benel o aden lugo a kadtapik nu kapagaduo nin kagina kalunsanan nin I sakit a nan. Su mga wala na di silan pakanen sa nan ka makadalo silan sa hemolytic uremic syndrome.`
    ],7),
    encodeMemory([
        `* ten * di * (kan|inom|gamit) * on_the_counter * `,
        `* ten * di * (kan|inom|gamit) * diarrhea_drugs * `,
        `* diarrhea_drugs * di * (kan|inom|gamit) * `,
    ],[
        `Su mga tao a pedtagudo sa aden lugo abpeg na pegkayw na di minom na gamot a dala riseta na doctor.`
    ],7),
    encodeMemory([
        `* panon * gamot * tagudo * `,
    ],[
        `Kapakay ka keman sa antimotility mana Imodium abpeg a loperamide endu pagkalungad I kapagukit na pegken sa tinay nengka. Kapakay bon I bismuth subsalicylate ( pepto-bismol endu kaopectate ) enggo ka balance I ig na pagukit sa tinay nengka. Kapakay bon I ig a aden glucose-electrolytes nin endu ka ga balansi nin su mamis abpeg a timos nu lawas. Kapakay ka bon penggamit sa hemorriod cream o petroleum jelly amayka pegkagatel I pudit nengka. Aw na to na mapya bon I kainom sa oral rehydration solutions, probiotics abpeg zinc supplements.`
    ],1),
    encodeMemory([
        `* ngen * problema * tagudo *  `,
    ],[
        `Nan ba na makalunsan sa kalebag a tinay nengka. Ssu mga wala na di silan pakanen sa namba ka basi makadalo silan sa hemolytic uremic syndrome a sabap na shiga-toxic E.coli.`
    ],7),
]

let section17 = []

let section18 = [
    encodeMemory([
        `* panon * kaugas * lima * `,
    ],[
        `Betadi ka sa sabon I lima nengka sa dwa pulo ka Segundo. Kapasad nengka , kukus I lima nengka sa dwa pulo bon ka Segundo. Edsengal ka sa happy birthday sa makadwa tupan na gagasi ka su sabon. Amayka da sabon nengka na gagasi ka su lima nengka sa sanitizer. Gamit ka sa alchohol a sanitizer upama ka dala ig. Betadi ka lima nengka sa namba pya pya mana kabetad nengka sa losyon. Ilay ka ka nga ka gamit na su 60% I kabagel nin a alchohol. `
    ],6),
]

let section19 = []


let section20 = [
    encodeMemory([
        `* (ngen|panon) * (awa|gamot|kapya|tabang) * kayaw * kegkel *`,
        `* (ngen|panon) * (awa|gamot|kapya|tabang) *  kegkel * `,
        `* (ngen|panon) * (awa|gamot|kapya|tabang) * kayaw * `,
    ],[
        `Kapakay ka pagandom sa madakel a ig endu di ka lenukan edsamikel. Aden kapamasa a mga gamot sa botika paya da den riseta nin a kapakay nengka pengamitin. Idesa nengka amayka aden acetaminophen nilan endu kaaga I kasakit na lawas.Upama manem ka pegkayaw ka na tapii ka sa mawasa abpeg a a mayaw a debpas I ulo na pasinti. Pambalegkas ka bun sekanin sa di mageget. Amayka pegkegkel su tao na nya mapya  na pangilay ka sa debpas a makapal ka ibetad nengka sa lekanin. Padegka ka sekanin sa mapya endu pegkabagel sekanin.`
    ],2),
    encodeMemory([
        `* (ngen|panon) * (awa|gamot|kapya|tabang) * uta * `,
    ],[
        `1. da ka pegkan o paginom sa apya ngen kapakad nengka makauta.

        2. paginom inom ka ig apya babaydo. Sepa ka sa ice uman sampulong enggu lima ka minutos sat lo taman sa pat kauras.
        
        3. pangigop ka sa igen a pegken , kapakay bon ig, uman sapulo engul lima ka minutus sa tlo taman sa pat a oras. Kapakay bon I ig bo,sports drinks, sabaw, apya ice cream pan. Da ka paginom sa maldsem o aden gatas nin. 
        
        4. taman sa kapakay na malingaw bo a pegken a aden ig nin I inom ka sa pila ka oras endu di edsaldseg I pakaguta nengka. Umayka kagutem ka na kan ka sa embabaydo a pegken ngin su da to ged nanam nin. Aw na to na kan ka sa saging, emay, applesauce, pan, biswit. Nya ba I pedtalon nilan a brat diet. Sa sagay taman sa dwa gay kapasad na kinapaguta, na ka ka pegkan sa pegken a aden alchohol nin, aden caffein nin, lanan a pegken, malalas a pegken, gatas abpeg a cheese.
        
        5. seka kabo kan edtando na umayka makakagaga ka den keman sa pegken a dala nanam nin.
        `
    ],2),
    encodeMemory([
        `* (ngen|panon) * (awa|gamot|kapya|tabang) * langot *`,
    ],[
        `•	Inom ka sa malingaw o matenggaw a paginomen
        •	Kan ka sa dikena get mawgat a pegken, abpeg a pegken a da ged nanam nin mana biswit o pan 
        •	Da ka pegkan sa sinendag, lanan abpeg a mamis ged a pegken.
        •	Pakalumbat ka bo I kakan nengka enggo kan kan ka den mun sa embabaydo
        •	Di ka papedsimbol I mayaw abpeg a meteggaw a pegken upama ka pegkan ka
        •	Inom ka malumbat
        •	Da ka ged pegkyakya kapasad nengka keman
        •	Di pa pedsambot pedsipilyo kapasad nengka keman
        •	Nya ka bo kan a pegken nan gin I kagaga nengka bo pegkan samana
        `
    ],2),
    encodeMemory([
        `* (ngen|panon) * (awa|gamot|kapya|tabang) * sakit  * ulo * `,
    ],[
        `1. betadi ka sa matenggaw aw na to na ice I masakit sa leka

        2. inom ka sa ig o kan ka sa igen a pegken. Amayka kalangot abpeg a pakauta ka na kalgenan kapan paginom, na sesep ka sa ice.
        
        3. degka ka. Da ka ged pagubay sa gasenangan abpeg a makaengel. 
        
        4. padtakena ka I kangiginawa nekga. Pagitong ka sa mapya a kanggula
        
        5. agot ka i lig , waga abpeg a ulo nengka.
        
        6. padegka ka I lawas nengka. Empaygo ka sa mayaw a ig.
        `
    ],2),
    encodeMemory([
        `* (ngen|panon) * (awa|gamot|kapya|tabang) * sakit  * tyan *`,
        `* (ngen|panon) * (awa|gamot|kapya|tabang) * lipedes  * tyan *`
    ],[
        `* betadi ka sa mayaw I tyan nengka. Makadtabang I namba sa kapatelen nengka sa kasakit nin. 

        *agot ka I tyan nengka ka madtabang I namba sa kadegka nin.
        
        *amay ka tyan nengka sa pedtegas na aw na to na belenukan ka, inom ka aden electrolytes nin a paginomin. Tekawi ka gatoriate o saging. Pagingat ka bo ka su tayn I aden wato na kidney nin na di mapakay kelan sa nam ba a pegken ka aden potassium nin. 
        `
    ],2),
    encodeMemory([
        `* ngen * (kan|inom|pamasa) * uta * `,
    ],[
        `Tekaw keman apya embabaydo po sa pegken a da nanam nin. Aw na to na kan ka sa saging, emay, applesauce, pan, biskwit. Namba pedtalon nilan a BRAT diet.
        Kan ka sa di ged mawgat a pegken o matabang a pegken mana biskwit or pan.
        `
    ],2),
    encodeMemory([
        `* ngen * di * (kan|inom|pamasa) * langot * `,
    ],[
        `Kan ka sa di ged mawgat a pegken o matabang a pegken mana biskwit or pan.`
    ],4),
    encodeMemory([
        `duken * tabel * `,
    ],[
        `Su kapedtabel na penggulan edu pebpatay I kagaw a bacteria, virus, abpeg a protozoa. Tabel ka I ig sa dwa ka minutos.`
    ],1),
    encodeMemory([
        `* duken * tabel * ig * `,
    ],[
        `* amayka su ig na malbog, na padtakena ka muna endu salal ka sa debpas, kaltas, twalya o su salal na kapi.

        *itabel nengka sui g sa di embabaya sa saka minutos. Amayka sya ka sa mapulo a dalpa mga 1000 metru na tabel ka sat lo ka minutos.
        
        * pakatenggaw ka I ig tupan na itago ni nengka sa dikena maldsik a betadan. 
        
        *endu pegkapya I nanam na tinabel a nan a ig, na betadi ka sa paydo a benel a timos uman saka litro tupan ibetad nengka sa nalimpyuan a betadan.
        `
    ],1),
    encodeMemory([
        `* ukit * limpyo * `,
        `* panon * limpyo * ig *`,
    ],[
        `1. padtakena ka sa ig , na simboli ka sa saka chlorine compound a (65% taman sa 75%) uman saka litro. 

        2. umani ka dwa ka manaw a salidot nan amba sinimbolan nengka nan I lima ka gallon (dwa pulo ka litro) a ig.  Padsimbol ka embpyapya abpeg a padtaday ka muna sa apya tlo pulo bo kaminutos tupan na inom ka.
        `
    ],1),
    encodeMemory([
        `* ngen * (pamasa|gamit) * limpyo * ig * `,
    ],[
        `Kapakay ka penggamit sa chlorine`
    ],1),
]

let data = 
[].concat(section16)
    .concat(section17)
    .concat(section18)
    .concat(section19)
    .concat(section20)



export{
    data
}