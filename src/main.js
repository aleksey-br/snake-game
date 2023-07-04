const template = require("./template");
import "./style.scss";

// const gameBtn = document.querySelector(".game__game-button");
// const arrowBtn = document.querySelectorAll(".js-arrow-btn");
// const life = document.querySelectorAll(".life_circle");
// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// let isStarted = false;
// let animation;
// const grid = 10; // размер клетки
// let count = 0; // скорость змейки
// let appleCount = 0;
// const snake = {
//   // Начальные координаты
//   x: 100,
//   y: 100,
//   //  смещение по оси Y
//   dx: 0,
//   dy: grid,
//   // Тащим за собой хвост, который пока пустой
//   cells: [],
//   // Стартовая длина змейки — 4 клеточки
//   maxCells: 4,
// };

// const apple = {
//   // Начальные координаты яблока
//   x: 20,
//   y: 20,
// };

// const getRandomInt = (min, max) => {
//   return Math.floor(Math.random() * (max - min)) + min;
// };

// function loop() {
//   animation = requestAnimationFrame(loop);

//   if (++count < 10) {
//     return;
//   }
//   // Обнуляем переменную скорости
//   count = 0;
//   // инициализируем фигуры
//   // очищаем поле
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   //  aplle
//   ctx.fillStyle = "#CC2936"; // color
//   ctx.shadowBlur = 10; // blur
//   ctx.shadowColor = "#B73C46"; // blur color
//   ctx.fillRect(apple.x, apple.y, grid - 1, grid - 1);

//   //  snake
//   ctx.fillStyle = "#43D9AD";
//   ctx.shadowBlur = 5;
//   ctx.shadowColor = "#43D9AD";
//   //   ctx.fillRect(snake.x, snake.y, grid - 1, grid - 1);

//   // Двигаем змейку
//   snake.y += snake.dy;
//   snake.x += snake.dx;
//   //   если вышла по горизонтали
//   if (snake.x < 0) {
//     snake.x = canvas.width - grid;
//   } else if (snake.x >= canvas.width) {
//     snake.x = 0;
//   }
//   //   если вышла по вертикали
//   if (snake.y < 0) {
//     snake.y = canvas.height - grid;
//   } else if (snake.y >= canvas.height) {
//     snake.y = 0;
//   }

//   // Движение змейки
//   snake.cells.unshift({ x: snake.x, y: snake.y });

//   // после движения освобождаем клетку
//   if (snake.cells.length > snake.maxCells) {
//     snake.cells.pop();
//   }

//   snake.cells.forEach((item, index) => {
//     ctx.fillRect(item.x, item.y, grid, grid, grid - 1, grid - 1);

//     if (item.x === apple.x && item.y === apple.y) {
//       snake.maxCells++;

//       appleCount++;
//       isLife();

//       console.log(apple);
//       apple.x = getRandomInt(0, 24) * grid;
//       apple.y = getRandomInt(0, 48) * grid;
//     }
//   });
// }

// // обработка нажатия на клавиши
// document.addEventListener("keydown", function (e) {
//   press(e.which);
// });

// // Обработка клика на кнопки
// arrowBtn.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     console.log();
//     press(+btn.dataset.type);
//   });
// });

// function press(type) {
//   // Стрелка влево
//   if (type === 37 && snake.dx === 0) {
//     snake.dx = -grid;
//     snake.dy = 0;
//   }
//   // Стрелка вверх
//   else if (type === 38 && snake.dy === 0) {
//     snake.dy = -grid;
//     snake.dx = 0;
//   }
//   // Стрелка вправо
//   else if (type === 39 && snake.dx === 0) {
//     snake.dx = grid;
//     snake.dy = 0;
//   }
//   // Стрелка вниз
//   else if (type === 40 && snake.dy === 0) {
//     snake.dy = grid;
//     snake.dx = 0;
//   }
// }

// const isLife = () => {
//   console.log(appleCount, life.length);
//   if (appleCount < 10) {
//     life[appleCount - 1].style.opacity = "1";
//   } else {
//     gameBtn.style.display = "block";
//     gameBtn.textContent = "You win!!!";
//     // isStarted = false;
//     cancelAnimationFrame(animation);
//   }
// };

// gameBtn.addEventListener("click", () => {
//   isStarted = !isStarted;

//   if (isStarted) {
//     gameBtn.style.display = "none";
//     animation = requestAnimationFrame(loop);
//   }
// });

