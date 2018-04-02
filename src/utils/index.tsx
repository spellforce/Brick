import {createElement} from 'react';
import {Brick} from '../model';

export function brickCreateElement(brick:Brick){
    let childs = null;
    // console.log('brickCreateElement',brick);
    if(brick.type==='base'){
        // console.log('brickCreateElement1',brick);
        // console.log(typeof brick.children);
        if(typeof brick.children === 'object') {
            let children = brick.children as any;
            childs = children.map((item: Brick, key) => {
                item.props = item.props || {};
                // console.log("item",item,'key',key)
                item.props['key'] = key;
                return brickCreateElement(item);
            });
            // console.log(childs)
        }else {
            childs = brick.children;
        }
        return createElement(brick.class,brick.props,childs);
        // return createElement('a',{href:'#'},'xxxx');
    }
}

export function addClass(obj: HTMLElement, cls: string){
    if (!hasClass(obj, cls)) {
        obj.className === "" ? obj.className = `${cls}` : obj.className += ` ${cls}`
    }
}
export function  hasClass(obj: HTMLElement, cls: string){
    return obj.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"))
}
export function  removeClass(obj: HTMLElement, cls: string){
    if (hasClass(obj, cls)) {
        const reg = new RegExp("(\\s|^)" + cls + "(\\s|$)")
        obj.className = obj.className.replace(reg, " ")
    }
}