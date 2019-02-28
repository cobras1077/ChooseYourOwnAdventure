// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "You are walking down the street and you have come across a man with a knife. He lunges forward toward someone.",
            choices: [
                {
                    text: "Take the hit and save the person",
                    nextLevel: "revival",
                },

                {
                    text: "Move out the way and stand there",
                    nextLevel: "wait",
                },
            ]
        },

        revival: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You have died but you have been reincarnated as a slime in another world. On your exploration of the new world you come across a dragon.",
            choices: [
                {
                    text: "Talk to the dragon",
                    nextLevel: "Confrontation",
                },
                {
                    text: "Ignore and run away fromt the dragon.",
                    nextLevel: "Lost",
                }
            ]
        },

        wait: {
            message: "You just witness someone get hurt. You see a pond of blood slowly oozing out of the satvved victim",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
        
        Lost: {
            message:"You have just ran away from your only source of knowledge in this world. You are stranded in the cave.",
            choices: [
                {
                    text:"start over",
                    nextLevel:"start",
                },
            ]
        },
        
         Confrontation: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You learn more about the world and you have befriended this dragon. You hear that this dragon is trapped in the cave because of a spell.",
            choices: [
                {
                    text: "Help him break the spell.",
                    nextLevel: "Savior",
                },
                {
                    text: "Ignore him and run away.",
                    nextLevel: "Running",
                }
            ]
        },
         
         Savior: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You decided to use your special skill and engulf the dragon into you. You leave the cave and encountered goblins being threatened by direwolves",
            choices: [
                {
                    text: "Save the goblins",
                    nextLevel: "goblins",
                },
                {
                    text: "Ignore the goblins because they disgust you",
                    nextLevel: "wolves",
                }
            ]
        },
    }
};
