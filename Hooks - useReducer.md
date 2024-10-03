<p data-ke-size="size18"><b>Q. 언제 사용하나요?</b></p>
<p data-ke-size="size16">A. state 업데이트 로직을 이벤트 핸들러에서 컴포넌트 외부의 단일함수로 분리할 때</p>
<p data-ke-size="size16">업데이트 로직이 어떻게 동작하는지, 이벤트 핸들러를 통해 무엇이 발생했는지 구현부를 명확히 구분할 수 있음</p>
<p data-ke-size="size16">useState를 사용하는것보다 디버깅, 테스트에서 이점이 있음</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size18"><b>사용방법</b></p>
<pre id="code_1727938718732" class="javascript" data-ke-language="javascript" data-ke-type="codeblock"><code>import { useReducer } from 'react';

function reducer(state, action) {
  if (action.type === 'incremented_age') {
    return {
      age: state.age + 1
    };
  }
  throw Error('Unknown action.');
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { age: 32 });

  return (
    &lt;&gt;
      &lt;button onClick={() =&gt; {
        dispatch({ type: 'incremented_age' })
      }}&gt;
        Increment age
      &lt;/button&gt;
      &lt;p&gt;You are {state.age}.&lt;/p&gt;
    &lt;/&gt;
  );
}</code></pre>
<p data-ke-size="size16">* reducer는 상태가 어떻게 업데이트 되는지 지정하는 리듀서 함수. 반드시 순수 함수여야 하며, state와 action을 인수로 받아야 하고 다음 state를 반환</p>
<p data-ke-size="size16">* state, action에는 모든 데이터 타입이 할당될 수 있음</p>
<p data-ke-size="size16">* useReducer는 2개의 엘리먼트로 구성된 배열을 반환&nbsp; &nbsp; &nbsp; / /&nbsp; &nbsp; &nbsp;[state, dispatch]</p>
<p data-ke-size="size16">* dispatch 함수는 state를 새로운 값으로 업데이트하고 리렌더링을 일으킴</p>
<p data-ke-size="size16">* state는 읽기 전용값으로 state의 객체나 배열을 변경하지말고 reducer에서 새로운 객체를 반환</p>
<p data-ke-size="size16">* 각 action은 데이터 안에서 여러 변경들이 있더라도 하나의 사용자 상호작용을 설명해야함(로그를 명확하게 하여 디버깅에 도움)</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">참고</p>
<p data-ke-size="size16"><a href="https://ko.react.dev/reference/react/useReducer" target="_blank" rel="noopener&nbsp;noreferrer">https://react.dev/reference/react/useReducer</a></p>
<figure id="og_1727938694075" contenteditable="false" data-ke-type="opengraph" data-ke-align="alignCenter" data-og-type="website" data-og-title="useReducer &ndash; React" data-og-description="The library for web and native user interfaces" data-og-host="ko.react.dev" data-og-source-url="https://ko.react.dev/reference/react/useReducer" data-og-url="https://ko.react.dev/reference/react/useReducer" data-og-image="https://scrap.kakaocdn.net/dn/luw4J/hyXedT5XyN/8NLvz1qBU8AO4Teop3LvTK/img.png?width=1080&amp;height=567&amp;face=0_0_1080_567,https://scrap.kakaocdn.net/dn/bai9Or/hyXaFY3gmF/qx6emMzDICP1m04EGJhLY0/img.png?width=1080&amp;height=567&amp;face=0_0_1080_567"><a href="https://ko.react.dev/reference/react/useReducer" target="_blank" rel="noopener" data-source-url="https://ko.react.dev/reference/react/useReducer">
<div class="og-image" style="background-image: url('https://scrap.kakaocdn.net/dn/luw4J/hyXedT5XyN/8NLvz1qBU8AO4Teop3LvTK/img.png?width=1080&amp;height=567&amp;face=0_0_1080_567,https://scrap.kakaocdn.net/dn/bai9Or/hyXaFY3gmF/qx6emMzDICP1m04EGJhLY0/img.png?width=1080&amp;height=567&amp;face=0_0_1080_567');">&nbsp;</div>
<div class="og-text">
<p class="og-title" data-ke-size="size16">useReducer &ndash; React</p>
<p class="og-desc" data-ke-size="size16">The library for web and native user interfaces</p>
<p class="og-host" data-ke-size="size16">ko.react.dev</p>
</div>
</a></figure>
<p data-ke-size="size16"><a href="https://react.dev/learn/extracting-state-logic-into-a-reducer#comparing-usestate-and-usereducer">https://react.dev/learn/extracting-state-logic-into-a-reducer#comparing-usestate-and-usereducer</a></p>
<figure id="og_1727939278547" contenteditable="false" data-ke-type="opengraph" data-ke-align="alignCenter" data-og-type="website" data-og-title="state 로직을 reducer로 작성하기 &ndash; React" data-og-description="The library for web and native user interfaces" data-og-host="ko.react.dev" data-og-source-url="https://ko.react.dev/learn/extracting-state-logic-into-a-reducer#comparing-usestate-and-usereducer" data-og-url="https://ko.react.dev/learn/extracting-state-logic-into-a-reducer" data-og-image="https://scrap.kakaocdn.net/dn/bfL5o9/hyXaFdE1ht/LiPOoRcygFNE1XWcE22hS0/img.png?width=1080&amp;height=567&amp;face=0_0_1080_567,https://scrap.kakaocdn.net/dn/bJK37J/hyXavvnFnV/VCfTVb1sKFUKdsi5l7LSx1/img.png?width=1080&amp;height=567&amp;face=0_0_1080_567"><a href="https://ko.react.dev/learn/extracting-state-logic-into-a-reducer#comparing-usestate-and-usereducer" target="_blank" rel="noopener" data-source-url="https://ko.react.dev/learn/extracting-state-logic-into-a-reducer#comparing-usestate-and-usereducer">
<div class="og-image" style="background-image: url('https://scrap.kakaocdn.net/dn/bfL5o9/hyXaFdE1ht/LiPOoRcygFNE1XWcE22hS0/img.png?width=1080&amp;height=567&amp;face=0_0_1080_567,https://scrap.kakaocdn.net/dn/bJK37J/hyXavvnFnV/VCfTVb1sKFUKdsi5l7LSx1/img.png?width=1080&amp;height=567&amp;face=0_0_1080_567');">&nbsp;</div>
<div class="og-text">
<p class="og-title" data-ke-size="size16">state 로직을 reducer로 작성하기 &ndash; React</p>
<p class="og-desc" data-ke-size="size16">The library for web and native user interfaces</p>
<p class="og-host" data-ke-size="size16">ko.react.dev</p>
</div>
</a></figure>
<p data-ke-size="size16">&nbsp;</p>