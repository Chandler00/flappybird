//小鸟
import {Sprite} from "../base/Sprite.js";

export class Birds extends Sprite {

    constructor() {
        const image = Sprite.getImage('birds');
        super(image, 0, 0, image.width, image.height,
            0, 0, image.width, image.height);

        //小鸟三种状态数据存储
        //小鸟宽34, 上下边距10, 左右是9
        this.clippingX = [
            9,
            9 + 34 + 18,
            9 + 34 + 18 + 34 + 18
        ];

        this.clippingY = [10, 10, 10];
        this.clippingWidth = [34, 34, 34];
        this.clippingHieght = [24, 24, 24];
        this.birdX = window.innerWidth / 4;
        this.birdsX = [this.birdX, this.birdX, this.birdX];
        this.birdY = window.innerHeight / 2;
        this.birdsY = [this.birdY, this.birdY, this.birdY];
        this.birdWidth = 34;
        this.birddWidth = [this.birdWidth, this.birdWidth, this.birdWidth];
        this.birdHeight = 24;
        this.birdsHeight = [this.birdHeight, this.birdHeight, this.birdHeight];


    }

}