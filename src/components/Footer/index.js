import './Footer.css'

const Footer = () => {
    return(
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href='facebook.com'>
                            <img src='\images\fb.png' alt=''/>
                        </a>
                    </li>
                    <li>
                        <a href='twitter.com'>
                            <img src='\images\tw.png' alt=''/>
                        </a>
                    </li>
                    <li>
                        <a href='instagram.com'>
                            <img src='\images\ig.png' alt=''/>
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <div className='logo'>
                    <img src='\images\logo.png' alt=''/>
                </div>
            </section>
            <section>
                <div className='credits'>
                    <h4>Desenvolvido por Gabriel D'Avila</h4>
                </div>
            </section>
        </footer>
    )
}

export default Footer