<p data-ke-size="size18"><b>Q. 언제 사용하나요?</b></p>
<p data-ke-size="size16">A. 트리 깊은곳에 데이터를 전달할 때 props drilling 회피를 위해 사용</p>
<p data-ke-size="size16">전역으로 사용하는 데이터를 일일히 전달해주는 것이 아닌 상위 컴포넌트로부터 필요한 컴포넌트에게 쉽게 공유할 수 있어 편리함<span style="background-color: #f8f9fa; color: #212529; text-align: start;"></span></p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16"><b>사용방법</b></p>
<pre id="code_1727935779256" class="javascript" data-ke-language="javascript" data-ke-type="codeblock"><code>import { createContext, useContext, useState } from 'react';

const CurrentUserContext = createContext(null);

export default function MyApp() {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    &lt;CurrentUserContext.Provider
      value={{
        currentUser,
        setCurrentUser
      }}
    &gt;
      &lt;Form /&gt;
    &lt;/CurrentUserContext.Provider&gt;
  );
}

function Form({ children }) {
  return (
    &lt;Panel title="Welcome"&gt;
      &lt;LoginButton /&gt;
    &lt;/Panel&gt;
  );
}

function LoginButton() {
  const {
    currentUser,
    setCurrentUser
  } = useContext(CurrentUserContext);

  if (currentUser !== null) {
    return &lt;p&gt;You logged in as {currentUser.name}({currentUser.age}).&lt;/p&gt;;
  }

  return (
    &lt;Button onClick={() =&gt; {
      setCurrentUser({ name: 'Seo Sewon', age: 32 })
    }}&gt;Log in as Advika&lt;/Button&gt;
  );
}

function Panel({ title, children }) {
  return (
    &lt;section className="panel"&gt;
      &lt;h1&gt;{title}&lt;/h1&gt;
      {children}
    &lt;/section&gt;
  )
}

