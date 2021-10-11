const dataSet = [
  {
    id: 1,
    question: '뉴스타파에 입사한 당신, 첫 취재를 나가게 됐다! 당신이 취재하고 싶은 아이템은?',
    answers: [
      {content: '어려운 사람들의 가슴 아픈 이야기', isCorrect: false},
      {content: '권력기관의 비리를 파헤치는 보도', isCorrect: false}
    ]
  },
  {
    id: 2,
    question: '취재할 아이템을 정했다. 생각보다 취재가 어려울 것 같은데... 팀을 이뤄서 취재해볼까?',
    answers: [
      {content: '혼자가 더 편하다.', isCorrect: false},
      {content: '여럿이서 힘을 합쳐 보자', isCorrect: true},
    ]
  },
  {
    id: 3,
    question: '취재를 하던 중 난관에 부딪쳤다. 어떻게 해결할까?',
    answers: [
      {content: '자료를 살펴본다', isCorrect: false},
      {content: '내 직관을 믿는다', isCorrect: true},
    ]
  },
  {
    id: 4,
    question: '생각보다 취재에 시간이 오래 걸렸다. 마감 시간에 맞추지 못할 수도 있을 것 같다. 어떻게 할까?',
    answers: [
      {content: '미리 양해를 구하고 마감 시간을 늦춘다', isCorrect: false},
      {content: '어떻게든 최선을 다해본다', isCorrect: true},
    ]
  },
  {
    id: 5,
    question: '다행히 제 시간에 기사를 마감했다. 내일은 내 첫 기사가 공개되는 날! 지금 기분은?',
    answers: [
      {content: '두근두근, 긴장돼서 잠이 안 온다 😥', isCorrect: false},
      {content: '최선을 다했으니 후회도 없다. 내일 일은 내일 생각하자!', isCorrect: true},
    ]
  },
  {
    id: 6,
    question: '드디어 첫 기사가 공개됐다. 그동안 수고한 내 자신에게 ',
    answers: [
      {content: '선배들과 함께 뒷풀이 모임을 갖는다', isCorrect: false},
      {content: '조용히 혼자만의 시간을 보낸다', isCorrect: true},
    ]
  },
]

export default dataSet;