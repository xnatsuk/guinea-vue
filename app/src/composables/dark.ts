export const isDark = useDark({
  storageKey: 'theme',
})

export const toggleDark = useToggle(isDark)
