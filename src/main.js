import "./style.scss";

const gameBtn = document.querySelector(".game__game-button");
const arrowBtn = document.querySelectorAll(".js-arrow-btn");
const life = document.querySelectorAll(".life_circle");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let isStarted = false;
let animation;
const grid = 10; // размер клетки
let count = 0; // скорость змейки
let appleCount = 0;
const snake = {
  // Начальные координаты
  x: 100,
  y: 100,
  //  смещение по оси Y
  dx: 0,
  dy: grid,
  // Тащим за собой хвост, который пока пустой
  cells: [],
  // Стартовая длина змейки — 4 клеточки
  maxCells: 4,
};

const apple = {
  // Начальные координаты яблока
  x: 20,
  y: 20,
};

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

function loop() {
  animation = requestAnimationFrame(loop);

  if (++count < 10) {
    return;
  }
  // Обнуляем переменную скорости
  count = 0;
  // инициализируем фигуры
  // очищаем поле
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //  aplle
  ctx.fillStyle = "#CC2936"; // color
  ctx.shadowBlur = 10; // blur
  ctx.shadowColor = "#B73C46"; // blur color
  ctx.fillRect(apple.x, apple.y, grid - 1, grid - 1);

  //  snake
  ctx.fillStyle = "#43D9AD";
  ctx.shadowBlur = 5;
  ctx.shadowColor = "#43D9AD";
  //   ctx.fillRect(snake.x, snake.y, grid - 1, grid - 1);

  // Двигаем змейку
  snake.y += snake.dy;
  snake.x += snake.dx;
  //   если вышла по горизонтали
  if (snake.x < 0) {
    snake.x = canvas.width - grid;
  } else if (snake.x >= canvas.width) {
    snake.x = 0;
  }
  //   если вышла по вертикали
  if (snake.y < 0) {
    snake.y = canvas.height - grid;
  } else if (snake.y >= canvas.height) {
    snake.y = 0;
  }

  // Движение змейки
  snake.cells.unshift({ x: snake.x, y: snake.y });

  // после движения освобождаем клетку
  if (snake.cells.length > snake.maxCells) {
    snake.cells.pop();
  }

  snake.cells.forEach((item, index) => {
    ctx.fillRect(item.x, item.y, grid, grid, grid - 1, grid - 1);

    if (item.x === apple.x && item.y === apple.y) {
      snake.maxCells++;

      appleCount++;
      isLife();

      console.log(apple);
      apple.x = getRandomInt(0, 24) * grid;
      apple.y = getRandomInt(0, 48) * grid;
    }
  });
}

// обработка нажатия на клавиши
document.addEventListener("keydown", function (e) {
  press(e.which);
});

// Обработка клика на кнопки
arrowBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log();
    press(+btn.dataset.type);
  });
});

function press(type) {
  // Стрелка влево
  if (type === 37 && snake.dx === 0) {
    snake.dx = -grid;
    snake.dy = 0;
  }
  // Стрелка вверх
  else if (type === 38 && snake.dy === 0) {
    snake.dy = -grid;
    snake.dx = 0;
  }
  // Стрелка вправо
  else if (type === 39 && snake.dx === 0) {
    snake.dx = grid;
    snake.dy = 0;
  }
  // Стрелка вниз
  else if (type === 40 && snake.dy === 0) {
    snake.dy = grid;
    snake.dx = 0;
  }
}

const isLife = () => {
  console.log(appleCount, life.length);
  if (appleCount < 10) {
    life[appleCount - 1].style.opacity = "1";
  } else {
    gameBtn.style.display = "block";
    gameBtn.textContent = "You win!!!";
    // isStarted = false;
    cancelAnimationFrame(animation);
  }
};

gameBtn.addEventListener("click", () => {
  isStarted = !isStarted;

  if (isStarted) {
    gameBtn.style.display = "none";
    animation = requestAnimationFrame(loop);
  }
});
