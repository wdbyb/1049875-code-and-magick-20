'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LASTNAMES = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var getRandom = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var getRandomCoatColor = function () {
  return COAT_COLOR[getRandom(0, COAT_COLOR.length)];
};

var getRandomEyesColor = function () {
  return EYES_COLOR[getRandom(0, EYES_COLOR.length)];
};

var getRandomName = function () {
  return WIZARD_NAMES[getRandom(0, WIZARD_NAMES.length)] + WIZARD_LASTNAMES[getRandom(0, WIZARD_LASTNAMES.length)];
};

var createWizard = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = getRandomName();
  wizardElement.querySelector('.wizard-coat').style.fill = getRandomCoatColor();
  wizardElement.querySelector('.wizard-eyes').style.fill = getRandomEyesColor();

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < 4; i++) {
  fragment.appendChild(createWizard());
};

similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
