import React, { useState } from 'react'
import Card from './Card'
import DataAward from '../../assets/data/award'
import DetailAward from './DetailAward'

const Award = () => {
    const [showDetail, setShowDetail] = useState(false)
    const [indexAward, setIndexAward] = useState(null)

    return (
        <>
            <div className='w-full min-h-screen xl:justify-center container mx-auto flex flex-col gap-10 xl:gap-0 px-5 md:px-10'>
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 place-items-center'>
                    {DataAward.map((item, index) => (
                        <Card
                            key={index}
                            image={item.image}
                            setShowDetail={setShowDetail}
                            indexAward={index}
                            setIndexAward={setIndexAward}
                            delay={index * 0.05}
                        />
                    ))}
                </div>
            </div>
            {showDetail && (
                <DetailAward showDetail={showDetail} setShowDetail={setShowDetail} data={DataAward[indexAward]} />
            )}
        </>
    )
}

export default Award