import settingsReducer from "./settingsReducer";
import { settingsChanged } from "./settingsActions";

const inputSettings = {
  verified: false,
  following: true,
  defaultInfo: false,
  withLink: true,
  withTruncatedText: false
}



it('should save settings to state', () => {
  expect(settingsReducer(null, settingsChanged(inputSettings))).toEqual(inputSettings)
});