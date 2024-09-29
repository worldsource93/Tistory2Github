<p data-ke-size="size16">지도에서 레이어 핸들링중</p>
<p data-ke-size="size16">1. 파라미터 길이가 너무 길어서 요청이 제대로 전송이 안되거나</p>
<p data-ke-size="size16">2. 고객사의 보안정책 문제로 get 방식을 사용할 수 없을 때 tileLoadFunction을 사용했다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">1번 케이스는 레이어에 SLD_BODY 프로퍼티에 XML string을 사용할 때 문제가 종종 발생한다.</p>
<hr contenteditable="false" data-ke-type="horizontalRule" data-ke-style="style5" />
<p data-ke-size="size16">사용방법</p>
<pre id="code_1727609525828" class="javascript" data-ke-language="javascript" data-ke-type="codeblock"><code>// 레이어를 생성할 때, wms에서 tileLoadFunction 프로퍼티를 통해 imageLoadFunction을 설정해준다.
new TileLayer({
    title,
    source: new TileWMS({
        url,
        params: {
            VERSION: '1.3.0',
            FORMAT: 'image/png',
            TRANSPARENT: 'true',
            tiled: 'true',
            LAYERS: 'storage:layer',
        },
        serverType: 'geoserver',
        tileLoadFunction: function (image, src) {
            imagePostFunction(image, src);
        }
    })
});

const imagePostFunction = (image, src) =&gt; {
	const img = image.getImage();
	if (typeof window.btoa === 'function') {
		const xhr = new XMLHttpRequest();
		const dataEntries = src.split('&amp;');
		let url;
		let params = '';
		for (let i = 0; i &lt; dataEntries.length; i++) {
			if (i === 0) {
				url = dataEntries[i];
			} else {
				params = params + '&amp;' + dataEntries[i];
			}
		}
		xhr.open('POST', url, true);
		xhr.responseType = 'arraybuffer';
		xhr.onload = function (e) {
			if (xhr.status === 200) {
				const uInt8Array = new Uint8Array(xhr.response);
				let i = uInt8Array.length;
				const binaryString = new Array(i);
				while (i--) {
					binaryString[i] = String.fromCharCode(uInt8Array[i]);
				}
				const data = binaryString.join('');
				const type = xhr.getResponseHeader('content-type');
				if (type.indexOf('image') === 0) {
					img.src = 'data:' + type + ';base64,' + window.btoa(data);
				}
			}
		};
		xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		xhr.send(params);
	} else {
		img.src = src;
	}
};</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">참고</p>
<p data-ke-size="size16"><a href="https://gis.stackexchange.com/questions/175057/openlayers-3-wms-styling-using-sld-body-and-post-request" target="_blank" rel="noopener&nbsp;noreferrer">https://gis.stackexchange.com/questions/175057/openlayers-3-wms-styling-using-sld-body-and-post-request</a></p>
<figure id="og_1727609544307" contenteditable="false" data-ke-type="opengraph" data-ke-align="alignCenter" data-og-type="website" data-og-title="OpenLayers 3 WMS Styling Using SLD_BODY and POST request" data-og-description="I'm using OpenLayers 3 and GeoServer to create a spatial web application in which I want to enable users to choose a colour ramp (using Colorbrewer) and a number of breaks for styling an attribute in" data-og-host="gis.stackexchange.com" data-og-source-url="https://gis.stackexchange.com/questions/175057/openlayers-3-wms-styling-using-sld-body-and-post-request" data-og-url="https://gis.stackexchange.com/questions/175057/openlayers-3-wms-styling-using-sld-body-and-post-request" data-og-image="https://scrap.kakaocdn.net/dn/hmbGi/hyW6ylSRY2/QlokQgCI9SWJcF6OEHY371/img.png?width=316&amp;height=316&amp;face=0_0_316_316"><a href="https://gis.stackexchange.com/questions/175057/openlayers-3-wms-styling-using-sld-body-and-post-request" target="_blank" rel="noopener" data-source-url="https://gis.stackexchange.com/questions/175057/openlayers-3-wms-styling-using-sld-body-and-post-request">
<div class="og-image" style="background-image: url('https://scrap.kakaocdn.net/dn/hmbGi/hyW6ylSRY2/QlokQgCI9SWJcF6OEHY371/img.png?width=316&amp;height=316&amp;face=0_0_316_316');">&nbsp;</div>
<div class="og-text">
<p class="og-title" data-ke-size="size16">OpenLayers 3 WMS Styling Using SLD_BODY and POST request</p>
<p class="og-desc" data-ke-size="size16">I'm using OpenLayers 3 and GeoServer to create a spatial web application in which I want to enable users to choose a colour ramp (using Colorbrewer) and a number of breaks for styling an attribute in</p>
<p class="og-host" data-ke-size="size16">gis.stackexchange.com</p>
</div>
</a></figure>
<p data-ke-size="size16"><a href="https://openlayers.org/en/latest/apidoc/module-ol_Tile.html#~LoadFunction" target="_blank" rel="noopener&nbsp;noreferrer">https://openlayers.org/en/latest/apidoc/module-ol_Tile.html#~LoadFunction</a></p>
<figure id="og_1727609573590" contenteditable="false" data-ke-type="opengraph" data-ke-align="alignCenter" data-og-type="website" data-og-title="OpenLayers v10.2.1 API - Module: ol/Tile" data-og-description="A function that takes a Tile for the tile and a {string} for the url as arguments. The default is source.setTileLoadFunction(function(tile, src) { tile.getImage().src = src; }); For more fine grained control, the load function can use fetch or XMLHttpReque" data-og-host="openlayers.org" data-og-source-url="https://openlayers.org/en/latest/apidoc/module-ol_Tile.html#~LoadFunction" data-og-url="https://openlayers.org/en/latest/apidoc/module-ol_Tile.html#~LoadFunction" data-og-image=""><a href="https://openlayers.org/en/latest/apidoc/module-ol_Tile.html#~LoadFunction" target="_blank" rel="noopener" data-source-url="https://openlayers.org/en/latest/apidoc/module-ol_Tile.html#~LoadFunction">
<div class="og-image" style="background-image: url();">&nbsp;</div>
<div class="og-text">
<p class="og-title" data-ke-size="size16">OpenLayers v10.2.1 API - Module: ol/Tile</p>
<p class="og-desc" data-ke-size="size16">A function that takes a Tile for the tile and a {string} for the url as arguments. The default is source.setTileLoadFunction(function(tile, src) { tile.getImage().src = src; }); For more fine grained control, the load function can use fetch or XMLHttpReque</p>
<p class="og-host" data-ke-size="size16">openlayers.org</p>
</div>
</a></figure>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">&nbsp;</p>