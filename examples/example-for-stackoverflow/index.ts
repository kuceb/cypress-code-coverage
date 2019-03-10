export async function testMe() {
    let x: number = 0;
    for (let i = 0; i < 10; i++) {
        x++;
    }
    // Some comment
    const y: Array<number> = x < 0 ? [1,2,3,4] : [4,3,2,1];
    await new Promise(resolve => setTimeout(resolve, 2000));
    return [...y.map(k => k ** k), 0, 0, 0];
}
