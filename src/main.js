import * as mainLoop from "mainloop.js";
import Screen from "./core/screen.js";
import Scene from "./scene/scene.js";
import * as timeKeeper from "./core/timeKeeper.js";
import settings from "./settings.js";

var scene;
var screen;

function main() {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    canvas.width = width;
    canvas.height = height;

    screen = new Screen(context);
    scene = new Scene(screen);
    mainLoop.setUpdate(mainUpdate);
    mainLoop.setDraw(mainDraw);
    mainLoop.setEnd(mainEnd);
    mainLoop.start();
}

function mainUpdate(deltaMs) {
    timeKeeper.updateTime(deltaMs);
    scene.update();
}

function mainDraw(interpolationPercentage) {
    screen.resize();
    screen.clear();
    scene.draw();
}

function mainEnd(fps, panic) {
    if(panic) {
        var discardedTime = Math.round(mainLoop.resetFrameDelta());
        console.warn("Main loop panicked, probably because the browser tab was put in the background. Discarding " + discardedTime + "ms");
    }
}

main();