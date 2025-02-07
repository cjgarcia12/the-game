import { View, Text } from 'react-native';
import React from 'react';

const Index = () => {
    return (
        <View className="flex-1 bg-[#495057] items-center justify-center">
            <View className="px-8 py-4 bg-[#ADB5BD] rounded-2xl shadow-md">
                <Text className="text-[#212529] text-2xl font-bold text-center mb-4">
                    Welcome to The Game
                </Text>
                <Text className="text-[#495057] text-lg text-center">
                    Close this app immediately.
                    <Text className="font-bold"> Don’t open it again.</Text>
                    If you do... you lose.
                </Text>
            </View>
        </View>
    );
};

export default Index;
