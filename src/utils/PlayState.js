export default class PlayState {
    static IDLE = 0;
    static PLAYING = 1;
    static ENDED = 2;
}

export class Config {
    static GAME_TILES_CNT = 3;
    static TILE_DISPLAY_WAIT_TIME = 50; // <= in ms
    static AUTO_PLAY_COUNTDOWN = 5; // <= in secs
    static AUTO_END_COUNTDOWN = 10; // <= in secs
}