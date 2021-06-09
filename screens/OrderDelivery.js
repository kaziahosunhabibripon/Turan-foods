import React from 'react';
import { 
    View,
    Text,
    Image,
    TouchableOpacity
} from "react-native";
import { icons, COLORS, SIZES, FONTS } from '../constants';

const OrderDelivery = () => {
    function renderMap(){
        return(
            <View style={{ flex: 1}}>
                <Text style={{ color: COLORS.primary, ...FONTS.h2 }}>
                    Oder Place Successfully
                </Text>
                
            </View>
        )
    }


    return (
        <View style={{flex: 1}}>
            {renderMap()}
        </View>
    )
}

export default OrderDelivery;