function sendBtnAjax() {
  var value = 1;

  $.ajax({
    url: "192.168.1.210", //For Arduino URL
    method: "GET",
    dataType: "text",
    data: {
      value: value,
    },
    success: function (response) {
      console.log(response);
    },
  });
}
