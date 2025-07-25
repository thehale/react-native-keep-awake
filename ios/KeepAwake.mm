#import "KeepAwake.h"

@implementation KeepAwake
RCT_EXPORT_MODULE()


- (void)activate {
    // Implementation for activating the keep awake functionality
    NSLog(@"KeepAwake activated");
}

- (void)deactivate {
    // Implementation for deactivating the keep awake functionality
    NSLog(@"KeepAwake deactivated");
}

- (BOOL)isActive {
    // Implementation to check if the keep awake functionality is active
    NSLog(@"Checking if KeepAwake is active");
    return NO;
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeKeepAwakeSpecJSI>(params);
}

@end
