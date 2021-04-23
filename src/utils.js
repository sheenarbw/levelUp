var domData = {
    id: null,
    data:{excercise: null}}

const excercises = [
    {
        name: "Lick n Riff @ 50 bpm",
        weight: 5
    },
    {
        name: "Chord change: F - Am @ 50 bpm",
        weight: 2
    },
    {
        name: "Chord change: F - C @ 50 bpm",
        weight: 2
    },
    {
        name: "Chord change: F - D @ 50 bpm",
        weight: 2
    },
    {
        name: "Chord change: F - E @ 50 bpm",
        weight: 2
    },
    {
        name: "Chord change: F - G @ 50 bpm",
        weight: 2
    },
    {
        name: "Open C major scale @ 50 bpm",
        weight: 2
    },
    {
        name: "Open G major scale @ 50 bpm",
        weight: 2
    },
    {
        name: "A Minor pentatonic scale @ 50 bpm",
        weight: 2
    },
    {
        name: "find all A notes @ 50 bpm",
        weight: 2
    },
    {
        name: "find all B notes @ 50 bpm",
        weight: 2
    },
    {
        name: "find all C notes @ 50 bpm",
        weight: 2
    },
    {
        name: "find all D notes @ 50 bpm",
        weight: 2
    },
    {
        name: "find all E notes @ 50 bpm",
        weight: 2
    },
    {
        name: "find all F notes @ 50 bpm",
        weight: 2
    },
    {
        name: "Song: Lenard Cohen - Hallelulja"
    },
    {
        name: "Song: The Shins - pink bullets"
    },
    {
        name: "Song: Metallica - Enter Sandman",
        weight: 0
    },
    {
        name: "Song: counting Crows - Mr Jones"
    },
    {
        name: "Song: Travis - one more time"
    },
    {
        name: "Song: Eagle Eye Cherry - Save tonight"
    },
    {
        name: "Song: Neil Young - Hey Hey My My",
        weight: 0
    },
    {
        name: "Song: Otis Redding - Sitting on the dock of the Bay"
    },
    {
        name: "Song: Tracey Chapmin - Fast Car",
        weight: 0
    }
]

function getExpandedExcercises(){
    let ret = []
    for (let excercise of excercises){
        let weight = excercise.weight
        if (weight === undefined) weight = 1

        for (let i=0; i<weight; i++)
            ret.push(excercise)
    }
    return ret
}

function getRandomExcercise() {
    const expandedExcercises = getExpandedExcercises()
    var excercise = expandedExcercises[Math.floor(Math.random() * expandedExcercises.length)];
    updateDom({excercise})
}

function updateDom(data){
    domData.data = {...domData.data, ...data}
    const excercise = domData.data.excercise;
    document.getElementById(domData.id).innerHTML = `
    <h2>${excercise.name}</h2>
    <button type="button" class="btn btn-primary" onclick="getRandomExcercise()" >Random Excercise</button>
    `
}

function initialiseDom(elementId){
    domData['id'] = elementId
}