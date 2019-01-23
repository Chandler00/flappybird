//初始化整个游戏的精灵，作为游戏开始的入口
import {ResourceLoader} from "./js/base/ResourceLoader.js";
import {BackGround} from "./js/runtime/BackGround.js";
import {DataStore} from "./js/base/DataStore.js";
import {Director} from "./js/Director.js";
import {Land} from "./js/runtime/Land.js";
import {Birds} from "./js/player/Birds.js";
import {StartButton} from "./js/player/StartButton.js";
import {Score} from "./js/player/Score.js";

export class Main {

    constructor() {
        this.canvas = document.getElementById('game_canvas');
        this.ctx = this.canvas.getContext('2d');
        this.dataStore = DataStore.getInstance();
        this.director = Director.getInstance();
        const loader = ResourceLoader.create();
        loader.onloaded(map => this.onResourceFirstLoaded(map));
        //Director.getInstance();
    }

    onResourceFirstLoaded(map) {

        this.dataStore.ctx = this.ctx;
        this.dataStore.res = map;
        this.init();
    }

    init() {

        this.director.isGameOver = false;

        this.dataStore
            .put('pencils', [])
            .put('background', BackGround)
            .put('land', Land)
            .put('birds', Birds)
            .put('score', Score)
            .put('startButton', StartButton);
        this.registerEvent();
        //在游戏逻辑之前
        this.director.createPencil();
        this.director.run();

    }

    registerEvent() {
        this.canvas.addEventListener('touchstart', e => {
            //事件冒泡屏蔽，事件冒泡是指先触发机制由内而外
            e.preventDefault();
            if (this.director.isGameOver) {
                console.log('Game start')
                this.init();
            } else {
                this.director.birdsEvent();
            }
        });
    }

}