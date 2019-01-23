//计分器
import {DataStore} from "../base/DataStore.js";

export class Score {

    constructor(){
        this.ctx = DataStore.getInstance().ctx;
        this.scoreNumber = 0;
        //因为canvas刷新快，需要变量控制加分，一次一分
        this.isScore=true;

    }

    draw(){

        this.ctx.font = '25px Arial';
        this.ctx.fillStyle = '#f06bff';
        this.ctx.fillText(
            this.scoreNumber,
            window.innerWidth/2,
            window.innerHeight/18,
            1000
        );
    }
    
}