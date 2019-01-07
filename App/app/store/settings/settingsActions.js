export const SETTINGS_CHANGED = 'SETTINGS_CHANGED'

export const settingsChanged = (settings) => ({
  type: SETTINGS_CHANGED,
  payload: settings
})