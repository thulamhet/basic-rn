import React, {useEffect} from "react";
import {StyleSheet, Text, useColorScheme, View} from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";

const Section: React.FC<{
    title?: string;
    description?: string;
}> = ({children, title, description}) => {
    const isDarkMode = useColorScheme() === 'dark';

    useEffect(() => {
        const interval = setInterval(() => {
            console.log(Math.random());
        }, 1000)
        return () => {
            clearInterval(interval);
        }
    }, [])

    return (
        <View style={styles.sectionContainer}>
            <Text
                style={[
                    styles.sectionTitle,
                    {
                        color: 'blue',
                    },
                ]}>
                {title}
            </Text>
            <Text
                style={[
                    styles.sectionTitle,
                    {
                        color: 'red'
                    },
                ]}>
                {description}
            </Text>
            <Text
                style={[
                    styles.sectionDescription,
                    {
                        color: isDarkMode ? Colors.light : Colors.dark,
                    },
                ]}>
                {children}
            </Text>
        </View>
    );
};


const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: 'pink'
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default Section;
