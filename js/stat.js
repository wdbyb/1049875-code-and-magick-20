'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 16;
var COLUMN_GAP = 50;
var COLUMN_WIDTH = 40;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 20;
var COLUMN_HEIGHT = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP + GAP, CLOUD_Y + GAP + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP + GAP, CLOUD_Y + GAP + FONT_GAP + GAP + FONT_GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + COLUMN_GAP + (COLUMN_GAP + COLUMN_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - GAP - FONT_GAP);
    ctx.fillText(Math.ceil(times[i]), CLOUD_X + COLUMN_GAP + (COLUMN_GAP + COLUMN_WIDTH) * i, CLOUD_Y + 75 + (COLUMN_HEIGHT - (COLUMN_HEIGHT * times[i]) / maxTime) - GAP);

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'hsl(0, 100%, 50%)';
      ctx.fillRect(CLOUD_X + COLUMN_GAP + (COLUMN_GAP + COLUMN_WIDTH) * i, CLOUD_Y + 75 + (COLUMN_HEIGHT - (COLUMN_HEIGHT * times[i]) / maxTime), COLUMN_WIDTH, (COLUMN_HEIGHT * times[i]) / maxTime);
    } else {
      var hsl = 'hsl(240, ' + (100 - (25 * i)) + '%, 50%)';
      ctx.fillStyle = hsl;
      ctx.fillRect(CLOUD_X + COLUMN_GAP + (COLUMN_GAP + COLUMN_WIDTH) * i, CLOUD_Y + 75 + (COLUMN_HEIGHT - (COLUMN_HEIGHT * times[i]) / maxTime), COLUMN_WIDTH, (COLUMN_HEIGHT * times[i]) / maxTime);
    }
  };
};
