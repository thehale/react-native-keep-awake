#import "KeepAwake.h"

@implementation KeepAwake
RCT_EXPORT_MODULE()


- (void)activate {
    // Stops the screen from dimming or locking
    NSLog(@"Activating KeepAwake");
    dispatch_async(dispatch_get_main_queue(), ^{
        [[UIApplication sharedApplication] setIdleTimerDisabled:YES];
    });
}

- (void)deactivate {
    // Allows the screen to dim or lock
    NSLog(@"Deactivating KeepAwake");
    dispatch_async(dispatch_get_main_queue(), ^{
        [[UIApplication sharedApplication] setIdleTimerDisabled:NO];
    });
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeKeepAwakeSpecJSI>(params);
}

@end
