import React, { useEffect, useState } from 'react';

function Timer() {
    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(30);
    const [hour, setHour] = useState(12);

    useEffect(() => {
        const interval = setInterval(() => {
            setSec((prevSec) => {
                if (prevSec === 0) {
                    setMin((prevMin) => {
                        if (prevMin === 0) {
                            setHour((prevHour) => {
                                if (prevHour === 0) {
                                    clearInterval(interval);
                                    return 0;
                                }
                                return prevHour - 1;
                            });
                            return 59;
                        }
                        return prevMin - 1;
                    });
                    return 59;
                }
                return prevSec - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ backgroundColor: '#F0FFFF', padding: '5px' }} className='text-center'>
            <p className='text-black text-xl md:text-3xl mt-3'>
                Sale Ends In <b>{`${hour} h: ${min} m: ${sec} s`}</b>
            </p>
        </div>
    );
}

export default Timer;
