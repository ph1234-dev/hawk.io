import { encodeMemory } from "@/api/config/model"

let section16 = []

let section18 = [
    encodeMemory([
        `* ano * hakbang * hugas * kamay * `,
        `* pano * hugas * kamay * `,
        `Anong tamang paraan ng paghuhugas ng kamay?`,
        `Paano ba ang tamang paghugas ng kamay?`,
        `Paano dapat hugasan ang kamay?`,
        `Paano dapat maghugas ng kamay para sa kalusugan?`,
        `Paano hugasan ang kamay nang maayos?`,
        `Paano maghugas o maglinis ng kamay?`,
        `Paano makakapaglinis ng kamay nang mabuti?`,
        `Paano malilinis ang kamay?`,
    ],[
        `Maglagay ng sabon nang hindi bababa sa 20 segundo. Pagkatapos maglagay ng sabon sa iyong mga kamay, kuskusin ang iyong mga kamay nang hindi bababa sa 20 segundo. Gawin mo yan hanggang matapos mong kantahin ang Maligayang Kaarawan nang dalawang beses. 
        
        Gumamit ng hand sanitizer kapag hindi posible ang paghuhugas. Gumamit ng alcohol-based na hand sanitizer kapag walang tubig. Ilapat ang hand sanitizer gaya ng pag-hand lotion mo, siguraduhing takpan ang harap at likod ng magkabilang kamay. Gumamit ng isang produkto na naglalaman ng hindi bababa sa 60% na alkohol.`
    ],6),
]


let section20 = []

let data = 
[].concat(section16)
    .concat(section18)
    .concat(section20)


export{
    data
}