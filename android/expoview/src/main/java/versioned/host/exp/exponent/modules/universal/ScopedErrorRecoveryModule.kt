package versioned.host.exp.exponent.modules.universal

import android.content.Context
import expo.modules.errorrecovery.ErrorRecoveryModule
import host.exp.exponent.kernel.ExperienceId

class ScopedErrorRecoveryModule(context: Context, val experienceId: ExperienceId) : ErrorRecoveryModule(context) {
  override fun setRecoveryProps(props: String) {
    mSharedPreferences.edit().putString(experienceId.get(), props).apply()
  }

  override fun consumeRecoveryProps(): String? {
    return mSharedPreferences.getString(experienceId.get(), null)?.let {
      mSharedPreferences.edit().remove(experienceId.get()).apply()
      it
    }
  }
}
