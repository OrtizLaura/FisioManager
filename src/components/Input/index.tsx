import React, { forwardRef, Fragment, Ref } from "react";
import {View, Text, TextInput, TextInputProps, TouchableOpacity} from 'react-native';
import { styles } from "./styles";
import {FontAwesome, MaterialIcons, Octicons} from '@expo/vector-icons'
import { themes } from "../../global/themes";

type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
                     React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
                     React.ComponentType<React.ComponentProps<typeof Octicons>>;

type Props = TextInputProps & {
    IconLeft?: IconComponent,
    IconRight?: IconComponent,
    IconLeftName?: string,
    iconRightName?: string,
    title?: string,
    onIconLeftPress?: () => void,
    onIconRightPress?: () => void
}

export const Input = forwardRef ((Props:Props, ref: Ref<TextInput> | null) =>{
    const {IconLeft, IconRight, IconLeftName, title, iconRightName, onIconLeftPress, onIconRightPress } = Props

    const calculateSizeWidth = () => {
        if (IconLeft && IconRight){
            return '80%'
        } else if (IconLeft || IconRight) {
            return '90%'
        } else {
            return '100%'
        }
    }

    const calculateSizePaddingLeft = () => {
        if (IconLeft && IconRight){
            return 0;
        } else if (IconLeft || IconRight) {
            return 10;
        } else {
            return 20;
        }
    };

    return (
        <Fragment>
        <Text style={styles.titleInput}>{title}</Text>
        <View style={[styles.boxInput, {padding: calculateSizePaddingLeft()}]}>
            {IconLeft && IconLeftName &&(
                <TouchableOpacity onPress={onIconLeftPress}>
                    <IconLeft name={IconLeftName as any} size={20} color={themes.colors.gray} style={styles.Icon} />
                </TouchableOpacity>
            )}
            
            <TextInput
                style={[styles.input, {width: calculateSizeWidth()}]}
                ref={ref}
                {...Props}
            />

            {IconRight && iconRightName &&(
                <TouchableOpacity onPress={onIconRightPress} style={styles.button}>
                    <IconRight name={iconRightName as any} size={20} color={themes.colors.gray} style={styles.Icon} />
                </TouchableOpacity>
            )}
        </View>
        </Fragment>
    )
})