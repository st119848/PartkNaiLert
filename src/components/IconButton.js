import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Icon from "./Icon";

const IconButton = (props) => {
    const {onPress, iconName='md-menu', type, style, size=30} = props;
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{ paddingHorizontal: 10 }}>
                <Icon style={style} name={iconName} size={size} type={type} />
            </View>
        </TouchableOpacity>
    );
};

export default IconButton;

