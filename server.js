
const express = require('express');
const http = require('http');


// bots
const boots = {
    lang: require('./robots/lang/lang.js'),
    text: require('./robots/text/text.js'),
    argues: require('./robots/getArgues/argues.js')
}

const port = 3000
const folderName = 'public'

init();

function init(){
    const sourceContent = {}

    console.log('\n>.Write your theme')
    sourceContent.argues = boots.argues();

    console.log('\n>.Processing')
    sourceContent.language = boots.lang(sourceContent.argues.answers.searchTerm)

    function web(){

    }


    return{
        sourceContent
    }
}