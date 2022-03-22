import { useEffect, useState } from "react";
import FirstPage from "./components/FirstPage/FirstPage";
import Foot from "./components/footer/Foot";
import SecondPage from "./components/SecondPage/SecondPage";
import ThirdPAge from "./components/thirdPage/ThirdPAge";
import { ThemeContext } from "./ThemeContext";

function App() {
  const [ScrollY, setScrollY] = useState(0); // 스크롤값을 저장하기 위한 상태

  const handleFollow = () => {
    setScrollY(window.pageYOffset); // window 스크롤 값을 ScrollY에 저장
  };

  const onHeaderClick = (e) => {
    let {
      target: { id },
    } = e;
    console.log(id);
    if (id === "first") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setScrollY(0);
    }
    if (id === "second") {
      window.scrollTo({
        top: 872,
        behavior: "smooth",
      });
      setScrollY(872);
    }
    if (id === "third") {
      window.scrollTo({
        top: 1509,
        behavior: "smooth",
      });
      setScrollY(1509);
    }
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch(); // addEventListener 함수를 실행
    return () => {
      window.removeEventListener("scroll", handleFollow); // addEventListener 함수를 삭제
    };
  });
  return (
    <div className="m-0 p-0">
      <ThemeContext.Provider value={{ ScrollY, onHeaderClick }}>
        {/* <Header /> */}
        <FirstPage />
        <SecondPage />
        <ThirdPAge />
        <Foot />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
