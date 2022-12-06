import { FaClipboardList } from 'react-icons/fa'
import './Info.css';

export default function Info() {
    return (
        <div>
            <div className='info-tittle-container'>
                <h1 className='info-tittle'>Supported Languages</h1>
                <span className='info-icon'>
                    <FaClipboardList />
                </span>
            </div>
            <div className='info-images'>
                <img src='Icons/lang1.png' />
                <img src='Icons/lang2.png' />
            </div>
        </div>
    )
}
