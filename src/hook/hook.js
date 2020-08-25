import React, { useState, useEffect, useRef, useMemo } from 'react';

function HookMy(props) {
    const [count, setState] = useState(0);
    useEffect((s) => {
        console.log(1);
    })

    const [count1, setState1] = useState(0);
    useEffect((s) => {
        console.log(2);
        return () => {  //相当于componentWillUnmount
            console.log('我试试-组件销毁会不会调用这个函数');
        }
    })

    const [count2, setState2] = useState(0);
    useEffect((s) => {
        console.log(3);
    })
    // var s = ""

    var dom = useRef({ sta: 4132 }); // 初始化数据

    // useMemo()

    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <h2>useState</h2>

                <div onClick={() => {
                    setState(count + 1)
                }}>
                    <button>点击</button>
                我是点击里的东西 {count}
                </div>

                <div onClick={() => {
                    setState1(count1 + 1)
                }}>
                    <button>点击1</button>
                我是点击1里的东西 {count1}
                </div>

                <div onClick={() => {
                    setState2(count2 + 1)
                }}>
                    <button>点击2</button>
                我是点击2里的东西 {count2}
                </div>

                <div refs='sss'> </div>
            </div>
            <div style={{ textAlign: "center" }}>
                <h2>useRef</h2>
                <div onClick={() => {
                    console.log(dom);
                }}>click</div>
                <div ref={dom}>
                    测试dom
                </div>
            </div>
        </div>
    )
}

export default HookMy