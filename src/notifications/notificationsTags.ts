import OneSignal from "react-native-onesignal";

export function tagUserInfoCreate() {
    OneSignal.sendTags({
        'user_name': 'Gabriel',
        'user_email': 'gabrielhenlc@gmail.com'
    })
}