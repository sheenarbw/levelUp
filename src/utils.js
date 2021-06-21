var domData = {
    id: null,
    data:{exercise: null}}

const PIANO  = "piano"
const GUITAR = "guitar"
const BLUES  = "blues studies"

const exercises = [
    {
        name: "Jam with phone",
        tags: [GUITAR],
        weight: 3
    },
    {
        name: "E major and minor shape barre changes (pick a song, find the chords as barr or just go up and down)",
        tags: [GUITAR],
        weight: 1
    },
    {
        name: "E dominant 7th shape barre changes (pick a song, find the chords as barr or just go up and down)",
        tags: [GUITAR],
        weight: 0
    },
    {
        name: "A major and minor shape barre changes (pick a song, find the chords as barre or just go up and down)",
        tags: [GUITAR],
        weight: 1
    },
    {
        name: "Triad: FAC",
        tags: [GUITAR],
        weight: 1
    },
    {
        name: "Triad: GBD",
        tags: [GUITAR],
        weight: 1
    },
    {
        name: "Triad: CEG",
        tags: [GUITAR],
        weight: 1
    },
    {
        name: "E and A major and minor shape barre changes (pick a song, find the chords as barre)",
        tags: [GUITAR],
        weight: 0
    },
    {
        name: "free improvisation",
        tags: [GUITAR],
        weight: 3
    },
    {
        name: "Lick n Riff",
        tags: [GUITAR,BLUES],
        weight: 2,
    //     url: "https://youtu.be/g4G8VQ194sc?t=354"

    },
    {
        name: "that 6th trick",
        tags: [GUITAR,BLUES],
        weight: 2
    },
    {
        name: "vari shuffle climb",
        tags: [GUITAR,BLUES],
        weight: 2

    },
    {
        name: "lick n riff",
        tags: [GUITAR,BLUES],
        weight: 2

    },
    {
        name: "tore up a sidestep",
        tags: [GUITAR,BLUES],
        weight: 2

    },
    {
        name: "about that base",
        tags: [GUITAR,BLUES],
        weight: 2
    },
    {
        name: "Song: Lenard Cohen - Hallelujah",
        tags: [GUITAR]
    },
    {
        name: "Song: The Shins - pink bullets",
        tags: [GUITAR]
    },
    {
        name: "Song: Metallica - Enter Sandman",
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
        tags: [GUITAR]
    },
    {
        name: "Song: Otis Redding - Sitting on the dock of the Bay",
        tags: [GUITAR]
    },


    {
        name: "Blues Licks in pattern 1",
        weight: 3,
        tags: [GUITAR]
    },
    {
        name: "Open C major scale @ 50 bpm",
        weight: 1,
        tags: [GUITAR]
    },
    {
        name: "Open G major scale @ 50 bpm",
        weight: 1,
        tags: [GUITAR]
    },
    {
        name: "A Minor pentatonic scale @ 50 bpm",
        weight: 1,
        tags: [GUITAR]
    },

    // {
    //     name: "find all E notes @ 50 bpm",
    //     weight: 2,
    //     tags: [GUITAR]

    // },


    // {
    //     name: "Song: Tracey Chapmin - Fast Car",
    //     weight: 0,
    //     tags: [GUITAR]
    // },
    // {
    //     name: "C major scale - both hands together @50bpm",
    //     tags: [PIANO],
    //     description: "make sure pressure is even, things should be at the same volume and same duration"
    // },
    // {
    //     name: "C major scale claw exercise",
    //     description: "Start with G and C chort, then move up and up one semitone at a time",
    //     tags:[PIANO],
    //     url: "https://youtu.be/g4G8VQ194sc?t=354"
    // },
    // {
    //     name: "C major scale broken claw exercise",
    //     tags:[PIANO],
    //     url: "https://youtu.be/g4G8VQ194sc?t=431",
    //     description: "just play 1,3,5 then shift then 1,3,5"
    // },
    // {
    //     name: "C major scale - both hands together @50bpm, build to climax",
    //     tags: [PIANO],
    //     description: "as we progress, make it louder. As we scale back make it softer"
    // },
    // {
    //     name: "C major scale - one hand duration long, the other hand duration short @50bpm",
    //     tags: [PIANO],
    //     description: "make sure pressure is even, things should be at the same volume and different duration",
    //     weight: 0
    // },
    // {
    //     name: "C major scale - one hand plays quarter notes, the other hand plays half notes",
    //     tags: [PIANO],
    //     description: "same notes but double the speed",
    //     weight: 0
    // },
    // {
    //     name: "G major scale - both hands together @50bpm",
    //     tags: [PIANO],
    //     description: "make sure pressure is even, things should be at the same volume and same duration",
    //     weight: 0

    // }
]

function getExpandedExercises(){
    let ret = []
    for (let exercise of exercises){
        let weight = exercise.weight
        if (weight === undefined) weight = 1

        for (let i=0; i<weight; i++)
            ret.push(exercise)
    }
    return ret
}

function getRandomExercise() {
    const expandedExercises = getExpandedExercises()
    var exercise = expandedExercises[Math.floor(Math.random() * expandedExercises.length)];
    updateDom({exercise})
}

function renderTags(tags){
    console.log(tags)
    elements = tags.map((tag)=>`<span class="badge bg-secondary">${tag}</span>`)
    return `<div>${elements.join('')}</div>`
}

function updateDom(data){
    domData.data = {...domData.data, ...data}
    const exercise = domData.data.exercise;
    document.getElementById(domData.id).innerHTML = `
    <h2>${exercise.name}</h2>
    ${exercise.description && `<p>${exercise.description}</p>` || ''}
    ${exercise.url && `<p><a href="${exercise.url}">${exercise.url}</a></p>` || ''}
    ${renderTags(exercise.tags)}
    <button type="button" class="btn btn-primary" onclick="getRandomExercise()" >Random Exercise</button>
    `
}

function initialiseDom(elementId){
    domData['id'] = elementId
}
