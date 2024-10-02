<p data-ke-size="size18"><b>Q. 언제 사용하는가? </b></p>
<p data-ke-size="size16">A. 브라우저가 화면을 다시 그리기전에 요소의 레이아웃을 계산할 필요가 있을때 사용</p>
<p data-ke-size="size16">예시 1. DOM을 조작하는 코드가 있는 경우, 화면이 깜빡거리는 현상 해결</p>
<p data-ke-size="size16">예시 2. 화면이 그려지고나서 요소가 움직이는 것은 사용자에게 좋지 않은 경험을 주기 때문에 미리 계산해서 특정 요소에게 값을 부여해야할 때 사용</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16"><b>사용방법</b></p>
<pre id="code_1727864920295" class="javascript" data-ke-language="javascript" data-ke-type="codeblock"><code>import { useState, useRef, useLayoutEffect } from 'react';

function Box() {
  const ref = useRef(null);
  const [boxHeight, setBoxHeight] = useState(0);

  useLayoutEffect(() =&gt; {
    const { height } = ref.current.getBoundingClientRect();
    setBoxHeight(height);
    
    // do something...
  }, []);
}</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size18"><b>주의사항</b></p>
<p data-ke-size="size16">* 동기적으로 실행되며 브라우저의 성능을 저하할 수 있으니, 꼭 필요한 경우가 아니고서는 사용을 지양</p>
<p data-ke-size="size16">* 모든 state 업데이트에 대해 브라우저가 화면을 다시 그리기 전에 처리하는것을 보장, 렌더링 후 위치와 크기를 계산해서 다시 렌더링하기 때문에 첫 렌더링을 사용자가 모르게 할 수 있으며, 브라우저가 화면을 그리는것을 막음</p>
<p data-ke-size="size16"><span style="font-family: AppleSDGothicNeo-Regular, 'Malgun Gothic', '맑은 고딕', dotum, 돋움, sans-serif;"><span style="background-color: #fcfcff; color: #000000; text-align: start;">* React 18부터는 useEffect에서도 layout과 paint 전에 동기적으로 함수를 실행할 수 있는 <a href="https://react.dev/reference/react-dom/flushSync" target="_blank" rel="noopener">flushSync </a></span><span style="background-color: #fcfcff; color: #000000; text-align: start;">라는 함수가 추가되었다. 공식문서에서도 일반적으로 사용되지 않으며, 성능상 문제가 있을 수 있다고 말하고 있음</span></span></p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">참고</p>
<p data-ke-size="size16"><a href="https://react.dev/reference/react/useLayoutEffect" target="_blank" rel="noopener&nbsp;noreferrer">https://react.dev/reference/react/useLayoutEffect</a></p>
<figure id="og_1727711290856" contenteditable="false" data-ke-type="opengraph" data-ke-align="alignCenter" data-og-type="website" data-og-title="useLayoutEffect &ndash; React" data-og-description="The library for web and native user interfaces" data-og-host="react.dev" data-og-source-url="https://react.dev/reference/react/useLayoutEffect" data-og-url="https://react.dev/reference/react/useLayoutEffect" data-og-image="https://scrap.kakaocdn.net/dn/jZTP6/hyXawf2D9e/0E4DSg32w7RZa7PHzKzNe0/img.png?width=1080&amp;height=567&amp;face=0_0_1080_567,https://scrap.kakaocdn.net/dn/LyH0N/hyXazRgoxb/2qm7q935duZzesB0zISMtK/img.png?width=1080&amp;height=567&amp;face=0_0_1080_567"><a href="https://react.dev/reference/react/useLayoutEffect" target="_blank" rel="noopener" data-source-url="https://react.dev/reference/react/useLayoutEffect">
<div class="og-image" style="background-image: url('https://scrap.kakaocdn.net/dn/jZTP6/hyXawf2D9e/0E4DSg32w7RZa7PHzKzNe0/img.png?width=1080&amp;height=567&amp;face=0_0_1080_567,https://scrap.kakaocdn.net/dn/LyH0N/hyXazRgoxb/2qm7q935duZzesB0zISMtK/img.png?width=1080&amp;height=567&amp;face=0_0_1080_567');">&nbsp;</div>
<div class="og-text">
<p class="og-title" data-ke-size="size16">useLayoutEffect &ndash; React</p>
<p class="og-desc" data-ke-size="size16">The library for web and native user interfaces</p>
<p class="og-host" data-ke-size="size16">react.dev</p>
</div>
</a></figure>
<p data-ke-size="size16"><a href="https://velog.io/@imphj3/React-useLayoutEffect-vs-useEffect-%EC%82%AC%EC%9A%A9%EB%B2%95" target="_blank" rel="noopener&nbsp;noreferrer">https://velog.io/@imphj3/React-useLayoutEffect-vs-useEffect-%EC%82%AC%EC%9A%A9%EB%B2%95</a></p>
<figure id="og_1727711313926" contenteditable="false" data-ke-type="opengraph" data-ke-align="alignCenter" data-og-type="article" data-og-title="[React] useLayoutEffect vs useEffect, 사용법" data-og-description="리액트로 개발을 경험해본 사람이라면 useEffect 훅에 대해 잘 알고 있을 것이다. 이번 글에서는 useEffect과 유사한 useLayoutEffect 훅에 대해 작성해보고자 한다.useEffect과 useLayoutEffect에 대해 알아보기 " data-og-host="velog.io" data-og-source-url="https://velog.io/@imphj3/React-useLayoutEffect-vs-useEffect-%EC%82%AC%EC%9A%A9%EB%B2%95" data-og-url="https://velog.io/@imphj3/React-useLayoutEffect-vs-useEffect-사용법" data-og-image="https://scrap.kakaocdn.net/dn/bii6Iv/hyXaCN3yJX/uKxcNC3iKBYkziRxOfkRn1/img.png?width=761&amp;height=969&amp;face=0_0_761_969,https://scrap.kakaocdn.net/dn/cB4KIp/hyXauoXqJe/UKw72uoCnorAYdjF9zvvj1/img.png?width=761&amp;height=969&amp;face=0_0_761_969,https://scrap.kakaocdn.net/dn/d2h3Bl/hyXav9grs3/gs81iWk0Mf66pXv4zBKml1/img.png?width=666&amp;height=1440&amp;face=0_0_666_1440"><a href="https://velog.io/@imphj3/React-useLayoutEffect-vs-useEffect-%EC%82%AC%EC%9A%A9%EB%B2%95" target="_blank" rel="noopener" data-source-url="https://velog.io/@imphj3/React-useLayoutEffect-vs-useEffect-%EC%82%AC%EC%9A%A9%EB%B2%95">
<div class="og-image" style="background-image: url('https://scrap.kakaocdn.net/dn/bii6Iv/hyXaCN3yJX/uKxcNC3iKBYkziRxOfkRn1/img.png?width=761&amp;height=969&amp;face=0_0_761_969,https://scrap.kakaocdn.net/dn/cB4KIp/hyXauoXqJe/UKw72uoCnorAYdjF9zvvj1/img.png?width=761&amp;height=969&amp;face=0_0_761_969,https://scrap.kakaocdn.net/dn/d2h3Bl/hyXav9grs3/gs81iWk0Mf66pXv4zBKml1/img.png?width=666&amp;height=1440&amp;face=0_0_666_1440');">&nbsp;</div>
<div class="og-text">
<p class="og-title" data-ke-size="size16">[React] useLayoutEffect vs useEffect, 사용법</p>
<p class="og-desc" data-ke-size="size16">리액트로 개발을 경험해본 사람이라면 useEffect 훅에 대해 잘 알고 있을 것이다. 이번 글에서는 useEffect과 유사한 useLayoutEffect 훅에 대해 작성해보고자 한다.useEffect과 useLayoutEffect에 대해 알아보기</p>
<p class="og-host" data-ke-size="size16">velog.io</p>
</div>
</a></figure>
<p data-ke-size="size16"><a href="https://medium.com/@jnso5072/react-useeffect-%EC%99%80-uselayouteffect-%EC%9D%98-%EC%B0%A8%EC%9D%B4%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C-e1a13adf1cd5" target="_blank" rel="noopener&nbsp;noreferrer">https://medium.com/@jnso5072/react-useeffect-%EC%99%80-uselayouteffect-%EC%9D%98-%EC%B0%A8%EC%9D%B4%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C-e1a13adf1cd5</a></p>
<p data-ke-size="size16">&nbsp;</p>