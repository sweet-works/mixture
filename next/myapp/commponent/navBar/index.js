import './style.less'
const NavBar = (props) => {
const {
    callback,
    title,
    menu,
    colors=[null, null, null]
} = props;
return(
    <div className='navbar'>
        <div className='left' style={colors[0] && {backgroundColor: colors[0]}}>{callback ? <span onClick={() => console.log('点击了返回')}>返回</span> : null}</div>
        <div className='center' style={colors[1] && {backgroundColor: colors[1]}}>{title}</div>
        <div className='right' style={colors[2] && {backgroundColor: colors[2]}}>{menu ? <span onClick={() => console.log('点击了菜单')}>菜单</span> : null}</div>
    </div>
);
}
 export default NavBar;