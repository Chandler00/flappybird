//控制游戏逻辑
import {DataStore} from "./base/DataStore.js";

export class Director {

    static getInstance() {
        if (!Director.instance) {
            Director.instance = new Director();
        }
        return Director.instance;
    }

    constructor() {
        this.dataStore = DataStore.getInstance();
    }

    run() {
        const backgroundSprite = this.dataStore.get('background');
        backgroundSprite.draw();
    }
}