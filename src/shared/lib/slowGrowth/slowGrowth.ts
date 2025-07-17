export function slowGrowth(x: number): number {
    const normalized = (x - 1) / 5;
    const slowed = normalized * normalized;
    return 1 + slowed * 3;
}
