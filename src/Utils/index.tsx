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