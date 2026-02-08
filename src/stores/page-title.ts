import { create } from 'zustand'
import { useShallow } from 'zustand/react/shallow'

export interface PageTitleState {
  label: string
  topic?: string
}

interface PageTitleStore extends PageTitleState {
  setPageTitle: (state: PageTitleState) => void
}

export const usePageTitleStore = create<PageTitleStore>(set => ({
  label: 'general',
  topic: undefined,
  setPageTitle: state => set(state),
}))

export function usePageTitle() {
  return usePageTitleStore(
    useShallow(s => ({ label: s.label, topic: s.topic }))
  )
}

export function useSetPageTitle() {
  return usePageTitleStore(s => s.setPageTitle)
}
