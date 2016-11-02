function animateCanvas(canvas, options={}) {
  const context = canvas.getContext('2d');
  const width = canvas.width = window.innerWidth;
  const height = canvas.height = window.innerHeight;
  let tick = 0;

  const options = Object.assign({}, this.defaultOptions, options);
  const particles = setupAnimation(width, height, options);

  window.addEventListener('resize', function(e) {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerWidth;
  });

  function setupAnimation(width, height, options) {
    const particles = [];
    for (var i=0; i < options.particleAmount; i++) {
      particles.push(new Particle(width, height, options))
    }
    window.requestAnimationFrame(loop);
    return particles;
  }

  function loop() {
    window.requestAnimationFrame(loop);
    tick += 1;
    context.fillStyle = options.backgroundColor;
		context.fillRect(0,0,width,height);

    for(let i = 0; i < particles.length; i++){
			particles[i]._updateCoordinates(width, height);
			particles[i].draw(context);
		}

    for(let i = 0; i < particles.length; i++){
      connectPoints(particles[i], particles, context, options);
		}
  }
}

animateCanvas.defaultOptions = {
  backgroundColor: '#fff',
  particleColor: '#999',
  particleAmount: 40,
  defaultSpeed: 1,
  addedSpeed: 2,
  defaultRadius: 2,
  addedRadius: 2,
  communicationRadius: 150
}

function Particle(posX, posY, options) {
  this.x = posX;
  this.y = posY;
  this.speed = options.defaultSpeed + getRandomPosition(options.addedSpeed);
  this.directionAngle = getRandomAngle();
  this.color = options.particleColor;
  this.radius = options.defaultRadius + getRandomPosition(options.addedRadius);
  this.directions = this._getDirections();
}

Particle.prototype.draw = function(canvas) {
  canvas.beginPath();
  canvas.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
  canvas.closePath();
  canvas.fillStyle = this.color;
  canvas.fill();
}

Particle.prototype._getDirections = function() {
  return {
    x: Math.cos(this.directionAngle) * this.speed,
    y: Math.sin(this.directionAngle) * this.speed
  };
}

Particle.prototype._updateCoordinates = function(width, height) {
  this._isTouchingBorder(width, height);
  this.x += this.directions.x;
  this.y += this.directions.y;
}

Particle.prototype._isTouchingBorder = function(width, height) {
  const x = this.x;
  const y = this.y;
  if (x >= width || x <= 0) {
    this.directions.x *= -1;
  }
  if (y >= height || y <= 0) {
    this.directions.y *= -1;
  }
  if (x > width) {
    this.x = width;
  }
  if (y> height) {
    this.y = height;
  }
  if (x < 0) {
    this.x = 0;
  }
  if (y < 0) {
    this.y = 0;
  }
}

function connectPoints(p1, father, canvas, options) {
  for (let p2 of father) {
    const distance = getDistanceBetweenPoints(p1, p2);
    const opacity = 1 - (distance/options.communicationRadius);
    if (opacity > 0) {
      canvas.lineWidth = 0.5;
      canvas.strokeStyle = "rgba(0,0,0,opacity)".replace("opacity", opacity);
      canvas.beginPath();
      canvas.moveTo(p1.x, p1.y);
      canvas.lineTo(p2.x, p2.y);
      canvas.closePath();
      canvas.stroke();
    }
  }
}

function getRandomPosition(range) {
  return Math.random() * range;
}

function getRandomAngle() {
  return Math.floor(Math.random() * 360);
}

function getDistanceBetweenPoints(pointOne, pointTwo) {
  return Math.sqrt(Math.pow(pointTwo.x - pointOne.x, 2) - Math.pow(pointTwo.y - pointOne.y, 2));
}
