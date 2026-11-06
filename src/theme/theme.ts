export type Theme = 'dark' | 'light'

export const THEME_STORAGE_KEY = 'umair-portfolio-theme-v2'
export const DEFAULT_THEME: Theme = 'light'

export function readStoredTheme(): Theme | null {
  try {
    const value = localStorage.getItem(THEME_STORAGE_KEY)
    if (value === 'light' || value === 'dark') return value
  } catch {
    /* private mode */
  }
  return null
}

export function resolveInitialTheme(): Theme {
  return readStoredTheme() ?? DEFAULT_THEME
}

export function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
  document.documentElement.style.colorScheme = theme
}
