form.oninput = function () {

  // 미션 --------------------------------------------------------------------------------------------
  // [1] DOM API를 사용하여 문서에서 컨트롤 할 객체에 접근하여 각 변수에 참조(reference)합니다. 
  //     참고로 작성된 HTML 코드는 수정하지 않습니다.
  // [2] input_num_first, input_num_last 참조 객체의 value 속성 값을 도출하여, output 참조 객체의 값에 대입합니다.
  // ------------------------------------------------------------------------------------------------

  // [1]
  var input_num_first, input_num_last, output;

  // [2]
  input_num_first = document.getElementsByTagName('input')[0].value;
  input_num_last = document.getElementsByTagName('input')[1].value;
  document.getElementsByTagName('output')[0].innerHTML = Number(
    input_num_first) + Number(input_num_last);
};