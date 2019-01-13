//控制游戏逻辑
import {DataStore} from "./base/DataStore.js";
import {UpPencil} from "./runtime/UpPencil.js";
import {DownPencil} from "./runtime/DownPencil.js";

export class Director {

    static getInstance() {
        if (!Director.instance) {
            Director.instance = new Director();
        }
        return Director.instance;
    }

    constructor() {
        this.dataStore = DataStore.getInstance();
        this.moveSpeed = 2;
    }

    createPencil() {
        const minTop = window.innerHeight / 8;
        const maxTop = window.innerHeight / 2;
        const top = minTop + Math.random() * (maxTop - minTop);
        this.dataStore.get('pencils').push(new UpPencil(top));
        this.dataStore.get('pencils').push(new DownPencil(top));
    }

    run() {
        this.dataStore.get('background').draw();
        this.dataStore.get('land').draw();

        this.dataStore.get('pencils').forEach(function (value) {
            value.draw();
        });

        let timer = requestAnimationFrame(() => this.run());
        //let timer = setInterval(() => this.run(), 1000);
        this.dataStore.put('timer', timer);
        //cancelAnimationFrame(this.dataStore.get('timer'));
    }
}