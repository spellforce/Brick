import * as path from 'path';

export class Position {
    public static readonly LEFT = 'left';
    public static readonly TOP = 'top';
    public static readonly RIGHT = 'right';
    public static readonly Bottom = 'bottom';
}

export class Constants{
    static readonly SET_TOOL :number = 0x01;
    static readonly SET_VIEWPORT_ROOT :number = 0x03;
    static readonly SET_NEW_INSTANCE :number = 0x04;
    static readonly SET_MOVE_INSTANCE :number = 0x05;
    static readonly SET_HOVER_INSTANCE :number = 0x06;
    static readonly SET_DRAG_INSTANCE :number = 0x07;
}

export class Config{
    static debug:boolean = true;
}