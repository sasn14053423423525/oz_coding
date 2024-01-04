/*
 * ❗️❗️ 필독 ❗️❗️
 * - 함수 블록 내부에만 작성해주세요.
 * - 결과값을 return 하세요.
 * - 추가적인 test가 필요한 경우에는 기존 test 코드 밑에 추가해주세요.
 * - 코드 실행 시 모든 테스트가 true인 경우 통과입니다!
 */

/* 문제 출제
 *
 * - 당신은 탐험가로, 잊혀진 섬에 있는 보물을 찾아 모험을 떠납니다.
 * - 보물은 숨겨진 곳에 있으며, 특정 문자를 가진 보물을 찾을 때마다 보물의 흔적이 나타납니다.
 * - 보물은 총 몇개인지 문자열에서 특정 문자의 개수를 세어 확인해보세요!
 *
 *
 *
 *
 */

function question(a,n) {
    console.log(a,n)
    // 여기에서 코드 작성해주세요!
    let count = 0;
    //8대신에 a배열에 길이를 넣는다. 문자열.length
    //배열의 아이템을 조회하는 메서드 알아보기 배열[0]
    //함수와 메서드의 차이 

    //함수:함수는 독립적으로 존재하며 특정 객체에 속해있지 않은 코드 블록
    //예를들어 Math.random()과 같이 객체에 속하지 않고 직접 호출할 수 있는것

    //메서드:메서드는 객체에속해있으며 해당 객체의 속성으로서 동작하는 함수
    //push() pop()emd
    for(let i=0; i<=a.length; i++){
        
        // i번째 아이템이 n과 동일한가?[ ]맞으면 카운트
        if(a[i] === n){
            count = count + 1
            
        }
    }
    return count;
}

// 여기는 결과값 함수이므로 신경쓰지 않으셔도 됩니다!
Test(
    question,
    [
        [['h', 'a', 'p', 'p', 'y'], 'p'],
        [['h', 'e', 'l', 'l', 'o'], 'o'],
        [['c', 'h', 'r', 'i', 's', 't', 'm', 'a', 's'], 'a'],
        [['네', '잎', '클', '로', '버', '로', '버', '오', '버'], '버'],
    ],
    [2, 1, 1, 3]
);

function Test(question, conditions, results) {
    for (let index in results) {
        const result = Array.isArray(results[index])
            ? JSON.stringify([question(...conditions[index])]) === JSON.stringify(results[index])
            : question(...conditions[index]) === results[index];
        console.log(`테스트 ${+index + 1}`, result);
        if (!result) {
            console.log('테스트에 통과하지 못했습니다.');
            return;
        }
    }

    console.log('테스트에 통과하셨습니다!');
}