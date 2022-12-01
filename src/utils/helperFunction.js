
import { showMessage } from 'react-native-flash-message'

export function add(a,b){
    let sum = a+b;
    return sum
}



const showError = (message) => {
    showMessage({
        type: "danger",
        icon: 'danger',
        message
    })
}

const showSuccess = (message) => {
    showMessage({
        type: "success",
        icon: 'success',
        message
    })
}
export {
    showError,
    showSuccess
};