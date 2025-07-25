import NativeKeepAwake from './NativeKeepAwake';
import { useEffect } from 'react';

export function activate(): void {
  NativeKeepAwake.activate();
}

export function deactivate(): void {
  NativeKeepAwake.deactivate();
}

export function useKeepAwake(): void {
  useEffect(() => {
    activate();
    return deactivate;
  }, []);
}

export function KeepAwake() {
  useKeepAwake();
  return null;
}
