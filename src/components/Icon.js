import React from 'react'
import AntIcon from "react-native-vector-icons/AntDesign";
import FontAIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";

const IconMaps = {
    antd: AntIcon,
    fonta: FontAIcon,
    entypo: EntypoIcon,
};

const Icon = (props) => {
    const {name, style, type='antd', size} = props;
    const Icon = IconMaps[type];
    return (
        <Icon name={name} style={style}  size={size} />
    );
};

export default Icon;

