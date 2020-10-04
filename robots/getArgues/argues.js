const rl = require('readline-sync');
function getArgues(){
    const answers = {}

    answers.searchTerm = rl.question('Content: ')
    return{
        answers
    }
}
module.exports = getArgues