function Button({ children, onClick }) {
  return (
    &lt;button className="button" onClick={onClick}&gt;
      {children}
    &lt;/button&gt;
  );
}</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">* useContext는 전달한 context에 대한 value를 반환함. context 값을 결정하기 위해 React는 컴포넌트 트리를 검색하고 특정 context에 대해 상위에서 가장 가까운 context provider를 찾음</p>
<p data-ke-size="size16">* provider가 없으면 해당 컨텍스트에 대해 createContext에 전달한 defaultValue가 값이되며, 반환된 값은 항상 최신 상태</p>
<p data-ke-size="size16">* Context가 변경되면 React는 Context를 사용중인 컴포넌트를 다시 렌더링</p>
<p data-ke-size="size16">* 컴포넌트 내의 useContext() 호출은 동일한 컴포넌트에서 반환된 Provider에 영향을 받지 않음. Provider는 useContext()를 호출하는 컴포넌트보다 상위에 배치되어야 함</p>
<p data-ke-size="size16">* Context 값의 변경은 Object.is 메서드로 비교되며, value를 받는 provider로부터 특정 context를 사용하는 모든 자식들을 자동으로 리렌더링함</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16"><b>Context API vs Redux</b></p>
<ol style="list-style-type: decimal;" data-ke-list-type="decimal">
<li>둘은 서로 다른 목적을 가진 도구</li>
<li>Context는 종속성 주입의 한 형태로 상태를 관리하지 않으며 상태관리 도구가 아님. useState와 함께 사용하여 상태관리를 편리하게 할 수 있도록 도와줌</li>
<li>props drilling을 피하기 위해 Context를 사용함. 복잡한 상태관리가 필요한 경우에도 사용함</li>
<li>Redux는 어플리케이션에 대한 중앙 상태 저장소 역할을 수행하며 액션이라는 이벤트를 사용해 어플리케이션의 상태를 예측 가능한 방식으로 업데이트하기 위한 패턴 또는 라이브러리임. <span style="color: #333333; text-align: left;">Redux는 다음과 같은 경우 사용함.</span></li>
</ol>
<ul style="list-style-type: disc; background-color: #ffffff; color: #000000; text-align: start;" data-ke-list-type="disc">
<li id="b3fe" style="list-style-type: disc; color: #242424;" data-selectable-paragraph="">UI가 앱의 상태에 따라 크게 바뀐다.</li>
<li id="6758" style="list-style-type: disc; color: #242424;" data-selectable-paragraph="">상태가 항상 선형으로, 일방향으로 흐르지는 않는다.</li>
<li id="7963" style="list-style-type: disc; color: #242424;" data-selectable-paragraph="">일반적으로 사용자가 앱을 사용하면서 여러 상태 업데이트와 연관된다.</li>
<li id="c6be" style="list-style-type: disc; color: #242424;" data-selectable-paragraph="">관련 없는 여러 컴포넌트가 같은 방식으로 상태를 업데이트한다.</li>
<li id="dbc0" style="list-style-type: disc; color: #242424;" data-selectable-paragraph="">상태 트리가 단순하지 않다.</li>
<li id="5fbc" style="list-style-type: disc; color: #242424;" data-selectable-paragraph="">상태가 여러 다른 방식으로 업데이트된다.</li>
<li id="f7f8" style="list-style-type: disc; color: #242424;" data-selectable-paragraph="">사용자 액션을 되돌릴 필요가 있다.</li>
</ul>
<p data-ke-size="size16">Redux에 대한 더 자세한 내용은 따로 포스팅 진행예정</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">참고</p>
<p data-ke-size="size16"><a href="https://ko.react.dev/reference/react/useContext" target="_blank" rel="noopener&nbsp;noreferrer">https://react.dev/reference/react/useContext</a></p>
<figure id="og_1727935348965" contenteditable="false" data-ke-type="opengraph" data-ke-align="alignCenter" data-og-type="website" data-og-title="useContext &ndash; React" data-og-description="The library for web and native user interfaces" data-og-host="ko.react.dev" data-og-source-url="https://ko.react.dev/reference/react/useContext" data-og-url="https://ko.react.dev/reference/react/useContext" data-og-image="https://scrap.kakaocdn.net/dn/b9scbg/hyXd5Phite/KkyaWOApCkKAVkOFZEak5K/img.png?width=1080&amp;height=567&amp;face=0_0_1080_567,https://scrap.kakaocdn.net/dn/dklMiu/hyXaAcj4Nw/t5BE8GJtvdkjscefaK4xEk/img.png?width=1080&amp;height=567&amp;face=0_0_1080_567"><a href="https://ko.react.dev/reference/react/useContext" target="_blank" rel="noopener" data-source-url="https://ko.react.dev/reference/react/useContext">
<div class="og-image" style="background-image: url('https://scrap.kakaocdn.net/dn/b9scbg/hyXd5Phite/KkyaWOApCkKAVkOFZEak5K/img.png?width=1080&amp;height=567&amp;face=0_0_1080_567,https://scrap.kakaocdn.net/dn/dklMiu/hyXaAcj4Nw/t5BE8GJtvdkjscefaK4xEk/img.png?width=1080&amp;height=567&amp;face=0_0_1080_567');">&nbsp;</div>
<div class="og-text">
<p class="og-title" data-ke-size="size16">useContext &ndash; React</p>
<p class="og-desc" data-ke-size="size16">The library for web and native user interfaces</p>
<p class="og-host" data-ke-size="size16">ko.react.dev</p>
</div>
</a></figure>
<p data-ke-size="size16"><a href="https://medium.com/lunit/redux%EA%B0%80-%ED%95%84%EC%9A%94%ED%95%98%EB%8B%A4%EB%8A%94-%EA%B2%83%EC%9D%84-%EC%96%B8%EC%A0%9C-%EC%95%8C-%EC%88%98-%EC%9E%88%EB%82%98%EC%9A%94-426a148da64d" target="_blank" rel="noopener&nbsp;noreferrer">https://medium.com/lunit/redux%EA%B0%80-%ED%95%84%EC%9A%94%ED%95%98%EB%8B%A4%EB%8A%94-%EA%B2%83%EC%9D%84-%EC%96%B8%EC%A0%9C-%EC%95%8C-%EC%88%98-%EC%9E%88%EB%82%98%EC%9A%94-426a148da64d</a></p>
<figure id="og_1727937542680" contenteditable="false" data-ke-type="opengraph" data-ke-align="alignCenter" data-og-type="article" data-og-title="Redux가 필요하다는 것을 언제 알 수 있나요?" data-og-description="이 글은 Simon Schwartz의 &quot;When do I know I&rsquo;m ready for Redux?&quot;를 번역한 글입니다." data-og-host="medium.com" data-og-source-url="https://medium.com/lunit/redux%EA%B0%80-%ED%95%84%EC%9A%94%ED%95%98%EB%8B%A4%EB%8A%94-%EA%B2%83%EC%9D%84-%EC%96%B8%EC%A0%9C-%EC%95%8C-%EC%88%98-%EC%9E%88%EB%82%98%EC%9A%94-426a148da64d" data-og-url="https://medium.com/lunit/redux%EA%B0%80-%ED%95%84%EC%9A%94%ED%95%98%EB%8B%A4%EB%8A%94-%EA%B2%83%EC%9D%84-%EC%96%B8%EC%A0%9C-%EC%95%8C-%EC%88%98-%EC%9E%88%EB%82%98%EC%9A%94-426a148da64d" data-og-image="https://scrap.kakaocdn.net/dn/cXGZBR/hyXeiA6iUP/oPPfHPn9xN46RPOce0wGPk/img.gif?width=700&amp;height=475&amp;face=0_0_700_475"><a href="https://medium.com/lunit/redux%EA%B0%80-%ED%95%84%EC%9A%94%ED%95%98%EB%8B%A4%EB%8A%94-%EA%B2%83%EC%9D%84-%EC%96%B8%EC%A0%9C-%EC%95%8C-%EC%88%98-%EC%9E%88%EB%82%98%EC%9A%94-426a148da64d" target="_blank" rel="noopener" data-source-url="https://medium.com/lunit/redux%EA%B0%80-%ED%95%84%EC%9A%94%ED%95%98%EB%8B%A4%EB%8A%94-%EA%B2%83%EC%9D%84-%EC%96%B8%EC%A0%9C-%EC%95%8C-%EC%88%98-%EC%9E%88%EB%82%98%EC%9A%94-426a148da64d">
<div class="og-image" style="background-image: url('https://scrap.kakaocdn.net/dn/cXGZBR/hyXeiA6iUP/oPPfHPn9xN46RPOce0wGPk/img.gif?width=700&amp;height=475&amp;face=0_0_700_475');">&nbsp;</div>
<div class="og-text">
<p class="og-title" data-ke-size="size16">Redux가 필요하다는 것을 언제 알 수 있나요?</p>
<p class="og-desc" data-ke-size="size16">이 글은 Simon Schwartz의 "When do I know I&rsquo;m ready for Redux?"를 번역한 글입니다.</p>
<p class="og-host" data-ke-size="size16">medium.com</p>
</div>
</a></figure>
<p data-ke-size="size16">&nbsp;</p>