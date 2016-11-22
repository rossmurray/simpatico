const Screen = class Screen {
    constructor(context) {
        const canvas = context.canvas;
        this.canvas = canvas;
        this.context = context;
        this.width = canvas.width;
        this.height = canvas.height;
    }

    static virtualContext(width, height) {
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const context = canvas.getContext("2d");
        return context;
    }

    makeImageData(width, height) {
        const w = width || this.width;
        const h = height || this.height;
        const imageData = this.context.createImageData(w, h);
        return imageData;
    }

    clear(color) {
        this.context.shadowBlur = 0;
        if(!color) {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            return;
        }
        this.context.fillStyle = color;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    resize() {
        const width = this.canvas.clientWidth;
        const height = this.canvas.clientHeight;
        if(this.canvas.width != width || this.canvas.height != height) {
            this.canvas.width = width;
            this.canvas.height = height;
            this.width = width;
            this.height = height;
        }
    }

    drawCircles(circles) {
        for(const circle of circles) {
            drawCircle(this.context, circle.x, circle.y, circle.r, circle.color);
        }
    }

    drawLines(lines) {
        for(const line of lines) {
            drawLine(this.context, line.x, line.y, line.radians, line.length);
        }
    }

    drawRectangles(rectangles) {
        for(const rect of rectangles) {
            this.context.fillStyle = rect.color;
            this.context.fillRect(rect.x, rect.y, rect.width, rect.height);
        }
    }

    drawImageStretch(imageElement) {
        const width = this.canvas.width;
        const height = this.canvas.height;
        this.context.drawImage(imageElement, 0, 0, width, height);
    }
};

function drawCircle(context, x, y, r, fillStyle) {
    context.beginPath();
    context.arc(x, y, r, 0, 2 * Math.PI, false);
    if (fillStyle) {
        context.fillStyle = fillStyle;
    }
    context.fill();
}

function drawLine(context, x, y, length, radians, strokeStyle, lineWidth) {
    var x2 = x + length * Math.cos(radians);
    var y2 = y + length * Math.sin(radians);
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x2, y2);
    if (strokeStyle) {
        context.strokeStyle = strokeStyle;
    }
    if (lineWidth) {
        context.lineWidth = lineWidth;
    }
    context.stroke();
}

export default Screen;