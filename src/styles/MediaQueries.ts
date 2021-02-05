const breakpoints = [640, 768, 1024, 1280]

/**
 * `640`: sm,
 * `768`: md,
 * `1024`: lg,
 * `1280`: xl
 */
export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`)
