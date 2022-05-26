class Player {
    constructor(name) {
        this.name = name
    }

    randomGuess = (guesses) => {
        const index = Math.floor(Math.random() * guesses.length)
        return guesses[index]
    }
}