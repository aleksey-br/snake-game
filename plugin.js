var h=(o,t)=>()=>(t||o((t={exports:{}}).exports,t),t.exports);var f=h((m,a)=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(e){if(e.ep)return;e.ep=!0;const i=n(e);fetch(e.href,i)}})();const c=`<style>
  @import url(https://fonts.googleapis.com/css?family=Fira+Code:300,regular,500,600,700);

  :host {
    position: relative;
    font-family: "Fira Code", sans-serif;
  }
  .game {
    width: 510px;
    height: 475px;
    margin: auto;
    display: flex;
    gap: 24px;
    position: relative;
    padding: 35px 30px;
    background: linear-gradient(
      144deg,
      rgba(23, 85, 83, 1) 0%,
      rgba(67, 217, 173, 0.14) 70%
    );
    border-radius: 10px;
    outline: 1px solid #0c1616;
  }
  .game__bolt {
    position: absolute;
    width: 14px;
    height: 14px;
    border-radius: 14px;
    border: 1px solid #114944;
    background: radial-gradient(
      circle at 50% 50%,
      rgba(25, 108, 106, 1) 0%,
      rgba(17, 75, 74, 1) 100%
    );
    filter: drop-shadow(2px 2px 4px #0d4341);
    box-shadow: 0 1px 2px #1f8177;
  }
  .game__bolt::after {
    content: "";
    width: 10px;
    height: 2px;
    position: absolute;
    top: 6px;
    left: 2px;
    background: #114944;
    transform: rotate(45deg);
  }
  .game__bolt::before {
    content: "";
    width: 10px;
    height: 2px;
    position: absolute;
    top: 6px;
    left: 2px;
    background: #114944;
    transform: rotate(-45deg);
  }

  .game__bolt:nth-of-type(1) {
    top: 12px;
    left: 12px;
  }
  .game__bolt:nth-of-type(2) {
    top: 12px;
    right: 12px;
  }
  .game__bolt:nth-of-type(3) {
    bottom: 12px;
    left: 12px;
  }
  .game__bolt:nth-of-type(4) {
    bottom: 12px;
    right: 12px;
  }
  .game__col {
    width: 50%;
    position: relative;
  }
  .game__game-button {
    position: absolute;
    bottom: 100px;
    left: 0;
    color: #43d9ad;
    padding: 10px 0;
    text-align: center;
    background: #011627;
    cursor: pointer;
    width: 240px;
  }
  .game__setting {
    display: flex;
    flex-direction: column;
    padding: 15px;
    background: rgba(1, 20, 35, 19%);
    border-radius: 8px;
    margin-bottom: 20px;
  }
  .game__setting-description {
    color: #fff;
  }
  .game__arrow-group {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: center;
    padding-top: 15px;
  }
  .game__arrow:first-child {
    width: 100%;
    text-align: center;
  }
  .canvas {
    background: rgb(1, 22, 39, 84%);
    border-radius: 10px;
    flex: 1 1 auto;
  }
  .arrow__icon {
    width: 49px;
    height: 28px;
    background: #010c15;
    border-radius: 8px;
    color: #fff;
    border: 1px solid #1e2d3d;
    cursor: pointer;
  }
  .arrow__icon:active {
    background: #2a2d30;
  }

  .life__title {
    color: #fff;
    margin-bottom: 22px;
    margin-top: 0;
  }
  .life__circle-group {
    display: grid;
    grid-template-columns: repeat(5, 20px);
    gap: 22px;
  }
  .life__circle {
    width: 8px;
    height: 8px;
    display: block;
    background: #43d9ad;
    border-radius: 8px;
    position: relative;
    opacity: 0.5;
  }

  .life__circle::after {
    content: "";
    position: absolute;
    top: -3px;
    left: -3px;
    width: 14px;
    height: 14px;
    background: rgb(67, 217, 173, 60%);
    border-radius: 14px;
  }
  .life__circle::before {
    content: "";
    position: absolute;
    top: -6px;
    left: -6px;
    width: 20px;
    height: 20px;
    background: rgb(67, 217, 173, 30%);
    border-radius: 14px;
  }
</style>
<div class="game">
  <span class="game__bolt"></span>
  <span class="game__bolt"></span>
  <span class="game__bolt"></span>
  <span class="game__bolt"></span>
  <div class="game__col">
    <canvas id="canvas" class="canvas" width="240" height="480"></canvas>
    <div class="game__game-button">Start Game</div>
  </div>
  <div class="game__col">
    <div class="game__setting">
      <span class="game__setting-description">// use keyboard</span>
      <span class="game__setting-description">// arrows to play</span>
      <div class="game__arrow-group">
        <div class="game__arrow">
          <button class="arrow__icon js-arrow-btn" data-type="38">
            <svg
              width="9"
              height="7"
              viewBox="0 0 9 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.50002 0.309143L8.75003 6.30914H0.25L4.50002 0.309143Z"
                fill="white" />
            </svg>
          </button>
        </div>
        <div class="game__arrow">
          <button class="arrow__icon js-arrow-btn" data-type="37">
            <svg
              width="7"
              height="10"
              viewBox="0 0 7 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.0390623 4.80914L6.03906 0.559128L6.03906 9.05916L0.0390623 4.80914Z"
                fill="white" />
            </svg>
          </button>
        </div>
        <div class="game__arrow">
          <button class="arrow__icon js-arrow-btn" data-type="40">
            <svg
              width="9"
              height="7"
              viewBox="0 0 9 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.49998 6.80914L0.24997 0.809142L8.75 0.809143L4.49998 6.80914Z"
                fill="white" />
            </svg>
          </button>
        </div>
        <div class="game__arrow">
          <button class="arrow__icon js-arrow-btn" data-type="39">
            <svg
              width="7"
              height="10"
              viewBox="0 0 7 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.96094 4.80914L0.960938 9.05916L0.960938 0.559128L6.96094 4.80914Z"
                fill="white" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="game__life">
      <p class="life__title">// food left</p>
      <div class="life__circle-group">
        <div class="life__circle"></div>
        <div class="life__circle"></div>
        <div class="life__circle"></div>
        <div class="life__circle"></div>
        <div class="life__circle"></div>
        <div class="life__circle"></div>
        <div class="life__circle"></div>
        <div class="life__circle"></div>
        <div class="life__circle"></div>
        <div class="life__circle"></div>
      </div>
    </div>
  </div>
</div>
`;var a={exports:{}};const l=document.createElement("template");l.innerHTML=c;a.exports=l;const d=(a.exports==null?{}:a.exports).default||a.exports,p=Object.freeze(Object.defineProperty({__proto__:null,default:d},Symbol.toStringTag,{value:"Module"})),g=d||p;class _ extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),n=document.importNode(g.content,!0);t.appendChild(this._initContent(n))}_initContent(t){var n;return this.$arrowBtn=t.querySelectorAll(".js-arrow-btn"),this.$life=t.querySelectorAll(".life__circle"),this.$canvas=t.getElementById("canvas"),this.ctx=(n=this.$canvas)==null?void 0:n.getContext("2d"),this.isStarted=!1,this.isWin=!1,this.animation,this.grid=10,this.count=0,this.appleCount=0,this.snake={x:100,y:100,dx:0,dy:this.grid,cells:[],maxCells:4},this.apple={x:20,y:20},this.$gameBtn=t.querySelector(".game__game-button"),this.$gameBtn.addEventListener("click",this._start.bind(this)),document.addEventListener("keydown",this._press.bind(this)),this.$arrowBtn.forEach(s=>{s.addEventListener("click",()=>{this._press(+s.dataset.type)})}),t}_start(){this.isStarted=!this.isStarted,this.isStarted&&(this.$gameBtn.style.display="none",this.animation=requestAnimationFrame(this._loop.bind(this)))}_loop(){this.animation=requestAnimationFrame(this._loop.bind(this)),!(++this.count<10)&&(this.count=0,this.ctx.clearRect(0,0,this.$canvas.width,this.$canvas.height),this.ctx.fillStyle="#CC2936",this.ctx.shadowBlur=10,this.ctx.shadowColor="#B73C46",this.ctx.fillRect(this.apple.x,this.apple.y,this.grid-1,this.grid-1),this.ctx.fillStyle="#43D9AD",this.ctx.shadowBlur=5,this.ctx.shadowColor="#43D9AD",this.snake.y+=this.snake.dy,this.snake.x+=this.snake.dx,this.snake.x<0?this.snake.x=this.$canvas.width-this.grid:this.snake.x>=this.$canvas.width&&(this.snake.x=0),this.snake.y<0?this.snake.y=this.$canvas.height-this.grid:this.snake.y>=this.$canvas.height&&(this.snake.y=0),this.snake.cells.unshift({x:this.snake.x,y:this.snake.y}),this.snake.cells.length>this.snake.maxCells&&this.snake.cells.pop(),this.snake.cells.forEach((t,n)=>{this.ctx.fillRect(t.x,t.y,this.grid,this.grid-1,this.grid-1),t.x===this.apple.x&&t.y===this.apple.y&&(this.snake.maxCells++,this.appleCount++,this.isWin||(console.log(this.isWin),this._isLife()),this.apple.x=this._getRandomInt(0,24)*this.grid,this.apple.y=this._getRandomInt(0,48)*this.grid);for(let s=n+1;s<this.snake.cells.length;s++)t.x===this.snake.cells[s].x&&t.y===this.snake.cells[s].y&&(this._gameOver(),this.snake.x=100,this.snake.y=100,this.snake.cells=[],this.snake.maxCells=4,this.snake.dx=0,this.snake.dy=this.grid,this.apple.x=this._getRandomInt(0,24)*this.grid,this.apple.y=this._getRandomInt(0,48)*this.grid)}))}_press(t){let n=t.keyCode??t;n===37&&this.snake.dx===0?(this.snake.dx=-this.grid,this.snake.dy=0):n===38&&this.snake.dy===0?(this.snake.dy=-this.grid,this.snake.dx=0):n===39&&this.snake.dx===0?(this.snake.dx=this.grid,this.snake.dy=0):n===40&&this.snake.dy===0&&(this.snake.dy=this.grid,this.snake.dx=0)}_isLife(){this.appleCount<10?this.$life[this.appleCount-1].style.opacity="1":(this.$gameBtn.style.display="block",this.$gameBtn.innerHTML="<div style='font-size:16px'>You WIN!!!</div><div style='color:#fff; font-size:12px; padding-top:5px;'>press to continue</div>",this.isStarted=!1,this.isWin=!0,cancelAnimationFrame(this.animation))}_gameOver(){this.isStarted=!1,this.$gameBtn.style.display="block",this.$gameBtn.innerHTML="<div style='font-size:16px'>WELL DONE!</div><div style='color:#fff; font-size:12px; padding-top:5px;'>play-again</div>",cancelAnimationFrame(this.animation),this._lifeRestart()}_lifeRestart(){this.$life.forEach(t=>{t.removeAttribute("style")})}_getRandomInt(t,n){return Math.floor(Math.random()*(n-t))+t}}customElements.define("snake-game",_)});export default f();
