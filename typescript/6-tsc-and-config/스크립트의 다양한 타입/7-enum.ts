//기본 문법//

enum 이름{
    상수값1,
    상수값2,
    상수값3
}
//숫자형 enum//
enum PlayerState{
    Buffering,
    Playing,
    Paused,
    Seeking
}

let currentState: PlayerState;

// currentState = PlayerState.Buffering;
currentState = PlayerState.Playing;

const isPlaying = (state:PlayerState)=>{
    return state ===PlayerState.Playing;
}

//플레이어 재생중?
isPlaying(currentState); //true

//문자형 Enum//
enum Direction {
    left = "left",
    right = "right",
    up = "up",
    down = "down"
}
function move(dir:Direction){
    switch(dir){
        case Direction.left: //왼쪽일 경우
            break; // 왼쪽 로직
        case Direction.right: // 오른쪽일 경우
            break; // 오른쪽 로직
            //...
    }
}
move(Direction.left);
move(Direction.right);