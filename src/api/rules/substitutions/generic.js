import { encodeSubstitution } from "@/api/config/model";

export const substitutionsGeneric = [
    // encodeSubstitution('about',['tungkol']),
    // encodeSubstitution('according',['according(.*)','ayon','tig']),
    // encodeSubstitution('act',['act(.*)']),
    // encodeSubstitution('address',['address(.*)','(.*)tugon(.*)']),
    // encodeSubstitution('advantage',['advantag(.*)']),
    // encodeSubstitution('aggravate',['(.*)aggravat(.*)','(.*)exacerbat(.*)']),
    // encodeSubstitution('aggravate',['(.*)l(um)?ubha(.*)','(.*)(p|m)alala']),
    // encodeSubstitution('aggravate',['(.*)l(u|o)nsan(.*)']),
    // encodeSubstitution('antidiarrheal',['antidiarrheals']),
    // encodeSubstitution('antiviral',['antivirals']),
    // encodeSubstitution('basic',['basics']),
    // encodeSubstitution('become',['maging','pagiging']),
    // encodeSubstitution('become',['naging','nagiging']),
    // encodeSubstitution('bottle',['bottles?','bote(ng)?','but(u|o)l']),
    // encodeSubstitution('bring',['bring(.*)', 'brought']),
    // encodeSubstitution('buy',['(.*)order(.*)', '(.*)purchas(.*)']),
    // encodeSubstitution('buy',['(m|n|p|(g|n|b|m|k)ap|pin)amasan?', '(.*)pamasa(.*)','pamasen']),
    // encodeSubstitution('buy',['bought', '(.*)b(um|in)?ili']),
    // encodeSubstitution('center',['(.*)centers']),
    // encodeSubstitution('chance',['chances?','tsansa','(.*)?kataon']),
    // encodeSubstitution('chest',['dibdib','lad(i|e)b']),
    // encodeSubstitution('chronic',['(.*)t(in|um)?agal(.*)', '(.*)prolong(.*)']),
    // encodeSubstitution('chronic',['(n|m)a(o|u|w)get']),
    // encodeSubstitution('compare',['compar(.*)']),
    // encodeSubstitution('compose',['(.*)compos(.*)', 'parts?']),
    // encodeSubstitution('consider',['(.*)consider(.*)','(.*)k(o|u)nsider(.*)']),
    // encodeSubstitution('consider',['(.*)turing']),
    // encodeSubstitution('counter',['(.*)counter(.*)']),
    // encodeSubstitution('develop',['(.*)develop(.*)']),
    // encodeSubstitution('diagnose',['diagnos(.*)']),
    // encodeSubstitution('diet',['(.*)diet(.*)']),
    // encodeSubstitution('differ',['(.*)b(e|i)(b(e|i))?da(ia|ya|yan)']),
    // encodeSubstitution('differ',['(.*)differ(.*)', '(.*)contrast(.*)','(.*)disparit(.*)']),
    // encodeSubstitution('differ',['(in|um|ka|pinagka|pagka|(n|m)apag|(n|m|p)ag)?(ka)?(ka|i)?iba(hin|han|ng)?']),
    // encodeSubstitution('differ',['dissimilar(.*)']),
    // encodeSubstitution('distance',['distanc(.*)']),
    // encodeSubstitution('distinguish',['distinguish(.*)']),
    // encodeSubstitution('elder',['elder(.*)','mata(ta)?nda(ng)?', 'matuwa']),
    // encodeSubstitution('enough',['adequate', 'sapat']),
    // encodeSubstitution('ensure',['(.*)certain(.*)', '(.*)sigur(.*)']),
    // encodeSubstitution('every',['bawat']),
    // encodeSubstitution('example',['examples', 'halimbawa','instances?']),
    // encodeSubstitution('facility',['facilities']),
    // encodeSubstitution('forum',['ahensya']),
    // encodeSubstitution('forum',['forums','web(.*)','artikulo',"online","balita", "news","hotline"]),
    // encodeSubstitution('hospital',['(.*)(c|k)lini(c|k)(.*)','(.*)ospital(.*)',]),
    // encodeSubstitution('ilan',['i?ilang']),
    // encodeSubstitution('initial',['initiat(.*)']),
    // encodeSubstitution('link',['link(.*)','connect(.*)','koneksi?yon']),
    // encodeSubstitution('locate',['(.*)locat(.*)','places?','lugar']),
    // encodeSubstitution('measure',['(.*)measur(.*)']),
    // encodeSubstitution('mistake',['mistake(.*)']),
    // encodeSubstitution('movement',['mov(.*)']),
    // encodeSubstitution('mucus',['plema','pleghm']),
    // encodeSubstitution('payag',['(.*)p(in|um)?ayag(.*)']),
    // encodeSubstitution('point',['point(.*)','punto']),
    // encodeSubstitution('poison',['(.*)poison(.*)','(.*)las(u|o)n(.*)']),
    // encodeSubstitution('prefer',['(.*)preferr(.*)']),
    // encodeSubstitution('prescribe',['(.*)prescri(.*)', 'r(i|e)seta']),
    // encodeSubstitution('present',['(.*)present(.*)']),
    // encodeSubstitution('primary',['panguna(.*)']),
    // encodeSubstitution('relate',['relat(.*)']),
    // encodeSubstitution('safe',['(.*)ligtas(.*)']),
    // encodeSubstitution('safe',['safe(.*)', 'sav(e|es|ed|ing)', '(.*)l(um)?igtas(.*)']),
    // encodeSubstitution('salt',['salt(.*)']),
    // encodeSubstitution('same',['similar(.*)', 'tulad', 'like(.*)']),
    // encodeSubstitution('sell',['sell(.*)','sold','(.*)benta(ng)?','(.*)tinda(ng)?']),
    // encodeSubstitution('set',['sets']),
    // encodeSubstitution('source',['(.*)source(.*)','(.*)mula']),
    // encodeSubstitution('start',['init(.*)']),
    // encodeSubstitution('stiff',['stiff(.*)', 'kapa(pa)negas', 'paninigas', '(.*)tegas']),
    // encodeSubstitution('thing',['(.*)thing(.*)']),
    // encodeSubstitution('thing',['bagay']),
    // encodeSubstitution('young',['child(.*)','wata','bata(ng)?','sanggol','infants?']),
    // encodeSubstitution('antibiotic',['antibiotics']),
    // encodeSubstitution('balance',['(.*)balan(s|c)(.*)',]),
    // encodeSubstitution('between',['pagitan','gitna']),
    // encodeSubstitution('comfort',['(.*)comfort(.*)','(.*)k(u|o)mportable(.*)']),
    // encodeSubstitution('contribute',['(.*)contribut(.*)']),
    // encodeSubstitution('drugstore',['(.*)store(.*)', 'tinda(.*)', 'pharma(.*)', 'parmasya','shops?']),
    // encodeSubstitution('drugstore',['b(u|o)tika','(.*)dagang(.*)','merkado','market','grocery']),
    // encodeSubstitution('group',['groups', 'grupo', '((n|m|p)ag?)?k(um)?u(ku)?mp(u|o)l(ang?)?', '(.*)pangkat(.*)']),
    // encodeSubstitution('ingredient',['ingredients','sangkap','substances?']),
    // encodeSubstitution('malnutrition',['malnutrisi?yon','(.*)malnourish(.*)',]),
    // encodeSubstitution('nutrient',['(.*)sustans(.*)']),
    // encodeSubstitution('nutrient',['nutri(.*)']),
    // encodeSubstitution('product',['produ(.*)']),
    // encodeSubstitution('qualified',['kalidad','reliable','appropriate','suit(.*)']),
    // encodeSubstitution('skip',['skip(.*)']),
    // encodeSubstitution('standard',['(.*)standard(.*)','specific(.*)']),    
    // encodeSubstitution('strain',['(.*)strain(.*)']),
    // encodeSubstitution('support',['(.*)support(.*)']),
    // encodeSubstitution('acute',['(.*)tindi(.*)', '(.*)seryoso(.*)', '(k|c)ritical']),
    encodeSubstitution('ako',['ak(i|o)ng']),
    encodeSubstitution('allergy',['allerg(.*)']),
    encodeSubstitution('alternative',['(.*)(p|m|n)alit']),
    encodeSubstitution('alternative',['(.*)s(in|um)ambi(.*)']),
    encodeSubstitution('alternative',['(.*)substi(.*)']),
    encodeSubstitution('alternative',['alternati(.*)', 'substitut(.*)', '(.*)pilian(.*)']),
    encodeSubstitution('alternative',['else','(an)?others?','(be|a)sides?','maliban']),
    encodeSubstitution('alternative',['herb(.*)','halamang?']),
    encodeSubstitution('analgesic',['analgesics', 'paracetamol', 'biogesic', 'aspirin', 'acetaminophen','painkillers?']),
    encodeSubstitution('antihistamine',['antihistamines', 'benadryl', 'cetirizine','histamines?']),
    encodeSubstitution('antimotility',['(anti)?motilit(.*)', 'loperamide', 'imodium']),
    encodeSubstitution('antitussive',['antitussives', 'dextromenthorpan', 'robitussin', 'dextromenthorpan']),
    encodeSubstitution('approach',['((m|p|n)ag|m?(e|i)n|)?(u|o)ba(in|yn?)']),
    encodeSubstitution('approach',['(.*)approach(.*)','(.*)l(um)?apit(.*)']),
    encodeSubstitution('ask',['(.*)(e|i)dsan?']),
    encodeSubstitution('ask',['(.*)inquir(.*)', '(.*)question(.*)','(.*)t(in|um)?an(o|u)ng(.*)']),
    encodeSubstitution('ask',['ask(.*)','(.*)hing(i|an)']),
    encodeSubstitution('ask',['ku?westi?y(u|o)n(in)?']),
    encodeSubstitution('avoid',['(.*)(t|m|n)angka(.*)']),
    encodeSubstitution('avoid',['(.*)avoid(.*)', '(.*)evad(.*)', '(.*)prevent(.*)']),
    encodeSubstitution('avoid',['(.*)iwas(.*)','(.*)agapan','(.*)ibsan(.*)']),
    encodeSubstitution('avoid',['(.*)lay(u|o)(.*)', '(.*)ilag(.*)']),
    encodeSubstitution('avoid',['(.*)restrict(.*)']),
    encodeSubstitution('bacteria',['ba(k|c)ter(.*)']),
    encodeSubstitution('bad',['(.*)masama(ng)?','pinasasama','masasama(.*)', 'poor', '(.*)wors(.*)']),
    encodeSubstitution('bad',['negat(.*)']),
    encodeSubstitution('bad',['severe']),
    encodeSubstitution('bad',['unsuit(.*)','unsafe','undesirable','(.*)adverse(.*)']),
    encodeSubstitution('benefit',['(.*)benefi(.*)','(.*)ben(i|e)pis(.*)']),
    encodeSubstitution('bismuth',['pepto','bismatrol']),
    encodeSubstitution('blood',['(.*)dugo']),
    encodeSubstitution('blood',['blood(.*)','(.*)(l|d|pa)ug(u|o)']),
    encodeSubstitution('body',['katawan','lawas']),
    encodeSubstitution('boil',['(.*)(t|m)abel(.*)']),
    encodeSubstitution('boil',['(.*)boil(.*)', '(.*)kul(o|u(in|han)g?)']),
    encodeSubstitution('brand',['(.*)brand(.*)','(.*)tatak(.*)']),
    encodeSubstitution('caffeine',['(.*)caff(.*)']),
    encodeSubstitution('can',['(m|n|k|g)apakay(.*)']),
    encodeSubstitution('can',['allow(.*)']),
    encodeSubstitution('can',['approved']),
    encodeSubstitution('can',['could','will','wont','would']),
    encodeSubstitution('can',['pu?wede(ng)?', 'maaari(ng)?', 'pwede']),
    encodeSubstitution('care',['(.*)prote(c|k)t(.*)']),
    encodeSubstitution('care',['car(e|i)(.*)', '(.*)ingat(.*)','alaga(ng|an)?','(.*)ngalaga(.*)']),
    encodeSubstitution('carry',['carri(.*)','kaakibat','(.*)dala']),
    encodeSubstitution('clean',['(.*)(o|u)w?gas(.*)', '(.*)g(em|um)?agas(.*)']),
    encodeSubstitution('clean',['(.*)clean(.*)', '(.*)saniti(.*)', '(.*)disinfect(.*)', 'wash(.*)']),
    encodeSubstitution('clean',['(.*)limp(i|y)(o|u)(.*)', '(.*)l(um)?inis(.*)', '(.*)h(um|in)?ugas(.*)']),
    encodeSubstitution('clear',['(.*)clear(.*)']),
    encodeSubstitution('clog',['(.*)b(in|um)?ara(do(ng)?)?']),
    encodeSubstitution('clog',['(.*)clog(.*)']),
    encodeSubstitution('close',['(.*)clos(.*)']),
    encodeSubstitution('cold',['colds', '(.*)se?p(o|u)', '(.*)sipon', '(i|e)?ng(u|o)g(en)?']),
    encodeSubstitution('condition',['(k|c)(u|o)ndi(si?yon|tions?)', '(.*)lagay(.*)']),
    encodeSubstitution('consult',['(.*)(pa|ka)ilay(.*)','(.*)kaangay']),
    encodeSubstitution('consult',['(.*)atingin']),
    encodeSubstitution('consult',['(.*)check(ups?)?']),
    encodeSubstitution('consult',['(.*)consult(.*)', '(.*)k(u|o)ns(o|u)lta(.*)']),
    encodeSubstitution('contain',['(.*)contain(.*)']),
    encodeSubstitution('control',['(.*)control(.*)']),
    encodeSubstitution('cook',['(.*)cook(.*)']),
    encodeSubstitution('cook',['(.*)l(o|u)t(o|u)(.*)']),
    encodeSubstitution('correct',['correct(.*)', '(.*)(d|r)apat','(.*)tama(.*)', 'wasto(.*)', 'right','tumpak']),
    encodeSubstitution('correct',['proper(.*)']),
    encodeSubstitution('cost',['(.*)pila', '(.*)p(u|o)l(u|o)', '(.*)presy(.*)', 'pric(.*)']),
    encodeSubstitution('cost',['b(in|um)?aya(d|r)(.*)','expens(.*)']),
    encodeSubstitution('cost',['cost(.*)', '(.*)gast(o|u)(.*)', '(.*)mahal', 'rate']),
    encodeSubstitution('cost',['magkano']),
    encodeSubstitution('cost',['money', '(.*)pera(.*)', '(.*)budget(.*)']),
    encodeSubstitution('cough',['cough(.*)', '(.*)bat(u|o)k', '(um|in|(m|n|p)ag)?u?ubo(ng)?','u?ubuh(i|a)n']),
    encodeSubstitution('cramp',['(.*)cramp(.*)']),
    encodeSubstitution('damage',[ '(.*)s(um|in)?ira(.*)']),
    encodeSubstitution('damage',['damag(.*)','(.*)binasa','(.*)sira','impair(.*)']),
    encodeSubstitution('decongestant',['decongestants?', 'sudafed', 'pseudoephedrine']),
    encodeSubstitution('describe',['(.*)descri(.*)', 'ilarawan', '(.*)liwanag', 'overview(s)']),
    encodeSubstitution('describe',['(.*)discuss(.*)']),
    encodeSubstitution('describe',['(.*)explain(.*)']),
    encodeSubstitution('describe',['defin(.*)', '((p|n|m)ag?)(paki)?(pa|papa)?li(li)?wanag(an|in)?']),
    encodeSubstitution('diarrhea',['(.*)diarrhea(.*)','(.*)tae?tae','(.*)tae','(.*)tag(u|o)d(o|u)']),
    encodeSubstitution('diarrhea',['(.*)lbm','bowel']),
    encodeSubstitution('digest',['(.*)digest(.*)','(.*)tunaw(.*)']),
    encodeSubstitution('do',['does','done','doing']),
    encodeSubstitution('doctor',['(.*)d(u|o)(c|k)t(u|o)(l|r)s?','professionals?']),
    encodeSubstitution('doctor',['(.*)spesyalist(.*)', 'physicians?', 'experts?','practitioners?']),
    encodeSubstitution('doctor',['n(u|a)rs(.*)', 'specialists?']),
    encodeSubstitution('dose',['(.*)dos(es|ing|is|ages?)']),
    encodeSubstitution('drink',['(.*)(e|i)n(o|u)m(.*)']),
    encodeSubstitution('drink',['drink(.*)','beverages?']),
    encodeSubstitution('drink',['panulak']),
    encodeSubstitution('drug',['(.*)drugs', 'medisin(.*)', 'kinina','(.*)supplement(.*)','(.*)vitamins?','(.*)bitamina']),
    encodeSubstitution('drug',['gam(o|u)t','therap(.*)', 'medicines?','remed(.*)' ]),
    encodeSubstitution('easy',['eas(.*)', '((n|m)aka(ka)?|pinaka|i)?((n|m|p)ag?)?(pa(pa|ng?)|i|ka)?d(um)?a(da)?li(ng)?']),
    encodeSubstitution('eat',['(pag|nag|mag)?k(um|in)?ain','kakain','kainin','kinakain','kumakain','kakainin']),
    encodeSubstitution('eat',['consum(.*)']),
    encodeSubstitution('eat',['eat(.*)', 'ate']),
    encodeSubstitution('eat',['edible']),
    encodeSubstitution('eat',['fruits?', 'prutas','(o|u)nga']),
    encodeSubstitution('eat',['pegk(e|a)n(.*)', 'k(i|e)(ne)?man', '(.*)kanen', 'kananan', 'kakan','gakanan','ipakan',"(.*)sepa","kan"]),
    encodeSubstitution('eat',['tsibuging?', 'baong?']),
    encodeSubstitution('effect',['(.*)(a|e)ffect(.*)', '(.*)(a|e)pekt(.*)', '(.*)labasan']),
    encodeSubstitution('effect',['(.*)bisa(.*)']),
    encodeSubstitution('effect',['(.*)d(um|in)?ulot(.*)']),
    encodeSubstitution('effect',['(.*)impact(.*)']),
    encodeSubstitution('effect',['(.*)l(um)?abas(.*)']),
    encodeSubstitution('effect',['(.*)react(.*)', '(.*)reaksi?yon(.*)']),
    encodeSubstitution('effect',['(.*)result(.*)', 'conseq(.*)']),
    encodeSubstitution('effect',['l(e|i)?(nem|m)?y(u|o)']),
    encodeSubstitution('expectorant',['expectorants', 'guaifenesin']),
    encodeSubstitution('eye',['eyes', 'mata']),
    encodeSubstitution('face',['buntal', 'mukha']),
    encodeSubstitution('fatigue',[ '(.*)p(in)?agod(.*)', '(.*)hapo', '(.*)pagur(a|i)n']),
    encodeSubstitution('fatigue',['(.*)exert(.*)', 'exhaust(.*)']),
    encodeSubstitution('fatigue',['fatig(.*)','(.*)lugat(.*)','(.*)tegel']),
    encodeSubstitution('feel',['((n|m)ag?|(n|m)aka(ka)?|paki(ki)?)?(r|d)(um)?a((r|d)a)?mdam(an)?']),
    encodeSubstitution('feel',['(.*)(d|r)anas(.*)']),
    encodeSubstitution('feel',['(.*)feel(.*)', 'felt', 'experienc(.*)']),
    encodeSubstitution('feel',['(.*)gedam(.*)']),
    encodeSubstitution('fever',[ '(.*)s(um|in)?inat(.*)' ]),
    encodeSubstitution('fever',['(.*)(m|n|k)ayaw(.*)', '(b|m|n|p)(i|e)gkaya(w|o|u)']),
    encodeSubstitution('fever',['(.*)chill(.*)', '(.*)nginig']),
    encodeSubstitution('fever',['(.*)egkel']),
    encodeSubstitution('fever',['(.*)fever(.*)']),
    encodeSubstitution('fever',['(.*)l(um)?agnat(.*)']),
    encodeSubstitution('find',['(.*)h(um|in)?anap(.*)']),
    encodeSubstitution('find',['(.*)ngilay']),
    encodeSubstitution('find',['find(.*)', '(.*)hanap(.*)','found']),
    encodeSubstitution('food',['makain','nakain']),
    encodeSubstitution('food',['pagkaing?','kinakain','pegken','snacks','meal','foods','gakan','makan','miryenda']),
    encodeSubstitution('form',['(.*)balangan', 'uri','anyo']),
    encodeSubstitution('form',['antas','hitsura']),
    encodeSubstitution('form',['class(.*)', 'klas(.*)']),
    encodeSubstitution('form',['form(.*)', '(.*)porma', 'types?']),
    encodeSubstitution('form',['kinds?']),
    encodeSubstitution('form',['modes?']),
    encodeSubstitution('form',['varia(.*)']),
    encodeSubstitution('frequent',[ '(.*)d(um|in)?alas(.*)']),
    encodeSubstitution('frequent',['frequen(.*)', 'always','daily','beses','(pa)?lagi(ng)?']),
    encodeSubstitution('frequent',['often', 'regular','(.*)dtandang','common']),
    encodeSubstitution('function',['purpos(.*)','(.*)function(.*)']),
    encodeSubstitution('generic',['generics']),
    encodeSubstitution('get',['(.*)acquir(.*)']),
    encodeSubstitution('get',['(.*)catch(.*)','caught']),
    encodeSubstitution('get',['(.*)contract(.*)']),
    encodeSubstitution('get',['(.*)k(um)?uha(.*)','(.*)kun(a|i)n']),
    encodeSubstitution('get',['(.*)kuha','((g|m|n|p|b)a)?(ka)?k(u|o|w)a', 'kem(w|u)a']),
    encodeSubstitution('get',['(.*)obtain(.*)']),
    encodeSubstitution('get',['(.*)receiv(.*)','induc(.*)']),
    encodeSubstitution('get',['(g|n|m|k)aalatan']),
    encodeSubstitution('get',['g(o|e)t(.*)']),
    encodeSubstitution('get',['seek']),
    encodeSubstitution('give',['((nap|pin)aka|pi)?((n|m|p)ag?)?(pa|papa|ka|kaka|i)?b(um)?i(bi)?ga?y(a|ang?)?']),
    encodeSubstitution('give',['(.*)b(um|in)?igay(.*)','((m|n)aka(ka)?)?((n|m|p)ag?|i)?i?b(um|in)?i(bi)?ga?y(ang?)?']),
    encodeSubstitution('give',['(.*)bigay','mami(mi)?gay']),
    encodeSubstitution('give',['(m(e|i)n(i|e))?((n|m|p)(e|a))?(ka)?(i|e)ngg?ay']),
    encodeSubstitution('give',['g(ive(n|s)?|ave)','pakangguna']),
    encodeSubstitution('go',['(.*)angay(.*)']),
    encodeSubstitution('go',['(.*)p(um|in)?unta(.*)']),
    encodeSubstitution('go',['(.*)pawang(.*)', 'l(i|e)?mu','be?l(u|o)']),
    encodeSubstitution('go',['go(ing)?','went','visit(.*)','steer(.*)']),
    encodeSubstitution('good',['(.*)ganda(.*)']),
    encodeSubstitution('good',['best','better','well','mapi?ya','mapia']),
    encodeSubstitution('guide',['(.*)direct(.*)', '(.*)direksi?yong?']),
    encodeSubstitution('guide',['(.*)g(um)?abay(.*)','follow(.*)','(.*)un(o|u)t(an)?']),
    encodeSubstitution('guide',['(.*)guid(.*)']),
    encodeSubstitution('guide',['(.*)sundin','(.*)sunod','(.*)sundan']),
    encodeSubstitution('guide',['panuto', '(.*)utos', '(.*)bilin', '(.*)hakbang', '(.*)tuntunin']),
    encodeSubstitution('hand',['hands', 'l(e|i)ma', '(.)kamay', 'daliri']),
    encodeSubstitution('happen',['happen(.*)', 'occur(.*)', '(m|n|k)anggula', '(.*)yari(.*)']),
    encodeSubstitution('have',['(.*)exist(.*)']),
    encodeSubstitution('have',['aden']),
    encodeSubstitution('have',['has','had','having','equip(.*)']),
    encodeSubstitution('have',['mayroong', 'meron', '(m|n|p)agka(ka)?roon']),
    encodeSubstitution('head',['(o|u)lo']),
    encodeSubstitution('headache',['(.*)lang(o|u)t(.*)']),
    encodeSubstitution('headache',['dizz(.*)','(.*)hilo']),
    encodeSubstitution('health',['health(.*)','(.*)lusog(.*)']),
    encodeSubstitution('high',['high(.*)','(.*)taas(.*)']),
    encodeSubstitution('how',['(.*)paa?no(.*)?', 'pan(u|o)n?']),
    encodeSubstitution('hydrate',['(.*)hydrat(.*)']),
    encodeSubstitution('identify', ['(m|n)?ala(la)?m(ang?)?']),
    encodeSubstitution('identify',['(.*)identify(.*)','(.*)determine(.*)', '(.*)recogniz(.*)']),
    encodeSubstitution('identify',['(.*)t(um|in)?ukoy(.*)']),
    encodeSubstitution('identify',['(.*)teka(w|o)', '(m|k|n|g)adtal(u|o)']),   
    encodeSubstitution('identify',['(m|k|g|n)ataw(an)?','aware(.*)','enlighten']),   
    encodeSubstitution('identify',['indicat(.*)', 'indika(.*)','hint(.*)']),
    encodeSubstitution('identify',['notic(.*)']),
    encodeSubstitution('immune',['resistance','resisten(.*)']),
    encodeSubstitution('important',['(.*)importan(.*)', '((m|k)a)?halaga(.*)', '(nec)?ess(it(ies|y)|ary|ential(y|s)?)', 'need(.*)', 'signifi(.*)']),
    encodeSubstitution('important',['(.*)kailangan(.*)','nasisita','requir(.*)']),
    encodeSubstitution('important',['crucial']),
    encodeSubstitution('include',['(.*)includ(.*)','(.*)involv(.*)','compose(.*)','kabilang']),
    encodeSubstitution('include',['(.*)kasama(.*)']),
    encodeSubstitution('increase',['(.*)dagdag(.*)','addition(.*)']),
    encodeSubstitution('increase',['(pina|(m|n)apa|(m|n)aka)?((m|n|p)ag?)?(pa|ka|i)?d(in|um)?a(da)?gdag(ang?)?']),
    encodeSubstitution('infect',['(.*)infect(.*)', '(.*)impeks(.*)']),
    encodeSubstitution('infect',['(.*)k(in|um)?alat(.*)']),
    encodeSubstitution('infect',['(.*)p(in|um)?asa(.*)']),
    encodeSubstitution('infect',['(.*)spread(.*)','(.*)transmi(.*)']),
    encodeSubstitution('infect',['hawa(an)?','(m|n)ahawa(an)?','(n|m)ahahawa']),
    encodeSubstitution('inflammation',['inflam(.*)', '(pama|na)?maga']),
    encodeSubstitution('influenza',['(.*)flu','(.*)influenza(.*)', '(.*)trangkaso(.*)']),
    encodeSubstitution('instruct',['(.*)instruct(.*)']),
    encodeSubstitution('interact',['(.*)interact(.*)','(.*)salamuha']),
    encodeSubstitution('irritate',['(.*)kati','(.*)ngati', 'pangangatog']),
    encodeSubstitution('irritate',['(.*)rita','(.*)gatel']),
    encodeSubstitution('kill',['(.*)killer(.*)','(.*)p(um|in)?atay(.*)']),
    encodeSubstitution('laki',['((nap|pin)aka)?(ma)?l(um)?a(la)?ki(ng)?']),
    encodeSubstitution('list',['(.*)lista(.*)', 'enumerat(.*)','rundown']),
    encodeSubstitution('lozenge',['lozenges']),
    encodeSubstitution('lung',['lungs','baga','respir(.*)']),
    encodeSubstitution('make',['ma(de|k(es|ing))']),
    encodeSubstitution('manage',['manag(.*)']),
    encodeSubstitution('many',['(.*)(r|d)ami','((k|m)a)?dakel']),
    encodeSubstitution('mask',['(.*)mask(.*)']),
    encodeSubstitution('mean',['mean(.*)','kahulugan']),
    encodeSubstitution('meat',['chick(.*)', 'beef(.*)', 'pork(.*)', 'pig(.*)']),
    encodeSubstitution('meat',['fish(.*)', 'seda']),
    encodeSubstitution('meat',['manok', 'baka', 'baboy']),
    encodeSubstitution('meat',['meat(.*)', 'karn(.*)']),
    encodeSubstitution('method',['method(.*)', 'ways?', 'steps?', '(pamama|pa)raang?', 'ukit', 'approach(.*)','techniq(.*)','paraan']),
    encodeSubstitution('method',['pro(c|s)e(.*)']),
    encodeSubstitution('mouth',['bunganga', 'bibig', 'ngal(e|i)', 'oral(.*)']),
    encodeSubstitution('name',['names', 'pangalan(.*)','(.*)ngalan?']),
    encodeSubstitution('nausea',['(.*)nause(.*)', '(.*)d(um|in)?uwal']),
    encodeSubstitution('neglect',['(.*)?tad(e|ay|ai)n?', '(.*)talipenda']),
    encodeSubstitution('neglect',['(.*)b(in)?aya(.*)']),
    encodeSubstitution('neglect',['(.*)balewala(.*)']),
    encodeSubstitution('neglect',['(.*)hayaan']),
    encodeSubstitution('neglect',['disregard','forget','ignore']),
    encodeSubstitution('neglect',['neglect(.*)','(.*)tadayn?']),
    encodeSubstitution('nito',['nitong']),
    encodeSubstitution('none',['da']),
    encodeSubstitution('nose',['ilong', 'ng(e|i)long', 'nasal']),
    encodeSubstitution('not',['hindi','di', 'kundi', '(d(e|i))?kena']),
    encodeSubstitution('not',['huwag', 'wag','ayaw']),
    encodeSubstitution('not',[`don'?t`,`won'?t`,`cannot`,`can'?t`,`shouldn'?t`,`wouldn'?t`]),
    encodeSubstitution('nsaid',['nsaids', 'painkillers', 'ibuprofen', 'naproxen', 'advil', 'mortin', 'medicol', 'alaxan', '(non)?steroidal']),
    encodeSubstitution('option',['choices?','choose','chosen?']),
    encodeSubstitution('option',['options']),
    encodeSubstitution('parasite',['parasit(.*)','kagaw']),
    encodeSubstitution('patient',['patients', 'pasyente', 'pasinti']),
    encodeSubstitution('peel',['(.*)(o|u)pis(.*)']),
    encodeSubstitution('peel',['(.*)b(in|um)?alat(.*)']),
    encodeSubstitution('peel',['(.*)peel(.*)']),
    encodeSubstitution('person',['person(.*)','tao','taong','taw']),
    encodeSubstitution('person',['ta(o|w)','taong','individuals']),
    encodeSubstitution('popular',['(.*)sikat','kila','tanyag']),
    encodeSubstitution('possible',['posib(.*)']),
    encodeSubstitution('prepare',['(.*)h(um)?anda(.*)']),
    encodeSubstitution('prepare',['(.*)prepar(.*)']),
    encodeSubstitution('problem',['(.*)challeng(.*)']),
    encodeSubstitution('problem',['(.*)complicat(.*)', 'k(u|o)mplikasyon', 'concern(.*)', 'pr(u|o)bl(i|e)m(s|a|ang|ado(ng)?)?']),
    encodeSubstitution('problem',['(.*)problem(.*)']),
    encodeSubstitution('problem',['downsides?','issues?']),
    encodeSubstitution('problem',['drawbacks']),
    encodeSubstitution('prohibit',['(.*)b(in|um)awal(.*)']),
    encodeSubstitution('provide',['provide(.*)']),
    encodeSubstitution('quick',['((k|m)a)?aga(d|pang?|rang?)']),
    encodeSubstitution('quick',['(.*)b(um)?ilis(.*)']),
    encodeSubstitution('quick',['(.*)samb(u|o)t(.*)']),
    encodeSubstitution('quick',['quick(.*)','fast(.*)','immediat(.*)']),
    encodeSubstitution('quick',['speed(.*)']),
    encodeSubstitution('raw',['(.*)hilaw(.*)']),
    encodeSubstitution('raw',['m(e|a(i|y))law', 'dama(lu|w)t(o|u)']),
    encodeSubstitution('raw',['uncook(.*)','undercook(.*)','pedt(u|o)dan']),
    encodeSubstitution('reason',['((n|m|g|k)ad|(b|p|n|m)(i|e)d)?sabap(an)?']),
    encodeSubstitution('reason',['caus(.*)', 'sanhi', 'factors?']),
    encodeSubstitution('reason',['nanggagaling']),
    encodeSubstitution('reason',['reasons?', 'rason','(.*)dahil(.*)', 'rationale?']),
    encodeSubstitution('reason',['trigger(.*)']),
    encodeSubstitution('recommend',['(.*)?rek(u|o)mend(.*)?']),
    encodeSubstitution('recommend',['(.*)recommend(.*)', '(.*)rekomenda(.*)', '(.*)suggest(.*)']),
    encodeSubstitution('recover',['(.*)b(um)?ut(i|hing?)']),
    encodeSubstitution('recover',['(.*)g(um)?inhawa(.*)']),
    encodeSubstitution('recover',['(.*)rekober','(.*)recover(.*)']),
    encodeSubstitution('remove',['((b|m|p|n)aka?)?awa']),
    encodeSubstitution('remove',['((g|k|m|n)a)?awa']),
    encodeSubstitution('remove',['(.*)alis(.*)']),
    encodeSubstitution('remove',['(.*)awala']),
    encodeSubstitution('remove',['(.*)baba']),
    encodeSubstitution('remove',['(.*)baba(.*)']),
    encodeSubstitution('remove',['(.*)bawas(.*)']),
    encodeSubstitution('remove',['(.*)remov(.*)','eliminat(.*)']),
    encodeSubstitution('remove',['(bag)?awan?']),
    encodeSubstitution('remove',['(pa(ng|m))?((m|n)a|pina)?(pa)?(wa)?wala(ing?)?']),
    encodeSubstitution('remove',['(pa(ng|m))?((n|m|p)ag?)?(ka|kaka)?a?alis(ing?)?']),
    encodeSubstitution('remove',['(pa(ng|m))?((n|m|p)ag?)?(ka|kaka)?t(um|in)?a(ta)?nggal(ing?)?']),
    encodeSubstitution('remove',['reduc(.*)','limit(.*)']),
    encodeSubstitution('replace',['(.*)replac(.*)']),
    encodeSubstitution('replace',['chang(.*)','(.*)babago']),
    encodeSubstitution('replace',['restor(.*)', 'replenish(.*)']),
    encodeSubstitution('responsible',['(.*)respons(a|i)bl(.*)']),
    encodeSubstitution('rest',['((ka)?(n|p|m)(i|e)nd|d|d(e|i)m)(i|e)gka']),
    encodeSubstitution('rest',['((m|n|p|k)ag?)?(ka|kaka)?(si)?p(um|in)?a(pa)?hinga(hing?|ng?)?']),
    encodeSubstitution('rest',['(.*)(be?)?le?ne?k']),
    encodeSubstitution('rest',['(.*)degka']),
    encodeSubstitution('rest',['(.*)pahinga(.*)']),
    encodeSubstitution('rest',['rest(s|ed|ing)']),
    encodeSubstitution('should',['should(.*)']),
    encodeSubstitution('sick',['(.*)dsak(e|i)t', 'sick(.*)','unwell','(.*)sakit(.*)']),
    encodeSubstitution('sick',['ail(.*)','diseas(.*)', 'ill(.*)', 'karamdaman', 'pananakit','(.*)s(um|in)?akit(.*)']),
    encodeSubstitution('sick',['pain(.*)', '(.*)l(i|e)p(i|e)d(i|e)s(.*)']),
    encodeSubstitution('sick',['(men|min|nin|nen|pen|naka|maka|kina|kan)?da(da)?l(o|u)','(nin|nen|min|men)?((da)?l(o|u))?da(da)?l(o|u)']),
    encodeSubstitution('situation',['situations', 'sitwasyon']),
    encodeSubstitution('slow',['slow(.*)','(.*)b(um|in)?agal(.*)']),
    encodeSubstitution('sneeze',['((p|n)?(e|i)m)?bale?n']),
    encodeSubstitution('sneeze',['(.*)b(um|in)?ahing(.*)']),
    encodeSubstitution('sneeze',['sneez(.*)']),
    encodeSubstitution('solution',['solutions?', 'solusi?yon']),
    encodeSubstitution('special',['unique','special(.*)']),
    encodeSubstitution('stay',['(.*)tili(.*)']),
    encodeSubstitution('stay',['stay(.*)','(.*)tili(ng)?']),
    encodeSubstitution('stomach',['abdom(.*)','ti?yan', 'bituka','gut','gastro(.*)','(.*)intestin(.*)']),
    encodeSubstitution('stool',['stools?','feces','ta(e|i|y)']),
    encodeSubstitution('stop',['(.*)h(um)?into(.*)']),
    encodeSubstitution('stop',['(.*)inhibit(.*)']),
    encodeSubstitution('stop',['(.*)p(in|um)?igil(.*)']),
    encodeSubstitution('stop',['(.*)refrain(.*)']),
    encodeSubstitution('stop',['(.*)stop(.*)']),
    encodeSubstitution('stop',['(.*)suppress(.*)']),
    encodeSubstitution('stop',['(.*)t(um)?igil(.*)']),
    encodeSubstitution('swallow',['(.*)l(um)?un(u|o)k(.*)', '(.*)len(o|u)k(.*)']),
    encodeSubstitution('swallow',['swallow(s|ed|ing)?']),
    encodeSubstitution('sweet',['(.*)sugar(.*)','dessert(.*)']),
    encodeSubstitution('sweet',['(.*)sweet(.*)', 'syrup(.*)', 'cand(y|ies)','cakes?']),
    encodeSubstitution('sweet',['(.*)tamis', 'kendi', 'mamis(.*)']),
    encodeSubstitution('symptom',['(nad?|mad?|kad?|p?ed)?sipat(an)?', 'padsa', '(pala)?tanda(ang?)?', 'hudyat', 'bakas']),
    encodeSubstitution('symptom',['signs', 'senya(s|les)', 'warn(.*)', 'cues?', 'babala']),
    encodeSubstitution('symptom',['symptoms?', 'sintomas']),
    encodeSubstitution('tablet',['tabl(i|e)t(.*)']),
    encodeSubstitution('take',['(.*)take(.*)', 'tak(en|es|ing)', 'took']),
    encodeSubstitution('take',['intake']),
    encodeSubstitution('tell',['(.*)labit(.*)']),
    encodeSubstitution('tell',['inform']),
    encodeSubstitution('tell',['p(i|e)dtal(u|o)n?']),
    encodeSubstitution('tell',['show']),
    encodeSubstitution('tell',['talk(.*)', '(.*)sabi(.*)']),
    encodeSubstitution('tell',['teach(.*)','(.*)turo']),
    encodeSubstitution('tell',['tell(.*)','told']),
    encodeSubstitution('term',['term(.*)']),
    encodeSubstitution('threat',['(.*)banta']),
    encodeSubstitution('threat',['(.*)danger(.*)', '(.*)pinsala', 'delikado(.*)']),
    encodeSubstitution('threat',['(.*)h(um|in)?amak(.*)']),
    encodeSubstitution('threat',['(.*)nganib']),
    encodeSubstitution('threat',['(.*)threat(.*)']),
    encodeSubstitution('threat',['harm(.*)']),
    encodeSubstitution('threat',['susceptible', 'suspect',  'hazards?', 'risk(.*)']),
    encodeSubstitution('throat',['throats', 'lalamunan']),
    encodeSubstitution('throat',['tid(i|e)k', 'bak(i|e)lngan']),
    encodeSubstitution('tip',['((m|n|p)ag?)?(pa|i)?p(in)?a(pa)?y(o|u)(h(a|i)n)?', 'paalala', 'isaalang(alang)?']),
    encodeSubstitution('tip',['advi(s|c)(.*)','payo']),
    encodeSubstitution('tip',['remind(.*)']),
    encodeSubstitution('tip',['tips']),
    encodeSubstitution('touch',['(.*)contact(.*)', '((n|p|m)ag)?(o|u)bayn?','mobay','(.*)(p|m|g)(o|u|(ao|au|aw))bay','(o|u)bay']),
    encodeSubstitution('touch',['(.*)d(um|in)?ikit(.*)']),
    encodeSubstitution('touch',['(.*)h(in|um)?awak(.*)']),
    encodeSubstitution('touch',['(.*)s(um)?iksik(.*)']),
    encodeSubstitution('touch',['(.*)touch(.*)']),
    encodeSubstitution('touch',['(bag|pag|min|m)amin?']),
    encodeSubstitution('treat',['(.*)bagel','sooth(.*)']),
    encodeSubstitution('treat',['(.*)g(in|um)?am(o|u)t(.*)']),
    encodeSubstitution('treat',['(.*)g(um)?aling(.*)']),
    encodeSubstitution('treat',['(.*)kadtag']),
    encodeSubstitution('treat',['(.*)kapi?yan?']),
    encodeSubstitution('treat',['(.*)l(um)?aban(.*)']),
    encodeSubstitution('treat',['(.*)l(um)?akas(.*)']),
    encodeSubstitution('treat',['(.*)l(um)?unas(.*)']),
    encodeSubstitution('treat',['(.*)t(inem)?abang(.*)']),
    encodeSubstitution('treat',['(.*)t(um|in)?ul(u|o)ng(.*)']),
    encodeSubstitution('treat',['aid(.*)']),
    encodeSubstitution('treat',['combat(.*)','f(ou|i)ght(s|ing)?','(pang|k)ontra(hin)?']),
    encodeSubstitution('treat',['help(.*)', 'assist(.*)']),
    encodeSubstitution('treat',['medicate','improv(.*)','kagkapya']),
    encodeSubstitution('treat',['relie(.*)','alleviat(.*)']),
    encodeSubstitution('treat',['treat(.*)','cur(e|es|ed|ing)','heal(.*)', 'interv(.*)']),
    encodeSubstitution('try',['tr(ied|ying|ies)','(.*)s(um|in)?ub(o|u)k(.*)']),
    encodeSubstitution('use',['((n|m|g)a)?usal(.*)']),
    encodeSubstitution('use',['(.*)g(um|in|em)?am(e|i)t(.*)']),
    encodeSubstitution('use',['usage','pamamagitan']),
    encodeSubstitution('use',['use(.*)', 'util(.*)']),
    encodeSubstitution('vaccine',['(.*)bak(o|u)na(.*)']),
    encodeSubstitution('vaccine',['(.*)t(i|e)?b(i|e)?k',  ]),
    encodeSubstitution('vaccine',['(.*)vaccin(.*)']),
    encodeSubstitution('version',['version(.*)']),
    encodeSubstitution('virus',['viruses', 'viral']),
    encodeSubstitution('vomit',['((b|n|p|m)(an?g|aka))?(o|u)ta','(o|u)ta']),
    encodeSubstitution('vomit',['vomit(.*)', '(.*)s(um|in)?uka(.*)']),
    encodeSubstitution('wait',['wait(.*)','(b|p)?angatan','(.*)hintay(.*)']),
    encodeSubstitution('want',['want(.*)','(.*)gusto(.*)']),
    encodeSubstitution('watch',['see','seeing','saw','look(.*)','(pag|bag|ga|ma)?ilay(.*)','ilayn?']),
    encodeSubstitution('water',['liquids?','likido', 'tubig','ig','eg', 'fluids?']),
    encodeSubstitution('weak',['(.*)h(um)ina(.*)','vulnerable']),
    encodeSubstitution('weak',['(.*)l(o|u)bay(an)?']),
    encodeSubstitution('weak',['weak(.*)', '(.*)hina']),
    encodeSubstitution('wear',['(.*)s(in|um)?uot(.*)']),
    encodeSubstitution('wear',['(.*)sukob']),
    encodeSubstitution('wear',['(.*)t(um)?a(ta)?ki?p(ang?)?', '(.*)t(in|um)akip(.*)','tinataki?pang?']),
    encodeSubstitution('wear',['(.*)tag(o|u)b(.*)']),
    encodeSubstitution('wear',['ta(w|o|u)b(i|e)', '(.*)tangg(o|u)b(.*)']),
    encodeSubstitution('wear',['wear(.*)','cover(.*)','wore']),
    encodeSubstitution('what',['(ano|ali)(ng)?', '(e|i)?ng(e|i)n(to|tu)?']),
    encodeSubstitution('when',['k(e|ai)lan']),
    encodeSubstitution('when',['kanu','kano']),
    encodeSubstitution('where',['(i|e)nda(u|o|w)']),
    encodeSubstitution('where',['(na)?saa?ng?','saan','asan','saang']),
    encodeSubstitution('who',['who(m|se)', 'sino(ng)?', 'kanino(ng)?', 'ten', 'ta(i|y)n']),
    encodeSubstitution('why',['((e|i)n)?d(o|u)k(i|e)n']),
    encodeSubstitution('why',['(ba)?kit']),
    encodeSubstitution('work',['((n|m)ag?)?(g(um)?|p)a(ga)?na(ng)?', 'gana']),
    encodeSubstitution('work',['(.*)engg?(o|u)la(.*)']),
    encodeSubstitution('work',['(.*)g(in|um)?awin?(.*)','paka(y|i)(d|r)an','(.*)pase?n']),
    encodeSubstitution('work',['(.*)g(um)?ana(.*)']), 
    encodeSubstitution('work',['(.*)g(um|in)?awa(.*)']),
    encodeSubstitution('work',['(.*)galbek(.*)']),
    encodeSubstitution('work',['(.*)practic(.*)']),
    encodeSubstitution('work',['(.*)trabaho(.*)','(.*)pakilos']),     
    encodeSubstitution('work',['(.*)work(.*)', 'operat(.*)']),
    encodeSubstitution('work',['pak(i|e|ay)(r|d)an']),
]