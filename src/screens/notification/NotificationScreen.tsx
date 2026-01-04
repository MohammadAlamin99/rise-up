import { Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './style'
import Notification from '../../components/svg/Notification'
import SeconderyButton from '../../components/SeconderyButton'
import PrimaryButton from '../../components/PrimaryButton'


const NotificationScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.titleText}>Notification</Text>
      <View style={styles.container}>
        <Notification/>
        <Text style={styles.text}>Rise Up & Stay On Track!</Text>
        <Text style={styles.text2}>Turn on notifications to get workout alerts, daily motivation, and progress milestones.</Text>
      </View>
      {/* button */}
      <View>
        <SeconderyButton/>
        <View style={styles.buttonContainer}>
            <PrimaryButton
                handleNext={() => {}}
                text="Grant Access"
                button={styles.button}
                textButton={styles.buttonText}
            />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default NotificationScreen