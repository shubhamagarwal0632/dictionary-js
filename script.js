let searchinput = document.querySelector('#searchInput')
let searchbtn = document.querySelector('#searchBtn')

let getdata = async (valueof)=>{
    try {
        
let data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${valueof}`);
let json = await data.json();   
console.log(json);
console.log('word '+json[0].word);
console.log('meaning '+json[0].meanings[0].definitions[0].definition);
document.querySelector('.text').innerHTML = '';
let div = document.createElement('div');
div.classList.add('details');
div.innerHTML = `
<h2>Word: <span>${json[0].word}</span></h2>
<p>${json[0].meanings[0].partOfSpeech}</p>
<p>Meaning:<span>${json[0].meanings[0].definitions[0].definition}</span></p>
<p>Example:<span>${json[0].meanings[0].definitions[0].example}</span></p>
<p>Synonyms:<span>${json[0].meanings[0].synonyms}</span></p>
<a href=${json[0].sourceUrls[0]} target='_blank' >Read More</a>
`

document.querySelector('.text').appendChild(div);
    } catch (er) {
        alert('please enter a right value')
    }
}



searchbtn.addEventListener('click', function(){
    let valueof =  searchinput.value;

    if(valueof == ''){
        alert('enter a value first here')
    }else{
        getdata(valueof);
    }
})