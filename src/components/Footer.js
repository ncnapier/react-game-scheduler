const Footer = (appName, companyName) => {
  return (
    <footer className='footer'>
        <p>Open-Play</p>
        <p>nattydevs 2022</p>
    </footer>
  )
}

Footer.defaultProps = {
    appName: 'Open-Play',
    companyName: 'nattydevs 2022'
}
export default Footer