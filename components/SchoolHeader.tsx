import Image from 'next/image'
import React from 'react'

export default function SchoolHeader() {
    return (
        <div className="flex items-center justify-between ">
            <Image src={"/bhimrao-logo.png"} alt="bhimrao" width={75} height={75} />

            <div className="text-center">
                <p className="text-sm font-semibold">
                    SC & ST Welfare Department, Government of Bihar
                </p>
                <h1 className="text-2xl font-bold mb-1">Dr. Bhimrao Ambedkar Residential School, Dhamaura</h1>
                <p className="text-sm text-gray-600">
                    📧  bras.dhamaura@gmail.com । 📞  8406908683  | UDISE CODE :- 10011403906 | SCHOOL CODE :- 35376, 54083

                </p>

            </div>
            <Image src={"/bihar-govt-log.png"} alt="bhimrao" width={75} height={75} />
        </div>

    )
}
