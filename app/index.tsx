import { View, Text } from 'react-native';
import React from 'react';

const Index: React.FC = () => {
    return (
        <View className="flex-1 bg-[#18181b] items-center justify-center">
            <View className="px-8 py-4 bg-[#3f3f46] rounded-2xl shadow-md">
                <Text className="text-white text-2xl font-bold text-center mb-4">
                    Welcome to The Game
                </Text>
                <Text className="text-[#e4e4e7] text-lg text-center">
                    Close this app immediately.
                    <Text className="font-bold"> Don’t open it again.</Text>
                    If you do... you lose.
                </Text>
            </View>
        </View>
    );
};

export default Index;
