import React, {useState, useEffect} from 'react';
import _ from 'lodash';
import dataSet from '../pages/api/data';

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
    <div className="container">
      {/* 퀴즈 창 */}
      <div className="quiz">
        <div>
          <div>
            <h3>{currentData.question}</h3>
          </div>
          <div>
            <ul>
              {currentData.answers.map((e, i) => {
                return <li className={selection==e?'selected':''} onClick={(event) => selectAnswer(i)} key={i}>{e.content}</li>
              })}
            </ul>
          </div>
        </div>
        <div className="buttons">
          {progress > 0 ? <button onClick={(event) => goTo('prev')}>이전으로 가기</button> : ''}
          {progress < dataSet.length-1 ? <button onClick={(event) => goTo('next')}>다음으로 가기</button> : <button onClick={(event) => submit()}>제출하기</button>}
        </div>
      </div>

      <div className="result">

      </div>
    </div>

  )
}