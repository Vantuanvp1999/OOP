
function Hero(image, top, left, size,speed){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }


    this.moveRight = function(){
        this.left += this.speed;
        console.log('ok: ' + this.left);
    }
    document.addEventListener("keydown",(event)=>{
        switch(event.key){
            case 'ArrowUp':
                if(this.top > 0 ) this.top -= this.speed;
                break;
            case 'ArrowDown':
                if(this.top + this.size < window.innerHeight) this.top += this.speed;
                break;
            case 'ArrowLeft':
                if(this.left > 0) this.left -= this.speed;
                break;
            case 'ArrowRight':
                if(this.left + this.size < window.innerWidth) this.left += this.speed;
                break;

        }
    });
}
document.addEventListener("keydown",(event)=>{
   switch(event.key){
       case 'ArrowUp':
           if(Hero.top >0 ) Hero.top -= Hero.speed;
   }
});
``
var hero = new Hero('pikachu.png', 20, 30, 200, 20);

function start(){

    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}

start();