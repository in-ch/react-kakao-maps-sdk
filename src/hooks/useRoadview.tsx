import { useContext } from "react"
import { KakaoRoadviewContext } from "../components/Roadview"

/**
 * kakao roadview 객체를 가져오는 hook 입니다.
 */
const useRoadview = () => {
  const kakaoRoadview = useContext(KakaoRoadviewContext)
  return kakaoRoadview
}

export default useRoadview