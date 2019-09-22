import React from 'react';
import ARCarDemo from './../../data/AR/ARCarDemo/ARCarDemo'
import {
    ViroARSceneNavigator,
} from 'react-viro';

const apiKey = "185779F9-FAEC-4950-BF69-454D6BDD4EC6";

const arScenes = {
    'ARCarDemo' : ARCarDemo,
};

const ARScreen = props => {
    const {scene} = props;
    const initialScene = {
        scene: arScenes[scene],
    };
    return (
        <ViroARSceneNavigator
            initialScene={initialScene}
            apiKey={apiKey}
            autofocus
        />
    );
};

export default ARScreen;