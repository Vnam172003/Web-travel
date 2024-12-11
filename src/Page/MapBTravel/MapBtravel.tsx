const MapBtravel = () => {
  return (
    <div className='w-full h-screen'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.926847603972!2d105.82812341535874!3d21.033368293151343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab71f1c8490f%3A0x2a10b521bb3a3127!2sHanoi%2C%20Vietnam!5e0!3m2!1sen!2s!4v1689164998155!5m2!1sen!2s'
        width='100%'
        height='100%'
        style={{ border: 0 }}
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
        title='Google Maps'
      ></iframe>
    </div>
  )
}

export default MapBtravel
