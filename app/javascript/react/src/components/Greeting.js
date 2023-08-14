import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import { fetchMessage } from '../redux/greetings/greetingsSlice';

const Greeting = () => {

    const dispatch = useDispatch()

    const { message, loading } = useSelector((store)=> store.greetings )

    useEffect(()=>{
        dispatch(fetchMessage())
    }, [])

  return (
    <div className='greeting'>
        {loading && <Loader />}
        <div class="card">
        <div class="card-header">
            Message for today
        </div>
        <div class="card-body">
            <blockquote class="blockquote mb-0">
            <p>{message.message}</p>
            </blockquote>
        </div>
        
        </div>
    </div>
  )
}

export default Greeting