<blockquote data-ke-style="style3"><span style="color: #006dd7;"><b> &nbsp;요구사항</b></span><br />- 뒤에서부터 선택 정렬<br />- 서로 스왑하는 경우에 카운트<br />- K번째 스왑을 하는 경우, 스왑 직후 배열을 출력<br />- 스왑횟수가 K번 미만일 경우, -1을 출력<br />- 크기가 매우 커서 시간 초과를 고민</blockquote>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">앞선 3번 문제에서 변경된 내용은 출력 형태만 변경되었다.</p>
<p data-ke-size="size16">스왑 직후, 스왑한 숫자를 작은 순서대로 출력 -&gt; 스왑 직후 배열을 출력</p>
<pre id="code_1722483659967" class="javascript" data-ke-language="javascript" data-ke-type="codeblock"><code>let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const condition = input[0].split(' ').map(Number);
const array = input[1].split(' ').map(Number);

const solution = (c, arr) =&gt; {
	const [length, count] = c;
    
    // sort를 사용해 정렬된 배열 생성
	const sortedArr = [...arr].sort((a, b) =&gt; a - b);
    
    // 원본 배열의 값과 위치를 담은 객체 생성
	const positions = {};
	arr.forEach((num, i) =&gt; (positions[num] = i));
    
	let cnt = 0;
	for (let i = length - 1; i &gt;= 0; i--) {
    
    	// 같지 않을때만 실행
		if (arr[i] !== sortedArr[i]) {
        
        	// 동일 인덱스에서 정렬된 배열에 있는 값이 큰값, 원본 배열에 있는 값이 작은 값
			const MIN = arr[i];
			const MAX = sortedArr[i];
            
            // 원본배열의 큰 값과 작은 값을 스왑
			arr[i] = MAX;
			arr[positions[MAX]] = MIN;
            
            // 위에서 원본 배열 값의 위치가 서로 바뀜, 이에 따라 positions 객체도 스왑
			positions[MIN] = positions[MAX];
			positions[MAX] = i;
			cnt += 1;
			if (cnt === count) {
				console.log(arr.join(' '));
				break;
			}
		}
	}
	if (cnt &lt; count) console.log(-1);
};

solution(condition, array);</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16"><span style="color: #009a87;"><b> 문제 출처</b></span></p>
<p style="background-color: #ffffff; color: #353638; text-align: left;" data-ke-size="size16"><span style="color: #009a87;"><b><a href="https://www.acmicpc.net/problem/23883">https://www.acmicpc.net/problem/23884</a></b></span></p>