class SnakeGame extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const content = document.importNode(template.content, true);

    shadow.appendChild(this._initContent(content));
  }
  _initContent(content) {
    /* Элементы  */
    this.$arrowBtn = content.querySelectorAll(".js-arrow-btn"); // button arrow
    this.$life = content.querySelectorAll(".life__circle"); // life indication
    this.$canvas = content.getElementById("canvas"); // canvas
    this.ctx = this.$canvas?.getContext("2d"); // canvas context

    /* базовые переменные */
    this.isStarted = false;
    this.isWin = false;
    this.animation;
    this.grid = 10; // размер клетки
    this.count = 0; // скорость змейки
    this.appleCount = 0; // количество съеденых яблок
    this.snake = {
      // Начальные координаты
      x: 100,
      y: 100,
      //  смещение по оси Y
      dx: 0,
      dy: this.grid,
      // хвост змеи
      cells: [],
      // Стартовая длина змейки — 4 клеточки
      maxCells: 4,
    };
    this.apple = {
      // Начальные координаты яблока
      x: 20,
      y: 20,
    };

    this.$gameBtn = content.querySelector(".game__game-button"); //кнопка старта игры
    this.$gameBtn.addEventListener("click", this._start.bind(this)); //  Запуск функции старта

    document.addEventListener("keydown", this._press.bind(this)); // нажатие клавиш на клавиатуре

    /* нажатии кнопок на странице */
    this.$arrowBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        this._press(+btn.dataset.type);
      });
    });

    return content;
  }

  _start() {
    this.isStarted = !this.isStarted;
    if (this.isStarted) {
      this.$gameBtn.style.display = "none";
      this.animation = requestAnimationFrame(this._loop.bind(this));
    }
  }

  _loop() {
    this.animation = requestAnimationFrame(this._loop.bind(this));

    if (++this.count < 10) {
      return;
    }
    // Обнуляем переменную скорости
    this.count = 0;
    // инициализируем фигуры
    // очищаем поле
    this.ctx.clearRect(0, 0, this.$canvas.width, this.$canvas.height);

    //  aplle
    this.ctx.fillStyle = "#CC2936"; // color
    this.ctx.shadowBlur = 10; // blur
    this.ctx.shadowColor = "#B73C46"; // blur color
    this.ctx.fillRect(this.apple.x, this.apple.y, this.grid - 1, this.grid - 1);

    //  snake
    this.ctx.fillStyle = "#43D9AD";
    this.ctx.shadowBlur = 5;
    this.ctx.shadowColor = "#43D9AD";
    //   ctx.fillRect(snake.x, snake.y, grid - 1, grid - 1);

    // Двигаем змейку
    this.snake.y += this.snake.dy;
    this.snake.x += this.snake.dx;
    //   если вышла по горизонтали
    if (this.snake.x < 0) {
      this.snake.x = this.$canvas.width - this.grid;
    } else if (this.snake.x >= this.$canvas.width) {
      this.snake.x = 0;
    }
    //   если вышла по вертикали
    if (this.snake.y < 0) {
      this.snake.y = this.$canvas.height - this.grid;
    } else if (this.snake.y >= this.$canvas.height) {
      this.snake.y = 0;
    }

    // Движение змейки
    this.snake.cells.unshift({ x: this.snake.x, y: this.snake.y });

    // после движения освобождаем клетку
    if (this.snake.cells.length > this.snake.maxCells) {
      this.snake.cells.pop();
    }

    this.snake.cells.forEach((item, index) => {
      this.ctx.fillRect(
        item.x,
        item.y,
        this.grid,
        this.grid - 1,
        this.grid - 1,
      );

      if (item.x === this.apple.x && item.y === this.apple.y) {
        this.snake.maxCells++;

        this.appleCount++;
        if (!this.isWin) {
          console.log(this.isWin);
          this._isLife();
        }

        this.apple.x = this._getRandomInt(0, 24) * this.grid;
        this.apple.y = this._getRandomInt(0, 48) * this.grid;
      }

      for (let i = index + 1; i < this.snake.cells.length; i++) {
        // Если такие клетки есть — начинаем игру заново
        if (
          item.x === this.snake.cells[i].x &&
          item.y === this.snake.cells[i].y
        ) {
          this._gameOver();

          // Задаём стартовые параметры основным переменным
          this.snake.x = 100;
          this.snake.y = 100;
          this.snake.cells = [];
          this.snake.maxCells = 4;
          this.snake.dx = 0;
          this.snake.dy = this.grid;
          // Ставим яблочко в случайное место
          this.apple.x = this._getRandomInt(0, 24) * this.grid;
          this.apple.y = this._getRandomInt(0, 48) * this.grid;
        }
      }
    });
  }

  _press(code) {
    let type = code.keyCode ?? code;
    //Стрелка влево
    if (type === 37 && this.snake.dx === 0) {
      this.snake.dx = -this.grid;
      this.snake.dy = 0;
    }
    // Стрелка вверх
    else if (type === 38 && this.snake.dy === 0) {
      this.snake.dy = -this.grid;
      this.snake.dx = 0;
    }
    // Стрелка вправо
    else if (type === 39 && this.snake.dx === 0) {
      this.snake.dx = this.grid;
      this.snake.dy = 0;
    }
    // Стрелка вниз
    else if (type === 40 && this.snake.dy === 0) {
      this.snake.dy = this.grid;
      this.snake.dx = 0;
    }
  }

  _isLife() {
    if (this.appleCount < 10) {
      this.$life[this.appleCount - 1].style.opacity = "1";
    } else {
      this.$gameBtn.style.display = "block";
      this.$gameBtn.innerHTML =
        "<div style='font-size:16px'>You WIN!!!</div><div style='color:#fff; font-size:12px; padding-top:5px;'>press to continue</div>";
      this.isStarted = false;
      this.isWin = true;
      cancelAnimationFrame(this.animation);
    }
  }

  _gameOver() {
    this.isStarted = false;
    this.$gameBtn.style.display = "block";
    this.$gameBtn.innerHTML =
      "<div style='font-size:16px'>WELL DONE!</div><div style='color:#fff; font-size:12px; padding-top:5px;'>play-again</div>";
    cancelAnimationFrame(this.animation);
    this._lifeRestart();
  }
  _lifeRestart() {
    this.$life.forEach((elem) => {
      elem.removeAttribute("style");
    });
  }

  _getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}

customElements.define("snake-game", SnakeGame);
