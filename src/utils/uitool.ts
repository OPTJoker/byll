const DeviceWidth = () => {
    return document.documentElement.clientWidth || document.body.clientWidth;
};

const DeviceHeight = () => {
    return document.documentElement.clientHeight || document.body.clientHeight;
};

const getRootFontSize = () => {
    return DeviceWidth() / 10;
};

const SetRootFontSize = () => {
    const dom = document.getElementsByTagName('html')[0];
    const w = DeviceWidth();
    const scale = w > 480 ? 20 : 10;
    dom.style.fontSize = w / scale + 'px';
};

const rem = (px) => {
    const baseRem = 37.5;
    return px / baseRem + 'rem';
};

export { rem, DeviceWidth, DeviceHeight, SetRootFontSize, getRootFontSize };
