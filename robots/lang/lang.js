const Algorithmia = require('algorithmia');
function lang(input){
    var language = '';
    const userAuthentication = Algorithmia.client("sim2Aq0HVUQ0TQuwO3eUhV3tiLK1")
    const reqLangAlgo = userAuthentication.algo("miguelher/LanguageDetector/0.1.0?timeout=300") // timeout is optional
    const resLangAlgo = reqLangAlgo.pipe(input)
    const contentLangAlgo = resLangAlgo.then(function(content){emit(content)});
    function emit(content){
        language = (content.get().result)
        console.log(`Language of the search: ${language}`)
    }   
    return{
    }
}
module.exports = lang