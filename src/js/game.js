class Game {
    constructor(selector) {
        this.gameEl = document.querySelector(selector)
        this.gameBoardEl = this.gameEl.querySelector('#gameboard')
    }
}