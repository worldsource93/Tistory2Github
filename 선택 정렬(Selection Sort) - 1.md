<p data-ke-size="size16">선택정렬은<span>&nbsp;</span><b>주어진 조건에 해당하는 수</b>를<span>&nbsp;</span><b>정렬하려는 범위</b>에서<span>&nbsp;</span><b>가장 앞으로 보내는 것</b>이다.</p>
<p data-ke-size="size16">오름차순이라면 주어진 조건에 해당하는 수는 가장 작은 수가 될 것이고,</p>
<p data-ke-size="size16">내림차순이라면 가장 큰 수가 될 것이다.</p>
<p data-ke-size="size16">또, 정렬하려는 범위는 정렬이 반복될수록 짧아질 것이다.</p>
<p data-ke-size="size16"><a style="color: #0070d1;" href="https://www.acmicpc.net/problem/23881">백준 23881번: 알고리즘 수업 - 선택 정렬 1</a></p>
<pre id="code_1722448241190" style="background-color: #f8f8f8; color: #383a42;" data-ke-type="codeblock" data-ke-language="javascript"><code>console.time();
const condition = [5, 2];
const array = [3, 1, 2, 5, 4];
// const condition = [5, 4];
// const array = [3, 1, 2, 5, 4];

const run = (c, arr) =&gt; {
    const [length, count] = c;
    const result = [];
    let cnt = 0;
    let index;
    for(let i = 0; i &lt; count; i++) {
        let min = Number.MAX_SAFE_INTEGER;
        for(let j = i; j &lt; length; j++) {
            if(min &gt; arr[j]) {
                min = arr[j];
                index = j;
            }
        }
        
        if(arr[i] !== arr[index]) {
            const temp = arr[i];
            arr[i] = arr[index];
            arr[index] = temp;
            cnt++;
        }

        if(i === count - 1) {
            result.push(arr[i]);
            result.push(arr[index]);
        }
    }

    if(cnt &lt; count) {
        console.log(-1);
    } else {
        console.log(`${Math.min(...result)}, ${Math.max(...result)}`);
    }
}

run(condition, array);
console.timeEnd();</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<pre id="code_1722448241192" style="background-color: #f8f8f8; color: #383a42;" data-ke-type="codeblock" data-ke-language="javascript"><code>// 예제 1번 조건
const condition = [5, 2];
const array = [3, 1, 2, 5, 4];</code></pre>
<p><figure class="imageblock alignLeft" data-ke-mobileStyle="widthOrigin" data-origin-width="290" data-origin-height="92"><span data-url="https://blog.kakaocdn.net/dn/bdXpsj/btsIQ0cx7Hp/WOx7pZfApmGtdDcwfbkIO1/img.png" data-phocus="https://blog.kakaocdn.net/dn/bdXpsj/btsIQ0cx7Hp/WOx7pZfApmGtdDcwfbkIO1/img.png" data-alt="1번 예제 실행결과"><img src="https://blog.kakaocdn.net/dn/bdXpsj/btsIQ0cx7Hp/WOx7pZfApmGtdDcwfbkIO1/img.png" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbdXpsj%2FbtsIQ0cx7Hp%2FWOx7pZfApmGtdDcwfbkIO1%2Fimg.png" onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';" data-origin-width="290" data-origin-height="92"/></span><figcaption>1번 예제 실행결과</figcaption>
</figure>
</p>
<pre id="code_1722448241193" style="background-color: #f8f8f8; color: #383a42;" data-ke-type="codeblock" data-ke-language="javascript"><code>// 예제 2번 조건
const condition = [5, 4];
const array = [3, 1, 2, 5, 4];</code></pre>
<p><figure class="imageblock alignLeft" data-ke-mobileStyle="widthOrigin" data-origin-width="260" data-origin-height="92"><span data-url="https://blog.kakaocdn.net/dn/4MHxH/btsIQEgqeRy/BTq0VTg7eHfL1h85k3b0bK/img.png" data-phocus="https://blog.kakaocdn.net/dn/4MHxH/btsIQEgqeRy/BTq0VTg7eHfL1h85k3b0bK/img.png" data-alt="2번 예제 실행결과"><img src="https://blog.kakaocdn.net/dn/4MHxH/btsIQEgqeRy/BTq0VTg7eHfL1h85k3b0bK/img.png" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F4MHxH%2FbtsIQEgqeRy%2FBTq0VTg7eHfL1h85k3b0bK%2Fimg.png" onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';" data-origin-width="260" data-origin-height="92"/></span><figcaption>2번 예제 실행결과</figcaption>
</figure>
</p>
<p data-ke-size="size16">&nbsp;</p>