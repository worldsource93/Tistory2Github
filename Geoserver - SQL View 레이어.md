<p data-ke-size="size16"><b>Q. SQL View를 언제, 왜 사용하나요?</b></p>
<p data-ke-size="size16">A. 레이어를 호출할 때 쿼리 파라미터를 조건으로 필터링을 하고싶을 때 사용한다. 예를 들면, 클라이언트에서 사용자의 인터랙션에 따라 특정 값이 변하고 지도 레이어도 그에 따라 변해야할 때 사용한다.</p>
<p data-ke-size="size16">Geoserver에서 레이어 피쳐를 필터링하는 방법은 SQL View를 사용해 쿼리 파라미터를 제공하는 방식과 CQL_FILTER를 사용하는 방식이 있다. 그중 본인이 사용하기 적합한 방식을 선택하여 사용하면 된다. 내가 SQL View를 선택한 이유는 공간쿼리를 사용해 레이어 중첩분석 결과를 지도상에 표출하기위해 SQL View를 선택했다.</p>
<hr contenteditable="false" data-ke-type="horizontalRule" data-ke-style="style5" />
<p data-ke-size="size18"><b>SQL View 생성</b></p>
<p data-ke-size="size16">1. 왼쪽 메뉴바의 [레이어]를 누르고 [새로운 레이어 추가하기]를 누른다.</p>
<p><figure class="imageblock alignCenter" data-ke-mobileStyle="widthOrigin" data-filename="geoserver-레이어추가.png" data-origin-width="2462" data-origin-height="1644"><span data-url="https://blog.kakaocdn.net/dn/cHFzPf/btsJPJOqyMs/PhW8rRRVNTBf3cElakfV30/img.png" data-phocus="https://blog.kakaocdn.net/dn/cHFzPf/btsJPJOqyMs/PhW8rRRVNTBf3cElakfV30/img.png"><img src="https://blog.kakaocdn.net/dn/cHFzPf/btsJPJOqyMs/PhW8rRRVNTBf3cElakfV30/img.png" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcHFzPf%2FbtsJPJOqyMs%2FPhW8rRRVNTBf3cElakfV30%2Fimg.png" onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';" data-filename="geoserver-레이어추가.png" data-origin-width="2462" data-origin-height="1644"/></span></figure>
</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">2.어떤 저장소에 있는 데이터로 레이어를 생성할건지 선택한다. 일반적으로 데이터베이스에 레이어로 사용할 데이터를 올리고 연결된 데이터베이스 저장소를 선택한다.</p>
<p><figure class="imageblock alignCenter" data-ke-mobileStyle="widthOrigin" data-filename="geoserver-데이터베이스 선택.png" data-origin-width="2456" data-origin-height="1624"><span data-url="https://blog.kakaocdn.net/dn/ppSwe/btsJQdOZbc2/qyIz8uGF8WsZYPMEM5lem0/img.png" data-phocus="https://blog.kakaocdn.net/dn/ppSwe/btsJQdOZbc2/qyIz8uGF8WsZYPMEM5lem0/img.png"><img src="https://blog.kakaocdn.net/dn/ppSwe/btsJQdOZbc2/qyIz8uGF8WsZYPMEM5lem0/img.png" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FppSwe%2FbtsJQdOZbc2%2FqyIz8uGF8WsZYPMEM5lem0%2Fimg.png" onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';" data-filename="geoserver-데이터베이스 선택.png" data-origin-width="2456" data-origin-height="1624"/></span></figure>
</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">3. 저장소를 선택하면 아래와 같은 화면이 나온다. [새로운 SQL 뷰 설정하기]를 클릭한다.</p>
<p><figure class="imageblock alignCenter" data-ke-mobileStyle="widthOrigin" data-filename="geoserver-sqlview생성.png" data-origin-width="2588" data-origin-height="1628"><span data-url="https://blog.kakaocdn.net/dn/bMpHXZ/btsJQWeDbjX/ywE0xhtY7qohH9yN1BB1g0/img.png" data-phocus="https://blog.kakaocdn.net/dn/bMpHXZ/btsJQWeDbjX/ywE0xhtY7qohH9yN1BB1g0/img.png"><img src="https://blog.kakaocdn.net/dn/bMpHXZ/btsJQWeDbjX/ywE0xhtY7qohH9yN1BB1g0/img.png" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbMpHXZ%2FbtsJQWeDbjX%2FywE0xhtY7qohH9yN1BB1g0%2Fimg.png" onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';" data-filename="geoserver-sqlview생성.png" data-origin-width="2588" data-origin-height="1628"/></span></figure>
</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">4. SQL View 생성화면을 편집화면 이미지로 대체한다.</p>
<p data-ke-size="size16">뷰이름을 입력하고 사용할 SQL 구문을 입력한다. 이후 [SQL로부터 파라미터 추론하기] 버튼을 클릭하면 SQL 구문 내에 <span style="color: #009a87;"><b>'%변수명%'</b></span>으로 입력한 부분에서 파라미터가 추론된다.</p>
<p><figure class="imageblock alignCenter" data-ke-mobileStyle="widthOrigin" data-filename="geoserver-sqlview 생성2.png" data-origin-width="2470" data-origin-height="1634"><span data-url="https://blog.kakaocdn.net/dn/bh3TGu/btsJRbikmZA/X5sL0zcM6LHFA8l71Q1KWK/img.png" data-phocus="https://blog.kakaocdn.net/dn/bh3TGu/btsJRbikmZA/X5sL0zcM6LHFA8l71Q1KWK/img.png"><img src="https://blog.kakaocdn.net/dn/bh3TGu/btsJRbikmZA/X5sL0zcM6LHFA8l71Q1KWK/img.png" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbh3TGu%2FbtsJRbikmZA%2FX5sL0zcM6LHFA8l71Q1KWK%2Fimg.png" onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';" data-filename="geoserver-sqlview 생성2.png" data-origin-width="2470" data-origin-height="1634"/></span></figure>
</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">5. [확인]을 누르면 SQL View 레이어 발행완료</p>
<hr contenteditable="false" data-ke-type="horizontalRule" data-ke-style="style5" />
<p data-ke-size="size18"><b>SQL View(with OpenLayers) 사용예제</b></p>
<pre id="code_1727608349971" class="javascript" data-ke-language="javascript" data-ke-type="codeblock"><code>// 레이어의 source 내장함수인 updateParams를 사용해 filter 프로퍼티를 업데이트해준다.
layer.getSource().updateParams({
	filter: `val&gt;199 and sig_cd=${selectSggCd} and contour=${popContour}`
});

