import { TickerCallback } from "pixi.js";
import { onUnmounted, ref } from "vue";
import { UsePixiT } from "./usePixi";

type Cb = TickerCallback<any>;
interface TickerCb {
  id?: string,
  callback: Cb,
}
export function useTicker(pixi: UsePixiT) {
  const tickCount = ref(0);
  const ticker = pixi.ctx.ticker;

  const cbs: TickerCb[] = [];

  const add = (cb: TickerCb) => {
    if (pixi.inited) {
      if (cb.id) {
        remove(cb.id);
      }
      ticker.add(cb.callback);
    } else {
      if (cb.id) {
        remove(cb.id);
      }
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
  const resetTick = () => {
    tickCount.value = 0;
  }
  pixi.afterMounted(() => {
    ticker.add(() => {
      tickCount.value += 1;
    })
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
    tickCount,
    add,
    remove,
    resetTick
  }
}