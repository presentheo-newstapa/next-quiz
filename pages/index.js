import React, {useState, useEffect} from 'react';
import _ from 'lodash';
import Head from 'next/head';
import Button from '../components/button';
import dataSet from '../pages/api/data';
import NTdataSet from '../pages/api/ntdata';

export default function Home(props) {

  // 유저 상태 관리
  const [userState, setUserState] = useState(0);
  const [userName, setUserName] = useState('');
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
      alert(`${userName} ${userJob}, 뉴스타파에 오신 것을 축하합니다!`)
      setUserState(1);
    }
  }

  // 답변 선택하기
  function selectAnswer(index) {
    setSelection(currentData.answers[index])
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

      <main>
        {/* 이름 입력창 */}
        {userState == 0 && (
          <div className="container max-w-screen-md px-20 py-28 mx-auto">
            <div>
              <h1 className="md:text-4xl font-black text-center">재미로 하는 테스트!<br/>당신과 닮은 뉴타人은 누구?!?</h1>
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
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 py-7 pr-20 md:text-xl sm:text-lg border-gray-300 rounded-md"
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
          <div className="container max-w-screen-md px-20 py-28 mx-auto">
            <div className="quiz">
              <div>
                {/* 질문 영역 */}
                <div>
                  <h3 className="text-2xl">{currentData.question}</h3>
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
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                {progress > 0 ? <Button classList="text-indigo-700 bg-indigo-100 hover:bg-indigo-200 " onClick={(event) => goTo('prev')}>이전으로 가기</Button> : ''}
                {progress < dataSet.length-1 ? <Button classList="text-white bg-indigo-700 hover:bg-indigo-800 ml-2" onClick={(event) => goTo('next')}>다음으로 가기</Button> : <Button classList="text-white bg-indigo-700 hover:bg-indigo-800 ml-2" onClick={(event) => submit()}>제출하기</Button>}
              </div>
            </div>

          </div>
        )}

        {/* 결과 출력 창 */}
        {userState == 2 && (
          <div className="container max-w-screen-md px-20 py-28 mx-auto">
            <div>
              <p>당신과 닮은 기자는...</p>
            </div>
            <div>
              <ul className="grid grid-cols-4 gap-2">
                {NTdataSet.map((e, i) => {
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
              <p>입니다</p>
            </div>

          </div>
        )}
      </main>

    </div>
  )
}
