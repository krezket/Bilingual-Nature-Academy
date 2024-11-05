const URL_PREFIX = "https://wih-backend-78d28634cdc0.herokuapp.com"


const API = {
    sendQuote: async (quote) => {
        try {
            const response = await fetch(`${URL_PREFIX}/submit-quote`, {
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

