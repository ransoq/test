import { useEffect } from 'react';

import "./canvas.css";

type m = {
    x: number,
    y: number
}

const Canvas = () => {

    const m: m = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
    };

    window.onmousemove = function(e: any) {
        m.x = e.clientX;
        m.y = e.clientY;
    }

    useEffect(() => {

        const drawEye = (x: number, y: number) => {
            ctx!.beginPath();
            ctx!.arc(x, y, 45, 0, Math.PI * 2, true);
            ctx!.fillStyle = "#BFAE3F";
            ctx!.fill();
            ctx!.closePath();
        };

        // TODO rotate
        const drawPupil = (x: number, y: number, angle: number) => {
            ctx!.beginPath();
            ctx!.arc(x, y, 20, 0, Math.PI * 2, true);
            ctx!.fillStyle = "red";
            ctx!.rotate(angle);
            ctx!.fill();
            ctx!.closePath();
        };

        // init
        const canvas = document.getElementById('canvas') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d');
        const frog = new Image();
        frog.src = 'https://content.spiceworksstatic.com/service.community/p/post_images/0000342654/5c421b5f/attached_image/Hypnor.jpg';

        // clear
        ctx!.clearRect(0, 0, canvas.width, canvas.height);
        // update
        ctx!.drawImage(frog, 0, 0);
        drawEye(78, 54);
        drawEye(225, 45);
        drawPupil(78, 54, 0);
        drawPupil(225, 45, 0);

        // render

    });

        // const draw = () => {
        //     const canvas = document.getElementById('tutorial') as HTMLCanvasElement;
        //     const ctx = canvas.getContext('2d');

        //     let x = (canvas.getBoundingClientRect().left) + (canvas.clientWidth / 2);
        //     let y = (canvas.getBoundingClientRect().top) + (canvas.clientHeight / 2);

        //     ctx!.clearRect(0, 0, canvas.width, canvas.height);

        //     console.log(x + ' ' + y);
        // }

    return (
        <div className="wrap mt-5">
            <canvas id="canvas" width="350" height="350"></canvas>
        </div>
    )
}

export default Canvas;