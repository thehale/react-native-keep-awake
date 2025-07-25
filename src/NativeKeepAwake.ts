import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  activate(): void;
  deactivate(): void;
  isActive(): boolean;
}

export default TurboModuleRegistry.getEnforcing<Spec>('KeepAwake');
