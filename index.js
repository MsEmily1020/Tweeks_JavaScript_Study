// form 요소 가져오기
const inputSelector = document.getElementById("input_selector");
const inputText = document.getElementById("input_text");
const outputSelector = document.getElementById("output_selector");
const outputText = document.getElementById("output_text");

// 전환 객체
const conversions = {
  bit: {
    byte: (bit) => bit / 8,
    kb: (bit) => bit / (1024 * 8),
    mb: (bit) => bit / (1024 * 1024 * 8),
  },

  byte: {
    bit: (byte) => byte * 8,
    kb: (byte) => byte / 1024,
    mb: (byte) => byte / (1024 * 1024),
  },

  kb: {
    bit: (kb) => kb * 8 * 1024,
    byte: (kb) => kb * 1024,
    mb: (kb) => kb / 1024,
  },

  mb: {
    bit: (mb) => mb * 8 * 1024 * 1024,
    byte: (mb) => mb * 1024 * 1024,
    kb: (mb) => mb * 1024,
  },
};

// 결과값 계산 후 리턴
function convertToValue(inputSelector, inputText, outputSelector) {
  const inputType = inputSelector.value;
  const outputType = outputSelector.value;

  const value = parseInt(inputText.value);
  if (isNaN(value)) {
    return "Invalid input";
  }

  const conversionFunction = conversions[inputType]?.[outputType];
  return conversionFunction
    ? `${conversionFunction(value)} ${outputType}`
    : "Invalid input";
}

// 클릭리스너 구현
function addEvent() {
  outputText.value = convertToValue(inputSelector, inputText, outputSelector);
}

inputText.addEventListener("change", addEvent);
inputSelector.addEventListener("change", addEvent);
