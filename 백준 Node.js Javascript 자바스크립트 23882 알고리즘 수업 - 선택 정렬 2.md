<blockquote data-ke-style="style3">  <b><span style="color: #006dd7;">요구사항</span></b><br />- 뒤에서부터 선택 정렬<br />- 서로 스왑하는 경우에 카운트를 한다.<br />- K번째 스왑을 하는 경우, 스왑 직후 배열을 출력<br />- 스왑횟수가 K번 미만일 경우, -1을 출력</blockquote>
<pre id="code_1722475404769" class="javascript" data-ke-language="javascript" data-ke-type="codeblock"><code>let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const condition = input[0].split(' ').map(Number);
const array = input[1].split(' ').map(Number);

const solution = (c, arr) =&gt; {
	const [length, count] = c;
	let cnt = 0;

	for (let i = length - 1; i &gt; 0; i--) {
		const target = arr[i];
		let MAX = 0;
		let index = i;

		for (let j = i - 1; j &gt;= 0; j--) {
			if (MAX &lt; arr[j]) {
				MAX = arr[j];
				index = j;
			}
		}

		if (target &lt; MAX) {
			arr[i] = MAX;
			arr[index] = target;
			cnt++;
		}

		if (cnt === count) {
			console.log(arr.join(' '));
			break;
		}
	}
	if (cnt &lt; count) console.log(-1);
};

solution(condition, array);</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16"><span style="color: #009a87;"><b> 문제 출처</b></span></p>
<p data-ke-size="size16"><span style="color: #009a87;"><b><a href="https://www.acmicpc.net/problem/23882" target="_blank" rel="noopener">https://www.acmicpc.net/problem/23882</a></b></span></p>
<p data-ke-size="size16">&nbsp;</p>