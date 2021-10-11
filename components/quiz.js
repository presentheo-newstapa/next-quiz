import React, {useState, useEffect} from 'react';
import _ from 'lodash';
import dataSet from '../pages/api/data';
import Button from './button';

export default function Quiz(props) {

  const [progress, setProgress] = useState(0);
  const [selection, setSelection] = useState(null);
  const [selectionList, setSelectionList] = useState([]);

  let currentData = dataSet[progress]

  function selectAnswer(index) {
    setSelection(currentData.answers[index])
  }
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
  function submit(){
    if (selection == null) {
      alert('한 개 이상 선택해주세요')
    } else {
      const final = [...selectionList, selection]
      // ajax 통신으로 답변 제출하고 채점하기
      if (window.confirm('제출하시겠어요?')){
        console.log(final);
      }
    }
  }

  // 이펙트
  useEffect(() => {
    selectAnswer;
  }, [selection])

  return (
    <div className="container max-w-screen-md px-20 py-28 mx-auto">
      
      {/* 퀴즈 창 */}
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

      <div className="result">

      </div>
    </div>

  )
}