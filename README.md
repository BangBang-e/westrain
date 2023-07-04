# 🎉 땡 탄 절
## 땡가리의 생일을 축하하는 메세지를 남길 수 있는 웹 애플리케이션입니다.

https://github.com/BangBang-e/westrain/assets/107192580/1657aa0e-17b1-4636-aba2-01723330620e

## 개발기간: 2023.06.20 ~ 2023.06.28
<br/>

## 🔍 Info.

본 웹 사이트의 이름인 땡탄절은 땡가리+성탄절의 합성어로\
땡탄절을 맞아 축하메세지를 남길 수 있는 간단한 사이트입니다.

<br/>

## 📄 Pages.

![Frame 5](https://github.com/BangBang-e/westrain/assets/107192580/b8950011-00cb-41fa-80d9-8d50bda4c80c)

1. Home: 메세지를 작성, 조회, 수정, 삭제할 수 있습니다. 
2. About: 간단한 소개와 이용방법, 생일날 타이머를 확인할 수 있습니다.

<br/>

## 🕹️ How to use.

<img width="734" alt="스크린샷 2023-07-05 오전 3 25 41" src="https://github.com/BangBang-e/westrain/assets/107192580/e2caa263-b8ed-4f9c-a8d1-3c171e1244c8">

사이트를 이용하는 방법을 알려드리자면,\
먼저 간단하게 닉네임이나 이름을 입력하고, 이어서 숫자 코드 6자리를 설정하면 됩니다.\
(코드는 향후 메세지를 수정하거나 삭제할 때 사용되니 꼭 기억해 주세요!)\
그리고 마지막으로 가장 중요한 부분, 축하 메세지를 적은 뒤 등록하시면 됩니다.

<br/>

## 🚀 UI.

### 수정 버튼

<img width="32" alt="1" src="https://github.com/BangBang-e/westrain/assets/107192580/f82e468b-91df-4aad-8fb0-b252086f2ac9">

위 버튼을 클릭 시 아래의 컴포넌트가 렌더링되며, 미리 설정한 숫자코드 6자리를 입력 한 뒤\
메세지를 수정 후 아래의 녹색 '수정' 버튼을 누르면 메세지가 수정됩니다.

![2](https://github.com/BangBang-e/westrain/assets/107192580/ab0ad4a2-c751-4292-87d1-5b689fccc534)

<br/>

### 삭제 버튼

<img width="32" alt="3" src="https://github.com/BangBang-e/westrain/assets/107192580/0436245f-3a6a-4ad9-87c8-7234b9b5196f">

위 버튼을 클릭 시 아래의 컴포넌트가 렌더링되며, 미리 설정한 숫자코드 6자리를 입력 한 뒤\
아래의 적색 '삭제' 버튼을 누르면 메세지가 삭제됩니다.

![4](https://github.com/BangBang-e/westrain/assets/107192580/ba925129-f440-4f57-9223-3ac8258b097a)

<br/>

### 맨 위로 이동
해당 컨트롤러를 클릭 시 스크롤 최상단으로 이동할 수 있습니다.

![scrollTop](https://github.com/BangBang-e/westrain/assets/107192580/c39a17fe-4cf8-4da4-bbbd-515cc1e5f041)

<br/>

### 숨기기/보이기
해당 컨트롤러를 클릭 시 메세지 입력폼을 숨기거나 보이게 할 수 있습니다.

![hide](https://github.com/BangBang-e/westrain/assets/107192580/255f418f-4958-4229-8efe-8de3b824d3ea)

<br/>

------

### `npm run build && firebase deploy`

위 명령어를 통해 앱을 빌드하고 배포할 수 있습니다.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).\
And deployed with [Firebase](https://firebase.google.com/).

