// Canvas

const canvas = document.getElementById('canvas'),
    c = canvas.getContext('2d');

const innerHeight = 700,
    innerWidth = 800;

    canvas.width = innerWidth;
    canvas.height = innerHeight;

// Objects

class Player{
    constructor(x, y, radius, color){
        // Position
        this.x = x;
        this.y = y;
        // Desing
        this.radius = radius;
        this.color = color;
    }
    draw(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }
}

class Projectile {
    constructor(x, y, radius, color, velocity){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
    }
}

const player = new Player(100, 100, 30, '#fff');
player.draw();

window.addEventListener('click', () =>{ // remove "window" if don't work
    console.log('test');
    const projectile = new Projectile(
        event.clientX, event.clientY, 5, 'red', null
    )
    projectile.draw()
})
