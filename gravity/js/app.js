const game = {
    title: 'Bouncing balls app yay',
    author: 'Ger',
    license: undefined,
    version: '1.0.0',
    ctx: undefined,
    balls: [],
    canvasSize: {
        w: undefined,
        h: undefined
    },
    init() {
        this.setContext()
        this.setDimensions()
        this.setEventListeners()
        this.start()
    },
    setContext() {
        this.ctx = document.querySelector('#balls').getContext('2d')
    },
    setDimensions() {
        this.canvasSize.w = window.innerWidth
        this.canvasSize.h = window.innerHeight
        document.querySelector('#balls').setAttribute('width', this.canvasSize.w)
        document.querySelector('#balls').setAttribute('height', this.canvasSize.h)
    },
    setEventListeners() {
        document.onkeydown = ({ code }) => {
            if (code === 'Space') this.createBall()
        }
    },
    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
            this.clearBalls()
        }, 10)
    },
    createBall() {
        this.balls.push(new Ball(this.ctx, this.canvasSize))
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
    drawAll() {
        this.balls.forEach(elm => elm.draw())
        console.log(this.balls.length)
    },
    clearBalls() {
        this.balls = this.balls.filter(eachBall => eachBall.ballSpecs.pos.x > 0)
    }
}