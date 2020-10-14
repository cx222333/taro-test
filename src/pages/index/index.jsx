import React, { useEffect, useReducer } from 'react'
import { Map } from '@tarojs/components'
import Taro, { getLocation } from '@tarojs/taro'

import './index.scss'

const Test = () => {
    const [{ latitude, longitude, polygons }, dispatch] = useReducer((state, data) => ({ ...state, ...data }), {
        latitude: 0,
        longitude: 0,
        polygons: []
    })

    useEffect(() => {
        getLocation().then(res => {
            const { latitude: lat, longitude: lng } = res

            Taro.showToast({ title: `latitude: ${lat}, longitude: ${lng}`, icon: 'none' })

            const offset = 0.5
            const list = [
                {
                    points: [
                        { latitude: lat - offset, longitude: lng - offset },
                        { latitude: lat - offset, longitude: lng + offset },
                        { latitude: lat + offset, longitude: lng + offset },
                        { latitude: lat + offset, longitude: lng - offset }
                    ],
                    color: '#fc5c1ddd',
                    strokeColor: '#fc5c1ddd',
                    fillColor: '#fc5c1d33'
                }
            ]

            dispatch({ latitude: lat, longitude: lng, polygons: list })
        })
    }, [])

    return <Map latitude={latitude} longitude={longitude} polygons={polygons} />
}

export default Test
