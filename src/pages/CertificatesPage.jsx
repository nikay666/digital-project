import React from 'react'
import { Slider } from '../components/Slider'
import { useFetch } from '../hooks'


const certificateUrl = '/data/certificates.json'

const CertificatesPage = props => {
    const certificateList = useFetch(certificateUrl)
    console.log(certificateList)

    return (
        <main className='main container'>
            <h1 className='h1'>сертификаты<br/><span className='h1__bold'>КОМПАНИИ</span></h1>
            <Slider
                slides={certificateList}
                slidesType='list'
                slidesCount={3}

            />
        </main>
    )
}


export default CertificatesPage
