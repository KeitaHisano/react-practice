import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./components/ChildArea";
import { CssModules } from "./components/CssModules";
import { Emotion } from "./components/Emotion";
import { InlineStyle } from "./components/InlineStyle";
import { StyledComponents } from "./components/StyledComponents";
import { StyledJsx } from "./components/StyledJsx";
import "./styles.css";

export const Practice = () => {
  // console.log("App");

  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onClickCount = () => {
    setCount(count + 1);
  };

  const onChangeText = (event) => {
    setText(event.target.value);
  };
  const onClickOpen = () => {
    setOpen(!open);
  };
  const onClickClose = useCallback(() => {
    setOpen(false);
  }, []);

  const temp = useMemo(() => {
    return 1 + 3;
  }, []);

  return (
    <>
      <p>復習</p>
      <p>{count}</p>
      <button onClick={onClickCount}> カウントアップ</button>
      <br />
      <br />
      <p>再レンダリング</p>
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
      <br />
      <br />
      <p>CSS Practice</p>
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </>
  );
};
