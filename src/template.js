const template = () => `<template>
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
            <button
              class="arrow__icon material-icons arrow_drop_up js-arrow-btn"
              data-type="38"></button>
          </div>
          <div class="game__arrow">
            <button
              class="arrow__icon material-icons arrow_left js-arrow-btn"
              data-type="37"></button>
          </div>
          <div class="game__arrow">
            <button
              class="arrow__icon material-icons arrow_drop_down js-arrow-btn"
              data-type="40"></button>
          </div>
          <div class="game__arrow">
            <button
              class="arrow__icon material-icons arrow_right js-arrow-btn"
              data-type="39"></button>
          </div>
        </div>
      </div>
      <div class="game__life">
        <p class="life__title">// food left</p>
        <div class="life__circle-group">
          <div class="life_circle"></div>
          <div class="life_circle"></div>
          <div class="life_circle"></div>
          <div class="life_circle"></div>
          <div class="life_circle"></div>
          <div class="life_circle"></div>
          <div class="life_circle"></div>
          <div class="life_circle"></div>
          <div class="life_circle"></div>
          <div class="life_circle"></div>
        </div>
      </div>
    </div>
  </div> </template
>`;
