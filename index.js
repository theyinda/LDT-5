let display = document.querySelector(".result");

const input = function (element) {
  display.value += element;
};

function totalButtonClicked() {
  display.value = eval(display.value);
}
