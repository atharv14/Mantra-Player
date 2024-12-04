/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

export default {
  light: {
    text: '#000',
    background: '#fff',
    primary: '#3B82F6',    // Blue for headers and active tabs
    record: '#F87171',     // Red for record button
    upload: '#4ADE80',     // Green for upload button
    secondary: '#6B7280',  // Gray for inactive tabs
    card: '#F3F4F6',      // Light gray for cards
    border: '#E5E7EB',    // Border color
  },
  dark: {
    text: '#fff',
    background: '#1F2937',
    primary: '#60A5FA',
    record: '#EF4444',
    upload: '#34D399',
    secondary: '#9CA3AF',
    card: '#374151',
    border: '#4B5563',
  },
} as const;

export type ColorScheme = 'light' | 'dark';
