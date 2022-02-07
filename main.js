let result = document.getElementById("result");

//数字ボタン処理
function get_calc(btn) {
  if (result.value === "0" || result.value === "00") {
    result.value = btn.value;
  } else {
    result.value = result.value + btn.value;
  }
}

//演算子ボタン処理
function get_calc_ope(btn) {
  if (result.value.slice(-1) === "+") {
    return;
  } else if (result.value.slice(-1) === "-") {
    return;
  } else if (result.value.slice(-1) === "*") {
    return;
  } else if (result.value.slice(-1) === "/") {
    return;
  } else {
    result.value = result.value + btn.value;
  }
}

//=ボタン処理
function get_calc_equal() {
  result.value = new Function("return " + result.value)();
}

//ACボタン処理
function get_calc_ac() {
  result.value = "";
}
