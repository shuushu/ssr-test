import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../Store";

export default function Status() {
  const { totalNum, totalComplete, totalNoneComplete, per } = useRecoilValue(
    todoListStatsState
  );
  return (
    <>
      <hr />
      전체 {totalNum}건 중 완료 {totalComplete}, 미해결 {totalNoneComplete}
      진행률 {per}%
    </>
  );
}
