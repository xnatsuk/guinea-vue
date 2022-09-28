import { darkTheme, lightTheme } from 'naive-ui'

export const theme = computed(() => (isDark.value ? darkTheme : lightTheme))

export const configProvider = computed(() => {
  return {
    theme: theme.value,
  }
})
