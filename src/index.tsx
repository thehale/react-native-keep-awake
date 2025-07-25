import KeepAwake from './NativeKeepAwake';

export function activate(): void {
  KeepAwake.activate();
}

export function deactivate(): void {
  KeepAwake.deactivate();
}

export function isActive(): boolean {
  return KeepAwake.isActive();
}
