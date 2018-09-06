.git              깃의 로컬저장소
dist/             서버 JS의 배포파일 폴더
es6/              서버 JS의 소스코드 폴더
public/dist/      브라우저 JS의 배포파일 폴더
public/es6/       브라우저 JS의 소스코드 폴더
.gitignore        깃 관리 제외대상 설정파일
package.json      프로젝트 정보, 디펜던시 설정파일
README.md         프로젝트 설명파일

서버 JS: Node 사용하는 컴파일러가 컴파일해서 실행한다.
브라우저 JS: 브라우저 JS 컴파일러가 컴파일해서 실행한다.

es6 폴더에 있는 ES6 코드 ==트랜스파일링==> ES5 코드로 바꾼다음
dist 폴더에 생성한다.

public/es6/ ==트랜스파일링==> ES5 코드 public/dist/


```
C:\Users\top\Documents\권병준\java\html\work\p64>npm i --save-dev babel-preset-es2015
npm WARN deprecated babel-preset-es2015@6.24.1: 🙌  Thanks for using Babel: we recommend using babel-preset-env now: please read babeljs.io/env to update!
npm WARN p64@1.0.0 No repository field.

+ babel-preset-es2015@6.24.1
added 66 packages in 8.031s
```

# package.json
npm i babel-preset-es2015 --save-dev
npm i gulp [--save]
```
"devDependencies": {
  "babel-preset-es2015": "^6.24.1"
},
"dependencies": {
  "gulp": "^3.9.1"
}
```
dependencies : 사용자에게 서비스할 때 필요한 기능
devDependencies : 개발자가 개발할 때 필요한 기능 (--save-dev명령어 붙이면 일로)

책에는 언급이 없지만 다음 설치가 필요하다.
npm i gulp-babel --save-dev
npm i --save-dev @babel/core

* JavaScript 컴파일러가 하나가 아니다.
* 기술은 버전에 따라 설정이 바뀝니다.

package.json 디펜던시 버전을 수동으로 바꾼다음 다음 명령을 수행하면
다시 재 설치되거나 사용하지 않는 것이 삭제됩니다.
```
npm install
```

* 버전관리는 중요하다. 뭔가 안된다면 버전을 꼭 확인하자