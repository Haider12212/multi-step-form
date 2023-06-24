import './Finalpage.css'


const Finalpage = () => {
    return (
        <div className="container-finalpage">
            <img src={require('./images/icon-thank-you.svg').default} alt="thank you" className="image" />
            <h1 className='finalText'>Thank you!</h1>
            <p className='finalText-para'>Thanks for confirming your subscription! We hope you have<br />
            fun using our platform. If you ever need support, please feel<br />
            free to email us at support@loremgaming.com.</p>
        </div>
    )
}
export default Finalpage;