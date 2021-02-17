import { useEffect, useState } from 'react';

import "./canvas.css";

const Canvas = () => {

    const [mouseX, setX] = useState(0),
        [mouseY, setY] = useState(0);

    useEffect(() => {

        const canvas = document.getElementById('canvas') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d');

        window.onmousemove = function (e: any) {
            setX(e.clientX);
            setY(e.clientY);
        }

        ctx!.clearRect(0, 0, canvas.width, canvas.height);

        const radius = 45,
            firstX = 78,
            firstY = 57,
            secX = 226,
            secY = 45;

        const drawEye = (x: number, y: number, radius: number) => {
            ctx!.beginPath();
            ctx!.arc(x, y, radius, 0, Math.PI * 2, true);
            ctx!.fillStyle = "#CDB908";
            ctx!.fill();
            ctx!.closePath();
        }

        const drawPupil = (x: number, y: number, radius: number) => {
            let pupilRadius = radius / 2.5;
            let a = mouseX - canvas.getBoundingClientRect().left - x;
            let b = mouseY - canvas.getBoundingClientRect().top - y;
            let theta = Math.atan2(b, a);
            let px = x + Math.cos(theta) * pupilRadius / 1.9;
            let py = y + Math.sin(theta) * pupilRadius / 1;

            ctx!.beginPath();
            ctx!.arc(
                px,
                py,
                pupilRadius,
                0,
                Math.PI * 2,
                true
            );
            ctx!.fillStyle = "red";
            ctx!.fill();
            ctx!.closePath();

            drawBorder(px, py, pupilRadius);
        }

        const drawBorder = (x: number, y: number, radius: number) => {
            ctx!.beginPath();
            ctx!.arc(x, y, radius, 0, 2 * Math.PI);
            ctx!.stroke();
        }

        // eyes
        drawEye(firstX, firstY, radius);
        drawEye(secX, secY, radius);
        drawBorder(firstX, firstY, radius);
        drawBorder(secX, secY, radius);

        // pupil
        drawPupil(firstX, firstY, radius);
        drawPupil(secX, secY, radius);


    });

    return (
        <div className="wrap mt-5">
            <canvas id="canvas" width="600" height="460"></canvas>
        </div>
    )
}

export default Canvas;