layer.getSource().refresh();</code></pre>
<p data-ke-size="size16"><a href="https://openlayers.org/en/latest/apidoc/module-ol_source_TileWMS-TileWMS.html#updateParams" target="_blank" rel="noopener&nbsp;noreferrer">https://openlayers.org/en/latest/apidoc/module-ol_source_TileWMS-TileWMS.html#updateParams</a></p>
<figure id="og_1727608699308" contenteditable="false" data-ke-type="opengraph" data-ke-align="alignCenter" data-og-type="website" data-og-title="OpenLayers v10.2.1 API - Class: TileWMS" data-og-description="Return the GetFeatureInfo URL for the passed coordinate, resolution, and projection. Return undefined if the GetFeatureInfo URL cannot be constructed." data-og-host="openlayers.org" data-og-source-url="https://openlayers.org/en/latest/apidoc/module-ol_source_TileWMS-TileWMS.html#updateParams" data-og-url="https://openlayers.org/en/latest/apidoc/module-ol_source_TileWMS-TileWMS.html#updateParams" data-og-image=""><a href="https://openlayers.org/en/latest/apidoc/module-ol_source_TileWMS-TileWMS.html#updateParams" target="_blank" rel="noopener" data-source-url="https://openlayers.org/en/latest/apidoc/module-ol_source_TileWMS-TileWMS.html#updateParams">
<div class="og-image" style="background-image: url();">&nbsp;</div>
<div class="og-text">
<p class="og-title" data-ke-size="size16">OpenLayers v10.2.1 API - Class: TileWMS</p>
<p class="og-desc" data-ke-size="size16">Return the GetFeatureInfo URL for the passed coordinate, resolution, and projection. Return undefined if the GetFeatureInfo URL cannot be constructed.</p>
<p class="og-host" data-ke-size="size16">openlayers.org</p>
</div>
</a></figure>
<p data-ke-size="size16">&nbsp;</p>