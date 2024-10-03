<p data-ke-size="size18"><b>Q. 언제 사용하나요?</b></p>
<p data-ke-size="size16">A. 재렌더링 사이에 계산 결과를 캐싱할 때</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size18"><b>사용방법</b></p>
<pre id="code_1727940167011" class="javascript" data-ke-language="javascript" data-ke-type="codeblock"><code>import { useMemo } from 'react';

function TodoList({ todos, tab }) {
  const visibleTodos = useMemo(
    () =&gt; filterTodos(todos, tab),  // calculateValue
    [todos, tab]  // dependencies
  );
  // ...
}</code></pre>
<p data-ke-size="size16">* calculateValue: 캐싱하려는 값을 계산한 함수. 순수 함수여야 하며, 인자를 받지 않고 모든 타입의 값을 반환할 수 있어야함. React는 초기 렌더링 중 함수를 호출하며 마지막 렌더링 이후 dependencies가 변경되지 않았을 때, 동일한 값을 반환함. 그렇지 않은 경우 calcultateValue를 호출하고 결과를 반환하며 나중에 재사용할 수 있도록 저장함</p>
<p data-ke-size="size16">* dependencies: calculateValue 코드 내에서 참조된 모든 반응형 값 목록. 반응형 값에는 props, state와 컴포넌트 바디에 직접 선언된 모든 변수와 함수가 포함. 의존성 값 비교는 Object.is 메서드 사용</p>
<p data-ke-size="size16">* 성능 최적화를 위해서만 useMemo를 사용해야함</p>
<p data-ke-size="size16">* <span style="background-color: #ffffff; color: #23272f; text-align: start;">일반적으로 대부분의 계산을 매우 빠르기 때문에 문제가 되지 않음. 그러나 큰 배열을 필터링 혹은 변환하거나 비용이 많이 드는 계산을 수행하는 경우, 데이터가 변경되지 않았다면 계산을 생략하는 것이 좋음(공식문서 예시: 시간 측정 1ms 이상)</span></p>
<p data-ke-size="size16">* 어설픈 최적화는 안하느니만 못하다는 말이 카톡방에 자주 보여서 실무에서 사용해본적은 없는데, 사용해볼 기회가 꼭 있었으면 좋겠음</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">참고</p>
<p data-ke-size="size16"><a href="https://react.dev/reference/react/useMemo" target="_blank" rel="noopener&nbsp;noreferrer">https://react.dev/reference/react/useMemo</a></p>
<figure id="og_1727939836228" contenteditable="false" data-ke-type="opengraph" data-ke-align="alignCenter" data-og-type="website" data-og-title="useMemo &ndash; React" data-og-description="The library for web and native user interfaces" data-og-host="react.dev" data-og-source-url="https://react.dev/reference/react/useMemo" data-og-url="https://react.dev/reference/react/useMemo" data-og-image="https://scrap.kakaocdn.net/dn/ce3QRL/hyXeha8fM5/h7wP9dxuopuZvltqfK90xK/img.png?width=1080&amp;height=567&amp;face=0_0_1080_567,https://scrap.kakaocdn.net/dn/bk0BX9/hyXaylji8H/V4ffRV7pbveHgf6xXHRxR1/img.png?width=1080&amp;height=567&amp;face=0_0_1080_567"><a href="https://react.dev/reference/react/useMemo" target="_blank" rel="noopener" data-source-url="https://react.dev/reference/react/useMemo">
<div class="og-image" style="background-image: url('https://scrap.kakaocdn.net/dn/ce3QRL/hyXeha8fM5/h7wP9dxuopuZvltqfK90xK/img.png?width=1080&amp;height=567&amp;face=0_0_1080_567,https://scrap.kakaocdn.net/dn/bk0BX9/hyXaylji8H/V4ffRV7pbveHgf6xXHRxR1/img.png?width=1080&amp;height=567&amp;face=0_0_1080_567');">&nbsp;</div>
<div class="og-text">
<p class="og-title" data-ke-size="size16">useMemo &ndash; React</p>
<p class="og-desc" data-ke-size="size16">The library for web and native user interfaces</p>
<p class="og-host" data-ke-size="size16">react.dev</p>
</div>
</a></figure>
<p data-ke-size="size16">&nbsp;</p>