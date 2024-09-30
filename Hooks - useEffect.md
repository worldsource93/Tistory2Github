<p data-ke-size="size18"><b>useEffect 사용방법</b></p>
<pre id="code_1727708106859" class="javascript" data-ke-language="javascript" data-ke-type="codeblock"><code>useEffect(( ) =&gt; {
	// 1. do anything...
    
    return () =&gt; {
		// 2. clean up function
	
    }
}, []); // 3. dependencies</code></pre>
<p data-ke-size="size16">1. useEffect Hook 내부에 로직 작성</p>
<p data-ke-size="size16">2. clean up function(정리함수) 반환가능(선택사항)</p>
<ul style="list-style-type: disc;" data-ke-list-type="disc">
<li>의존성 변화에 따른 리렌더링시 이전 렌더링에서 사용된 값으로 정리함수를 실행</li>
<li>컴포넌트가 DOM에서 제거됐을 때 실행</li>
</ul>
<p data-ke-size="size16">3. dependencies(의존성 배열)는 3가지 방식을 사용가능</p>
<ul style="list-style-type: disc;" data-ke-list-type="disc">
<li>의존성 배열 전달: 초기 렌더링 후, 그리고 의존성 값 변경에 따른 리렌더링 시 실행</li>
<li>빈 의존성 배열: 초기 렌더링 후, 한번만 실행</li>
<li>의존성 배열 생략: 모든 렌더링, 리렌더링 시 실행</li>
</ul>
<hr contenteditable="false" data-ke-type="horizontalRule" data-ke-style="style5" />
<p data-ke-size="size16">* useEffect 내부 effect는 paint 이후 비동기로 실행</p>
<p data-ke-size="size16">* 의존성 값에 대한 비교는 Object.is() 메서드를 사용</p>
<p data-ke-size="size16"><span style="background-color: #ffffff; color: #212529; text-align: start;">* 자식 컴포넌트 렌더링 이후 부모 컴포넌트가 렌더링하기 때문에<span>&nbsp;</span></span>자식 컴포넌트의 setup 함수들이 부모 컴포넌트보다 먼저 실행</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">참고</p>
<p data-ke-size="size16"><a href="https://react.dev/reference/react/useEffect" target="_blank" rel="noopener&nbsp;noreferrer">https://react.dev/reference/react/useEffect</a></p>
<figure id="og_1727709603165" contenteditable="false" data-ke-type="opengraph" data-ke-align="alignCenter" data-og-type="website" data-og-title="useEffect &ndash; React" data-og-description="The library for web and native user interfaces" data-og-host="react.dev" data-og-source-url="https://react.dev/reference/react/useEffect" data-og-url="https://react.dev/reference/react/useEffect" data-og-image="https://scrap.kakaocdn.net/dn/by5l6e/hyXaydO5vq/pzpQB9wx5D17U6m29hQbz1/img.png?width=1080&amp;height=567&amp;face=0_0_1080_567,https://scrap.kakaocdn.net/dn/rTlhv/hyXauP1zdd/vaYD3Nk2JO8Vgz3jQe2TKK/img.png?width=1080&amp;height=567&amp;face=0_0_1080_567"><a href="https://react.dev/reference/react/useEffect" target="_blank" rel="noopener" data-source-url="https://react.dev/reference/react/useEffect">
<div class="og-image" style="background-image: url('https://scrap.kakaocdn.net/dn/by5l6e/hyXaydO5vq/pzpQB9wx5D17U6m29hQbz1/img.png?width=1080&amp;height=567&amp;face=0_0_1080_567,https://scrap.kakaocdn.net/dn/rTlhv/hyXauP1zdd/vaYD3Nk2JO8Vgz3jQe2TKK/img.png?width=1080&amp;height=567&amp;face=0_0_1080_567');">&nbsp;</div>
<div class="og-text">
<p class="og-title" data-ke-size="size16">useEffect &ndash; React</p>
<p class="og-desc" data-ke-size="size16">The library for web and native user interfaces</p>
<p class="og-host" data-ke-size="size16">react.dev</p>
</div>
</a></figure>
<p data-ke-size="size16"><a href="https://velog.io/@arthur/%EB%B2%88%EC%97%AD-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%A0%8C%EB%8D%94%EB%A7%81-%EB%8F%99%EC%9E%91%EC%9D%98-%EA%B1%B0%EC%9D%98-%EC%99%84%EB%B2%BD%ED%95%9C-%EA%B0%80%EC%9D%B4%EB%93%9C-A-Mostly-Complete-Guide-to-React-Rendering-Behavior" target="_blank" rel="noopener&nbsp;noreferrer">https://velog.io/@arthur/%EB%B2%88%EC%97%AD-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%A0%8C%EB%8D%94%EB%A7%81-%EB%8F%99%EC%9E%91%EC%9D%98-%EA%B1%B0%EC%9D%98-%EC%99%84%EB%B2%BD%ED%95%9C-%EA%B0%80%EC%9D%B4%EB%93%9C-A-Mostly-Complete-Guide-to-React-Rendering-Behavior</a></p>
<figure id="og_1727709846667" contenteditable="false" data-ke-type="opengraph" data-ke-align="alignCenter" data-og-type="article" data-og-title="[번역] 리액트 렌더링 동작의 (거의) 완벽한 가이드 [A (Mostly) Complete Guide to React Rendering Behavior]" data-og-description="[번역] 리액트 렌더링 동작의 (거의) 완벽한 가이드" data-og-host="velog.io" data-og-source-url="https://velog.io/@arthur/%EB%B2%88%EC%97%AD-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%A0%8C%EB%8D%94%EB%A7%81-%EB%8F%99%EC%9E%91%EC%9D%98-%EA%B1%B0%EC%9D%98-%EC%99%84%EB%B2%BD%ED%95%9C-%EA%B0%80%EC%9D%B4%EB%93%9C-A-Mostly-Complete-Guide-to-React-Rendering-Behavior" data-og-url="https://velog.io/@arthur/번역-리액트-렌더링-동작의-거의-완벽한-가이드-A-Mostly-Complete-Guide-to-React-Rendering-Behavior" data-og-image="https://scrap.kakaocdn.net/dn/baSo1U/hyXaxTvpP4/wgYsVe3MkLhrqaaFDKN2mk/img.png?width=700&amp;height=350&amp;face=0_0_700_350,https://scrap.kakaocdn.net/dn/bsCLkI/hyXaJ7tUCG/NHYkRKC56QwZf5jvzl8VB0/img.png?width=700&amp;height=350&amp;face=0_0_700_350,https://scrap.kakaocdn.net/dn/exVgAV/hyXaGJGIto/EjX9eMrDXerIokSFHOgBZ1/img.png?width=700&amp;height=350&amp;face=0_0_700_350"><a href="https://velog.io/@arthur/%EB%B2%88%EC%97%AD-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%A0%8C%EB%8D%94%EB%A7%81-%EB%8F%99%EC%9E%91%EC%9D%98-%EA%B1%B0%EC%9D%98-%EC%99%84%EB%B2%BD%ED%95%9C-%EA%B0%80%EC%9D%B4%EB%93%9C-A-Mostly-Complete-Guide-to-React-Rendering-Behavior" target="_blank" rel="noopener" data-source-url="https://velog.io/@arthur/%EB%B2%88%EC%97%AD-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%A0%8C%EB%8D%94%EB%A7%81-%EB%8F%99%EC%9E%91%EC%9D%98-%EA%B1%B0%EC%9D%98-%EC%99%84%EB%B2%BD%ED%95%9C-%EA%B0%80%EC%9D%B4%EB%93%9C-A-Mostly-Complete-Guide-to-React-Rendering-Behavior">
<div class="og-image" style="background-image: url('https://scrap.kakaocdn.net/dn/baSo1U/hyXaxTvpP4/wgYsVe3MkLhrqaaFDKN2mk/img.png?width=700&amp;height=350&amp;face=0_0_700_350,https://scrap.kakaocdn.net/dn/bsCLkI/hyXaJ7tUCG/NHYkRKC56QwZf5jvzl8VB0/img.png?width=700&amp;height=350&amp;face=0_0_700_350,https://scrap.kakaocdn.net/dn/exVgAV/hyXaGJGIto/EjX9eMrDXerIokSFHOgBZ1/img.png?width=700&amp;height=350&amp;face=0_0_700_350');">&nbsp;</div>
<div class="og-text">
<p class="og-title" data-ke-size="size16">[번역] 리액트 렌더링 동작의 (거의) 완벽한 가이드 [A (Mostly) Complete Guide to React Rendering Behavior]</p>
<p class="og-desc" data-ke-size="size16">[번역] 리액트 렌더링 동작의 (거의) 완벽한 가이드</p>
<p class="og-host" data-ke-size="size16">velog.io</p>
</div>
</a></figure>
<p data-ke-size="size16"><a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/is" target="_blank" rel="noopener&nbsp;noreferrer">https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/is</a></p>
<figure id="og_1727710378108" contenteditable="false" data-ke-type="opengraph" data-ke-align="alignCenter" data-og-type="website" data-og-title="Object.is() - JavaScript | MDN" data-og-description="Object.is() 정적 메서드는 두 값이 같은 값인지 결정합니다." data-og-host="developer.mozilla.org" data-og-source-url="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/is" data-og-url="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/is" data-og-image="https://scrap.kakaocdn.net/dn/TvcoL/hyXatQ8iZR/hmqBojGyxeQTTezPneqBm0/img.png?width=1920&amp;height=1080&amp;face=0_0_1920_1080"><a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/is" target="_blank" rel="noopener" data-source-url="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/is">
<div class="og-image" style="background-image: url('https://scrap.kakaocdn.net/dn/TvcoL/hyXatQ8iZR/hmqBojGyxeQTTezPneqBm0/img.png?width=1920&amp;height=1080&amp;face=0_0_1920_1080');">&nbsp;</div>
<div class="og-text">
<p class="og-title" data-ke-size="size16">Object.is() - JavaScript | MDN</p>
<p class="og-desc" data-ke-size="size16">Object.is() 정적 메서드는 두 값이 같은 값인지 결정합니다.</p>
<p class="og-host" data-ke-size="size16">developer.mozilla.org</p>
</div>
</a></figure>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">&nbsp;</p>