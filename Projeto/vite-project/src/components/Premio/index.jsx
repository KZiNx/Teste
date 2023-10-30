import './Premio.css'

function Premio() {

    return (
        <div className='allPremio'>
            <div className='Cartas'>
                <img src='./src/assets/images/trofeu.png' />
                <div>
                    <p>High Quality</p>
                    <p>crafted from top materials</p>
                </div>
            </div>
            <div className='Cartas'>
                <img src='./src/assets/images/selo.png' />
                <div>
                    <p>Warranty Protection</p>
                    <p>Over 2 years</p>
                </div>
            </div>
            <div className='Cartas'>
                <img src='./src/assets/images/mao.png' />
                <div>
                    <p>Free Shipping</p>
                    <p>Order over 150 $</p>
                </div>
            </div>
            <div className='Cartas'>
                <img src='./src/assets/images/suporte.png' />
                <div>
                    <p>24 / 7 Support</p>
                    <p>Dedicated support</p>
                </div>
            </div>
        </div>
    )
}

export default Premio;