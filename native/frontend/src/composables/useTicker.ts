import { TickerCallback } from "pixi.js";
import { onUnmounted } from "vue";

type Cb = TickerCallback<any>;
interface TickerCb {
  id?: string,
  callback: Cb,
}
export function useTicker(pixi: any) {
  const ticker = pixi.ctx.ticker;
  const cbs: TickerCb[] = [];
  const add = (cb: TickerCb) => {
    if (pixi.inited) {
      ticker.add(cb.callback);
    } else {
      cbs.push(cb);
    }    
  }
  const remove = (identifier?: string | Cb) => {
    const find = (item: TickerCb) => {
      if (!identifier) {
        return true;
      }
      if ('string' === typeof identifier) {
        return item.id === identifier;
      } 
      if ('function' === typeof identifier) {
        return item.callback === identifier;
      }
    }
    for (let i = cbs.length; i--; ) {
      const e = cbs[i];
      if (find(e)) {
        cbs.splice(i, 1);
        break;
      }
    }
  }
  pixi.afterMounted(() => {
    cbs.forEach((cb) => {
      ticker.add(cb.callback);
    });    
  });
  onUnmounted(() => {
    cbs.forEach((cb) => {
      ticker.remove(cb.callback);
    });
  });
  return {
    add,
    remove
  }
}