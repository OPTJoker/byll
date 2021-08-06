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
    dom.style.fontSize = DeviceWidth() / 10 + 'px';
};

const rem = (px) => {
    const baseRem = 168;
    return px / baseRem + 'rem';
};

export { rem, DeviceWidth, DeviceHeight, SetRootFontSize, getRootFontSize };
