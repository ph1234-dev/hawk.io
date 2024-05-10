import { stopwords as eng} from "./eng"
import { stopwords as fil} from "./fil"
import { stopwords as mag} from "./mag"

export let stopwords = [].concat(eng).concat(fil).concat(mag)
