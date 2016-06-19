"use strict";
const PI = Math.PI;

let canvas = document.getElementById('workspace');
let ctx = canvas.getContext('2d');
let drawCanvasPuzzle = ()=> {
    ctx.strokeStyle = 'white';
    ctx.beginPath();
    for (let i = 1; i < 4; ++i) {
        ctx.moveTo(i * 100, 0);
        ctx.lineTo(i * 100, 400);

        ctx.moveTo(0, i * 100);
        ctx.lineTo(400, i * 100);
    }
    ctx.stroke();

    ctx.beginPath();
    for (let i = 1; i < 4; ++i) {
        ctx.moveTo(i * 100, 45);
        ctx.quadraticCurveTo(i * 100 + 7, 35, i * 100 + 20, 50);
        ctx.moveTo(i * 100, 55);
        ctx.quadraticCurveTo(i * 100 + 7, 65, i * 100 + 20, 50);
        ctx.moveTo(i * 100, 145);
        ctx.quadraticCurveTo(i * 100 + 7, 135, i * 100 + 20, 150);
        ctx.moveTo(i * 100, 155);
        ctx.quadraticCurveTo(i * 100 + 7, 165, i * 100 + 20, 150);
        ctx.moveTo(i * 100, 245);
        ctx.quadraticCurveTo(i * 100 - 7, 235, i * 100 - 20, 250);
        ctx.moveTo(i * 100, 255);
        ctx.quadraticCurveTo(i * 100 - 7, 265, i * 100 - 20, 250);
        ctx.moveTo(i * 100, 345);
        ctx.quadraticCurveTo(i * 100 - 7, 335, i * 100 - 20, 350);
        ctx.moveTo(i * 100, 355);
        ctx.quadraticCurveTo(i * 100 - 7, 365, i * 100 - 20, 350);
    }
    ctx.stroke();

    ctx.beginPath();
    for (let i = 1; i < 4; ++i) {
        ctx.moveTo(345, i * 100);
        ctx.quadraticCurveTo(335, i * 100 + 7, 350, i * 100 + 20);
        ctx.moveTo(355, i * 100);
        ctx.quadraticCurveTo(365, i * 100 + 7, 350, i * 100 + 20);
        ctx.moveTo(245, i * 100);
        ctx.quadraticCurveTo(235, i * 100 + 7, 250, i * 100 + 20);
        ctx.moveTo(255, i * 100);
        ctx.quadraticCurveTo(265, i * 100 + 7, 250, i * 100 + 20);
        ctx.moveTo(45, i * 100);
        ctx.quadraticCurveTo(35, i * 100 - 7, 50, i * 100 - 20);
        ctx.moveTo(55, i * 100);
        ctx.quadraticCurveTo(65, i * 100 - 7, 50, i * 100 - 20);
        ctx.moveTo(145, i * 100);
        ctx.quadraticCurveTo(135, i * 100 - 7, 150, i * 100 - 20);
        ctx.moveTo(155, i * 100);
        ctx.quadraticCurveTo(165, i * 100 - 7, 150, i * 100 - 20);
    }
    ctx.stroke();

    ctx.beginPath();
    for (let i = 1; i < 4; ++i) {
        for (let j = 0; j < 4; ++j) {
            ctx.clearRect(i * 100, j * 100 + 45, 1, 10);
            ctx.clearRect(j * 100 + 45, i * 100, 10, 1);
        }
    }
    ctx.stroke();
}

let img = new Image();
img.src = './images/canvasPuzzle.jpeg';
img.onload = ()=> {
    ctx.drawImage(img, 0, 0);
    drawCanvasPuzzle();
};