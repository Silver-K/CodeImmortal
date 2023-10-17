import { Application, IApplicationOptions } from "pixi.js";
import { useHooks } from "./useHooks";
import { Ref, isRef, onMounted, unref } from "vue";
import { VoidCb } from "@types";

const enum State {
  BEFORE_INIT,
  AFTER_INIT
}
export function usePixi(cfg?: Partial<IApplicationOptions>) {
  const app = new Application<HTMLCanvasElement>(cfg);
  const hooks = useHooks(['inited']);
  const { onInited, emitInited } = hooks;
  let state = State.BEFORE_INIT;
  const getState = () => {
    return state;
  }
  const toggleInit = (container: HTMLElement) => {
    container.appendChild(app.view);
    emitInited();
    state = State.AFTER_INIT;
  }
  const mount = (el: HTMLElement | Ref<HTMLElement | null>) => {
    if (isRef(el)) {
      onMounted(() => {
        const dom = unref(el);
        if (dom) {
          toggleInit(dom);
        }
      });
      return;
    }
    if (el instanceof HTMLElement) {
      toggleInit(el);
    }
  }
  const afterMounted = (cb: VoidCb) => {
    if (State.AFTER_INIT !== state) {
      onInited(cb); 
    } else {
      cb();
    }    
  }
  const res = {
    ctx: app,
    mount,
    afterMounted,
  }
  Object.defineProperty(res, 'inited', {
    get() {
      return State.AFTER_INIT === getState();  
    }
  });
  return res;
}