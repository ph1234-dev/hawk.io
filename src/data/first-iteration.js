
let createData = (_id,_disease,_q1,_q2,_q3,_q4,_q5,_q6,_q7) =>{
    return {
        id: _id,
        disease: _disease,
        q1: _q1,
        q2: _q2,
        q3: _q3,
        q4: _q4,
        q5: _q5,
        q6: _q6,
        q7: _q7,
    }
}


export let data = [
    createData(1,'diarrhea',[
            'how do you treat diarrhea','paano gamutin ang pagtatae','panon ikagamot sa kapagudo'
        ],[
            'what are the signs or symptoms of diarrhea','ano ang mga palatandaan o sintomas ng pagtatae','ngin i mga tanda atawa sipat na kapaguro'
        ],[
            'what foods you should avoid','ano ang mga pagkain na dapat iwasan kapag nagtatae','ngin i mga pegken a dili nengka maka u pedtaguro'
        ],[
            'how do you avoid diarrhea','paano maiiwasan ang pagtatae','panon i kapangabong sa kadtaguro'
        ],[
            'what are the correct ways to wash hands', 'ano ang mga tamang pamamaraan ng paghuhugas ng kamay','ngin i mga ukit a pakasugat a kepenggagas sa lima'
        ],[
            'what are the typical dose or correct ways of using antimotility','ano ang tamang pamamaraan ng paggamit ng antimotility','ngin i mga nasasangan a kadakel na kakan sa antimotility'
        ],[
            'what is the alternative of antimotility','ano ang ibang gamot na pwedeng kainin','ngin a mga kaped a gamot'
        ]),
    createData(2,'diarrhea',
        [
            'how do you treat diarrhea','paano gamutin ang pagtatae','panon kagamot sa kapedtaguro'
        ],[
            'what are the signs or symptoms to know if someone has diarrhea','ano ano ang mga senyales o sintomas para malaman kung ang isang tao ay nasa pagtatae','ngin i mga tanda atawka sipat na pedtaguro'
        ],[
            'what foods you should avoid when having diarrhea','anong mga pagkain ang dapat na iwasan kapag sa pagtatae','ngin i mga pegken i dili kanen amengka pedtaguro'
        ],[
            'how do you avoid diarrhea','paano maiiwasan ang pagtatae','panon i kapananggila o kaiwas sa kapedtaguro'
        ],[
            'the correct way to wash hands','tamang pamamaraan sa paghuas ng kamay','pakasugat a kabamelimpyo so kapengagas sa lima'
        ],[
            'what is the correct way of using antimotility','ano ang tamang pamamaraan sa paggamot ng antimotility','ngin i nasasangan a kapenggamit sa gamot a antimotility'
        ],[
            'what is alternative for antimotility','ano pa ang ibang alternatibo maliban sa antimotility','ngin pan i kaped a gamot lyo sa antimotility'
        ]
    ),
    createData(3,'diarrhea',
        [
            'how do you treat diarrhea','paano gamutin ang pagtatae','panun i kagamot sa kapedtaguro'
        ],[
            'what are the signs or symptoms','ano ang mga palatandaan o sintomas','ngin i mga sipat o tanda'
        ],[
            'what foods you should avoid', 'anong mga pagkain ang dapat mong iwasan','ngin i mga pegken i det a zanggilan'
        ],[
            'how do you avoid diarrhea','paano mo maiiwasan ang pagtatae','panun i kadzanggila nengka sa kadtaguro'
        ],[
            'correct way to wash hands','tamang paraan ng paghuhugas ng kamay','pakasugat a ukit sa kabamanaw sa lima'
        ],[
            'what is the typical dose or correct way of using antimotility','ano ang tipikal na disi o tamang pamamaraan ng pagkamit ng antimoitility','ngin i nasasangan a karakel na gamot o pakasugat a ukit sa kagait sa antimotility'
        ],[
            'what are the other alternative except from antimotility','ano pa ang mga ibang pamamalit maliban sa antimotility','ngin i kaper a gamut lyu sa antimotility'
        ]
    ),
    createData(4,'diarrhea',
        [
            'how do you treat diarrhea','papaano gamutin ang pagtatae','panon e kagamot sa kapedtagudo'
        ],[
            'what are the signs or symptoms to know if someone had diarrhea','anong mga palatandaan o di kutob para malaman ang isang tao ay mayron pagtatae','ngaini mga tanda tawa sipat o taw a aden salkanin e salat a kapedtagudo'
        ],[
            'what foods you should avoid when having diarrhea','ano ang mga pagkain na dapat iwasan kung may pagtatae','ngaini mga pegken a wagib a inisapal amayka pagtagudo so tao'
        ],[
            'how do you avoid diarrhea','papaano maiiwasan ang pagtate','panon i kadsanggila sa kapedtagudo'
        ],[
            'how to disinfect or boil water','papano disinpek o di kaya ay pagpakulo ng tubig','panon i ukit a katabel sa ig endo matay so mga kanam o ig'
        ],[
            'what is the typical dose or correct way of using medicine antimotilities','ano ang tamang dose sa paggamit ng mga medisina antimotility','ngaini usto a asadan sa kapagusal sa gamot a antimotility'
        ],[
            'ask about its alternatives','itanong mo lang ukol sa kanyang mamamaraan','ipangingidsa nengka bo a kaped a makadgamit lon'
        ]
    ),
    createData(5,'diarrhea',
        [
            'how do you treat diarrhea','paano gamutin ang pagtatae','panun i kapenggamot sa kapedtagudo'
        ],[
            'what are the signs or symptoms to know if someone has diarrhea','ano ang mga senyales na nagtatae ang isang tao','ngin i tanda na tao a pedtagudo'
        ],[
            'what foods you should avoid when having diarrhea', ' anu ano ang mga pagkain na dapat iwasan kapag nagtatae','ngin i mga pegken a nasisita a bagabungan amengka pedtagudo'
        ],[
            'how do you avoid diarrhea','paano maiwasan ang pagtatae','panun i kaabung sa pedtagudo'
        ],[
            'what is the correct way of washing hands','paano ang tamang paraan ng paghuhugas ng kamay','panun i usto a kapenggagas sa lima'
        ],[
            'what is the typical dose or correct way of using the antimotility','ano ang tamang paraan ng paggamit o pag inom ng gamot na antimotility','panun i usto a kapenggamit sa gamot a antimotility'
        ],[
            'what can be the alternative for antimotility','ano ang maaring alternatibo sa agamot na antimoitility', 'ngin i mapakay a makasambi sa antimotility'
        ]
    ),
    createData(6,'diarrhea',
        [
            'how to treat lbm','paano gamutin ang pagtatae','panon i kapenggamot sa tagudo'
        ],[
            'signs and symptoms of lbm','ano ang mga senyales o sintomas ng pagtatae','ngin e kagedam nu taw a aden lbm nin'
        ],[
            'what are the foods to avoid if you have lbm','anong pagkain dapat mong iwasan kapag may lbm','ngin e mga pegken a zangilan amengka aden lbm'
        ],[
            'how to avoid diarrhea','paano mo maiwasan ang pagtatae','panon i kadzangila sa kapedtagudo'
        ],[
            'how to disinfect or boil water','ano ang pamaraan sa pag disinfect o pagpapakulo ng tubig','panon i kapedtabel sa ig'
        ],[
            'what is the correct dose in using antimotility','paano ang tamang dose sa antimotility','ngin e dose sa antimotility'
        ],[
            'what is the alternative for antimotility','ano ang alternatibong gamot na antimotility','ngin e ped a gamot kapedtagudo'
        ]
    ),
    createData(7,'diarrhea',
        [
          'how do you treat diarrhea','paano gagamutin ang diarrhea','panun i kagamot sa tagudo'
        ],[
            'what are the sign or symptoms of diarrhea','paano gagamutin ang patatae','panun i kagamot sa kapedtagudo'
        ],[
            'what foods you should avoid when having a diarrhea','ano ang mga pagkaing dapat iwasan kapag ikaw ay nagtatae','ngin i det a di pegkanen umengka pedtagudo'
        ],[
            'how do you avoid diarrhea', 'paano maiiwasan ang patatae','panun i kaabong sa tagudo'
        ],[
            'how do you disinfect or boil water','paano magpakulo ng tubig','panun i kapapedsebu sa ig'
        ],[
           'what is the typical dose or correct way of using the medicine bismuth subsalicylate','paano ang tamang paggamit ng bismuth subsalicylate','paano i det a pakedan sa bismuth subsalicylate a gamot'
        ],[
            'what are the alternative medicine for bismuth subsalicylate','an oang alternatibong gamot sa bismuth subsalicylate','ngin i mga kaped a gamot maliban sa bismuth subsalicylate'
        ]
    ),
    createData(8,'diarrhea',
        [
            'how do you treat diarrhea','paano mo gamutin ang pagtatae','panon i kagamot nengka sa kapedtaguro'
        ],[
            'what are the signs or symptoms to know if someone has diarrhea','ano ang mga sintomas o symptomas upang malaman na ikaw ay nagtatae','ngin i mga tanda na isa a taw a pedtaguro'
        ],[
            'what foods you should avoid when having diarrhea','ano ang mga pagkain na dapat iwasan sa pagtatae','ngin i mga pangengken a det a pedsanggilan nu taw a pedtaguro'
        ],[
            'how do you avoid diarrhea','paano mo maiiwasan ang pagtatae','panon i kaabong kanu kapedtaguro'
        ],[
            'what is the correct way to wash hands','ano ang tamang paraan sa paghuhuas ng kamay','ngin i mapya a ukit sa kapengagas sa lima'
        ],[
            'what is the typical dose or correct way of using the antimotility','ano ang mga tamang paraan sa paggamit ng antimotility','ngin i mapya a ukit sa kapenggamot sa gamot a antimotility'
        ],[
            'what is the alterantive of antimotility','ano ang pamalit sa antimotility', 'ngin i makasambi sa antimotility'
        ]
    ),
    createData(9,'diarrhea',
        [
            'how do you treat diarrhea', 'paano magagamot ang pagtatae', 'panun e kagamot sa kapedtagudo'
        ],[
            'what are the signs or symptoms if someone has diarrhea','ano ang mga senyales o sintomas ng pagtatae','ngin e mga tanda nu taw a pedtagudu'
        ],[
            'what foods you should avoid when having diarrhea','ano ang mga pagkain na dapat iwasan kapag nagtatae','ngin i mga pegken e det a bagabungan na taw a pedtagudo'
        ],[
            'how do you avoid diarrhea','paano maiiwasan ang pagtatae','panun e kaabung sa paedtagudu'
        ],[
            'how to disinfect or boil water','paano magpakulo ng tubig','panun e kapadtabel sa ig'
        ],[
            'what typical dose or correct way of using antimotility','ano ang mga tamang paraan ng pag inom ng antimotility','panon e usto a kabaginom sa antimotility'
        ],[
            'what is the alternative for antimotility','ano ang alternatibong gamot para sa antimotility','ngin e alternatibo na antimotility'
        ]
    ),
    createData(10,'diarrhea',
        [
            'how do you treat diarrhea','paano mo gagamutin ang pagsusuka','panon i kagamot sa kapanguta'
        ],[
            'what are the signs or symptoms to know if someone has diarrhea','ano ang mga senyales o sintomas kung ang ilang tao ay nag susuka','ngin i mga tanda upama ka banguta i taw'
        ],[
            'what food you should avoid when having diarrhea','anong pagkain ang dapat iwasan kapag ikaw ay may sakit na pagsusuka','ngin i mga pegken na det nengka pedsanggilan upama aden sakit nengka a kapangudo'
        ],[
            'how do you avoid diarrhea','paano mo iiwasan ang pagsusuka','panun nengka pengsanggilan i sakit a kapanguta'
        ],[
            'what ways do you wash your hands','ano ang mga paraan paano hugasan ang iyong mga kamay','ngin i mga ukit nengka panon ikaugas nengka sa mga lima nengka'
        ],[
            'what is the typical dose or correct way of using the medicines antimotility','ano ang tipikal na gamot o tamang paraan sa paggamit ng mga gamot antimotility','ngin i gamot na tidtu na panggamiten sa kaped sakit antimotility'
        ],[
            'what is the alternative of antimotility','ano ang alternatibo para sa antimotility','ngin kaped a gamot lyu sa antimotility'
        ]
    ),
    createData(1,'influenza',[
            'how do you treat influenza','panon mo gamutin ang trangkaso','panon i kagamot sa plumasa'      
        ],[
            'what are the signs and symptoms of influenza','ano ano ang mga senyales/sintomas ng trangkaso','ngin e kagedam nu taw a aden lumasa nin'
        ],[
            'what are the foods you should avoid if you have influenza','ano ano ang mga pagkain na dapat mong iwasan kapag may trangkaso','ngin e mga pegken a zanggilan amengka aden lumasa nengka'
        ],[
            'how to avoid influenza','paano mo maiwasan ang trangkaso','panon e kadzangila sa lumasa'
        ],[
            'what is the correct way of washing hands','ano ang mga tamang proseso sa paghuhugas ng mga kamay','panon e kapengagagas duwa lima ta'
        ],[
            'what is the dose in using lozenges','ano ang tamang dose sa paggamit ng lozenges','panon e kapenggamot sa lozenges'
        ],[
            'what is the alternative of using lozenges','ano ang alternatibong gamot sa lozenges','ngin e ped a gamot kapakayan sa lozenges'
        ]
    ),
    createData(2,'influenza',
        [
            'how do you treat influenza','paano malulunasan ang influenza','panun i kagamut sa influenza'
        ],[
            'what are the symptoms of influenza','ano ang mga sintomas ng influenza','ngin i mga tanda sa aden influenza ta'
        ],[
            'what foods you should avoid when having influenza','anong mga pagkain ang dapat iwasan pag may flu','ngin a mga makan i dapat a abungan u aden influenza nin'
        ],[
            'how could we avoid influenza','paano natin maiiwasan ang flu','panun i kadsanggila sa nyaba flu'
        ],[
            'guide me on the proper way of hand washing','turuan mo ako tungo sa wastong paghuhugas ng kamay','pamanduy ako panun i usto a ukit u kagagas sa lima'
        ],[
            'what is the typical dose of using lozenges','ano ang tamang dose ng pag inom ng lozenges','ngin i usto a dose u kainom sa lozenges'
        ],[
            'what are the alternatives of lozenges','ano ang mga alternatibong gamot maliban sa lozenges','ngin mga gamot a makasambi sa lozenges'
        ]
    ),
    createData(3,'influenza',
        [
            'how do you treat influenza','paano gamutin ang influenza o di kaya ay trangkaso','panon e kagamot sa influenza o di na trangkaso'   
        ],[
            'what are the sings or symptoms to know if someone has influenza','ano ang mga palatandaan o di kaya ay mga sintomas para malaman ang isang tao ay mayrong influenza','ngaini mga tanda atawa sipat o taw e aden salkanin endo katawan e pedskait sa trangkaso'
        ],[
            'what foods you should avoid when having influenza','ano ang mga pagkain ang dapat iwasan kung ang isang tao ay mayrong influenza','ngain mga pegken a wagiba edsanggilan amaika so tao a penggedam sa trangkaso'
        ],[
            'how do you avoid influenza','paano maiwasan ang sakit na influenza','panon e kadsanggila sa dalo a trangkaso'
        ],[
            'what is the correct way to wash hands','ano ang tamang paraan na paghuhuas ng kamay','ngaini osto a okit a kagagas sa lima'
        ],[
            'what is the typical dose or correct way of using the medicines','ano ang kadalasan dose o di kaya tamang paraan sa paggamit ng medisina','ngaini katatapan a asadan atawa osto a mga okit a pagusal sa gamot'
        ],[
            'what about its alternative','ano ang mga maaring gamiting bilang alternatibo sa medisina','ngaini ped a usalen o makaganti sa medisina'
        ]
    ),
    createData(4,'influenza',[
            'how do you treat influenza','paano mo ginagamot ang trangkaso','panun i kapenggamot nengka sa kablumasa'
        ],[
            'what are the signs and symptoms to know if someone has influenza','ano ang sintomas na mayroon para malaman na may influenza','ngin i mga tanda o sipat na taw a belumasa'
        ],[
            'what foods you should avoid when having influenza','ano ang mga pagkain na dapat iwasan kapag may trangkaso','ngin i mga pegken a nasisita a kadsanggilan amengka belumasa'
        ],[
            'how do you avoid influenza','paano mo maiwasan ang pagtratrangkaso','panu i kaabung nengka sa kabelumasa'
        ],[
            'what is the correct way of washing hands','ano ang tamang pamamaraan ng paghuhuas ng kamay','panun i usto a kabamanaw sa lima'
        ],[
            'what is the typical dose or correct way of using analgesics','paano ang tamang paraan ng paggamit ng gamot na analgesics','panun i usto a kapeggamit sa gamot a analgesics'
        ],[
            'what can be the alternative of analgesics','ano an mga maaring pagpalit sa gamot na analgesic','ngin i mapakay makasambi o makagani sa gamot a analgesic'
        ]
    ),
    createData(5,'influenza',
        [
            'how do you treat influenza','paano mo gamutin ang trangkaso','panon i kagamot nengka sa sepo'
        ],[
            'what are the symptoms of influenza','ano ang mga sintomas ng trangkaso','ngin i tanda na pedsepo'
        ],[
            'what foods you should avoid when you have influenza','ano ang dapat iwasang mga pagkain pag may trangkaso','ngin i pangagilan a mga pegken amayka aden sepo ta'
        ],[
            'how will you avoid influenza','paano mo maiiwasan ang trangkaso','panon i kapanggila nengka sa sepo'
        ],[
            'how to disinfect or boil water','paano mag disinfect o magpakulo ng tubig','panon i kapadsebo sa ig'
        ],[
            'what is the prescribed dose or correct way of using medicines','ano ang karaniwang dosis o tamang paraan ng paggamit ng gamot','ngen i kalayaman a dosis atawa nasaguat a kapenggamit sa mga gamot'
        ],[ 
            'what other alternative medicine for influenza','ano ano pang mga gmaot para sa trangkaso','ngin pan i ped a gamot sa sepu atawa trangkaso'
        ]
    ),
    createData(6,'influenza',
        [
            'how do you treat influenza','paano mo gagamutin ang trangkaso','panon i kagamot nengka sa trangkaso'
        ],[
            'what are the signs or symptoms','ano ano ang sintomas ng trangkaso','ngen i mga tanda atawa magedam no taw a pedtrangkaso'
        ],[
            'what foods you should avoid','ano anong mga pagkain ang dapat iwasan pag may trangkaso','ngin i mga pegken a dait a pananggilan'
        ],[
            'how do you avoid influenza','paano mo maiiwasan ang trangkaso','panon i kapanggila sa trangkaso'
        ],[
            'what is the correct way of washing the hands','ano ang tamang paraan ng paghugas ng mga kamay','ngin i nakasugat a ukit a kapamuwanaw sa lima' 
        ],[
            'what is the typical dose or correct way of using the medicines','ano ang tamang paggamit ng gamot','ngen pakatidto a kapenggamit sa gamot'
        ],[
            'what are the other alternatives','ano pa ang ibang alternatibo','ngen pan i ped a kapamilian sambi na gamot'
        ]
    ),
    createData(7,'influenza',
        [
         'how do you treat influenza','paano mo gagamutin ang trangkaso','panon i kapenggamot nengka sa kaped trangkaso'   
        ],[
            'what are the signs or symptoms ','ano ano ang mga senyales o sintomas ng trangkaso','ngin i mga tanda sa tao a pedtrangkaso'
        ],[
            'what foods you should avoid','ano ano ang mga pagkain na dapat iwasan','ngen i mga pegken a dait a pananggilan'
        ],[
            'how do you avoid influenza','paano mo maiiwasan ang trangkaso','panon i kapanangila sa kaped trangkaso'
        ],[
            'what is the correct way of washing the hands','paano ang tamang paraan sa mag huhugas ng kamay','ngin i tanto a ukit na ka bamanaw sa lima'
        ],[
            'what is the typical dose or correct way of using the medicines','paano ang tamang paggamit ng gamot','panon i tidto a ukit na kapengamit sa gamot'
        ],[
            'what are the other alternatives','ango ang iba pang alterntaibong gamot','ngin i ped a gapamilian a gamot'
        ]
    ),
    createData(8,'influenza',
        [
            'how do you treat influenza','paano mginagamot ang trangkaso','panun nengka pengamutan i trangkaso'   
        ],[
            'what are the signs or symptoms to know if someone has influenza','ano ang mga senyales o sintomas ng taong may trangkaso',
            'ngin i mga sipat o taw umengka aden trangkaso nin'
        ],[
            'what foods you should avoid when having influenza','ano ang mga pagkain na dapat mong iwasan kapag ikaw ay may trangkaso','ngin i mga pegkanen a pedsanggilan umengka aden trangkaso nengka'
        ],[
            'how do you avoid influenza','paano mo iniiwasan ang trangkaso','panun nengka bagabungan i trangkaso'
        ],[
            'ask for directions on how to disinfect or boil water','mag tanong ng direksyon sa kung paano i disimpektahin o magpakulo ng tubig','idsa ka pan panun i kaped awa sa maledsik o kaped tabel sa ig'
        ],[
            'what is the typical dose or correct way of using analgesics','ano ang tipikal na dose o tamang na pag gamit ng analgesic','ngin i tipikal na dose o tama a kapenggamit sa analgesics'
        ],[
            'alternative of analgesic','ano ang pamalit sa analgesics','ngin i pakasambi sa analgesic'
        ]
    ),
    createData(9,'influenza',
        [
            'how do you treat influenza','paano mo gagamutin ang trangkaso','panon i kapengamot sa sepo'
        ],[
            'what are signs and symptoms to know someone has influenza','ano ang palatandaan sa taong may trangkaso','ngen i tanda o sipat na taw a aden sepo nin'
        ],[
            'what foods you should avoid when having influenza','ano anong mga pagkain ang dapat mong iwasan pag may trangkaso ka','ngin i mga pegken a dait a pananggilan amayka aden sepo ta'
        ],[
            'how do you avoid influenza','paano maiiwasan ang trangkaso','panon i kapananggila nengka sa sepo'
        ],[
            'what is the correct way to wash hands','ano ang tamang paghugas ng mga kamay','ngin i nakasugat a kapamangagas sa mga lima'
        ],[
            'what is the typical dose or correct way of using the medicines','ano ang tipikal na dosis o tamang paraan ng paggamit ng mga gamot','ngen i husto a ukit a kapenggamit sa mga gamot'
        ],[
            'what is the alternative of analgesics','ano ang mga alternatibo ng analgesics','ngen i ped a mga gamot liw sa analgesic'
        ]
    ),
    createData(10,'influenza',
        [
            'how do you treat influenza','paano gamutin ang trangkaso','panun kapenggamut sa kapendalu'
        ],[
            'what are the signs or symptoms to know if someone has influenza','ano ang mga sintomas kapag may trangkaso','ngin i mga tanda sa aden trangkaso'
        ],[
            'what foods you should avoid when having influenza','anong mga pagkain na dapat iwasan kapag may trangkaso','ngin i mga pegken a det a zanggilan amengka pedtrangkaso'
        ],[
            'how do you avoid influenza','paano maiwasan ang trangkaso','panun kadsanggila sa kadalu',
        ],[
            'correct way to wash hands','tamang paraan ng paghugas sa kamay','tidtu a ukit a pakasugat sa kebamanaw sa lima' 
        ],[
            'what is the typical dose or correct way of using the medicines analgesics','ano ang tipikal na dosis o tamang pamamaraan ng paggamit sa gamot na analgesics','ngin i nasasangan a kapeggamit sa gamut a analgesics'
        ],[
            'what is the alternatives of analgesics','ano ang ibang gamot maliban sa analgesics','ngin i kaper a gamot lyu sa analgesics'
        ]
    ),
]

