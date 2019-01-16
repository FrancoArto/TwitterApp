export const SETTINGS_NOTIFICATIONS_YES = 'SETTINGS_NOTIFICATIONS_YES'
export const SETTINGS_NOTIFICATIONS_NO = 'SETTINGS_NOTIFICATIONS_NO'

export const settingsNotificationsYes = (id) => ({
  type: SETTINGS_NOTIFICATIONS_YES,
  payload: id
})

export const settingsNotificationsNo = (id) => ({
  type: SETTINGS_NOTIFICATIONS_NO,
  payload: id
})