import { useEffect, useState } from 'react';

import "./canvas.css";

type m = {
    x: number,
    y: number
}

const Canvas = () => {

    const [x, setX] = useState(0),
          [y, setY] = useState(0);

    useEffect(() => {

        const canvas = document.getElementById('canvas') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d');

        window.onmousemove = function (e: any) {
            setX(e.pageX);
            setY(e.pageY);
        }

        ctx!.clearRect(0, 0, canvas.width, canvas.height);

        let a = canvas.getBoundingClientRect().left + 78;
        let b = canvas.getBoundingClientRect().top + 54;

        let radian = Math.atan2(x - a, y - b);
        let angle = (radian * (180 / Math.PI) * -1) + 270;

        ctx!.beginPath();
        ctx!.rotate(angle);
        ctx!.arc(
            78, 
            54, 
            15, 
            0, 
            Math.PI * 2
        );
        ctx!.fillStyle = "red";
        ctx!.fill();
        ctx!.closePath();

    });

    return (
        <div className="wrap mt-5">
            <canvas id="canvas" width="350" height="350"></canvas>
        </div>
    )
}

export default Canvas;