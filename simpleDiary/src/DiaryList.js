import DiaryItem from "./DiaryItem.js";
import { useContext } from "react";
import { DiaryStateContext } from "./App.js";
import { DiaryDispatchContext } from "./App.js";

const DiaryList = () => {
  const { onEdit, onRemove } = useContext(DiaryDispatchContext);
  const diaryList = useContext(DiaryStateContext);

  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length} 개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((it, idx) => (
          <DiaryItem key={it.id} {...it} onEdit={onEdit} onRemove={onRemove} />
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
