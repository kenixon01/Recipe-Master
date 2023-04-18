export default code = () => {
    let n = (Math.random() * 0xfffffff * 100000000).toString(16);
    return n.slice(0, 8);
}
