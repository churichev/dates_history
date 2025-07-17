export function formatPagination(current: number, total: number): string {
    const pad = (num: number) => String(num).padStart(2, '0');
    return `${pad(current)}/${pad(total)}`;
}
