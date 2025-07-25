package com.keepawake

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule
import android.util.Log

@ReactModule(name = KeepAwakeModule.NAME)
class KeepAwakeModule(reactContext: ReactApplicationContext) :
  NativeKeepAwakeSpec(reactContext) {

  override fun getName(): String {
    return NAME
  }


  override fun activate() {
    // Implementation to keep the device awake
    Log.d(NAME, "activate")
  }

  override fun deactivate() {
    // Implementation to allow the device to sleep
    Log.d(NAME, "deactivate")
  }

  override fun isActive(): Boolean {
    // Implementation to check if the device is set to stay awake
    Log.d(NAME, "isActive")
    return false
  }

  companion object {
    const val NAME = "KeepAwake"
  }
}
