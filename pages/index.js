import React, {useState, useEffect} from 'react';
import _ from 'lodash';
import Head from 'next/head';
import Button from '../components/button';
import dataSet from '../pages/api/data';
import NTdataSet from '../pages/api/ntdata';

export default function Home(props) {

  // 유저 상태 관리
  const [userState, setUserState] = useState(0);
  const [userName, setUserName] = useState('뉴스타파');
  const [userJob, setUserJob] = useState('기자');

  // 퀴즈 상태 관리
  const [progress, setProgress] = useState(0);
  const [selection, setSelection] = useState(null);
  const [selectionList, setSelectionList] = useState([]);

  let currentData = dataSet[progress]

  function enterUserInfo(){
    if (userName.length < 1) {
      alert('이름을 한 글자 이상 입력해주세요!')
    } else {
      setUserState(1);
    }
  }

  // 답변 선택하기
  function selectAnswer(index) {
    setSelection(currentData.answers[index].value)
  }

  // 다음으로 가기 & 뒤로 가기
  function goTo(direction){
    if (direction == 'prev') {
      setSelectionList(_.dropRight(selectionList))
      setProgress(progress==0?progress:progress-1)
      setSelection(null)
    }
    if (direction == 'next') {
      if (selection == null) {
        alert('한 개 이상 선택해주세요')
      } else {
        setSelectionList([...selectionList, selection])
        setProgress(progress==dataSet.length-1?progress:progress+1)
        setSelection(null)
      }
    }
  }

  // 제출하기
  function submit(){
    if (selection == null) {
      alert('한 개 이상 선택해주세요')
    } else {
      const final = [...selectionList, selection]
      // ajax 통신으로 답변 제출하고 채점하기
      if (window.confirm('제출하시겠어요?')){
        setUserState(2);
        console.log(final);
      }
    }
  }

  function foo() {
  }



  // 이펙트
  useEffect(() => {
    selectAnswer;
  }, [selection])

  return (
    <div>
      <Head>
        <title>MBTI. is. SCIENCE.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex items-center bg-nstp">
        <div className="container max-w-screen-sm mx-auto px-5 pt-5 pb-10">
          {/* 이름 입력창 */}
          {userState == 0 && (
            <div>
              <div>
                <h1 className="text-2xl text-white text-center font-bold md:leading-normal">재미로 하는 테스트!<br/>당신과 닮은 뉴타人은 누구?!?🤣</h1>
              </div>
              <div className="mt-10">
                <label htmlFor="userName" className="sr-only">
                  이름
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    onChange={(e) => setUserName(e.target.value)}
                    type="text"
                    name="userName"
                    id="inputUserName"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 py-4 pr-20 md:text-xl sm:text-lg border-gray-300 rounded-md"
                    placeholder="이름"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center">
                    <label htmlFor="userJob" className="sr-only">
                      직책
                    </label>
                    <select
                      onChange={(e) => setUserJob(e.target.value)}
                      id="userJob"
                      name="inputUserJob"
                      className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 border-transparent bg-transparent text-gray-500 md:text-xl sm:text-lg rounded-md"
                    >
                      <option value="기자">기자</option>
                      <option value="PD">PD</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <Button onClick={() => enterUserInfo()} classList="text-indigo-700 bg-indigo-100 hover:bg-indigo-200">시작하기!</Button>
              </div>
            </div>
          )}

          {/* 퀴즈 시작 */}
          {userState == 1 && (
            <div>
              <div className="quiz">
                <div>
                  {/* 코멘트 영역 */}
                  {/* <div className="py-4 px-6 mb-4 rounded bg-gray-100 flex flex-row gap-3">
                    <div className="w-20 h-20 overflow-hidden rounded-full border">
                      <img className="object-contain" src="/images/muckracker.jpg"></img>
                    </div>
                    {progress == 0 && (
                      <p className="text-md">{`${userName} ${userJob}, 뉴스타파에 온 것을 환영해요. 첫 취재 기대하고 있겠습니다.`}</p>
                    )}
                  </div> */}
                  {/* 질문 영역 */}
                  <div>
                    <p className="text-2xl leading-normal">{currentData.question}</p>
                  </div>
                  {/* 답변 리스트 영역 */}
                  <div>
                    <ul>
                      {currentData.answers.map((e, i) => {
                        return <li className={`mt-4 px-6 py-4 border rounded cursor-pointer ${selection==e?'bg-indigo-100 shadow-inner':''}`} onClick={(event) => selectAnswer(i)} key={i}>{e.content}</li>
                      })}
                    </ul>
                  </div>
                </div>
                <div className="mt-5 sm:mt-8 flex justify-center justify-start gap-3">
                  {progress > 0 ? <Button classList="text-indigo-700 bg-indigo-100 hover:bg-indigo-200 " onClick={(event) => goTo('prev')}>이전으로 가기</Button> : ''}
                  {progress < dataSet.length-1 ? <Button classList="text-white bg-indigo-700 hover:bg-indigo-800" onClick={(event) => goTo('next')}>다음으로 가기</Button> : <Button classList="text-white bg-indigo-700 hover:bg-indigo-800" onClick={(event) => submit()}>제출하기</Button>}
                </div>
              </div>

            </div>
          )}

          {/* 결과 출력 창 */}
          {userState == 2 && (
            <div>
              <div>
                <h2 className="md:text-4xl font-black text-center">당신과 닮은 뉴타人은...</h2>
              </div>
              <div className="mt-10">
                <ul className="grid grid-cols-4 gap-2">
                  {NTdataSet.map((e, i) => {
                    // 결과가 일치하는 데이터 불러오기
                    if (e.mbti == "ISFJ") {
                      return (
                        <li>
                          <div>
                            <div className="w-24 h-24 overflow-hidden rounded-full mx-auto border">
                              <img className="object-contain" src={'/images/'+e.id+'.jpg'}></img>
                            </div>
                            <h4 className="text-center">{e.name} </h4>

                          </div>
                        </li>
                      )
                    }
                  })}
                </ul>
              </div>
              <div>
                <p>ISFJ 유형 성격의 소유자는 조용하고 차분하며 따뜻하고 친근하다. 책임감과 인내력 또한 매우 강하다. 본인의 친한 친구나 가족에게 애정이 가득하다. 이들은 언제나 진솔하려 노력하고 가볍지 않기 때문에 관계를 맺기에 가장 믿음직스러운 유형이다.<br/>사회생활 시 외부 환경에 대해 내향형 중에서 가장 방어력이 강하다. 감정을 파악하는 데는 능숙하지만 표현하는 데는 서툴기 때문에 관계에 있어서 걱정을 하는 경우가 많다. 실제적이고 꼼꼼하게 계획적이며 협조적으로 일을 처리한다. 완벽한 결과물을 도출하지 못할 경우 스트레스를 상당히 받으며, 이상과 달리 귀차니즘이 생겼을 시, 자신에게서도 극심한 괴리감을 느낀다.[4] 경험을 통해서 자신이 틀렸다고 인정할 때까지 꾸준히 밀고 나가는 편이다.</p>

              </div>

            </div>
          )}
        </div>
      </main>

    </div>
  )
}
