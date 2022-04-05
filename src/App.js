import { useEffect, useState, useRef } from "react";
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

  const FirstPageRef = useRef(null);
  const SecondPageRef = useRef(null);
  const ThirdPageRef = useRef(null);
  const FootRef = useRef(null);
  const HeaderRef = useRef(null);

  const [HeightOfComponents, setHeightOfComponents] = useState({
    Header: 0,
    First: 0,
    Second: 0,
    Third: 0,
    Foot: 0,
  });

  useEffect(() => {
    setHeightOfComponents({
      Header: HeaderRef.current.clientHeight,
      First: FirstPageRef.current.clientHeight,
      Second: SecondPageRef.current.clientHeight,
      Third: ThirdPageRef.current.clientHeight,
      Foot: FootRef.current.clientHeight,
    });
  }, []);

  const onHeaderClick = (e) => {
    let {
      target: { id },
    } = e;
    if (id === "first") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setScrollY(0);
    }
    if (id === "second") {
      window.scrollTo({
        top: HeightOfComponents.First - HeightOfComponents.Header,
        behavior: "smooth",
      });
      setScrollY(872);
    }
    if (id === "third") {
      window.scrollTo({
        top:
          HeightOfComponents.Second +
          HeightOfComponents.First +
          50 -
          HeightOfComponents.Header,
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
        <FirstPage FirstPageRef={FirstPageRef} HeaderRef={HeaderRef} />
        <SecondPage SecondPageRef={SecondPageRef} />
        <ThirdPAge ThirdPageRef={ThirdPageRef} />
        <Foot FootRef={FootRef} />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
