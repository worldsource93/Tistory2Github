<blockquote data-ke-style="style3"><b>  요구사항</b><br />- 뒤에서부터 선택 정렬<br />- 서로 스왑하는 경우에 카운트를 한다.<br />- K번째 스왑을 하는 경우, 서로 교환한 숫자를 작은 순서대로 출력<br />- 스왑횟수가 K번 미만일 경우, -1을 출력</blockquote>
<pre id="code_1722452612021" class="javascript" data-ke-language="javascript" data-ke-type="codeblock"><code>let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const condition = input[0].split(' ').map(Number);
const array = input[1].split(' ').map(Number);

const solution = (c, arr) =&gt; {
    const [length, count] = c;
    let cnt = 0;
    for(let i = length - 1; i &gt; 0; i--) {
        const target = arr[i];
        let MAX = 0;
        let index = i;
        
        for(let j = i - 1; j &gt;= 0; j--) {
            if(MAX &lt; arr[j]) {
                MAX = arr[j];
                index = j;
            }
        }
        if(target &lt; MAX) {
            arr[i] = MAX;
            arr[index] = target;
            cnt+= 1;
        }
        
        if(cnt === count) {
            console.log(target, MAX);
            break;
        }
    }
    if(cnt &lt; count) console.log(-1);
}

solution(condition, array);</code></pre>
<p data-ke-size="size16">&nbsp;</p>