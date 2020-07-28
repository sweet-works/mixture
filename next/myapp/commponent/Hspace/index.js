const SIZE = {
    sm: 10,
    m: 15,
    l: 20,
    xl: 25,
    lg: 30
}
const Hspace = ({ size = 'sm', number }) => {
    return <p style={{ height: number ? (number + 'px') : `${SIZE[size]}px` }} />
}
export default Hspace;