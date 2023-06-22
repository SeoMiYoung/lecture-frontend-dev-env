/*
  모듈에 함수를 하나 할당한다.
  로더는 함수 형태로 작성한다.
  웹팩 설정파일에서 로더를 사용하기 위해 내용 추가
*/

module.exports = function myWebpackLoader (content) {
  console.log('myWebpackLoader가 작동함');
  return content;
}