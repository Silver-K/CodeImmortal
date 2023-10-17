import { VoidCb } from "@types";
import { pascalToCamelCase } from '../shared';

type Cb = VoidCb;
type HookController = Record<string, any>;
interface HookCreater {
  on: (key: string, cb: Cb) => void,
  emit: (key: string, params?: any) => void,
}

const defineHooks = (keys: string[]) => {
  const map = new Map<string, Cb[]>();
  keys.forEach((key) => map.set(key, []));
  return map;
} 

const generateHookOn = (key: string, ctx: HookCreater) => {
  return (cb: Cb) => {
    ctx.on(key, cb);
  }  
}
const generateHookEmit = (key: string, ctx: HookCreater) => {
  return () => {
    ctx.emit(key);
  }
}
const setupHookCreater = (keys: string[]) => {
  const newHooks = defineHooks(keys);
  const on = (key: string, cb: Cb) => {
    const cbs = newHooks.get(key);
    if (cbs && Array.isArray(cbs)) {
      cbs.push(cb);  
    } else {
      const newArr: Cb[] = [cb];
      newHooks.set(key, newArr);
    }    
  }
  const emit = (key: string) => {
    const cbs = newHooks.get(key);
    if (cbs && Array.isArray(cbs)) {
      cbs.forEach((cb) => {
        cb();
      })
    }
  }
  const o = Object.create(null);
  o.on = on;
  o.emit = emit;
  return o;
}
const getHookController = (keys: string[]) => {
  const o = setupHookCreater(keys);
  const c: HookController = Object.create(null);
  keys.forEach((key) => {
    const onKey = pascalToCamelCase(`on-${key}`);
    const emitKey = pascalToCamelCase(`emit-${key}`);
    c[onKey] = generateHookOn(key, o);
    c[emitKey] = generateHookEmit(key, o);
  });
  return c;
}
export function useHooks(keys: string[]) {
  return getHookController(keys);
}