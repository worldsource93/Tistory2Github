<p data-ke-size="size18"><b>Q. 언제 사용하나요?</b></p>
<p data-ke-size="size16">A.ref를 변경해도 리렌더링 하지않기 때문에 컴포넌트의 시각적 출력에 영향을 미치지 않는 정보를 저장하는데 적합</p>
<p data-ke-size="size16">DOM을 조작하는 것이 일반적인 사용방법이며, 나의 경우 지도를 다룰 때 많이 사용함. 주로 사용했던 지도 라이브러리는 OpenLayers였고 해당 지도 라이브러리는 canvas를 사용하며 맵 생성 시 JavaScript 객체를 반환한다. 해당 맵 객체에 담겨지는 레이어 객체를 만들고 레이어 핸들링 시 useRef에 저장해서&nbsp; 사용</p>
<p data-ke-size="size16">지도를 생성하는 경우, 값비싼 객체를 반복해서 생성하는 것을 방지하기 위해 null로 초기하고 아래 예시와 같이 사용할 수 있음</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size18"><b>사용방법</b></p>
<pre id="code_1727927221699" class="javascript" data-ke-language="javascript" data-ke-type="codeblock"><code>import { useRef } from 'react';
import { Map, View } from 'ol';

function MapComponent(props) {

  const { id, view, layers, controls, interactions } = props; 
  const mapRef = useRef(null);
  const layersRef = useRef(null);
  
  if(mapRef.current === null) {
    
    layersRef.current = layers;
      
    mapRef.current = new Map({
      target: id,
      view,
      layers,
      controls,
      interactions,
    });
  }
  
  return &lt;div id={id} /&gt;
}</code></pre>
<p data-ke-size="size16">* 렌더링중 ref.current를 쓰거나 읽지말것</p>
<p data-ke-size="size16">* React는 컴포넌트 본문이 순수 함수처럼 동작하기를 기대하며 렌더링중 ref를 읽거나 쓰면 이러한 기대가 깨짐</p>
<p data-ke-size="size16">* 렌더링 중 무언가를 읽거나 써야한다면 대신 state를 사용해야함</p>
<p data-ke-size="size16">* 이벤트 핸들러나 Effect에서 ref를 읽거나 쓸 수 있음</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">참고</p>
<p data-ke-size="size16"><a href="https://react.dev/reference/react/useRef" target="_blank" rel="noopener&nbsp;noreferrer">https://react.dev/reference/react/useRef</a></p>
<figure id="og_1727926682649" contenteditable="false" data-ke-type="opengraph" data-ke-align="alignCenter" data-og-type="website" data-og-title="useRef &ndash; React" data-og-description="The library for web and native user interfaces" data-og-host="react.dev" data-og-source-url="https://react.dev/reference/react/useRef" data-og-url="https://react.dev/reference/react/useRef" data-og-image="https://scrap.kakaocdn.net/dn/WrsWn/hyXd6HpptZ/wPkcNIeo1w64mZdZEOWQiK/img.png?width=1080&amp;height=567&amp;face=0_0_1080_567,https://scrap.kakaocdn.net/dn/h1kZx/hyXaBvyEHn/KmFQr5uJMj3CzKw9m3hbQ1/img.png?width=1080&amp;height=567&amp;face=0_0_1080_567"><a href="https://react.dev/reference/react/useRef" target="_blank" rel="noopener" data-source-url="https://react.dev/reference/react/useRef">
<div class="og-image" style="background-image: url('https://scrap.kakaocdn.net/dn/WrsWn/hyXd6HpptZ/wPkcNIeo1w64mZdZEOWQiK/img.png?width=1080&amp;height=567&amp;face=0_0_1080_567,https://scrap.kakaocdn.net/dn/h1kZx/hyXaBvyEHn/KmFQr5uJMj3CzKw9m3hbQ1/img.png?width=1080&amp;height=567&amp;face=0_0_1080_567');">&nbsp;</div>
<div class="og-text">
<p class="og-title" data-ke-size="size16">useRef &ndash; React</p>
<p class="og-desc" data-ke-size="size16">The library for web and native user interfaces</p>
<p class="og-host" data-ke-size="size16">react.dev</p>
</div>
</a></figure>
<p data-ke-size="size16">&nbsp;</p>