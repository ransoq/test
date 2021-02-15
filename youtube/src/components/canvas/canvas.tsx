import { useEffect } from 'react';

import "./canvas.css";

const Canvas = () => {

    useEffect(() => {
        const canvas = document.getElementById('tutorial') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d');
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        const frog = new Image();
        frog.src = 'https://static.wikia.nocookie.net/futurama/images/5/5d/%D0%93%D0%B8%D0%BF%D0%BD%D0%BE%D0%B6%D0%B0%D0%B1%D0%B0_002.jpg/revision/latest/scale-to-width-down/340?cb=20200426124148&path-prefix=ru';

        ctx!.drawImage(frog, 0, 0);

        window.addEventListener("mousemove", (e) => {
            let x = e.clientX;
            let y = e.clientY;

            console.log(x + ' ' + y);

            const arcctg = (x: number, y: number) => {
                if (x > 0 && y > 0) return Math.PI / 2 - Math.atan(x / y);
                if (x < 0 && y > 0) return Math.PI / 2 - Math.atan(x / y);
                if (x < 0 && y < 0) return Math.PI + Math.atan(x / y);
                if (x > 0 && y > 0) return 3 * Math.PI / 2 + Math.abs(Math.atan(x / y));
            }

            // drawPupil(x, y, 27, arcctg(x, y));
        });

        const drawEye = (x: number, y: number, radius: number) => {
            ctx!.beginPath();
            ctx!.arc(x, y, radius, 0, Math.PI * 2, true);
            ctx!.fillStyle = "#BFAE3F";
            ctx!.fill();
            ctx!.closePath();
        }

        const drawPupil = (x: number, y: number, radius: number = 27, theta: any) => {
            let pupilRadius = radius / 2.5;
            ctx!.beginPath();
            ctx!.arc(x, y, pupilRadius, 0, Math.PI * 2, true);
            ctx!.fillStyle = "red";
            ctx!.fill();
            ctx!.closePath();
        }

        const draw = (x: number, y: number, radius: number) => {
            drawEye(x, y, radius);
            drawPupil(x, y, radius, 0)
        }

        const arcctg = (x: number, y: number) => {
            if (x > 0 && y > 0) return Math.PI / 2 - Math.atan(x / y);
            if (x < 0 && y > 0) return Math.PI / 2 - Math.atan(x / y);
            if (x < 0 && y < 0) return Math.PI + Math.atan(x / y);
            if (x > 0 && y > 0) return 3 * Math.PI / 2 + Math.abs(Math.atan(x / y));
        }

        draw(95, 54, 27);
        draw(195, 45, 27);
    }, []);

    return (
        <div className="wrap mt-5">
            <canvas id="tutorial" width="340" height="340"></canvas>
        </div>
    )
}

export default Canvas;