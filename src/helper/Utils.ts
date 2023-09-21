const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',]

export const months = (config: any) => {
    const cfg = config || {}
    const count = cfg.count || 12
    const section = cfg.section
    const values = []

    for (let i = 0; i < count; i++) {
        let value = MONTHS[Math.ceil(i) % 12]
        values.push(value.substring(0, section))
    }

    return values
}