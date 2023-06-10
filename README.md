# 💻 Tweeks_Study
2023 자바스크립트 데이터 단위 변환기 프로젝트>

## ⌚ Project execution period
  - 2023.06.10

## 🛠 Development Environment
  - Tool : `vscode`

## 📃 Main Composition

- getElementById로 form 요소 가져옴
- 통일성 있게 전환 객체 구성
  
  ```javascript
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
  ```
- 결과값 계산전 null인지 아닌지 확인 -> 일 경우 "Invalid input"
- change로 addEvent 구성

<br>

## 🎞 데이터 단위 변환기 프로젝트

![image](https://github.com/MsEmily1020/Tweeks_Study/assets/121646949/aba1870a-a091-4460-937a-24e22661dcba)


