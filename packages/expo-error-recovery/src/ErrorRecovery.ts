import ExpoErrorRecovery from './ExpoErrorRecovery';

let recoveredPropsToSave: String | null = null;
const globalHandler = ErrorUtils.getGlobalHandler();
// ErrorUtils came from react-native
// https://github.com/facebook/react-native/blob/1151c096dab17e5d9a6ac05b61aacecd4305f3db/Libraries/vendor/core/ErrorUtils.js#L25
ErrorUtils.setGlobalHandler(async (error, isFatal) => {
  if (ExpoErrorRecovery.saveRecoveryProps) {
    await ExpoErrorRecovery.saveRecoveryProps(recoveredPropsToSave);
  }
  globalHandler(error, isFatal);
});

export const recoveredProps = _getRecoveredProps();

export function setRecoveryProps(props: { [key: string]: any }): void {
  recoveredPropsToSave = JSON.stringify(props);
}

function _getRecoveredProps(): { [key: string]: any } | null {
  if (ExpoErrorRecovery.recoveredProps) {
    return JSON.parse(ExpoErrorRecovery.recoveredProps);
  }
  return null;
}
