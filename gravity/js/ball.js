class Ball {

    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize

        this.imageInstance = undefined

        this.ballSpecs = {
            pos: { x: 0, y: 100 },
            size: { w: 50, h: 50 },
            vel: { x: 6, y: 2 }

        }

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = './img/basketball.png'
    }

    draw() {

        this.move()

        this.ctx.drawImage(
            this.imageInstance,
            this.ballSpecs.pos.x,
            this.ballSpecs.pos.y,
            this.ballSpecs.size.w,
            this.ballSpecs.size.h
        )
    }

    move() {

        if (this.ballSpecs.pos.y >= this.canvasSize.h - this.ballSpecs.size.h) this.turnVertical()
        if (this.ballSpecs.pos.x >= this.canvasSize.w - this.ballSpecs.size.w) this.turnHorizontal()

        this.ballSpecs.vel.y += .1          // gravity

        this.ballSpecs.pos.x += this.ballSpecs.vel.x
        this.ballSpecs.pos.y += this.ballSpecs.vel.y
    }

    turnVertical() {
        this.ballSpecs.vel.y *= -1
    }

    turnHorizontal() {
        this.ballSpecs.vel.x *= -1
    }
}