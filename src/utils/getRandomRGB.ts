export default function getRandomRGBa() {
    // Generates values up to 255. 256 will never be generated
    const R = (Math.random() * 256).toFixed();
    const G = (Math.random() * 256).toFixed();
    const B = (Math.random() * 256).toFixed();
    const alphaChannel = "0." + (Math.random() * 100).toFixed();
    return [R, G, B, alphaChannel];
}
