// const URL_PREFIX = "https://wih-backend-78d28634cdc0.herokuapp.com"
// const URL_PREFIX = "https://wih-backend-78d28634cdc0.herokuapp.com"

const API = {
    sendForm: async (form) => {
        try {
            const response = await fetch(`${URL_PREFIX}/submit-form`, {
                method: 'POST',
                body: JSON.stringify(quote),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                return await response.json()
            } else {
                alert('Error sending email')
            }
        } catch (error) {
            console.log(error)
        }
    },
}

export default API;
