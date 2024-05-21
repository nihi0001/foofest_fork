import React from 'react'

function RotateBanner() {
    return (
        <div className="bg-Hotpink text-xl relative flex overflow-x-hidden font-medium mt-12">
            <div className="py-4 animate-marquee whitespace-nowrap text-White">
                <span className="mx-12">FOO FESTIVAL</span>
                <span className="mx-12">JULY 3RD - 10TH 2024</span>
                <span className="mx-12">FOO FESTIVAL</span>
                <span className="mx-12">JULY 3RD - 10TH 2024</span>
                <span className="mx-12">FOO FESTIVAL</span>
                <span className="mx-12 ">JULY 3RD - 10TH 2024</span>
                <span className="mx-12">FOO FESTIVAL</span>
                <span className="mx-12">JULY 3RD - 10TH 2024</span>
            </div>


        </div>
    )
}

export default RotateBanner
