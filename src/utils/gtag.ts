// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string, gtagId: any) => {
  window.gtag && window.gtag('config', gtagId, {
    page_path: url
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: any) => {
  window.gtag && window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  })
}
