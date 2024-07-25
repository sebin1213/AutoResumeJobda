# Jobda 이력서 자동완성 확장 프로그램

**Jobda 이력서 자동완성 확장 프로그램**은 JOBDA에서 제공하는 SaaS를 사용하는 기업의 이력서 작성 과정의 불편함을 지원하기 위해 만든 프로그램입니다. 이 프로그램은 추가적인 소프트웨어 설치 없이 HTML과 브라우저 확장 프로그램만으로 구성되어 있습니다.

## 사용 가능한 사이트

이 확장 프로그램은 다음의 URL에서 이력서 작성 시 사용할 수 있습니다:

```plaintext
//URL
기업명.recruiter.co.kr/mrs2/applicant/resume/writeResume
```

## 사이트 예시

아래 이미지는 프로그램을 사용할 수 있는 웹사이트의 예시입니다:

<div style="display: flex; justify-content: space-between;">
  <img src="https://github.com/user-attachments/assets/7f7552fd-1794-41ad-8f0a-5c9b50ea8a53" style="width: 45%;"/>
  <img src="https://github.com/user-attachments/assets/18f31338-0dbd-430d-8ad3-94b9fb473080" style="width: 45%;"/>
</div>

## 구성 요소

이 프로젝트는 두 가지 주요 구성 요소로 이루어져 있습니다:

1. **`autoResumeJobda.html`**: 이력서 업로드용 HTML 파일
2. **`autoResumeJobdaChrome`**: Chrome 브라우저 확장 프로그램

## 사용 방법

### 0. 다운로드 
1. **좌측 상단 code버튼을 누르고 다운로드 클릭**:
![image](https://github.com/user-attachments/assets/a2392be0-55f2-493e-bd55-49d70cbd5893)


### 1. Chrome 확장 프로그램 등록

1. **Chrome 브라우저에서 확장 프로그램 설치**:
   - Chrome 브라우저를 열고, 주소창에 `chrome://extensions/`를 입력하여 확장 프로그램 페이지로 이동합니다.
   - 우측 상단의 "압축 해제된 확장 프로그램 로드" 버튼을 클릭합니다.
   - 다운로드한 `autoResumeJobdaChrome` 폴더를 선택하여 업로드합니다. (이때 압축파일이 아닌 폴더를 업로드하셔야 합니다.)
![Chrome 확장 프로그램 설치](https://github.com/user-attachments/assets/97504e91-ca1a-49b0-8440-b4b38d4bb4dc)
아래와 같이 autoResumeJobdaChrome 해당 폴더 경로로 업로드합니다. 
![image](https://github.com/user-attachments/assets/80c5caf9-4d1b-4513-9584-fdca357b30f8)


### 2. 이력서 등록

1. **이력서 등록**:
   - `autoResumeJobda` 폴더 내의 `autoResumeJobda_Y_Sevin.html` 파일을 열고, 제공된 웹사이트에 접속하여 정보를 입력합니다.
   - 입력된 데이터는 브라우저의 로컬 저장소에 저장됩니다.

2. **저장**
   - 임시저장버튼 또는 다음 버튼을 누르면 데이터가 저장됩니다.
![image](https://github.com/user-attachments/assets/ce032c92-8f22-48a2-8883-9c26062233cb)


     

### 3. 사용

1. **확장 프로그램 사용**:
   - `autoResumeJobda_Y_Sevin.html`을 통해 데이터를 저장했다면, 이력서 홈페이지에 데이터를 불어올 수 있습니다.
   - 설치된 확장 프로그램 아이콘을 클릭하면 팝업창이 나타납니다. 여기서 "이력서 불러오기" 버튼을 클릭하여 저장된 이력서를 불러올 수 있습니다.
     
![확장 프로그램 팝업창](https://github.com/user-attachments/assets/97909805-2329-4384-a632-ccc7fb111f22)


## 주의사항
- 이 도구는 개인 사용을 위해 개발되었으므로, 일부 오류가 발생할 수 있습니다.
- 이력서를 등록한 후, 채용 페이지에 데이터가 정확하게 저장되었는지 확인하는 것을 권장합니다.
- 실제 JOBDA 이력서 사이트의 CSS를 그대로 가져왔지만, 구조적 다름이 존재할 수 있습니다.
- 학교검색이나 자격증과 같이 외부 API를 사용하는 부분은 자동완성에서 제외되어 있습니다. 실제 지원 사이트는 해당 값을 필수로 입력해야하기에 직접 입력하지 않는다면 나머지 입력 부분도 삭제됩니다.
![image](https://github.com/user-attachments/assets/7ba61132-dad2-4409-9911-d92dd48f8e4e)
