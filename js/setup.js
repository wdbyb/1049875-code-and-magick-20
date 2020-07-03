'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var MAX_WIZARDS = 4;

var getRandom = function (min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

var getRandomCoatColor = function () {
  return COAT_COLORS[getRandom(0, COAT_COLORS.length - 1)];
};

var getRandomEyesColor = function () {
  return EYES_COLORS[getRandom(0, EYES_COLORS.length - 1)];
};

var getRandomName = function () {
  return WIZARD_NAMES[getRandom(0, WIZARD_NAMES.length - 1)] + ' ' + WIZARD_LASTNAMES[getRandom(0, WIZARD_LASTNAMES.length - 1)];
};

var wizards = [];

for (var i = 0; i < MAX_WIZARDS; i++) {
  wizards.push({
    name: getRandomName(),
    coatColor: getRandomCoatColor(),
    eyesColor: getRandomEyesColor()
  });
}

var createWizard = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (i = 0; i < MAX_WIZARDS; i++) {
  fragment.appendChild(createWizard());
}

similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
