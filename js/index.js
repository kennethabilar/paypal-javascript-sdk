paypal.Buttons({
    style: {
        layout: 'horizontal',
        color: 'blue',
        shape: 'pill',
        label: 'pay',
        height: 40
    },
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: '3.00'
                    }
                }
            ]
        })
    },
    onApprove: async function(data, actions) {
        let capture = await actions.order.capture();

        alert(`Transaction completed for ${capture.payer.name.given_name}`);
    }
}).render('#paypal-button-container');
