// Copyright © 2018 650 Industries. All rights reserved.

#import <UMCore/UMExportedModule.h>
#import <UMCore/UMModuleRegistryConsumer.h>

static NSString * const USER_DEFAULTS_KEY = @"expo.errorRecovery";

@interface EXErrorRecoveryModule : UMExportedModule

- (BOOL)setRecoveryProps:(NSString *)props;

- (NSString *)consumeRecoveryProps;

@end
