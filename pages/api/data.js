const dataSet = [
  {
    id: 1,
    question: '뉴스타파에 입사한 당신, 첫 취재를 나가게 됐다! 당신이 취재하고 싶은 아이템은?',
    answers: [
      {content: '평범한 사람들의 가슴 아픈 이야기', target: 'valueC', value: 1},
      {content: '권력기관의 비리를 파헤치는 보도', target: 'valueC', value: -1}
    ]
  },
  {
    id: 2,
    question: '취재할 아이템을 정했다. 생각보다 취재가 어려울 것 같은데... 팀을 이뤄서 취재해볼까?',
    answers: [
      {content: '혼자가 더 편하다.', target: 'valueA', value: -1},
      {content: '여럿이서 힘을 합쳐 보자', target: 'valueA', value: 1},
    ]
  },
  {
    id: 3,
    question: '취재를 하던 중 잘 풀리지 않는 부분이 있다. 마감 시간은 점점 다가오고 있는데... 어떻게 할까?',
    answers: [
      {content: '다시 한 번 자료를 꼼꼼히 살펴본다', target: 'valueB', value: -1},
      {content: '우선 중요한 부분만 마무리해 두고, 자세한 부분은 나중에 채워 넣는다', target: 'valueB', value: 1},
    ]
  },
  {
    id: 4,
    question: '다행히 제 시간에 기사를 마감했다. 내일은 내 첫 기사가 공개되는 날! 지금 기분은?',
    answers: [
      {content: '두근두근, 긴장돼서 잠이 안 온다 😥', target: 'valueB', value: -1},
      {content: '최선을 다했으니 후회도 없다. 내일 일은 내일 생각하자!', target: 'valueB', value: 1},
    ]
  },
  {
    id: 5,
    question: '드디어 첫 기사가 공개됐다. 그동안 수고한 내 자신에게 박수! 오늘 저녁은 어떻게 보낼까?',
    answers: [
      {content: '선배들과 함께 뒷풀이 모임을 갖는다', target: 'valueA', value: 1},
      {content: '조용히 혼자만의 시간을 보낸다', target: 'valueA', value: -1},
    ]
  },
]

export default dataSet;