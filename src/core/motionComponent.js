import * as timeKeeper from "./timeKeeper.js";
import wave from "./wave.js";

const MotionComponent = class MotionComponent {
    constructor(config) {
        if(!config) { config = {}; }
        //todo: error if position doesn't exist
        const xpos = config.position.x || 0;
        const ypos = config.position.y || 0;
        const mass = config.mass || 100;
        const maxVelocity = config.maxVelocity || 10;
        const maxAcceleration = config.maxAcceleration || 1;

        this.xpos = xpos;
        this.ypos = ypos;
        this.xvel = 0;
        this.yvel = 0;
        this.targetX = xpos;
        this.targetY = ypos;
        this.moving = false;
        this.idleSince = 0;

        this.mass = mass;
        this.maxVelocity = maxVelocity;
        this.maxAcceleration = maxAcceleration;
        this.move = nullMovement;
    }

    update() {
        this.move();
    }

    /**
     * successive updates will move from current position, straight to destination,
     * arriving in tripLengthMs milliseconds. At each time step, position will be a linear
     * interpolation between the start and end points, according to time passed.
     * A motion function x => y can be supplied, which maps the constant linear movement
     * to some other curve (eg smoothstep). motion does not affect the path to the
     * destination, only the movement upon it. For example, passing a triangle function to
     * motion would result in a constant-speed, round-trip to the destination and back.
     * After tripLengthMs has passed, movement will cease.
     */
    fixedAnimateToward(destination, tripLengthMs, motion) {
        if(tripLengthMs <= 0) {
            this.moving = false;
            this.move = nullMovement;
        }
        const moveMap = motion || wave.linear;
        const xorigin = this.xpos;
        const yorigin = this.ypos;
        const xtarget = destination.x;
        const ytarget = destination.y;
        const beginTime = timeKeeper.getTotalTimeMs();
        const moveFunc = () => {
            const now = timeKeeper.getTotalTimeMs();
            const percentDone = (now - beginTime) / tripLengthMs;
            if(percentDone >= 1.0) {
                this.xpos = xtarget;
                this.ypos = ytarget;
                this.move = nullMovement;
                this.moving = false;
                this.idleSince = now;
            }
            else {
                const value = moveMap(percentDone);
                const newX = xorigin + (xtarget - xorigin) * value;
                const newY = yorigin + (ytarget - yorigin) * value;
                this.xpos = newX;
                this.ypos = newY;
            }
        };
        this.move = moveFunc;
        this.moving = true;
        this.idleSince = 0;
    }

    /**
     * successive updates will accelerate toward the supplied destination.
     * acceleration amount is defined by maxAcceleration.
     */
    followPoint(destination) {

    }

    /**
     * update position according to supplied acceleration, and this object's velocity.
     */
    accelerateInDirection(acceleration) {

    }
};

function nullMovement() {}

export default MotionComponent;