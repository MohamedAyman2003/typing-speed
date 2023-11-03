//, 'going','programing','is','wonder','love','javaScript','my','faivorte','language','scoring','diversty','keep','your','heart','larvel','warming','havana','colaborate','fast','horor','fantasya','storming','innovation','country',"java","earth","typing",'honor','truck','overThinking','loads','casting','summer','dollar','gmial','plane'
let myArray = [ "play", 'game', 'hard', 'keep', 'going','programing','is','wonder','love','javaScript','my','faivorte','language','scoring','diversty','keep','your','heart','larvel','warming','havana','colaborate','fast','horor','fantasya','storming','innovation','country',"java","earth","typing",'honor','truck','overThinking','loads','casting','summer','dollar','gmial','plane' ]
let myArrayEL = myArray.length
let level = {
    easy: 5,
    normal: 3,
    hard:2,
}
let defaultLevel = "normal"
let defaultLevelSeconds = level.normal

let startButton = document.querySelector( ".start" )
let lvlNameSpan = document.querySelector( ".message .lvl" )
let secondsSpan = document.querySelector( ".message .seconds" )
let theWord = document.querySelector( ".the-word" )
let upComingWords = document.querySelector( ".upcoming-words" )
let input = document.querySelector( ".input" )
let timeLeftSpan = document.querySelector( ".time span" )
let scoreGot = document.querySelector( ".score .got" )
let scoreTotal = document.querySelector( ".score .total" )
let finishMessage = document.querySelector( ".finished" )

lvlNameSpan.innerHTML = defaultLevel
secondsSpan.innerHTML = defaultLevelSeconds
timeLeftSpan.innerHTML = defaultLevelSeconds
scoreTotal.innerHTML=myArray.length

input.onpaste = function () {
    return false
}
startButton.onclick = function () {
    this.remove()
    input.focus()
    delayy()
    genWords()
 
}

function genWords() {
    let ranWords = myArray[ Math.floor( Math.random() * myArray.length ) ]
    let ranWordsIndex = myArray.indexOf( ranWords )
    myArray.splice( ranWordsIndex, 1 )
    
    theWord.innerHTML = ranWords
     
    upComingWords.innerHTML = ''
    for ( let i = 0; i < myArray.length; i++ ){
        let div = document.createElement( "div" )
        let divText = document.createTextNode( myArray[ i ] )
        div.appendChild( divText )
        upComingWords.appendChild(div)
    }
    
     statrGame()
}
  
function statrGame() {
    timeLeftSpan.innerHTML = defaultLevelSeconds
    
    let start = setInterval(() => {
        timeLeftSpan.innerHTML--
        if ( timeLeftSpan.innerHTML == "0" ) {
            clearInterval( start )
            if ( theWord.innerHTML.toLowerCase() == input.value.toLowerCase() ) {
                input.value = ""
                scoreGot.innerHTML++;
                if (myArray.length > 0) {
                    genWords()
                } else {
                    let span = document.createElement( "span" )
                    let spanText = document.createTextNode( `congratulation , your score is ${scoreGot.innerHTML} from ${myArrayEL} ` )
                    span.classList.add( "good" )
                    span.appendChild( spanText )
                    finishMessage.appendChild(span)
                }
            } else {
                let span = document.createElement( "span" )
                let spanText = document.createTextNode( "game over" )
                span.classList.add( "bad" )
                span.appendChild( spanText )
                finishMessage.appendChild( span )
            }
        }
    }, 1000);
}






























