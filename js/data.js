const qnaList = [
    {
        q: '눈을 뜨니 아이스크림이 걸어 다니는 이상한 마을이다. <br>이럴 때 나는?',
        a: [
            { answer: '주변 아이스크림에게 말을 건다.<br>"안녕하세요! 저 좀 도와주실 수 있나요? 이상한 사람 아니에요ㅜㅜ"', type: 'E'},
            { answer: '혼자 주위를 살피며 상황을 파악한다.', type: 'I'},
        ]
    },
    {
        q: '음식 옆에 "아무도 먹지 않았지만, 드셔도 됩니다”라고 적혀있다. <br>나라면?',
        a: [
            { answer: '왜 아무도 안 먹었지? 함정인가? 이거 먹고 쓰러지면 누가 데려가지? 먹기 전에 119에 전화하고 먹을까? ', type: 'N'},
            { answer: '찝찝하지만 일단 너무 배가 고프니까 먹자.', type: 'S'},
        ]
    },
    {
        q: '공원에서 놀고 있는 아이스크림 친구들이 같이 놀자고 한다. <br>나의 대답은?',
        a: [
            { answer: '어..?아냐아냐 괜찮아(그냥 가줬으면 좋겠다) 말이라도 고마워^_^', type: 'I'},
            { answer: '헐 너무 좋아!! 안 그래도 너무 재밌어 보여서 같이 놀고 싶었어ㅜㅜ 뭐 하고 놀까?', type: 'E'},
        ]
    },
    {
        q: '친구가 아끼던 드라이아이스를 잃어버렸다고 한다. <br>이때 내가 해줄 말은?',
        a: [
            { answer: '헐 너가 아끼는 물건인데 속상하겠다ㅜㅜ 같이 찾아줄게!!', type: 'F'},
            { answer: '그 물건 어디서 마지막으로 봤어? 생각나는 곳 있어?', type: 'T'},
        ]
    },
    {
        q: '거리에 두 다과 집이 놓여있다. <br>이때 가고 싶은 장소는?',
        a: [
            { answer: '사람이 많아 보이고 재밌어 보이는 핫플 다과 집', type: 'E'},
            { answer: '조용해 보이고 한적한 다과 집', type: 'I'},
        ]
    },
    {
        q: '다과 집에서 주문한 다과를 가져오는데 바닥이 좀 미끄럽다. <br>이때 내 생각은?',
        a: [
            { answer: '바닥이 좀 미끄럽네.. 넘어져서 시선 쏠리는 거 아니야?', type: 'S'},
            { answer: '넘어져서 다 흘렸는데 대걸레 가지러 간 사이에 누가 내가 흘린 걸 밟고 또 넘어지면.. 내가 치료비를 줘야 하는 건가..?', type: 'N'},
        ]
    },
    {
        q: '친구가 "걷다가 달을 봤는데 너 생각이 났어"라며 연락했다. <br>나의 대답은?',
        a: [
            { answer: '왜? 달을 보는데 왜 내 생각이 나? (달이 나랑 무슨 관계가 있지?)', type: 'T'},
            { answer: '헐 내 생각이 났어? 감동이다ㅜㅜ (내 생각이 났다니 감동이다)', type: 'F'},
        ]
    },
    {
        q: '집들이 후 방을 보니 엄청나게 어질러져 있다. <br>이때 나는?',
        a: [
            { answer: '힘들지만 치우고 푹 쉬는게 좋겠지', type: 'J'},
            { answer: '힘들다... 좀만 쉬고 치우고 싶다. 치우기 귀찮다..', type: 'P'},
        ]
    },
    {
        q: '친구가 맛있는 음식을 해줬다. <br>내가 할 말은?',
        a: [
            { answer: '음식 최고였어. 고마워!', type: 'T'},
            { answer: '어떻게 이렇게 요리를 잘해? 날 위해 요리해준거 너무 감동이야ㅜㅜ 정말 맛있었어!', type: 'F'},
        ]
    },
    {
        q: '오늘은 아이스크림 마을을 본격적으로 구경해보려고 한다. <br>이때 나는?',
        a: [
            { answer: '발 닿는 대로 일단 가보자!', type: 'P'},
            { answer: '마을 지도를 꼼꼼히 보고 동선을 정한다.', type: 'J'},
        ]
    },
    {
        q: '마을에 사람이 나타났다는 소식을 들은 병사들이 날 발견하고 쫓아온다. <br>도망가는 내 머릿속은?',
        a: [
            { answer: '잡히면 안 될 것 같으니 일단 달리자. 잡히면 x된다.', type: 'S'},
            { answer: '나 왜 도망가야 하는 거지? 난 아무것도 안 했는데 날 왜 쫓아오지? 근데 잡히면 어떻게 되는 거지. 나 죽나? 내가 여기서 죽으면 장례는 누가 치러주지? ', type: 'N'},
        ]
    },
    {
        q: '결국 붙잡힌 나를 이틀 후에 아이스크림으로 만들어버린다고 했다. <br>이틀동안 나는 뭘 할까?',
        a: [
            { answer: '이틀 동안 뭘 하면 좋을지 생각한다.', type: 'P'},
            { answer: '이틀 동안 할 일들을 시간 단위로 세세히 계획을 짠다.', type: 'J'},
        ]
    }
]