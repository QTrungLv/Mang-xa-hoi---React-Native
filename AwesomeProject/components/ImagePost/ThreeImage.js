import { Image, View } from "react-native";


export default function ThreeImage(firstImage, secondImage, threeImage){
    return(
        <View>
            <Image style={styles.first} source={firstImage} />
            
            <View>
                <Image style={styles.second} source={secondImage} />
                <Image style={styles.third} source={threeImage} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    first: {
        
    },
    second, third: {

    }
})