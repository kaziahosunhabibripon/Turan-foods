import React from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity
    
} from "react-native";


import { COLORS, FONTS, icons, SIZES} from "../constants"

const OrderDelivery = ({ route, navigation }) => {
    function renderButtons() {
        return (
            <View
                style={{
                    position: 'absolute',
                    padding: SIZES.padding * 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text style={{
                alignItems: 'center',
                justifyContent: 'center',
                 ...FONTS.h3
                 }}>Order Place successfully</Text>
            </View>

        )
    }

    return (
        <View style={{ flex: 1 }}>
          
            {renderButtons()}
            
        </View>
    )
}

export default OrderDelivery;