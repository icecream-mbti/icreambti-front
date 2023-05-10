const qnaList = [
    {
        q: '아이스크림을 먹다가 잠에 들었다... 눈을 뜨니 아이스크림이 걸어다니는 이상한 마을인 것 같다. 이럴 때 나는?',
        a: [
            { answer: '주변 아이스크림에게 말을 건다. "안녕하세요! 저 좀 도와주실 수 있나요?<br>이상한 사람 아니에요ㅜㅜ"', type: 'E'},
            { answer: '혼자 주위를 살피며 파악한다.', type: 'I'},
        ]
    },
    {
        q: '책상 위에 음식이 놓여있고, 쪽지에 "아무도 먹지 않았지만, 드셔도 됩니다”라고 적혀있다. 나의 생각은?',
        a: [
            { answer: '왜 아무도 안먹었지? 함정인가? 이거 먹고 쓰러지면 누가 데려가지? 먹기 전에 119에 전화하고 먹을까? ', type: 'N'},
            { answer: '찝찝하지만 일단 너무 배가 고프니까 먹자.', type: 'S'},
        ]
    },
    {
        q: '마을을 돌아다니다 공원에서 놀고 있는 아이스크림 친구들을 발견했다. 날 보더니 같이 놀자고 한다. 나의 대답은?',
        a: [
            { answer: '헐 너무 좋아!! 안그래도 너무 재밌어 보여서 같이 놀고 싶었어ㅜㅜ 뭐하고 놀까?', type: 'E'},
            { answer: '어..?아냐아냐 괜찮아(그냥 가줬으면 좋겠다) 말이라도 고마워^_^', type: 'I'},
        ]
    },
    {
        q: '친구들과 다과집으로 향하던 중 한 친구가 아끼던 드라이아이스를 잃어버렸다고 한다. 이때 내가 해줄 말은?',
        a: [
            { answer: '그 물건 마지막으로 어디서 봤어? 생각나는 곳 있어?', type: 'T'},
            { answer: '헐 너가 아끼는 물건인데 어떡해 속상하겠다ㅜㅜ 같이 찾아줄게!!', type: 'F'},
        ]
    },
    {
        q: '거리에 두 다과집이 놓여있다. 이때 가고 싶은 장소는?',
        a: [
            { answer: '사람이 많아보이고 재밌어보이는 핫플 다과집', type: 'E'},
            { answer: '조용해보이고 한적한 다과집', type: 'I'},
        ]
    },
    {
        q: '다과집에 가서 주문한 음료와 다과를 자리로 가져오는 바닥이 좀 미끄럽다.',
        a: [
            { answer: '넘어져서 다 흘렸는데 대걸레 가지러 간 사이에 누가 내가 흘린걸 밟고 또 넘어지면.. 내가 치료비를 줘야하는 건가..?', type: 'N'},
            { answer: '바닥이 좀 미끄럽네.. 넘어져서 시선 쏠리는거 아니야?', type: 'S'},
        ]
    },
    {
        q: '아이스크림 친구가 “너네는 만약에 애인이 ‘걷다가 달을 봤는데 너 생각이 났어’ 라고하면 뭐라고 할거야?”라고 질문했다. 나의 대답은?',
        a: [
            { answer: '왜? 달을 보는데 왜 내 생각이 나?(달이 나랑 무슨 관계가 있지?)', type: 'T'},
            { answer: '헐 내 생각이 났어? 감동이다ㅜㅜ 보러갈까?(내 생각이 났다니 감동이다)', type: 'F'},
        ]
    },
    {
        q: '집들이 초대를 받았다. 다 놀고 재밌게 노느라 어질러진 방을 보고 드는 생각은?',
        a: [
            { answer: '힘들다…좀만 쉬고 치우고싶다. 치우기 귀찮다..', type: 'P'},
            { answer: '힘들지만 치우고 푹 쉬는게 좋겠지', type: 'J'},
        ]
    },
    {
        q: '집들이가 끝나고 음식을 준비해준 집주인에게 내가 건내고 싶은 말은?',
        a: [
            { answer: '음식 최고였어! 다음에 또 놀자', type: 'T'},
            { answer: '어떻게 이렇게 요리를 잘해? 날 위해 요리해준거 너무 감동이야ㅜㅜ 정말 맛있었어!', type: 'F'},
        ]
    },
    {
        q: '아이스크림 마을에 적응이 되어 본격적으로 마을을 구경해볼까 하는데 나라면?',
        a: [
            { answer: '발 닿는대로 일단 가보자!', type: 'P'},
            { answer: '마을 지도를 꼼꼼히 보고 동선을 정한다.', type: 'J'},
        ]
    },
    {
        q: '마을에 사람이 나타났다는 소식을 들은 병사들이 날 발견하고 쫒아온다. 우선 도망치는데…내 머릿속은?',
        a: [
            { answer: '나 왜 도망가야되는거지? 난 아무것도 안했는데 날 왜 쫒아오지? 근데 잡히면 어떻게 되는거지. 나 죽나? 내가 여기서 죽으면 장례는 누가 치뤄주지? ', type: 'N'},
            { answer: '잡히면 안될 것 같으니 일단 달라자. 잡히면 x된다.', type: 'S'},
        ]
    },
    {
        q: '결국 붙잡혀서 성으로 끌려왔는데, 이틀 후에 날 아이스크림으로 만들어버린다고 했다. 사람으로 살기까지 이틀...나는 뭘 할까?',
        a: [
            { answer: '이틀 동안 뭘 하면 좋을지 생각한다.', type: 'P'},
            { answer: '이틀 동안 할 일들을 시간 단위로 세세히 계획을 짠다.', type: 'J'},
        ]
    }
]