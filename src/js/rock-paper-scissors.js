class RockPaperScissors extends Game {

    MOVES = ['rock', 'paper', 'scissors']
    OUTCOMES = {
        tie: 'Tied',
        p1: 'Player 1 won',
        p2: 'Player 2 won'
    }

    constructor(selector) {
        super(selector)

        this.setup()
    }

    setup() {
        const btns = this.gameBoardEl.querySelectorAll('.move button')
        btns.forEach((btn) => {
            btn.addEventListener('click', this.handleMove)
        })

        this.player1 = new Player("me")
        this.player2 = new Player("computer")

        const resultEl = this.gameBoardEl.querySelector('#round-result')
        new StatusMessage(resultEl)

        const scoreboardEl = this.gameBoardEl.querySelector('#scoreboard')
        new Scoreboard(scoreboardEl)
    }

    handleMove = (evt) => {
        const btn = evt.target
        const move =  btn.dataset.move

        const player1move = move;
        const player2move = this.player2.randomGuess(this.MOVES)

        this.latestOutcome = this.pickWinner(player1move, player2move)
        this.updateGameStatus()
    }

    pickWinner = (p1m, p2m) => {
        console.log('player guesses:', p1m, p2m)
        let outcome = ""

        if (p1m == p2m) { // tie
            outcome = "tie"
        } else {
            if (p1m == 'rock') {
                if (p2m == 'paper') {
                    outcome = "p2"
                } else {
                    outcome = "p1"
                }
            } else if (p1m == 'paper') {
                if (p2m == 'rock') {
                    outcome = 'p1'
                } else {
                    outcome = 'p2'
                }
            } else if (p1m == 'scissors') {
                if (p2m == 'rock') {
                    outcome = 'p2'
                } else {
                    outcome = 'p1'
                }
            }
        }

        return outcome
    }

    updateGameStatus = () => {
        const message = this.OUTCOMES[this.latestOutcome]
        const evt = new CustomEvent("game-status", { detail: { message: message }})
        document.dispatchEvent(evt)
    }
}