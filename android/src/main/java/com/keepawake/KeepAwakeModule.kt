package com.keepawake

import android.util.Log
import android.view.WindowManager
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule

@ReactModule(name = KeepAwakeModule.NAME)
class KeepAwakeModule(reactContext: ReactApplicationContext) :
  NativeKeepAwakeSpec(reactContext) {

  private val context = reactContext

  override fun getName(): String {
    return NAME
  }

  /**
   * Stops the screen from dimming or locking
   */
  override fun activate() {
    Log.d(NAME, "Activating KeepAwake")
    context.currentActivity?.runOnUiThread {
      context.currentActivity?.window?.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON)
    }
  }

  /**
   * Allows the screen to dim or lock
   */
  override fun deactivate() {
    Log.d(NAME, "Deactivating KeepAwake")
    context.currentActivity?.runOnUiThread {
      context.currentActivity?.window?.clearFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON)
    }
  }

  companion object {
    const val NAME = "KeepAwake"
  }
}
