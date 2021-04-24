var domData = {
    id: null,
    data:{excercise: null}}

const PIANO = "piano"
const GUITAR = "guitar"
const excercises = [
    {
        name: "Lick n Riff @ 50 bpm",
        weight: 5,
        tags: [GUITAR]
    },
    {
        name: "that 6th trick",
        weight: 5,
        tags: [GUITAR]
    },
    {
        name: "string bending",
        tags: [GUITAR]
    },
    {
        name: "Blues Licks in pattern 1",
        weight: 3,
        tags: [GUITAR]
    },
    {
        name: "Chord change: F - Am @ 50 bpm",
        weight: 2,
        tags: [GUITAR]
    },
    {
        name: "Chord change: F - C @ 50 bpm",
        weight: 2,
        tags: [GUITAR]
    },
    {
        name: "Chord change: F - D @ 50 bpm",
        weight: 2,
        tags: [GUITAR]
    },
    {
        name: "Chord change: F - E @ 50 bpm",
        weight: 2,
        tags: [GUITAR]
    },
    {
        name: "Chord change: F - G @ 50 bpm",
        weight: 2,
        tags: [GUITAR]
    },
    {
        name: "Open C major scale @ 50 bpm",
        weight: 2,
        tags: [GUITAR]
    },
    {
        name: "Open G major scale @ 50 bpm",
        weight: 2,
        tags: [GUITAR]
    },
    {
        name: "A Minor pentatonic scale @ 50 bpm",
        weight: 2,
        tags: [GUITAR]

    },
    {
        name: "find all A notes @ 50 bpm",
        weight: 2,
        tags: [GUITAR]

    },
    {
        name: "find all B notes @ 50 bpm",
        weight: 2,
        tags: [GUITAR]

    },
    {
        name: "find all C notes @ 50 bpm",
        weight: 2,
        tags: [GUITAR]

    },
    {
        name: "find all D notes @ 50 bpm",
        weight: 2,
        tags: [GUITAR]

    },
    {
        name: "find all E notes @ 50 bpm",
        weight: 2,
        tags: [GUITAR]

    },
    {
        name: "find all F notes @ 50 bpm",
        weight: 2,
        tags: [GUITAR]

    },
    {
        name: "Song: Lenard Cohen - Hallelulja",
        tags: [GUITAR]

    },
    {
        name: "Song: The Shins - pink bullets",
        tags: [GUITAR]

    },
    {
        name: "Song: Metallica - Enter Sandman",
        weight: 0,
        tags: [GUITAR]

    },
    {
        name: "Song: counting Crows - Mr Jones",
        tags: [GUITAR]
    },
    {
        name: "Song: Travis - one more time",
        tags: [GUITAR]
    },
    {
        name: "Song: Eagle Eye Cherry - Save tonight",
        tags: [GUITAR]
    },
    {
        name: "Song: Neil Young - Hey Hey My My",
        weight: 0,
        tags: [GUITAR]
    },
    {
        name: "Song: Otis Redding - Sitting on the dock of the Bay",
        tags: [GUITAR]
    },
    {
        name: "Song: Tracey Chapmin - Fast Car",
        weight: 0,
        tags: [GUITAR]
    },
    {
        name: "C major scale - both hands together @50bpm",
        tags: [PIANO],
        description: "make sure pressure is even, things should be at the same volume and same duration"
    },
    {
        name: "C major scale claw excercise",
        description: "Start with G and C chort, then move up and up one semitone at a time",
        tags:[PIANO],
        url: "https://youtu.be/g4G8VQ194sc?t=354"
    },
    {
        name: "C major scale broken claw excercise",
        tags:[PIANO],
        url: "https://youtu.be/g4G8VQ194sc?t=431",
        description: "just play 1,3,5 then shift then 1,3,5"
    },
    {
        name: "C major scale - both hands together @50bpm, build to climax",
        tags: [PIANO],
        description: "as we progress, make it louder. As we scale back make it softer"
    },
    {
        name: "C major scale - one hand duration long, the other hand duration short @50bpm",
        tags: [PIANO],
        description: "make sure pressure is even, things should be at the same volume and different duration",
        weight: 0
    },
    {
        name: "C major scale - one hand plays quarter notes, the other hand plays half notes",
        tags: [PIANO],
        description: "same notes but double the speed",
        weight: 0
    },
    {
        name: "G major scale - both hands together @50bpm",
        tags: [PIANO],
        description: "make sure pressure is even, things should be at the same volume and same duration"
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

function renderTags(tags){
    console.log(tags)
    elements = tags.map((tag)=>`<span class="badge bg-secondary">${tag}</span>`)
    return `<div>${elements.join('')}</div>`
}

function updateDom(data){
    domData.data = {...domData.data, ...data}
    const excercise = domData.data.excercise;
    document.getElementById(domData.id).innerHTML = `
    <h2>${excercise.name}</h2>
    ${excercise.description && `<p>${excercise.description}</p>` || ''}
    ${renderTags(excercise.tags)}
    <button type="button" class="btn btn-primary" onclick="getRandomExcercise()" >Random Excercise</button>
    `
}

function initialiseDom(elementId){
    domData['id'] = elementId
}