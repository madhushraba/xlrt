import React, { useRef, useEffect } from "react";
import "./App.css";

function App() {
  const ref = useRef(null);
  // const refLeft = useRef(null);
  // const refTop = useRef(null);
  const refRight = useRef(null);
  const refBottom = useRef(null);

  useEffect(() => {
    const resizeableEle = ref.current;
    const styles = window.getComputedStyle(resizeableEle);
    let width = parseInt(styles.width, 10);
    let height = parseInt(styles.height, 100);
    let x = 0;
    let y = 0;

    resizeableEle.style.top = "0px";
    resizeableEle.style.left = "0px";

    // Right resize
    const onMouseMoveRightResize = (event) => {
      const dx = event.clientX - x;
      x = event.clientX;
      width = width + dx;
      resizeableEle.style.width = `${width}px`;
    };

    const onMouseUpRightResize = (event) => {
      document.removeEventListener("mousemove", onMouseMoveRightResize);
    };

    const onMouseDownRightResize = (event) => {
      x = event.clientX;
      resizeableEle.style.left = styles.left;
      resizeableEle.style.right = null;
      document.addEventListener("mousemove", onMouseMoveRightResize);
      document.addEventListener("mouseup", onMouseUpRightResize);
    };

    // Top resize
    const onMouseMoveTopResize = (event) => {
      const dy = event.clientY - y;
      height = height - dy;
      y = event.clientY;
      resizeableEle.style.height = `${height}px`;
    };

    const onMouseUpTopResize = (event) => {
      document.removeEventListener("mousemove", onMouseMoveTopResize);
    };

    const onMouseDownTopResize = (event) => {
      y = event.clientY;
      const styles = window.getComputedStyle(resizeableEle);
      resizeableEle.style.bottom = styles.bottom;
      resizeableEle.style.top = null;
      document.addEventListener("mousemove", onMouseMoveTopResize);
      document.addEventListener("mouseup", onMouseUpTopResize);
    };

    // Bottom resize
    const onMouseMoveBottomResize = (event) => {
      const dy = event.clientY - y;
      height = height + dy;
      y = event.clientY;
      resizeableEle.style.height = `${height}px`;
    };

    const onMouseUpBottomResize = (event) => {
      document.removeEventListener("mousemove", onMouseMoveBottomResize);
    };

    const onMouseDownBottomResize = (event) => {
      y = event.clientY;
      const styles = window.getComputedStyle(resizeableEle);
      resizeableEle.style.top = styles.top;
      resizeableEle.style.bottom = null;
      document.addEventListener("mousemove", onMouseMoveBottomResize);
      document.addEventListener("mouseup", onMouseUpBottomResize);
    };

    
    // Add mouse down event listener
    const resizerRight = refRight.current;
    resizerRight.addEventListener("mousedown", onMouseDownRightResize);
    // const resizerTop = refTop.current;
    // resizerTop.addEventListener("mousedown", onMouseDownTopResize);
    const resizerBottom = refBottom.current;
    resizerBottom.addEventListener("mousedown", onMouseDownBottomResize);
    // const resizerLeft = refLeft.current;
    // resizerLeft.addEventListener("mousedown", onMouseDownLeftResize);

    return () => {
      resizerRight.removeEventListener("mousedown", onMouseDownRightResize);
      // resizerTop.removeEventListener("mousedown", onMouseDownTopResize);
      resizerBottom.removeEventListener("mousedown", onMouseDownBottomResize);
      // resizerLeft.removeEventListener("mousedown", onMouseDownLeftResize);
    };
  }, []);

  return (
    <div className="container">
      <div ref={ref} className="resizeable">
        <div className="resizer resizer-l">ubyvtrcfedxsa</div>
        <div className="resizer resizer-t"></div>
        <h1>madhush</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
          laboriosam labore optio quisquam nostrum ullam eveniet deserunt natus.
          Incidunt, nam quam veniam temporibus molestiae tempora quas maxime
          blanditiis est? Libero veniam velit provident consequuntur ex?
          Voluptatibus cumque fuga voluptatem non totam! Corrupti, rerum
          reprehenderit!
        </p>
        p
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quae sit sapiente similique sed alias, et minima sint aut nulla quasi dolor deleniti dignissimos praesentium aliquid accusamus consequuntur aliquam deserunt nobis veritatis ullam voluptatum? Libero et, inventore mollitia laudantium autem dignissimos illum molestias nihil, dicta eum ipsa explicabo voluptas officiis consequuntur aliquam assumenda nemo, reiciendis exercitationem atque minima suscipit illo. Labore nostrum eligendi distinctio et aperiam incidunt.
        <div ref={refRight} className="resizer resizer-r">
          <div className="circle">
             &gt;
          </div>
        </div>
        {/* <div className="round-box"></div> */}
        <div ref={refBottom} className="resizer resizer-b"></div>
      </div>
    </div>
  );
}

export default App;
